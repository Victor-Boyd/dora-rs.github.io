"use strict";(self.webpackChunkdora_rs_github_io=self.webpackChunkdora_rs_github_io||[]).push([[8073],{3509:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>d,metadata:()=>a,toc:()=>o});var i=t(4848),s=t(8453);const d={sidebar_position:1},r="Installation",a={id:"guides/dora-drives/installation",title:"Installation",description:"| Software      | Version Tested  | Installation Guide |",source:"@site/docs/guides/dora-drives/installation.mdx",sourceDirName:"guides/dora-drives",slug:"/guides/dora-drives/installation",permalink:"/docs/guides/dora-drives/installation",draft:!1,unlisted:!1,editUrl:"https://github.com/dora-rs/dora-rs.github.io/edit/main/docs/guides/dora-drives/installation.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"guides",previous:{title:"readme",permalink:"/docs/guides/dora-drives/"},next:{title:"Carla Simulator",permalink:"/docs/guides/dora-drives/carla"}},l={},o=[{value:"Uninstalling package",id:"uninstalling-package",level:3}];function c(e){const n={code:"code",h1:"h1",h3:"h3",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"installation",children:"Installation"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Software"}),(0,i.jsx)(n.th,{children:"Version Tested"}),(0,i.jsx)(n.th,{children:"Installation Guide"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Linux"}),(0,i.jsx)(n.td,{children:"Ubuntu 20.04 <"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Conda"}),(0,i.jsx)(n.td,{children:"22.11.1"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Pytorch"}),(0,i.jsx)(n.td,{children:"1.11"}),(0,i.jsx)(n.td,{children:"Installation below"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"NVIDIA Driver"}),(0,i.jsx)(n.td,{children:"515.86.01"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"CUDA"}),(0,i.jsx)(n.td,{children:"11.7"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"dora-rs"}),(0,i.jsx)(n.td,{children:"0.3.2"}),(0,i.jsx)(n.td,{children:"Installation below"})]})]})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"git clone git@github.com:dora-rs/dora-drives.git\ncd dora-drives\n\n## Add missing linux dependencies\nsudo apt-get -y update\nsudo apt-get -y install apt-utils git curl clang wget\nsudo apt-get install -y cmake unzip libpng-dev libgeos-dev python3-opencv libomp-dev\nsudo apt-get -y --fix-missing update && sudo apt-get install --fix-missing -y libcudnn8 libqt5core5a libeigen3-dev cmake qtbase5-dev libpng16-16 libtiff5 python3-tk libgeos-dev build-essential libopenblas-dev libssl-dev\n\n## Installing dependencies\nconda create -n dora3.7 python=3.7 -y\nconda activate dora3.7\nconda install pytorch=1.11.0 torchvision=0.12.0 cudatoolkit=11.3 -c pytorch -y\npip install --upgrade pip\npip install -r install_requirements.txt\npip install -r requirements.txt\n\n## Installing dora if its not already installed\nsudo wget https://github.com/dora-rs/dora/releases/download/v0.3.2/dora-v0.3.2-x86_64-Linux.zip && sudo unzip dora-v0.3.2-x86_64-Linux.zip -d /usr/local/bin\n"})}),"\n",(0,i.jsx)(n.h3,{id:"uninstalling-package",children:"Uninstalling package"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"conda remove --name dora3.7 --all\nrm ~/.local/bin/dora*\n"})})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>a});var i=t(6540);const s={},d=i.createContext(s);function r(e){const n=i.useContext(d);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(d.Provider,{value:n},e.children)}}}]);