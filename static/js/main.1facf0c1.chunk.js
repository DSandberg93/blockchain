(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,function(e,a,t){},,function(e,a,t){e.exports=t(18)},,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),s=t(8),l=t.n(s),o=(t(15),t(1)),r=t(2),i=t(4),m=t(3),h=t(5),u=(t(7),function(e){var a=e.blockName;e.previousHash,e.mine,e.dataInputChange;return c.a.createElement("div",{className:"card card-nav-tabs",style:{marginTop:50,pading:"auto 15"}},c.a.createElement("div",{className:"card-header card-header-success header-style"},a),c.a.createElement("div",{className:"card-body"},c.a.createElement("div",null,c.a.createElement("div",{className:"input-group",style:{marginBottom:10}},c.a.createElement("span",{className:"input-group-addon",style:{paddingRight:5,paddingTop:5}},c.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},c.a.createElement("path",{fill:"none",d:"M0 0h24v24H0V0z"}),c.a.createElement("path",{d:"M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-3 12H7c-.55 0-1-.45-1-1s.45-1 1-1h10c.55 0 1 .45 1 1s-.45 1-1 1zm0-3H7c-.55 0-1-.45-1-1s.45-1 1-1h10c.55 0 1 .45 1 1s-.45 1-1 1zm0-3H7c-.55 0-1-.45-1-1s.45-1 1-1h10c.55 0 1 .45 1 1s-.45 1-1 1z"}))),c.a.createElement("p",{className:"form-control content-style"},"Data")),c.a.createElement("div",{className:"row row-style"},c.a.createElement("span",{className:"label-style"},"Previous hash:"),c.a.createElement("p",{className:"content-style"},"Some hash")),c.a.createElement("div",{className:"row row-style"},c.a.createElement("span",{className:"label-style"},"Time:"),c.a.createElement("p",{className:"content-style"},"Some time")),c.a.createElement("div",{className:"row row-style"},c.a.createElement("span",{className:"label-style"},"Nonce:"),c.a.createElement("p",{className:"content-style"},"Some nonce")),c.a.createElement("div",{className:"row row-style"},c.a.createElement("span",{className:"label-style"},"Hash:"),c.a.createElement("p",{className:"content-style"},"Some hash")))))}),d=function(e){function a(){var e;return Object(o.a)(this,a),(e=Object(i.a)(this,Object(m.a)(a).call(this))).onMine=function(e){console.log(e)},e.onDataInputChange=function(a){var t=e.state.currentBlock;t.data=a.target.value,e.setState({cBlock:t}),console.log(e.state.currentBlock.data)},e.state={blockChain:[],currentBlock:{blockName:"",data:"",previousHash:"",time:"",nonce:0,hash:""}},e}return Object(h.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"container",style:{width:800}},c.a.createElement(u,{perviousHash:"Some hash",blockName:"Genesis block",mine:this.onMine,dataInputChange:this.onDataInputChange}))}}]),a}(n.Component),p=(t(16),{boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2)"}),v=function(e){function a(){return Object(o.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(h.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"App"},c.a.createElement("nav",{className:"nav justify-content-center bg-white",style:p},c.a.createElement("h1",null,"Blockchain")),c.a.createElement(d,null))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(17);l.a.render(c.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[9,1,2]]]);
//# sourceMappingURL=main.1facf0c1.chunk.js.map