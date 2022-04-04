"use strict";(self.webpackChunkarchway_docs=self.webpackChunkarchway_docs||[]).push([[31],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,g=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(g,i(i({ref:t},l),{},{components:n})):a.createElement(g,i({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9708:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return l},default:function(){return d}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],c={sidebar_position:2},s="Setup",p={unversionedId:"create/getting-started/setup",id:"create/getting-started/setup",isDocsHomePage:!1,title:"Setup",description:"A new Archway project is a Rust project that will compile to wasm using the archwayd binary, which is an implementation of a cosmos zone with wasm smart contracts enabled.",source:"@site/docs/create/getting-started/setup.md",sourceDirName:"create/getting-started",slug:"/create/getting-started/setup",permalink:"/docs/create/getting-started/setup",editUrl:"https://github.com/archway-network/archway-docs/edit/main/docs/create/getting-started/setup.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"mainSidebar",previous:{title:"Installation",permalink:"/docs/create/getting-started/install"},next:{title:"Basics",permalink:"/docs/create/getting-started/basics"}},l=[{value:"Creating an account",id:"creating-an-account",children:[]},{value:"Creating a project",id:"creating-a-project",children:[]},{value:"Configuring a project",id:"configuring-a-project",children:[]},{value:"Network settings and migrating between networks",id:"network-settings-and-migrating-between-networks",children:[]}],u={toc:l};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"setup"},"Setup"),(0,o.kt)("p",null,"A new Archway project is a Rust project that will compile to ",(0,o.kt)("inlineCode",{parentName:"p"},"wasm")," using the ",(0,o.kt)("inlineCode",{parentName:"p"},"archwayd")," binary, which is an implementation of a cosmos zone with ",(0,o.kt)("inlineCode",{parentName:"p"},"wasm")," smart contracts enabled."),(0,o.kt)("p",null,"Let's setup a new project, using the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/archway-network/archway-cli"},"Archway developer CLI")),(0,o.kt)("h2",{id:"creating-an-account"},"Creating an account"),(0,o.kt)("p",null,"Use the command ",(0,o.kt)("inlineCode",{parentName:"p"},"archway accounts")," to view wallets in your key ring, or create a new wallet using the flag ",(0,o.kt)("inlineCode",{parentName:"p"},"--add <account label>")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'archway accounts --add "mywallet"\n')),(0,o.kt)("p",null,"Example output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'Enter keyring passphrase:\n\n- name: mywallet\n  type: local\n  address: archway1gtmpktrrnu2qwnweyulwptv6wukd3edpxugkzn\n  pubkey: archwaypub1addwnpepqdhls9u834myuuajgstf8esyqttn3ph6r5y6kr5nnfx5uc06al9hut8r9ac\n  mnemonic: ""\n  threshold: 0\n  pubkeys: []\n\n\n**Important** write this mnemonic phrase in a safe place.\nIt is the only way to recover your account if you ever forget your password.\n\n# Mnemonic seed words here...\n')),(0,o.kt)("h2",{id:"creating-a-project"},"Creating a project"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"archway new")," command starts a new project. You can press ",(0,o.kt)("inlineCode",{parentName:"p"},"enter")," to accept the default options for any of the project configuration questions."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"archway new\n")),(0,o.kt)("p",null,"Example Output: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'Creating new Archway dApp...\n\nConfigure environment (Y/N default: N)?: Y\n\n1. Testnet\n2. Localhost\n3. Mainnet\n\nSelect environment type (1-3 default: 1): 1\n\n1. Constantine [stable]\n2. Titus [nightly]\n\nSelect a testnet to use (1-2 default: 1): 1\nUse Docker to run "archwayd" daemon (Y/N default: N)?: Y\nUse starter template? (Y/N default: N): Y\n\n1. Increment [https://github.com/drewstaylor/archway-template/blob/main/README.md]\n\nSelect starter template (1-1): 1\n\nName of project (e.g. "My Project"): First Archway Project\n\ud83d\udca1   Using private key: `$HOME/.ssh/id_rsa` for git-ssh checkout\n\ud83d\udd27   Generating template ...\n\n# More GitHub Feedback here...\n\n\ud83d\udd27   Moving generated files into: `/home/first-archway-project`...\n\u2728   Done! New project created /home/first-archway-project\n\nSuccessfully created new Increment project in path /home/first-archway-project with network configuration constantine-1.\nConfig file location: /home/first-archway-project/config.json\n')),(0,o.kt)("h2",{id:"configuring-a-project"},"Configuring a project"),(0,o.kt)("p",null,"When you've created a new project, navigate to the folder where the project was installed and print your config using the command ",(0,o.kt)("inlineCode",{parentName:"p"},"archway configure"),". "),(0,o.kt)("p",null,"If this configuration isn't to your liking, you can always modify it by editing the ",(0,o.kt)("inlineCode",{parentName:"p"},"config.json")," file in the root folder of the project. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd my-project\narchway configure\n")),(0,o.kt)("p",null,"Outputs:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"Printing environment settings...\n{\n  title: 'My Project',\n  version: '0.0.1',\n  network: {...},\n  developer: {...},\n  path: '/home/my-system-path/my-project',\n  type: 'Increment'\n} \n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"type"),' parameter simply keeps track of which "starter template" you used during project creation.'),(0,o.kt)("p",null,"In ",(0,o.kt)("inlineCode",{parentName:"p"},"network")," you'll find settings for the network you're working on. Supported network types are ",(0,o.kt)("inlineCode",{parentName:"p"},"mainnet"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"testnet")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"localhost"),". Additionally, there are 2 testnet choices: ",(0,o.kt)("inlineCode",{parentName:"p"},"stable [constantine]")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"nightly [titus]"),"."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"developer")," contains a history of your deployments and holds scripts for building, testing, optimizing and deploying your project. In ",(0,o.kt)("inlineCode",{parentName:"p"},"developer.scripts"),' you\'ll have granular control over how your project is compiled, executed and deployed, but it already "just works" without any tinkering.'),(0,o.kt)("h2",{id:"network-settings-and-migrating-between-networks"},"Network settings and migrating between networks"),(0,o.kt)("p",null,"During a project's life cycle you may want to migrate or change your network settings. For example, switching from ",(0,o.kt)("inlineCode",{parentName:"p"},"testnet")," to a ",(0,o.kt)("inlineCode",{parentName:"p"},"mainnet")," deployment."),(0,o.kt)("p",null,"Migrate between networks using the command ",(0,o.kt)("inlineCode",{parentName:"p"},"archway network"),". This will print your current settings and give the option to change networks."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"archway network\n")),(0,o.kt)("p",null,"Example output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"Printing network settings...\n1. Testnet* [constantine, titus]\n2. Localhost\n3. Mainnet [triomphe]\nMigrate to another network (Y/N default: N)?: n\nOk!\n")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If you migrate between networks by answering ",(0,o.kt)("inlineCode",{parentName:"p"},"y")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"yes")," and following the additional migration questions, your previous deployments history and script customisations will remain in tact."))))}d.isMDXComponent=!0}}]);