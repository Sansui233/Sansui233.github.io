(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[776],{3326:function(e,t,r){"use strict";r.d(t,{Z:function(){return createLucideIcon}});var n=r(959),o={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let toKebabCase=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),createLucideIcon=(e,t)=>{let r=(0,n.forwardRef)(({color:r="currentColor",size:l=24,strokeWidth:u=2,absoluteStrokeWidth:a,children:i,...s},c)=>(0,n.createElement)("svg",{ref:c,...o,width:l,height:l,stroke:r,strokeWidth:a?24*Number(u)/Number(l):u,className:`lucide lucide-${toKebabCase(e)}`,...s},[...t.map(([e,t])=>(0,n.createElement)(e,t)),...(Array.isArray(i)?i:[i])||[]]));return r.displayName=`${e}`,r}},3127:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var n=r(3326);let o=(0,n.Z)("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]])},1352:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var n=r(3326);let o=(0,n.Z)("Folder",[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]])},462:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var n=r(3326);let o=(0,n.Z)("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]])},3124:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var n=r(3326);let o=(0,n.Z)("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]])},284:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var n=r(3326);let o=(0,n.Z)("Rss",[["path",{d:"M4 11a9 9 0 0 1 9 9",key:"pv89mb"}],["path",{d:"M4 4a16 16 0 0 1 16 16",key:"k0647b"}],["circle",{cx:"5",cy:"19",r:"1",key:"bfqh0e"}]])},67:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var n=r(3326);let o=(0,n.Z)("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]])},5907:function(e,t){"use strict";var r,n;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{PrefetchKind:function(){return r},ACTION_REFRESH:function(){return o},ACTION_NAVIGATE:function(){return l},ACTION_RESTORE:function(){return u},ACTION_SERVER_PATCH:function(){return a},ACTION_PREFETCH:function(){return i},ACTION_FAST_REFRESH:function(){return s},ACTION_SERVER_ACTION:function(){return c}});let o="refresh",l="navigate",u="restore",a="server-patch",i="prefetch",s="fast-refresh",c="server-action";(n=r||(r={})).AUTO="auto",n.FULL="full",n.TEMPORARY="temporary",("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},629:function(e,t,r){"use strict";function getDomainLocale(e,t,r,n){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return getDomainLocale}}),r(4684),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3360:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return _}});let n=r(1351),o=n._(r(959)),l=r(7090),u=r(9299),a=r(7576),i=r(9707),s=r(2649),c=r(5717),d=r(6021),f=r(7322),p=r(629),h=r(5175),b=r(5907),y=new Set;function prefetch(e,t,r,n,o,l){if(!l&&!(0,u.isLocalURL)(t))return;if(!n.bypassPrefetchedCheck){let o=void 0!==n.locale?n.locale:"locale"in e?e.locale:void 0,l=t+"%"+r+"%"+o;if(y.has(l))return;y.add(l)}let a=l?e.prefetch(t,o):e.prefetch(t,r,n);Promise.resolve(a).catch(e=>{})}function isModifiedEvent(e){let t=e.currentTarget,r=t.getAttribute("target");return r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}function linkClicked(e,t,r,n,l,a,i,s,c,d){let{nodeName:f}=e.currentTarget,p="A"===f.toUpperCase();if(p&&(isModifiedEvent(e)||!c&&!(0,u.isLocalURL)(r)))return;e.preventDefault();let navigate=()=>{let e=null==i||i;"beforePopState"in t?t[l?"replace":"push"](r,n,{shallow:a,locale:s,scroll:e}):t[l?"replace":"push"](n||r,{forceOptimisticNavigation:!d,scroll:e})};c?o.default.startTransition(navigate):navigate()}function formatStringOrUrl(e){return"string"==typeof e?e:(0,a.formatUrl)(e)}let m=o.default.forwardRef(function(e,t){let r,n;let{href:u,as:a,children:y,prefetch:m=null,passHref:_,replace:v,shallow:g,scroll:C,locale:k,onClick:O,onMouseEnter:L,onTouchStart:M,legacyBehavior:E=!1,...P}=e;r=y,E&&("string"==typeof r||"number"==typeof r)&&(r=o.default.createElement("a",null,r));let j=o.default.useContext(c.RouterContext),R=o.default.useContext(d.AppRouterContext),w=null!=j?j:R,T=!j,S=!1!==m,A=null===m?b.PrefetchKind.AUTO:b.PrefetchKind.FULL,{href:I,as:x}=o.default.useMemo(()=>{if(!j){let e=formatStringOrUrl(u);return{href:e,as:a?formatStringOrUrl(a):e}}let[e,t]=(0,l.resolveHref)(j,u,!0);return{href:e,as:a?(0,l.resolveHref)(j,a):t||e}},[j,u,a]),N=o.default.useRef(I),Z=o.default.useRef(x);E&&(n=o.default.Children.only(r));let D=E?n&&"object"==typeof n&&n.ref:t,[U,F,K]=(0,f.useIntersection)({rootMargin:"200px"}),V=o.default.useCallback(e=>{(Z.current!==x||N.current!==I)&&(K(),Z.current=x,N.current=I),U(e),D&&("function"==typeof D?D(e):"object"==typeof D&&(D.current=e))},[x,D,I,K,U]);o.default.useEffect(()=>{w&&F&&S&&prefetch(w,I,x,{locale:k},{kind:A},T)},[x,I,F,k,S,null==j?void 0:j.locale,w,T,A]);let H={ref:V,onClick(e){E||"function"!=typeof O||O(e),E&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(e),w&&!e.defaultPrevented&&linkClicked(e,w,I,x,v,g,C,k,T,S)},onMouseEnter(e){E||"function"!=typeof L||L(e),E&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),w&&(S||!T)&&prefetch(w,I,x,{locale:k,priority:!0,bypassPrefetchedCheck:!0},{kind:A},T)},onTouchStart(e){E||"function"!=typeof M||M(e),E&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),w&&(S||!T)&&prefetch(w,I,x,{locale:k,priority:!0,bypassPrefetchedCheck:!0},{kind:A},T)}};if((0,i.isAbsoluteUrl)(x))H.href=x;else if(!E||_||"a"===n.type&&!("href"in n.props)){let e=void 0!==k?k:null==j?void 0:j.locale,t=(null==j?void 0:j.isLocaleDomain)&&(0,p.getDomainLocale)(x,e,null==j?void 0:j.locales,null==j?void 0:j.domainLocales);H.href=t||(0,h.addBasePath)((0,s.addLocale)(x,e,null==j?void 0:j.defaultLocale))}return E?o.default.cloneElement(n,H):o.default.createElement("a",{...P,...H},r)}),_=m;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7322:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return useIntersection}});let n=r(959),o=r(4379),l="function"==typeof IntersectionObserver,u=new Map,a=[];function createObserver(e){let t;let r={root:e.root||null,margin:e.rootMargin||""},n=a.find(e=>e.root===r.root&&e.margin===r.margin);if(n&&(t=u.get(n)))return t;let o=new Map,l=new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e);return t={id:r,observer:l,elements:o},a.push(r),u.set(r,t),t}function observe(e,t,r){let{id:n,observer:o,elements:l}=createObserver(r);return l.set(e,t),o.observe(e),function(){if(l.delete(e),o.unobserve(e),0===l.size){o.disconnect(),u.delete(n);let e=a.findIndex(e=>e.root===n.root&&e.margin===n.margin);e>-1&&a.splice(e,1)}}}function useIntersection(e){let{rootRef:t,rootMargin:r,disabled:u}=e,a=u||!l,[i,s]=(0,n.useState)(!1),c=(0,n.useRef)(null),d=(0,n.useCallback)(e=>{c.current=e},[]);(0,n.useEffect)(()=>{if(l){if(a||i)return;let e=c.current;if(e&&e.tagName){let n=observe(e,e=>e&&s(e),{root:null==t?void 0:t.current,rootMargin:r});return n}}else if(!i){let e=(0,o.requestIdleCallback)(()=>s(!0));return()=>(0,o.cancelIdleCallback)(e)}},[a,r,t,i,c.current]);let f=(0,n.useCallback)(()=>{s(!1)},[]);return[d,i,f]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6832:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{noSSR:function(){return noSSR},default:function(){return dynamic}});let n=r(1351),o=(r(959),n._(r(4335)));function convertModule(e){return{default:(null==e?void 0:e.default)||e}}function noSSR(e,t){return delete t.webpack,delete t.modules,e(t)}function dynamic(e,t){let r=o.default,n={loading:e=>{let{error:t,isLoading:r,pastDelay:n}=e;return null}};e instanceof Promise?n.loader=()=>e:"function"==typeof e?n.loader=e:"object"==typeof e&&(n={...n,...e}),n={...n,...t};let l=n.loader;return(n.loadableGenerated&&(n={...n,...n.loadableGenerated},delete n.loadableGenerated),"boolean"!=typeof n.ssr||n.ssr)?r({...n,loader:()=>null!=l?l().then(convertModule):Promise.resolve(convertModule(()=>null))}):(delete n.webpack,delete n.modules,noSSR(r,n))}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6507:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"LoadableContext",{enumerable:!0,get:function(){return l}});let n=r(1351),o=n._(r(959)),l=o.default.createContext(null)},4335:function(e,t,r){"use strict";/**
@copyright (c) 2017-present James Kyle <me@thejameskyle.com>
 MIT License
 Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:
 The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.
 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE
*/Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return s}});let n=r(1351),o=n._(r(959)),l=r(6507);function resolve(e){return e&&e.default?e.default:e}let u=[],a=[],i=!1;function load(e){let t=e(),r={loading:!0,loaded:null,error:null};return r.promise=t.then(e=>(r.loading=!1,r.loaded=e,e)).catch(e=>{throw r.loading=!1,r.error=e,e}),r}function createLoadableComponent(e,t){let r=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null},t),n=null;function init(){if(!n){let t=new LoadableSubscription(e,r);n={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return n.promise()}if(!i){let e=r.webpack?r.webpack():r.modules;e&&a.push(t=>{for(let r of e)if(t.includes(r))return init()})}function useLoadableModule(){init();let e=o.default.useContext(l.LoadableContext);e&&Array.isArray(r.modules)&&r.modules.forEach(t=>{e(t)})}function LoadableComponent(e,t){useLoadableModule();let l=o.default.useSyncExternalStore(n.subscribe,n.getCurrentValue,n.getCurrentValue);return o.default.useImperativeHandle(t,()=>({retry:n.retry}),[]),o.default.useMemo(()=>l.loading||l.error?o.default.createElement(r.loading,{isLoading:l.loading,pastDelay:l.pastDelay,timedOut:l.timedOut,error:l.error,retry:n.retry}):l.loaded?o.default.createElement(resolve(l.loaded),e):null,[e,l])}return LoadableComponent.preload=()=>init(),LoadableComponent.displayName="LoadableComponent",o.default.forwardRef(LoadableComponent)}let LoadableSubscription=class LoadableSubscription{promise(){return this._res.promise}retry(){this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};let{_res:e,_opts:t}=this;e.loading&&("number"==typeof t.delay&&(0===t.delay?this._state.pastDelay=!0:this._delay=setTimeout(()=>{this._update({pastDelay:!0})},t.delay)),"number"==typeof t.timeout&&(this._timeout=setTimeout(()=>{this._update({timedOut:!0})},t.timeout))),this._res.promise.then(()=>{this._update({}),this._clearTimeouts()}).catch(e=>{this._update({}),this._clearTimeouts()}),this._update({})}_update(e){this._state={...this._state,error:this._res.error,loaded:this._res.loaded,loading:this._res.loading,...e},this._callbacks.forEach(e=>e())}_clearTimeouts(){clearTimeout(this._delay),clearTimeout(this._timeout)}getCurrentValue(){return this._state}subscribe(e){return this._callbacks.add(e),()=>{this._callbacks.delete(e)}}constructor(e,t){this._loadFn=e,this._opts=t,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}};function Loadable(e){return createLoadableComponent(load,e)}function flushInitializers(e,t){let r=[];for(;e.length;){let n=e.pop();r.push(n(t))}return Promise.all(r).then(()=>{if(e.length)return flushInitializers(e,t)})}Loadable.preloadAll=()=>new Promise((e,t)=>{flushInitializers(u).then(e,t)}),Loadable.preloadReady=e=>(void 0===e&&(e=[]),new Promise(t=>{let res=()=>(i=!0,t());flushInitializers(a,e).then(res,res)})),window.__NEXT_PRELOADREADY=Loadable.preloadReady;let s=Loadable},5849:function(e,t,r){e.exports=r(6832)},3522:function(e,t,r){e.exports=r(3610)},1557:function(e,t,r){e.exports=r(3360)}}]);