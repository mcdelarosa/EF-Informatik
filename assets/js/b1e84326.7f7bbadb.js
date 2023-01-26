"use strict";(self.webpackChunkef_website_template=self.webpackChunkef_website_template||[]).push([[340],{3905:(e,n,t)=>{t.d(n,{Zo:()=>h,kt:()=>p});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=r.createContext({}),m=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},h=function(e){var n=m(e.components);return r.createElement(o.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),c=m(t),p=a,g=c["".concat(o,".").concat(p)]||c[p]||u[p]||i;return t?r.createElement(g,s(s({ref:n},h),{},{components:t})):r.createElement(g,s({ref:n},h))}));function p(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,s=new Array(i);s[0]=c;var l={};for(var o in n)hasOwnProperty.call(n,o)&&(l[o]=n[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var m=2;m<i;m++)s[m]=t[m];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},1570:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>m});var r=t(7462),a=(t(7294),t(3905));const i={},s=void 0,l={permalink:"/EF-Informatik/2023/01/26/Numtrip-Abgabe",editUrl:"https://github.com/mcdelarosa/EF-Informatik/tree/main/blog/2023-01-26-Numtrip-Abgabe.md",source:"@site/blog/2023-01-26-Numtrip-Abgabe.md",title:"Numtrip-Abgabe",description:"*",date:"2023-01-26T00:00:00.000Z",formattedDate:"26. Januar 2023",tags:[],readingTime:3.575,hasTruncateMarker:!1,authors:[],frontMatter:{},nextItem:{title:"Nicht-viel",permalink:"/EF-Informatik/2022/12/20/Nicht-viel"}},o={authorsImageUrls:[]},m=[{value:"Ziel des Spiels",id:"ziel-des-spiels",level:3},{value:"Top Down Entwurf",id:"top-down-entwurf",level:3},{value:"Gewichtskraft des Spiels",id:"gewichtskraft-des-spiels",level:3},{value:"Voraussetzung",id:"voraussetzung",level:3},{value:"Meine Erkenntnisse",id:"meine-erkenntnisse",level:3},{value:"Meine gr\xf6sste Herausforderung",id:"meine-gr\xf6sste-herausforderung",level:3},{value:"Tipps",id:"tipps",level:3},{value:"Zusammenfassung",id:"zusammenfassung",level:3}],h={toc:m};function u(e){let{components:n,...i}=e;return(0,a.kt)("wrapper",(0,r.Z)({},h,i,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Heute ist die Abgabe vom Numtrip. Und ich, ich habe alles programmiert, was gebraucht wird, um dann das Spiel spielbar zu machen.\\\nIch m\xf6chte noch meine Erkenntnisse und eine Zusammenfassung des Numtrips verfassen, bevor ich alles abgebe. Auch damit die Person, die Numtrip programmieren m\xf6chte eine Idee hat, welche Probleme auftretten k\xf6nnen und was diese Person besser als ich tun k\xf6nnte, dennoch welche Nach- und Vorteile das einem bringt. "),(0,a.kt)("h3",{id:"ziel-des-spiels"},"Ziel des Spiels"),(0,a.kt)("p",null,"Das Ziel des Spiels ist die ",(0,a.kt)("strong",{parentName:"p"},"gr\xf6sste Zahl")," zu kriegen (in meinem Programm \xfcber 256 bzw. 512) mit den m\xf6glichst ",(0,a.kt)("strong",{parentName:"p"},"wenigen Spielz\xfcgen"),".\\\nMan darf ",(0,a.kt)("strong",{parentName:"p"},"kein Wert")," w\xe4hlen, das ",(0,a.kt)("strong",{parentName:"p"},"nicht in der Nachbarszellen")," steht (siehe das erste Bild) sonst verliert man!"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("img",{alt:"NumtripBsp.png",src:t(6755).Z,width:"113",height:"135"})),(0,a.kt)("p",{parentName:"blockquote"},"Die ",(0,a.kt)("strong",{parentName:"p"},"blau"),"-eingekreiste Zahl: ",(0,a.kt)("strong",{parentName:"p"},"ausgew\xe4hlte Zahl")),(0,a.kt)("p",{parentName:"blockquote"},"Die ",(0,a.kt)("strong",{parentName:"p"},"gelb"),"-eingekreisten Zahlen: ",(0,a.kt)("strong",{parentName:"p"},"Nachbarszahlen"))),(0,a.kt)("h3",{id:"top-down-entwurf"},"Top Down Entwurf"),(0,a.kt)("p",null,"Top Down Entwurf von Numtrip (bitte nicht kritisieren! Weder hatte ich Zeit noch die richtigen Werkzeuge...)."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("img",{alt:"Numtrip-Top-Down-Entwuf.png",src:t(375).Z,width:"779",height:"901"}))),(0,a.kt)("h3",{id:"gewichtskraft-des-spiels"},"Gewichtskraft des Spiels"),(0,a.kt)("p",null,"Ich werde folgender Algorithmus erkl\xe4ren:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("img",{alt:"gravitation.png",src:t(6099).Z,width:"580",height:"313"})),(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},"Damit fallen die Werte, falls die unteren Felder leer sind."),(0,a.kt)("li",{parentName:"ul"},"Die Werte werden von ",(0,a.kt)("strong",{parentName:"li"},"unten")," nach ",(0,a.kt)("strong",{parentName:"li"},"oben")," gepr\xfcft",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Falls man einen Wert ",(0,a.kt)("strong",{parentName:"li"},"gefunden")," hat (das sucht ",(0,a.kt)("inlineCode",{parentName:"li"},"getFirstUpNumber()"),") wird dieses Feld durch eine ",(0,a.kt)("strong",{parentName:"li"},"-1 ersetzt")," und geht zum untersten Feld ",(0,a.kt)("strong",{parentName:"li"},"ohne")," Wert"))),(0,a.kt)("li",{parentName:"ul"},"Danach werden alle Felder mit -1 ",(0,a.kt)("strong",{parentName:"li"},"ersetzt"),", durch eine Zahl mit der ",(0,a.kt)("strong",{parentName:"li"},"Basis 2")),(0,a.kt)("li",{parentName:"ul"},"Zuletzt wiederholt man dies aber auf der ",(0,a.kt)("strong",{parentName:"li"},"n\xe4chsten Spalte")))),(0,a.kt)("h3",{id:"voraussetzung"},"Voraussetzung"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Python-Version: ",(0,a.kt)("strong",{parentName:"li"},"Python 3.x")," und probiert mit Python 3.10.6"),(0,a.kt)("li",{parentName:"ul"},"Ein Computer ;P")),(0,a.kt)("h3",{id:"meine-erkenntnisse"},"Meine Erkenntnisse"),(0,a.kt)("p",null,"Python hatten wir in der Schule schon gehabt, jedoch mit einer Bibliothek (Tigerjyton).\nDiese war einfach zu steuern und war gut f\xfcr Anf\xe4nger, welche noch nie programmiert haben. Doch f\xfcr jemanden, der sich in der Informatik vertiefen will ist das ein Nichts-Nutz...\\\nMan muss Neues dazu lernen, wenn man ",(0,a.kt)("strong",{parentName:"p"},"ECHTES"),' Python macht, wzB. die Schleifen, es gibt keine Grafiken, Python ist keine "Zeichnungsprache", usw. \\\nF\xfcr mich war das wort w\xf6rtlich vergeudete Zeit mit Tigerjyton... Ich lernte etwas, was f\xfcr meine Karriere keine Auswirkungen haben w\xfcrde. \\\nDeshalb war es auch schwieriger f\xfcr mich in Python einzusteigen, obschon ich auf JavaScript programmieren konnte.\\\nNumtrip, ein vom Augen her simples Spiel, war das eine relevante \xdcbung, das mir erm\xf6glicht hat Python und das Programmieren besser zu beherrschen, und zwar nicht wenig (trotzdem bin ich noch kein Meister).\\\nDas war eine profitable Aufgabe, welche ich jeden empfehlen kann, es ist nicht leicht, doch das lohnt sich wenn man Anf\xe4nger ist (wird aufw\xe4ndiger sein, aber gleichzeitig hilfreich sein) und schon mit Pyhton oder anderen Sprachen programmiert hat (f\xfcr Fortgeschrittene eher nicht).\\\nBei mir hat es an Zeit vollkommend gereicht das Spiel zu enden, trotz der vielen Schwierigkeiten, die auftratten.\\\nNachteile gibt es f\xfcr mich keine.'),(0,a.kt)("h3",{id:"meine-gr\xf6sste-herausforderung"},"Meine gr\xf6sste Herausforderung"),(0,a.kt)("p",null,"Sie war an einem Freitag Nachmittag da. Diese wartete ewig auf mich.\\\nDie Herausforderung hiess: ",(0,a.kt)("strong",{parentName:"p"},"Floodfill"),"\nZur Beginn wusste ich \xfcberhaupt nicht wie ich denn eigeintlich anfangen sollte.\\\nDoch am selben Tag war Herr Hofer, da er krank war. Das hiess nichts Gutes f\xfcr mich.\\\nIch musste gegen ein Ungeheuer von Level 100 besiegen, ich, der ein Schwert aus Holz hatte und es erst ans Level 3 geschafft hatte.\\\nFast ein Jahr (nein, in Wirklichkeit drei Tage) musste ich daran arbeiten, den teufelischen ",(0,a.kt)("strong",{parentName:"p"},"Floodfill")," zu implementieren.\\\nIch gab mehrmals auf bis ich das endlich verstand, ich verstand was Herr Hofer mit diesem miesen Monster wollte.\\\nDa konnte mir keiner aufhalten, bis ich das fiese Ding mit meiner Klinge den Kopf abschnied.\\\nAls ich damit fertig war, stieg ich auf Level 15, das war ganz sch\xf6n viel, 5 mal soviele Levels, ich konnte es kaum glauben."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("img",{alt:"monster.jpg",src:t(2662).Z,width:"700",height:"394"}))),(0,a.kt)("h3",{id:"tipps"},"Tipps"),(0,a.kt)("p",null,"Was mein Blogleser besser tun k\xf6nnte als ich, ist ",(0,a.kt)("strong",{parentName:"p"},"sich die Zeit")," nehmen alles korrekt zu ",(0,a.kt)("strong",{parentName:"p"},"verstehen")," und wenn das einem unverst\xe4ndlich ist, Beispiele  und/oder Definitionen irgendwo ",(0,a.kt)("strong",{parentName:"p"},"aufschreiben"),", wo er das wieder hervornehmen kann, falls Fragen auftauchen."),(0,a.kt)("h3",{id:"zusammenfassung"},"Zusammenfassung"),(0,a.kt)("p",null,"Man soll lieber Programmiersprachen ",(0,a.kt)("strong",{parentName:"p"},"ohne Bibliotheken")," lernen, vorallem wenn diese nicht im Gesch\xe4ftlichen genutzt wird, erstens. \\\nZweitens, ",(0,a.kt)("strong",{parentName:"p"},"Numtrip ist sehr lehrreich"),", doch ist aufw\xe4ndig.\\\nUnd als Letztes sich alles zu ",(0,a.kt)("strong",{parentName:"p"},"notieren"),", was f\xfcr einem neu gewesen ist, diese dann brauchen und Beispiele machen. \\\nVielen Dank, falls du bis dahin gelesen hast! \\\nW\xfcnsche dir viel Erfolg beim Programmieren!"),(0,a.kt)("p",null,"Hier ist noch den Link zum Spiel:\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/mcdelarosa/EF-Informatik/blob/main/numtrip/game.py"},"https://github.com/mcdelarosa/EF-Informatik/blob/main/numtrip/game.py")))}u.isMDXComponent=!0},375:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/Numtrip-Top-Down-Entwuf-5e492d5db4e24044018f10b011d2e88c.png"},6755:(e,n,t)=>{t.d(n,{Z:()=>r});const r="data:image/png;base64,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"},6099:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/gravitation-33348fb7498d062c391e7ba19fe640e8.png"},2662:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/monster-c53b894d611db59fa068d98a9db359e4.jpg"}}]);