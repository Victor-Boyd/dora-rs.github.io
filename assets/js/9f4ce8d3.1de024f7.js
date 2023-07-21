"use strict";(self.webpackChunkdora_rs_github_io=self.webpackChunkdora_rs_github_io||[]).push([[3826],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=s(n),u=r,g=m["".concat(p,".").concat(u)]||m[u]||c[u]||o;return n?a.createElement(g,i(i({ref:t},d),{},{components:n})):a.createElement(g,i({ref:t},d))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[m]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7147:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const o={},i="Yolov5",l={unversionedId:"guides/getting-started/yolov5",id:"guides/getting-started/yolov5",title:"Yolov5",description:"Making the video stream intelligent",source:"@site/docs/guides/getting-started/yolov5.md",sourceDirName:"guides/getting-started",slug:"/guides/getting-started/yolov5",permalink:"/docs/guides/getting-started/yolov5",draft:!1,editUrl:"https://github.com/dora-rs/dora-rs.github.io/edit/main/docs/guides/getting-started/yolov5.md",tags:[],version:"current",frontMatter:{},sidebar:"guides",previous:{title:"Webcam Plot",permalink:"/docs/guides/getting-started/webcam_plot"},next:{title:"Hot Reloading",permalink:"/docs/guides/Development/hot-reload"}},p={},s=[{value:"Making the video stream intelligent",id:"making-the-video-stream-intelligent",level:2}],d={toc:s},m="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"yolov5"},"Yolov5"),(0,r.kt)("h2",{id:"making-the-video-stream-intelligent"},"Making the video stream intelligent"),(0,r.kt)("p",null,"Let's add a ",(0,r.kt)("inlineCode",{parentName:"p"},"yolov5")," object detection operator, that you can ",(0,r.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/dora-rs/dora/main/examples/python-operator-dataflow/object_detection.py"},"find as an example"),". This will help us detect object as bounding boxes within the webcam stream."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Install required dependencies"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pip install -r https://raw.githubusercontent.com/dora-rs/dora/v0.2.4/examples/python-operator-dataflow/requirements.txt\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a new ",(0,r.kt)("inlineCode",{parentName:"p"},"object_detection.py")," python file with the following content"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-python"},'#!/usr/bin/env python3\n# -*- coding: utf-8 -*-\n\nfrom typing import Callable, Optional\n\nimport cv2\nimport numpy as np\nimport pyarrow as pa\nimport torch\n\nfrom dora import DoraStatus\n\npa.array([])\n\nCAMERA_WIDTH = 640\nCAMERA_HEIGHT = 480\n\nclass Operator:\n    """\n    Infering object from images\n    """\n\n    def __init__(self):\n        self.model = torch.hub.load("ultralytics/yolov5", "yolov5n")\n\n    def on_event(\n        self,\n        dora_event: dict,\n        send_output: Callable[[str, bytes, Optional[dict]], None],\n    ) -> DoraStatus:\n        """Handle image\n        Args:\n            dora_input (dict): Dict containing the "id", "data", and "metadata"\n            send_output (Callable[[str, bytes, Oprional[dict]]]): Function enabling sending output back to dora.\n        """\n        if dora_event["type"] == "INPUT":\n            frame = (\n                dora_event["value"]\n                .to_numpy()\n                .reshape((CAMERA_HEIGHT, CAMERA_WIDTH, 3))\n            )\n            frame = frame[:, :, ::-1]  # OpenCV image (BGR to RGB)\n            results = self.model(frame)  # includes NMS\n            arrays = pa.array(\n                np.array(results.xyxy[0].cpu()).ravel().view(np.uint8)\n            )\n            send_output("bbox", arrays, dora_event["metadata"])\n        return DoraStatus.CONTINUE\n')),(0,r.kt)("p",{parentName:"li"},"Operators are composed of:"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"on_event")," methods is called when an event is received.\nThere is currently 4 event types:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"STOP"),": meaning that the operator was signalled to stop."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"INPUT"),": meannig that an input was received.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"You can use ",(0,r.kt)("inlineCode",{parentName:"li"},"dora_event['id']"),", to get the id. "),(0,r.kt)("li",{parentName:"ul"},"You can use ",(0,r.kt)("inlineCode",{parentName:"li"},"dora_event['data']"),", to get the data as bytes. "),(0,r.kt)("li",{parentName:"ul"},"You can use ",(0,r.kt)("inlineCode",{parentName:"li"},"dora_event['value']"),", to get the data as a zero-copy Uint8 arrow array. "),(0,r.kt)("li",{parentName:"ul"},"You can use ",(0,r.kt)("inlineCode",{parentName:"li"},"dora_event['meatadata']"),", to get the metadata."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"INPUT_CLOSED"),": meannig that an input source was closed. This could be useful if the input is critical for the well behaviour of the operator."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ERROR"),": meaning that error message was received."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"UNKNOWN"),": meaning that an unknown message was received.")))),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Add an operator within the dataflow"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"{10-16}","{10-16}":!0},"nodes:\n  - id: webcam\n    operator:\n      python: webcam.py\n      inputs:\n        tick: dora/timer/millis/100\n      outputs:\n        - image\n\n  - id: object_detection\n    operator:\n      python: object_detection.py\n      inputs:\n        image: webcam/image\n      outputs:\n        - bbox\n\n  - id: plot\n    operator:\n      python: plot.py\n      inputs:\n        image: webcam/image\n        bbox: object_detection/bbox\n")),(0,r.kt)("p",{parentName:"li"},"In this case, we have connected the ",(0,r.kt)("inlineCode",{parentName:"p"},"webcam/image")," output to the ",(0,r.kt)("inlineCode",{parentName:"p"},"image")," input of yolov5. ",(0,r.kt)("inlineCode",{parentName:"p"},"yolov5/bbox")," is then connected to the ",(0,r.kt)("inlineCode",{parentName:"p"},"plot/obstacles_bbox"),"."),(0,r.kt)("p",{parentName:"li"},"Inputs are prefixed by the node name to be able to separate name conflicts.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"run"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"dora up\ndora start dataflow.yml --attach\n")),(0,r.kt)("p",{align:"center"},(0,r.kt)("img",{src:"/img/webcam_yolov5.png",width:"800"})),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"For more information on ",(0,r.kt)("inlineCode",{parentName:"p"},"yolov5"),", go on ",(0,r.kt)("a",{parentName:"p",href:"/docs/nodes_operators/yolov5_op"},"our ",(0,r.kt)("inlineCode",{parentName:"a"},"yolov5")," detail page"))),(0,r.kt)("p",{parentName:"li"},"The plot will show object detected in the image as bounding box with a label and a confidence score."))))}c.isMDXComponent=!0}}]);