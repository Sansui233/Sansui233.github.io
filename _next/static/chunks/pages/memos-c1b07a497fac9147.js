(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[106],{3420:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/memos",function(){return t(3027)}])},1685:function(n,e,t){"use strict";t.d(e,{p:function(){return m},j:function(){return u}});var o=t(2095),i=t(1527),r=t(959),s=t(8598);function l(){let n=(0,o._)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  background: #000000de;\n  z-index: 10;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: zoom-out;\n\n  & img.model {\n    display:block;\n  }\n\n  @media screen and (min-width: 780px) {\n    & img.model {\n    }\n  }\n\n"]);return l=function(){return n},n}let a=s.zo.div(l());var c=n=>{let{imgProps:e,isModel:t,setModel:o}=n;return(0,i.jsxs)(a,{$isOpen:t,onClick:n=>o(!1),children:[" ",(0,i.jsx)("img",{loading:"lazy",className:"model",...e})," "]})};function d(){let n=(0,o._)(["\n  text-align: justify;\n\n  @media screen and (max-width: 580px){\n    text-align: unset;\n  }\n\n  img, picture, video, canvas, svg, pre{\n    margin: 1.625rem auto;\n    display: block;\n  }\n\n  p,ul,ol {\n    line-height: 1.8rem;\n    margin: 1.5rem 0;\n  }\n\n  blockquote {\n    margin: 1.625rem 0;\n  }\n\n  a {\n    position: relative;\n    font-weight: 500;\n    border-bottom: 1px solid ",";\n    transition: box-shadow .5s;\n  }\n\n  a:hover {\n    box-shadow: inset 0 -0.5em 0 ",";\n  }\n  \n  code {\n    background-color: ",";\n    font-size: 0.95rem;\n    border-radius: 3px;\n    padding: 0 0.25rem;\n    margin: 0 1px;\n  }\n\n  pre code {\n    font-size: 0.875rem;\n    border-radius: unset;\n    padding: 1rem 2rem;\n    margin: unset;\n    overflow: auto;\n  }\n\n  blockquote {\n    border-left: solid 2px;\n    padding-left: 1.875em;\n    color: ",";\n  }\n\n  del {\n    opacity: .33;\n  }\n\n  ul li {\n    display: block;\n    position: relative;\n  }\n  ul li::before {\n    content:'';\n    position: absolute;\n    top: .6em;\n    height: .4em;\n    width: .4em;\n    border-radius: 1em;\n    border: solid 1px ",";\n    left: -1.5rem;\n  }\n\n"]);return d=function(){return n},n}function m(n){let[e,t]=(0,r.useState)(!1);return(0,i.jsxs)(i.Fragment,{children:[e?(0,i.jsx)(c,{imgProps:n,isModel:e,setModel:t}):void 0,(0,i.jsx)("img",{loading:"lazy",...n,onClick:()=>t(!0),style:{cursor:"zoom-in"}})]})}let u=s.ZP.div.withConfig({componentId:"sc-389d00ff-0"})(d(),n=>n.theme.colors.gold,n=>n.theme.colors.goldHover,n=>n.theme.colors.codeBlockBg,n=>n.theme.colors.textGray,n=>n.theme.colors.gold)},3247:function(n,e,t){"use strict";var o=t(2095),i=t(1527),r=t(9050),s=t.n(r);t(959);var l=t(8598);function a(){let n=(0,o._)(["\n  margin: 64px 0;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  align-items: center;\n\n  & > span {\n    color: ",";\n    font-size: 0.875rem;\n  }\n"]);return a=function(){return n},n}function c(){let n=(0,o._)(["\n  padding: .2em 0;\n  display: flex;\n  align-items: center;\n  position: relative;\n  i {\n    transform: translateY(-0.1em);\n  }\n\n  span {\n    position: relative;\n  }\n\n  span::before {\n    content: '';\n    position: absolute;\n    left: 0;\n    bottom: 0;\n    width: 0;\n    height: 2px;\n    background: ",";\n    transition: width 1s cubic-bezier(0.34, 0.04, 0.03, 1.4), background .3s;\n  }\n    \n  span:hover::before {\n    width: 100%;\n  }\n"]);return c=function(){return n},n}let d=l.ZP.div.withConfig({componentId:"sc-54a30f6f-0"})(a(),n=>n.theme.colors.textGray),m=(0,l.ZP)(s()).withConfig({componentId:"sc-54a30f6f-1"})(c(),n=>n.theme.colors.gold);e.Z=n=>(0,i.jsxs)(d,{children:[n.prevPage&&(0,i.jsx)("div",{style:{flex:"1 1 auto"},children:(0,i.jsx)(m,{href:n.prevPage.link,passHref:!0,style:{justifyContent:"flex-start"},children:(0,i.jsxs)("span",{children:[(0,i.jsx)("i",{className:"icon-arrow-left2"}),"\xa0",n.prevPage.title]})})}),(0,i.jsx)("span",{children:n.currTitle?n.currTitle.concat(n.maxPage?" / ".concat(n.maxPage):""):""}),n.nextPage&&(0,i.jsx)("div",{style:{flex:"1 1 auto"},children:(0,i.jsx)(m,{href:n.nextPage.link,passHref:!0,style:{justifyContent:"flex-end"},children:(0,i.jsxs)("span",{children:[n.nextPage.title,"\xa0",(0,i.jsx)("i",{className:"icon-arrow-right2"})]})})})]})},1331:function(n,e,t){"use strict";var o=t(2095),i=t(1527),r=t(75);t(1250);var s=t(959),l=t(8598),a=t(4891);function c(){let n=(0,o._)(["\n  position: relative;\n  --waline-theme-color: ",";\n  --waline-bgcolor: ",";\n  --waline-color: ",";\n  --waline-active-color: ",";\n  --waline-bgcolor-light: #99999915;\n  --waline-border: 1px solid #99999966;\n  --waline-border-color: #99999966;\n  --waline-info-bgcolor: #99999915;\n  .wl-avatar {\n    margin: 0 .5rem;\n  }\n  .wl-card .wl-meta {\n    display: none;\n  }\n\n  .wl-btn.primary {\n    background: ",";\n    color:",";\n  }\n  .wl-gif-popup {\n    .wl-gallery-column {\n      display: grid !important;\n      grid-template-columns: 1fr 1fr;\n      max-height: 200px;\n    }\n    img {\n      width: unset !important;\n      height: unset !important;\n      border-color: ",";\n    }\n    input {\n      background: ",";\n      color: ",";\n    }\n  }\n\n\n  // @media screen and (max-width:580px) {\n  //   .wl-footer {\n  //     margin: unset;\n  //     padding: 0.5rem 0.75rem;\n  //   }\n  \n  //   .wl-gif-popup {\n  //     width: 100%;\n  //     left: 0;\n  //     padding: 0;\n  //   }\n  // }\n\n"]);return c=function(){return n},n}let d=l.ZP.div.withConfig({componentId:"sc-da8d0803-0"})(c(),n=>n.theme.colors.bgInverse,n=>n.theme.colors.bg,n=>n.theme.colors.textGray,n=>n.theme.colors.gold,n=>n.theme.colors.bgInverse,n=>n.theme.colors.bg,n=>n.theme.colors.bg,n=>n.theme.colors.bg,n=>n.theme.colors.textPrimary);e.Z=()=>((0,s.useEffect)(()=>{(0,r.S1)({el:"#waline",serverURL:a.d.walineApi,path:window.location.pathname,pageview:!0,comment:!0})},[]),"walineApi"in a.d&&""!==a.d.walineApi)?(0,i.jsx)(d,{id:"waline",children:"Waline"}):(0,i.jsx)(i.Fragment,{})},3027:function(n,e,t){"use strict";t.r(e),t.d(e,{__N_SSG:function(){return C},default:function(){return S}});var o=t(2095),i=t(1527),r=t(8988),s=t(5279),l=t(6064),a=t.n(l),c=t(3242),d=t(959),m=t(9873),u=t(8598),p=t(5499),f=t(7440),h=t(1685),g=t(3247),x=t(1331),w=t(6977),b=t(5545);function j(){let n=(0,o._)(["\n  max-width: 720px;\n"]);return j=function(){return n},n}function v(){let n=(0,o._)(["\n  \n"]);return v=function(){return n},n}function y(){let n=(0,o._)(["\n  position: relative;\n  max-height: ",";\n  overflow: hidden;\n  margin: 2rem 0;\n  animation: "," 1s ease;\n  transition: max-height 1.5s ease;\n  h2.title {\n    text-align: center;\n    font-size: 1.5rem;\n    margin-top: 2.5rem;\n  }\n"]);return y=function(){return n},n}function P(){let n=(0,o._)(["\n    display: ",";\n    position: absolute;\n    bottom: 0;\n    width: 100%;\n    height: 7rem;\n    cursor: pointer;\n    text-align: center;\n    ","\n\n    .rd-more {\n      margin-top: 5.375rem;\n      font-size: 0.875rem;\n      padding: 0.2rem 0;\n      span {\n        ","\n        transition: box-shadow .3s;\n      }\n    }\n\n    &:hover .rd-more span {\n      ","\n    }\n   \n"]);return P=function(){return n},n}function k(){let n=(0,o._)(["\n    padding-bottom: ",";\n    h1,h2,h3,h4,h5,h6 {\n      font-size: 1rem;\n    }\n"]);return k=function(){return n},n}let _="/data/memos";var C=!0;function S(n){let{memoposts:e}=n,t=(0,c.useRouter)(),[o,r]=(0,d.useState)(e),[l,u]=(0,d.useState)(1);(0,d.useEffect)(()=>{fetch("".concat(_,"/").concat("status.json")).then(n=>n.json()).then(n=>{let e=n.pages;u(e+1)})},[]),(0,d.useEffect)(()=>{let n=0;if("string"==typeof t.query.p&&isNaN(n=parseInt(t.query.p))){console.error("Wrong query p=",t.query.p);return}fetch("".concat(_,"/").concat(n,".json")).then(n=>n.json()).then(n=>{let e=Promise.all(n.map(async n=>{let e=await (0,s.q)(n.content,{mdxOptions:{remarkPlugins:[m.Z],development:!1}});return{title:n.title,content:e}}));return e}).then(n=>{r(n)}).catch(console.error)},[t.query]);let h=(()=>{if("string"==typeof t.query.p){let n=parseInt(t.query.p);if(!isNaN(n))return n}return 0})();return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(a(),{children:[(0,i.jsx)("title",{children:"Sansui - Memos"}),(0,i.jsx)(p.CommonHeader,{})]}),(0,i.jsx)(f.Z,{children:(0,i.jsxs)(Z,{children:[(0,i.jsx)(z,{style:{marginBottom:"-2rem"},children:"| 记录碎碎念是坏习惯 |"}),o.map(n=>(0,i.jsx)(N,{memoPost:n},n.title)),(0,i.jsx)(g.Z,{currTitle:"PAGE ".concat(h+1),prevPage:h>0?{title:"PREV",link:"/memos?p=".concat(h-1)}:void 0,nextPage:h+1<l?{title:"NEXT",link:"/memos?p=".concat(h+1)}:void 0,maxPage:l.toString()}),(0,i.jsx)(x.Z,{})]})})]})}function N(n){let{memoPost:e}=n,[t,o]=(0,d.useState)(!0),s=d.useRef(null),l=e.content.compiledSource.length>1111;return(0,i.jsxs)(I,{$isCollapse:!1!==l&&t,ref:s,children:[(0,i.jsx)("h2",{className:"title",children:e.title}),(0,i.jsx)(q,{$bottomSpace:l,children:(0,i.jsx)(r.R,{compiledSource:e.content.compiledSource,scope:null,frontmatter:null})}),(0,i.jsx)(E,{onClick:function(n){o(!t)},$isCollapse:t,$isShown:l,children:(0,i.jsx)("div",{className:"rd-more",children:(0,i.jsx)("span",{children:t?"SHOW MORE":"Hide"})})})]})}let Z=(0,u.ZP)(p.MainLayoutStyle).withConfig({componentId:"sc-c6c7060f-0"})(j()),z=(0,u.ZP)(p.PageDescription).withConfig({componentId:"sc-c6c7060f-1"})(v()),I=u.ZP.section.withConfig({componentId:"sc-c6c7060f-2"})(y(),n=>!0===n.$isCollapse?"19rem":"5000px",w.r$),E=u.ZP.div.withConfig({componentId:"sc-c6c7060f-3"})(P(),n=>!0===n.$isShown?"block":"none",n=>!0===n.$isCollapse?n.theme.colors.maskGradient:"",()=>b.XC.s,()=>b.XC.f),q=(0,u.ZP)(h.j).withConfig({componentId:"sc-c6c7060f-4"})(k(),n=>!0===n.$bottomSpace?"2rem":"inherit")}},function(n){n.O(0,[537,576,54,291,811,26,142,499,774,888,179],function(){return n(n.s=3420)}),_N_E=n.O()}]);