(this.webpackJsonptestvin=this.webpackJsonptestvin||[]).push([[0],{142:function(e,t,n){},150:function(e,t,n){},151:function(e,t,n){"use strict";n.r(t);var a=n(51),s=n(59),c=n(7),r=n(119),i=n(11),l=n.n(i),u=n(20),j=n(17),o=n(0),b=n(164),h=n(165),d=n(123),p=(n(142),n(10));var v=function(){var e=Object(o.useState)([]),t=Object(j.a)(e,2),n=t[0],a=t[1],c=Object(o.useState)(" "),i=Object(j.a)(c,2),v=i[0],O=i[1],m=Object(d.a)(),x=m.register,f=m.handleSubmit,g=m.formState.errors,N=Object(o.useCallback)((function(){var e=function(){var e=Object(u.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://vpic.nhtsa.dot.gov/api/vehicles/decodevin/".concat(v,"?format=json"));case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,a(n.Results);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[v]);return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("div",{className:"headerLink",children:Object(p.jsxs)(s.b,{to:"/variables",className:"linkMain",children:[" ","All variables"," "]})}),Object(p.jsxs)(b.a,{className:"inputs",onChange:function(e){return O(e.target.value)},children:[Object(p.jsx)(b.a,{onChange:f((function(e){})),children:Object(p.jsx)("input",Object(r.a)({autoComplete:"off",className:"inputText",placeholder:"Vin",type:"text"},x("vin",{required:"required",minLength:{value:17},maxLength:{value:17}})))}),Object(p.jsx)(h.a,{className:"inputButton",type:"submit",onClick:N,children:"Submit"})]}),g.vin&&Object(p.jsx)("p",{className:"textError",children:"Write a code that is 17 characters long."}),Object(p.jsx)("div",{className:"itemsList",children:n.map((function(e,t){return e.Value?Object(p.jsxs)("ul",{children:[e.Variable,": ",e.Value]},e.VariableId):null}))})]})};n(150);var O=function(){var e=Object(o.useState)([]),t=Object(j.a)(e,2),n=t[0],a=t[1];return Object(o.useEffect)((function(){var e=function(){var e=Object(u.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://vpic.nhtsa.dot.gov/api/vehicles/getvehiclevariablelist?format=json",{headers:{"Content-type":"application/json"}});case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,a(n.Results);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("div",{className:"headerLink",children:Object(p.jsxs)(s.b,{to:"/",className:"linkMain",children:[" ","\u2190Back to Vin Code Checker"]})}),Object(p.jsx)("div",{className:"testStyle",children:n.map((function(e,t){return Object(p.jsxs)("ul",{className:"itemtest",children:[Object(p.jsxs)("div",{className:"test",children:[" ",e.Name,":"]}),Object(p.jsx)("div",{dangerouslySetInnerHTML:{__html:e.Description}})]},e.ID)}))})]})},m=document.getElementById("root");Object(a.render)(Object(p.jsx)(s.a,{children:Object(p.jsxs)(c.c,{children:[Object(p.jsx)(c.a,{path:"/",element:Object(p.jsx)(v,{})}),Object(p.jsx)(c.a,{path:"variables",element:Object(p.jsx)(O,{})})]})}),m)}},[[151,1,2]]]);
//# sourceMappingURL=main.06f356b3.chunk.js.map