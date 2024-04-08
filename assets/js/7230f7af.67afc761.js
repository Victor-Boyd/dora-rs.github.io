"use strict";(self.webpackChunkdora_rs_github_io=self.webpackChunkdora_rs_github_io||[]).push([[5017],{3536:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>r,contentTitle:()=>c,default:()=>u,frontMatter:()=>l,metadata:()=>a,toc:()=>d});var i=t(4848),n=t(8453);const l={},c="Metrics",a={id:"guides/Debugging/metrics",title:"Metrics",description:"Dora export metrics to//localhost:4317 if a backend is available at this address.",source:"@site/docs/guides/Debugging/metrics.md",sourceDirName:"guides/Debugging",slug:"/guides/Debugging/metrics",permalink:"/docs/guides/Debugging/metrics",draft:!1,unlisted:!1,editUrl:"https://github.com/dora-rs/dora-rs.github.io/edit/main/docs/guides/Debugging/metrics.md",tags:[],version:"current",frontMatter:{},sidebar:"guides",previous:{title:"Logs",permalink:"/docs/guides/Debugging/logs"},next:{title:"Tracing",permalink:"/docs/guides/Debugging/tracing"}},r={},d=[{value:"Metrics",id:"metrics-1",level:2},{value:"Future Metrics",id:"future-metrics",level:2},{value:"Opentelemetry",id:"opentelemetry",level:2},{value:"Example: InfluxDB",id:"example-influxdb",level:2},{value:"Result",id:"result",level:2}];function o(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",input:"input",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h1,{id:"metrics",children:"Metrics"}),"\n",(0,i.jsxs)(s.p,{children:["Dora export metrics to: ",(0,i.jsx)(s.code,{children:"http://localhost:4317"})," if a backend is available at this address."]}),"\n",(0,i.jsx)(s.h2,{id:"metrics-1",children:"Metrics"}),"\n",(0,i.jsxs)(s.p,{children:["Currently exported metrics ",(0,i.jsx)(s.strong,{children:"per node"}),":"]}),"\n",(0,i.jsxs)(s.ul,{className:"contains-task-list",children:["\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",checked:!0,disabled:!0})," ","CPU usage"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",checked:!0,disabled:!0})," ","Memory usage"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",checked:!0,disabled:!0})," ","Disk usage"]}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:["If you are using an NVIDIA GPU, we will include ",(0,i.jsx)(s.strong,{children:"per node"}),":"]}),"\n",(0,i.jsxs)(s.ul,{className:"contains-task-list",children:["\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",checked:!0,disabled:!0})," ","GPU memory usage"]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"future-metrics",children:"Future Metrics"}),"\n",(0,i.jsxs)(s.ul,{className:"contains-task-list",children:["\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Battery level and power usage."]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Global CPU, GPU, RAM, GPU RAM, Disk usage."]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Temperature of CPU, GPU."]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Power usage of CPU, GPU."]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"opentelemetry",children:"Opentelemetry"}),"\n",(0,i.jsx)(s.p,{children:"Opentelemetry makes it possible to monitor logs, traces, and metrics with the same abstraction in a language agnostic and backend agnostic."}),"\n",(0,i.jsx)("p",{align:"center",children:(0,i.jsx)("img",{src:"/img/opentelemetry.png",width:"80%"})}),"\n",(0,i.jsx)(s.h2,{id:"example-influxdb",children:"Example: InfluxDB"}),"\n",(0,i.jsxs)(s.p,{children:["To use dora with InfluxDB, just install ",(0,i.jsx)(s.a,{href:"https://docs.influxdata.com/telegraf/v1/install/",children:(0,i.jsx)(s.code,{children:"telegraf"})})]}),"\n",(0,i.jsx)(s.p,{children:"And launch it as a background task as follow:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-bash",children:"telegraf --config <CONFIG> # ex: https://eu-central-1-1.aws.cloud2.influxdata.com/api/v2/telegrafs/0c25fb61\n"})}),"\n",(0,i.jsx)(s.h2,{id:"result",children:"Result"}),"\n",(0,i.jsx)("p",{align:"center",children:(0,i.jsx)("img",{src:"/img/influxdb.png",width:"100%"})})]})}function u(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},8453:(e,s,t)=>{t.d(s,{R:()=>c,x:()=>a});var i=t(6540);const n={},l=i.createContext(n);function c(e){const s=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:c(e.components),i.createElement(l.Provider,{value:s},e.children)}}}]);