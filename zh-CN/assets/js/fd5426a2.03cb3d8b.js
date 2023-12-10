"use strict";(self.webpackChunkdora_rs_github_io=self.webpackChunkdora_rs_github_io||[]).push([[5356],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),d=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=d(e.components);return r.createElement(p.Provider,{value:n},e.children)},c="mdxType",_={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},s=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=d(t),s=a,m=c["".concat(p,".").concat(s)]||c[s]||_[s]||o;return t?r.createElement(m,i(i({ref:n},u),{},{components:t})):r.createElement(m,i({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=s;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var d=2;d<o;d++)i[d]=t[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},4239:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>_,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var r=t(7462),a=(t(7294),t(3905));const o={},i="C API",l={unversionedId:"api/c-api",id:"api/c-api",title:"C API",description:"\u64cd\u4f5c\u7b26",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/api/c-api.md",sourceDirName:"api",slug:"/api/c-api",permalink:"/zh-CN/docs/api/c-api",draft:!1,editUrl:"https://crowdin.com/dora-rs/zh-CN",tags:[],version:"current",frontMatter:{}},p={},d=[{value:"\u64cd\u4f5c\u7b26",id:"\u64cd\u4f5c\u7b26",level:2},{value:"\u8bd5\u8bd5\u770b\uff01",id:"\u8bd5\u8bd5\u770b",level:4},{value:"\u81ea\u5b9a\u4e49\u8282\u70b9",id:"\u81ea\u5b9a\u4e49\u8282\u70b9",level:2},{value:"<code>init_dora_context_from_env</code>",id:"init_dora_context_from_env",level:3},{value:"<code>dora_next_event</code>",id:"dora_next_event",level:3},{value:"<code>dora_send_output</code>",id:"dora_send_output",level:3},{value:"\u8bd5\u8bd5\u770b\uff01",id:"\u8bd5\u8bd5\u770b-1",level:4}],u={toc:d},c="wrapper";function _(e){let{components:n,...t}=e;return(0,a.kt)(c,(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"c-api"},"C API"),(0,a.kt)("h2",{id:"\u64cd\u4f5c\u7b26"},"\u64cd\u4f5c\u7b26"),(0,a.kt)("p",null,"\u64cd\u4f5c\u7b26 API \u662f\u4f9b\u60a8\u5b9e\u73b0\u7684\u6846\u67b6\u3002 \u5b9e\u73b0\u7684\u64cd\u4f5c\u7b26\u5c06\u7531 dora \u7ba1\u7406\u3002 \u8be5\u6846\u67b6\u4f7f\u6211\u4eec\u80fd\u591f\u8fdb\u884c\u4f18\u5316\u5e76\u63d0\u4f9b\u9ad8\u7ea7\u7279\u6027\u3002"),(0,a.kt)("p",null,"\u64cd\u4f5c\u7b26\u5b9a\u4e49\u7531 3 \u4e2a\u51fd\u6570\u7ec4\u6210\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"dora_init_operator"),"\u7528\u4e8e\u521d\u59cb\u5316\u64cd\u4f5c\u7b26\u53ca\u5176\u4e0a\u4e0b\u6587\u3002 ",(0,a.kt)("inlineCode",{parentName:"p"},"dora_drop_operator")," \u7528\u4e8e\u91ca\u653e\u5185\u5b58\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"dora_on_event")," \u7528\u4e8e\u5728\u63a5\u6536\u8f93\u5165\u65f6\u64cd\u4f5c\u7b26\u7684\u52a8\u4f5c\u903b\u8f91\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},'#include "../../apis/c/operator/operator_api.h"\n#include <assert.h>\n#include <string.h>\n#include <stdio.h>\n#include <stdlib.h>\n\nDoraInitResult_t dora_init_operator(void)\n{\n    void *context = malloc(1);\n    char *context_char = (char *)context;\n    *context_char = 0;\n\n    DoraInitResult_t result = {.operator_context = context};\n    return result;\n}\n\nDoraResult_t dora_drop_operator(void *operator_context)\n{\n    free(operator_context);\n\n    DoraResult_t result = {};\n    return result;\n}\n\nOnEventResult_t dora_on_event(\n    const RawEvent_t *event,\n    const SendOutput_t *send_output,\n    void *operator_context)\n{\n')),(0,a.kt)("h4",{id:"\u8bd5\u8bd5\u770b"},"\u8bd5\u8bd5\u770b\uff01"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5efa\u7acb\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"li"},"operator.c")," \u6587\u4ef6\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},'#include "../../apis/c/operator/operator_api.h"\n#include <assert.h>\n#include <string.h>\n#include <stdio.h>\n#include <stdlib.h>\n\nDoraInitResult_t dora_init_operator(void)\n{\n    void *context = malloc(1);\n    char *context_char = (char *)context;\n    *context_char = 0;\n\n    DoraInitResult_t result = {.operator_context = context};\n    return result;\n}\n\nDoraResult_t dora_drop_operator(void *operator_context)\n{\n    free(operator_context);\n\n    DoraResult_t result = {};\n    return result;\n}\n\nOnEventResult_t dora_on_event(\n    const RawEvent_t *event,\n    const SendOutput_t *send_output,\n    void *operator_context)\n{\n    char *counter = (char *)operator_context;\n\n    if (event->input != NULL)\n    {\n        // input event\n        Input_t *input = event->input;\n\n        char id[input->id.len + 1];\n        memcpy(id, input->id.ptr, input->id.len);\n        id[input->id.len] = 0;\n\n        if (strcmp(id, "message") == 0)\n        {\n            char data[input->data.len + 1];\n            memcpy(data, input->data.ptr, input->data.len);\n            data[input->data.len] = 0;\n\n            *counter += 1;\n            printf("C operator received message `%s`, counter: %i\\n", data, *counter);\n\n            char *out_id = "counter";\n            char *out_id_heap = strdup(out_id);\n\n            int data_alloc_size = 100;\n            char *out_data = (char *)malloc(data_alloc_size);\n            int count = snprintf(out_data, data_alloc_size, "The current counter value is %d", *counter);\n            assert(count >= 0 && count < 100);\n\n            Output_t output = {.id = {\n                                   .ptr = (uint8_t *)out_id_heap,\n                                   .len = strlen(out_id_heap),\n                                   .cap = strlen(out_id_heap) + 1,\n                               },\n                               .data = {.ptr = (uint8_t *)out_data, .len = strlen(out_data), .cap = data_alloc_size}};\n            DoraResult_t res = (send_output->send_output.call)(send_output->send_output.env_ptr, output);\n\n            OnEventResult_t result = {.result = res, .status = DORA_STATUS_CONTINUE};\n            return result;\n        }\n        else\n        {\n            printf("C operator received unexpected input %s, context: %i\\n", id, *counter);\n        }\n    }\n    if (event->stop)\n    {\n        printf("C operator received stop event\\n");\n    }\n\n    OnEventResult_t result = {.status = DORA_STATUS_CONTINUE};\n    return result;\n}\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u5efa\u7acb\u64cd\u4f5c\u7b26\uff1a")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u7f16\u8bd1 ",(0,a.kt)("inlineCode",{parentName:"p"},"operator.c")," \u6587\u4ef6\u5230\u4e00\u4e2a\u5171\u4eab\u5e93"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u4f8b\u5982\uff0c\u4f7f\u7528\u5982\u4e0b\u547d\u4ee4\uff1a",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"clang -c operator.c -o build/operator.o -fdeclspec -fPIC\nclang -shared build/operator.o -o build/liboperator.so\n")),"\u5728 Windows \u4e0a\u7701\u7565 ",(0,a.kt)("inlineCode",{parentName:"li"},"-fPIC")," \u53c2\u6570\u3002 \u4f7f\u7528\u5339\u914d\u4f60\u7684OS\u7684\u5171\u4eab\u5e93\u6807\u51c6\u5e93\u7684 \u524d\u7f00/\u6269\u5c55\u540d \u66ff\u6362 ",(0,a.kt)("inlineCode",{parentName:"li"},"liboperator.so")," \u540d\u5b57\uff0c\u5982\uff1a\u5728Windows \u662f ",(0,a.kt)("inlineCode",{parentName:"li"},".dll"),"\u3002"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5728\u60a8\u7684\u56fe\u91cc\u94fe\u63a5\u4e3a\uff1a"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"  - id: runtime-node\n    operators:\n      - id: c_operator\n        shared-library: build/operator\n        inputs:\n          message: c_node/message\n        outputs:\n          - counter\n")),(0,a.kt)("h2",{id:"\u81ea\u5b9a\u4e49\u8282\u70b9"},"\u81ea\u5b9a\u4e49\u8282\u70b9"),(0,a.kt)("p",null,"\u81ea\u5b9a\u4e49\u8282\u70b9\u53ef\u4ee5\u4f7f\u60a8\u96c6\u6210 ",(0,a.kt)("inlineCode",{parentName:"p"},"dora")," \u5230\u60a8\u7684\u5e94\u7528\u4e2d\u3002 \u5b83\u5141\u8bb8\u60a8\u4ee5\u4efb\u4f55\u60a8\u60f3\u8981\u7684\u65b9\u5f0f\u68c0\u7d22\u8f93\u5165\u548c\u53d1\u9001\u8f93\u51fa\u3002"),(0,a.kt)("h3",{id:"init_dora_context_from_env"},(0,a.kt)("inlineCode",{parentName:"h3"},"init_dora_context_from_env")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"init_dora_context_from_env")," \u4ece\u73af\u5883\u53d8\u91cf\u8bbe\u7f6e ",(0,a.kt)("inlineCode",{parentName:"p"},"dora-coordinator")," \u521d\u59cb\u5316\u4e00\u4e2a\u8282\u70b9\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"void *dora_context = init_dora_context_from_env();\n")),(0,a.kt)("h3",{id:"dora_next_event"},(0,a.kt)("inlineCode",{parentName:"h3"},"dora_next_event")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"dora_next_event")," \u7b49\u5f85\u4e0b\u4e00\u4e2a\u4e8b\u4ef6\uff08\u5982\uff1a\u8f93\u5165\u4e8b\u4ef6\uff09\u3002 \u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"read_dora_event_type")," \u8bfb\u5230\u4e8b\u4ef6\u7c7b\u578b\u3002 \u8f93\u5165\u7c7b\u578b\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"DoraEventType_Input")," \u3002 \u63d0\u53d6\u8f93\u5165\u4e8b\u4ef6\u7684 ID \u548c\u6570\u636e\uff0c\u5728\u8fd4\u56de\u7684\u6307\u9488\u4e0a\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"read_dora_input_id")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"read_dora_input_data"),"\u3002 \u5ffd\u7565\u4efb\u4f55\u4e8b\u4ef6\u5e76\u4ec5\u5904\u7406\u4e0e\u8282\u70b9\u76f8\u5173\u7684\u4e8b\u4ef6\u662f\u5b89\u5168\u7684\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"void *input = dora_next_input(dora_context);\n\n// \u4ee5 UTF8 \u7f16\u7801\u5b57\u7b26\u4e32\u7684\u5f62\u5f0f\u8bfb\u51fa ID\nchar *id;\nsize_t id_len;\nread_dora_input_id(input, &id, &id_len);\n\n// \u4ee5\u5b57\u8282\u6570\u7ec4\u7684\u5f62\u5f0f\u8bfb\u51fa\u6570\u636e\nchar *data;\nsize_t data_len;\nread_dora_input_data(input, &data, &data_len);\n")),(0,a.kt)("h3",{id:"dora_send_output"},(0,a.kt)("inlineCode",{parentName:"h3"},"dora_send_output")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"dora_send_output")," \u4ece\u8282\u70b9\u53d1\u9001\u6570\u636e\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},'char out_id[] = "tick";\nchar out_data[50];\ndora_send_output(dora_context, out_id, strlen(out_id), out_data, out_data_len);\n')),(0,a.kt)("h4",{id:"\u8bd5\u8bd5\u770b-1"},"\u8bd5\u8bd5\u770b\uff01"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5efa\u7acb\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"li"},"node.c")," \u6587\u4ef6\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},'#include <stdio.h>\n#include <string.h>\n#include <assert.h>\n#include "../../apis/c/node/node_api.h"\n\n// sleep\n#ifdef _WIN32\n#include <Windows.h>\n#else\n#include <unistd.h>\n#endif\n\nint main()\n{\n    printf("[c node] Hello World\\n");\n\n    void *dora_context = init_dora_context_from_env();\n    if (dora_context == NULL)\n    {\n        fprintf(stderr, "failed to init dora context\\n");\n        return -1;\n    }\n\n    printf("[c node] dora context initialized\\n");\n\n    for (char i = 0; i < 100; i++)\n    {\n        void *event = dora_next_event(dora_context);\n        if (event == NULL)\n        {\n            printf("[c node] ERROR: unexpected end of event\\n");\n            return -1;\n        }\n\n        enum DoraEventType ty = read_dora_event_type(event);\n\n        if (ty == DoraEventType_Input)\n        {\n            char *data;\n            size_t data_len;\n            read_dora_input_data(event, &data, &data_len);\n\n            assert(data_len == 0);\n\n            char out_id[] = "message";\n            char out_data[50];\n            int out_data_len = sprintf(out_data, "loop iteration %d", i);\n\n            dora_send_output(dora_context, out_id, strlen(out_id), out_data, out_data_len);\n        }\n        else if (ty == DoraEventType_Stop)\n        {\n            printf("[c node] received stop event\\n");\n        }\n        else\n        {\n            printf("[c node] received unexpected event: %d\\n", ty);\n        }\n\n        free_dora_event(event);\n    }\n\n    printf("[c node] received 10 events\\n");\n\n    free_dora_context(dora_context);\n\n    printf("[c node] finished successfully\\n");\n\n    return 0;\n}\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u5efa\u7acb\u81ea\u5b9a\u4e49\u8282\u70b9\uff1a")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5728\u8fd9\u4e2a\u76ee\u5f55\uff0c\u5efa \u7acb\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"build")," \u6587\u4ef6\u5939 (\u5373, \u4e0b\u4e00\u4e2a\u6587\u4ef6 ",(0,a.kt)("inlineCode",{parentName:"p"},"node.c")," )")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u7f16\u8bd1 ",(0,a.kt)("inlineCode",{parentName:"p"},"dora-node-api-c")," crate \u5230\u4e00\u4e2a\u9759\u6001\u5e93\u3002"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u8fd0\u884c ",(0,a.kt)("inlineCode",{parentName:"li"},"cargo build -p dora-node-api-c --release")),(0,a.kt)("li",{parentName:"ul"},"\u53ef\u7528\u7684\u9759\u6001\u5e93\u7ed3\u679c\u751f\u6210\u5728 ",(0,a.kt)("inlineCode",{parentName:"li"},"../../target/release/libdora-node-api-c.a"),"\u3002"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u7f16\u8bd1  ",(0,a.kt)("inlineCode",{parentName:"p"},"node.c")," (\u4f8b\u5982\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"clang"),") \u5e76\u94fe\u63a5\u9759\u6001\u5e93"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u4f8b\u5982\uff0c\u4f7f\u7528\u5982\u4e0b\u547d\u4ee4\uff1a",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"clang node.c <FLAGS> -ldora_node_api_c -L ../../target/release --output build/c_node\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"<FLAGS>")," \u53d6\u51b3\u4e8eC\u8282\u70b9\u4f7f\u7528\u7684\u64cd\u4f5c\u7cfb\u7edf\u548c\u5e93\u3002 \u6bcf\u4e2a\u64cd\u4f5c\u7cfb\u7edf\u90fd\u9700\u8981\u4ee5\u4e0b\u6807\u5fd7\uff1a",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Linux: ",(0,a.kt)("inlineCode",{parentName:"li"},"-lm -lrt -ldl -pthread")),(0,a.kt)("li",{parentName:"ul"},"macOS: ",(0,a.kt)("inlineCode",{parentName:"li"},"-framework CoreServices -framework Security -l System -l resolv -l pthread -l c -l m")),(0,a.kt)("li",{parentName:"ul"},"Windows:",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"-ladvapi32 -luserenv -lkernel32 -lws2_32 -lbcrypt -lncrypt -lschannel -lntdll -liphlpapi\n-lcfgmgr32 -lcredui -lcrypt32 -lcryptnet -lfwpuclnt -lgdi32 -lmsimg32 -lmswsock -lole32\n-lopengl32 -lsecur32 -lshell32 -lsynchronization -luser32 -lwinspool\n-Wl,-nodefaultlib:libcmt -D_DLL -lmsvcrt\n")),"\u53e6\u5916\uff1a\u5728 Windows \u4e0a\uff0c\u8f93\u51fa\u6587\u4ef6\u5e94\u5177\u6709",(0,a.kt)("inlineCode",{parentName:"li"},".exe"),"\u6269\u5c55\u540d\uff1a-",(0,a.kt)("inlineCode",{parentName:"li"},"-output build/c_node.exe")))))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5bf9 ",(0,a.kt)("inlineCode",{parentName:"p"},"sink.c")," \u91cd\u590d\u6267\u884c\u4e0a\u4e00\u6b65")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5728\u60a8\u7684\u56fe\u4e2d\u5c06\u5176\u94fe\u63a5\u4e3a\uff1a"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"  - id: c_sink\n    custom:\n      source: build/c_sink\n      inputs:\n        counter: runtime-node/c_operator/counter\n")))}_.isMDXComponent=!0}}]);