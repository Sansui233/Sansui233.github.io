(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[106],{1109:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/memos",function(){return t(4985)}])},9149:function(n,e,t){"use strict";var r=t(5893),o=t(1664),i=t.n(o),c=(t(7294),t(2125));function a(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function s(){var n=a(["\n  margin: 64px 0;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  align-items: center;\n\n  & > span {\n    color: ",";\n    font-size: 0.875rem;\n  }\n"]);return s=function(){return n},n}function u(){var n=a(["\n  padding: .2em 0;\n  display: flex;\n  align-items: center;\n  position: relative;\n  i {\n    transform: translateY(-0.1em);\n  }\n\n  span {\n    position: relative;\n  }\n\n  span::before {\n    content: '';\n    position: absolute;\n    left: 0;\n    bottom: 0;\n    width: 0;\n    height: 2px;\n    background: ",";\n    transition: width 1s cubic-bezier(0.34, 0.04, 0.03, 1.4), background .3s;\n  }\n    \n  span:hover::before {\n    width: 100%;\n  }\n"]);return u=function(){return n},n}var l=c.ZP.div.withConfig({componentId:"sc-feed8a45-0"})(s(),(function(n){return n.theme.colors.textGray})),f=c.ZP.a.withConfig({componentId:"sc-feed8a45-1"})(u(),(function(n){return n.theme.colors.gold}));e.Z=function(n){return(0,r.jsxs)(l,{children:[n.prevPage&&(0,r.jsx)("div",{style:{flex:"1 1 auto"},children:(0,r.jsx)(i(),{href:n.prevPage.link,passHref:!0,children:(0,r.jsx)(f,{style:{justifyContent:"flex-start"},children:(0,r.jsxs)("span",{children:[(0,r.jsx)("i",{className:"icon-arrow-left2"}),"\xa0",n.prevPage.title]})})})}),(0,r.jsx)("span",{children:n.currTitle?n.currTitle:""}),n.nextPage&&(0,r.jsx)("div",{style:{flex:"1 1 auto"},children:(0,r.jsx)(i(),{href:n.nextPage.link,passHref:!0,children:(0,r.jsx)(f,{style:{justifyContent:"flex-end"},children:(0,r.jsxs)("span",{children:[n.nextPage.title,"\xa0",(0,r.jsx)("i",{className:"icon-arrow-right2"})]})})})})]})}},7494:function(n,e,t){"use strict";var r=t(5893),o=t(5885),i=(t(2274),t(7294)),c=t(2125),a=t(9133);function s(){var n,e,t=(n=["\n  position: relative;\n  --waline-theme-color: ",";\n  --waline-bgcolor: ",";\n  --waline-color: ",";\n  --waline-active-color: ",";\n  --waline-bgcolor-light: #99999915;\n  --waline-border: 1px solid #99999966;\n  --waline-border-color: #99999966;\n  --waline-info-bgcolor: #99999915;\n  .wl-avatar {\n    margin: 0 .5rem;\n  }\n  .wl-card .wl-meta {\n    display: none;\n  }\n\n  .wl-btn.primary {\n    background: ",";\n    color:",";\n  }\n  .wl-gif-popup {\n    .wl-gallery-column {\n      display: grid !important;\n      grid-template-columns: 1fr 1fr;\n      max-height: 200px;\n    }\n    img {\n      width: unset !important;\n      height: unset !important;\n      border-color: ",";\n    }\n    input {\n      background: ",";\n      color: ",";\n    }\n  }\n\n\n  // @media screen and (max-width:580px) {\n  //   .wl-footer {\n  //     margin: unset;\n  //     padding: 0.5rem 0.75rem;\n  //   }\n  \n  //   .wl-gif-popup {\n  //     width: 100%;\n  //     left: 0;\n  //     padding: 0;\n  //   }\n  // }\n\n"],e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}})));return s=function(){return t},t}var u=c.ZP.div.withConfig({componentId:"sc-bf67c1e3-0"})(s(),(function(n){return n.theme.colors.bgInverse}),(function(n){return n.theme.colors.bg}),(function(n){return n.theme.colors.textGray}),(function(n){return n.theme.colors.gold}),(function(n){return n.theme.colors.bgInverse}),(function(n){return n.theme.colors.bg}),(function(n){return n.theme.colors.bg}),(function(n){return n.theme.colors.bg}),(function(n){return n.theme.colors.textPrimary}));e.Z=function(){return(0,i.useEffect)((function(){(0,o.S1)({el:"#waline",serverURL:a.d.walineApi,path:window.location.pathname})}),[]),(0,r.jsx)(u,{id:"waline",children:"Waline"})}},4985:function(n,e,t){"use strict";t.r(e),t.d(e,{__N_SSG:function(){return Z},default:function(){return _}});var r=t(4051),o=t.n(r),i=t(5893),c=t(3659),a=t(9024),s=t(9008),u=t.n(s),l=t(1163),f=t(7294),d=t(434),m=t(2125),p=t(3073),h=t(6780),g=t(9149),b=t(7494),v=t(1005),x=t(8226),w=t(4193);function j(n,e,t,r,o,i,c){try{var a=n[i](c),s=a.value}catch(u){return void t(u)}a.done?e(s):Promise.resolve(s).then(r,o)}function y(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function P(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})))),r.forEach((function(e){y(n,e,t[e])}))}return n}function O(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function k(){var n=O(["\n  max-width: 720px;\n"]);return k=function(){return n},n}function C(){var n=O(["\n  \n"]);return C=function(){return n},n}function z(){var n=O(["\n  position: relative;\n  max-height: ",";\n  overflow: hidden;\n  margin: 2rem 0;\n  animation: "," 1s ease;\n  h2.title {\n    text-align: center;\n    font-size: 1.5rem;\n    margin-top: 2.5rem;\n  }\n"]);return z=function(){return n},n}function N(){var n=O(["\n    display: ",";\n    position: absolute;\n    bottom: 0;\n    width: 100%;\n    height: 7rem;\n    cursor: pointer;\n    text-align: center;\n    ","\n\n    .rd-more {\n      margin-top: 5.375rem;\n      font-size: 0.875rem;\n      padding: 0.2rem 0;\n      span {\n        ","\n        transition: box-shadow .3s;\n      }\n    }\n\n    &:hover .rd-more span {\n      ","\n    }\n   \n"]);return N=function(){return n},n}function S(){var n=O(["\n    padding-bottom: ",";\n    h1,h2,h3,h4,h5,h6 {\n      font-size: 1rem;\n    }\n"]);return S=function(){return n},n}var Z=!0;function _(n){var e=n.memoposts,t=n.pagelimit,r=(0,l.useRouter)(),c=(0,f.useState)(e),s=c[0],m=c[1];(0,f.useEffect)((function(){var n=0;"string"!==typeof r.query.p||NaN!==(n=parseInt(r.query.p))?fetch("".concat("/data/memos","/").concat(n,".json")).then((function(n){return n.json()})).then((function(n){var e=n,t=Promise.all(e.map(function(){var n,e=(n=o().mark((function n(e){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,a.q)(e.content,{mdxOptions:{remarkPlugins:[d.Z]}});case 2:return t=n.sent,n.abrupt("return",{title:e.title,content:t});case 4:case"end":return n.stop()}}),n)})),function(){var e=this,t=arguments;return new Promise((function(r,o){var i=n.apply(e,t);function c(n){j(i,r,o,c,a,"next",n)}function a(n){j(i,r,o,c,a,"throw",n)}c(void 0)}))});return function(n){return e.apply(this,arguments)}}()));return t})).then((function(n){m(n)})).catch(console.error):console.error("Wrong query p=",r.query.p)}),[r.query]);var v=function(){if("string"===typeof r.query.p){var n=parseInt(r.query.p);if(NaN!==n)return n}return 0}();return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(u(),{children:[(0,i.jsx)("title",{children:"Sansui - Memos"}),(0,i.jsx)(p.CommonHeader,{})]}),(0,i.jsx)(h.Z,{children:(0,i.jsxs)(E,{children:[(0,i.jsx)(q,{style:{marginBottom:"-2rem"},children:"| \u8bb0\u5f55\u788e\u788e\u5ff5\u662f\u574f\u4e60\u60ef |"}),s.map((function(n){return(0,i.jsx)(I,{memoPost:n},n.title)})),(0,i.jsx)(g.Z,{currTitle:"PAGE ".concat(v+1),prevPage:v>0?{title:"PREV",link:"/memos?p=".concat(v-1)}:void 0,nextPage:v+1<t?{title:"NEXT",link:"/memos?p=".concat(v+1)}:void 0}),(0,i.jsx)(b.Z,{})]})})]})}function I(n){var e=n.memoPost,t=(0,f.useState)(!0),r=t[0],o=t[1],a=e.content.compiledSource.length>1111;return(0,i.jsxs)(G,{isCollapse:!1!==a&&r,children:[(0,i.jsx)("h2",{className:"title",children:e.title}),(0,i.jsx)(T,{bottomSpace:a,children:(0,i.jsx)(c.R,P({},e.content))}),(0,i.jsx)(H,{onClick:function(n){o(!r)},isCollapse:r,isShown:a,children:(0,i.jsx)("div",{className:"rd-more",children:(0,i.jsx)("span",{children:r?"SHOW MORE":"Hide"})})})]})}var E=(0,m.ZP)(p.MainLayoutStyle).withConfig({componentId:"sc-4d72b5eb-0"})(k()),q=(0,m.ZP)(p.PageDescription).withConfig({componentId:"sc-4d72b5eb-1"})(C()),G=m.ZP.section.withConfig({componentId:"sc-4d72b5eb-2"})(z(),(function(n){return!0===n.isCollapse?"19rem":"unset"}),v.r$),H=m.ZP.div.withConfig({componentId:"sc-4d72b5eb-3"})(N(),(function(n){return!0===n.isShown?"block":"none"}),(function(n){return!0===n.isCollapse?n.theme.colors.memoGradient:""}),(function(){return w.FQ.s}),(function(){return w.FQ.f})),T=(0,m.ZP)(x.j).withConfig({componentId:"sc-4d72b5eb-4"})(S(),(function(n){return!0===n.bottomSpace?"2rem":"inherit"}))},8226:function(n,e,t){"use strict";function r(){var n,e,t=(n=["\n  text-align: justify;\n\n  @media screen and (max-width: 580px){\n    text-align: unset;\n  }\n\n  img, picture, video, canvas, svg, pre{\n    margin: 1.625rem 0;\n  }\n\n  p,ul,ol {\n    line-height: 1.8rem;\n    margin: 1.5rem 0;\n  }\n\n  blockquote {\n    margin: 1.625rem 0;\n  }\n\n  a {\n    position: relative;\n    font-weight: 500;\n    border-bottom: 1px solid ",";\n    transition: box-shadow .5s;\n  }\n\n  a:hover {\n    box-shadow: inset 0 -0.5em 0 ",";\n  }\n  \n  code {\n    background-color: ",";\n    font-size: 0.95rem;\n    border-radius: 3px;\n    padding: 0 0.25rem;\n    margin: 0 1px;\n  }\n\n  pre code {\n    font-size: 0.875rem;\n    border-radius: unset;\n    padding: 1rem 2rem;\n    margin: unset;\n    overflow: auto;\n  }\n\n  blockquote {\n    border-left: solid 2px;\n    padding-left: 1.875em;\n    color: ",";\n  }\n\n  del {\n    opacity: .33;\n  }\n\n  ul li {\n    display: block;\n    position: relative;\n  }\n  ul li::before {\n    content:'';\n    position: absolute;\n    top: .6em;\n    height: .4em;\n    width: .4em;\n    border-radius: 1em;\n    border: solid 1px ",";\n    left: -1.5rem;\n  }\n\n"],e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}})));return r=function(){return t},t}t.d(e,{j:function(){return o}});var o=t(2125).ZP.div.withConfig({componentId:"sc-8c18945a-0"})(r(),(function(n){return n.theme.colors.gold}),(function(n){return n.theme.colors.goldHover}),(function(n){return n.theme.colors.codeBlockBg}),(function(n){return n.theme.colors.textGray}),(function(n){return n.theme.colors.gold}))}},function(n){n.O(0,[688,880,772,996,546,571,73,774,888,179],(function(){return e=1109,n(n.s=e);var e}));var e=n.O();_N_E=e}]);