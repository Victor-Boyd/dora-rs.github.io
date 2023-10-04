"use strict";(self.webpackChunkdora_rs_github_io=self.webpackChunkdora_rs_github_io||[]).push([[2790],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=r.createContext({}),p=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(i.Provider,{value:n},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},_=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(t),_=o,m=d["".concat(i,".").concat(_)]||d[_]||c[_]||a;return t?r.createElement(m,s(s({ref:n},u),{},{components:t})):r.createElement(m,s({ref:n},u))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=_;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l[d]="string"==typeof e?e:o,s[1]=l;for(var p=2;p<a;p++)s[p]=t[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}_.displayName="MDXCreateElement"},5731:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>s,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=t(7462),o=(t(7294),t(3905));const a={},s=void 0,l={unversionedId:"nodes_operators/strong_sort_op",id:"nodes_operators/strong_sort_op",title:"strong_sort_op",description:"\x3c!---",source:"@site/docs/nodes_operators/strong_sort_op.md",sourceDirName:"nodes_operators",slug:"/nodes_operators/strong_sort_op",permalink:"/docs/nodes_operators/strong_sort_op",draft:!1,editUrl:"https://github.com/dora-rs/dora-rs.github.io/edit/main/docs/nodes_operators/strong_sort_op.md",tags:[],version:"current",frontMatter:{},sidebar:"nodes_operators",previous:{title:"Plot operator",permalink:"/docs/nodes_operators/plot"},next:{title:"webcam_op",permalink:"/docs/nodes_operators/webcam_op"}},i={},p=[{value:"Methods",id:"methods",level:2},{value:"<code>__init__()</code>",id:"__init__",level:3},{value:"<code>.on_event(...)</code>",id:"on_event",level:3},{value:"<code>.on_input(...)</code>",id:"on_input",level:3}],u={toc:p},d="wrapper";function c(e){let{components:n,...t}=e;return(0,o.kt)(d,(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"methods"},"Methods"),(0,o.kt)("h3",{id:"__init__"},(0,o.kt)("inlineCode",{parentName:"h3"},"__init__()")),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Source Code"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'    def __init__(self):\n        model = StrongSORT(\n            "osnet_x0_25_msmt17.pt",\n            torch.device("cuda"),\n            False,\n        )\n        model.model.warmup()\n        self.model = model\n        self.frame = []\n\n\n'))),(0,o.kt)("h3",{id:"on_event"},(0,o.kt)("inlineCode",{parentName:"h3"},".on_event(...)")),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Source Code"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'\n    def on_event(\n        self,\n        dora_event: dict,\n        send_output: Callable[[str, bytes], None],\n    ) -> DoraStatus:\n        if dora_event["type"] == "INPUT":\n            return self.on_input(dora_event, send_output)\n        return DoraStatus.CONTINUE\n\n\n'))),(0,o.kt)("h3",{id:"on_input"},(0,o.kt)("inlineCode",{parentName:"h3"},".on_input(...)")),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Source Code"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'\n    def on_input(\n        self,\n        dora_input: dict,\n        send_output: Callable[[str, bytes], None],\n    ) -> DoraStatus:\n\n        if dora_input["id"] == "image":\n            frame = np.array(\n                dora_input["value"],\n                np.uint8,\n            ).reshape((IMAGE_HEIGHT, IMAGE_WIDTH, 4))\n\n            self.frame = frame[:, :, :3]\n\n        elif dora_input["id"] == "obstacles_bbox" and len(self.frame) != 0:\n            obstacles = (\n                np.array(dora_input["value"]).view(np.int32).reshape((-1, 6))\n            )\n            if obstacles.shape[0] == 0:\n                # self.model.increment_ages()\n                send_output(\n                    "obstacles_id",\n                    pa.array(np.array([]).view(np.uint8).ravel()),\n                    dora_input["metadata"],\n                )\n                return DoraStatus.CONTINUE\n\n            # Post Processing yolov5\n            xywhs = xxyy2xywh(obstacles[:, 0:4])\n            confs = obstacles[:, 4]\n            clss = obstacles[:, 5]\n            with torch.no_grad():\n                outputs = np.array(\n                    self.model.update(xywhs, confs, clss, self.frame)\n                ).astype("int32")\n                if len(outputs) != 0:\n                    outputs = outputs[\n                        :, [0, 2, 1, 3, 4, 5, 6]\n                    ]  # xyxy -> x1, x2, y1, y2 track_id, class_id, conf\n\n                    send_output(\n                        "obstacles_id",\n                        pa.array(outputs.ravel().view(np.uint8)),\n                        dora_input["metadata"],\n                    )\n\n        return DoraStatus.CONTINUE\n\n\n'))))}c.isMDXComponent=!0}}]);