(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[106],{3420:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/memos",function(){return t(3776)}])},3247:function(n,e,t){"use strict";var o=t(2095),r=t(1527),i=t(9050),l=t.n(i);t(959);var s=t(8598);function a(){let n=(0,o._)(["\n  margin: 64px 0;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  align-items: center;\n\n  & > span {\n    color: ",";\n    font-size: 0.875rem;\n  }\n"]);return a=function(){return n},n}function c(){let n=(0,o._)(["\n  padding: .2em 0;\n  display: flex;\n  align-items: center;\n  position: relative;\n  i {\n    transform: translateY(-0.1em);\n  }\n\n  span {\n    position: relative;\n  }\n\n  span::before {\n    content: '';\n    position: absolute;\n    left: 0;\n    bottom: 0;\n    width: 0;\n    height: 2px;\n    background: ",";\n    transition: width 1s cubic-bezier(0.34, 0.04, 0.03, 1.4), background .3s;\n  }\n    \n  span:hover::before {\n    width: 100%;\n  }\n"]);return c=function(){return n},n}let m=s.ZP.div.withConfig({componentId:"sc-3c366242-0"})(a(),n=>n.theme.colors.textGray),d=(0,s.ZP)(l()).withConfig({componentId:"sc-3c366242-1"})(c(),n=>n.theme.colors.gold);e.Z=n=>(0,r.jsxs)(m,{children:[n.prevPage&&(0,r.jsx)("div",{style:{flex:"1 1 auto"},children:(0,r.jsx)(d,{href:n.prevPage.link,passHref:!0,style:{justifyContent:"flex-start"},children:(0,r.jsxs)("span",{children:[(0,r.jsx)("i",{className:"icon-arrow-left2"}),"\xa0",n.prevPage.title]})})}),(0,r.jsx)("span",{children:n.currTitle?n.currTitle:""}),n.nextPage&&(0,r.jsx)("div",{style:{flex:"1 1 auto"},children:(0,r.jsx)(d,{href:n.nextPage.link,passHref:!0,style:{justifyContent:"flex-end"},children:(0,r.jsxs)("span",{children:[n.nextPage.title,"\xa0",(0,r.jsx)("i",{className:"icon-arrow-right2"})]})})})]})},1331:function(n,e,t){"use strict";var o=t(2095),r=t(1527),i=t(75);t(1250);var l=t(959),s=t(8598),a=t(4891);function c(){let n=(0,o._)(["\n  position: relative;\n  --waline-theme-color: ",";\n  --waline-bgcolor: ",";\n  --waline-color: ",";\n  --waline-active-color: ",";\n  --waline-bgcolor-light: #99999915;\n  --waline-border: 1px solid #99999966;\n  --waline-border-color: #99999966;\n  --waline-info-bgcolor: #99999915;\n  .wl-avatar {\n    margin: 0 .5rem;\n  }\n  .wl-card .wl-meta {\n    display: none;\n  }\n\n  .wl-btn.primary {\n    background: ",";\n    color:",";\n  }\n  .wl-gif-popup {\n    .wl-gallery-column {\n      display: grid !important;\n      grid-template-columns: 1fr 1fr;\n      max-height: 200px;\n    }\n    img {\n      width: unset !important;\n      height: unset !important;\n      border-color: ",";\n    }\n    input {\n      background: ",";\n      color: ",";\n    }\n  }\n\n\n  // @media screen and (max-width:580px) {\n  //   .wl-footer {\n  //     margin: unset;\n  //     padding: 0.5rem 0.75rem;\n  //   }\n  \n  //   .wl-gif-popup {\n  //     width: 100%;\n  //     left: 0;\n  //     padding: 0;\n  //   }\n  // }\n\n"]);return c=function(){return n},n}let m=s.ZP.div.withConfig({componentId:"sc-fe360e69-0"})(c(),n=>n.theme.colors.bgInverse,n=>n.theme.colors.bg,n=>n.theme.colors.textGray,n=>n.theme.colors.gold,n=>n.theme.colors.bgInverse,n=>n.theme.colors.bg,n=>n.theme.colors.bg,n=>n.theme.colors.bg,n=>n.theme.colors.textPrimary);e.Z=()=>((0,l.useEffect)(()=>{(0,i.S1)({el:"#waline",serverURL:a.d.walineApi,path:window.location.pathname})},[]),(0,r.jsx)(m,{id:"waline",children:"Waline"}))},3776:function(n,e,t){"use strict";t.r(e),t.d(e,{__N_SSG:function(){return k},default:function(){return C}});var o=t(2095),r=t(1527),i=t(5905),l=t(5279),s=t(6064),a=t.n(s),c=t(3242),m=t(959),d=t(9873),u=t(8598),p=t(5499),h=t(9276),f=t(3247),g=t(1331),x=t(6977),w=t(6948),b=t(5545);function v(){let n=(0,o._)(["\n  max-width: 720px;\n"]);return v=function(){return n},n}function j(){let n=(0,o._)(["\n  \n"]);return j=function(){return n},n}function y(){let n=(0,o._)(["\n  position: relative;\n  max-height: ",";\n  overflow: hidden;\n  margin: 2rem 0;\n  animation: "," 1s ease;\n  transition: max-height 1.5s ease;\n  h2.title {\n    text-align: center;\n    font-size: 1.5rem;\n    margin-top: 2.5rem;\n  }\n"]);return y=function(){return n},n}function P(){let n=(0,o._)(["\n    display: ",";\n    position: absolute;\n    bottom: 0;\n    width: 100%;\n    height: 7rem;\n    cursor: pointer;\n    text-align: center;\n    ","\n\n    .rd-more {\n      margin-top: 5.375rem;\n      font-size: 0.875rem;\n      padding: 0.2rem 0;\n      span {\n        ","\n        transition: box-shadow .3s;\n      }\n    }\n\n    &:hover .rd-more span {\n      ","\n    }\n   \n"]);return P=function(){return n},n}function _(){let n=(0,o._)(["\n    padding-bottom: ",";\n    h1,h2,h3,h4,h5,h6 {\n      font-size: 1rem;\n    }\n"]);return _=function(){return n},n}var k=!0;function C(n){let{memoposts:e,pagelimit:t}=n,o=(0,c.useRouter)(),[i,s]=(0,m.useState)(e);(0,m.useEffect)(()=>{let n=0;if("string"==typeof o.query.p&&isNaN(n=parseInt(o.query.p))){console.error("Wrong query p=",o.query.p);return}fetch("".concat("/data/memos","/").concat(n,".json")).then(n=>n.json()).then(n=>{let e=Promise.all(n.map(async n=>{let e=await (0,l.q)(n.content,{mdxOptions:{remarkPlugins:[d.Z],development:!1}});return{title:n.title,content:e}}));return e}).then(n=>{s(n)}).catch(console.error)},[o.query]);let u=(()=>{if("string"==typeof o.query.p){let n=parseInt(o.query.p);if(!isNaN(n))return n}return 0})();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(a(),{children:[(0,r.jsx)("title",{children:"Sansui - Memos"}),(0,r.jsx)(p.CommonHeader,{})]}),(0,r.jsx)(h.Z,{children:(0,r.jsxs)(S,{children:[(0,r.jsx)(Z,{style:{marginBottom:"-2rem"},children:"| 记录碎碎念是坏习惯 |"}),i.map(n=>(0,r.jsx)(N,{memoPost:n},n.title)),(0,r.jsx)(f.Z,{currTitle:"PAGE ".concat(u+1),prevPage:u>0?{title:"PREV",link:"/memos?p=".concat(u-1)}:void 0,nextPage:u+1<t?{title:"NEXT",link:"/memos?p=".concat(u+1)}:void 0}),(0,r.jsx)(g.Z,{})]})})]})}function N(n){let{memoPost:e}=n,[t,o]=(0,m.useState)(!0),l=m.useRef(null),s=e.content.compiledSource.length>1111;return(0,r.jsxs)(I,{$isCollapse:!1!==s&&t,ref:l,children:[(0,r.jsx)("h2",{className:"title",children:e.title}),(0,r.jsx)(q,{$bottomSpace:s,children:(0,r.jsx)(i.R,{compiledSource:e.content.compiledSource,scope:null,frontmatter:null})}),(0,r.jsx)(E,{onClick:function(n){o(!t)},$isCollapse:t,$isShown:s,children:(0,r.jsx)("div",{className:"rd-more",children:(0,r.jsx)("span",{children:t?"SHOW MORE":"Hide"})})})]})}let S=(0,u.ZP)(p.MainLayoutStyle).withConfig({componentId:"sc-1c0256a3-0"})(v()),Z=(0,u.ZP)(p.PageDescription).withConfig({componentId:"sc-1c0256a3-1"})(j()),I=u.ZP.section.withConfig({componentId:"sc-1c0256a3-2"})(y(),n=>!0===n.$isCollapse?"19rem":"5000px",x.r$),E=u.ZP.div.withConfig({componentId:"sc-1c0256a3-3"})(P(),n=>!0===n.$isShown?"block":"none",n=>!0===n.$isCollapse?n.theme.colors.memoGradient:"",()=>b.FQ.s,()=>b.FQ.f),q=(0,u.ZP)(w.j).withConfig({componentId:"sc-1c0256a3-4"})(_(),n=>!0===n.$bottomSpace?"2rem":"inherit")},6948:function(n,e,t){"use strict";t.d(e,{j:function(){return l}});var o=t(2095),r=t(8598);function i(){let n=(0,o._)(["\n  text-align: justify;\n\n  @media screen and (max-width: 580px){\n    text-align: unset;\n  }\n\n  img, picture, video, canvas, svg, pre{\n    margin: 1.625rem 0;\n  }\n\n  p,ul,ol {\n    line-height: 1.8rem;\n    margin: 1.5rem 0;\n  }\n\n  blockquote {\n    margin: 1.625rem 0;\n  }\n\n  a {\n    position: relative;\n    font-weight: 500;\n    border-bottom: 1px solid ",";\n    transition: box-shadow .5s;\n  }\n\n  a:hover {\n    box-shadow: inset 0 -0.5em 0 ",";\n  }\n  \n  code {\n    background-color: ",";\n    font-size: 0.95rem;\n    border-radius: 3px;\n    padding: 0 0.25rem;\n    margin: 0 1px;\n  }\n\n  pre code {\n    font-size: 0.875rem;\n    border-radius: unset;\n    padding: 1rem 2rem;\n    margin: unset;\n    overflow: auto;\n  }\n\n  blockquote {\n    border-left: solid 2px;\n    padding-left: 1.875em;\n    color: ",";\n  }\n\n  del {\n    opacity: .33;\n  }\n\n  ul li {\n    display: block;\n    position: relative;\n  }\n  ul li::before {\n    content:'';\n    position: absolute;\n    top: .6em;\n    height: .4em;\n    width: .4em;\n    border-radius: 1em;\n    border: solid 1px ",";\n    left: -1.5rem;\n  }\n\n"]);return i=function(){return n},n}let l=r.ZP.div.withConfig({componentId:"sc-40b0ae5a-0"})(i(),n=>n.theme.colors.gold,n=>n.theme.colors.goldHover,n=>n.theme.colors.codeBlockBg,n=>n.theme.colors.textGray,n=>n.theme.colors.gold)}},function(n){n.O(0,[537,576,54,291,811,438,142,499,774,888,179],function(){return n(n.s=3420)}),_N_E=n.O()}]);