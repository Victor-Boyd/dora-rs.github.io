"use strict";(self.webpackChunkdora_rs_github_io=self.webpackChunkdora_rs_github_io||[]).push([[5894],{6042:n=>{n.exports=JSON.parse('{"blogPosts":[{"id":"/rust-python","metadata":{"permalink":"/blog/rust-python","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/rust-python.md","source":"@site/blog/rust-python.md","title":"Rust-Python FFI","description":"Rust-Python FFI.","date":"2024-04-08T15:23:26.000Z","tags":[],"readingTime":10.8,"hasTruncateMarker":false,"authors":[{"name":"Haixuan Xavier Tao","title":"Maintainer of dora-rs","url":"https://github.com/haixuantao","imageURL":"https://github.com/haixuantao.png","key":"haixuan"}],"frontMatter":{"authors":"haixuan","title":"Rust-Python FFI","description":"Rust-Python FFI."},"unlisted":false},"content":"Writing a rust library that is usable in multiple languages is not easy...\\n\\nThis blogpost recollects things I have encountered while building [wonnx](https://github.com/webonnx/wonnx) and [dora-rs](https://github.com/dora-rs/dora). I am going to use Rust-Python FFI through `pyo3` as an example. You can then extrapolate those issues to other languages FFI.\\n\\n## Foreign Function Interface\\n\\nA foreign function interface (FFI) is an interface used to share data from different languages. \\n\\nBy default, python might not know what a Rust `u16` is, so an interface is needed to make the two languages communicate.\\n\\n![](https://hackmd.io/_uploads/S1qiK8hRh.png)\\n> Image from [WebAssembly Interface Types: Interoperate with All the Things!](https://hacks.mozilla.org/2019/08/webassembly-interface-types/)\\n\\nBuilding interfaces is not easy. Most of the time, we have to use the C-ABI to build our FFI as it is the common denominator between languages.\\n\\nThankfully, there are FFI libraries that create interfaces for us and we can just focus on the important stuff such as the logic, algorithm, and so on.\\n\\nHowever, those FFI libraries might have limitations. This is what we\'re going to discuss.\\n\\nOne example of such FFI library is [`pyo3`](https://github.com/PyO3/pyo3). [`pyo3`](https://github.com/PyO3/pyo3) is one of the most used Rust-Python binding and creates FFIs for you. All we have to do is wrap our function with a `#[pyfunction]` and that will make it usable in Python.\\n\\n## Interfacing Arrays\\n\\nIn this blog post, I\'m going to build a toy Rust-Python project with `pyo3` to illustrate the issues I have faced.\\n\\nYou can try this blogpost at home by forking the [blogpost repository](https://github.com/haixuanTao/blogpost_ffi).\\n\\nIf you want to start from scratch, you can create a new project with:\\n\\n```bash\\nmkdir blogpost_ffi\\nmaturin init # pyo3\\n```\\n\\nThe default project will looks like this:\\n\\n```rust\\nuse pyo3::prelude::*;\\n\\n/// Formats the sum of two numbers as string.\\n#[pyfunction]\\nfn sum_as_string(a: usize, b: usize) -> PyResult<String> {\\n    Ok((a + b).to_string())\\n}\\n\\n/// A Python module implemented in Rust. The name of this function must match\\n/// the `lib.name` setting in the `Cargo.toml`, else Python will not be able to\\n/// import the module.\\n#[pymodule]\\nfn string_sum(_py: Python<\'_>, m: &PyModule) -> PyResult<()> {\\n    m.add_function(wrap_pyfunction!(sum_as_string, m)?)?;\\n    Ok(())\\n}\\n```\\nWe can call the function as follows:\\n```bash\\nmaturin develop\\npython -c \\"import blogpost_ffi; print(blogpost_ffi.sum_as_string(1,1))\\"\\n# Return: \\"2\\" \\n```\\n\\nIn the above example, `pyo3` is going to create FFIs to make Python integer interpretable as a Rust `usize` without additional work. \\n\\nHowever, automatically interpreted types might not be the most optimized implementation.\\n\\n\\n### Implementation 1: Default\\n\\nLet\'s imagine that, we want to play with arrays, we want to receive an array input and return an array output between Rust and Python.\\nA default inplementation, would look like this:\\n\\n\\n```rust    \\n#[pyfunction]\\nfn create_list(a: Vec<&PyAny>) -> PyResult<Vec<&PyAny>> {\\n    Ok(a)\\n}\\n\\n#[pymodule]\\nfn blogpost_ffi(_py: Python, m: &PyModule) -> PyResult<()> {\\n    m.add_function(wrap_pyfunction!(sum_as_string, m)?)?;\\n    m.add_function(wrap_pyfunction!(create_list, m)?)?;\\n    Ok(())\\n}\\n\\n```\\n\\n#### > Calling `create_list` for a very large list like: `value = [1] * 100_000_000`  is going to return in **2.27s** :tractor: \\n\\nThat\'s quite slow... The reason being is that this list is going to be interpret one element at a time in a loop. We can do better by trying to use all elements at the same time.\\n\\n> Check [test_script.py](https://github.com/haixuanTao/blogpost_ffi/blob/main/test_script.py) for details on how the function is called.\\n\\n### Implementation 2: PyBytes\\n\\nLet\'s imagine that our array is a C-contiguous array that can be represented as a [`PyBytes`](https://docs.python.org/3/library/stdtypes.html?highlight=bytes#bytes). The code can be optimized by casting the inputs and output as a `PyBytes`:\\n```rust\\n#[pyfunction]\\nfn create_list_bytes<\'a>(py: Python<\'a>, a: &\'a PyBytes) -> PyResult<&\'a PyBytes> {\\n    let s = a.as_bytes();\\n\\n    let output = PyBytes::new_with(py, s.len(), |bytes| {\\n        bytes.copy_from_slice(s);\\n        Ok(())\\n    })?;\\n    Ok(output)\\n}\\n```\\n\\n#### > For the same list input, `create_list_bytes` returns in **78 milliseconds**. That\'s **30x** better :racehorse: \\n\\n\\nThe speedup comes from the possibility to copy the memory range instead of iterating each element and to read without copying.\\n\\nNow the issue is that:\\n- `PyBytes` is only available in Python meaning that if we plan to have other languages, we will have to replicate this for each language.\\n- `PyBytes` might also probably need to be reconverted into other useful types.\\n- `PyBytes` needs a copy to be created.\\n\\nWe can try to solve this with [Apache Arrow](https://arrow.apache.org/).\\n\\n### Implementation 3: [Apache Arrow](https://arrow.apache.org/)\\n\\nApache Arrow is a universal memory format available in many languages. \\n\\nThe same function in `arrow` would look like this:\\n```rust \\n#[pyfunction]\\nfn create_list_arrow(py: Python, a: &PyAny) -> PyResult<Py<PyAny>> {\\n    let arraydata = arrow::array::ArrayData::from_pyarrow(a).unwrap();\\n\\n    let buffer = arraydata.buffers()[0].as_slice();\\n    let len = buffer.len();\\n\\n    // Zero Copy Buffer reference counted\\n    let arc_s = Arc::new(buffer.to_vec());\\n    let ptr = NonNull::new(arc_s.as_ptr() as *mut _).unwrap();\\n    let raw_buffer = unsafe { arrow::buffer::Buffer::from_custom_allocation(ptr, len, arc_s) };\\n    let output = arrow::array::ArrayData::try_new(\\n        arrow::datatypes::DataType::UInt8,\\n        len,\\n        None,\\n        0,\\n        vec![raw_buffer],\\n        vec![],\\n    )\\n    .unwrap();\\n\\n    output.to_pyarrow(py)\\n}\\n\\n```\\n\\n\\n#### > Same list returns in **33 milliseconds** . That\'s **2x** better than `PyBytes` :racehorse::racehorse: \\n\\n\\nThis is due to having zero copy when sending back the result. The zero-copying is safe because we are reference-counting the array. The array will be deallocating once all reference has been removed. \\n\\nThe benefits of `arrow` is:\\n- to make zero-copy achievable, scaling better with bigger data.\\n- being reusable in other languages. We only have to replace the last line of the function with the export to the other languages. \\n- having many types description including `List`,`Mapping` and `Struct`.\\n- being directly usable in `numpy`, `pandas`, and `pytorch` with zero-copy transmutation.\\n\\n## Debugging\\n\\nDealing with efficient Interface is not the only challenge of bridging multiple languages. We also have to deal with cross-language debugging. \\n\\n### `.unwrap()`\\n\\nOur current implementation uses `.unwrap()`. However, this will panic the whole Python process if there is an error. \\n\\n#### > Example error:\\n```bash\\nthread \'<unnamed>\' panicked at \'called `Result::unwrap()` on an `Err` value: PyErr { type: <class \'TypeError\'>, value: TypeError(\'Expected instance of pyarrow.lib.Array, got builtins.int\'), traceback: None }\', src/lib.rs:45:62\\nnote: run with `RUST_BACKTRACE=1` environment variable to display a backtrace\\nTraceback (most recent call last):\\n  File \\"/home/peter/Documents/work/blogpost_ffi/test_script.py\\", line 79, in <module>\\n    array = blogpost_ffi.create_list_arrow(1)\\npyo3_runtime.PanicException: called `Result::unwrap()` on an `Err` value: PyErr { type: <class \'TypeError\'>, value: TypeError(\'Expected instance of pyarrow.lib.Array, got builtins.int\'), traceback: None }\\n```\\n\\n### [eyre](https://github.com/eyre-rs/eyre)\\n\\nEyre is an easy idiomatic error handling library for Rust applications. We can use eyre by wrapping our `pyo3` project with the `pyo3/eyre` feature flag, to replace all our `.unwrap()` with a `.context(\\"our context\\")?`. This will transform unrecoverable errors into recoverable Python errors while giving details about our errors.\\n\\n#### > Same error as above but with `eyre` which gives a better looking error message:\\n```bash\\nCould not convert arrow data\\n\\nCaused by:\\n    TypeError: Expected instance of pyarrow.lib.Array, got builtins.int\\n\\nLocation:\\n    src/lib.rs:75:50\\n```\\n\\nImplementation details:\\n```rust\\n#[pyfunction]\\nfn create_list_arrow_eyre(py: Python, a: &PyAny) -> Result<Py<PyAny>> {\\n    let arraydata =\\n        arrow::array::ArrayData::from_pyarrow(a).context(\\"Could not convert arrow data\\")?;\\n\\n    let buffer = arraydata.buffers()[0].as_slice();\\n    let len = buffer.len();\\n\\n    // Zero Copy Buffer reference counted\\n    let arc_s = Arc::new(buffer.to_vec());\\n    let ptr = NonNull::new(arc_s.as_ptr() as *mut _).context(\\"Could not create pointer\\")?;\\n    let raw_buffer = unsafe { arrow::buffer::Buffer::from_custom_allocation(ptr, len, arc_s) };\\n    let output = arrow::array::ArrayData::try_new(\\n        arrow::datatypes::DataType::UInt8,\\n        len,\\n        None,\\n        0,\\n        vec![raw_buffer],\\n        vec![],\\n    )\\n    .context(\\"could not create arrow arraydata\\")?;\\n\\n    output\\n        .to_pyarrow(py)\\n        .context(\\"Could not convert to pyarrow\\")\\n}\\n\\n```\\n\\n### Python traceback with `eyre`\\n\\nI will mention that you might lose the Python traceback error when calling Python code from a Rust code.\\n\\nI recommend using the following custom traceback method to have a descriptive error:\\n```rust\\n#[pyfunction]\\nfn call_func_eyre(py: Python, func: Py<PyAny>) -> Result<()> {    \\n    let _call_python = func.call0(py).context(\\"function called failed\\")?;\\n    Ok(())\\n}\\n\\nfn traceback(err: pyo3::PyErr) -> eyre::Report {\\n    let traceback = Python::with_gil(|py| err.traceback(py).and_then(|t| t.format().ok()));\\n    if let Some(traceback) = traceback {\\n        eyre::eyre!(\\"{traceback}\\\\n{err}\\")\\n    } else {\\n        eyre::eyre!(\\"{err}\\")\\n    }\\n}\\n\\n#[pyfunction]\\nfn call_func_eyre_traceback(py: Python, func: Py<PyAny>) -> Result<()> {\\n    let _call_python = func\\n        .call0(py)\\n        .map_err(traceback) // this will gives python traceback.\\n        .context(\\"function called failed\\")?;\\n    Ok(())\\n}\\n```\\n\\n#### > Example error with no custom traceback:\\n\\n```\\n---Eyre no traceback---\\neyre no traceback says: function called failed\\n\\nCaused by:\\n    AssertionError: I have no idea what is wrong\\n\\nLocation:\\n    src/lib.rs:89:39\\n------\\n```\\n\\n#### > Better errors with custom traceback:\\n\\n```\\n---Eyre traceback---\\neyre traceback says: function called failed\\n\\nCaused by:\\n    Traceback (most recent call last):\\n      File \\"/home/peter/Documents/work/blogpost_ffi/test_script.py\\", line 96, in abc\\n        assert False, \\"I have no idea what is wrong\\"\\n\\n    AssertionError: I have no idea what is wrong\\n\\nLocation:\\n    src/lib.rs:96:9\\n------\\n```\\n\\nWith the traceback, we can quickly identify the root error. \\n\\n## Memory management\\n\\nLet\'s take another example, and imagine that we need to create arrays within a loop:\\n\\n```rust\\n/// Unbounded memory growth\\n#[pyfunction]\\nfn unbounded_memory_growth(py: Python) -> Result<()> {\\n    for _ in 0..10 {\\n        let a: Vec<u8> = vec![0; 40_000_000];\\n        let _ = PyBytes::new(py, &a);`\\n        \\n        std::thread::sleep(Duration::from_secs(1));\\n    }\\n\\n    Ok(())\\n```\\n\\n#### > Calling this function will consume 440MB of memory. :-1: \\n\\nWhat happened is that `pyo3` memory model keeps all Python variables in memory until the GIL is released.\\n\\nTherefore, if we create variables in a `pyfunction` loop, all temporary variables are going to be kept until the GIL is released. \\n\\nThis is due to `pyfunction` locking the GIL by default.\\n\\nBy understanding the GIL-based memory model, we can use a scoped GIL to have the expected behaviour:\\n\\n```rust\\n#[pyfunction]\\nfn bounded_memory_growth(py: Python) -> Result<()> {\\n    py.allow_threads(|| {\\n        for _ in 0..10 {\\n            Python::with_gil(|py| {\\n                let a: Vec<u8> = vec![0; 40_000_000];\\n                let _bytes = PyBytes::new(py, &a);\\n            \\n                std::thread::sleep(Duration::from_secs(1));\\n            });\\n        }\\n    });\\n\\n    // or\\n    \\n    for _ in 0..10 {\\n        let pool = unsafe { py.new_pool() };\\n        let py = pool.python();\\n\\n        let a: Vec<u8> = vec![0; 40_000_000];\\n        let _bytes = PyBytes::new(py, &a);\\n\\n        std::thread::sleep(Duration::from_secs(1));\\n    }\\n\\n    Ok(())\\n}\\n```\\n\\n#### > Calling this function will consume 80MB of memory. :thumbsup: \\n\\n> [More info can be found here](https://pyo3.rs/main/memory.html#gil-bound-memory)\\n\\n> [Possible fix in Pyo3 0.21!](https://github.com/PyO3/pyo3/issues/3382)\\n>\\n\\n## Race condition\\n\\nLet\'s take another example, and imagine that we need to process data in different threads:\\n\\n```rust\\n/// Function GIL Lock\\n#[pyfunction]\\nfn gil_lock() {\\n    let start_time = Instant::now();\\n    std::thread::spawn(move || {\\n        Python::with_gil(|py| println!(\\"This threaded print was printed after {:#?}\\", &start_time.elapsed()));\\n    });\\n\\n    std::thread::sleep(Duration::from_secs(10));\\n}\\n```\\n\\n#### > This threaded print was printed after 10.0s. :cry: \\n\\nWhen using Python with `pyo3`, we have to make sure to know exactly when the GIL is locked or unlocked to avoid race conditions. \\n\\nIn the example above, the issue is that by default `pyo3` is going to lock the GIL in the main function thread, therefore blocking the spawned thread that is waiting for the GIL.\\n\\nIf we use the GIL in the main function thread or release the GIL in the main function thread, there is no issue.\\n\\n```rust\\n/// No gil lock\\n#[pyfunction]\\nfn gil_unlock() {\\n    let start_time = Instant::now();\\n    std::thread::spawn(move || {\\n        std::thread::sleep(Duration::from_secs(10));\\n    });\\n\\n    Python::with_gil(|py| println!(\\"1. This was printed after {:#?}\\", &start_time.elapsed()));\\n\\n    // or\\n\\n    let start_time = Instant::now();\\n    std::thread::spawn(move || {\\n        Python::with_gil(|py| println!(\\"2. This was printed after {:#?}\\", &start_time.elapsed()));\\n    });\\n    Python::with_gil(|py| {\\n        py.allow_threads(|| {\\n            std::thread::sleep(Duration::from_secs(10));\\n        })\\n    });\\n}\\n```\\n#### > \\"1\\" was printed after 32\xb5s and \\"2\\" was printed after 80\xb5s, so there was no race condition. :smile: \\n\\n## Tracing\\n\\nAs we can see, being able to measure the time spent when interfacing can be very valuable to identify bottlenecks. \\n\\nBut measuring the time spent manually as we did before can be tedious. \\n\\nWhat we can do is use a tracing library to do it for us. [Opentelemetry](https://opentelemetry.io/) can help us build a distributed observable system capable of bridging multiple languages. [Opentelemetry](https://opentelemetry.io/) can be used for tracing, metrics and logs.\\n\\nFor example, if we add:\\n```rust \\n/// No gil lock\\n#[pyfunction]\\nfn global_tracing(py: Python, func: Py<PyAny>) {\\n    // global::set_text_map_propagator(opentelemetry_jaeger::Propagator::new());\\n    global::set_text_map_propagator(TraceContextPropagator::new());\\n\\n    // Connect to Jaeger Opentelemetry endpoint\\n    // Start a new endpoint with:\\n    // docker run -d -p6831:6831/udp -p6832:6832/udp -p16686:16686 jaegertracing/all-in-one:latest\\n    let _tracer = opentelemetry_jaeger::new_agent_pipeline()\\n        .with_endpoint(\\"172.17.0.1:6831\\")\\n        .with_service_name(\\"rust_ffi\\")\\n        .install_simple()\\n        .unwrap();\\n\\n    let tracer = global::tracer(\\"test\\");\\n\\n    // Parent Trace, first trace\\n    let _ = tracer.in_span(\\"parent_python_work\\", |cx| -> Result<()> { \\n        std::thread::sleep(Duration::from_secs(1));\\n        \\n        let mut map = HashMap::new();\\n        global::get_text_map_propagator(|propagator| propagator.inject_context(&cx, &mut map));\\n\\n        let output = func\\n            .call1(py, (map,))\\n            .map_err(traceback)\\n            .context(\\"function called failed\\")?;\\n        let out_map: HashMap<String, String> = output.extract(py).unwrap();\\n        let out_context = global::get_text_map_propagator(|prop| prop.extract(&out_map));\\n\\n        std::thread::sleep(Duration::from_secs(1));\\n\\n        let _span = tracer.start_with_context(\\"after_python_work\\", &out_context); // third trace\\n\\n        Ok(())\\n    });\\n}\\n```\\n\\n\\nAnd the following, in the Python code:\\n```python\\ndef abc(cx):\\n    propagator = TraceContextTextMapPropagator()\\n    context = propagator.extract(carrier=cx)\\n\\n    with tracing.tracer.start_as_current_span(\\n        name=\\"Python_span\\", context=context\\n    ) as child_span:\\n        child_span.add_event(\\"in Python!\\")\\n        output = {}\\n        tracing.propagator.inject(output)\\n        time.sleep(2)\\n    return output\\n```\\n\\nWe will get the following traces:\\n\\n![](/img/blogpost_ffi.png)\\n\\nUsing this we can measure the time spent when interfacing languages, identify lock issues, and with the combination of logs and metrics, reduce the complexity of multi-language libraries.\\n\\n# [dora-rs](https://github.com/dora-rs/dora)\\n\\nHopefully, this small blog post should help you identify FFI issues. \\n\\nAll optimization above have already been implemented within [dora-rs](https://github.com/dora-rs/dora) that lets you build fast and simple dataflows using Rust, Python, C and C++.\\n\\nYou\'re very welcome to check out [dora-rs](https://github.com/dora-rs/dora) if bridging languages in a dataflow is your usecase.\\n\\nWe just recently opened a Discord and you can reach out there for literally any question, even just for a quick chat: https://discord.gg/DXJ6edAtym\\n\\nI\'m also going to present this FFI work at [GOSIM Workshop in Shanghai on the 23rd of Sept 2023](https://workshop2023.gosim.org/schedule#auto)!\\n\\nFor more info on `dora-rs`:\\n- Github: https://github.com/dora-rs/dora\\n- Website: https://dora.carsmos.ai/\\n- Discord: https://discord.gg/XqhQaN8P"}]}')}}]);