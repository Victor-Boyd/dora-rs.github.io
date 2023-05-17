"use strict";(self.webpackChunkdora_rs_github_io=self.webpackChunkdora_rs_github_io||[]).push([[2458],{3905:(n,e,o)=>{o.d(e,{Zo:()=>c,kt:()=>b});var t=o(7294);function a(n,e,o){return e in n?Object.defineProperty(n,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[e]=o,n}function i(n,e){var o=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.push.apply(o,t)}return o}function l(n){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?i(Object(o),!0).forEach((function(e){a(n,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(o,e))}))}return n}function r(n,e){if(null==n)return{};var o,t,a=function(n,e){if(null==n)return{};var o,t,a={},i=Object.keys(n);for(t=0;t<i.length;t++)o=i[t],e.indexOf(o)>=0||(a[o]=n[o]);return a}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(t=0;t<i.length;t++)o=i[t],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(n,o)&&(a[o]=n[o])}return a}var s=t.createContext({}),p=function(n){var e=t.useContext(s),o=e;return n&&(o="function"==typeof n?n(e):l(l({},e),n)),o},c=function(n){var e=p(n.components);return t.createElement(s.Provider,{value:e},n.children)},_="mdxType",d={inlineCode:"code",wrapper:function(n){var e=n.children;return t.createElement(t.Fragment,{},e)}},u=t.forwardRef((function(n,e){var o=n.components,a=n.mdxType,i=n.originalType,s=n.parentName,c=r(n,["components","mdxType","originalType","parentName"]),_=p(o),u=a,b=_["".concat(s,".").concat(u)]||_[u]||d[u]||i;return o?t.createElement(b,l(l({ref:e},c),{},{components:o})):t.createElement(b,l({ref:e},c))}));function b(n,e){var o=arguments,a=e&&e.mdxType;if("string"==typeof n||a){var i=o.length,l=new Array(i);l[0]=u;var r={};for(var s in e)hasOwnProperty.call(e,s)&&(r[s]=e[s]);r.originalType=n,r[_]="string"==typeof n?n:a,l[1]=r;for(var p=2;p<i;p++)l[p]=o[p];return t.createElement.apply(null,l)}return t.createElement.apply(null,o)}u.displayName="MDXCreateElement"},3843:(n,e,o)=>{o.r(e),o.d(e,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>r,toc:()=>p});var t=o(7462),a=(o(7294),o(3905));const i={},l="Obstacle location operator",r={unversionedId:"nodes_operators/obstacle_location_op",id:"nodes_operators/obstacle_location_op",title:"Obstacle location operator",description:"The obstacle location operator match bounding box with depth frame to find an approximative position of obstacles.",source:"@site/docs/nodes_operators/obstacle_location_op.md",sourceDirName:"nodes_operators",slug:"/nodes_operators/obstacle_location_op",permalink:"/docs/nodes_operators/obstacle_location_op",draft:!1,editUrl:"https://github.com/dora-rs/dora-rs.github.io/edit/main/docs/nodes_operators/obstacle_location_op.md",tags:[],version:"current",frontMatter:{},sidebar:"nodes_operators",previous:{title:"MiDaS",permalink:"/docs/nodes_operators/midas_op"},next:{title:"PID Control operator",permalink:"/docs/nodes_operators/pid_control_op"}},s={},p=[{value:"Inputs",id:"inputs",level:2},{value:"Outputs",id:"outputs",level:2},{value:"Graph Description",id:"graph-description",level:2},{value:"Graph Viz",id:"graph-viz",level:2},{value:"Methods",id:"methods",level:2},{value:"<code>__init__()</code>",id:"__init__",level:3},{value:"<code>.on_event(...)</code>",id:"on_event",level:3},{value:"<code>.on_input(...)</code>",id:"on_input",level:3}],c={toc:p},_="wrapper";function d(n){let{components:e,...o}=n;return(0,a.kt)(_,(0,t.Z)({},c,o,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"obstacle-location-operator"},"Obstacle location operator"),(0,a.kt)("p",null,"The obstacle location operator match bounding box with depth frame to find an approximative position of obstacles."),(0,a.kt)("p",null,"There is two logic within it:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"One is for the ground dot for lane detection."),(0,a.kt)("li",{parentName:"ul"},"One is for bounding box obstacle localisation.")),(0,a.kt)("p",null,"Both logic are based on he computation of the projection in 2D space of the lidar 3D point and then reusing the index to get the 3D position."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"In the case of ground dot detection, the approximation is based on a knnr, as we might not have enough data on the floor."),(0,a.kt)("li",{parentName:"ul"},"In the case of bounding box, we use first quantile closest point within the bounding box to estimate the distance. We use the first quantile closest point to remove the noise.")),(0,a.kt)("p",null,"The mecanism to project the lidar point cloud into a 2D is also used in the ",(0,a.kt)("inlineCode",{parentName:"p"},"plot.py")," operator. You can use the input ",(0,a.kt)("inlineCode",{parentName:"p"},"lidar_pc")," within it to help you debug."),(0,a.kt)("h2",{id:"inputs"},"Inputs"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"2D Obstacles bounding box.")),(0,a.kt)("h2",{id:"outputs"},"Outputs"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"3D position of obstacles as dot.")),(0,a.kt)("h2",{id:"graph-description"},"Graph Description"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"  - id: obstacle_location_op\n    operator: \n      outputs:\n        - obstacles\n      inputs:\n        lidar_pc: oasis_agent/lidar_pc\n        obstacles_bbox: yolov5/bbox\n        position: oasis_agent/position\n      python: ../../operators/obstacle_location_op.py\n")),(0,a.kt)("h2",{id:"graph-viz"},"Graph Viz"),(0,a.kt)("mermaid",{value:"        flowchart TB\n  oasis_agent\nsubgraph yolov5\n  yolov5/op[op]\nend\nsubgraph fot_op\n  fot_op/op[op]\nend\nsubgraph obstacle_location_op\n  obstacle_location_op/op[op]\nend\n  oasis_agent -- lidar_pc --\x3e obstacle_location_op/op\n  yolov5/op -- bbox as obstacles_bbox --\x3e obstacle_location_op/op\n  oasis_agent -- position --\x3e obstacle_location_op/op\n  obstacle_location_op/op -- obstacles --\x3e fot_op/op"}),(0,a.kt)("h2",{id:"methods"},"Methods"),(0,a.kt)("h3",{id:"__init__"},(0,a.kt)("inlineCode",{parentName:"h3"},"__init__()")),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Source Code"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"    def __init__(self):\n        self.point_cloud = []\n        self.camera_point_cloud = []\n        self.ground_point_cloud = []\n        self.camera_ground_point_cloud = []\n        self.last_point_cloud = []\n        self.last_camera_point_cloud = []\n        self.obstacles = []\n        self.obstacles_bbox = []\n        self.position = []\n        self.lanes = []\n\n\n"))),(0,a.kt)("h3",{id:"on_event"},(0,a.kt)("inlineCode",{parentName:"h3"},".on_event(...)")),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Source Code"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'\n    def on_event(\n        self,\n        dora_event: dict,\n        send_output: Callable[[str, bytes], None],\n    ) -> DoraStatus:\n        if dora_event["type"] == "INPUT":\n            return self.on_input(dora_event, send_output)\n        return DoraStatus.CONTINUE\n\n\n'))),(0,a.kt)("h3",{id:"on_input"},(0,a.kt)("inlineCode",{parentName:"h3"},".on_input(...)")),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Source Code"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'\n    def on_input(\n        self,\n        dora_input: dict,\n        send_output: Callable[[str, bytes], None],\n    ):\n        if "lidar_pc" == dora_input["id"]:\n            point_cloud = np.array(dora_input["value"]).view(np.float32)\n            point_cloud = point_cloud.reshape((-1, 3))\n\n            # From Velodyne axis to Camera axis\n            # from Velodyne axis:\n            # x -> forward, y -> right, z -> top\n            # to Camera axis:\n            # x -> right, y -> bottom, z -> forward\n            point_cloud = np.dot(\n                point_cloud,\n                VELODYNE_MATRIX,\n            )\n\n            # Forward points only ( forward = z > 0.1 )\n            point_cloud = point_cloud[np.where(point_cloud[:, 2] > 0.1)]\n\n            # Remove ground points. Above lidar only ( bottom = y < 1.0 )\n            above_ground_point_index = np.where(point_cloud[:, 1] < 1.0)\n            point_cloud = point_cloud[above_ground_point_index]\n            self.ground_point_cloud = point_cloud[\n                above_ground_point_index == False\n            ]\n\n            # 3D array -> 2D array with index_x -> pixel x, index_y -> pixel_y, value -> z\n            camera_point_cloud = local_points_to_camera_view(\n                point_cloud, INTRINSIC_MATRIX\n            ).T\n            self.camera_ground_point_cloud = local_points_to_camera_view(\n                self.ground_point_cloud, INTRINSIC_MATRIX\n            ).T\n\n            self.camera_point_cloud = camera_point_cloud\n            self.point_cloud = point_cloud\n\n        elif "position" == dora_input["id"]:\n            # Add sensor transform\n            self.position = dora_input["value"].to_numpy().view(np.float32)\n            self.extrinsic_matrix = get_extrinsic_matrix(\n                get_projection_matrix(self.position)\n            )\n\n        elif "lanes" == dora_input["id"]:\n            lanes = (\n                np.array(dora_input["value"])\n                .view(np.int32)\n                .reshape((-1, 60, 2))\n            )\n\n            knnr = KNeighborsRegressor(n_neighbors=4)\n            knnr.fit(\n                self.camera_ground_point_cloud[:, :2], self.ground_point_cloud\n            )\n\n            processed_lanes = []\n            for lane in lanes:\n                lane_location = knnr.predict(lane)\n                lane_location = np.array(lane_location)\n\n                lane_location = np.hstack(\n                    (\n                        lane_location,\n                        np.ones((lane_location.shape[0], 1)),\n                    )\n                )\n                lane_location = np.dot(lane_location, self.extrinsic_matrix.T)[\n                    :, :3\n                ]\n                processed_lanes.append(lane_location)\n            processed_lanes = pa.array(\n                np.array(processed_lanes, np.float32).ravel().view(np.uint8)\n            )\n\n            send_output("global_lanes", processed_lanes, dora_input["metadata"])\n\n        elif "obstacles_bbox" == dora_input["id"]:\n            if len(self.position) == 0 or len(self.point_cloud) == 0:\n                return DoraStatus.CONTINUE\n\n            # bbox = np.array([[min_x, max_x, min_y, max_y, confidence, label], ... n_bbox ... ])\n            self.obstacles_bbox = (\n                np.array(dora_input["value"]).view(np.int32).reshape((-1, 6))\n            )\n\n            obstacles_with_location = []\n            for obstacle_bb in self.obstacles_bbox:\n                [min_x, max_x, min_y, max_y, confidence, label] = obstacle_bb\n                z_points = self.point_cloud[\n                    np.where(\n                        (self.camera_point_cloud[:, 0] > min_x)\n                        & (self.camera_point_cloud[:, 0] < max_x)\n                        & (self.camera_point_cloud[:, 1] > min_y)\n                        & (self.camera_point_cloud[:, 1] < max_y)\n                    )\n                ]\n                if len(z_points) > 0:\n                    closest_point = z_points[\n                        z_points[:, 2].argsort()[int(len(z_points) / 4)]\n                    ]\n                    obstacles_with_location.append(closest_point)\n            if len(obstacles_with_location) > 0:\n                obstacles_with_location = np.array(obstacles_with_location)\n                obstacles_with_location = np.hstack(\n                    (\n                        obstacles_with_location,\n                        np.ones((obstacles_with_location.shape[0], 1)),\n                    )\n                )\n                obstacles_with_location = np.dot(\n                    obstacles_with_location, self.extrinsic_matrix.T\n                )[:, :3]\n\n                predictions = get_predictions(\n                    self.obstacles_bbox, obstacles_with_location\n                )\n                predictions_bytes = pa.array(\n                    np.array(predictions, np.float32).ravel().view(np.uint8)\n                )\n\n                send_output(\n                    "obstacles", predictions_bytes, dora_input["metadata"]\n                )\n            else:\n                send_output(\n                    "obstacles",\n                    pa.array(np.array([]).ravel().view(np.uint8)),\n                    dora_input["metadata"],\n                )\n        return DoraStatus.CONTINUE\n\n\n'))))}d.isMDXComponent=!0}}]);