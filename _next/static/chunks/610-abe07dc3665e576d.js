(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[610],{1533:(e,t,r)=>{"use strict";r.d(t,{A:()=>i});var n=r(3732);let l=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),u=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.filter((e,t,r)=>!!e&&""!==e.trim()&&r.indexOf(e)===t).join(" ").trim()};var o={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let a=(0,n.forwardRef)((e,t)=>{let{color:r="currentColor",size:l=24,strokeWidth:a=2,absoluteStrokeWidth:i,className:s="",children:d,iconNode:f,...c}=e;return(0,n.createElement)("svg",{ref:t,...o,width:l,height:l,stroke:r,strokeWidth:i?24*Number(a)/Number(l):a,className:u("lucide",s),...c},[...f.map(e=>{let[t,r]=e;return(0,n.createElement)(t,r)}),...Array.isArray(d)?d:[d]])}),i=(e,t)=>{let r=(0,n.forwardRef)((r,o)=>{let{className:i,...s}=r;return(0,n.createElement)(a,{ref:o,iconNode:t,className:u("lucide-".concat(l(e)),i),...s})});return r.displayName="".concat(e),r}},5337:(e,t,r)=>{"use strict";r.d(t,{A:()=>n});let n=(0,r(1533).A)("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]])},304:(e,t,r)=>{"use strict";r.d(t,{A:()=>n});let n=(0,r(1533).A)("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]])},8840:(e,t,r)=>{"use strict";r.d(t,{A:()=>n});let n=(0,r(1533).A)("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]])},6479:(e,t,r)=>{"use strict";r.d(t,{A:()=>n});let n=(0,r(1533).A)("Rss",[["path",{d:"M4 11a9 9 0 0 1 9 9",key:"pv89mb"}],["path",{d:"M4 4a16 16 0 0 1 16 16",key:"k0647b"}],["circle",{cx:"5",cy:"19",r:"1",key:"bfqh0e"}]])},1895:(e,t,r)=>{"use strict";r.d(t,{A:()=>n});let n=(0,r(1533).A)("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]])},5859:(e,t)=>{"use strict";var r,n;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{ACTION_HMR_REFRESH:function(){return s},ACTION_NAVIGATE:function(){return u},ACTION_PREFETCH:function(){return i},ACTION_REFRESH:function(){return l},ACTION_RESTORE:function(){return o},ACTION_SERVER_ACTION:function(){return d},ACTION_SERVER_PATCH:function(){return a},PrefetchCacheEntryStatus:function(){return n},PrefetchKind:function(){return r}});let l="refresh",u="navigate",o="restore",a="server-patch",i="prefetch",s="hmr-refresh",d="server-action";!function(e){e.AUTO="auto",e.FULL="full",e.TEMPORARY="temporary"}(r||(r={})),function(e){e.fresh="fresh",e.reusable="reusable",e.expired="expired",e.stale="stale"}(n||(n={})),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5605:(e,t,r)=>{"use strict";function n(e,t,r,n){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return n}}),r(9359),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4445:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return O}});let n=r(1739),l=r(4584),u=n._(r(3732)),o=r(8399),a=r(2953),i=r(5476),s=r(4142),d=r(1446),f=r(796),c=r(7466),p=r(9998),h=r(5605),y=r(376),b=r(5859),_=r(8495),m=new Set;function g(e,t,r,n,l,u){if(u||(0,a.isLocalURL)(t)){if(!n.bypassPrefetchedCheck&&!u){let l=t+"%"+r+"%"+(void 0!==n.locale?n.locale:"locale"in e?e.locale:void 0);if(m.has(l))return;m.add(l)}(async()=>u?e.prefetch(t,l):e.prefetch(t,r,n))().catch(e=>{})}}function v(e){return"string"==typeof e?e:(0,i.formatUrl)(e)}let O=u.default.forwardRef(function(e,t){let r,n;let{href:i,as:m,children:O,prefetch:k=null,passHref:C,replace:j,shallow:P,scroll:M,locale:A,onClick:E,onMouseEnter:R,onTouchStart:w,legacyBehavior:T=!1,...x}=e;r=O,T&&("string"==typeof r||"number"==typeof r)&&(r=(0,l.jsx)("a",{children:r}));let L=u.default.useContext(f.RouterContext),N=u.default.useContext(c.AppRouterContext),S=null!=L?L:N,I=!L,D=!1!==k,U=null===k?b.PrefetchKind.AUTO:b.PrefetchKind.FULL,{href:H,as:V}=u.default.useMemo(()=>{if(!L){let e=v(i);return{href:e,as:m?v(m):e}}let[e,t]=(0,o.resolveHref)(L,i,!0);return{href:e,as:m?(0,o.resolveHref)(L,m):t||e}},[L,i,m]),F=u.default.useRef(H),K=u.default.useRef(V);T&&(n=u.default.Children.only(r));let q=T?n&&"object"==typeof n&&n.ref:t,[G,z,B]=(0,p.useIntersection)({rootMargin:"200px"}),W=u.default.useCallback(e=>{(K.current!==V||F.current!==H)&&(B(),K.current=V,F.current=H),G(e)},[V,H,B,G]),Y=(0,_.useMergedRef)(W,q);u.default.useEffect(()=>{S&&z&&D&&g(S,H,V,{locale:A},{kind:U},I)},[V,H,z,A,D,null==L?void 0:L.locale,S,I,U]);let $={ref:Y,onClick(e){T||"function"!=typeof E||E(e),T&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(e),S&&!e.defaultPrevented&&function(e,t,r,n,l,o,i,s,d){let{nodeName:f}=e.currentTarget;if("A"===f.toUpperCase()&&(function(e){let t=e.currentTarget.getAttribute("target");return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!d&&!(0,a.isLocalURL)(r)))return;e.preventDefault();let c=()=>{let e=null==i||i;"beforePopState"in t?t[l?"replace":"push"](r,n,{shallow:o,locale:s,scroll:e}):t[l?"replace":"push"](n||r,{scroll:e})};d?u.default.startTransition(c):c()}(e,S,H,V,j,P,M,A,I)},onMouseEnter(e){T||"function"!=typeof R||R(e),T&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),S&&(D||!I)&&g(S,H,V,{locale:A,priority:!0,bypassPrefetchedCheck:!0},{kind:U},I)},onTouchStart:function(e){T||"function"!=typeof w||w(e),T&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),S&&(D||!I)&&g(S,H,V,{locale:A,priority:!0,bypassPrefetchedCheck:!0},{kind:U},I)}};if((0,s.isAbsoluteUrl)(V))$.href=V;else if(!T||C||"a"===n.type&&!("href"in n.props)){let e=void 0!==A?A:null==L?void 0:L.locale,t=(null==L?void 0:L.isLocaleDomain)&&(0,h.getDomainLocale)(V,e,null==L?void 0:L.locales,null==L?void 0:L.domainLocales);$.href=t||(0,y.addBasePath)((0,d.addLocale)(V,e,null==L?void 0:L.defaultLocale))}return T?u.default.cloneElement(n,$):(0,l.jsx)("a",{...x,...$,children:r})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9998:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return i}});let n=r(3732),l=r(2415),u="function"==typeof IntersectionObserver,o=new Map,a=[];function i(e){let{rootRef:t,rootMargin:r,disabled:i}=e,s=i||!u,[d,f]=(0,n.useState)(!1),c=(0,n.useRef)(null),p=(0,n.useCallback)(e=>{c.current=e},[]);return(0,n.useEffect)(()=>{if(u){if(s||d)return;let e=c.current;if(e&&e.tagName)return function(e,t,r){let{id:n,observer:l,elements:u}=function(e){let t;let r={root:e.root||null,margin:e.rootMargin||""},n=a.find(e=>e.root===r.root&&e.margin===r.margin);if(n&&(t=o.get(n)))return t;let l=new Map;return t={id:r,observer:new IntersectionObserver(e=>{e.forEach(e=>{let t=l.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e),elements:l},a.push(r),o.set(r,t),t}(r);return u.set(e,t),l.observe(e),function(){if(u.delete(e),l.unobserve(e),0===u.size){l.disconnect(),o.delete(n);let e=a.findIndex(e=>e.root===n.root&&e.margin===n.margin);e>-1&&a.splice(e,1)}}}(e,e=>e&&f(e),{root:null==t?void 0:t.current,rootMargin:r})}else if(!d){let e=(0,l.requestIdleCallback)(()=>f(!0));return()=>(0,l.cancelIdleCallback)(e)}},[s,r,t,d,c.current]),[p,d,(0,n.useCallback)(()=>{f(!1)},[])]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8495:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useMergedRef",{enumerable:!0,get:function(){return l}});let n=r(3732);function l(e,t){let r=(0,n.useRef)(()=>{}),l=(0,n.useRef)(()=>{});return(0,n.useMemo)(()=>e&&t?n=>{null===n?(r.current(),l.current()):(r.current=u(e,n),l.current=u(t,n))}:e||t,[e,t])}function u(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let r=e(t);return"function"==typeof r?r:()=>e(null)}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1114:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return a},noSSR:function(){return o}});let n=r(1739);r(4584),r(3732);let l=n._(r(973));function u(e){return{default:(null==e?void 0:e.default)||e}}function o(e,t){return delete t.webpack,delete t.modules,e(t)}function a(e,t){let r=l.default,n={loading:e=>{let{error:t,isLoading:r,pastDelay:n}=e;return null}};e instanceof Promise?n.loader=()=>e:"function"==typeof e?n.loader=e:"object"==typeof e&&(n={...n,...e});let a=(n={...n,...t}).loader;return(n.loadableGenerated&&(n={...n,...n.loadableGenerated},delete n.loadableGenerated),"boolean"!=typeof n.ssr||n.ssr)?r({...n,loader:()=>null!=a?a().then(u):Promise.resolve(u(()=>null))}):(delete n.webpack,delete n.modules,o(r,n))}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2399:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"LoadableContext",{enumerable:!0,get:function(){return n}});let n=r(1739)._(r(3732)).default.createContext(null)},973:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return c}});let n=r(1739)._(r(3732)),l=r(2399),u=[],o=[],a=!1;function i(e){let t=e(),r={loading:!0,loaded:null,error:null};return r.promise=t.then(e=>(r.loading=!1,r.loaded=e,e)).catch(e=>{throw r.loading=!1,r.error=e,e}),r}class s{promise(){return this._res.promise}retry(){this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};let{_res:e,_opts:t}=this;e.loading&&("number"==typeof t.delay&&(0===t.delay?this._state.pastDelay=!0:this._delay=setTimeout(()=>{this._update({pastDelay:!0})},t.delay)),"number"==typeof t.timeout&&(this._timeout=setTimeout(()=>{this._update({timedOut:!0})},t.timeout))),this._res.promise.then(()=>{this._update({}),this._clearTimeouts()}).catch(e=>{this._update({}),this._clearTimeouts()}),this._update({})}_update(e){this._state={...this._state,error:this._res.error,loaded:this._res.loaded,loading:this._res.loading,...e},this._callbacks.forEach(e=>e())}_clearTimeouts(){clearTimeout(this._delay),clearTimeout(this._timeout)}getCurrentValue(){return this._state}subscribe(e){return this._callbacks.add(e),()=>{this._callbacks.delete(e)}}constructor(e,t){this._loadFn=e,this._opts=t,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}}function d(e){return function(e,t){let r=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null},t),u=null;function i(){if(!u){let t=new s(e,r);u={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return u.promise()}if(!a){let e=r.webpack?r.webpack():r.modules;e&&o.push(t=>{for(let r of e)if(t.includes(r))return i()})}function d(e,t){!function(){i();let e=n.default.useContext(l.LoadableContext);e&&Array.isArray(r.modules)&&r.modules.forEach(t=>{e(t)})}();let o=n.default.useSyncExternalStore(u.subscribe,u.getCurrentValue,u.getCurrentValue);return n.default.useImperativeHandle(t,()=>({retry:u.retry}),[]),n.default.useMemo(()=>{var t;return o.loading||o.error?n.default.createElement(r.loading,{isLoading:o.loading,pastDelay:o.pastDelay,timedOut:o.timedOut,error:o.error,retry:u.retry}):o.loaded?n.default.createElement((t=o.loaded)&&t.default?t.default:t,e):null},[e,o])}return d.preload=()=>i(),d.displayName="LoadableComponent",n.default.forwardRef(d)}(i,e)}function f(e,t){let r=[];for(;e.length;){let n=e.pop();r.push(n(t))}return Promise.all(r).then(()=>{if(e.length)return f(e,t)})}d.preloadAll=()=>new Promise((e,t)=>{f(u).then(e,t)}),d.preloadReady=e=>(void 0===e&&(e=[]),new Promise(t=>{let r=()=>(a=!0,t());f(o,e).then(r,r)})),window.__NEXT_PRELOADREADY=d.preloadReady;let c=d},4479:(e,t,r)=>{e.exports=r(1114)},8415:(e,t,r)=>{e.exports=r(4445)}}]);