"use strict";(self.webpackChunkarchway_docs=self.webpackChunkarchway_docs||[]).push([[701],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return l}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),i=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=i(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),f=i(n),l=a,y=f["".concat(s,".").concat(l)]||f[l]||d[l]||o;return n?r.createElement(y,c(c({ref:t},p),{},{components:n})):r.createElement(y,c({ref:t},p))}));function l(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=f;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:a,c[1]=u;for(var i=2;i<o;i++)c[i]=n[i];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},9424:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return s},metadata:function(){return i},toc:function(){return p},default:function(){return f}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),c=["components"],u={sidebar_position:2},s="Requesting Testnet funds",i={unversionedId:"create/guides/my-first-dapp/faucet",id:"create/guides/my-first-dapp/faucet",isDocsHomePage:!1,title:"Requesting Testnet funds",description:"If you're working on a testnet you'll want testnet $ARCH for paying gas costs to deploy your dApp code on chain.",source:"@site/docs/create/guides/my-first-dapp/faucet.md",sourceDirName:"create/guides/my-first-dapp",slug:"/create/guides/my-first-dapp/faucet",permalink:"/docs/create/guides/my-first-dapp/faucet",editUrl:"https://github.com/archway-network/archway-docs/edit/main/docs/create/guides/my-first-dapp/faucet.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"mainSidebar",previous:{title:"Starting out",permalink:"/docs/create/guides/my-first-dapp/start"},next:{title:"Producing Wasm executables",permalink:"/docs/create/guides/my-first-dapp/wasm"}},p=[],d={toc:p};function f(e){var t=e.components,n=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"requesting-testnet-funds"},"Requesting Testnet funds"),(0,o.kt)("p",null,"If you're working on a testnet you'll want testnet ",(0,o.kt)("inlineCode",{parentName:"p"},"$ARCH")," for paying gas costs to deploy your dApp code on chain."),(0,o.kt)("p",null,"After ",(0,o.kt)("a",{parentName:"p",href:"/docs/create/getting-started/setup#creating-an-account"},"creating an account"),", get its address and request funds using the command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"archway faucet\n")),(0,o.kt)("p",null,"Example output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"Enter an address to receive Testnet funds (e.g. \"archway1x35egm8883wzg2zwqkvcjp0j4g25p4hed4yjuv\"; Or, hit <enter> to list accounts): archway1gtmpktrrnu2qwnweyulwptv6wukd3edpxugkzn\nRequesting faucet funds to account archway1gtmpktrrnu2qwnweyulwptv6wukd3edpxugkzn...\n\n{ transfers: [ { coin: '10000000uconst', status: 'ok' } ] }\nRequested funds to archway1gtmpktrrnu2qwnweyulwptv6wukd3edpxugkzn on network constantine-1 using faucet https://faucet.constantine-1.archway.tech\nSuccess! REQUEST SENT\n")))}f.isMDXComponent=!0}}]);