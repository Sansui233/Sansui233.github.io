(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[646],{7411:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts/[id]",function(){return t(1209)}])},9149:function(n,e,t){"use strict";var r=t(5893),o=t(1664),i=t.n(o),c=(t(7294),t(2125));function s(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function a(){var n=s(["\n  margin: 64px 0;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  align-items: center;\n\n  & > span {\n    color: ",";\n    font-size: 0.875rem;\n  }\n"]);return a=function(){return n},n}function l(){var n=s(["\n  padding: .2em 0;\n  display: flex;\n  align-items: center;\n  position: relative;\n  i {\n    transform: translateY(-0.1em);\n  }\n\n  span {\n    position: relative;\n  }\n\n  span::before {\n    content: '';\n    position: absolute;\n    left: 0;\n    bottom: 0;\n    width: 0;\n    height: 2px;\n    background: ",";\n    transition: width 1s cubic-bezier(0.34, 0.04, 0.03, 1.4), background .3s;\n  }\n    \n  span:hover::before {\n    width: 100%;\n  }\n"]);return l=function(){return n},n}var u=c.ZP.div.withConfig({componentId:"sc-feed8a45-0"})(a(),(function(n){return n.theme.colors.textGray})),d=c.ZP.a.withConfig({componentId:"sc-feed8a45-1"})(l(),(function(n){return n.theme.colors.gold}));e.Z=function(n){return(0,r.jsxs)(u,{children:[n.prevPage&&(0,r.jsx)("div",{style:{flex:"1 1 auto"},children:(0,r.jsx)(i(),{href:n.prevPage.link,passHref:!0,children:(0,r.jsx)(d,{style:{justifyContent:"flex-start"},children:(0,r.jsxs)("span",{children:[(0,r.jsx)("i",{className:"icon-arrow-left2"}),"\xa0",n.prevPage.title]})})})}),(0,r.jsx)("span",{children:n.currTitle?n.currTitle:""}),n.nextPage&&(0,r.jsx)("div",{style:{flex:"1 1 auto"},children:(0,r.jsx)(i(),{href:n.nextPage.link,passHref:!0,children:(0,r.jsx)(d,{style:{justifyContent:"flex-end"},children:(0,r.jsxs)("span",{children:[n.nextPage.title,"\xa0",(0,r.jsx)("i",{className:"icon-arrow-right2"})]})})})})]})}},7494:function(n,e,t){"use strict";var r=t(5893),o=t(7294),i=t(5885),c=(t(2274),t(9133));function s(){var n,e,t=(n=["\n  position: relative;\n  --waline-theme-color: ",";\n  --waline-bgcolor: ",";\n  --waline-color: ",";\n  --waline-active-color: ",";\n  --waline-bgcolor-light: #99999915;\n  --waline-border: 1px solid #99999966;\n  --waline-border-color: #99999966;\n  --waline-info-bgcolor: #99999915;\n  .wl-avatar {\n    margin: 0 .5rem;\n  }\n  .wl-card .wl-meta {\n    display: none;\n  }\n\n  .wl-btn.primary {\n    background: ",";\n    color:",";\n  }\n  .wl-gif-popup {\n    .wl-gallery-column {\n      display: grid !important;\n      grid-template-columns: 1fr 1fr;\n      max-height: 200px;\n    }\n    img {\n      width: unset !important;\n      height: unset !important;\n      border-color: ",";\n    }\n    input {\n      background: ",";\n      color: ",";\n    }\n  }\n\n\n  // @media screen and (max-width:580px) {\n  //   .wl-footer {\n  //     margin: unset;\n  //     padding: 0.5rem 0.75rem;\n  //   }\n  \n  //   .wl-gif-popup {\n  //     width: 100%;\n  //     left: 0;\n  //     padding: 0;\n  //   }\n  // }\n\n"],e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}})));return s=function(){return t},t}var a=t(2125).ZP.div.withConfig({componentId:"sc-b6b86be8-0"})(s(),(function(n){return n.theme.colors.bgInverse}),(function(n){return n.theme.colors.bg}),(function(n){return n.theme.colors.textGray}),(function(n){return n.theme.colors.gold}),(function(n){return n.theme.colors.bgInverse}),(function(n){return n.theme.colors.bg}),(function(n){return n.theme.colors.bg}),(function(n){return n.theme.colors.bg}),(function(n){return n.theme.colors.textPrimary}));e.Z=function(){return(0,o.useEffect)((function(){(0,i.S1)({el:"#waline",serverURL:c.w.walineApi,path:window.location.pathname})}),[]),(0,r.jsx)(a,{id:"waline",children:"Waline"})}},1209:function(n,e,t){"use strict";t.r(e),t.d(e,{__N_SSG:function(){return y},default:function(){return P}});var r=t(5893),o=t(2125),i=t(8226),c=t(3073),s=t(3659),a=t(9008),l=t.n(a),u=t(8190),d=t(1664),f=t.n(d),m=t(4193),p=t(9149),h=t(7494);function g(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function x(){var n=g(["\n  max-width: 750px;\n  margin-top: 72px;\n"]);return x=function(){return n},n}function b(){var n=g(["\n  margin-bottom: 3rem;\n  h1 {\n    margin-top: .3rem;\n    margin-bottom: 0.5rem;\n  }\n"]);return b=function(){return n},n}function w(){var n=g(["\n  font-size: 0.875rem;\n  position: relative;\n  ::before {\n    content:'';\n    position: absolute;\n    top: -.8em;\n    left: 0;\n    height: 1px;\n    width: 133%;\n    background: ",";\n  }\n  // border-top: 1px solid;\n"]);return w=function(){return n},n}function v(){var n=g(["\ncolor: ",";\n  transition: opacity .3s, color .3s;\n\n  &:hover {\n    color: ",";\n  }\n"]);return v=function(){return n},n}function j(){var n=g(["\n  ","\n  transition: box-shadow 0.5s ease;\n\n  :hover {\n    ","\n  }\n\n"]);return j=function(){return n},n}var y=!0;function P(n){var e,t=n.mdxSource,o=n.nextPost,a=n.prevPost,d=t.frontmatter,m=t.compiledSource;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(l(),{children:[(0,r.jsx)("title",{children:d.title}),(0,r.jsx)(c.CommonHeader,{})]}),(0,r.jsx)(u.Z,{children:(0,r.jsxs)(k,{children:[(0,r.jsxs)(_,{children:[(0,r.jsx)("h1",{children:d.title}),(0,r.jsxs)(z,{children:[d.date," | ",(e=d.tags,e="string"===typeof e?[e]:e,(0,r.jsx)(r.Fragment,{children:e.map((function(n){return(0,r.jsx)(f(),{href:"/tags/".concat(n),passHref:!0,children:(0,r.jsx)(C,{children:"#".concat(n," ")})},n)}))}))," in ",(0,r.jsx)(f(),{href:"/categories/".concat(d.categories),passHref:!0,children:(0,r.jsx)(O,{children:d.categories})})]})]}),(0,r.jsx)(i.j,{children:(0,r.jsx)(s.R,{compiledSource:m})}),(0,r.jsxs)("div",{style:{textAlign:"right",opacity:.5,fontSize:"0.875rem",margin:"4rem 0 2rem 0"},children:["\u66f4\u65b0\u4e8e ",d.date]}),(0,r.jsx)(p.Z,{nextPage:o||void 0,prevPage:a||void 0}),(0,r.jsx)(h.Z,{})]})})]})}var k=(0,o.ZP)(c.MainLayoutStyle).withConfig({componentId:"sc-c06086c8-0"})(x()),_=o.ZP.div.withConfig({componentId:"sc-c06086c8-1"})(b()),z=o.ZP.span.withConfig({componentId:"sc-c06086c8-2"})(w(),(function(n){return n.theme.colors.gold})),C=o.ZP.a.withConfig({componentId:"sc-c06086c8-3"})(v(),(function(n){return n.theme.colors.textGray}),(function(n){return n.theme.colors.gold})),O=o.ZP.a.withConfig({componentId:"sc-c06086c8-4"})(j(),(function(){return m.FQ.s}),(function(){return m.FQ.f}))},8226:function(n,e,t){"use strict";function r(){var n,e,t=(n=["\n  text-align: justify;\n\n  @media screen and (max-width: 580px){\n    text-align: unset;\n  }\n\n  img, picture, video, canvas, svg, pre{\n    margin: 1.625rem 0;\n  }\n\n  p,ul,ol {\n    line-height: 1.8rem;\n    margin: 1.5rem 0;\n  }\n\n  blockquote {\n    margin: 1.625rem 0;\n  }\n\n  a {\n    position: relative;\n    font-weight: 500;\n    border-bottom: 1px solid ",";\n    transition: box-shadow .5s;\n  }\n\n  a:hover {\n    box-shadow: inset 0 -0.5em 0 ",";\n  }\n  \n  code {\n    background-color: ",";\n    font-size: 0.95rem;\n    border-radius: 3px;\n    padding: 0 0.25rem;\n    margin: 0 1px;\n  }\n\n  pre code {\n    font-size: 0.875rem;\n    border-radius: unset;\n    padding: 1rem 2rem;\n    margin: unset;\n    overflow: auto;\n  }\n\n  blockquote {\n    border-left: solid 2px;\n    padding-left: 1.875em;\n    color: ",";\n  }\n\n  del {\n    opacity: .33;\n  }\n\n  ul li {\n    display: block;\n    position: relative;\n  }\n  ul li::before {\n    content:'';\n    position: absolute;\n    top: .6em;\n    height: .4em;\n    width: .4em;\n    border-radius: 1em;\n    border: solid 1px ",";\n    left: -1.5rem;\n  }\n\n"],e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}})));return r=function(){return t},t}t.d(e,{j:function(){return o}});var o=t(2125).ZP.div.withConfig({componentId:"sc-8c18945a-0"})(r(),(function(n){return n.theme.colors.gold}),(function(n){return n.theme.colors.goldHover}),(function(n){return n.theme.colors.codeBlockBg}),(function(n){return n.theme.colors.textGray}),(function(n){return n.theme.colors.gold}))}},function(n){n.O(0,[688,996,546,73,774,888,179],(function(){return e=7411,n(n.s=e);var e}));var e=n.O();_N_E=e}]);