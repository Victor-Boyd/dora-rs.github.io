"use strict";(self.webpackChunkdora_rs_github_io=self.webpackChunkdora_rs_github_io||[]).push([[2634],{6467:(e,o,r)=>{r.r(o),r.d(o,{default:()=>j});r(6540);var t=r(53),a=r(8774),s=r(4586),i=r(4561);const n={showcaseCardImage:"showcaseCardImage_InWo",showcaseCardHeader:"showcaseCardHeader_N6yW",showcaseCardTitle:"showcaseCardTitle_LQCQ",svgIconFavorite:"svgIconFavorite_MWUW",showcaseCardSrcBtn:"showcaseCardSrcBtn_foxJ",showcaseCardBody:"showcaseCardBody_Di64",cardFooter:"cardFooter_qfLQ",tag:"tag_Qp1H",textLabel:"textLabel_cj8Y",colorLabel:"colorLabel_JJ2L",filterCheckbox:"filterCheckbox_v6TT",checkboxList:"checkboxList_ZZAA",checkboxListItem:"checkboxListItem_fTsl",searchContainer:"searchContainer_FVwR",showcaseList:"showcaseList_bTRm",showcaseFavorite:"showcaseFavorite_aNga",showcaseFavoriteHeader:"showcaseFavoriteHeader_ZtH3",svgIconFavoriteXs:"svgIconFavoriteXs_RkWE"};var d=r(1107),c=r(1312),l=r(4848);const h=[{title:(0,c.T)({message:"\u2b50 Zero Overhead",id:"homepage.features.shared-memory.title"}),button:(0,c.T)({message:"Zero Overhead",id:"homepage.features.shared-memory.button"}),description:(0,l.jsx)(c.A,{id:"homepage.features.shared-memory.text",children:"Transfer message with zero copy on shared memory! We use Arrow and our own shared memory daemon to make lightspeed communication on a single machine."})},{title:(0,c.T)({message:"\ud83e\udd2f Scalable",id:"homepage.features.scale.title"}),button:(0,c.T)({message:"Dataflow specification",id:"homepage.features.scale.button"}),description:(0,l.jsx)(c.A,{id:"homepage.features.scale.text",children:"Built to scale across machines and robots! We use YAML description to make our software declarative in order to be distributable on multiple machines."}),href:"docs/api/dataflow-config"},{title:(0,c.T)({message:"\ud83d\udc68\u200d\ud83c\udfed Fast Prototyping",id:"homepage.features.prototyping.title"}),button:(0,c.T)({message:"Hot reloading",id:"homepage.features.prototyping.button"}),description:(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(c.A,{id:"homepage.features.prototyping.text",children:"Use readily available nodes and operators from your YAML dataflow, so that you don't need to bother copy-pasting boilerplate code. You can also tinker live using Python!"})}),href:"docs/guides/Development/hot-reload"},{title:(0,c.T)({message:"\ud83d\udd2d Observable",id:"homepage.features.observable.title"}),button:(0,c.T)({message:"Logs",id:"homepage.features.observable.button"}),description:(0,l.jsx)(c.A,{id:"homepage.features.observable.text",children:"Get logs, traces and metrics through our cli and opentelemetry!"}),href:"docs/guides/Debugging/logs"},{title:(0,c.T)({message:"\ud83d\udcbb Large Support Matrix",id:"homepage.features.cross-platform.title"}),button:(0,c.T)({message:"Support Matrix",id:"homepage.features.cross-platform.button"}),description:(0,l.jsx)(c.A,{id:"homepage.features.cross-platform.text",children:"dora is available in Python, Rust, C and C++ on most platforms and architecture!"}),href:"docs/guides/support-matrix"},{title:(0,c.T)({message:"\ud83e\uddd1\u200d\ud83e\udd1d\u200d\ud83e\uddd1 Community",id:"homepage.features.community.title"}),button:(0,c.T)({message:"Discord",id:"homepage.features.community.button"}),description:(0,l.jsx)(c.A,{id:"homepage.features.community.text",children:"We hope to make dora a community-driven project and help other learn about robotics."}),href:"https://discord.gg/DXJ6edAtym"}];function m(e){let{Svg:o,title:r,button:s,description:i,href:c}=e;return(0,l.jsxs)("div",{className:"card shadow--md",children:[(0,l.jsxs)("div",{className:"card__body",children:[(0,l.jsx)("div",{className:(0,t.A)(n.showcaseCardHeader),children:(0,l.jsx)(d.A,{as:"h4",className:n.showcaseCardTitle,children:r})}),(0,l.jsx)("p",{className:n.showcaseCardBody,children:i})]}),(0,l.jsx)("div",{className:"card__footer",children:(0,l.jsx)(a.A,{className:"button button--primary",href:c,children:s})})]})}function p(){return(0,l.jsx)("section",{className:"margin-top--lg margin-bottom--xl",children:(0,l.jsx)("div",{className:"container margin-top--lg ",children:(0,l.jsx)("ul",{className:(0,t.A)("clean-list",n.showcaseList),children:h.map(((e,o)=>(0,l.jsx)(m,{...e},o)))})})})}var u=r(8478),f=r(7293);const x={container:"container_bfhl",row:"row_Kb3D",h1:"h1_SKUt",spacer:"spacer_hnjC",hero:"hero_aEcG",heroContainer:"heroContainer_i2aB",heroBefore:"heroBefore_Nccm",heroAfter:"heroAfter_rddx",loopsContainer:"loopsContainer_X0tn",heroLoops:"heroLoops_wCY6",heroPackage:"heroPackage_2PmF",heroImage:"heroImage_xZN7",heroSubtitle:"heroSubtitle_jFu1",commandContainer:"commandContainer_y6dw",cardContainer:"cardContainer_z0Sh",card:"card_M5pr",cardSide:"cardSide_Y6jR",cardLeading:"cardLeading_NK6F",cardImage:"cardImage_DTfg",cardSpacer:"cardSpacer_TH73",featureRoadmapEntry:"featureRoadmapEntry_kVIk",featureRoadmapIconContainer:"featureRoadmapIconContainer_u1CY",featureRoadmapIcon:"featureRoadmapIcon_ODO8",featureIcon:"featureIcon_qaBM",roadmapIcon:"roadmapIcon_IDaP",sponsor:"sponsor_eEfG"};var g=r(1470),b=r(9365);function y(){const{siteConfig:e}=(0,s.A)(),o={options_python:{chart:{type:"line"},legend:{position:"top"},xaxis:{categories:["8 B","40 kB","400 kB","4 MB","40 MB"],title:{text:"Message Size"}},yaxis:[{title:{text:"Latency (milliseconds)"},max:160,min:0,tickAmount:8}],stroke:{width:[2,2]},tooltip:{y:{formatter:function(e){return e+" ms"}}},annotations:{xaxis:[{x:"400 kB",strokeDashArray:0,borderColor:"#089f8f",label:{borderColor:"#089f8f",text:"480p"}},{x:"4 MB",strokeDashArray:0,borderColor:"#08737f",label:{borderColor:"#08737f",text:"1080p"}}],points:[{x:"40 MB",y:8.94,marker:{size:8,fillColor:"#fff",strokeColor:"red",radius:2,cssClass:"apexcharts-custom-class"},label:{borderColor:"#FF4560",offsetY:0,offsetX:-40,style:{color:"#fff",background:"#FF4560"},text:"17x Faster than ROS 2"}}]}},options_rust:{chart:{type:"line"},legend:{position:"top"},xaxis:{categories:["8 B","40 kB","400 kB","4 MB","40 MB"],title:{text:"Message Size"}},yaxis:[{title:{text:"Latency (milliseconds)"},max:160,min:0,tickAmount:8}],stroke:{width:[2,2]},tooltip:{y:{formatter:function(e){return e+" ms"}}},annotations:{xaxis:[{x:"400 kB",strokeDashArray:0,borderColor:"#089f8f",label:{borderColor:"#089f8f",text:"480p"}},{x:"4 MB",strokeDashArray:0,borderColor:"#08737f",label:{borderColor:"#08737f",text:"1080p"}}],points:[{x:"40 MB",y:4.49,marker:{size:8,fillColor:"#fff",strokeColor:"red",radius:2,cssClass:"apexcharts-custom-class"},label:{borderColor:"#FF4560",offsetY:0,offsetX:-40,style:{color:"#fff",background:"#FF4560"},text:"10x Faster than ROS 2"}}]}},options_cpp:{chart:{type:"line"},legend:{position:"top"},xaxis:{categories:["8 B","40 kB","400 kB","4 MB","40 MB"],title:{text:"Message Size"}},yaxis:[{title:{text:"Latency (milliseconds)"},max:160,min:0,tickAmount:8}],stroke:{width:[2,2]},tooltip:{y:{formatter:function(e){return e+" ms"}}},annotations:{xaxis:[{x:"400 kB",strokeDashArray:0,borderColor:"#089f8f",label:{borderColor:"#089f8f",text:"480p"}},{x:"4 MB",strokeDashArray:0,borderColor:"#08737f",label:{borderColor:"#08737f",text:"1080p"}}],points:[{x:"40 MB",y:4.49,marker:{size:8,fillColor:"#fff",strokeColor:"red",radius:2,cssClass:"apexcharts-custom-class"},label:{borderColor:"#FF4560",offsetY:0,offsetX:-70,style:{color:"#fff",background:"#FF4560"},text:"Match ROS 2 C/C++ Shared Memory"}}]}},series_python:[{name:"dora-rs",data:[.53,.41,.69,2.18,8.94],color:"#3578e5"},{name:"ROS 2",data:[.71,.97,4.94,14.76,153.11],color:"#545454"}],series_rust:[{name:"dora-rs",data:[.28,.28,.34,.91,4.49],color:"#3578e5"},{name:"ROS 2",data:[.44,.49,.48,4.17,40.99],color:"#545454"}],series_cpp:[{name:"dora-rs",data:[.28,.28,.34,.91,4.49],color:"#3578e5"},{name:"ROS 2",data:[.19,.29,.3,.67,4.55],color:"#545454"}]};return(0,l.jsx)("header",{className:(0,t.A)("hero",x.heroBanner),children:(0,l.jsxs)("div",{className:"container",style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:[(0,l.jsxs)("div",{className:"margin-right--md margin-bottom--xl",children:[(0,l.jsx)("img",{src:"/img/logo.svg",width:"400"}),(0,l.jsxs)("div",{style:{width:"100%",maxWidth:"600px"},children:[(0,l.jsx)("p",{className:"hero__subtitle",children:e.tagline}),(0,l.jsxs)("p",{children:[(0,l.jsx)(c.A,{id:"homepage.main.paragraph.first",children:"In 2023, AI is booming! Robotic framework however hasn't changed much in years... This is why we create dora-rs! dora-rs is a new robotic framework that brings modernity into robotic application."})," "]}),(0,l.jsx)("p",{children:(0,l.jsx)(c.A,{id:"homepage.main.paragraph.second",children:"dora-rs can already show impressive performance! This is the result of using our own shared memory server and Apache Arrow to achieve zero copy!"})}),(0,l.jsx)("p",{children:(0,l.jsx)(c.A,{id:"homepage.main.paragraph.third",children:"Those performance improvements make a world of difference for beginners, AI practitioners, and weekend hobbyists who have been limited by the lack of support for Python in this field!"})}),(0,l.jsx)("p",{children:(0,l.jsx)(c.A,{id:"homepage.main.paragraph.fourth",children:"And that's only one example of the many innovative features that we can show for dora-rs!"})})]}),(0,l.jsxs)("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-evenly",flexWrap:"wrap"},children:[(0,l.jsx)("div",{className:x.buttons,children:(0,l.jsx)(a.A,{className:"button button--secondary button--md margin-bottom--md",to:"/docs/guides",children:(0,l.jsx)(c.A,{id:"homepage.guide.button.text",children:"\ud83d\udd25 Get started"})})}),(0,l.jsx)("div",{className:x.buttons,children:(0,l.jsx)(a.A,{className:"button button--secondary button--md margin-bottom--md",to:"/docs/api/python-api",children:(0,l.jsx)(c.A,{id:"homepage.python-api.button.text",children:"\ud83d\udc0d Python API"})})}),(0,l.jsx)("div",{className:x.buttons,children:(0,l.jsx)(a.A,{className:"button button--secondary button--md",to:"https://docs.rs/dora-node-api/latest/dora_node_api/",children:(0,l.jsx)(c.A,{id:"homepage.rust-api.button.text",children:"\ud83e\udd80 Rust API"})})})]})]}),(0,l.jsx)("div",{style:{width:"100%",maxWidth:"600px"},children:(0,l.jsxs)("div",{className:"margin-top--lg",children:[(0,l.jsx)("h2",{children:"Latency (Lower is better)"}),(0,l.jsxs)(g.A,{groupId:"language",queryString:!0,children:[(0,l.jsx)(b.A,{value:"Python",label:"Python API",children:(0,l.jsx)(u.A,{fallback:(0,l.jsx)("div",{children:"Chart not supported"}),children:()=>{const e=r(7242).A;return(0,l.jsx)(e,{options:o.options_python,series:o.series_python,width:"100%"})}})}),(0,l.jsxs)(b.A,{value:"Rust",label:"Rust API",children:[(0,l.jsx)(u.A,{fallback:(0,l.jsx)("div",{children:"Chart not supported"}),children:()=>{const e=r(7242).A;return(0,l.jsx)(e,{options:o.options_rust,series:o.series_rust,width:"100%"})}}),(0,l.jsxs)(f.A,{type:"info",children:[(0,l.jsx)(a.A,{to:"https://github.com/haixuanTao/ros2_rust",children:"Source code for ros2_rust"}),(0,l.jsx)("br",{}),(0,l.jsx)(a.A,{to:"https://github.com/dora-rs/dora/tree/main/examples/benchmark",children:"Source code for dora-rs"})]})]}),(0,l.jsxs)(b.A,{value:"C/C++",label:"C/C++ API",children:[(0,l.jsx)(u.A,{fallback:(0,l.jsx)("div",{children:"Chart not supported"}),children:()=>{const e=r(7242).A;return(0,l.jsx)(e,{options:o.options_cpp,series:o.series_cpp,width:"100%"})}}),(0,l.jsxs)(f.A,{type:"info",children:["ROS 2 shared memory is only available for C/C++.",(0,l.jsx)("br",{}),(0,l.jsx)(a.A,{to:"https://github.com/haixuanTao/ros2_shm_demo",children:"Source code for ROS 2 benchmark."}),(0,l.jsx)("br",{}),(0,l.jsx)(a.A,{to:"https://github.com/dora-rs/dora/tree/main/examples/benchmark",children:"Source code for dora-rs"})]})]})]})]})})]})})}function j(){const{siteConfig:e}=(0,s.A)();return(0,l.jsxs)(i.A,{title:`Hello from ${e.title}`,description:"Description will go into a meta tag in <head />",children:[(0,l.jsx)(y,{}),(0,l.jsx)("main",{children:(0,l.jsx)(p,{})})]})}}}]);