(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var o=n(0),c=n.n(o),a=n(2),l=n.n(a),s=n(5),r=n(3),d=n(4),i=n(7),u=n(6),m=(n(13),["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"].map((function(e,t){return{id:t,name:e}}))),p=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(r.a)(this,n);for(var o=arguments.length,c=new Array(o),a=0;a<o;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).state={selectedGoods:[]},e.toggleGood=function(t){var n=t.name;e.setState((function(e){if(!e.selectedGoods.includes(n))return{selectedGoods:[].concat(Object(s.a)(e.selectedGoods),[n])};var t=e.selectedGoods.indexOf(n);return e.selectedGoods.splice(t,1),{selectedGoods:e.selectedGoods}}))},e.clearSelect=function(){e.setState({selectedGoods:[]})},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this,t=this.state.selectedGoods,n=t.length>0?1:0;return c.a.createElement("div",{className:"goods__selector"},c.a.createElement("h1",{className:"goods__select"},n?"Selected good: - ".concat(t.join(", ")):"Selected good: - none"),n&&c.a.createElement("button",{className:"button__clear",type:"button",onClick:this.clearSelect},"Clear"),c.a.createElement("div",null,c.a.createElement("ul",null,m.map((function(n){return c.a.createElement("li",{key:n.id,className:t.includes(n.name)?"selected":"selected_not_yet"},n.name,c.a.createElement("button",{type:"button",onClick:function(){return e.toggleGood(n)}},"add / remove"))})))))}}]),n}(c.a.Component);l.a.render(c.a.createElement(p,null),document.getElementById("root"))},8:function(e,t,n){e.exports=n(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.d467fa0a.chunk.js.map