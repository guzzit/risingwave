(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[476],{9653:function(e,t,n){"use strict";n.d(t,{Ck:function(){return d},Gp:function(){return h},hS:function(){return s},qY:function(){return l},s9:function(){return m}});var r=n(2446),o=n(7294),a=(n(640),r.jU?o.useLayoutEffect:o.useEffect);function c(e,t=[]){const n=(0,o.useRef)(e);return a((()=>{n.current=e})),(0,o.useCallback)(((...e)=>{var t;return null==(t=n.current)?void 0:t.call(n,...e)}),t)}function u(e,t,n,a){const u=c(t);return(0,o.useEffect)((()=>{const o=(0,r.Pu)(n)??document;if(t)return o.addEventListener(e,u,a),()=>{o.removeEventListener(e,u,a)}}),[e,n,a,u,t]),()=>{((0,r.Pu)(n)??document).removeEventListener(e,u,a)}}function s(e){const{isOpen:t,ref:n}=e,[a,c]=(0,o.useState)(t),[s,i]=(0,o.useState)(!1);(0,o.useEffect)((()=>{s||(c(t),i(!0))}),[t,s,a]),u("animationend",(()=>{c(t)}),(()=>n.current));return{present:!(!t&&!a),onComplete(){var e;const t=new((0,r.kR)(n.current).CustomEvent)("animationend",{bubbles:!0});null==(e=n.current)||e.dispatchEvent(t)}}}function i(e,t){const n=(0,o.useId)();return(0,o.useMemo)((()=>e||[t,n].filter(Boolean).join("-")),[e,t,n])}function l(e={}){const{onClose:t,onOpen:n,isOpen:a,id:u}=e,s=c(n),l=c(t),[f,d]=(0,o.useState)(e.defaultIsOpen||!1),[p,m]=function(e,t){const n=void 0!==e;return[n,n&&"undefined"!==typeof e?e:t]}(a,f),y=i(u,"disclosure"),h=(0,o.useCallback)((()=>{p||d(!1),null==l||l()}),[p,l]),v=(0,o.useCallback)((()=>{p||d(!0),null==s||s()}),[p,s]),b=(0,o.useCallback)((()=>{(m?h:v)()}),[m,v,h]);return{isOpen:!!m,onOpen:v,onClose:h,onToggle:b,isControlled:p,getButtonProps:(e={})=>({...e,"aria-expanded":m,"aria-controls":y,onClick:(0,r.v0)(e.onClick,b)}),getDisclosureProps:(e={})=>({...e,hidden:!m,id:y})}}var f=(e,t)=>{const n=(0,o.useRef)(!1),r=(0,o.useRef)(!1);(0,o.useEffect)((()=>{if(n.current&&r.current)return e();r.current=!0}),t),(0,o.useEffect)((()=>(n.current=!0,()=>{n.current=!1})),[])};function d(e,t){const{shouldFocus:n,visible:o,focusRef:a}=t,c=n&&!o;f((()=>{if(!c)return;if(function(e){const t=e.current;if(!t)return!1;const n=(0,r.vY)(t);return!!n&&!(0,r.r3)(t,n)&&!!(0,r.Wq)(n)}(e))return;const t=(null==a?void 0:a.current)||e.current;t&&(0,r.T_)(t,{nextTick:!0})}),[c,e,a])}function p(e,t,n,o){return u((0,r.f7)(t),(0,r.JN)(n,"pointerdown"===t),e,o)}function m(e){const{ref:t,elements:n,enabled:o}=e,a=(0,r.Ao)("Safari");p((()=>(0,r.lZ)(t.current)),"pointerdown",(e=>{if(!a||!o)return;const c=e.target,u=(n??[t]).some((e=>{const t=(0,r.Ik)(e)?e.current:e;return(0,r.r3)(t,c)}));!(0,r.H9)(c)&&u&&(e.preventDefault(),(0,r.T_)(c))}))}var y={preventScroll:!0,shouldFocus:!1};function h(e,t=y){const{focusRef:n,preventScroll:a,shouldFocus:c,visible:s}=t,i=(0,r.Ik)(e)?e.current:e,l=c&&s,d=(0,o.useCallback)((()=>{if(i&&l&&!(0,r.r3)(i,document.activeElement))if(null==n?void 0:n.current)(0,r.T_)(n.current,{preventScroll:a,nextTick:!0});else{const e=(0,r.t5)(i);e.length>0&&(0,r.T_)(e[0],{preventScroll:a,nextTick:!0})}}),[l,a,i,n]);f((()=>{d()}),[d]),u("transitionend",d,i)}},3679:function(e,t,n){"use strict";n.d(t,{ZP:function(){return R}});var r=n(7294),o=n(3366),a=n(7462);function c(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var u=n(5068),s=n(971),i=n(8679),l=n.n(i);function f(e,t){if(!e){var n=new Error("loadable: "+t);throw n.framesToPop=1,n.name="Invariant Violation",n}}var d=r.createContext();var p={initialChunks:{}},m="PENDING",y="REJECTED";var h=function(e){return e};function v(e){var t=e.defaultResolveComponent,n=void 0===t?h:t,i=e.render,v=e.onLoad;function b(e,t){void 0===t&&(t={});var h=function(e){return"function"===typeof e?{requireAsync:e,resolve:function(){},chunkName:function(){}}:e}(e),b={};function g(e){return t.cacheKey?t.cacheKey(e):h.resolve?h.resolve(e):"static"}function C(e,r,o){var a=t.resolveComponent?t.resolveComponent(e,r):n(e);if(t.resolveComponent&&!(0,s.isValidElementType)(a))throw new Error("resolveComponent returned something that is not a React component!");return l()(o,a,{preload:!0}),a}var S=function(e){var t=g(e),n=b[t];return n&&n.status!==y||((n=h.requireAsync(e)).status=m,b[t]=n,n.then((function(){n.status="RESOLVED"}),(function(t){console.error("loadable-components: failed to asynchronously load component",{fileName:h.resolve(e),chunkName:h.chunkName(e),error:t?t.message:t}),n.status=y}))),n},k=function(e){var t=function(t){return r.createElement(d.Consumer,null,(function(n){return r.createElement(e,Object.assign({__chunkExtractor:n},t))}))};return e.displayName&&(t.displayName=e.displayName+"WithChunkExtractor"),t}(function(e){function n(n){var r;return(r=e.call(this,n)||this).state={result:null,error:null,loading:!0,cacheKey:g(n)},f(!n.__chunkExtractor||h.requireSync,"SSR requires `@loadable/babel-plugin`, please install it"),n.__chunkExtractor?(!1===t.ssr||(h.requireAsync(n).catch((function(){return null})),r.loadSync(),n.__chunkExtractor.addChunk(h.chunkName(n))),c(r)):(!1!==t.ssr&&(h.isReady&&h.isReady(n)||h.chunkName&&p.initialChunks[h.chunkName(n)])&&r.loadSync(),r)}(0,u.Z)(n,e),n.getDerivedStateFromProps=function(e,t){var n=g(e);return(0,a.Z)({},t,{cacheKey:n,loading:t.loading||t.cacheKey!==n})};var r=n.prototype;return r.componentDidMount=function(){this.mounted=!0;var e=this.getCache();e&&e.status===y&&this.setCache(),this.state.loading&&this.loadAsync()},r.componentDidUpdate=function(e,t){t.cacheKey!==this.state.cacheKey&&this.loadAsync()},r.componentWillUnmount=function(){this.mounted=!1},r.safeSetState=function(e,t){this.mounted&&this.setState(e,t)},r.getCacheKey=function(){return g(this.props)},r.getCache=function(){return b[this.getCacheKey()]},r.setCache=function(e){void 0===e&&(e=void 0),b[this.getCacheKey()]=e},r.triggerOnLoad=function(){var e=this;v&&setTimeout((function(){v(e.state.result,e.props)}))},r.loadSync=function(){if(this.state.loading)try{var e=C(h.requireSync(this.props),this.props,E);this.state.result=e,this.state.loading=!1}catch(t){console.error("loadable-components: failed to synchronously load component, which expected to be available",{fileName:h.resolve(this.props),chunkName:h.chunkName(this.props),error:t?t.message:t}),this.state.error=t}},r.loadAsync=function(){var e=this,t=this.resolveAsync();return t.then((function(t){var n=C(t,e.props,E);e.safeSetState({result:n,loading:!1},(function(){return e.triggerOnLoad()}))})).catch((function(t){return e.safeSetState({error:t,loading:!1})})),t},r.resolveAsync=function(){var e=this.props,t=(e.__chunkExtractor,e.forwardedRef,(0,o.Z)(e,["__chunkExtractor","forwardedRef"]));return S(t)},r.render=function(){var e=this.props,n=e.forwardedRef,r=e.fallback,c=(e.__chunkExtractor,(0,o.Z)(e,["forwardedRef","fallback","__chunkExtractor"])),u=this.state,s=u.error,l=u.loading,f=u.result;if(t.suspense&&(this.getCache()||this.loadAsync()).status===m)throw this.loadAsync();if(s)throw s;var d=r||t.fallback||null;return l?d:i({fallback:d,result:f,options:t,props:(0,a.Z)({},c,{ref:n})})},n}(r.Component)),E=r.forwardRef((function(e,t){return r.createElement(k,Object.assign({forwardedRef:t},e))}));return E.displayName="Loadable",E.preload=function(e){E.load(e)},E.load=function(e){return S(e)},E}return{loadable:b,lazy:function(e,t){return b(e,(0,a.Z)({},t,{suspense:!0}))}}}var b=v({defaultResolveComponent:function(e){return e.__esModule?e.default:e.default||e},render:function(e){var t=e.result,n=e.props;return r.createElement(t,n)}}),g=b.loadable,C=b.lazy,S=v({onLoad:function(e,t){e&&t.forwardedRef&&("function"===typeof t.forwardedRef?t.forwardedRef(e):t.forwardedRef.current=e)},render:function(e){var t=e.result,n=e.props;return n.children?n.children(t):null}}),k=S.loadable,E=S.lazy;var w=g;w.lib=k,C.lib=E;var R=w},1309:function(e,t){"use strict";var n="function"===typeof Symbol&&Symbol.for,r=n?Symbol.for("react.element"):60103,o=n?Symbol.for("react.portal"):60106,a=n?Symbol.for("react.fragment"):60107,c=n?Symbol.for("react.strict_mode"):60108,u=n?Symbol.for("react.profiler"):60114,s=n?Symbol.for("react.provider"):60109,i=n?Symbol.for("react.context"):60110,l=n?Symbol.for("react.async_mode"):60111,f=n?Symbol.for("react.concurrent_mode"):60111,d=n?Symbol.for("react.forward_ref"):60112,p=n?Symbol.for("react.suspense"):60113,m=n?Symbol.for("react.suspense_list"):60120,y=n?Symbol.for("react.memo"):60115,h=n?Symbol.for("react.lazy"):60116,v=n?Symbol.for("react.block"):60121,b=n?Symbol.for("react.fundamental"):60117,g=n?Symbol.for("react.responder"):60118,C=n?Symbol.for("react.scope"):60119;function S(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case r:switch(e=e.type){case l:case f:case a:case u:case c:case p:return e;default:switch(e=e&&e.$$typeof){case i:case d:case h:case y:case s:return e;default:return t}}case o:return t}}}function k(e){return S(e)===f}t.isValidElementType=function(e){return"string"===typeof e||"function"===typeof e||e===a||e===f||e===u||e===c||e===p||e===m||"object"===typeof e&&null!==e&&(e.$$typeof===h||e.$$typeof===y||e.$$typeof===s||e.$$typeof===i||e.$$typeof===d||e.$$typeof===b||e.$$typeof===g||e.$$typeof===C||e.$$typeof===v)}},971:function(e,t,n){"use strict";e.exports=n(1309)},640:function(e,t,n){"use strict";var r=n(1742),o={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,t){var n,a,c,u,s,i,l=!1;t||(t={}),n=t.debug||!1;try{if(c=r(),u=document.createRange(),s=document.getSelection(),(i=document.createElement("span")).textContent=e,i.style.all="unset",i.style.position="fixed",i.style.top=0,i.style.clip="rect(0, 0, 0, 0)",i.style.whiteSpace="pre",i.style.webkitUserSelect="text",i.style.MozUserSelect="text",i.style.msUserSelect="text",i.style.userSelect="text",i.addEventListener("copy",(function(r){if(r.stopPropagation(),t.format)if(r.preventDefault(),"undefined"===typeof r.clipboardData){n&&console.warn("unable to use e.clipboardData"),n&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var a=o[t.format]||o.default;window.clipboardData.setData(a,e)}else r.clipboardData.clearData(),r.clipboardData.setData(t.format,e);t.onCopy&&(r.preventDefault(),t.onCopy(r.clipboardData))})),document.body.appendChild(i),u.selectNodeContents(i),s.addRange(u),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");l=!0}catch(f){n&&console.error("unable to copy using execCommand: ",f),n&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),l=!0}catch(f){n&&console.error("unable to copy using clipboardData: ",f),n&&console.error("falling back to prompt"),a=function(e){var t=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}("message"in t?t.message:"Copy to clipboard: #{key}, Enter"),window.prompt(a,e)}}finally{s&&("function"==typeof s.removeRange?s.removeRange(u):s.removeAllRanges()),i&&document.body.removeChild(i),c()}return l}},1742:function(e){e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,n=[],r=0;r<e.rangeCount;r++)n.push(e.getRangeAt(r));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||n.forEach((function(t){e.addRange(t)})),t&&t.focus()}}},5068:function(e,t,n){"use strict";function r(e,t){return r=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},r(e,t)}function o(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,r(e,t)}n.d(t,{Z:function(){return o}})},3366:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}n.d(t,{Z:function(){return r}})}}]);