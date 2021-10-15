"use strict";(self.webpackChunkarchway_docs=self.webpackChunkarchway_docs||[]).push([[9985],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),s=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),f=r,h=d["".concat(c,".").concat(f)]||d[f]||u[f]||a;return n?o.createElement(h,i(i({ref:t},p),{},{components:n})):o.createElement(h,i({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9015:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return p},default:function(){return d}});var o=n(7462),r=n(3366),a=(n(7294),n(3905)),i=["components"],l={sidebar_position:3},c="Inflation",s={unversionedId:"overview/technology/economics/inflation",id:"overview/technology/economics/inflation",isDocsHomePage:!1,title:"Inflation",description:"The Archway overall inflation rate follows the model of the mint module in the Cosmos Hub, with total token supply increasing between 7% and 20% annually, depending on the ratio of tokens that are actively staked on the network.",source:"@site/docs/overview/technology/economics/inflation.md",sourceDirName:"overview/technology/economics",slug:"/overview/technology/economics/inflation",permalink:"/docs/overview/technology/economics/inflation",editUrl:"https://github.com/archway-network/archway-docs/edit/main/docs/overview/technology/economics/inflation.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Gas Rebates",permalink:"/docs/overview/technology/economics/gas-rebates"},next:{title:"Example Use Cases",permalink:"/docs/overview/technology/economics/examples"}},p=[],u={toc:p};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"inflation"},"Inflation"),(0,a.kt)("p",null,"The Archway overall inflation rate follows the model of the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/gavinly/CosmosParametersWiki/blob/master/Mint.md"},"mint module")," in the Cosmos Hub, with total token supply increasing between 7% and 20% annually, depending on the ratio of tokens that are actively staked on the network."),(0,a.kt)("p",null,"Archway shares a portion of these total inflation rewards directly with dApps. The protocol provides configurable parameters to determine the optimal distribution between validators and dApps. At genesis, 25% will go to dApp developers and 75% will go to validators. For example, if the network sees total annual inflation of 8%, then 2% would go to dApps and 6% would go to validators."),(0,a.kt)("p",null,"The dApp rewards pool (2% in the previous example) is then proportionally distributed based on the relative amount of gas fees that each dApp generates within a given epoch. For example, a dApp that is responsible for 10% of gas consumption is awarded 10% of the available pool."),(0,a.kt)("p",null,"To mitigate potential Sybil attacks and ensure spamming transactions is not profitable, each dApp has a max inflation rewards cap. At network launch, there is a hard cap based on the total gas fees paid per dApp. A contract deployed to Archway cannot earn rewards greater than the total gas it generates within an epoch. Implementation of a dynamic rewards cap is being actively researched and can be updated through future governance. Transitioning to a floating cap will provide more flexible distribution and further incentivize developers to continuously improve their dApps."),(0,a.kt)("p",null,"Any surplus in rewards will be contributed to the Archway community pool where the funds are managed through governance."),(0,a.kt)("p",null,"Inflationary rewards are paid out by the network on a per-block basis."))}d.isMDXComponent=!0}}]);