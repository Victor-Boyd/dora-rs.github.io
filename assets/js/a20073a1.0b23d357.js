"use strict";(self.webpackChunkdora_rs_github_io=self.webpackChunkdora_rs_github_io||[]).push([[6566],{9442:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>se,contentTitle:()=>ee,default:()=>ae,frontMatter:()=>$,metadata:()=>te,toc:()=>oe});var o=s(4848),r=s(8453),a=s(6540),n=s(53),c=s(8193),i=s(1312),l=s(6347),d=s(5846),h=s(8774);const u={svgIcon:"svgIcon_R3jO",small:"small_SUAn",medium:"medium_GxVq",large:"large_TyPU",primary:"primary_V8Cc",secondary:"secondary_WyIo",success:"success_lY5U",error:"error_eHdq",warning:"warning_IB04",inherit:"inherit_2ln5"};function p(e){const{svgClass:t,colorAttr:s,children:r,color:a="inherit",size:c="medium",viewBox:i="0 0 24 24",...l}=e;return(0,o.jsx)("svg",{viewBox:i,color:s,"aria-hidden":!0,className:(0,n.A)(u.svgIcon,u[a],u[c],t),...l,children:r})}function m(e){return(0,o.jsx)(p,{...e,children:(0,o.jsx)("path",{d:"M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"})})}function g(e,t){const s=[...e];return s.sort(((e,s)=>t(e)>t(s)?1:t(s)>t(e)?-1:0)),s}const b=JSON.parse('[{"title":"Yolov5 Operator","description":"Yolov5 object detection operator","preview":"https://i.imgur.com/hPrazyl.jpg","website":"yolov5_operator","source":"https://github.com/dora-rs/dora-drives/blob/main/operators/yolov5_op.py","tags":["object_detection","python"]},{"title":"Plot Operator","description":"Plot operator based on cv2","preview":"https://i.imgur.com/ekEgDL5.png","website":"plot_operator","source":"https://github.com/dora-rs/dora-drives/blob/main/operators/plot.py","tags":["python"]},{"title":"PID Operator","description":"PID controller","preview":"https://i.imgur.com/AEmoZ7k.gif","website":"pid_control_operator","source":"https://github.com/dora-rs/dora-drives/blob/main/operators/pid_control_op.py","tags":["python","control"]},{"title":"Obstacle Location Operator","description":"Obstacle location based on LIDAR and 2D bounding boxes","preview":"https://i.imgur.com/Aq33qy5.png","website":"obstacle_location_operator","source":"https://github.com/dora-rs/dora-drives/blob/main/operators/obstacle_location_op.py","tags":["python"]},{"title":"FOT Operator","description":"Waypoint generation based on current position and frenet optimal trajectory planner.","preview":"https://i.imgur.com/klQitzg.png","website":"obstacle_location_operator","source":"https://github.com/dora-rs/dora-drives/blob/main/operators/fot_op.py","tags":["python"]},{"title":"YOLOP Operator","description":"YOLOP lane and drivable area detection","preview":"https://i.imgur.com/I531NIT.gif","website":"yolop_operator","source":"https://github.com/dora-rs/dora-drives/blob/main/operators/yolop_op.py","tags":["object_detection","python"]},{"title":"MiDaS Operator","description":"MiDaS depth estimation","preview":"https://i.imgur.com/UrF9iPN.png","website":"midas_operator","source":"https://github.com/dora-rs/dora-drives/blob/main/operators/midas_op.py","tags":["depth_estimation","python"]},{"title":"Webcam Operator","description":"Webcam Operator","preview":"https://i.imgur.com/CC0IW3i.png","website":"webcam_operator","source":"https://github.com/dora-rs/dora-drives/blob/main/operators/webcam_op.py","tags":["python"]},{"title":"Strong Sort Operator","description":"Strong Sort Operator","preview":"https://i.imgur.com/ozO1y7l.gif","website":"strong_sort_op","source":"https://github.com/dora-rs/dora-drives/blob/main/operators/strong_sort_op.py","tags":["object_detection","python"]}]');var f=s.t(b,2);const x={object_detection:{label:(0,i.T)({id:"showcase.tag.oject-detection.tag",message:"object detection"}),description:(0,i.T)({message:"Open-Source Docusaurus sites can be useful for inspiration!",id:"showcase.tag.oject-detection.description"}),color:"#39ca30"},python:{label:(0,i.T)({id:"showcase.tag.python.tag",message:"Python"}),description:(0,i.T)({message:"Docusaurus sites associated to a commercial product!",id:"showcase.tag.python.description"}),color:"#dfd545"},control:{label:(0,i.T)({id:"showcase.tag.control.tag",message:"Control"}),description:(0,i.T)({message:"Beautiful Docusaurus sites, polished and standing out from the initial template!",id:"showcase.tag.control.description"}),color:"#a44fb7"},depth_estimation:{label:(0,i.T)({id:"showcase.tag.depth-estimation.tag",message:"Depth Esimation"}),description:(0,i.T)({message:"Translated Docusaurus sites using the internationalization support with more than 1 locale.",id:"showcase.tag.depth-estimation.description"}),color:"#127f82"}},w=Object.keys(x),v=f;const _=function(){let e=v.default;return e=g(e,(e=>e.title.toLowerCase())),e=g(e,(e=>!e.tags.includes("favorite"))),e}();var j=s(1107);const y="checkboxLabel_nyuG",C="tags";function L(e){return new URLSearchParams(e).getAll(C)}function N(e,t){let{id:s,icon:r,label:n,tag:c,...i}=e;const d=(0,l.zy)(),h=(0,l.W6)(),[u,p]=(0,a.useState)(!1);(0,a.useEffect)((()=>{const e=L(d.search);p(e.includes(c))}),[c,d]);const m=(0,a.useCallback)((()=>{const e=function(e,t){const s=e.indexOf(t);if(-1===s)return e.concat(t);const o=[...e];return o.splice(s,1),o}(L(d.search),c),t=function(e,t){const s=new URLSearchParams(e);return s.delete(C),t.forEach((e=>s.append(C,e))),s.toString()}(d.search,e);h.push({...d,search:t,state:Y()})}),[c,d,h]);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("input",{type:"checkbox",id:s,className:"screen-reader-only",onKeyDown:e=>{"Enter"===e.key&&m()},onFocus:e=>{e.relatedTarget&&e.target.nextElementSibling?.dispatchEvent(new KeyboardEvent("focus"))},onBlur:e=>{e.target.nextElementSibling?.dispatchEvent(new KeyboardEvent("blur"))},onChange:m,checked:u,...i}),(0,o.jsxs)("label",{ref:t,htmlFor:s,className:y,children:[n,r]})]})}const E=a.forwardRef(N),k={checkboxLabel:"checkboxLabel_C_EF"},S="operator";function A(e){return new URLSearchParams(e).get(S)??"OR"}function O(){const e="showcase_filter_toggle",t=(0,l.zy)(),s=(0,l.W6)(),[r,c]=(0,a.useState)(!1);(0,a.useEffect)((()=>{c("AND"===A(t.search))}),[t]);const i=(0,a.useCallback)((()=>{c((e=>!e));const e=new URLSearchParams(t.search);e.delete(S),r||e.append(S,"AND"),s.push({...t,search:e.toString(),state:Y()})}),[r,t,s]);return(0,o.jsxs)("div",{children:[(0,o.jsx)("input",{type:"checkbox",id:e,className:"screen-reader-only","aria-label":"Toggle between or and and for the tags you selected",onChange:i,onKeyDown:e=>{"Enter"===e.key&&i()},checked:r}),(0,o.jsxs)("label",{htmlFor:e,className:(0,n.A)(k.checkboxLabel,"shadow--md"),children:[(0,o.jsx)("span",{className:k.checkboxLabelOr,children:"OR"}),(0,o.jsx)("span",{className:k.checkboxLabelAnd,children:"AND"})]})]})}var I=s(961),T=s(991);const F={tooltip:"tooltip_u6Wa",tooltipArrow:"tooltipArrow_gH7I"};function P(e){let{children:t,id:s,anchorEl:r,text:n}=e;const[c,i]=(0,a.useState)(!1),[l,d]=(0,a.useState)(null),[h,u]=(0,a.useState)(null),[p,m]=(0,a.useState)(null),[g,b]=(0,a.useState)(null),{styles:f,attributes:x}=(0,T.E)(l,h,{modifiers:[{name:"arrow",options:{element:p}},{name:"offset",options:{offset:[0,8]}}]}),w=(0,a.useRef)(null),v=`${s}_tooltip`;return(0,a.useEffect)((()=>{b(r?"string"==typeof r?document.querySelector(r):r:document.body)}),[g,r]),(0,a.useEffect)((()=>{const e=["mouseenter","focus"],t=["mouseleave","blur"],s=()=>{""!==n&&(l?.removeAttribute("title"),w.current=window.setTimeout((()=>{i(!0)}),400))},o=()=>{clearInterval(w.current),i(!1)};return l&&(e.forEach((e=>{l.addEventListener(e,s)})),t.forEach((e=>{l.addEventListener(e,o)}))),()=>{l&&(e.forEach((e=>{l.removeEventListener(e,s)})),t.forEach((e=>{l.removeEventListener(e,o)})))}}),[l,n]),(0,o.jsxs)(o.Fragment,{children:[a.cloneElement(t,{ref:d,"aria-describedby":c?v:void 0}),g?I.createPortal(c&&(0,o.jsxs)("div",{id:v,role:"tooltip",ref:u,className:F.tooltip,style:f.popper,...x.popper,children:[n,(0,o.jsx)("span",{ref:m,className:F.tooltipArrow,style:f.arrow})]}),g):g]})}const D={showcaseCardImage:"showcaseCardImage_ilpR",showcaseCardHeader:"showcaseCardHeader_OEf6",showcaseCardTitle:"showcaseCardTitle_N5BJ",svgIconFavorite:"svgIconFavorite_ndny",showcaseCardSrcBtn:"showcaseCardSrcBtn_cNFV",showcaseCardBody:"showcaseCardBody_o6UT",cardFooter:"cardFooter_Z6cQ",tag:"tag_JW46",textLabel:"textLabel_zE2j",colorLabel:"colorLabel_K1aW"},R=a.forwardRef(((e,t)=>{let{label:s,color:r,description:a}=e;return(0,o.jsxs)("li",{ref:t,className:D.tag,title:a,children:[(0,o.jsx)("span",{className:D.textLabel,children:s.toLowerCase()}),(0,o.jsx)("span",{className:D.colorLabel,style:{backgroundColor:r}})]})}));function B(e){let{tags:t}=e;const s=g(t.map((e=>({tag:e,...x[e]}))),(e=>w.indexOf(e.tag)));return(0,o.jsx)(o.Fragment,{children:s.map(((e,t)=>{const s=`showcase_card_tag_${e.tag}`;return(0,o.jsx)(P,{text:e.description,anchorEl:"#__docusaurus",id:s,children:(0,o.jsx)(R,{...e},t)},t)}))})}function U(e){let{user:t}=e;!function(e){e.preview}(t);const s=(r=t.source,new URL(r).pathname.split("/").at(-1)).replace(".py","");var r;return(0,o.jsxs)("li",{className:"card shadow--md",children:[(0,o.jsx)("div",{className:(0,n.A)("card__image",D.showcaseCardImage),children:(0,o.jsx)(h.A,{href:s,className:D.showcaseCardLink,children:(0,o.jsx)("img",{src:t.preview,alt:" "})})}),(0,o.jsxs)("div",{className:"card__body",children:[(0,o.jsxs)("div",{className:(0,n.A)(D.showcaseCardHeader),children:[(0,o.jsx)(j.A,{as:"h4",className:D.showcaseCardTitle,children:(0,o.jsx)(h.A,{href:s,className:D.showcaseCardLink,children:t.title})}),t.tags.includes("favorite")&&(0,o.jsx)(m,{svgClass:D.svgIconFavorite,size:"small"}),t.source&&(0,o.jsx)(h.A,{href:t.source,className:(0,n.A)("button button--secondary button--sm",D.showcaseCardSrcBtn),children:(0,o.jsx)(i.A,{id:"showcase.card.sourceLink",children:"source"})})]}),(0,o.jsx)("p",{className:D.showcaseCardBody,children:t.description})]}),(0,o.jsx)("ul",{className:(0,n.A)("card__footer",D.cardFooter),children:(0,o.jsx)(B,{tags:t.tags})})]},t.title)}const z=a.memo(U),W={filterCheckbox:"filterCheckbox_q3sb",checkboxList:"checkboxList_OUH8",checkboxListItem:"checkboxListItem_P6Ma",searchContainer:"searchContainer_e2L2",showcaseList:"showcaseList_lJcJ",showcaseFavorite:"showcaseFavorite_iniO",showcaseFavoriteHeader:"showcaseFavoriteHeader_bJ1Y",svgIconFavoriteXs:"svgIconFavoriteXs_BcXG",svgIconFavorite:"svgIconFavorite_wQHr"},H=((0,i.T)({message:"dora-rs nodes and operators"}),(0,i.T)({message:"List of operators already implemented by the community"})),M="https://discord.com/channels/1146393916472561734/1148336336294662196";function Y(){if(c.A.canUseDOM)return{scrollTopPosition:window.scrollY,focusedElementId:document.activeElement?.id}}const q="name";function J(e){return new URLSearchParams(e).get(q)}function K(){const e=(0,l.zy)(),[t,s]=(0,a.useState)("OR"),[o,r]=(0,a.useState)([]),[n,c]=(0,a.useState)(null);return(0,a.useEffect)((()=>{r(L(e.search)),s(A(e.search)),c(J(e.search)),function(e){const{scrollTopPosition:t,focusedElementId:s}=e??{scrollTopPosition:0,focusedElementId:void 0};document.getElementById(s)?.focus(),window.scrollTo({top:t})}(e.state)}),[e]),(0,a.useMemo)((()=>function(e,t,s,o){return o&&(e=e.filter((e=>e.title.toLowerCase().includes(o.toLowerCase())))),0===t.length?e:e.filter((e=>0!==e.tags.length&&("AND"===s?t.every((t=>e.tags.includes(t))):t.some((t=>e.tags.includes(t))))))}(_,o,t,n)),[o,t,n])}function X(){return(0,o.jsxs)("section",{className:"margin-top--lg margin-bottom--lg text--center",children:[(0,o.jsx)("p",{children:H}),(0,o.jsx)(h.A,{className:"button button--primary",to:M,children:(0,o.jsx)(i.A,{id:"showcase.header.button",children:"\ud83d\ude4f Please add your Operators or Nodes"})})]})}function G(){const e=K(),t=function(){const{selectMessage:e}=(0,d.W)();return t=>e(t,(0,i.T)({id:"showcase.filters.resultCount",description:'Pluralized label for the number of sites found on the showcase. Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"1 site|{sitesCount} sites"},{sitesCount:t}))}();return(0,o.jsxs)("section",{className:"container margin-top--l margin-bottom--lg",children:[(0,o.jsxs)("div",{className:(0,n.A)("margin-bottom--sm",W.filterCheckbox),children:[(0,o.jsxs)("div",{children:[(0,o.jsx)(j.A,{as:"h2",children:(0,o.jsx)(i.A,{id:"showcase.filters.title",children:"Filters"})}),(0,o.jsx)("span",{children:t(e.length)})]}),(0,o.jsx)(O,{})]}),(0,o.jsx)("ul",{className:(0,n.A)("clean-list",W.checkboxList),children:w.map(((e,t)=>{const{label:s,description:r,color:a}=x[e],n=`showcase_checkbox_id_${e}`;return(0,o.jsx)("li",{className:W.checkboxListItem,children:(0,o.jsx)(P,{id:n,text:r,anchorEl:"#__docusaurus",children:(0,o.jsx)(E,{tag:e,id:n,label:s,icon:"favorite"===e?(0,o.jsx)(m,{svgClass:W.svgIconFavoriteXs}):(0,o.jsx)("span",{style:{backgroundColor:a,width:10,height:10,borderRadius:"50%",marginLeft:8}})})})},t)}))})]})}_.filter((e=>e.tags.includes("favorite"))),_.filter((e=>!e.tags.includes("favorite")));function Q(){const e=(0,l.W6)(),t=(0,l.zy)(),[s,r]=(0,a.useState)(null);return(0,a.useEffect)((()=>{r(J(t.search))}),[t]),(0,o.jsx)("div",{className:W.searchContainer,children:(0,o.jsx)("input",{id:"searchbar",placeholder:(0,i.T)({message:"Search for site name...",id:"showcase.searchBar.placeholder"}),value:s??void 0,onInput:s=>{r(s.currentTarget.value);const o=new URLSearchParams(t.search);o.delete(q),s.currentTarget.value&&o.set(q,s.currentTarget.value),e.push({...t,search:o.toString(),state:Y()}),setTimeout((()=>{document.getElementById("searchbar")?.focus()}),0)}})})}function V(){const e=K();return 0===e.length?(0,o.jsx)("section",{className:"margin-top--lg margin-bottom--xl",children:(0,o.jsxs)("div",{className:"container padding-vert--md text--center",children:[(0,o.jsx)(j.A,{as:"h2",children:(0,o.jsx)(i.A,{id:"showcase.usersList.noResult",children:"No result"})}),(0,o.jsx)(Q,{})]})}):(0,o.jsx)("section",{className:"margin-top--lg margin-bottom--xl",children:(0,o.jsxs)("div",{className:"container",children:[(0,o.jsx)("div",{className:(0,n.A)("margin-bottom--md",W.showcaseFavoriteHeader),children:(0,o.jsx)(Q,{})}),(0,o.jsx)("ul",{className:(0,n.A)("clean-list",W.showcaseList),children:e.map((e=>(0,o.jsx)(z,{user:e},e.title)))})]})})}function Z(){return(0,o.jsxs)("div",{children:[(0,o.jsx)(X,{}),(0,o.jsx)(G,{}),(0,o.jsx)(V,{})]})}const $={sidebar_position:1},ee="Search",te={id:"nodes_operators/search",title:"Search",description:"",source:"@site/docs/nodes_operators/search.mdx",sourceDirName:"nodes_operators",slug:"/nodes_operators/search",permalink:"/docs/nodes_operators/search",draft:!1,unlisted:!1,editUrl:"https://github.com/dora-rs/dora-rs.github.io/edit/main/docs/nodes_operators/search.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"nodes_operators",next:{title:"FOT operator",permalink:"/docs/nodes_operators/fot_op"}},se={},oe=[];function re(e){const t={h1:"h1",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"search",children:"Search"}),"\n","\n",(0,o.jsx)(Z,{})]})}function ae(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(re,{...e})}):re(e)}}}]);