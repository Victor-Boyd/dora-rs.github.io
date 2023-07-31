"use strict";(self.webpackChunkdora_rs_github_io=self.webpackChunkdora_rs_github_io||[]).push([[1095],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,g=p["".concat(l,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(g,i(i({ref:t},u),{},{components:n})):r.createElement(g,i({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1737:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:2},i="Carla Simulator",s={unversionedId:"guides/dora-drives/carla",id:"guides/dora-drives/carla",title:"Carla Simulator",description:"Let's try to use a car simulator to not only do perception but also control.",source:"@site/docs/guides/dora-drives/carla.mdx",sourceDirName:"guides/dora-drives",slug:"/guides/dora-drives/carla",permalink:"/docs/guides/dora-drives/carla",draft:!1,editUrl:"https://github.com/dora-rs/dora-rs.github.io/edit/main/docs/guides/dora-drives/carla.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"guides",previous:{title:"Installation",permalink:"/docs/guides/dora-drives/installation"},next:{title:"Obstacle location",permalink:"/docs/guides/dora-drives/obstacle_location"}},l={},c=[],u={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"carla-simulator"},"Carla Simulator"),(0,a.kt)("p",null,"Let's try to use a car simulator to not only do perception but also control."),(0,a.kt)("p",null,"In the rest of the tutorial, we will accept that you have a carla simulator running at ",(0,a.kt)("inlineCode",{parentName:"p"},"localhost:2000")," the default carla configuration."),(0,a.kt)("p",null,"Check out ",(0,a.kt)("a",{parentName:"p",href:"https://carla.readthedocs.io/en/latest/start_quickstart/"},"Carla Simulator installation page")),(0,a.kt)("p",null,"The quickest way is to use docker with:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker pull carlasim/carla:0.9.13\ndocker run --privileged --gpus all --net=host -e DISPLAY=$DISPLAY carlasim/carla:0.9.13 /bin/bash ./CarlaUE4.sh -carla-server -world-port=2000 -RenderOffScreen\n# More info at https://carla.readthedocs.io/en/latest/build_docker/\n")),(0,a.kt)("p",null,"Once the simulator is up and running, We can add the code within the ",(0,a.kt)("a",{parentName:"p",href:"/docs/guides/getting-started/first-dataflow"},"getting started")," to detect obstacles on our way.\nTo do that we only need to replace the webcam node that is sending the image. In this case the oasis agent is connected to the carla server and can send the current front ego vehicle camera within the simulator into the dataflow."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"nodes:\n  - id: oasis_agent\n    custom:\n      inputs:\n        tick: dora/timer/millis/400\n      outputs:\n        - position\n        - speed\n        - image\n        - objective_waypoints\n        - lidar_pc\n        - opendrive\n      source: shell\n      # With Carla_source_node\n      args: python3 ../../carla/carla_source_node.py\n      #\n      # Or with the OASIS AGENT\n      #\n      # args: >\n        # python3 $SIMULATE --output \n        # --oasJson --criteriaConfig $CRITERIA\n        # --openscenario $XOSC\n        # --agent $TEAM_AGENT\n        # --agentConfig $TEAM_AGENT_CONF\n        # --destination $DESTINATION\n  \n  - id: yolov5\n    operator: \n      outputs:\n        - bbox\n      inputs:\n        image: oasis_agent/image\n      python: ../../operators/yolov5_op.py\n\n  - id: plot\n    operator:\n      python: ../../operators/plot.py\n      inputs:\n        image: oasis_agent/image\n        obstacles_bbox: yolov5/bbox\n        position: oasis_agent/position\n")),(0,a.kt)("p",null,"To run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"dora up\ndora start graphs/oasis/oasis_agent_yolov5.yaml --attach\n")),(0,a.kt)("p",null,"You should see a window showing the view from a camera within the carla simulator. On this camera stream, you should see object detection happenning."),(0,a.kt)("p",null,"You can ",(0,a.kt)("kbd",null,"ctrl"),"+",(0,a.kt)("kbd",null,"c")," to kill your running\ndataflow."),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{src:"/img/yolov5.png",width:"800"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"This very first step is done to show you how to connect carla simulator with dora. It does not provide any control to move the car.")))}d.isMDXComponent=!0}}]);