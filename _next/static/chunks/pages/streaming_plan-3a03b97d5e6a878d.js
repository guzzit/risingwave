(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[47],{4248:function(t,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/streaming_plan",function(){return n(1245)}])},1245:function(t,r,n){"use strict";n.r(r),n.d(r,{default:function(){return L}});var e=n(7568),a=n(4051),o=n.n(a),i=n(5893),l=n(6479),c=n(639),u=n(3234),s=n(979),d=n(7026),f=n(7741),h=n(5783),v=n(7098),p=n(6486),x=n(9008),g=n.n(x),m=n(1163),y=n(7294),w=n(3812);function j(t){var r=t.mvDependency,n=t.svgWidth,e=t.selectedId,a=t.onSelectedIdChange,o=(0,y.useRef)(),l=(0,y.useState)("0px"),c=l[0],u=l[1],s=(0,y.useCallback)((function(){var t=(0,v.zx)().nodeSize([10,34,5]),n=(0,p.cloneDeep)(r),e=t(n);return{width:e.width,height:e.height,dag:n}}),[r]),d=s();return(0,y.useEffect)((function(){d.width;var t=d.height,r=d.dag,i=o.current,l=h.Ys(i),c=h.ak_,s=h.jvg().curve(c).x((function(t){return t.x+10})).y((function(t){return t.y})),f=function(t){return t.data.id===e},v=l.select(".edges").selectAll(".edge").data(r.links()),p=function(t){return t.attr("d",(function(t){var r=t.points;return s(r)})).attr("fill","none").attr("stroke-width",(function(t){return f(t.source)||f(t.target)?2:1})).attr("stroke",(function(t){return f(t.source)||f(t.target)?w.rS.colors.teal[500]:w.rS.colors.gray[300]}))};v.exit().remove(),v.enter().call((function(t){return t.append("path").attr("class","edge").call(p)})),v.call(p);var x=l.select(".nodes").selectAll(".node").data(r.descendants()),g=function(t){return t.attr("transform",(function(t){var r=t.x,n=t.y;return"translate(".concat(r+10,", ").concat(n,")")})).attr("fill",(function(t){return f(t)?w.rS.colors.teal[500]:w.rS.colors.gray[500]}))};x.exit().remove(),x.enter().call((function(t){return t.append("circle").attr("class","node").attr("r",5).call(g)})),x.call(g);var m=l.select(".labels").selectAll(".label").data(r.descendants()),y=function(t){return t.text((function(t){return t.data.name})).attr("x",n-10).attr("font-family","inherit").attr("text-anchor","end").attr("alignment-baseline","middle").attr("y",(function(t){return t.y})).attr("fill",(function(t){return f(t)?w.rS.colors.black[500]:w.rS.colors.gray[500]})).attr("font-weight","600")};m.exit().remove(),m.enter().call((function(t){return t.append("text").attr("class","label").call(y)})),m.call(y);var j=l.select(".overlays").selectAll(".overlay").data(r.descendants()),I=function(t){return t.attr("x",3).attr("height",24).attr("width",n-6).attr("y",(function(t){return t.y-5-12+2+3})).attr("rx",5).attr("fill",w.rS.colors.gray[500]).attr("opacity",0).style("cursor","pointer")};j.exit().remove(),j.enter().call((function(t){return t.append("rect").attr("class","overlay").call(I).on("mouseover",(function(t,r){h.Ys(this).transition().duration(parseInt(w.rS.transition.duration.normal)).attr("opacity",".10")})).on("mouseout",(function(t,r){h.Ys(this).transition().duration(parseInt(w.rS.transition.duration.normal)).attr("opacity","0")})).on("mousedown",(function(t,r){h.Ys(this).transition().duration(parseInt(w.rS.transition.duration.normal)).attr("opacity",".20")})).on("mouseup",(function(t,r){h.Ys(this).transition().duration(parseInt(w.rS.transition.duration.normal)).attr("opacity",".10")})).on("click",(function(t,r){a&&a(r.data.id)}))})),j.call(I),u("".concat(t,"px"))}),[r,e,n,a,d]),(0,i.jsxs)("svg",{ref:o,width:"".concat(n,"px"),height:c,children:[(0,i.jsx)("g",{className:"edges"}),(0,i.jsx)("g",{className:"nodes"}),(0,i.jsx)("g",{className:"labels"}),(0,i.jsx)("g",{className:"overlays"})]})}var I=n(1799),b=n(9534),k=n(603),S=n(9653),C=n(471),D=n(3679),_=n(4293),A=(0,D.ZP)((function(){return n.e(171).then(n.t.bind(n,5171,23))}));function N(t,r){var n=r.dx,e=r.dy,a=h.G_s().nodeSize([e,n])(t);return a.each((function(t){var r;return r=[t.y,t.x],t.x=r[0],t.y=r[1],r})),a.each((function(t){return t.x=-t.x})),a}function z(t,r){var n=r.margin,e=n.top,a=n.bottom,o=n.left,i=n.right,l=1/0,c=-l,u=1/0,s=-u;return t.each((function(t){return c=t.x>c?t.x:c})),t.each((function(t){return l=t.x<l?t.x:l})),t.each((function(t){return s=t.y>s?t.y:s})),t.each((function(t){return u=t.y<u?t.y:u})),l-=o,c+=i,u-=e,s+=a,t.each((function(t){return t.x=t.x-l})),t.each((function(t){return t.y=t.y-u})),{width:c-l,height:s-u}}var E=12,F=E,q=E;function Y(t){var r,n=t.planNodeDependencies,e=t.fragmentDependency,a=t.selectedFragmentId,o=(0,y.useRef)(),l=(0,S.qY)(),c=l.isOpen,u=l.onOpen,s=l.onClose,d=(0,y.useState)(),v=d[0],x=d[1],g=(0,y.useCallback)((function(){return function(t){var r=(0,p.cloneDeep)(t.data.node);r&&(r.input=[],x(r),u())}}),[u])(),m=(0,y.useCallback)((function(){var t=(0,p.cloneDeep)(n),r=(0,p.cloneDeep)(e),a=new Map,o=!0,i=!1,l=void 0;try{for(var c,u=t[Symbol.iterator]();!(o=(c=u.next()).done);o=!0){var s=(0,k.Z)(c.value,2),d=s[0],f=s[1],h=N(f,{dx:72,dy:48}),v=z(h,{margin:{left:60,right:60,top:48,bottom:60}}),x=v.width,g=v.height;a.set(d,{layoutRoot:h,width:x,height:g,extraInfo:f.data.extraInfo})}}catch(O){i=!0,l=O}finally{try{o||null==u.return||u.return()}finally{if(i)throw l}}var m=(0,_.bK)(r.map((function(t){t.width,t.height;var r=t.id,n=(0,b.Z)(t,["width","height","id"]),e=a.get(r),o=e.width,i=e.height;return(0,I.Z)({width:o,height:i,id:r},n)})),60,60),y=new Map;m.forEach((function(t){var r=t.id,n=t.x,e=t.y;y.set(r,{x:n,y:e})}));var w=[],j=!0,S=!1,C=void 0;try{for(var D,A=a[Symbol.iterator]();!(j=(D=A.next()).done);j=!0){var E=(0,k.Z)(D.value,2),F=E[0],q=E[1],Y=y.get(F),Z=Y.x,R=Y.y;w.push((0,I.Z)({id:F,x:Z,y:R},q))}}catch(O){S=!0,C=O}finally{try{j||null==A.return||A.return()}finally{if(S)throw C}}var W=0,M=0;w.forEach((function(t){var r=t.x,n=t.y,e=t.width,a=t.height;M=Math.max(M,n+a+50),W=Math.max(W,r+e)}));var L=(0,_.o)(m);return{layoutResult:w,fragmentLayout:m,svgWidth:W,svgHeight:M,links:L}}),[n,e]),j=m(),D=j.svgWidth,Y=j.svgHeight,Z=j.links,R=(j.fragmentLayout,j.layoutResult);return(0,y.useEffect)((function(){if(R){var t=o.current,r=h.Ys(t),n=h.h5h().x((function(t){return t.x})).y((function(t){return t.y})),e=function(t){return t===a},i=function(t){t.attr("transform",(function(t){var r=t.x,n=t.y;return"translate(".concat(r,", ").concat(n,")")}));var r=t.select(".actor-text-frag-id");r.empty()&&(r=t.append("text").attr("class","actor-text-frag-id")),r.attr("fill","black").text((function(t){var r=t.id;return"Fragment #".concat(r)})).attr("font-family","inherit").attr("text-anchor","end").attr("dy",(function(t){return t.height-q+12})).attr("dx",(function(t){return t.width-F})).attr("fill","black").attr("font-size",12);var a=t.select(".actor-text-actor-id");a.empty()&&(a=t.append("text").attr("class","actor-text-actor-id")),a.attr("fill","black").text((function(t){return t.extraInfo})).attr("font-family","inherit").attr("text-anchor","end").attr("dy",(function(t){return t.height-q+24})).attr("dx",(function(t){return t.width-F})).attr("fill","black").attr("font-size",12);var o=t.select(".bounding-box");o.empty()&&(o=t.append("rect").attr("class","bounding-box")),o.attr("width",(function(t){return t.width-24})).attr("height",(function(t){return t.height-24})).attr("x",F).attr("y",q).attr("fill","white").attr("stroke-width",(function(t){var r=t.id;return e(r)?3:1})).attr("rx",5).attr("stroke",(function(t){var r=t.id;return e(r)?w.rS.colors.teal[500]:w.rS.colors.gray[500]}));var i=t.select(".links");i.empty()&&(i=t.append("g").attr("class","links"));var l=function(t){return t.attr("d",n)},c=i.selectAll("path").data((function(t){return t.layoutRoot.links()}));c.enter().call((function(t){return t.append("path").attr("fill","none").attr("stroke",w.rS.colors.gray[700]).attr("stroke-width",1.5).call(l),t})),c.call(l),c.exit().remove();var u=t.select(".nodes");u.empty()&&(u=t.append("g").attr("class","nodes"));var s=function(t){t.attr("transform",(function(t){return"translate(".concat(t.x,",").concat(t.y,")")}));var r=t.select("circle");r.empty()&&(r=t.append("circle")),r.attr("fill",w.rS.colors.teal[500]).attr("r",E).style("cursor","pointer").on("click",(function(t,r){return g(r)}));var n=t.select("text");return n.empty()&&(n=t.append("text")),n.attr("fill","black").text((function(t){return t.data.name})).attr("font-family","inherit").attr("text-anchor","middle").attr("dy",21.6).attr("fill","black").attr("font-size",12).attr("transform","rotate(-8)"),t},d=u.selectAll(".actor-node").data((function(t){return t.layoutRoot.descendants()}));d.exit().remove(),d.enter().call((function(t){return t.append("g").attr("class","actor-node").call(s)})),d.call(s)},l=r.select(".actors").selectAll(".actor").data(R);l.enter().call((function(t){return t.append("g").attr("class","actor").call(i)})),l.call(i),l.exit().remove();var c=r.select(".actor-links").selectAll(".actor-link").data(Z),u=h.FdL,s=h.jvg().curve(u).x((function(t){return t.x})).y((function(t){return t.y})),d=function(t){return t.attr("d",(function(t){var r=t.points;return s(r)})).attr("fill","none").attr("stroke-width",(function(t){return e(t.source)||e(t.target)?2:1})).attr("stroke",(function(t){return e(t.source)||e(t.target)?w.rS.colors.teal[500]:w.rS.colors.gray[300]}))};c.enter().call((function(t){return t.append("path").attr("class","actor-link").call(d)})),c.call(d),c.exit().remove()}}),[R,Z,a,g]),(0,i.jsxs)(y.Fragment,{children:[(0,i.jsxs)(C.u_,{isOpen:c,onClose:s,size:"5xl",children:[(0,i.jsx)(C.ZA,{}),(0,i.jsxs)(C.hz,{children:[(0,i.jsxs)(C.xB,{children:[null===v||void 0===v?void 0:v.operatorId," -"," ",null===v||void 0===v||null===(r=v.nodeBody)||void 0===r?void 0:r.$case]}),(0,i.jsx)(C.ol,{}),(0,i.jsx)(C.fe,{children:c&&v&&(0,i.jsx)(A,{src:v,collapsed:3,name:null,displayDataTypes:!1})}),(0,i.jsx)(C.mz,{children:(0,i.jsx)(f.zx,{colorScheme:"blue",mr:3,onClick:s,children:"Close"})})]})]}),(0,i.jsxs)("svg",{ref:o,width:"".concat(D,"px"),height:"".concat(Y,"px"),children:[(0,i.jsx)("g",{className:"actor-links"}),(0,i.jsx)("g",{className:"actors"})]})]})}var Z=n(5330),R=n(9874);function W(t){var r=t.actors[0],n=function(t){var r;return{name:(null===(r=t.nodeBody)||void 0===r?void 0:r.$case.toString())||"unknown",children:(t.input||[]).map(n),operatorId:t.operatorId,node:t}};return h.bT9({name:r.dispatcher.map((function(t){return"".concat((0,p.toLower)(t.type),"Dispatcher")})).join(",")||"noDispatcher",extraInfo:"Actor ".concat(t.actors.map((function(t){return t.actorId})).join(", ")),children:r.nodes?[n(r.nodes)]:[],operatorId:"dispatcher"})}function M(t){var r=(0,y.useState)(),n=r[0],a=r[1],i=(0,l.pm)();return(0,y.useEffect)((function(){var r=function(){var r=(0,e.Z)(o().mark((function r(){var n;return o().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,t();case 3:n=r.sent,a(n),r.next=11;break;case 7:r.prev=7,r.t0=r.catch(0),i({title:"Error Occurred",description:r.t0.toString(),status:"error",duration:5e3,isClosable:!0}),console.error(r.t0);case 11:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(){return r.apply(this,arguments)}}();r()}),[i,t]),{response:n}}function L(){var t,r,n,e=M(R.BA).response,a=M(R.jV).response,o=(0,y.useState)(),h=o[0],p=o[1],x=(0,m.useRouter)(),w=(0,y.useCallback)((function(){if(a&&x.query.id){var t=parseInt(x.query.id),r=a.find((function(r){return r.tableId===t}));if(r){var n=function(t){var r=function(r){var a=t.fragments[r],o=new Set,i=!0,l=!1,c=void 0;try{for(var u,s=a.actors[Symbol.iterator]();!(i=(u=s.next()).done);i=!0){var d=u.value,f=!0,h=!1,v=void 0;try{for(var p,x=d.upstreamActorId[Symbol.iterator]();!(f=(p=x.next()).done);f=!0){var g=p.value,m=e.get(g);m&&o.add(m)}}catch(y){h=!0,v=y}finally{try{f||null==x.return||x.return()}finally{if(h)throw v}}}}catch(y){l=!0,c=y}finally{try{i||null==s.return||s.return()}finally{if(l)throw c}}n.push({id:a.fragmentId.toString(),name:"Fragment ".concat(a.fragmentId),parentIds:Array.from(o).map((function(t){return t.toString()})),width:0,height:0,order:a.fragmentId,fragment:a})},n=[],e=new Map;for(var a in t.fragments){var o=t.fragments[a],i=!0,l=!1,c=void 0;try{for(var u,s=o.actors[Symbol.iterator]();!(i=(u=s.next()).done);i=!0){var d=u.value;e.set(d.actorId,d.fragmentId)}}catch(h){l=!0,c=h}finally{try{i||null==s.return||s.return()}finally{if(l)throw c}}}for(var f in t.fragments)r(f);return n}(r);return{fragments:r,fragmentDep:n,fragmentDepDag:(0,v.lu)()(n)}}}}),[a,x.query.id]);(0,y.useEffect)((function(){return e&&(x.query.id||e.length>0&&x.replace("?id=".concat(e[0].id))),function(){}}),[x,x.query.id,e]);var I=null===(t=w())||void 0===t?void 0:t.fragmentDep,b=null===(r=w())||void 0===r?void 0:r.fragmentDepDag,k=null===(n=w())||void 0===n?void 0:n.fragments,S=(0,y.useCallback)((function(){var t=null===k||void 0===k?void 0:k.fragments;if(t){var r=new Map;for(var n in t){var e=W(t[n]);r.set(n,e)}return r}}),[null===k||void 0===k?void 0:k.fragments]),C=S(),D=(0,y.useCallback)((function(){var t=x.query.id;if(t&&e)return e.find((function(r){return r.id==parseInt(t)}))}),[e,x.query.id])(),_=(0,y.useState)(""),A=_[0],N=_[1],z=(0,y.useState)(""),E=z[0],F=z[1],q=function(t){return x.replace("?id=".concat(t))},L=(0,l.pm)(),O=(0,i.jsxs)(c.kC,{p:3,height:"calc(100vh - 20px)",flexDirection:"column",children:[(0,i.jsx)(Z.Z,{children:"Streaming Plan"}),(0,i.jsxs)(c.kC,{flexDirection:"row",height:"full",width:"full",children:[(0,i.jsxs)(c.gC,{mr:3,spacing:3,alignItems:"flex-start",width:200,height:"full",children:[(0,i.jsxs)(u.NI,{children:[(0,i.jsx)(u.lX,{children:"Materialized View"}),(0,i.jsx)(s.II,{list:"mvList",spellCheck:!1,onChange:function(t){var r,n=null===(r=null===e||void 0===e?void 0:e.find((function(r){return r.name==t.target.value})))||void 0===r?void 0:r.id;n&&q(n)},placeholder:"Search...",mb:2}),(0,i.jsx)("datalist",{id:"mvList",children:e&&e.filter((function(t){return!t.name.startsWith("__")})).map((function(t){return(0,i.jsxs)("option",{value:t.name,children:["(",t.id,") ",t.name]},t.id)}))}),(0,i.jsx)(d.Ph,{value:x.query.id,onChange:function(t){return q(parseInt(t.target.value))},children:e&&e.filter((function(t){return!t.name.startsWith("__")})).map((function(t){return(0,i.jsxs)("option",{value:t.id,children:["(",t.id,") ",t.name]},t.name)}))})]}),(0,i.jsxs)(u.NI,{children:[(0,i.jsx)(u.lX,{children:"Goto"}),(0,i.jsxs)(c.gC,{spacing:2,children:[(0,i.jsxs)(c.Ug,{children:[(0,i.jsx)(s.II,{placeholder:"Fragment Id",value:E,onChange:function(t){return F(t.target.value)}}),(0,i.jsx)(f.zx,{onClick:function(t){return function(){var t=parseInt(E);if(a){var r=!0,n=!1,e=void 0;try{for(var o,i=a[Symbol.iterator]();!(r=(o=i.next()).done);r=!0){var l=o.value;for(var c in l.fragments)if(l.fragments[c].fragmentId==t)return q(l.tableId),void p(t)}}catch(u){n=!0,e=u}finally{try{r||null==i.return||i.return()}finally{if(n)throw e}}}L({title:"Fragment not found",description:"",status:"error",duration:5e3,isClosable:!0})}()},children:"Go"})]}),(0,i.jsxs)(c.Ug,{children:[(0,i.jsx)(s.II,{placeholder:"Actor Id",value:A,onChange:function(t){return N(t.target.value)}}),(0,i.jsx)(f.zx,{onClick:function(t){return function(){var t=parseInt(A);if(a){var r=!0,n=!1,e=void 0;try{for(var o,i=a[Symbol.iterator]();!(r=(o=i.next()).done);r=!0){var l=o.value;for(var c in l.fragments){var u=l.fragments[c],s=!0,d=!1,f=void 0;try{for(var h,v=u.actors[Symbol.iterator]();!(s=(h=v.next()).done);s=!0)if(h.value.actorId==t)return q(l.tableId),void p(u.fragmentId)}catch(x){d=!0,f=x}finally{try{s||null==v.return||v.return()}finally{if(d)throw f}}}}}catch(x){n=!0,e=x}finally{try{r||null==i.return||i.return()}finally{if(n)throw e}}}L({title:"Actor not found",description:"",status:"error",duration:5e3,isClosable:!0})}()},children:"Go"})]})]})]}),(0,i.jsxs)(c.kC,{height:"full",width:"full",flexDirection:"column",children:[(0,i.jsx)(c.xv,{fontWeight:"semibold",children:"Plan"}),D&&(0,i.jsxs)(c.xv,{children:[D.id," - ",D.name]}),b&&(0,i.jsx)(c.xu,{flex:"1",overflowY:"scroll",children:(0,i.jsx)(j,{svgWidth:200,mvDependency:b,onSelectedIdChange:function(t){return p(parseInt(t))},selectedId:null===h||void 0===h?void 0:h.toString()})})]})]}),(0,i.jsxs)(c.xu,{flex:1,height:"full",ml:3,overflowX:"scroll",overflowY:"scroll",children:[(0,i.jsx)(c.xv,{fontWeight:"semibold",children:"Fragment Graph"}),C&&I&&(0,i.jsx)(Y,{selectedFragmentId:null===h||void 0===h?void 0:h.toString(),fragmentDependency:I,planNodeDependencies:C})]})]})]});return(0,i.jsxs)(y.Fragment,{children:[(0,i.jsx)(g(),{children:(0,i.jsx)("title",{children:"Streaming Fragments"})}),O]})}}},function(t){t.O(0,[662,474,591,783,476,459,194,293,774,888,179],(function(){return r=4248,t(t.s=r);var r}));var r=t.O();_N_E=r}]);