"use strict";(self.webpackChunkdora_rs_github_io=self.webpackChunkdora_rs_github_io||[]).push([[6270],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>f});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=n.createContext({}),c=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},u=function(e){var r=c(e.components);return n.createElement(p.Provider,{value:r},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=c(t),d=a,f=s["".concat(p,".").concat(d)]||s[d]||m[d]||o;return t?n.createElement(f,l(l({ref:r},u),{},{components:t})):n.createElement(f,l({ref:r},u))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=d;var i={};for(var p in r)hasOwnProperty.call(r,p)&&(i[p]=r[p]);i.originalType=e,i[s]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=t[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},6769:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=t(7462),a=(t(7294),t(3905));const o={},l="\u8bbe\u8ba1\u9884\u89c8",i={unversionedId:"references/overview",id:"references/overview",title:"\u8bbe\u8ba1\u9884\u89c8",description:"dora \u6846\u67b6\u7531\u4e0d\u540c\u7684\u7ec4\u4ef6\u6784\u6210\uff1a",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/references/overview.md",sourceDirName:"references",slug:"/references/overview",permalink:"/zh-CN/docs/references/overview",draft:!1,editUrl:"https://crowdin.com/dora-rs/zh-CN",tags:[],version:"current",frontMatter:{},sidebar:"references",previous:{title:"\u6846\u67b6",permalink:"/zh-CN/docs/references/library-vs-framework"},next:{title:"\u72b6\u6001\u7ba1\u7406",permalink:"/zh-CN/docs/references/state-management"}},p={},c=[{value:"\u64cd\u4f5c\u7b26 vs \u81ea\u5b9a\u4e49\u8282\u70b9",id:"\u64cd\u4f5c\u7b26-vs-\u81ea\u5b9a\u4e49\u8282\u70b9",level:2}],u={toc:c},s="wrapper";function m(e){let{components:r,...o}=e;return(0,a.kt)(s,(0,n.Z)({},u,o,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u8bbe\u8ba1\u9884\u89c8"},"\u8bbe\u8ba1\u9884\u89c8"),(0,a.kt)("p",null,"dora \u6846\u67b6\u7531\u4e0d\u540c\u7684\u7ec4\u4ef6\u6784\u6210\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"\u8bbe\u8ba1\u56fe",src:t(6154).Z,width:"671",height:"506"})),(0,a.kt)("p",null,"\u5b58\u5728\u4ee5\u4e0b\u4e3b\u8981\u7ec4\u4ef6\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Nodes:")," Dora \u8282\u70b9\u662f\u9694\u79bb\u7684\u3001\u5b64\u7acb\u7684\uff0c\u901a\u8fc7dora\u5e93\u4e0e\u5176\u5b83\u8282\u70b9\u901a\u4fe1\u7684\u8fdb\u7a0b\u3002 \u8282\u70b9\u53ef\u88ab\u81ea\u5b9a\u4e49\u4e3a\u4e00\u4e2a\u7528\u6237\u6307\u5b9a\u7a0b\u5e8f\uff0c\u6216\u4e00\u4e2a dora \u8fd0\u884c\u65f6\u8282\u70b9\uff0c\u5141\u8bb8\u8fd0\u884c dora  ",(0,a.kt)("em",{parentName:"p"},"operators"),"\u3002 \u8282\u70b9\u5b9e\u73b0\u4ed6\u4eec\u81ea\u5df1\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"main")," \u51fd\u6570\u5e76\u4e14\u56e0\u6b64\u53ef\u4ee5\u5b8c\u5168\u63a7\u5236\u5b83\u4eec\u7684\u6267\u884c\u3002"),(0,a.kt)("p",{parentName:"li"},"\u8282\u70b9\u4f7f\u7528 dora ",(0,a.kt)("em",{parentName:"p"},"library")," \u4e0e\u5176\u5b83\u8282\u70b9\u901a\u4fe1\uff0c\u5b83\u53ef\u7528\u4e8e\u591a\u79cd\u8bed\u8a00\uff08Rust\u3001C;\u4e5f\u8bb8\u662f Python\u3001WASM\uff09\u3002 \u901a\u4fe1\u901a\u8fc7 ",(0,a.kt)("em",{parentName:"p"},"communication layer")," \u53d1\u751f\uff0c\u5728\u6211\u4eec\u7684\u7b2c\u4e00\u4e2a\u7248\u672c\u4e2d\u8be5\u5c42\u5c06\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"zenoh")," \u3002 \u6211\u4eec\u8ba1\u5212\u5728\u5c06\u6765\u6dfb\u52a0\u66f4\u591a\u9009\u9879\u3002 \u6240\u6709\u901a\u4fe1\u5c42\u5b9e\u73b0\u90fd\u5e94\u80fd\u591f\u9632\u6b62\u65ad\u5f00\u8fde\u63a5\uff0c\u56e0\u6b64\u5373\u4f7f\u64cd\u4f5c\u7b26\u5931\u53bb\u4e0e\u534f\u8c03\u5668\u7684\u8fde\u63a5\u4e5f\u5e94\u8be5\u80fd\u591f\u7ee7\u7eed\u8fd0\u884c\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Operators:")," \u64cd\u4f5c\u7b26\u662f\u8f7b\u91cf\u7684\u3001\u534f\u540c\u7684\u3001\u57fa\u4e8e\u5e93\u7684\u7ec4\u4ef6\uff0c\u88ab\u4e00\u4e2a dora \u8fd0\u884c\u65f6\u8282\u70b9\u6267\u884c\u3002 \u4ed6\u4eec\u5fc5\u987b\u5b9e\u73b0\u4e00\u4e2a\u7279\u5b9a\u63a5\u53e3\uff0c\u8fd9\u53d6\u51b3\u4e8e\u4f7f\u7528\u7684\u8bed\u8a00\u3002 \u64cd\u4f5c\u7b26\u53ef\u4ee5\u4f7f\u7528 dora \u8fd0\u884c\u65f6\u63d0\u4f9b\u7684\u5404\u79cd\u9ad8\u7ea7\u7279\u6027\uff0c\u4f8b\u5982\u4f18\u5148\u7ea7\u8c03\u5ea6\u6216 \u672c\u673a\u622a\u6b62\u65f6\u95f4\u652f\u6301\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Coordinator:")," \u534f\u8c03\u5668\u8d1f\u8d23\u4ece YAML \u6587\u4ef6\u4e2d\u8bfb\u53d6\u6570\u636e\u6d41\uff0c\u5bf9\u5176\u8fdb\u884c\u9a8c\u8bc1\uff0c\u5e76\u5c06\u8282\u70b9\u548c\u64cd\u4f5c\u7b26\u90e8\u7f72\u5230\u6307\u5b9a\u6216\u81ea\u52a8\u786e\u8ba4\u7684\u8ba1\u7b97\u673a\u3002 \u5b83\u76d1\u89c6\u64cd\u4f5c\u7b26\u7684\u8fd0\u884c\u72b6\u51b5\u5e76\u5b9e\u73b0\u9ad8\u7ea7\u96c6\u7fa4\u7ba1\u7406\u529f\u80fd\u3002 \u4f8b\u5982\uff0c\u6211\u4eec\u80fd\u5b9e\u73b0\u4e91\u8282\u70b9\u7684\u81ea\u52a8\u5316\u4f38\u7f29\uff0c\u6216\u64cd\u4f5c\u7b26\u590d\u5199\u4e0e\u91cd\u542f\u3002 \u534f\u8c03\u5668\u80fd\u88ab\u901a\u8fc7\u4e00\u4e2a\u547d\u4ee4\u884c\u7a0b\u5e8f(CLI)\u63a7\u5236\u3002"))),(0,a.kt)("h2",{id:"\u64cd\u4f5c\u7b26-vs-\u81ea\u5b9a\u4e49\u8282\u70b9"},"\u64cd\u4f5c\u7b26 vs \u81ea\u5b9a\u4e49\u8282\u70b9"),(0,a.kt)("p",null,"\u5728dora\u4e2d\u5b9e\u73b0\u4e00\u4e2a\u64cd\u4f5c\u7684\u4e24\u79cd\u8def\u5f84\uff1a\u8981\u4e48\u4f5c\u4e3a\u4e00\u4e2a dora \u64cd\u4f5c\u7b26\uff0c\u8981\u4e48\u4f5c\u4e3a\u4e00\u4e2a\u81ea\u5b9a\u4e49\u8282\u70b9\u3002 \u4e24\u8005\u5404\u6709\u4f18\u52a3\uff0c\u5982\u4e0b\u6240\u8ff0\u3002 \u901a\u5e38 \uff0c\u5efa\u8bae\u521b\u5efa dora \u64cd\u4f5c\u7b26\u5e76\u4e14\u4ec5\u5728\u5fc5\u8981\u65f6\u4f7f\u7528\u81ea\u5b9a\u4e49\u8282\u70b9\u3002"),(0,a.kt)("p",null,"\u64cd\u4f5c\u7b26\u5177\u6709\u4ee5\u4e0b\u4f18\u52bf\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4ed6\u4eec\u53ef\u4ee5\u4f7f\u7528\u4e00\u4e2a dora \u8fd0\u884c\u65f6\u8282\u70b9\u63d0\u4f9b\u7684\u5404\u79cd\u9ad8\u7ea7\u7279\u6027\u3002 \u8fd9\u5305\u62ec\u7279\u6b8a\u8c03\u5ea6\u7b56\u7565\u548c\u622a\u6b62\u65e5\u671f\u7b49\u7279\u6027\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5b83\u4eec\u662f\u8f7b\u91cf\u7684\uff0c\u6240\u4ee5\u5b83\u4eec\u53ea\u5360\u7528\u6700\u5c11\u7684\u5185\u5b58\u3002 \u8fd9\u6837\u786e\u4fdd\u53ef\u4ee5\u5728\u4e00\u53f0\u673a\u5668\u4e0a\u8fd0\u884c\u6570\u4ee5\u5343\u8ba1\u7684\u64cd\u4f5c\u7b26\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5b83\u4eec\u53ef\u4ee5\u4f7f\u7528\u8fd0\u884c\u65f6\u7ba1\u7406\u7684\u72b6\u6001\u5b58\u50a8\uff0c\u4ee5\u5b9e\u73b0\u7a33\u5065\u6027\u6216\u4e0e\u5176\u4ed6\u64cd\u4f5c\u7b26\u5171\u4eab\u72b6\u6001\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5b83\u4eec\u4e0e\u5176\u5b83\u64cd\u4f5c\u7b26\u5728\u540c\u4e00\u8282\u70b9\u5171\u4eab\u5730\u5740\u7a7a\u95f4\uff0c\u8fd9\u4f7f\u5f97\u901a\u4fe1\u975e\u5e38\u5feb\u3002")),(0,a.kt)("p",null,"\u81ea\u5b9a\u4e49\u8282\u70b9\u63d0\u4f9b\u4e00\u4e2a\u4e0d\u540c\u7684\u4f18\u52bf\u96c6\u5408\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6bcf\u4e00\u4e2a\u8282\u70b9\u90fd\u662f\u9694\u79bb\u7684\u3001\u5b64\u7acb\u7684\u8fdb\u7a0b\uff0c\u8fd9\u5bf9\u4e8e\u5b89\u5168\u5173\u952e\u7684\u64cd\u4f5c\u5f88\u91cd\u8981\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5b83\u4eec\u652f\u6301\u9501\u5b9a\u8d44\u6e90\u3002 \u4f8b\u5982\uff0c\u4e00\u4e2a CPU \u6838\u5fc3\u901a\u8fc7\u6570\u636e\u6d41\u914d\u7f6e\u6587\u4ef6\u53ef\u88ab\u9501\u5b9a\u81f3\u4e00\u4e2a\u81ea\u5b9a\u4e49\u8282\u70b9\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5b83\u4eec\u53ef\u4ee5\u5b8c\u5168\u63a7\u5236\u5176\u6267\u884c\uff0c\u4ece\u800c\u5141\u8bb8\u521b\u5efa\u590d\u6742\u7684\u8f93\u5165\u548c\u5524\u9192\u89c4\u5219\u3002")))}m.isMDXComponent=!0},6154:(e,r,t)=>{t.d(r,{Z:()=>n});const n=t.p+"assets/images/overview-44ded447dae4275cd68d5144d3489f59.svg"}}]);