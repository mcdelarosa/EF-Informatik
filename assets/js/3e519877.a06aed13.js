"use strict";(self.webpackChunkef_website_template=self.webpackChunkef_website_template||[]).push([[88],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>d});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(t),d=a,g=u["".concat(c,".").concat(d)]||u[d]||m[d]||i;return t?r.createElement(g,o(o({ref:n},p),{},{components:t})):r.createElement(g,o({ref:n},p))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=u;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=t[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},9505:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=t(7462),a=(t(7294),t(3905));const i={},o=void 0,s={permalink:"/EF-Informatik/Node-API",editUrl:"https://github.com/mcdelarosa/EF-Informatik/tree/main/blog/Node-API.md",source:"@site/blog/Node-API.md",title:"Node-API",description:'Um einen "einfachen" API herzustellen, haben wir Node-RED gebraucht.',date:"2023-03-16T20:57:30.000Z",formattedDate:"16. M\xe4rz 2023",tags:[],readingTime:1.145,hasTruncateMarker:!1,authors:[],frontMatter:{},prevItem:{title:"API-Theorie",permalink:"/EF-Informatik/API-Theorie"},nextItem:{title:"Numtrip-Abgabe",permalink:"/EF-Informatik/2023/01/26/Numtrip-Abgabe"}},c={authorsImageUrls:[]},l=[{value:"Anleitung:",id:"anleitung",level:2},{value:"Erfahrungen:",id:"erfahrungen",level:2}],p={toc:l};function m(e){let{components:n,...i}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,i,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,'Um einen "einfachen" API herzustellen, haben wir Node-RED gebraucht.'),(0,a.kt)("h2",{id:"anleitung"},"Anleitung:"),(0,a.kt)("p",null," ",(0,a.kt)("strong",{parentName:"p"},"Vorkenntnissen von API gebraucht!!!!"),(0,a.kt)("br",{parentName:"p"}),"\n","So sollten alle, die gebrauchten K\xe4stchen, aussehen (Verbindungen noch gebraucht und ganz normale Debug-K\xe4stchen):\n",(0,a.kt)("img",{alt:"img.png",src:t(9847).Z,width:"1534",height:"640"}),"\n'http in' zu GET-Methode \xe4ndern (um Neues hinzuf\xfcgen zu k\xf6nnen) und diese URL einf\xfcgen ",(0,a.kt)("inlineCode",{parentName:"p"},"/api/to-emoji-lang"),".\n",(0,a.kt)("img",{alt:"img_1.png",src:t(9530).Z,width:"1063",height:"193"}),"\nWas ",(0,a.kt)("strong",{parentName:"p"},"nicht")," zu \xe4ndern ",(0,a.kt)("strong",{parentName:"p"},"genannt")," wurde, ist auch ",(0,a.kt)("strong",{parentName:"p"},"nicht")," zu ",(0,a.kt)("strong",{parentName:"p"},"\xe4ndern")," gebraucht!\nNun beginnt das Lustige!",(0,a.kt)("br",{parentName:"p"}),"\n","\xc4ndere die Funktion mit dem was du kriegen m\xf6chtest, ich zB:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"let emoji = msg.payload.text.toLowerCase();\n\nconst icons = [\n['hello', '\ud83d\udc4b'],\n['melone','\ud83c\udf48'],\n['hallo', '\ud83d\udc4b']\n\n]\n\nicons.forEach(function(element) {\nemoji = emoji.replace(element[0], element[1])    \n});\n\n\nmsg.payload = {\nmsg: emoji\n};\n\nreturn msg;\n")),(0,a.kt)("p",null,"Das \xe4ndert den Text so, dass die W\xf6rter in der Array zu den n\xe4chsten Emojis ersetzt werden."),(0,a.kt)("h2",{id:"erfahrungen"},"Erfahrungen:"),(0,a.kt)("p",null,"Meine Erfahrungen bis dahin sind nicht wirklich begeisterlich...",(0,a.kt)("br",{parentName:"p"}),"\n","Ich finde es gut, dass man eine ",(0,a.kt)("strong",{parentName:"p"},"Software")," hat f\xfcr ",(0,a.kt)("strong",{parentName:"p"},'"Nicht-Entwickler"'),", denn eigentlich braucht man kaum zu programmieren, und vieles ist vereinfacht bzw: die Konvertierung des Codes in irgendeine andere Sprache.",(0,a.kt)("br",{parentName:"p"}),"\n","Doch ich habe ",(0,a.kt)("strong",{parentName:"p"},"anfangs"),",und es kann wahrscheinlich an mir liegen, nicht viel gelernt...",(0,a.kt)("br",{parentName:"p"}),"\n","Nachdem ich mir die Zeit genommen hatte etwa zu verstehen, wie das RED-Node funktionieren k\xf6nnte, war mir alles verst\xe4ndlicher geworden.",(0,a.kt)("br",{parentName:"p"}),"\n","Mir w\xe4re es aber lieber, wenn wir das ",(0,a.kt)("strong",{parentName:"p"},"Programmieren")," k\xf6nnten, anstatt diese App zu brauchen, mit der Gedanke, dass dies auch ",(0,a.kt)("strong",{parentName:"p"},"herausfordender")," w\xe4re.",(0,a.kt)("br",{parentName:"p"}),"\n","Schliesslich w\xfcrde ich mehr ",(0,a.kt)("strong",{parentName:"p"},"verstehen")," und alles besser ",(0,a.kt)("strong",{parentName:"p"},"geniessen"),", glaube ich."))}m.isMDXComponent=!0},9847:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/img-abb3920c09600a27037e6d155b81d2ee.png"},9530:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/img_1-b8bf0e83ea8c1dbfefb39d17e18e3cc9.png"}}]);