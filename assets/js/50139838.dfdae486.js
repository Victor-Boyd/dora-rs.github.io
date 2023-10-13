"use strict";(self.webpackChunkdora_rs_github_io=self.webpackChunkdora_rs_github_io||[]).push([[1303],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=d(n),c=r,h=s["".concat(p,".").concat(c)]||s[c]||m[c]||o;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[s]="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},1258:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var a=n(7462),r=(n(7294),n(3905));const o={},i="Python API",l={unversionedId:"api/python-api",id:"api/python-api",title:"Python API",description:"\x3c!---",source:"@site/docs/api/python-api.md",sourceDirName:"api",slug:"/api/python-api",permalink:"/docs/api/python-api",draft:!1,editUrl:"https://github.com/dora-rs/dora-rs.github.io/edit/main/docs/api/python-api.md",tags:[],version:"current",frontMatter:{}},p={},d=[{value:"Operator",id:"operator",level:2},{value:"Events",id:"events",level:3},{value:"<code>send_output</code>",id:"send_output",level:3},{value:"Example",id:"example",level:3},{value:"Custom Node",id:"custom-node",level:2},{value:"<code>Node()</code>",id:"node",level:3},{value:"<code>.next()</code>",id:"next",level:3},{value:"<code>.send_output(output_id, data, metadata)</code>",id:"send_outputoutput_id-data-metadata",level:3},{value:"<code>.dataflow_descriptor()</code>",id:"dataflow_descriptor",level:3},{value:"<code>.__version__</code>",id:"__version__",level:3}],u={toc:d},s="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(s,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"python-api"},"Python API"),(0,r.kt)("h2",{id:"operator"},"Operator"),(0,r.kt)("p",null,"The operator API is a framework for you to implement. The implemented operator will be managed by ",(0,r.kt)("inlineCode",{parentName:"p"},"dora"),". This framework enable us to make optimisation and provide advanced features. It is the recommended way of using ",(0,r.kt)("inlineCode",{parentName:"p"},"dora"),"."),(0,r.kt)("p",null,"An operator requires an ",(0,r.kt)("inlineCode",{parentName:"p"},"on_event")," method and requires to return a ",(0,r.kt)("inlineCode",{parentName:"p"},"DoraStatus")," , depending of it needs to continue or stop."),(0,r.kt)("h3",{id:"events"},"Events"),(0,r.kt)("p",null,"There is currently 4 event types that the on_event method receives:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"STOP"),": meaning that the operator was signalled to stop."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"INPUT"),": meannig that an input was received.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"You can use ",(0,r.kt)("inlineCode",{parentName:"li"},"dora_event['id']"),", to get the id. "),(0,r.kt)("li",{parentName:"ul"},"You can use ",(0,r.kt)("inlineCode",{parentName:"li"},"dora_event['data']"),", to get the data as bytes. "),(0,r.kt)("li",{parentName:"ul"},"You can use ",(0,r.kt)("inlineCode",{parentName:"li"},"dora_event['value']"),", to get the data as a zero-copy Uint8 arrow array. "),(0,r.kt)("li",{parentName:"ul"},"You can use ",(0,r.kt)("inlineCode",{parentName:"li"},"dora_event['meatadata']"),", to get the metadata."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"INPUT_CLOSED"),": meannig that an input source was closed. This could be useful if the input is critical for the well behaviour of the operator."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ERROR"),": meaning that error message was received."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"UNKNOWN"),": meaning that an unknown message was received.")),(0,r.kt)("h3",{id:"send_output"},(0,r.kt)("inlineCode",{parentName:"h3"},"send_output")),(0,r.kt)("p",null,"To send an output from the operator, use ",(0,r.kt)("inlineCode",{parentName:"p"},"send_output: Callable[[str, bytes | pa.UInt8Array, dict], None]")," input method:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"the first argument is the ",(0,r.kt)("inlineCode",{parentName:"li"},"output_id")," as defined in your dataflow."),(0,r.kt)("li",{parentName:"ul"},"the second argument is the data as either bytes or pyarrow.UInt8Array for zero copy."),(0,r.kt)("li",{parentName:"ul"},"the third argument is dora metadata if you want ot link the tracing from one input into an output.\n",(0,r.kt)("inlineCode",{parentName:"li"},'e.g.:  send_output("bbox", pa.array([100], type=pa.uint8()), dora_event["metadata"])'))),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'#!/usr/bin/env python3\n# -*- coding: utf-8 -*-\n\nfrom typing import Callable, Optional\n\nimport cv2\nimport numpy as np\nimport pyarrow as pa\nimport torch\n\nfrom dora import DoraStatus\n\npa.array([])\n\nCAMERA_WIDTH = 640\nCAMERA_HEIGHT = 480\n\n\nclass Operator:\n    """\n    Infering object from images\n    """\n\n    def __init__(self):\n        self.model = torch.hub.load("ultralytics/yolov5", "yolov5n")\n\n    def on_event(\n        self,\n        dora_event: dict,\n        send_output: Callable[[str, bytes | pa.UInt8Array, Optional[dict]], None],\n    ) -> DoraStatus:\n        """Handle image\n        Args:\n            dora_input (dict): Dict containing the "id", "data", and "metadata"\n            send_output Callable[[str, bytes | pa.UInt8Array, Optional[dict]], None]: \n                Function for sending output to the dataflow:\n                - First argument is the `output_id`\n                - Second argument is the data as either bytes or `pa.UInt8Array` \n                - Third argument is dora metadata dict\n                e.g.: `send_output("bbox", pa.array([100], type=pa.uint8()), dora_event["metadata"])`\n        """\n        if dora_event["type"] == "INPUT":\n            frame = (\n                dora_event["value"]\n                .to_numpy()\n                .reshape((CAMERA_HEIGHT, CAMERA_WIDTH, 3))\n            )\n            frame = frame[:, :, ::-1]  # OpenCV image (BGR to RGB)\n            results = self.model(frame)  # includes NMS\n            arrays = pa.array(\n                np.array(results.xyxy[0].cpu()).ravel().view(np.uint8)\n            )\n            send_output("bbox", arrays, dora_event["metadata"])\n            return DoraStatus.CONTINUE\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"For Python, we recommend to allocate the operator on a single runtime. A runtime will share the same GIL with several operators making those operators run almost sequentially. See: ",(0,r.kt)("a",{parentName:"p",href:"https://docs.rs/pyo3/latest/pyo3/marker/struct.Python.html#deadlocks"},"https://docs.rs/pyo3/latest/pyo3/marker/struct.Python.html#deadlocks"))),(0,r.kt)("h2",{id:"custom-node"},"Custom Node"),(0,r.kt)("h3",{id:"node"},(0,r.kt)("inlineCode",{parentName:"h3"},"Node()")),(0,r.kt)("p",null,"The custom node API lets you integrate ",(0,r.kt)("inlineCode",{parentName:"p"},"dora")," into your application.\nIt allows you to retrieve input and send output in any fashion you want."),(0,r.kt)("p",null,"Use with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from dora import Node\n\nnode = Node()\n")),(0,r.kt)("h3",{id:"next"},(0,r.kt)("inlineCode",{parentName:"h3"},".next()")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},".next()")," gives you the next input that the node has received.\nIt blocks until the next event becomes available.\nIt will return ",(0,r.kt)("inlineCode",{parentName:"p"},"None")," when all senders has been dropped."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"event = node.next()\n")),(0,r.kt)("p",null,"You can also iterate over the event stream with a loop"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'for event in node:\n   match event["type"]:\n       case "INPUT":\n           match event["id"]:\n                case "image":\n')),(0,r.kt)("h3",{id:"send_outputoutput_id-data-metadata"},(0,r.kt)("inlineCode",{parentName:"h3"},".send_output(output_id, data, metadata)")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"send_output")," send data from the node."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"Args:\n   output_id: str,\n   data: Bytes|Arrow,\n   metadata: Option[Dict],\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'node.send_output("string", b"string", {"open_telemetry_context": "7632e76"})\n')),(0,r.kt)("h3",{id:"dataflow_descriptor"},(0,r.kt)("inlineCode",{parentName:"h3"},".dataflow_descriptor()")),(0,r.kt)("p",null,"Returns the full dataflow descriptor that this node is part of."),(0,r.kt)("p",null,"This method returns the parsed dataflow YAML file."),(0,r.kt)("h3",{id:"__version__"},(0,r.kt)("inlineCode",{parentName:"h3"},".__version__")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Returns the current version of dora python API.\n")),(0,r.kt)("p",null,"This command will show the current version of dora."))}m.isMDXComponent=!0}}]);