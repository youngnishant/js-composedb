"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[258],{4852:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var i=n(9231);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=i.createContext({}),u=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return i.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||r;return n?i.createElement(f,a(a({ref:t},c),{},{components:n})):i.createElement(f,a({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var u=2;u<r;u++)a[u]=n[u];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8418:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var i=n(6215),o=(n(9231),n(4852));const r={},a="Performing mutations",l={unversionedId:"guides/interacting/mutations",id:"guides/interacting/mutations",title:"Performing mutations",description:"Enabling mutations",source:"@site/docs/guides/interacting/mutations.mdx",sourceDirName:"guides/interacting",slug:"/guides/interacting/mutations",permalink:"/js-composedb/docs/guides/interacting/mutations",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Querying the graph",permalink:"/js-composedb/docs/guides/interacting/queries"},next:{title:"Using Apollo",permalink:"/js-composedb/docs/guides/interacting/using-apollo"}},s={},u=[{value:"Enabling mutations",id:"enabling-mutations",level:2},{value:"Available mutations",id:"available-mutations",level:2},{value:"Mutations options",id:"mutations-options",level:2}],c={toc:u};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"performing-mutations"},"Performing mutations"),(0,o.kt)("h2",{id:"enabling-mutations"},"Enabling mutations"),(0,o.kt)("p",null,"In order to perform mutations, the Ceramic instance used by the Compose client needs to be authenticated. This can be done by calling the ",(0,o.kt)("inlineCode",{parentName:"p"},"setDID")," method on the ",(0,o.kt)("inlineCode",{parentName:"p"},"ComposeClient")," instance with an authenticated ",(0,o.kt)("inlineCode",{parentName:"p"},"DID")," instance:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"compose.setDID(did)\n")),(0,o.kt)("h2",{id:"available-mutations"},"Available mutations"),(0,o.kt)("p",null,"Mutation functions are automatically generated based on the Models present in the runtime Composite definition, using the ",(0,o.kt)("inlineCode",{parentName:"p"},"create")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"update")," prefixes, all wrapped in a top-level ",(0,o.kt)("inlineCode",{parentName:"p"},"Mutation")," object."),(0,o.kt)("h2",{id:"mutations-options"},"Mutations options"),(0,o.kt)("p",null,"Update mutations can be provided an options object with the following fields:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"replace: Boolean"),": by default the update logic performs a shallow (1 level) merge of the document contents, so existing contents of the document are not removed unless explicitly changed. When setting ",(0,o.kt)("inlineCode",{parentName:"li"},"replace")," to ",(0,o.kt)("inlineCode",{parentName:"li"},"true"),", the document contents will be fully replaced by the contents provided in the update mutation."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"version: CommitID"),": version of the document the update should be applied on. If set, the update logic will load the latest version of the document and throw an error if it doesn't match the expected version.")))}p.isMDXComponent=!0}}]);