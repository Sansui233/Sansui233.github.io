(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[106],{1109:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/memos",function(){return t(4985)}])},4985:function(n,e,t){"use strict";t.r(e),t.d(e,{__N_SSG:function(){return j},default:function(){return C}});var r=t(5893),o=t(9008),i=t.n(o),c=t(2125),u=t(8226),s=t(7294),a=t(3073),l=t(3659),f=t(6437),d=t(4193);function m(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function p(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})))),r.forEach((function(e){m(n,e,t[e])}))}return n}function h(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function b(){var n=h(["\n  max-width: 720px;\n"]);return b=function(){return n},n}function g(){var n=h(["\n  margin-bottom: -2rem;\n"]);return g=function(){return n},n}function w(){var n=h(["\n  position: relative;\n  max-height: ",";\n  overflow: hidden;\n  margin: 2rem 0;\n  h2.title {\n    text-align: center;\n    font-size: 1.5rem;\n    margin-top: 2.5rem;\n  }\n"]);return w=function(){return n},n}function v(){var n=h(["\n    display: ",";\n    position: absolute;\n    bottom: 0;\n    width: 100%;\n    height: 7rem;\n    cursor: pointer;\n    text-align: center;\n    ","\n\n    .rd-more {\n      margin-top: 5.375rem;\n      font-size: 0.875rem;\n      padding: 0.2rem 0;\n      span {\n        ","\n        transition: box-shadow .3s;\n      }\n    }\n\n    &:hover .rd-more span {\n      ","\n    }\n   \n"]);return v=function(){return n},n}function x(){var n=h(["\n    padding-bottom: ",";\n    h1,h2,h3,h4,h5,h6 {\n      font-size: 1rem;\n    }\n"]);return x=function(){return n},n}var j=!0;function C(n){var e=n.memoposts;return(0,r.jsxs)("div",{children:[(0,r.jsxs)(i(),{children:[(0,r.jsx)("title",{children:"Sansui - Memos"}),(0,r.jsx)(a.CommonHeader,{})]}),(0,r.jsx)(f.Z,{children:(0,r.jsxs)(O,{children:[(0,r.jsx)(k,{children:"| \u8bb0\u5f55\u788e\u788e\u5ff5\u662f\u574f\u4e60\u60ef |"}),e.map((function(n){return(0,r.jsx)(y,{memoPost:n},n.title)}))]})})]})}function y(n){var e=n.memoPost,t=(0,s.useState)(!0),o=t[0],i=t[1],c=e.content.compiledSource.length>1100;return(0,r.jsxs)(P,{isCollapse:o,children:[(0,r.jsx)("h2",{className:"title",children:e.title}),(0,r.jsx)(S,{bottomSpace:c,children:(0,r.jsx)(l.R,p({},e.content))}),(0,r.jsx)(_,{onClick:function(n){i(!o)},isCollapse:o,isShown:c,children:(0,r.jsx)("div",{className:"rd-more",children:(0,r.jsx)("span",{children:o?"SHOW MORE":"Hide"})})})]})}var O=(0,c.ZP)(a.MainLayoutStyle).withConfig({componentId:"sc-c3f16c2b-0"})(b()),k=(0,c.ZP)(a.PageDescription).withConfig({componentId:"sc-c3f16c2b-1"})(g()),P=c.ZP.section.withConfig({componentId:"sc-c3f16c2b-2"})(w(),(function(n){return!0===n.isCollapse?"18rem":"unset"})),_=c.ZP.div.withConfig({componentId:"sc-c3f16c2b-3"})(v(),(function(n){return!0===n.isShown?"block":"none"}),(function(n){return!0===n.isCollapse?n.theme.colors.memoGradient:""}),(function(){return d.FQ.s}),(function(){return d.FQ.f})),S=(0,c.ZP)(u.j).withConfig({componentId:"sc-c3f16c2b-4"})(x(),(function(n){return!0===n.bottomSpace?"2rem":"inherit"}))},8226:function(n,e,t){"use strict";function r(){var n,e,t=(n=["\n  text-align: justify;\n\n  @media screen and (max-width: 580px){\n    text-align: unset;\n  }\n\n  img, picture, video, canvas, svg, pre{\n    margin: 1.625rem 0;\n  }\n\n  p,ul,ol {\n    line-height: 1.8rem;\n    margin: 1.125rem 0;\n  }\n\n  blockquote {\n    margin: 1.625rem 0;\n  }\n\n  a {\n    position: relative;\n    font-weight: 600;\n  }\n\n  a::before {\n    content: '';\n    position: absolute;\n    left: 0;\n    bottom: -0.125em;\n    width: 100%;\n    height: 0;\n    background: ",";\n    border-bottom: 1px solid gray;\n    transition: height .5s ease;\n  }\n  \n  a:hover::before {\n    height: 1.25em;\n  }\n\n  code {\n    background-color: ",";\n    font-size: 0.95rem;\n    border-radius: 3px;\n    padding: 0 0.25rem;\n    margin: 0 1px;\n  }\n\n  pre code {\n    font-size: 0.875rem;\n    border-radius: unset;\n    padding: 1rem 2rem;\n    margin: unset;\n  }\n\n  blockquote {\n    border-left: solid 2px;\n    padding-left: 1.875em;\n    color: ",";\n  }\n\n  del {\n    opacity: .33;\n  }\n\n  li {\n    display: block;\n    position: relative;\n  }\n  li::before {\n    content:'';\n    position: absolute;\n    top: .6em;\n    height: .4em;\n    width: .4em;\n    border-radius: 1em;\n    border: solid 1px ",";\n    left: -1.5rem;\n  }\n\n"],e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}})));return r=function(){return t},t}t.d(e,{j:function(){return o}});var o=t(2125).ZP.div.withConfig({componentId:"sc-3a0233ea-0"})(r(),(function(n){return n.theme.colors.hoverBg}),(function(n){return n.theme.colors.codeBlockBg}),(function(n){return n.theme.colors.textGray}),(function(n){return n.theme.colors.gold}))},2746:function(n,e,t){const r=t(5893);n.exports.c=r},3659:function(n,e,t){"use strict";t.d(e,{R:function(){return f}});var r={};t.r(r),t.d(r,{MDXContext:function(){return c},MDXProvider:function(){return l},useMDXComponents:function(){return s},withMDXComponents:function(){return u}});var o=t(7294),i=t(2746);const c=o.createContext({});function u(n){return function(e){const t=s(e.components);return o.createElement(n,{...e,allComponents:t})}}function s(n){const e=o.useContext(c);return o.useMemo((()=>"function"===typeof n?n(e):{...e,...n}),[e,n])}const a={};function l({components:n,children:e,disableParentContext:t}){let r=s(n);return t&&(r=n||a),o.createElement(c.Provider,{value:r},e)}function f({compiledSource:n,frontmatter:e,scope:t,components:c={},lazy:u}){const[s,a]=(0,o.useState)(!u||"undefined"===typeof window);(0,o.useEffect)((()=>{if(u){const n=window.requestIdleCallback((()=>{a(!0)}));return()=>window.cancelIdleCallback(n)}}),[]);const f=(0,o.useMemo)((()=>{const o=Object.assign({opts:{...r,...i.c}},{frontmatter:e},t),c=Object.keys(o),u=Object.values(o),s=Reflect.construct(Function,c.concat(`${n}`));return s.apply(s,u).default}),[t,n]);if(!s)return o.createElement("div",{dangerouslySetInnerHTML:{__html:""},suppressHydrationWarning:!0});const d=o.createElement(l,{components:c},o.createElement(f,null));return u?o.createElement("div",null,d):d}"undefined"!==typeof window&&(window.requestIdleCallback=window.requestIdleCallback||function(n){var e=Date.now();return setTimeout((function(){n({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-e))}})}),1)},window.cancelIdleCallback=window.cancelIdleCallback||function(n){clearTimeout(n)})}},function(n){n.O(0,[814,73,774,888,179],(function(){return e=1109,n(n.s=e);var e}));var e=n.O();_N_E=e}]);