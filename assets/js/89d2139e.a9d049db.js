"use strict";(self.webpackChunkef_website_template=self.webpackChunkef_website_template||[]).push([[889],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),o=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=o(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),m=o(r),d=a,f=m["".concat(s,".").concat(d)]||m[d]||c[d]||l;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=m;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:a,i[1]=u;for(var o=2;o<l;o++)i[o]=r[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2950:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>u,toc:()=>o});var n=r(7462),a=(r(7294),r(3905));const l={},i=void 0,u={permalink:"/EF-Informatik/2022/11/29/numtrip/datenstruktur",editUrl:"https://github.com/mcdelarosa/EF-Informatik/tree/main/blog/numtrip/2022-11-29-datenstruktur.md",source:"@site/blog/numtrip/2022-11-29-datenstruktur.md",title:"datenstruktur",description:"Das waren meine Entw\xfcrfe (auch mit Kollegen) des Numtrips, um eine Idee zu haben was gerade gemacht wurde oder noch zu tun ist.",date:"2022-11-29T00:00:00.000Z",formattedDate:"29. November 2022",tags:[],readingTime:.635,hasTruncateMarker:!1,authors:[],frontMatter:{},prevItem:{title:"ein-auf-und-ab",permalink:"/EF-Informatik/2022/11/29/ein-auf-und-ab"},nextItem:{title:"Wiedereinstieg-in-Python",permalink:"/EF-Informatik/2022/08/26/Wiedereinstieg-in-Python"}},s={authorsImageUrls:[]},o=[{value:"Unser allererster Entwurf:",id:"unser-allererster-entwurf",level:3},{value:"Unser letzter Entwurf:",id:"unser-letzter-entwurf",level:3}],p={toc:o};function c(e){let{components:t,...l}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Das waren meine Entw\xfcrfe (auch mit Kollegen) des Numtrips, um eine Idee zu haben was gerade gemacht wurde oder noch zu tun ist."),(0,a.kt)("h3",{id:"unser-allererster-entwurf"},"Unser allererster Entwurf:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"img_1.png",src:r(5615).Z,width:"964",height:"1280"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"wir wollten nur herausfinden (\xfcberlegen) wie das Numtrip aussehen sollte",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Mit Zahlen sollte dies arbeiten"),(0,a.kt)("li",{parentName:"ul"},"Felder die Zahlen enthalten"),(0,a.kt)("li",{parentName:"ul"},"K\xf6nnte man als 2D-Matrix darstellen (was wiederum aus Listen besteht)")))),(0,a.kt)("h3",{id:"unser-letzter-entwurf"},"Unser letzter Entwurf:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Numtrip1.jpeg",src:r(867).Z,width:"4032",height:"3024"}),"\nEinleitung:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Das Programm soll das Numtrip Spiel erstellen"),(0,a.kt)("li",{parentName:"ol"},"Spielfeld und Eingabe:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Spielfeld soll erstellt und gezeichnet werden"),(0,a.kt)("li",{parentName:"ul"},"Der Spieler sollte Koordinaten (ein Feld) ausw\xe4hlen k\xf6nnen."))),(0,a.kt)("li",{parentName:"ol"},"Getipptes einzelnes Feld:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Man soll dieses Feld \xfcberpr\xfcfen und nach gleichen Werte suchen (die in der N\xe4he stehen).")))),(0,a.kt)("p",null,"Der Rest wurde vernachl\xe4ssigt, weil das f\xfcr uns an dieser Zeit unwichtig."))}c.isMDXComponent=!0},867:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/Numtrip1-2d5b849f7fdbc60153bcbf2def1cca1b.jpeg"},5615:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/img_1-a660aac511f8cfd781200a478d1729cf.png"}}]);