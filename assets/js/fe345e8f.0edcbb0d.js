"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5152],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>f});var n=t(67294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=n.createContext({}),d=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},c=function(e){var r=d(e.components);return n.createElement(l.Provider,{value:r},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,s=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=d(t),m=i,f=u["".concat(l,".").concat(m)]||u[m]||p[m]||s;return t?n.createElement(f,a(a({ref:r},c),{},{components:t})):n.createElement(f,a({ref:r},c))}));function f(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var s=t.length,a=new Array(s);a[0]=m;var o={};for(var l in r)hasOwnProperty.call(r,l)&&(o[l]=r[l]);o.originalType=e,o[u]="string"==typeof e?e:i,a[1]=o;for(var d=2;d<s;d++)a[d]=t[d];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},13687:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var n=t(87462),i=(t(67294),t(3905));const s={title:"End Users",sidebar_label:"End Users",sidebar_position:6,slug:"/middleware/ics29-fee/end-users"},a="For end users",o={unversionedId:"middleware/ics29-fee/end-users",id:"version-v7.3.x/middleware/ics29-fee/end-users",title:"End Users",description:"Learn how to incentivize IBC packets using the ICS29 Fee Middleware module.",source:"@site/versioned_docs/version-v7.3.x/04-middleware/01-ics29-fee/06-end-users.md",sourceDirName:"04-middleware/01-ics29-fee",slug:"/middleware/ics29-fee/end-users",permalink:"/v7/middleware/ics29-fee/end-users",draft:!1,tags:[],version:"v7.3.x",sidebarPosition:6,frontMatter:{title:"End Users",sidebar_label:"End Users",sidebar_position:6,slug:"/middleware/ics29-fee/end-users"},sidebar:"defaultSidebar",previous:{title:"Events",permalink:"/v7/middleware/ics29-fee/events"},next:{title:"Overview",permalink:"/v7/middleware/callbacks/overview"}},l={},d=[{value:"Pre-requisite readings",id:"pre-requisite-readings",level:2},{value:"Summary",id:"summary",level:2},{value:"CLI Users",id:"cli-users",level:2},{value:"Client developers",id:"client-developers",level:2}],c={toc:d},u="wrapper";function p(e){let{components:r,...t}=e;return(0,i.kt)(u,(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"for-end-users"},"For end users"),(0,i.kt)("admonition",{title:"Synopsis",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Learn how to incentivize IBC packets using the ICS29 Fee Middleware module. ")),(0,i.kt)("h2",{id:"pre-requisite-readings"},"Pre-requisite readings"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/v7/middleware/ics29-fee/overview"},"Fee Middleware"))),(0,i.kt)("h2",{id:"summary"},"Summary"),(0,i.kt)("p",null,"Different types of end users:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"CLI users who want to manually incentivize IBC packets"),(0,i.kt)("li",{parentName:"ul"},"Client developers")),(0,i.kt)("p",null,"The Fee Middleware module allows end users to add a 'tip' to each IBC packet which will incentivize relayer operators to relay packets between chains. gRPC endpoints are exposed for client developers as well as a simple CLI for manually incentivizing IBC packets."),(0,i.kt)("h2",{id:"cli-users"},"CLI Users"),(0,i.kt)("p",null,"For an in depth guide on how to use the ICS29 Fee Middleware module using the CLI please take a look at the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/cosmos/ibc-go/wiki/Fee-enabled-fungible-token-transfers#asynchronous-incentivization-of-a-fungible-token-transfer"},"wiki")," on the ",(0,i.kt)("inlineCode",{parentName:"p"},"ibc-go")," repo."),(0,i.kt)("h2",{id:"client-developers"},"Client developers"),(0,i.kt)("p",null,"Client developers can read more about the relevant ICS29 message types in the ",(0,i.kt)("a",{parentName:"p",href:"/v7/middleware/ics29-fee/msgs"},"Fee messages section"),"."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/cosmos/cosmjs"},"CosmJS")," is a useful client library for signing and broadcasting Cosmos SDK messages."))}p.isMDXComponent=!0}}]);