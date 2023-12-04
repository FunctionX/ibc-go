"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7157],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(n),m=o,f=c["".concat(l,".").concat(m)]||c[m]||u[m]||i;return n?r.createElement(f,a(a({ref:t},d),{},{components:n})):r.createElement(f,a({ref:t},d))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},67364:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const i={title:"Bind ports",sidebar_label:"Bind ports",sidebar_position:3,slug:"/ibc/apps/bindports"},a="Bind ports",s={unversionedId:"ibc/apps/bindports",id:"version-v8.0.x/ibc/apps/bindports",title:"Bind ports",description:"Learn what changes to make to bind modules to their ports on initialization.",source:"@site/versioned_docs/version-v8.0.x/01-ibc/03-apps/03-bindports.md",sourceDirName:"01-ibc/03-apps",slug:"/ibc/apps/bindports",permalink:"/v8/ibc/apps/bindports",draft:!1,tags:[],version:"v8.0.x",sidebarPosition:3,frontMatter:{title:"Bind ports",sidebar_label:"Bind ports",sidebar_position:3,slug:"/ibc/apps/bindports"},sidebar:"defaultSidebar",previous:{title:"Implement IBCModule interface and callbacks",permalink:"/v8/ibc/apps/ibcmodule"},next:{title:"Keeper",permalink:"/v8/ibc/apps/keeper"}},l={},p=[],d={toc:p},c="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"bind-ports"},"Bind ports"),(0,o.kt)("admonition",{title:"Synopsis",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Learn what changes to make to bind modules to their ports on initialization.")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("h2",{parentName:"admonition",id:"pre-requisite-readings"},"Pre-requisite readings"),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/v8/ibc/overview"},"IBC Overview")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/v8/ibc/integration"},"IBC default integration")))),(0,o.kt)("p",null,"Currently, ports must be bound on app initialization. In order to bind modules to their respective ports on initialization, the following needs to be implemented:"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note that ",(0,o.kt)("inlineCode",{parentName:"p"},"portID")," does not refer to a certain numerical ID, like ",(0,o.kt)("inlineCode",{parentName:"p"},"localhost:8080")," with a ",(0,o.kt)("inlineCode",{parentName:"p"},"portID")," 8080. Rather it refers to the application module the port binds. For IBC Modules built with the Cosmos SDK, it defaults to the module's name and for Cosmwasm contracts it defaults to the contract address.")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Add port ID to the ",(0,o.kt)("inlineCode",{parentName:"li"},"GenesisState")," proto definition:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-protobuf"},"message GenesisState {\n  string port_id = 1;\n  // other fields\n}\n")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Add port ID as a key to the module store:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'// x/<moduleName>/types/keys.go\nconst (\n  // ModuleName defines the IBC Module name\n  ModuleName = "moduleName"\n\n  // Version defines the current version the IBC\n  // module supports\n  Version = "moduleVersion-1"\n\n  // PortID is the default port id that module binds to\n  PortID = "portID"\n\n  // ...\n)\n')),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Add port ID to ",(0,o.kt)("inlineCode",{parentName:"li"},"x/<moduleName>/types/genesis.go"),":")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'// in x/<moduleName>/types/genesis.go\n\n// DefaultGenesisState returns a GenesisState with "transfer" as the default PortID.\nfunc DefaultGenesisState() *GenesisState {\n  return &GenesisState{\n    PortId:      PortID,\n    // additional k-v fields\n  }\n}\n\n// Validate performs basic genesis state validation returning an error upon any\n// failure.\nfunc (gs GenesisState) Validate() error {\n  if err := host.PortIdentifierValidator(gs.PortId); err != nil {\n    return err\n  }\n  //addtional validations\n\n  return gs.Params.Validate()\n}\n')),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Bind to port(s) in the module keeper's ",(0,o.kt)("inlineCode",{parentName:"li"},"InitGenesis"),":")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'// InitGenesis initializes the ibc-module state and binds to PortID.\nfunc (k Keeper) InitGenesis(ctx sdk.Context, state types.GenesisState) {\n  k.SetPort(ctx, state.PortId)\n\n  // ...\n\n  // Only try to bind to port if it is not already bound, since we may already own\n  // port capability from capability InitGenesis\n  if !k.hasCapability(ctx, state.PortId) {\n    // transfer module binds to the transfer port on InitChain\n    // and claims the returned capability\n    err := k.BindPort(ctx, state.PortId)\n    if err != nil {\n      panic(fmt.Sprintf("could not claim port capability: %v", err))\n    }\n  }\n\n  // ...\n}\n')),(0,o.kt)("p",null,"With:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"// IsBound checks if the  module is already bound to the desired port\nfunc (k Keeper) IsBound(ctx sdk.Context, portID string) bool {\n  _, ok := k.scopedKeeper.GetCapability(ctx, host.PortPath(portID))\n  return ok\n}\n\n// BindPort defines a wrapper function for the port Keeper's function in\n// order to expose it to module's InitGenesis function\nfunc (k Keeper) BindPort(ctx sdk.Context, portID string) error {\n  cap := k.portKeeper.BindPort(ctx, portID)\n  return k.ClaimCapability(ctx, cap, host.PortPath(portID))\n}\n")),(0,o.kt)("p",null,"The module binds to the desired port(s) and returns the capabilities."),(0,o.kt)("p",null,"In the above we find reference to keeper methods that wrap other keeper functionality, in the next section the keeper methods that need to be implemented will be defined."))}u.isMDXComponent=!0}}]);