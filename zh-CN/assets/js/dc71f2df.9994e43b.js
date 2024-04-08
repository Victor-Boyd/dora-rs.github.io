"use strict";(self.webpackChunkdora_rs_github_io=self.webpackChunkdora_rs_github_io||[]).push([[2102],{397:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>i,contentTitle:()=>d,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>t});var o=r(4848),l=r(8453);const a={},d="Dora C++ Dataflow Example",s={id:"examples/c++-dataflow/README",title:"Dora C++ Dataflow Example",description:"This example shows how to create dora operators and custom nodes with C++.",source:"@site/docs/examples/c++-dataflow/README.md",sourceDirName:"examples/c++-dataflow",slug:"/examples/c++-dataflow/",permalink:"/zh-CN/docs/examples/c++-dataflow/",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/dora-rs/zh-CN",tags:[],version:"current",frontMatter:{}},i={},t=[{value:"Compile and Run",id:"compile-and-run",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"dora-c-dataflow-example",children:"Dora C++ Dataflow Example"}),"\n",(0,o.jsx)(n.p,{children:"This example shows how to create dora operators and custom nodes with C++."}),"\n",(0,o.jsxs)(n.p,{children:["Dora does not provide a C++ API yet, but we can create adapters for either the C or Rust API. The ",(0,o.jsx)(n.code,{children:"operator-rust-api"})," and ",(0,o.jsx)(n.code,{children:"node-rust-api"})," folders implement an example operator and node based on dora's Rust API, using the ",(0,o.jsx)(n.code,{children:"cxx"})," crate for bridging. The ",(0,o.jsx)(n.code,{children:"operator-c-api"})," and ",(0,o.jsx)(n.code,{children:"node-c-api"})," show how to create operators and nodes based on dora's C API. Both approaches work, so you can choose the API that fits your application better."]}),"\n",(0,o.jsx)(n.h2,{id:"compile-and-run",children:"Compile and Run"}),"\n",(0,o.jsxs)(n.p,{children:["To try it out, you can use the ",(0,o.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:r(2124).A+"",children:(0,o.jsx)(n.code,{children:"run.rs"})})," binary. It performs all required build steps and then starts the dataflow. Use the following command to run it: ",(0,o.jsx)(n.code,{children:"cargo run --example cxx-dataflow"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"For a manual build, follow these steps:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Create a ",(0,o.jsx)(n.code,{children:"build"})," folder in this directory (i.e., next to the ",(0,o.jsx)(n.code,{children:"node.c"})," file)"]}),"\n",(0,o.jsxs)(n.li,{children:["Build the ",(0,o.jsx)(n.code,{children:"cxx-dataflow-example-node-rust-api"})," and ",(0,o.jsx)(n.code,{children:"cxx-dataflow-example-operator-rust-api"})," crates:","\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"cargo build -p cxx-dataflow-example-node-rust-api --release\ncargo build -p cxx-dataflow-example-operator-rust-api --release\n"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["Compile the ",(0,o.jsx)(n.code,{children:"dora-node-api-c"})," crate into a static library.","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Run ",(0,o.jsx)(n.code,{children:"cargo build -p dora-node-api-c --release"})]}),"\n",(0,o.jsxs)(n.li,{children:["The resulting staticlib is then available under ",(0,o.jsx)(n.code,{children:"../../target/release/libdora-node-api-c.a"}),"."]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["Compile the ",(0,o.jsx)(n.code,{children:"node-c-api/main.cc"})," (e.g. using ",(0,o.jsx)(n.code,{children:"clang++"}),") and link the staticlib","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["For example, use the following command:","\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"clang++ node-c-api/main.cc <FLAGS> -std=c++14 -ldora_node_api_c -L ../../target/release --output build/node_c_api\n"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["The ",(0,o.jsx)(n.code,{children:"<FLAGS>"})," depend on the operating system and the libraries that the C node uses. The following flags are required for each OS:","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Linux: ",(0,o.jsx)(n.code,{children:"-lm -lrt -ldl -pthread"})]}),"\n",(0,o.jsxs)(n.li,{children:["macOS: ",(0,o.jsx)(n.code,{children:"-framework CoreServices -framework Security -l System -l resolv -l pthread -l c -l m"})]}),"\n",(0,o.jsxs)(n.li,{children:["Windows:","\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"-ladvapi32 -luserenv -lkernel32 -lws2_32 -lbcrypt -lncrypt -lschannel -lntdll -liphlpapi\n-lcfgmgr32 -lcredui -lcrypt32 -lcryptnet -lfwpuclnt -lgdi32 -lmsimg32 -lmswsock -lole32\n-lopengl32 -lsecur32 -lshell32 -lsynchronization -luser32 -lwinspool\n-Wl,-nodefaultlib:libcmt -D_DLL -lmsvcrt\n"})}),"\n","Also: On Windows, the output file should have an ",(0,o.jsx)(n.code,{children:".exe"})," extension: ",(0,o.jsx)(n.code,{children:"--output build/c_node.exe"})]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["Compile the ",(0,o.jsx)(n.code,{children:"operator-c-api/operator.cc"})," file into a shared library.","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["For example, use the following commands:","\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"clang++ -c operator-c-api/operator.cc -std=c++14 -o build/operator_c_api.o -fPIC\nclang++ -shared build/operator_c_api.o -o build/liboperator_c_api.so\n"})}),"\n","Omit the ",(0,o.jsx)(n.code,{children:"-fPIC"})," argument on Windows. Replace the ",(0,o.jsx)(n.code,{children:"liboperator_c_api.so"})," name with the shared library standard library prefix/extensions used on your OS, e.g. ",(0,o.jsx)(n.code,{children:".dll"})," on Windows."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Build the dora coordinator and runtime:"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Build the ",(0,o.jsx)(n.code,{children:"dora-coordinator"})," executable using ",(0,o.jsx)(n.code,{children:"cargo build -p dora-coordinator --release"})]}),"\n",(0,o.jsxs)(n.li,{children:["Build the ",(0,o.jsx)(n.code,{children:"dora-runtime"})," executable using ",(0,o.jsx)(n.code,{children:"cargo build -p dora-runtime --release"})]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Run the dataflow:"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Start the ",(0,o.jsx)(n.code,{children:"dora-coordinator"}),", passing the paths to the dataflow file and the ",(0,o.jsx)(n.code,{children:"dora-runtime"})," as arguments:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"../../target/release/dora-daemon --run-dataflow dataflow.yml ../../target/release/dora-runtime\n"})}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},2124:(e,n,r)=>{r.d(n,{A:()=>o});const o=r.p+"assets/files/run-a294cafcc46087d217ed5419479bc5b9.rs"},8453:(e,n,r)=>{r.d(n,{R:()=>d,x:()=>s});var o=r(6540);const l={},a=o.createContext(l);function d(e){const n=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:d(e.components),o.createElement(a.Provider,{value:n},e.children)}}}]);