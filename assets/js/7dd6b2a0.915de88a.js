"use strict";(self.webpackChunkef_website_template=self.webpackChunkef_website_template||[]).push([[959],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(r),f=o,d=m["".concat(c,".").concat(f)]||m[f]||s[f]||i;return r?n.createElement(d,a(a({ref:t},p),{},{components:r})):n.createElement(d,a({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4617:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>s,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var n=r(7462),o=(r(7294),r(3905));const i={},a="Wiedereinstieg in Python",l={permalink:"/EF-Informatik/2022/08/26/Wiedereinstieg-in-Python",editUrl:"https://github.com/mcdelarosa/EF-Informatik/tree/main/blog/2022-08-26-Wiedereinstieg-in-Python.md",source:"@site/blog/2022-08-26-Wiedereinstieg-in-Python.md",title:"Wiedereinstieg in Python",description:"*",date:"2022-08-26T00:00:00.000Z",formattedDate:"26. August 2022",tags:[],readingTime:.4,hasTruncateMarker:!1,authors:[],frontMatter:{},prevItem:{title:"datenstruktur",permalink:"/EF-Informatik/2022/11/29/numtrip/datenstruktur"}},c={authorsImageUrls:[]},u=[],p={toc:u};function s(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Das heutige Thema war Python/Tigerjython was mir nicht wirklich gef\xe4llt, da das nur eine Bibliothek,\ndie keiner im Alltag braucht und nutzlos ist."),(0,o.kt)("h1",{id:"tigerjython-ist-doof"},"Tigerjython ist doof"),(0,o.kt)("p",null,"Nichtsdestotrotz habe ich einen, in meinen Augen, super Code programmiert, und zwar das ZickZack Programm\nim ersten Kapitel:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},'from turtle import *\ncolor = ["red", "orange", "lime"]\npensize = 5\nright(60)\nfor x in color:\n    left(120)\n    pencolor(x)\n    forward(20)\n    right(120)\n    forward(20)\n')),(0,o.kt)("p",null,"Hat eine gr\xf6ssere Aufwendung gebraucht, doch es hat sich gelohnt."))}s.isMDXComponent=!0}}]);