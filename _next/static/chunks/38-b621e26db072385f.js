(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[38],{3326:function(e,t,r){"use strict";r.d(t,{Z:function(){return createLucideIcon}});var n=r(959),o={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let toKebabCase=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),createLucideIcon=(e,t)=>{let r=(0,n.forwardRef)(({color:r="currentColor",size:u=24,strokeWidth:l=2,absoluteStrokeWidth:a,children:i,...c},f)=>(0,n.createElement)("svg",{ref:f,...o,width:u,height:u,stroke:r,strokeWidth:a?24*Number(l)/Number(u):l,className:`lucide lucide-${toKebabCase(e)}`,...c},[...t.map(([e,t])=>(0,n.createElement)(e,t)),...(Array.isArray(i)?i:[i])||[]]));return r.displayName=`${e}`,r}},3127:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var n=r(3326);let o=(0,n.Z)("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]])},1352:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var n=r(3326);let o=(0,n.Z)("Folder",[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]])},462:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var n=r(3326);let o=(0,n.Z)("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]])},3124:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var n=r(3326);let o=(0,n.Z)("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]])},284:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var n=r(3326);let o=(0,n.Z)("Rss",[["path",{d:"M4 11a9 9 0 0 1 9 9",key:"pv89mb"}],["path",{d:"M4 4a16 16 0 0 1 16 16",key:"k0647b"}],["circle",{cx:"5",cy:"19",r:"1",key:"bfqh0e"}]])},67:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var n=r(3326);let o=(0,n.Z)("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]])},5907:function(e,t){"use strict";var r,n;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{PrefetchKind:function(){return r},ACTION_REFRESH:function(){return o},ACTION_NAVIGATE:function(){return u},ACTION_RESTORE:function(){return l},ACTION_SERVER_PATCH:function(){return a},ACTION_PREFETCH:function(){return i},ACTION_FAST_REFRESH:function(){return c},ACTION_SERVER_ACTION:function(){return f}});let o="refresh",u="navigate",l="restore",a="server-patch",i="prefetch",c="fast-refresh",f="server-action";(n=r||(r={})).AUTO="auto",n.FULL="full",n.TEMPORARY="temporary",("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},629:function(e,t,r){"use strict";function getDomainLocale(e,t,r,n){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return getDomainLocale}}),r(4684),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3360:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return g}});let n=r(1351),o=n._(r(959)),u=r(7090),l=r(9299),a=r(7576),i=r(9707),c=r(2649),f=r(5717),s=r(6021),d=r(7322),p=r(629),h=r(5175),v=r(5907),y=new Set;function prefetch(e,t,r,n,o,u){if(!u&&!(0,l.isLocalURL)(t))return;if(!n.bypassPrefetchedCheck){let o=void 0!==n.locale?n.locale:"locale"in e?e.locale:void 0,u=t+"%"+r+"%"+o;if(y.has(u))return;y.add(u)}let a=u?e.prefetch(t,o):e.prefetch(t,r,n);Promise.resolve(a).catch(e=>{})}function isModifiedEvent(e){let t=e.currentTarget,r=t.getAttribute("target");return r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}function linkClicked(e,t,r,n,u,a,i,c,f,s){let{nodeName:d}=e.currentTarget,p="A"===d.toUpperCase();if(p&&(isModifiedEvent(e)||!f&&!(0,l.isLocalURL)(r)))return;e.preventDefault();let navigate=()=>{let e=null==i||i;"beforePopState"in t?t[u?"replace":"push"](r,n,{shallow:a,locale:c,scroll:e}):t[u?"replace":"push"](n||r,{forceOptimisticNavigation:!s,scroll:e})};f?o.default.startTransition(navigate):navigate()}function formatStringOrUrl(e){return"string"==typeof e?e:(0,a.formatUrl)(e)}let b=o.default.forwardRef(function(e,t){let r,n;let{href:l,as:a,children:y,prefetch:b=null,passHref:g,replace:k,shallow:m,scroll:_,locale:C,onClick:O,onMouseEnter:E,onTouchStart:M,legacyBehavior:P=!1,...j}=e;r=y,P&&("string"==typeof r||"number"==typeof r)&&(r=o.default.createElement("a",null,r));let A=o.default.useContext(f.RouterContext),R=o.default.useContext(s.AppRouterContext),L=null!=A?A:R,T=!A,I=!1!==b,w=null===b?v.PrefetchKind.AUTO:v.PrefetchKind.FULL,{href:x,as:N}=o.default.useMemo(()=>{if(!A){let e=formatStringOrUrl(l);return{href:e,as:a?formatStringOrUrl(a):e}}let[e,t]=(0,u.resolveHref)(A,l,!0);return{href:e,as:a?(0,u.resolveHref)(A,a):t||e}},[A,l,a]),S=o.default.useRef(x),Z=o.default.useRef(N);P&&(n=o.default.Children.only(r));let U=P?n&&"object"==typeof n&&n.ref:t,[K,D,F]=(0,d.useIntersection)({rootMargin:"200px"}),H=o.default.useCallback(e=>{(Z.current!==N||S.current!==x)&&(F(),Z.current=N,S.current=x),K(e),U&&("function"==typeof U?U(e):"object"==typeof U&&(U.current=e))},[N,U,x,F,K]);o.default.useEffect(()=>{L&&D&&I&&prefetch(L,x,N,{locale:C},{kind:w},T)},[N,x,D,C,I,null==A?void 0:A.locale,L,T,w]);let q={ref:H,onClick(e){P||"function"!=typeof O||O(e),P&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(e),L&&!e.defaultPrevented&&linkClicked(e,L,x,N,k,m,_,C,T,I)},onMouseEnter(e){P||"function"!=typeof E||E(e),P&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),L&&(I||!T)&&prefetch(L,x,N,{locale:C,priority:!0,bypassPrefetchedCheck:!0},{kind:w},T)},onTouchStart(e){P||"function"!=typeof M||M(e),P&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),L&&(I||!T)&&prefetch(L,x,N,{locale:C,priority:!0,bypassPrefetchedCheck:!0},{kind:w},T)}};if((0,i.isAbsoluteUrl)(N))q.href=N;else if(!P||g||"a"===n.type&&!("href"in n.props)){let e=void 0!==C?C:null==A?void 0:A.locale,t=(null==A?void 0:A.isLocaleDomain)&&(0,p.getDomainLocale)(N,e,null==A?void 0:A.locales,null==A?void 0:A.domainLocales);q.href=t||(0,h.addBasePath)((0,c.addLocale)(N,e,null==A?void 0:A.defaultLocale))}return P?o.default.cloneElement(n,q):o.default.createElement("a",{...j,...q},r)}),g=b;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7322:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return useIntersection}});let n=r(959),o=r(4379),u="function"==typeof IntersectionObserver,l=new Map,a=[];function createObserver(e){let t;let r={root:e.root||null,margin:e.rootMargin||""},n=a.find(e=>e.root===r.root&&e.margin===r.margin);if(n&&(t=l.get(n)))return t;let o=new Map,u=new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e);return t={id:r,observer:u,elements:o},a.push(r),l.set(r,t),t}function observe(e,t,r){let{id:n,observer:o,elements:u}=createObserver(r);return u.set(e,t),o.observe(e),function(){if(u.delete(e),o.unobserve(e),0===u.size){o.disconnect(),l.delete(n);let e=a.findIndex(e=>e.root===n.root&&e.margin===n.margin);e>-1&&a.splice(e,1)}}}function useIntersection(e){let{rootRef:t,rootMargin:r,disabled:l}=e,a=l||!u,[i,c]=(0,n.useState)(!1),f=(0,n.useRef)(null),s=(0,n.useCallback)(e=>{f.current=e},[]);(0,n.useEffect)(()=>{if(u){if(a||i)return;let e=f.current;if(e&&e.tagName){let n=observe(e,e=>e&&c(e),{root:null==t?void 0:t.current,rootMargin:r});return n}}else if(!i){let e=(0,o.requestIdleCallback)(()=>c(!0));return()=>(0,o.cancelIdleCallback)(e)}},[a,r,t,i,f.current]);let d=(0,n.useCallback)(()=>{c(!1)},[]);return[s,i,d]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3522:function(e,t,r){e.exports=r(3610)},1557:function(e,t,r){e.exports=r(3360)}}]);