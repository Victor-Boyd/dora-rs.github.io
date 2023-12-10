"use strict";(self.webpackChunkdora_rs_github_io=self.webpackChunkdora_rs_github_io||[]).push([[3173],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>y});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),d=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(i.Provider,{value:t},e.children)},c="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=d(n),m=r,y=c["".concat(i,".").concat(m)]||c[m]||s[m]||o;return n?a.createElement(y,l(l({ref:t},u),{},{components:n})):a.createElement(y,l({ref:t},u))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[c]="string"==typeof e?e:r,l[1]=p;for(var d=2;d<o;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4753:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>s,frontMatter:()=>o,metadata:()=>p,toc:()=>d});var a=n(7462),r=(n(7294),n(3905));const o={},l="Python API",p={unversionedId:"api/python-api",id:"api/python-api",title:"Python API",description:"\x3c!---",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/api/python-api.md",sourceDirName:"api",slug:"/api/python-api",permalink:"/zh-CN/docs/api/python-api",draft:!1,editUrl:"https://crowdin.com/dora-rs/zh-CN",tags:[],version:"current",frontMatter:{}},i={},d=[{value:"\u64cd\u4f5c\u7b26",id:"\u64cd\u4f5c\u7b26",level:2},{value:"\u4e8b\u4ef6",id:"\u4e8b\u4ef6",level:3},{value:"<code>send_output</code>",id:"send_output",level:3},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:3},{value:"\u81ea\u5b9a\u4e49\u8282\u70b9",id:"\u81ea\u5b9a\u4e49\u8282\u70b9",level:2},{value:"<code>Node()</code>",id:"node",level:3},{value:"<code>.next()</code>",id:"next",level:3},{value:"<code>.send_output(output_id, data, metadata)</code>",id:"send_outputoutput_id-data-metadata",level:3},{value:"<code>.dataflow_descriptor()</code>",id:"dataflow_descriptor",level:3},{value:"<code>.__version__</code>",id:"__version__",level:3}],u={toc:d},c="wrapper";function s(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"python-api"},"Python API"),(0,r.kt)("h2",{id:"\u64cd\u4f5c\u7b26"},"\u64cd\u4f5c\u7b26"),(0,r.kt)("p",null,"\u64cd\u4f5c\u7b26 API \u662f\u4f9b\u60a8\u5b9e\u73b0\u7684\u6846\u67b6\u3002 \u5b9e\u73b0\u7684\u64cd\u4f5c\u7b26\u5c06\u7531 dora \u7ba1\u7406\u3002 \u8be5\u6846\u67b6\u4f7f\u6211\u4eec\u80fd\u591f\u8fdb\u884c\u4f18\u5316\u5e76\u63d0\u4f9b\u9ad8\u7ea7\u7279\u6027\u3002 \u8fd9\u662f\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"dora")," \u7684\u63a8\u8350\u65b9\u6cd5\u3002"),(0,r.kt)("p",null,"\u64cd\u4f5c\u7b26\u9700\u8981\u4e00\u4e2a on_event \u65b9\u6cd5\uff0c\u5e76\u4e14\u9700\u8981\u8fd4\u56de\u4e00\u4e2a DoraStatus \uff0c\u8fd9\u53d6\u51b3\u4e8e\u5b83\u662f\u5426\u9700\u8981\u7ee7\u7eed\u6216\u505c\u6b62\u3002"),(0,r.kt)("h3",{id:"\u4e8b\u4ef6"},"\u4e8b\u4ef6"),(0,r.kt)("p",null,"\u5f53\u524d\u6709 4 \u79cd\u4e8b\u4ef6\u7c7b\u578b\u53ef\u4f9b on_event \u65b9\u6cd5\u63a5\u6536\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"STOP\uff1a\u8868\u793a\u64cd\u4f5c\u7b26\u6536\u5230\u4fe1\u53f7\u8981\u505c\u6b62\u3002"),(0,r.kt)("li",{parentName:"ul"},"INPUT: \u8868\u793a\u5df2\u6536\u5230\u4e00\u4e2a\u8f93\u5165\u3002",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u4f60\u53ef\u4ee5\u4f7f\u7528 dora_event","['id']"," \u83b7\u5f97 id\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u4f60\u53ef\u4ee5\u4f7f\u7528 dora_event","['data']"," \u4ee5\u5b57\u8282\u6570\u7ec4\u5f62\u5f0f\u83b7\u53d6\u6570\u636e\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u60a8\u53ef\u4ee5\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"li"},"dora_event['value']")," \u4ee5\u96f6\u590d\u5236 Uint8 arrow array \u5f62\u5f0f\u7684\u83b7\u53d6\u6570\u636e\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u60a8\u53ef\u4ee5\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"li"},"dora_event['metadata']")," \u83b7\u53d6\u5143\u6570\u636e\u3002"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"INPUT_CLOSED"),": \u8868\u793a\u8f93\u5165\u6e90\u5df2\u5173\u95ed\u3002 \u5982\u679c\u8f93\u5165\u5bf9\u64cd\u4f5c\u7b26\u7684\u884c\u4e3a\u662f\u5173\u952e\u7684\uff0c\u8fd9\u4f1a\u66f4\u6709\u7528\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ERROR"),": \u8868\u793a\u9519\u8bef\u4fe1\u606f\u5df2\u63a5\u6536\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"UNKNOWN"),": \u8868\u793a\u672a\u77e5\u4fe1\u606f\u5df2\u63a5\u6536\u3002")),(0,r.kt)("h3",{id:"send_output"},(0,r.kt)("inlineCode",{parentName:"h3"},"send_output")),(0,r.kt)("p",null,"\u4ece\u64cd\u4f5c\u7b26\u53d1\u9001\u4e00\u4e2a\u8f93\u51fa\uff0c\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"send_output: Callable[[str, bytes | pa.Array, dict], None]")," \u8f93\u5165\u65b9\u6cd5:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u7b2c\u4e00\u4e2a\u53c2\u6570\u662f ",(0,r.kt)("inlineCode",{parentName:"li"},"output_id")," \u5b9a\u4e49\u5728\u60a8\u7684\u6570\u636e\u6d41\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u7b2c\u4e8c\u4e2a\u53c2\u6570\u662f\u5b57\u8282\u6570\u7ec4\u6216pyarrow\u5f62\u5f0f\u7684\u6570\u636e\u3002\u96f6\u62f7\u8d1d\u7684\u6570\u7ec4\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u7b2c\u4e09\u4e2a\u53c2\u6570\u662fdora\u5143\u6570\u636e\uff0c\u5982\u679c\u60a8\u8981\u8ffd\u52a0\u94fe\u63a5\u8ddf\u8e2a\u4e00\u4e2a\u8f93\u5165\u8f93\u51fa\u8fc7\u7a0b\u3002 ",(0,r.kt)("inlineCode",{parentName:"li"},'\u4f8b\u5982\uff1asend_output("bbox", pa.array([100], type=pa.uint8()), dora_event["metadata"])'))),(0,r.kt)("h3",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'#!/usr/bin/env python3\n# -*- coding: utf-8 -*-\n\nfrom typing import Callable, Optional\n\nimport cv2\nimport numpy as np\nimport pyarrow as pa\nimport torch\n\nfrom dora import DoraStatus\n\npa.array([])\n\nCAMERA_WIDTH = 640\nCAMERA_HEIGHT = 480\n\n\nclass Operator:\n    """\n    \u4ece\u56fe\u50cf\u63a8\u65ad\u5bf9\u8c61\n    """\n\n    def __init__(self):\n        self.model = torch.hub.load("ultralytics/yolov5", "yolov5n")\n\n    def on_event(\n        self,\n        dora_event,\n        send_output,\n    ) -> DoraStatus:\n        """\u56fe\u50cf\u53e5\u67c4\n        \u53c2\u6570:\n            dora_input (dict) \u5305\u542b "id", "data", and "metadata"\n            send_output Callable[[str, bytes | pa.Array, Optional[dict]], None]:\n                \u6b63\u5728\u53d1\u9001\u8f93\u51fa\u5230\u6570\u636e\u6d41\u51fd\u6570:\n                - \u7b2c\u4e00\u4e2a\u53c2\u6570\u662f `output_id`\n                - \u7b2c\u4e8c\u4e2a\u53c2\u6570\u662f\u5b57\u8282\u6570\u7ec4\u6216`pa.Array`\u5f62\u5f0f\u7684\u6570\u636e\n                - \u7b2c\u4e09\u4e2a\u53c2\u6570\u662f dora \u5143\u6570\u636e\u5b57\u5178\n                \u4f8b\u5982\uff1a`send_output("bbox", pa.array([100], type=pa.uint8()), dora_event["metadata"])`\n        """\n        if dora_event["type"] == "INPUT":\n            frame = (\n                dora_event["value"]\n                .to_numpy()\n                .reshape((CAMERA_HEIGHT, CAMERA_WIDTH, 3))\n            )\n            frame = frame[:, :, ::-1]  # OpenCV image (BGR to RGB)\n            results = self.model(frame)  # includes NMS\n            arrays = pa.array(\n                np.array(results.xyxy[0].cpu()).ravel().view(np.uint8)\n            )\n            send_output("bbox", arrays, dora_event["metadata"])\n            return DoraStatus.CONTINUE\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u5bf9\u4e8e Python\uff0c\u6211\u4eec\u5efa\u8bae\u5728\u5355\u4e2a\u8fd0\u884c\u65f6\u4e0a\u5206\u914d\u64cd\u4f5c\u7b26\u3002 \u8fd0\u884c\u65f6\u5c06\u4e0e\u591a\u4e2a\u64cd\u4f5c\u7b26\u5171\u4eab\u76f8\u540c\u7684 GIL\uff0c\u4f7f\u8fd9\u4e9b\u8fd0\u7b97\u7b26\u51e0\u4e4e\u6309\u987a\u5e8f\u8fd0\u884c\u3002 \u6307\u5f15\uff1a ",(0,r.kt)("a",{parentName:"p",href:"https://docs.rs/pyo3/latest/pyo3/marker/struct.Python.html#deadlocks"},"https://docs.rs/pyo3/latest/pyo3/marker/struct.Python.html#deadlocks"))),(0,r.kt)("h2",{id:"\u81ea\u5b9a\u4e49\u8282\u70b9"},"\u81ea\u5b9a\u4e49\u8282\u70b9"),(0,r.kt)("h3",{id:"node"},(0,r.kt)("inlineCode",{parentName:"h3"},"Node()")),(0,r.kt)("p",null,"\u81ea\u5b9a\u4e49\u8282\u70b9\u53ef\u4ee5\u4f7f\u60a8\u96c6\u6210 ",(0,r.kt)("inlineCode",{parentName:"p"},"dora")," \u5230\u60a8\u7684\u5e94\u7528\u4e2d\u3002 \u5b83\u5141\u8bb8\u60a8\u4ee5\u4efb\u4f55\u60a8\u60f3\u8981\u7684\u65b9\u5f0f\u68c0\u7d22\u8f93\u5165\u548c\u53d1\u9001\u8f93\u51fa\u3002"),(0,r.kt)("p",null,"\u4f7f\u7528\u5bfc\u5165\u5b9e\u4f8b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from dora import Node\n\nnode = Node()\n")),(0,r.kt)("h3",{id:"next"},(0,r.kt)("inlineCode",{parentName:"h3"},".next()")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},".next()")," \u4e3a\u60a8\u63d0\u4f9b\u5df2\u63a5\u6536\u8f93\u5165\u7684\u4e0b\u4e00\u4e2a\u8282\u70b9\u3002 \u5b83\u4f1a\u963b\u585e\uff0c\u76f4\u5230\u4e0b\u4e00\u4e2a\u4e8b\u4ef6\u53ef\u7528\u3002 \u5f53\u5168\u90e8\u53d1\u9001\u8005\u88ab\u79fb\u9664\u5b83\u5c06\u8fd4\u56de\u201cNone\u201d\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"event = node.next()\n")),(0,r.kt)("p",null,"\u60a8\u8fd8\u53ef\u4ee5\u901a\u8fc7\u5faa\u73af\u5728\u4e8b\u4ef6\u6d41\u4e0a\u8fed\u4ee3"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'for event in node:\n   match event["type"]:\n       case "INPUT":\n           match event["id"]:\n                case "image":\n')),(0,r.kt)("h3",{id:"send_outputoutput_id-data-metadata"},(0,r.kt)("inlineCode",{parentName:"h3"},".send_output(output_id, data, metadata)")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"send_output")," \u4ece\u8282\u70b9\u53d1\u9001\u6570\u636e\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"\u53c2\u6570:\n   output_id: str,\n   data: Bytes|Arrow,\n   metadata: Option[Dict],\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'node.send_output("string", b"string", {"open_telemetry_context": "7632e76"})\n')),(0,r.kt)("h3",{id:"dataflow_descriptor"},(0,r.kt)("inlineCode",{parentName:"h3"},".dataflow_descriptor()")),(0,r.kt)("p",null,"\u8fd4\u56de\u6b64\u8282\u70b9\u6240\u5c5e\u7684\u5b8c\u6574\u6570\u636e\u6d41\u63cf\u8ff0\u7b26\u3002"),(0,r.kt)("p",null,"\u6b64\u65b9\u6cd5\u8fd4\u56de\u5df2\u5206\u6790\u7684\u6570\u636e\u6d41 YAML \u6587\u4ef6\u3002"),(0,r.kt)("h3",{id:"__version__"},(0,r.kt)("inlineCode",{parentName:"h3"},".__version__")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\u8fd4\u56de dora python API \u7684\u5f53\u524d\u7248\u672c\u3002\n")),(0,r.kt)("p",null,"\u8fd9\u4e2a\u547d\u4ee4\u5c06\u663e\u793a dora \u7684\u5f53\u524d\u7248\u672c\u3002"))}s.isMDXComponent=!0}}]);