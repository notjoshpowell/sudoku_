(this.webpackJsonpsudoku_=this.webpackJsonpsudoku_||[]).push([[0],{16:function(e,t,n){},17:function(e,t,n){},18:function(e,t,n){},20:function(e,t,n){},26:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),i=n(9),u=n.n(i),o=(n(16),n(17),n(6)),d=n(2),l=(n(10),n(11),n(18),n(0));function a(e){var t="grid-cell",n="grid-cell-hint",c="grid-cell tborder",i="grid-cell-hint tborder",u="grid-cell bborder",o="grid-cell-hint bborder",a="grid-cell lborder",s="grid-cell-hint lborder",b="grid-cell tborder lborder",j="grid-cell-hint tborder lborder",f="grid-cell bborder lborder",O=e.guesses,h=(e.solved,Object(r.useState)([0])),m=Object(d.a)(h,2),v=m[0],g=m[1];Object(r.useEffect)((function(){g([]),g(O)}),[O]);var x=Object(r.useState)(new Array(81)),p=Object(d.a)(x,2),S=(p[0],p[1],function(e,t,n,r){return null===e?Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("input",{id:"input-".concat(t),onKeyDown:function(e){return"e"===e.key&&e.preventDefault()},type:"number",min:"0",max:"9",class:n})}):Object(l.jsx)("h3",{class:r,readonly:!0,children:e},t)});return Object(l.jsx)("div",{id:"sudoku-grid",children:v.map((function(e,r){return 0===r||27===r||54===r?S(e,r,b,j):72===r?S(e,r,f,f):r%9===0?S(e,r,a,s):r<9&&r>-1||r<36&&r>26||r<63&&r>53?S(e,r,c,i):r<90&&r>71?S(e,r,u,o):S(e,r,t,n)}))})}var s=n(5);n(20);function b(){var e=Object(r.useState)({matrix:[],solved:[]}),t=Object(d.a)(e,2),n=t[0],c=t[1],i=function(e){for(var t=new Set;t.size<e;)t.add(Math.floor(8*Math.random())+1);return t},u=function(e){return function(e,t){for(var n=0;n<e.length;n++)t[Math.floor(n/9)].has(e[n])||(e[n]=null);return e}(e,function(e){for(var t=[],n=0;n<9;n++){var r=i(e);t.push(r)}return t}("diamond"===T.diff?2:"bruisin'"===T.diff?3:"moderate"===T.diff?4:5))},b=function(){var e=Object(s.solvepuzzle)(Object(s.makepuzzle)()),t=u(e);c({matrix:t,solved:Object(s.solvepuzzle)(Object(s.makepuzzle)())}),h(0)},j=Object(r.useState)(0),f=Object(d.a)(j,2),O=f[0],h=f[1],m=Object(r.useState)(!1),v=Object(d.a)(m,2),g=(v[0],v[1],Object(r.useState)(!1)),x=Object(d.a)(g,2),p=x[0],S=x[1],k=Object(r.useState)("Show Timer"),w=Object(d.a)(k,2),y=w[0],z=w[1];Object(r.useEffect)((function(){b()}),[]);var C=Object(r.useState)({diff:"easy",patt:"random"}),F=Object(d.a)(C,2),T=F[0],D=F[1];return Object(l.jsxs)("div",{children:[Object(l.jsx)("h2",{children:"Not Sudoku"}),Object(l.jsx)(a,{class:"shrink",guesses:n.matrix,solved:n.solved}),Object(l.jsx)("h2",{children:" "}),Object(l.jsxs)("menu",{id:"menu-below-board",children:[Object(l.jsx)("button",{onClick:b,children:" New Game"}),Object(l.jsx)("button",{onClick:function(){return e=p,S((function(e){return!e})),void z(e?"Show Timer":"Hide Timer");var e},children:y}),p?Object(l.jsx)("h3",{children:O}):null]}),Object(l.jsx)("h2",{children:" "}),Object(l.jsx)("label",{for:"difficult_btn",children:"Difficulty:"}),Object(l.jsx)("select",{name:"diff",id:"difficult_btn",onChange:function(e){return function(e){var t=e.target,n=t.value,r=t.name;D(T,T[r]=n)}(e)},children:["easy","moderate","difficult'","diamond"].map((function(e,t){var n;return Object(l.jsx)("option",(n={name:"diff"},Object(o.a)(n,"name",t),Object(o.a)(n,"value",e),Object(o.a)(n,"children",e),n),t)}))})]})}var j=function(){return Object(l.jsx)("div",{className:"sudoku",children:Object(l.jsx)(b,{})})},f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,27)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,i=t.getLCP,u=t.getTTFB;n(e),r(e),c(e),i(e),u(e)}))};u.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(j,{})}),document.getElementById("groot")),f()}},[[26,1,2]]]);
//# sourceMappingURL=main.2aa67449.chunk.js.map