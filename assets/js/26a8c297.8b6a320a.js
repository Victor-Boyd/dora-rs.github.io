"use strict";(self.webpackChunkdora_rs_github_io=self.webpackChunkdora_rs_github_io||[]).push([[1239],{6235:(n,e,o)=>{o.r(e),o.d(e,{assets:()=>a,contentTitle:()=>d,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=o(4848),t=o(8453);const i={},d=void 0,s={id:"api/cli",title:"cli",description:"\x3c!---",source:"@site/docs/api/cli.md",sourceDirName:"api",slug:"/api/cli",permalink:"/docs/api/cli",draft:!1,unlisted:!1,editUrl:"https://github.com/dora-rs/dora-rs.github.io/edit/main/docs/api/cli.md",tags:[],version:"current",frontMatter:{}},a={},l=[{value:"Overview",id:"overview",level:2},{value:"<code>up</code>",id:"up",level:2},{value:"<code>new</code>",id:"new",level:2},{value:"<code>start</code>",id:"start",level:2},{value:"<code>list</code>",id:"list",level:2},{value:"<code>logs</code>",id:"logs",level:2},{value:"<code>check</code>",id:"check",level:2},{value:"<code>stop</code>",id:"stop",level:2},{value:"<code>destroy</code>",id:"destroy",level:2},{value:"<code>graph</code>",id:"graph",level:2},{value:"<code>--version</code>",id:"--version",level:2}];function c(n){const e={code:"code",h2:"h2",p:"p",pre:"pre",...(0,t.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h2,{id:"overview",children:"Overview"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"dora-rs cli client\n\nUsage: dora <COMMAND>\n\nCommands:\n  check        Check if the coordinator and the daemon is running\n  graph        Generate a visualization of the given graph using mermaid.js. Use --open to open\n                   browser\n  build        Run build commands provided in the given dataflow\n  new          Generate a new project, node or operator. Choose the language between Rust,\n                   Python, C or C++\n  up           Spawn a coordinator and a daemon\n  destroy      Destroy running coordinator and daemon. If some dataflows are still running, they\n                   will be stopped first\n  start        Start the given dataflow path. Attach a name to the running dataflow by using\n                   --name\n  stop         Stop the given dataflow UUID. If no id is provided, you will be able to choose\n                   between the running dataflows\n  list         List running dataflows\n  logs         Show logs of a given dataflow and node\n  daemon       Run daemon\n  runtime      Run runtime\n  coordinator  Run coordinator\n  help         Print this message or the help of the given subcommand(s)\n\nOptions:\n  -h, --help     Print help\n  -V, --version  Print version\n"})}),"\n",(0,r.jsx)(e.h2,{id:"up",children:(0,r.jsx)(e.code,{children:"up"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"Spawn a coordinator and a daemon\n\nUsage: dora up [OPTIONS]\n\nOptions:\n      --config <CONFIG>  \n  -h, --help             Print help\n"})}),"\n",(0,r.jsx)(e.h2,{id:"new",children:(0,r.jsx)(e.code,{children:"new"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"Generate a new project, node or operator. Choose the language between Rust, Python, C or C++\n\nUsage: dora new [OPTIONS] <NAME> [PATH]\n\nArguments:\n  <NAME>  \n  [PATH]  \n\nOptions:\n      --kind <KIND>  [default: dataflow] [possible values: dataflow, operator, custom-node]\n      --lang <LANG>  [default: rust] [possible values: rust, python, c, cxx]\n  -h, --help         Print help\n"})}),"\n",(0,r.jsx)(e.h2,{id:"start",children:(0,r.jsx)(e.code,{children:"start"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"Start the given dataflow path. Attach a name to the running dataflow by using --name\n\nUsage: dora start [OPTIONS] <DATAFLOW>\n\nArguments:\n  <DATAFLOW>  \n\nOptions:\n      --name <NAME>  \n      --attach       \n      --hot-reload   \n  -h, --help         Print help\n"})}),"\n",(0,r.jsx)(e.h2,{id:"list",children:(0,r.jsx)(e.code,{children:"list"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"List running dataflows\n\nUsage: dora list\n\nOptions:\n  -h, --help  Print help\n"})}),"\n",(0,r.jsx)(e.h2,{id:"logs",children:(0,r.jsx)(e.code,{children:"logs"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"Show logs of a given dataflow and node\n\nUsage: dora logs [DATAFLOW] <NODE>\n\nArguments:\n  [DATAFLOW]  \n  <NODE>      \n\nOptions:\n  -h, --help  Print help\n"})}),"\n",(0,r.jsx)(e.h2,{id:"check",children:(0,r.jsx)(e.code,{children:"check"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"Check if the coordinator and the daemon is running\n\nUsage: dora check [OPTIONS]\n\nOptions:\n      --dataflow <DATAFLOW>  \n  -h, --help                 Print help\n"})}),"\n",(0,r.jsx)(e.h2,{id:"stop",children:(0,r.jsx)(e.code,{children:"stop"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"Stop the given dataflow UUID. If no id is provided, you will be able to choose between the running\ndataflows\n\nUsage: dora stop [OPTIONS] [UUID]\n\nArguments:\n  [UUID]  \n\nOptions:\n      --name <NAME>  \n  -h, --help         Print help\n"})}),"\n",(0,r.jsx)(e.h2,{id:"destroy",children:(0,r.jsx)(e.code,{children:"destroy"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"Destroy running coordinator and daemon. If some dataflows are still running, they will be stopped\nfirst\n\nUsage: dora destroy [OPTIONS]\n\nOptions:\n      --config <CONFIG>  \n  -h, --help             Print help\n"})}),"\n",(0,r.jsx)(e.h2,{id:"graph",children:(0,r.jsx)(e.code,{children:"graph"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"Generate a visualization of the given graph using mermaid.js. Use --open to open browser\n\nUsage: dora graph [OPTIONS] <DATAFLOW>\n\nArguments:\n  <DATAFLOW>  \n\nOptions:\n      --mermaid  \n      --open     \n  -h, --help     Print help\n"})}),"\n",(0,r.jsx)(e.h2,{id:"--version",children:(0,r.jsx)(e.code,{children:"--version"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"Returns the current version of dora\n"})}),"\n",(0,r.jsx)(e.p,{children:"This command will show the current version of dora."})]})}function h(n={}){const{wrapper:e}={...(0,t.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(c,{...n})}):c(n)}},8453:(n,e,o)=>{o.d(e,{R:()=>d,x:()=>s});var r=o(6540);const t={},i=r.createContext(t);function d(n){const e=r.useContext(i);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function s(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:d(n.components),r.createElement(i.Provider,{value:e},n.children)}}}]);