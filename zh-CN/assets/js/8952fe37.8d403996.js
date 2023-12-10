"use strict";(self.webpackChunkdora_rs_github_io=self.webpackChunkdora_rs_github_io||[]).push([[5898],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>y});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),m=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=m(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=m(n),c=r,y=d["".concat(l,".").concat(c)]||d[c]||u[c]||o;return n?a.createElement(y,p(p({ref:t},s),{},{components:n})):a.createElement(y,p({ref:t},s))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,p=new Array(o);p[0]=c;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:r,p[1]=i;for(var m=2;m<o;m++)p[m]=n[m];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},7182:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>m});var a=n(7462),r=(n(7294),n(3905));const o={},p="Yolov5",i={unversionedId:"guides/getting-started/yolov5",id:"guides/getting-started/yolov5",title:"Yolov5",description:"\u4f7f\u89c6\u9891\u6d41\u667a\u80fd\u5316",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/guides/getting-started/yolov5.md",sourceDirName:"guides/getting-started",slug:"/guides/getting-started/yolov5",permalink:"/zh-CN/docs/guides/getting-started/yolov5",draft:!1,editUrl:"https://crowdin.com/dora-rs/zh-CN",tags:[],version:"current",frontMatter:{},sidebar:"guides",previous:{title:"Webcam Plot",permalink:"/zh-CN/docs/guides/getting-started/webcam_plot"},next:{title:"\u70ed\u52a0\u8f7d",permalink:"/zh-CN/docs/guides/Development/hot-reload"}},l={},m=[{value:"\u4f7f\u89c6\u9891\u6d41\u667a\u80fd\u5316",id:"\u4f7f\u89c6\u9891\u6d41\u667a\u80fd\u5316",level:2}],s={toc:m},d="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"yolov5"},"Yolov5"),(0,r.kt)("h2",{id:"\u4f7f\u89c6\u9891\u6d41\u667a\u80fd\u5316"},"\u4f7f\u89c6\u9891\u6d41\u667a\u80fd\u5316"),(0,r.kt)("p",null,"\u8ba9\u6211\u4eec\u6dfb\u52a0\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"yolov5")," \u5bf9\u8c61\u68c0\u6d4b\u64cd\u4f5c\u5668\uff0c\u60a8\u53ef\u4ee5 ",(0,r.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/dora-rs/dora/v0.3.0/examples/python-operator-dataflow/object_detection.py"},"\u627e\u5230\u4e00\u4e2a\u793a\u4f8b"),"\u3002 \u8fd9\u5c06\u5e2e\u52a9\u6211\u4eec\u5c06\u5bf9\u8c61\u68c0\u6d4b\u4e3a\u7f51\u7edc\u6444\u50cf\u5934\u6d41\u4e2d\u7684\u8fb9\u754c\u6846\u3002"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5b89\u88c5\u6240\u9700\u7684\u4f9d\u8d56"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pip install -r https://raw.githubusercontent.com/dora-rs/dora/v0.3.0/examples/python-operator-dataflow/requirements.txt\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u521b\u5efa\u4e00\u4e2a\u65b0\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"object_detection.py")," python \u6587\u4ef6\uff0c\u5305\u542b\u4ee5\u4e0b\u5185\u5bb9"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"wget https://raw.githubusercontent.com/dora-rs/dora/v0.3.0/examples/python-operator-dataflow/object_detection.py\n")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"object_detection.py"),":"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-python"},'#!/usr/bin/env python3\n# -*- coding: utf-8 -*-\n\nimport cv2\nimport numpy as np\nimport pyarrow as pa\nimport torch\n\nfrom dora import DoraStatus\n\npa.array([])\n\nCAMERA_WIDTH = 640\nCAMERA_HEIGHT = 480\n\nclass Operator:\n    """\n    Infering object from images\n    """\n\n    def __init__(self):\n        self.model = torch.hub.load("ultralytics/yolov5", "yolov5n")\n\n    def on_event(\n        self,\n        dora_event,\n        send_output,\n    ) -> DoraStatus:\n        if dora_event["type"] == "INPUT":\n            return self.on_input(dora_event, send_output)\n        return DoraStatus.CONTINUE\n\n    def on_input(\n        self,\n        dora_input,\n        send_output,\n    ) -> DoraStatus:\n        """\u56fe\u50cf\u53e5\u67c4\n        \u53c2\u6570:\n            dora_input (dict) \u5305\u542b the "id", "value", and "metadata"\n            send_output Callable[[str, bytes | pa.Array, Optional[dict]], None]:\n                \u53d1\u9001\u8f93\u51fa\u81f3\u6570\u636e\u6d41\u51fd\u6570:\n                - \u7b2c\u4e00\u4e2a\u53c2\u6570\u662f `output_id`\n                - \u7b2c\u4e8c\u4e2a\u53c2\u6570\u662f \u6570\u636e\u505a\u4e3a  bytes \u6216 `pa.Array`\n                - \u7b2c\u4e09\u4e2a\u53c2\u6570\u662f dora \u5143\u6570\u636e\u5b57\u5178\n                \u4f8b\u5982\uff1a `send_output("bbox", pa.array([100], type=pa.uint8()), dora_event["metadata"])`\n        """\n\n        frame = dora_input["value"].to_numpy().reshape((CAMERA_HEIGHT, CAMERA_WIDTH, 3))\n        frame = frame[:, :, ::-1]  # OpenCV \u56fe\u50cf (BGR \u81f3 RGB)\n        results = self.model(frame)  # \u5305\u542b NMS\n        arrays = pa.array(np.array(results.xyxy[0].cpu()).ravel())\n        send_output("bbox", arrays, dora_input["metadata"])\n        return DoraStatus.CONTINUE\n')),(0,r.kt)("p",{parentName:"li"},"\u64cd\u4f5c\u7b26\u7531\u4ee5\u4e0b\u90e8\u5206\u7ec4\u6210\uff1a"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"on_event")," \u5f53\u4e00\u4e2a\u4e8b\u4ef6\u5df2\u63a5\u6536\uff0c\u6b64\u65b9\u6cd5\u8c03\u7528\u3002 \u5f53\u524d\u67094\u4e2a\u4e8b\u4ef6\u7c7b\u578b\uff1a"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"STOP\uff1a\u8868\u793a\u64cd\u4f5c\u7b26\u6536\u5230\u4fe1\u53f7\u8981\u505c\u6b62\u3002"),(0,r.kt)("li",{parentName:"ul"},"INPUT: \u8868\u793a\u5df2\u6536\u5230\u4e00\u4e2a\u8f93\u5165\u3002",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u4f60\u53ef\u4ee5\u4f7f\u7528 dora_event","['id']"," \u83b7\u5f97 id\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u4f60\u53ef\u4ee5\u4f7f\u7528 dora_event","['data']"," \u4ee5\u5b57\u8282\u6570\u7ec4\u5f62\u5f0f\u83b7\u53d6\u6570\u636e\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u60a8\u53ef\u4ee5\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"li"},"dora_event['value']")," \u4ee5\u96f6\u590d\u5236 Uint8 arrow array \u5f62\u5f0f\u7684\u83b7\u53d6\u6570\u636e\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u60a8\u53ef\u4ee5\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"li"},"dora_event['metadata']")," \u83b7\u53d6\u5143\u6570\u636e\u3002"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"INPUT_CLOSED"),": \u8868\u793a\u8f93\u5165\u6e90\u5df2\u5173\u95ed\u3002 \u5982\u679c\u8f93\u5165\u5bf9\u64cd\u4f5c\u7b26\u7684\u884c\u4e3a\u662f\u5173\u952e\u7684\uff0c\u8fd9\u4f1a\u66f4\u6709\u7528\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ERROR"),": \u8868\u793a\u9519\u8bef\u4fe1\u606f\u5df2\u63a5\u6536\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"UNKNOWN"),": \u8868\u793a\u672a\u77e5\u4fe1\u606f\u5df2\u63a5\u6536\u3002"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5728\u6570\u636e\u6d41\u4e2d\u6dfb\u52a0\u4e00\u4e2a\u64cd\u4f5c\u7b26\u3002"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"wget https://raw.githubusercontent.com/dora-rs/dora/v0.3.0/examples/python-operator-dataflow/dataflow.yaml\n")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"dataflow.yaml"),":"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"{10-16,23}","{10-16,23}":!0},"nodes:\n  - id: webcam\n    operator:\n      python: webcam.py\n      inputs:\n        tick: dora/timer/millis/100\n      outputs:\n        - image\n\n  - id: object_detection\n    operator:\n      python: object_detection.py\n      inputs:\n        image: webcam/image\n      outputs:\n        - bbox\n\n  - id: plot\n    operator:\n      python: plot.py\n      inputs:\n        image: webcam/image\n        bbox: object_detection/bbox\n")),(0,r.kt)("p",{parentName:"li"},"\u5728\u672c\u4f8b\u4e2d\uff0c\u6211\u4eec\u5c06 ",(0,r.kt)("inlineCode",{parentName:"p"},"webcam/image")," \u8f93\u51fa\u8fde\u63a5\u5230 yolov5 \u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"image")," \u8f93\u5165\u3002 \u7136\u540e\u5c06 ",(0,r.kt)("inlineCode",{parentName:"p"},"yolov5/bbox")," \u8fde\u63a5\u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},"plot/obstacles_bbox"),"\u3002"),(0,r.kt)("p",{parentName:"li"},"\u8f93\u5165\u4ee5\u8282\u70b9\u540d\u79f0\u4e3a\u524d\u7f00\uff0c\u4ee5\u4fbf\u80fd\u591f\u5206\u9694\u540d\u79f0\u51b2\u7a81\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u8fd0\u884c"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"dora up\ndora start dataflow.yml --attach\n")),(0,r.kt)("p",{align:"center"},(0,r.kt)("img",{src:"/img/webcam_yolov5.png",width:"800"})),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"\u6709\u5173",(0,r.kt)("inlineCode",{parentName:"p"},"yolov5"),"\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u8bbf\u95ee",(0,r.kt)("a",{parentName:"p",href:"/docs/nodes_operators/yolov5_op"},"\u6211\u4eec\u7684",(0,r.kt)("inlineCode",{parentName:"a"},"yolov5"),"\u8be6\u60c5\u9875\u9762"))),(0,r.kt)("p",{parentName:"li"},"\u8be5\u56fe\u4f1a\u5c06\u56fe\u50cf\u4e2d\u68c0\u6d4b\u5230\u7684\u5bf9\u8c61\u663e\u793a\u4e3a\u5e26\u6709\u6807\u7b7e\u548c\u7f6e\u4fe1\u5ea6\u5206\u6570\u7684\u8fb9\u754c\u6846\u3002"))))}u.isMDXComponent=!0}}]);