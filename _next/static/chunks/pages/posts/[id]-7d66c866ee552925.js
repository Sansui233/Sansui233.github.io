(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[646],{7961:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts/[id]",function(){return t(2978)}])},1685:function(n,e,t){"use strict";t.d(e,{p:function(){return m},j:function(){return p}});var o=t(2095),i=t(1527),r=t(959),s=t(8598);function l(){let n=(0,o._)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  background: #000000de;\n  z-index: 10;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: zoom-out;\n\n  & img.model {\n    display:block;\n  }\n\n  @media screen and (min-width: 780px) {\n    & img.model {\n    }\n  }\n\n"]);return l=function(){return n},n}let a=s.zo.div(l());var c=n=>{let{imgProps:e,isModel:t,setModel:o}=n;return(0,i.jsxs)(a,{$isOpen:t,onClick:n=>o(!1),children:[" ",(0,i.jsx)("img",{loading:"lazy",className:"model",...e})," "]})};function d(){let n=(0,o._)(["\n  text-align: justify;\n\n  @media screen and (max-width: 580px){\n    text-align: unset;\n  }\n\n  img, picture, video, canvas, svg, pre{\n    margin: 1.625rem auto;\n    display: block;\n  }\n\n  p,ul,ol {\n    line-height: 1.8rem;\n    margin: 1.5rem 0;\n  }\n\n  blockquote {\n    margin: 1.625rem 0;\n  }\n\n  a {\n    position: relative;\n    font-weight: 500;\n    border-bottom: 1px solid ",";\n    transition: box-shadow .5s;\n  }\n\n  a:hover {\n    box-shadow: inset 0 -0.5em 0 ",";\n  }\n  \n  code {\n    background-color: ",";\n    font-size: 0.95rem;\n    border-radius: 3px;\n    padding: 0 0.25rem;\n    margin: 0 1px;\n  }\n\n  pre code {\n    font-size: 0.875rem;\n    border-radius: unset;\n    padding: 1rem 2rem;\n    margin: unset;\n    overflow: auto;\n  }\n\n  blockquote {\n    border-left: solid 2px;\n    padding-left: 1.875em;\n    color: ",";\n  }\n\n  del {\n    opacity: .33;\n  }\n\n  ul li {\n    display: block;\n    position: relative;\n  }\n  ul li::before {\n    content:'';\n    position: absolute;\n    top: .6em;\n    height: .4em;\n    width: .4em;\n    border-radius: 1em;\n    border: solid 1px ",";\n    left: -1.5rem;\n  }\n\n"]);return d=function(){return n},n}function m(n){let[e,t]=(0,r.useState)(!1);return(0,i.jsxs)(i.Fragment,{children:[e?(0,i.jsx)(c,{imgProps:n,isModel:e,setModel:t}):void 0,(0,i.jsx)("img",{loading:"lazy",...n,onClick:()=>t(!0),style:{cursor:"zoom-in"}})]})}let p=s.ZP.div.withConfig({componentId:"sc-389d00ff-0"})(d(),n=>n.theme.colors.gold,n=>n.theme.colors.goldHover,n=>n.theme.colors.codeBlockBg,n=>n.theme.colors.textGray,n=>n.theme.colors.gold)},3247:function(n,e,t){"use strict";var o=t(2095),i=t(1527),r=t(9050),s=t.n(r);t(959);var l=t(8598);function a(){let n=(0,o._)(["\n  margin: 64px 0;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  align-items: center;\n\n  & > span {\n    color: ",";\n    font-size: 0.875rem;\n  }\n"]);return a=function(){return n},n}function c(){let n=(0,o._)(["\n  padding: .2em 0;\n  display: flex;\n  align-items: center;\n  position: relative;\n  i {\n    transform: translateY(-0.1em);\n  }\n\n  span {\n    position: relative;\n  }\n\n  span::before {\n    content: '';\n    position: absolute;\n    left: 0;\n    bottom: 0;\n    width: 0;\n    height: 2px;\n    background: ",";\n    transition: width 1s cubic-bezier(0.34, 0.04, 0.03, 1.4), background .3s;\n  }\n    \n  span:hover::before {\n    width: 100%;\n  }\n"]);return c=function(){return n},n}let d=l.ZP.div.withConfig({componentId:"sc-54a30f6f-0"})(a(),n=>n.theme.colors.textGray),m=(0,l.ZP)(s()).withConfig({componentId:"sc-54a30f6f-1"})(c(),n=>n.theme.colors.gold);e.Z=n=>(0,i.jsxs)(d,{children:[n.prevPage&&(0,i.jsx)("div",{style:{flex:"1 1 auto"},children:(0,i.jsx)(m,{href:n.prevPage.link,passHref:!0,style:{justifyContent:"flex-start"},children:(0,i.jsxs)("span",{children:[(0,i.jsx)("i",{className:"icon-arrow-left2"}),"\xa0",n.prevPage.title]})})}),(0,i.jsx)("span",{children:n.currTitle?n.currTitle.concat(n.maxPage?" / ".concat(n.maxPage):""):""}),n.nextPage&&(0,i.jsx)("div",{style:{flex:"1 1 auto"},children:(0,i.jsx)(m,{href:n.nextPage.link,passHref:!0,style:{justifyContent:"flex-end"},children:(0,i.jsxs)("span",{children:[n.nextPage.title,"\xa0",(0,i.jsx)("i",{className:"icon-arrow-right2"})]})})})]})},1331:function(n,e,t){"use strict";var o=t(2095),i=t(1527),r=t(75);t(1250);var s=t(959),l=t(8598),a=t(4891);function c(){let n=(0,o._)(["\n  position: relative;\n  --waline-theme-color: ",";\n  --waline-bgcolor: ",";\n  --waline-color: ",";\n  --waline-active-color: ",";\n  --waline-bgcolor-light: #99999915;\n  --waline-border: 1px solid #99999966;\n  --waline-border-color: #99999966;\n  --waline-info-bgcolor: #99999915;\n  .wl-avatar {\n    margin: 0 .5rem;\n  }\n  .wl-card .wl-meta {\n    display: none;\n  }\n\n  .wl-btn.primary {\n    background: ",";\n    color:",";\n  }\n  .wl-gif-popup {\n    .wl-gallery-column {\n      display: grid !important;\n      grid-template-columns: 1fr 1fr;\n      max-height: 200px;\n    }\n    img {\n      width: unset !important;\n      height: unset !important;\n      border-color: ",";\n    }\n    input {\n      background: ",";\n      color: ",";\n    }\n  }\n\n\n  // @media screen and (max-width:580px) {\n  //   .wl-footer {\n  //     margin: unset;\n  //     padding: 0.5rem 0.75rem;\n  //   }\n  \n  //   .wl-gif-popup {\n  //     width: 100%;\n  //     left: 0;\n  //     padding: 0;\n  //   }\n  // }\n\n"]);return c=function(){return n},n}let d=l.ZP.div.withConfig({componentId:"sc-da8d0803-0"})(c(),n=>n.theme.colors.bgInverse,n=>n.theme.colors.bg,n=>n.theme.colors.textGray,n=>n.theme.colors.gold,n=>n.theme.colors.bgInverse,n=>n.theme.colors.bg,n=>n.theme.colors.bg,n=>n.theme.colors.bg,n=>n.theme.colors.textPrimary);e.Z=()=>((0,s.useEffect)(()=>{(0,r.S1)({el:"#waline",serverURL:a.d.walineApi,path:window.location.pathname,pageview:!0,comment:!0})},[]),"walineApi"in a.d&&""!==a.d.walineApi)?(0,i.jsx)(d,{id:"waline",children:"Waline"}):(0,i.jsx)(i.Fragment,{})},2978:function(n,e,t){"use strict";t.r(e),t.d(e,{__N_SSG:function(){return C},default:function(){return Z}});var o=t(2095),i=t(1527),r=t(6736),s=t(8988),l=t(6064),a=t.n(l),c=t(9050),d=t.n(c),m=t(3242),p=t(959),u=t(8598),f=t(5499),g=t(7440),h=t(1685),x=t(3247),w=t(1331),j=t(6977);function v(){let n=(0,o._)(["\n  max-width: 750px;\n  margin-top: 72px;\n  animation: "," 1s ease;\n\n  @media screen and (max-width: 580px) {\n    margin-top: 20px;\n  }\n"]);return v=function(){return n},n}function b(){let n=(0,o._)(["\n  max-width: 15em;\n  flex: 1 1 0;\n  margin-top: calc(1.375*1em + 72px);\n  position: sticky;\n  align-self: flex-start;\n  top: 63px;\n\n  animation: "," 1s ease;\n\n  @media screen and (max-width: 780px) {\n    max-width: 10em;\n  }\n  @media screen and (max-width: 580px) {\n    display: none\n  }\n"]);return b=function(){return n},n}function y(){let n=(0,o._)(["\n  margin-bottom: 3rem;\n  h1 {\n    margin-top: .3rem;\n    margin-bottom: 0.5rem;\n  }\n"]);return y=function(){return n},n}function k(){let n=(0,o._)(["\n  font-size: 0.875rem;\n  position: relative;\n\n  &::before {\n    content:'';\n    position: absolute;\n    top: -.8em;\n    left: 0;\n    height: 1px;\n    width: 100%;\n    background: ",";\n  }\n  // border-top: 1px solid;\n"]);return k=function(){return n},n}function _(){let n=(0,o._)(["\n  transition: opacity .3s, color .3s;\n\n  &:hover {\n    color: ",";\n  }\n\n"]);return _=function(){return n},n}function P(){let n=(0,o._)(["\n  display: block;\n  padding-left: ","em;\n  line-height: 1.8em;\n\n  & span {\n    transition: box-shadow .5s;\n  }\n\n  &:hover span {\n    box-shadow: inset 0 -0.5em 0 ",";\n  }\n\n"]);return P=function(){return n},n}var C=!0;function Z(n){var e;let{mdxSource:t,nextPost:o,prevPost:l,excerpt:c,headings:d}=n,j=(0,m.useRouter)(),v=(0,p.useContext)(u.Ni),b=t.frontmatter,y=t.compiledSource,k=b.description?b.description.concat(c):c,_=(n,e)=>{n.preventDefault();let t=document.getElementById(e);if(t){let n=t.getBoundingClientRect(),e=window.scrollY||window.pageYOffset;window.scrollTo({top:n.top+e-63,behavior:"smooth"})}};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(a(),{children:[(0,i.jsx)("title",{children:b.title}),(0,i.jsx)("meta",{name:"description",content:k}),(0,i.jsx)("meta",{name:"keywords",content:function(n){let e="string"==typeof n.tags?[n.tags]:n.tags;return null!==n.keywords&&"string"==typeof n.keywords?e.join().concat(", ").concat(n.keywords.replaceAll("，",", ")):e.join()}(b)}),(0,i.jsx)(f.CommonHeader,{})]}),(0,i.jsx)(g.Z,{children:(0,i.jsxs)("div",{style:{display:"flex",margin:"auto"},children:[(0,i.jsx)("div",{style:{flex:" 2 1 0"},children:(0,i.jsxs)(z,{children:[(0,i.jsxs)(N,{children:[(0,i.jsx)("h1",{children:b.title}),(0,i.jsxs)("div",{style:{display:"flex"},children:[(0,i.jsx)("div",{style:{flex:"1 1 0"},children:(0,i.jsxs)(S,{style:{flex:"1 1 0"},children:[b.date," | ",(e=b.tags,(0,i.jsx)(i.Fragment,{children:("string"==typeof e?[e]:e).map(n=>(0,i.jsx)(E,{href:"/tags/".concat(n),passHref:!0,children:"#".concat(n," ")},n))}))," in ",(0,i.jsxs)(E,{href:"/categories/".concat(b.categories),passHref:!0,children:[(0,i.jsx)("i",{style:{paddingRight:"0.15em"},className:"icon-material-folder_open"}),b.categories]})]})}),(0,i.jsxs)("div",{style:{flex:"0 0 0",fontSize:"0.875rem"},children:[(0,i.jsx)("i",{style:{paddingLeft:"0.5em",paddingRight:"0.3em"},className:"icon-material-eye"}),(0,i.jsx)("span",{className:"waline-pageview-count","data-path":j.basePath})]})]})]}),(0,i.jsx)(r.Zo,{components:{img:h.p},children:(0,i.jsx)(h.j,{children:(0,i.jsx)(s.R,{compiledSource:y,scope:null,frontmatter:null})})}),(0,i.jsxs)("div",{style:{textAlign:"right",opacity:.5,fontSize:"0.875rem",margin:"4rem 0 2rem 0"},children:["更新于 ",b.date]}),(0,i.jsx)(x.Z,{nextPage:o||void 0,prevPage:l||void 0}),(0,i.jsx)(w.Z,{})]})}),(0,i.jsx)(I,{children:(0,i.jsxs)("nav",{children:[(0,i.jsx)("div",{style:{fontSize:"1.25rem",fontWeight:"bold",paddingBottom:"0.5rem",marginBottom:"0.5rem",borderBottom:"solid 1px ".concat(null==v?void 0:v.colors.gold)},children:"目录"}),d.map(n=>(0,i.jsx)(B,{$rank:n.rank,href:"#".concat(n.id),onClick:e=>{_(e,n.id)},children:(0,i.jsx)("span",{children:n.title})},n.id))]})})]})})]})}let z=(0,u.ZP)(f.MainLayoutStyle).withConfig({componentId:"sc-6c4d66fc-0"})(v(),j.r$),I=u.ZP.div.withConfig({componentId:"sc-6c4d66fc-1"})(b(),j.ER),N=u.ZP.div.withConfig({componentId:"sc-6c4d66fc-2"})(y()),S=u.ZP.span.withConfig({componentId:"sc-6c4d66fc-3"})(k(),n=>n.theme.colors.gold),E=(0,u.ZP)(d()).withConfig({componentId:"sc-6c4d66fc-4"})(_(),n=>n.theme.colors.gold),B=(0,u.ZP)(d()).withConfig({componentId:"sc-6c4d66fc-5"})(P(),n=>n.$rank-1,n=>n.theme.colors.goldHover)}},function(n){n.O(0,[537,576,811,26,499,774,888,179],function(){return n(n.s=7961)}),_N_E=n.O()}]);