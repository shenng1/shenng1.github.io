(this.webpackJsonpbi_reactjs=this.webpackJsonpbi_reactjs||[]).push([[0],{105:function(e,t,c){},108:function(e,t,c){},109:function(e,t,c){},110:function(e,t,c){},111:function(e,t,c){},112:function(e,t,c){"use strict";c.r(t);var n,s=c(1),a=c(0),o=c.n(a),i=c(45),r=c.n(i),l=c(8),j=c(14),b=c(3),d=c(16),u=c(46),h=function(e,t){console.log("showNotification",e,t);try{Android.showToast(e,t)}catch(c){console.log("Android functions not found"),console.log({e:c})}},O=c(47),x=c.n(O),m=c(48),f=c.n(m),g=c.p+"static/media/Bored.508cb39e.svg";c(105);var p=function(){var e=localStorage.getItem("adresses"),t=Object(b.g)();e&&t.push("/");var c=o.a.useState(!1),n=Object(l.a)(c,2),i=n[0],r=n[1],j=o.a.useState(!1),d=Object(l.a)(j,2),u=d[0],h=d[1],O=o.a.useState(""),m=Object(l.a)(O,2),p=m[0],v=m[1],y=o.a.useState(""),N=Object(l.a)(y,2),S=N[0],A=N[1],C=o.a.useState([]),I=Object(l.a)(C,2),w=I[0],k=I[1],F=(Object(b.h)(),Object(a.useCallback)(x()((function(e){var t="hitsPerPage="+"10"+"&language="+"ru"+"&query="+e.target.value+"&type="+"address"+"&countries="+"ua",c=JSON.stringify({params:t});fetch("https://places-dsn.algolia.net/1/places/query",{body:c,method:"POST",headers:{"Content-Type":"application/json; charset=utf-8","X-Algolia-Application-Id":"pl5TUITFNEHW","X-Algolia-API-Key":"02a1caebac8f9f92dc638f89242e443f"}}).then((function(e){return e.json()})).then((function(e){console.log(e);var t=e.hits.filter((function(e){if(e.is_highway&&(!e.city||["\u041e\u0434\u0435\u0441\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c","\u041e\u0434\u0435\u0441\u0441\u0430"].includes(e.city[0])))return 1}));r(!1),console.log(t),k(t)}))}),400),[]));return Object(s.jsxs)("main",{className:"container Auth",children:[Object(s.jsx)("img",{src:g,alt:""}),Object(s.jsx)("span",{children:"\u0414\u043e\u0431\u0430\u0432\u0442\u0435 \u0432\u0430\u0448 \u0430\u0434\u0440\u0435\u0441\u0441"}),Object(s.jsx)("span",{className:"town",children:"\u0433. \u041e\u0434\u0435\u0441\u0441\u0430"}),Object(s.jsxs)("div",{className:"input_contaimer",children:[Object(s.jsx)("input",{type:"text",value:p,onChange:function(e){v(e.target.value),r(!0),h(!1),A(""),F(e)}}),S&&Object(s.jsx)("div",{className:"message",children:S})]}),p&&!u&&Object(s.jsx)("div",{className:"auto_complite",children:Object(s.jsxs)("div",{className:"list"+(i?" mid":""),children:[i&&Object(s.jsx)(f.a,{type:"Puff",color:"#00BFFF",height:50}),0===w.length&&!i&&Object(s.jsx)("div",{children:"\u043d\u0435\u0442 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u043e\u0432"}),!i&&w.map((function(e,t){return Object(s.jsx)("div",{onClick:function(){return t=e.locale_names,v(t),void h(!0);var t},role:"button",tabIndex:1+t,children:e.locale_names+", \u0433.\u041e\u0434\u0435\u0441\u0441\u0430"},t)}))]})}),Object(s.jsx)("span",{children:"\u0438 \u043f\u043e\u043b\u0443\u0447\u0430\u0439\u0442\u0435 \u0443\u0432\u0435\u0434\u043e\u043c\u043b\u0435\u043d\u0438\u044f \u043e \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u043e\u0441\u0442\u0438 \u043a\u043e\u043c\u0443\u043d\u0430\u043b\u044c\u043d\u044b\u0445 \u0443\u0441\u043b\u0443\u0433 \u0437\u0430\u0431\u043b\u0430\u0433\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e"}),Object(s.jsx)("button",{type:"button",onClick:function(){if(!u)return A("\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0430\u0434\u0440\u0435\u0441\u0441 \u0438\u0437 \u043f\u043e\u0434\u0441\u043a\u0430\u0437\u043a\u0438");localStorage.setItem("adresses",JSON.stringify(p)),r(!0),null===t||void 0===t||t.push("/")},className:u?"":"disabled",children:"\u0414\u0430\u043b\u0435\u0435 "})]})},v=c.p+"static/media/dinDon.03d36c1f.svg";c(108);var y=function(){var e=function(){var e="";try{e=JSON.parse(localStorage.getItem("adresses")||"")}catch(t){console.log("getStorageAdresses() error")}return e}(),t=Object(b.g)();e||t.push("/auth");var c="\u041e\u0434\u0435\u0441\u0430",n="\u0414\u0435\u0432\u043e\u043b\u0430\u043d\u0456\u0432\u0441\u044c\u043a\u0438\u0439 \u0443\u0437\u0432\u0456\u0437",a="1, 12, ",o="13/02/2021  06:16:00",i="13/02/2021  23:00:00";return Object(s.jsxs)("main",{className:"container Home",children:[Object(s.jsxs)("div",{className:"title",children:["\u0433. ",c,", ",n," ",a]}),Object(s.jsxs)("div",{className:"content",children:[Object(s.jsxs)("div",{className:"trouble alarm",children:[Object(s.jsx)("img",{src:v,alt:"pic"}),Object(s.jsxs)("div",{className:"info",children:["\u0410\u0430\u0432\u0430\u0440\u0438\u044f ",Object(s.jsx)("br",{}),"c ",o," ",Object(s.jsx)("br",{}),"\u043f\u043e ",i]})]}),Object(s.jsxs)("div",{className:"trouble",children:[Object(s.jsx)("img",{src:v,alt:"pic"}),Object(s.jsxs)("div",{className:"info",children:["\u041f\u0435\u0440\u0435\u0431\u043e\u0438 \u0441 \u0432\u043e\u0434\u043e\u0439",Object(s.jsx)("br",{}),"(\u0432 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0435)"]})]}),Object(s.jsxs)("div",{className:"trouble",children:[Object(s.jsx)("img",{src:v,alt:"pic"}),Object(s.jsxs)("div",{className:"info",children:["\u041f\u0435\u0440\u0435\u0431\u043e\u0438 \u0441 \u0438\u043d\u0442\u0435\u0440\u0435\u043d\u0435\u0442\u043e\u043c",Object(s.jsx)("br",{}),"(\u0432 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0435)"]})]}),Object(s.jsxs)("div",{children:[Object(s.jsx)("button",{type:"button",onClick:function(){localStorage.removeItem("adresses"),t.push("/auth")},children:Object(s.jsx)("span",{style:{color:"#000"},children:"clear"})}),Object(s.jsx)(j.b,{to:"/test",children:Object(s.jsx)("button",{type:"button",children:" to test "})})]})]})]})};c(109);var N=function(e){return Object(s.jsxs)("main",{className:"container Search",children:[Object(s.jsx)("h2",{children:"\u0432\u0441\u0435 \u0434\u0430\u043d\u043d\u044b\u0435:"}),e.allData.map((function(e){return Object(s.jsxs)("span",{children:[e.street," c ",e.start," no ",e.end]})}))]})},S=c.p+"static/media/dinDon.03d36c1f.svg",A=c.p+"static/media/renew.f1e204ff.svg",C=c.p+"static/media/options.f3713510.svg",I=c.p+"static/media/archive.e4003703.svg",w=c.p+"static/media/lupe.d9afe77b.svg";c(110);var k=function(){var e,t=Object(b.g)();return"/auth"===(null===t||void 0===t||null===(e=t.location)||void 0===e?void 0:e.pathname)?null:Object(s.jsxs)("div",{className:"menu_down",children:[Object(s.jsx)("button",{type:"button",className:"",children:Object(s.jsx)("img",{src:C,alt:""})}),Object(s.jsx)(j.b,{to:"/search",children:Object(s.jsx)("img",{src:w,alt:""})}),Object(s.jsx)(j.b,{to:"/",className:"refresh",children:Object(s.jsx)("div",{className:"overlay",children:Object(s.jsx)("img",{src:A,alt:""})})}),Object(s.jsx)("button",{type:"button",className:"",children:Object(s.jsx)("img",{src:S,alt:""})}),Object(s.jsx)("button",{type:"button",className:"",children:Object(s.jsx)("img",{src:I,alt:""})})]})},F=(c(111),function(){var e=Object(a.useState)("empty"),t=Object(l.a)(e,2),c=t[0],n=t[1];return Object(s.jsxs)("main",{children:[Object(s.jsx)("button",{type:"button",onClick:function(){try{Android.showToast("\u041e\u0442\u043a\u043b\u044e\u0447\u0430\u044e\u0442 \u0441\u0432\u0435\u0442!!!","\u0410\u0434\u0440\u0435\u0441 \u0421\u0430\u043c\u0430\u0440\u0441\u043a\u0430\u044f 28")}catch(e){console.log("Android functions not found"),console.log({e:e}),n(e.stack)}},children:" send push "}),Object(s.jsx)("hr",{}),"err:",c,Object(s.jsx)("hr",{}),Object(s.jsx)(j.b,{to:"/",children:Object(s.jsx)("button",{type:"button",children:" to home "})})]})});var T=function(){var e=localStorage.getItem("adresses"),t=Object(a.useState)([]),c=Object(l.a)(t,2),o=c[0],i=c[1];return Object(a.useEffect)((function(){!function(e){console.log("WS: init socket");var t=d.b.loading("Connecting..."),c=localStorage.getItem("adresses")||"[]",a="";try{var o=JSON.parse(c);a=Object(l.a)(o,1)[0]}catch(i){console.log("invalid storage data")}(n=Object(u.io)("ws://localhost:8888",{auth:{address:a}})).onAny((function(e){for(var t=arguments.length,c=new Array(t>1?t-1:0),n=1;n<t;n++)c[n-1]=arguments[n];console.log(e,c)})),n.on("connect",(function(){console.log("WS: connected"),d.b.dismiss(t),d.b.success("Connected"),setTimeout((function(){return n.emit("allData")}),500)})),n.on("notify",(function(e){Object(d.b)(Object(s.jsxs)("span",{children:[e.t," ",Object(s.jsx)("br",{})," ",e.m]})),h(e.t,e.m)})),n.on("allData",(function(t){console.log(t),e(null===t||void 0===t?void 0:t.allData)}))}(i)}),[]),Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)(j.a,{basename:"/komunation",children:[Object(s.jsxs)(b.d,{children:[Object(s.jsx)(b.b,{path:"/auth",children:e?Object(s.jsx)(b.a,{to:"/"}):Object(s.jsx)(p,{})}),Object(s.jsx)(b.b,{exact:!0,path:"/",render:function(){return Object(s.jsx)(y,{})}}),Object(s.jsx)(b.b,{exact:!0,path:"/test",render:function(){return Object(s.jsx)(F,{})}}),Object(s.jsx)(b.b,{exact:!0,path:"/search",render:function(){return Object(s.jsx)(N,{allData:o})}})]}),Object(s.jsx)(k,{})]}),Object(s.jsx)(d.a,{})]})},D=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,113)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,o=t.getTTFB;c(e),n(e),s(e),a(e),o(e)}))};r.a.render(Object(s.jsx)(o.a.StrictMode,{children:Object(s.jsx)(T,{})}),document.getElementById("root")),D()}},[[112,1,2]]]);
//# sourceMappingURL=main.75eb44cc.chunk.js.map