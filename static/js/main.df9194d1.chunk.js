(this["webpackJsonplocal-storage-app"]=this["webpackJsonplocal-storage-app"]||[]).push([[0],{23:function(t,e,n){},26:function(t,e,n){},30:function(t,e,n){"use strict";n.r(e);var c=n(1),o=n.n(c),a=n(15),r=n.n(a),s=(n(23),n(13)),i=n.n(s),u=n(18),d=n(16),l=n(11),j=n(39),f=(n(25),n(26),n(32)),b=n(33),O=n(34),p=n(35),g=n(41),h=n(36),m=n(40),x=n(3),v=function(t){var e=t.addTodos,n=Object(c.useState)(""),o=Object(l.a)(n,2),a=o[0],r=o[1];return Object(x.jsx)(f.a,{onSubmit:function(t){if(t.preventDefault(),""===a)return alert("Please Enter todo Value");var n={todoString:a,id:Object(m.a)()};e(n),r("")},children:Object(x.jsx)(b.a,{children:Object(x.jsxs)(O.a,{children:[Object(x.jsx)(p.a,{type:"text",name:"todo",id:"todo",placeholder:"Enter a Todo String",value:a,onChange:function(t){return r(t.target.value)}}),Object(x.jsx)(g.a,{addonType:"prepend",children:Object(x.jsx)(h.a,{color:"success",children:"Add Todo"})})]})})})},S=n(37),C=n(38),T=n(17),k=function(t){var e=t.todos,n=t.markComplete;return Object(x.jsx)(S.a,{className:"mt-5 mb-2 items",children:e.map((function(t){return Object(x.jsxs)(C.a,{children:[t.todoString,Object(x.jsx)("span",{className:"float-right",onClick:function(){return n(t.id)},children:Object(x.jsx)(T.a,{})})]},t.id)}))})};var y=function(){var t=Object(c.useState)([]),e=Object(l.a)(t,2),n=e[0],o=e[1];Object(c.useEffect)((function(){var t=localStorage.getItem("todos");console.log({localStorage:localStorage}),t&&o(JSON.parse(t))}),[]);var a=function(){var t=Object(d.a)(i.a.mark((function t(e){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:o([].concat(Object(u.a)(n),[e]));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(c.useEffect)((function(){localStorage.setItem("todos",JSON.stringify(n))}),[n]),Object(x.jsxs)(j.a,{fluid:!0,children:[Object(x.jsx)(v,{addTodos:a}),Object(x.jsx)(k,{todos:n,markComplete:function(t){o(n.filter((function(e){return e.id!==t})))}})]})},E=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,42)).then((function(e){var n=e.getCLS,c=e.getFID,o=e.getFCP,a=e.getLCP,r=e.getTTFB;n(t),c(t),o(t),a(t),r(t)}))};r.a.render(Object(x.jsx)(o.a.StrictMode,{children:Object(x.jsx)(y,{})}),document.getElementById("root")),E()}},[[30,1,2]]]);
//# sourceMappingURL=main.df9194d1.chunk.js.map