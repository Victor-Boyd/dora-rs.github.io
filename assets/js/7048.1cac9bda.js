"use strict";(self.webpackChunkdora_rs_github_io=self.webpackChunkdora_rs_github_io||[]).push([[7048],{6535:(e,t,a)=>{a.d(t,{A:()=>j});var n=a(6540),s=a(8215),r=a(4561),i=a(4581),l=a(8774),o=a(1312),c=a(6347),d=a(9169);function m(e){const{pathname:t}=(0,c.zy)();return(0,n.useMemo)((()=>e.filter((e=>function(e,t){return!(e.unlisted&&!(0,d.ys)(e.permalink,t))}(e,t)))),[e,t])}const u={sidebar:"sidebar_re4s",sidebarItemTitle:"sidebarItemTitle_pO2u",sidebarItemList:"sidebarItemList_Yudw",sidebarItem:"sidebarItem__DBe",sidebarItemLink:"sidebarItemLink_mo7H",sidebarItemLinkActive:"sidebarItemLinkActive_I1ZP"};var h=a(4848);function g(e){let{sidebar:t}=e;const a=m(t.items);return(0,h.jsx)("aside",{className:"col col--3",children:(0,h.jsxs)("nav",{className:(0,s.A)(u.sidebar,"thin-scrollbar"),"aria-label":(0,o.T)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"}),children:[(0,h.jsx)("div",{className:(0,s.A)(u.sidebarItemTitle,"margin-bottom--md"),children:t.title}),(0,h.jsx)("ul",{className:(0,s.A)(u.sidebarItemList,"clean-list"),children:a.map((e=>(0,h.jsx)("li",{className:u.sidebarItem,children:(0,h.jsx)(l.A,{isNavLink:!0,to:e.permalink,className:u.sidebarItemLink,activeClassName:u.sidebarItemLinkActive,children:e.title})},e.permalink)))})]})})}var f=a(5600);function p(e){let{sidebar:t}=e;const a=m(t.items);return(0,h.jsx)("ul",{className:"menu__list",children:a.map((e=>(0,h.jsx)("li",{className:"menu__list-item",children:(0,h.jsx)(l.A,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active",children:e.title})},e.permalink)))})}function b(e){return(0,h.jsx)(f.GX,{component:p,props:e})}function x(e){let{sidebar:t}=e;const a=(0,i.l)();return t?.items.length?"mobile"===a?(0,h.jsx)(b,{sidebar:t}):(0,h.jsx)(g,{sidebar:t}):null}function j(e){const{sidebar:t,toc:a,children:n,...i}=e,l=t&&t.items.length>0;return(0,h.jsx)(r.A,{...i,children:(0,h.jsx)("div",{className:"container margin-vert--lg",children:(0,h.jsxs)("div",{className:"row",children:[(0,h.jsx)(x,{sidebar:t}),(0,h.jsx)("main",{className:(0,s.A)("col",{"col--7":l,"col--9 col--offset-1":!l}),children:n}),a&&(0,h.jsx)("div",{className:"col col--2",children:a})]})})})}},4651:(e,t,a)=>{a.d(t,{A:()=>U});a(6540);var n=a(8215),s=a(7131),r=a(4848);function i(e){let{children:t,className:a}=e;return(0,r.jsx)("article",{className:a,children:t})}var l=a(8774);const o={title:"title_f1Hy"};function c(e){let{className:t}=e;const{metadata:a,isBlogPostPage:i}=(0,s.e)(),{permalink:c,title:d}=a,m=i?"h1":"h2";return(0,r.jsx)(m,{className:(0,n.A)(o.title,t),children:i?d:(0,r.jsx)(l.A,{to:c,children:d})})}var d=a(1312),m=a(5846),u=a(6266);const h={container:"container_mt6G"};function g(e){let{readingTime:t}=e;const a=function(){const{selectMessage:e}=(0,m.W)();return t=>{const a=Math.ceil(t);return e(a,(0,d.T)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}}();return(0,r.jsx)(r.Fragment,{children:a(t)})}function f(e){let{date:t,formattedDate:a}=e;return(0,r.jsx)("time",{dateTime:t,children:a})}function p(){return(0,r.jsx)(r.Fragment,{children:" \xb7 "})}function b(e){let{className:t}=e;const{metadata:a}=(0,s.e)(),{date:i,readingTime:l}=a,o=(0,u.i)({day:"numeric",month:"long",year:"numeric",timeZone:"UTC"});return(0,r.jsxs)("div",{className:(0,n.A)(h.container,"margin-vert--md",t),children:[(0,r.jsx)(f,{date:i,formattedDate:(c=i,o.format(new Date(c)))}),void 0!==l&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(p,{}),(0,r.jsx)(g,{readingTime:l})]})]});var c}function x(e){return e.href?(0,r.jsx)(l.A,{...e}):(0,r.jsx)(r.Fragment,{children:e.children})}function j(e){let{author:t,className:a}=e;const{name:s,title:i,url:l,imageURL:o,email:c}=t,d=l||c&&`mailto:${c}`||void 0;return(0,r.jsxs)("div",{className:(0,n.A)("avatar margin-bottom--sm",a),children:[o&&(0,r.jsx)(x,{href:d,className:"avatar__photo-link",children:(0,r.jsx)("img",{className:"avatar__photo",src:o,alt:s})}),s&&(0,r.jsxs)("div",{className:"avatar__intro",children:[(0,r.jsx)("div",{className:"avatar__name",children:(0,r.jsx)(x,{href:d,children:(0,r.jsx)("span",{children:s})})}),i&&(0,r.jsx)("small",{className:"avatar__subtitle",children:i})]})]})}const v={authorCol:"authorCol_Hf19",imageOnlyAuthorRow:"imageOnlyAuthorRow_pa_O",imageOnlyAuthorCol:"imageOnlyAuthorCol_G86a"};function A(e){let{className:t}=e;const{metadata:{authors:a},assets:i}=(0,s.e)();if(0===a.length)return null;const l=a.every((e=>{let{name:t}=e;return!t}));return(0,r.jsx)("div",{className:(0,n.A)("margin-top--md margin-bottom--sm",l?v.imageOnlyAuthorRow:"row",t),children:a.map(((e,t)=>(0,r.jsx)("div",{className:(0,n.A)(!l&&"col col--6",l?v.imageOnlyAuthorCol:v.authorCol),children:(0,r.jsx)(j,{author:{...e,imageURL:i.authorsImageUrls[t]??e.imageURL}})},t)))})}function N(){return(0,r.jsxs)("header",{children:[(0,r.jsx)(c,{}),(0,r.jsx)(b,{}),(0,r.jsx)(A,{})]})}var _=a(440),P=a(1544);function k(e){let{children:t,className:a}=e;const{isBlogPostPage:i}=(0,s.e)();return(0,r.jsx)("div",{id:i?_.blogPostContainerID:void 0,className:(0,n.A)("markdown",a),children:(0,r.jsx)(P.A,{children:t})})}var w=a(7559),y=a(4336),I=a(8046);function T(){return(0,r.jsx)("b",{children:(0,r.jsx)(d.A,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts",children:"Read More"})})}function B(e){const{blogPostTitle:t,...a}=e;return(0,r.jsx)(l.A,{"aria-label":(0,d.T)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t}),...a,children:(0,r.jsx)(T,{})})}function M(){const{metadata:e,isBlogPostPage:t}=(0,s.e)(),{tags:a,title:i,editUrl:l,hasTruncateMarker:o,lastUpdatedBy:c,lastUpdatedAt:d}=e,m=!t&&o,u=a.length>0;if(!(u||m||l))return null;if(t){const e=!!(l||d||c);return(0,r.jsxs)("footer",{className:"docusaurus-mt-lg",children:[u&&(0,r.jsx)("div",{className:(0,n.A)("row","margin-top--sm",w.G.blog.blogFooterEditMetaRow),children:(0,r.jsx)("div",{className:"col",children:(0,r.jsx)(I.A,{tags:a})})}),e&&(0,r.jsx)(y.A,{className:(0,n.A)("margin-top--sm",w.G.blog.blogFooterEditMetaRow),editUrl:l,lastUpdatedAt:d,lastUpdatedBy:c})]})}return(0,r.jsxs)("footer",{className:"row docusaurus-mt-lg",children:[u&&(0,r.jsx)("div",{className:(0,n.A)("col",{"col--9":m}),children:(0,r.jsx)(I.A,{tags:a})}),m&&(0,r.jsx)("div",{className:(0,n.A)("col text--right",{"col--3":u}),children:(0,r.jsx)(B,{blogPostTitle:i,to:e.permalink})})]})}function U(e){let{children:t,className:a}=e;const l=function(){const{isBlogPostPage:e}=(0,s.e)();return e?void 0:"margin-bottom--xl"}();return(0,r.jsxs)(i,{className:(0,n.A)(l,a),children:[(0,r.jsx)(N,{}),(0,r.jsx)(k,{children:t}),(0,r.jsx)(M,{})]})}},7131:(e,t,a)=>{a.d(t,{e:()=>o,i:()=>l});var n=a(6540),s=a(9532),r=a(4848);const i=n.createContext(null);function l(e){let{children:t,content:a,isBlogPostPage:s=!1}=e;const l=function(e){let{content:t,isBlogPostPage:a}=e;return(0,n.useMemo)((()=>({metadata:t.metadata,frontMatter:t.frontMatter,assets:t.assets,toc:t.toc,isBlogPostPage:a})),[t,a])}({content:a,isBlogPostPage:s});return(0,r.jsx)(i.Provider,{value:l,children:t})}function o(){const e=(0,n.useContext)(i);if(null===e)throw new s.dV("BlogPostProvider");return e}},6676:(e,t,a)=>{a.d(t,{k:()=>d,J:()=>m});var n=a(6025),s=a(4586),r=a(6803);var i=a(7131);const l=e=>new Date(e).toISOString();function o(e){const t=e.map(u);return{author:1===t.length?t[0]:t}}function c(e,t,a){return e?{image:h({imageUrl:t(e,{absolute:!0}),caption:`title image for the blog post: ${a}`})}:{}}function d(e){const{siteConfig:t}=(0,s.A)(),{withBaseUrl:a}=(0,n.h)(),{metadata:{blogDescription:r,blogTitle:i,permalink:d}}=e,m=`${t.url}${d}`;return{"@context":"https://schema.org","@type":"Blog","@id":m,mainEntityOfPage:m,headline:i,description:r,blogPost:e.items.map((e=>function(e,t,a){const{assets:n,frontMatter:s,metadata:r}=e,{date:i,title:d,description:m,lastUpdatedAt:u}=r,h=n.image??s.image,g=s.keywords??[],f=`${t.url}${r.permalink}`,p=u?l(u):void 0;return{"@type":"BlogPosting","@id":f,mainEntityOfPage:f,url:f,headline:d,name:d,description:m,datePublished:i,...p?{dateModified:p}:{},...o(r.authors),...c(h,a,d),...g?{keywords:g}:{}}}(e.content,t,a)))}}function m(){const e=function(){const e=(0,r.A)(),t=e?.data?.blogMetadata;if(!t)throw new Error("useBlogMetadata() can't be called on the current route because the blog metadata could not be found in route context");return t}(),{assets:t,metadata:a}=(0,i.e)(),{siteConfig:d}=(0,s.A)(),{withBaseUrl:m}=(0,n.h)(),{date:u,title:h,description:g,frontMatter:f,lastUpdatedAt:p}=a,b=t.image??f.image,x=f.keywords??[],j=p?l(p):void 0,v=`${d.url}${a.permalink}`;return{"@context":"https://schema.org","@type":"BlogPosting","@id":v,mainEntityOfPage:v,url:v,headline:h,name:h,description:g,datePublished:u,...j?{dateModified:j}:{},...o(a.authors),...c(b,m,h),...x?{keywords:x}:{},isPartOf:{"@type":"Blog","@id":`${d.url}${e.blogBasePath}`,name:e.blogTitle}}}function u(e){return{"@type":"Person",...e.name?{name:e.name}:{},...e.title?{description:e.title}:{},...e.url?{url:e.url}:{},...e.email?{email:e.email}:{},...e.imageURL?{image:e.imageURL}:{}}}function h(e){let{imageUrl:t,caption:a}=e;return{"@type":"ImageObject","@id":t,url:t,contentUrl:t,caption:a}}},5846:(e,t,a)=>{a.d(t,{W:()=>c});var n=a(6540),s=a(4586);const r=["zero","one","two","few","many","other"];function i(e){return r.filter((t=>e.includes(t)))}const l={locale:"en",pluralForms:i(["one","other"]),select:e=>1===e?"one":"other"};function o(){const{i18n:{currentLocale:e}}=(0,s.A)();return(0,n.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:i(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),l}}),[e])}function c(){const e=o();return{selectMessage:(t,a)=>function(e,t,a){const n=e.split("|");if(1===n.length)return n[0];n.length>a.pluralForms.length&&console.error(`For locale=${a.locale}, a maximum of ${a.pluralForms.length} plural forms are expected (${a.pluralForms.join(",")}), but the message contains ${n.length}: ${e}`);const s=a.select(t),r=a.pluralForms.indexOf(s);return n[Math.min(r,n.length-1)]}(a,t,e)}}}}]);