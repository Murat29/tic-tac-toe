(this["webpackJsonptic-tac-toe"]=this["webpackJsonptic-tac-toe"]||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,i){},function(e,t,i){},function(e,t,i){},,function(e,t,i){},function(e,t,i){},function(e,t,i){"use strict";i.r(t);var n=i(1),l=i.n(n),s=i(7),a=i.n(s),c=(i(14),i(4)),o=i(2),r=(i(15),i(16),i(0));var u=function(e){var t=e.title,i=e.onClick;return Object(r.jsx)("button",{onClick:i,className:"button",children:t})};i(18);var f=function(e){var t=e.onClick;return Object(r.jsx)("button",{onClick:t,className:"button-reset",children:"\u041d\u0430\u0447\u0430\u0442\u044c \u0437\u0430\u043d\u043e\u0432\u043e"})},d=i(8),h=i(9),v=new(function(){function e(){Object(d.a)(this,e),this.numberMoves=0,this.walkValue="o",this.field=[[null,null,null],[null,null,null],[null,null,null]],this.victoriousPositions=[[[0,0],[0,1],[0,2]],[[1,0],[1,1],[1,2]],[[2,0],[2,1],[2,2]],[[0,0],[1,0],[2,0]],[[0,1],[1,1],[2,1]],[[0,2],[1,2],[2,2]],[[0,0],[1,1],[2,2]],[[2,0],[1,1],[0,2]]]}return Object(h.a)(e,[{key:"getField",value:function(){return this.field}},{key:"setisPlayCrosses",value:function(e){this.walkValue=e?"x":"o"}},{key:"resetField",value:function(){this.numberMoves=0,this.field=[[null,null,null],[null,null,null],[null,null,null]]}},{key:"checkWinAndDraw",value:function(){this.numberMoves++;for(var e=0;e<3;e++){if(this.field[e][0]&&this.field[e][0]===this.field[e][1]&&this.field[e][0]===this.field[e][2])return this.field[e][0];if(this.field[0][e]&&this.field[0][e]===this.field[1][e]&&this.field[0][e]===this.field[2][e])return this.field[0][e]}return this.field[0][0]&&this.field[0][0]===this.field[1][1]&&this.field[0][0]===this.field[2][2]?this.field[0][0]:this.field[2][0]&&this.field[2][0]===this.field[1][1]&&this.field[2][0]===this.field[0][2]?this.field[2][0]:(console.log(this.numberMoves),this.numberMoves>=9?"draw":null)}},{key:"manMakeMove",value:function(e,t){this.field[e][t]="x"===this.walkValue?"o":"x"}},{key:"makeMove",value:function(){for(var e=[],t=0;t<this.victoriousPositions.length;t++){for(var i=0,n=0,l=0;l<3;l++){var s=Object(o.a)(this.victoriousPositions[t][l],2),a=s[0],c=s[1];this.field[a][c]&&(this.field[a][c]===this.walkValue?i++:n++)}if(2===i)for(var r=0;r<3;r++){var u=Object(o.a)(this.victoriousPositions[t][r],2),f=u[0],d=u[1];if(!this.field[f][d])return void(this.field[f][d]=this.walkValue)}2===n&&e.push(t)}for(var h=0;h<e.length;h++)for(var v=0;v<3;v++){var b=Object(o.a)(this.victoriousPositions[e[h]][v],2),j=b[0],p=b[1];if(!this.field[j][p])return void(this.field[j][p]=this.walkValue)}for(var m=this.getRandomNumber(0,2);;m++)for(var O=this.getRandomNumber(0,2);O<3;O++)if(!this.field[m%3][O])return void(this.field[m%3][O]=this.walkValue)}},{key:"getRandomNumber",value:function(e,t){return Math.floor(e+Math.random()*(t+1-e))}}]),e}());i(19);var b=function(e){var t=e.isOpen,i=e.title,n=e.reset;return Object(r.jsx)("div",{className:"popup ".concat(t?"popup_is-opened":""),children:Object(r.jsxs)("div",{className:"popup__container",children:[Object(r.jsx)("h2",{className:"popup__title",children:i}),Object(r.jsx)(f,{onClick:n})]})})},j={draw:"\u041d\u0438\u0447\u044c\u044f!",x:"\u041f\u043e\u0431\u0435\u0434\u0438\u043b\u0438 \u043a\u0440\u0435\u0441\u0442\u0438\u043a\u0438!",o:"\u041f\u043e\u0431\u0435\u0434\u0438\u043b\u0438 \u043d\u043e\u043b\u0438\u043a\u0438!"};var p=function(){var e=l.a.useState(!1),t=Object(o.a)(e,2),i=t[0],n=t[1],s=l.a.useState(!1),a=Object(o.a)(s,2),d=a[0],h=a[1],p=l.a.useState(""),m=Object(o.a)(p,2),O=m[0],k=m[1],_=l.a.useState(v.getField()),x=Object(o.a)(_,2),g=x[0],C=x[1];function M(){n(!1),v.resetField(),C(Object(c.a)(v.getField())),h(!1),k("")}function w(e){var t=!1;e&&(t=v.checkWinAndDraw());var i=Boolean(t);return console.log(t),k(j[t]),h(i),i}return l.a.useEffect((function(){}),[g]),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("div",{className:"app",children:[Object(r.jsxs)("fieldset",{disabled:i,className:"app__buttons-container",children:[Object(r.jsx)(u,{onClick:function(){v.setisPlayCrosses(!1),n(!0)},title:"\u0418\u0433\u0440\u0430\u0442\u044c \u0437\u0430 \u043a\u0440\u0435\u0441\u0442\u0438\u043a\u0438"}),Object(r.jsx)(u,{onClick:function(){v.setisPlayCrosses(!0),n(!0),v.makeMove(),C(Object(c.a)(g)),w(!0)},title:"\u0418\u0433\u0440\u0430\u0442\u044c \u0437\u0430 \u043d\u043e\u043b\u0438\u043a\u0438"})]}),Object(r.jsx)("div",{className:"app__field",children:g.map((function(e,t){return Object(r.jsx)("div",{className:"app__line",children:e.map((function(e,n){return Object(r.jsx)("div",{onClick:function(){return function(e,t,n){var l=i&&!e;l&&v.manMakeMove(t,n),C(Object(c.a)(v.getField()));var s=w(l);l&&!s&&v.makeMove(),C(Object(c.a)(v.getField())),w(l)}(e,t,n)},className:"app__cell \n                  ".concat(!i&&"app__cell_disabled"," \n                  ").concat(0===t&&"app__cell_top"," \n                  ").concat(2===t&&"app__cell_bottom"," \n                  ").concat(0===n&&"app__cell_left"," \n                  ").concat(2===n&&"app__cell_right","\n                "),children:e},n)}))},t)}))}),Object(r.jsx)(f,{onClick:M})]}),Object(r.jsx)(b,{isOpen:d,title:O,reset:M})]})},m=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,21)).then((function(t){var i=t.getCLS,n=t.getFID,l=t.getFCP,s=t.getLCP,a=t.getTTFB;i(e),n(e),l(e),s(e),a(e)}))};a.a.render(Object(r.jsx)(l.a.StrictMode,{children:Object(r.jsx)(p,{})}),document.getElementById("root")),m()}],[[20,1,2]]]);
//# sourceMappingURL=main.3e796922.chunk.js.map