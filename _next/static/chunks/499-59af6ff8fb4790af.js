"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[499],{9276:function(n,e,t){t.d(e,{Z:function(){return Q}});var r=t(1527),i=t(2095),o=t(8598);function s(){let n=(0,i._)(["\n  padding: 24px 0 10px 0;\n  text-align: center;\n  font-size: 0.625rem;\n\n  div {\n    margin: 1rem auto;\n  }\n\n  a{\n    transition: color .5s;\n  }\n\n  a:hover {\n    color: ",";\n  }\n\n  i {\n    font-size: 1.5rem;\n    margin: 0 0.5rem;\n  }\n"]);return s=function(){return n},n}let a=o.ZP.div.withConfig({componentId:"sc-9b286a0d-0"})(s(),n=>n.theme.colors.goldHover);var c=()=>(0,r.jsxs)(a,{children:[(0,r.jsx)("a",{href:"https://github.com/sansui233",children:(0,r.jsx)("i",{className:"icon-github-rounded"})}),(0,r.jsx)("a",{href:"mailto:sansuilnm@gmail.com",children:(0,r.jsx)("i",{className:"icon-email-rounded"})}),(0,r.jsx)("a",{href:"/rss",children:(0,r.jsx)("i",{className:"icon-rss-rounded"})}),(0,r.jsxs)("div",{children:["Code & Design by Sansui 2022"," ",(0,r.jsx)("br",{})," ","All rights reserved"]})]}),l=t(9050),d=t.n(l),u=t(3242),h=t(959);function f(){let n=(0,i._)(["\n  width: ",";\n  height: ",";\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  cursor: pointer;\n"]);return f=function(){return n},n}function m(){let n=(0,i._)(["\n  background: ",";\n  height: 2px;\n  transition: all .3s;\n\n  &.is-close {\n    opacity: 0;\n  }\n"]);return m=function(){return n},n}function p(){let n=(0,i._)(["transform: rotate(45deg);"]);return p=function(){return n},n}function x(){let n=(0,i._)(["transform: rotate(-45deg);"]);return x=function(){return n},n}function g(){let n=(0,i._)(["\n  height: 2px;\n  position: relative;\n\n  &::before,\n  &::after {\n    content: '';\n    position: absolute;\n    top:0;\n    left: 0;\n    width: 100%;\n    height: 2px;\n    background: ",";\n    transition: all .3s;\n  }\n\n  &::before {\n    ","\n  }\n  &::after {\n    ","\n  }\n"]);return g=function(){return n},n}let v=o.ZP.div.withConfig({componentId:"sc-93e7b0bf-0"})(f(),n=>n.width,n=>n.height?n.height:"100%"),w=o.ZP.div.withConfig({componentId:"sc-93e7b0bf-1"})(m(),n=>n.theme.colors.textPrimary),b=o.ZP.div.withConfig({componentId:"sc-93e7b0bf-2"})(g(),n=>n.theme.colors.textPrimary,n=>n.$isClose?(0,o.iv)(p()):"",n=>n.$isClose?(0,o.iv)(x()):"");var j=n=>{let{width:e="1em",height:t="1em",isClose:i,isCloseToggler:o}=n;return(0,r.jsxs)(v,{width:e,height:t,onClick:o,children:[(0,r.jsx)(w,{className:i?"is-close":""}),(0,r.jsx)(b,{$isClose:i}),(0,r.jsx)(w,{className:i?"is-close":""})]})},_=t(3948),y=t(5545);function C(){let n=(0,i._)(["\n  width: 24px;\n  height: 20px;\n  position: fixed;\n  top: 22px;\n  right: 20px;\n"]);return C=function(){return n},n}function k(){let n=(0,i._)(["\n  font-weight: 400;\n  padding-top: 4rem;\n  font-size: 0.625rem;\n"]);return k=function(){return n},n}function P(){let n=(0,i._)(["\n  margin: 0.5rem 0;\n  a{\n    transition: color .5s;\n  }\n\n  a:hover {\n    color: ",";\n  }\n\n  i {\n    font-size: 1.5rem;\n    margin: 0 0.5rem;\n  }\n"]);return P=function(){return n},n}function N(){let n=(0,i._)(["\n  background: ",";\n  overflow: auto;\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  z-index: 10;\n  transform: translateY(0);\n  transition: transform 1s cubic-bezier(0.46, 0, 0.08, 1.11);\n\n  &.hidden {\n    transform: translateY(-100%);\n  }\n\n  h1 {\n    ","\n    span{\n      position: relative;\n    }\n    span::after {\n      content:'';\n      position: absolute;\n      left:0;\n      bottom: -1rem;\n      width: 100%;\n      height: 1px;\n      background: ",";\n    }\n  }\n"]);return N=function(){return n},n}function Z(){let n=(0,i._)(["\n  margin: 0 auto;\n  padding: 92px 0px;\n  text-align: center;\n  font-weight: bold;\n"]);return Z=function(){return n},n}function I(){let n=(0,i._)(["\n\n  font-size: 1.625rem;\n  line-height: 2.75rem;\n  position: relative;\n  transition: box-shadow .3s ease;\n  cursor: pointer;\n\n  :hover {\n    box-shadow: inset 0 -0.5em 0 #ffffff55;\n    transform: scale(1.2);\n  }\n"]);return I=function(){return n},n}function S(n){let{isShow:e,toggle:t}=n,i=(0,h.useContext)(o.Ni),s=(0,h.useMemo)(()=>{let n=i.mode;return"system"===n?"系统外观":"dark"===n?"夜间模式":"日间模式"},[i]);return(0,r.jsxs)(F,{className:e?"":"hidden",children:[(0,r.jsxs)(B,{style:{paddingTop:"8rem"},children:[(0,r.jsx)("h1",{children:(0,r.jsx)("span",{children:"SANSUI'S BLOG"})}),(0,r.jsx)("div",{onClick:function(){let n=(0,_.Z8)();(0,_.wl)("system"===n?"dark":"dark"===n?"light":"system")},children:(0,r.jsx)(E,{style:{fontSize:"1.625rem"},children:s})}),(0,r.jsx)("div",{children:(0,r.jsx)(E,{children:(0,r.jsx)(d(),{href:"/categories",children:"分类"})})}),(0,r.jsx)("div",{children:(0,r.jsx)(E,{children:(0,r.jsx)(d(),{href:"/rss",children:"RSS"})})}),(0,r.jsxs)(Y,{children:[(0,r.jsxs)(T,{children:[(0,r.jsx)("a",{href:"https://github.com/sansui233",children:(0,r.jsx)("i",{className:"icon-github-rounded"})}),(0,r.jsx)("a",{href:"mailto:sansuilnm@gmail.com",children:(0,r.jsx)("i",{className:"icon-email-rounded"})}),(0,r.jsx)("a",{href:"/rss",children:(0,r.jsx)("i",{className:"icon-rss-rounded"})})]}),(0,r.jsx)("div",{children:"Sansui 2022 All rights reserved"})]})]}),(0,r.jsx)(z,{children:(0,r.jsx)(j,{isClose:!0,isCloseToggler:t})})]})}let z=o.ZP.div.withConfig({componentId:"sc-174bc933-0"})(C()),Y=o.ZP.div.withConfig({componentId:"sc-174bc933-1"})(k()),T=o.ZP.div.withConfig({componentId:"sc-174bc933-2"})(P(),n=>n.theme.colors.gold),F=o.ZP.div.withConfig({componentId:"sc-174bc933-3"})(N(),n=>n.theme.colors.bg,()=>y.Ve,n=>n.theme.colors.gold),B=o.ZP.div.withConfig({componentId:"sc-174bc933-4"})(Z()),E=o.ZP.span.withConfig({componentId:"sc-174bc933-5"})(I());function H(){let n=(0,i._)(["\n    height: 63px;\n    width: 100%;\n    text-align: center;\n    padding-top: 0.625rem;\n    font-size: 0.625rem;\n    font-style: italic;\n    color: ",";\n    font-family: 'Times New Roman', STSong, '宋体', serif;\n    opacity: .6;\n"]);return H=function(){return n},n}function G(){let n=(0,i._)(["\n  height: 63px;\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  position: fixed;\n  background-color: ",";\n  z-index:10;\n  transform: ",";\n  transition: transform .5s ease;\n"]);return G=function(){return n},n}function $(){let n=(0,i._)(["\n  flex: 1 1 auto;\n  text-align: right;\n  font-size: 0.875em;\n  cursor: pointer;\n  max-width: 63px;\n  display: flex;\n  \n  & > div {\n    display: inline-block;\n    margin-left: auto;\n    margin-right: 20px;\n    height: 20px;\n    position: relative;\n  }\n\n  @media screen and (max-width: 580px) {\n    & > div {\n      margin-right: 16px;\n      padding: 1px 0;\n    }\n  }\n"]);return $=function(){return n},n}function L(){let n=(0,i._)(["\n  flex: 2 1 auto;\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  @media screen and (min-width: 780px) {\n    max-width: 50%;\n  }\n  @media screen and (min-width: 580px) {\n    max-width: 390px;\n  }\n  @media screen and (max-width: 580px) {\n    max-width: 290px;\n  }\n  \n\n  ol {\n    padding: 0 .5em;\n    padding-top: 2px;\n  }\n\n  a {\n    position: relative;\n    font-weight: 500;\n  }\n\n  a::before {\n    content: '';\n    position: absolute;\n    left: 0;\n    bottom: -3px;\n    width: 0;\n    height: 2px;\n    background: ",";\n    transition: width 1s cubic-bezier(0.34, 0.04, 0.03, 1.4), background .3s;\n  }\n    \n  a:hover::before {\n    width: 100%;\n  }\n\n  ol.current a{\n    color: ",";\n  }\n\n"]);return L=function(){return n},n}function A(){let n=(0,i._)(["\n  flex: 1 1 auto;\n  max-width: 63px;\n  display: flex;\n  img {\n    margin-left: 10px;\n    z-index: 11;\n    width: 63px;\n    height: 63px;\n    float: left;\n    cursor: pointer;\n  }\n\n  @media screen and (max-width: 580px){\n    img {\n      width: 48px;\n      height: 48px;\n    }\n  }\n"]);return A=function(){return n},n}function O(){let n=(0,h.useContext)(o.Ni),[e,t]=(0,h.useState)(!1),[i,s]=(0,h.useState)(!1),a=(0,u.useRouter)();(0,h.useEffect)(()=>{var n;let e,r=globalThis.scrollY,i=(n=()=>{if(globalThis.scrollY<200){t(!1),r=globalThis.scrollY;return}let n=globalThis.scrollY-r;n>10?(t(!0),r=globalThis.scrollY):n<-10&&(t(!1),r=globalThis.scrollY)},e=null,function(){e||(n.apply(this,arguments),e=setTimeout(()=>{clearTimeout(e),e=null},80))});return globalThis.addEventListener("scroll",i,!0),()=>window.removeEventListener("scroll",i)},[]);let c=()=>{s(!i)};return(0,r.jsxs)(h.Fragment,{children:[(0,r.jsx)(S,{isShow:i,toggle:c}),(0,r.jsxs)(D,{$isHidden:e,children:[(0,r.jsx)(V,{children:(0,r.jsx)(d(),{href:"/",passHref:!0,children:(0,r.jsx)("img",{src:n.assets.favico,alt:"Sansui"})})}),(0,r.jsxs)(R,{children:[(0,r.jsx)("ol",{className:"/"===a.pathname?"current":"",children:(0,r.jsx)(d(),{href:"/",children:"Posts"})}),(0,r.jsx)("ol",{className:"/memos"===a.pathname?"current":"",children:(0,r.jsx)(d(),{href:"/memos",children:"Memos"})}),(0,r.jsx)("ol",{className:"/about"===a.pathname?"current":"",children:(0,r.jsx)(d(),{href:"/about",children:"About"})})]}),(0,r.jsx)(M,{onClick:c,children:(0,r.jsx)("div",{children:(0,r.jsx)(j,{width:"24px",height:"100%",isClose:i})})})]}),(0,r.jsx)(X,{children:"人活着就是为了卡卡西"})]})}let X=o.ZP.div.withConfig({componentId:"sc-c771e03e-0"})(H(),n=>n.theme.colors.gold),D=o.ZP.header.withConfig({componentId:"sc-c771e03e-1"})(G(),n=>n.theme.colors.bg,n=>n.$isHidden?"translateY(-100%)":"translateY(0)"),M=o.ZP.div.withConfig({componentId:"sc-c771e03e-2"})($()),R=o.ZP.nav.withConfig({componentId:"sc-c771e03e-3"})(L(),n=>n.theme.colors.gold,n=>n.theme.colors.gold),V=o.ZP.div.withConfig({componentId:"sc-c771e03e-4"})(A());var Q=n=>{let{children:e}=n;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(O,{}),(0,r.jsx)("main",{children:e}),(0,r.jsx)(c,{})]})}},5499:function(n,e,t){t.r(e),t.d(e,{CommonHeader:function(){return Y},MainLayoutStyle:function(){return B},PageDescription:function(){return E},__N_SSG:function(){return z},default:function(){return F}});var r,i=t(2095),o=t(1527),s=t(6064),a=t.n(s),c=t(9050),l=t.n(c),d=t(959),u=t(8598),h=t(9276);function f(){return(f=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(this,arguments)}var m=function(n){return d.createElement("svg",f({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,className:"chevron-down_svg__feather chevron-down_svg__feather-chevron-down",viewBox:"0 0 24 24"},n),r||(r=d.createElement("path",{d:"m6 9 6 6 6-6"})))};function p(){let n=(0,i._)(["\n  text-align: right;\n  position: relative;\n  padding: 2rem 0;\n"]);return p=function(){return n},n}function x(){let n=(0,i._)(["\n  position: absolute;\n  right:0;\n  opacity: 0;\n  pointer-events: none;\n  margin-top: .625rem;\n  border-right: 1px solid ",";\n  padding-left: 2.5rem;\n  transform: none;\n  ",";\n  transform: translateY(-0.5rem);\n  transition: opacity .5s ease, transform .5s ease;\n\n  &.is-open {\n    z-index: 1;\n    opacity: 1;\n    transform: translate(0);\n    pointer-events: auto;\n  }\n"]);return x=function(){return n},n}function g(){let n=(0,i._)(["\n  font-size: 0.875rem;\n  padding: 0.3em .6em;\n  cursor: pointer;\n  position: relative;\n  &:hover span{\n    border-bottom: solid 1px ",";\n  }\n"]);return g=function(){return n},n}function v(){let n=(0,i._)(["\n  cursor: pointer;\n  span {\n    transition: box-shadow .5s;\n    box-shadow: inset 0 -1px 0 ",";\n  }\n\n  svg {\n    transition: transform .3s;\n    margin-right: -0.4em;\n    margin-top: -2px;\n    margin-left: 2px;\n  }\n\n  span.is-open {\n    box-shadow: inset 0 -0.5em 0 ",";\n  }\n\n  svg.is-open {\n    transform: rotateX(180deg);\n  }\n\n"]);return v=function(){return n},n}function w(n){let{items:e,current:t,setCurrent:r}=n,[i,s]=(0,d.useState)(!1);return(0,o.jsxs)(b,{onClick:()=>{s(!i)},children:[(0,o.jsxs)(y,{children:[(0,o.jsxs)("span",{className:i?"is-open":"",children:[e[t][0]," ",e[t][1]]}),(0,o.jsx)(m,{className:i?"is-open":""})]}),(0,o.jsx)(j,{className:i?"is-open":"",children:e.map((n,e)=>(0,o.jsx)(_,{onClick:()=>{r(e),s(!1)},children:(0,o.jsxs)("span",{children:[n[0]," ",n[1]]})},e))})]})}let b=u.ZP.nav.withConfig({componentId:"sc-616f5a2c-0"})(p()),j=u.ZP.div.withConfig({componentId:"sc-616f5a2c-1"})(x(),n=>n.theme.colors.gold,n=>n.theme.colors.navBgGradient),_=u.ZP.div.withConfig({componentId:"sc-616f5a2c-2"})(g(),n=>n.theme.colors.gold),y=u.ZP.div.withConfig({componentId:"sc-616f5a2c-3"})(v(),n=>n.theme.colors.goldHover,n=>n.theme.colors.goldHover);var C=t(6977),k=t(5545);function P(){let n=(0,i._)(["\n  max-width: 780px;\n  margin: 0 auto;\n  padding: 0 48px 48px 48px;\n\n  @media screen and (max-width: 780px) {\n    max-width: 580px;\n  }\n\n  @media screen and (max-width: 580px) {\n    padding: 0 20px 48px 20px;\n  }\n"]);return P=function(){return n},n}function N(){let n=(0,i._)(["\n  margin-top: 2rem;\n  font-style: italic;\n  font-size: 0.875rem;\n  color: ",";\n  text-align: right;\n"]);return N=function(){return n},n}function Z(){let n=(0,i._)(["\n  display: grid;\n  grid-template-columns: repeat(2, 50%);\n  grid-row-gap: 1rem;\n  grid-column-gap: 1rem;\n\n  @media screen and (max-width: 780px) {\n    grid-template-columns: repeat(1, 100%);\n  }\n"]);return Z=function(){return n},n}function I(){let n=(0,i._)(["\n  display: block;\n  min-height: 7rem;\n  border-radius: 1rem;\n  cursor: pointer;\n  position: relative;\n  transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.1s;\n  opacity: 0;\n  animation: "," .5s ease;\n  animation-fill-mode: forwards;\n  @media (any-hover: hover) {\n    &:hover{\n      ","\n    }\n  }\n\n  @media (any-hover: none) {\n    &:active{\n      ","\n    }\n  }\n\n  .card-content {\n    padding: 1rem;\n  }\n\n  .meta {\n    margin-top: 0.25rem;\n    font-size: 0.875rem;\n  }\n\n  .date {\n    font-size: 0.9rem;\n    font-family: Dosis;\n  }\n"]);return I=function(){return n},n}function S(){let n=(0,i._)(["\n  font-size: 1.125rem;\n  font-weight: 500;\n"]);return S=function(){return n},n}var z=!0;let Y=()=>(0,o.jsxs)(d.Fragment,{children:[(0,o.jsx)("meta",{name:"description",content:"A personal blog about work and life"}),(0,o.jsx)("meta",{name:"viewport",content:"width=device-width,initial-scale=1,maximum-scale=1"}),(0,o.jsx)("link",{rel:"icon",href:"/favicon.ico"})]});function T(n){let{p:e,i:t}=n;return(0,o.jsx)(G,{href:"/posts/"+e.id,passHref:!0,style:{animationDelay:(100*t).toString()+"ms"},children:(0,o.jsxs)("div",{className:"card-content",children:[(0,o.jsx)($,{children:e.title}),(0,o.jsxs)("div",{className:"meta",children:[(0,o.jsx)("span",{className:"date",children:e.date}),(0,o.jsx)("span",{children:" | "}),(0,o.jsx)("i",{className:"icon-material-folder_open",style:{padding:"0.2em"}}),e.categories]})]})})}var F=n=>{let{posts:e,categories:t}=n,[r,i]=(0,d.useState)(0),s=(0,d.useMemo)(()=>0===r?e:e.filter(n=>n.categories===t[r][0]),[r,e,t]);return(0,o.jsxs)("div",{children:[(0,o.jsxs)(a(),{children:[(0,o.jsx)("title",{children:"Sansui - Blog"}),(0,o.jsx)(Y,{})]}),(0,o.jsx)(h.Z,{children:(0,o.jsxs)(B,{children:[(0,o.jsx)(w,{items:t,current:r,setCurrent:i}),(0,o.jsx)(H,{children:s.map((n,e)=>(0,o.jsx)(T,{p:n,i:e},n.id))})]})})]})};let B=u.ZP.div.withConfig({componentId:"sc-df320313-0"})(P()),E=u.ZP.div.withConfig({componentId:"sc-df320313-1"})(N(),n=>n.theme.colors.textGray),H=u.ZP.section.withConfig({componentId:"sc-df320313-2"})(Z()),G=(0,u.ZP)(l()).withConfig({componentId:"sc-df320313-3"})(I(),C.r$,()=>k.Gl,()=>k.Gl),$=u.ZP.span.withConfig({componentId:"sc-df320313-4"})(S())},6977:function(n,e,t){t.d(e,{ER:function(){return h},r$:function(){return u}});var r=t(2095),i=t(8598);function o(){let n=(0,r._)(["\n0% {\n  opacity: 0;\n}\n100% {\n  opacity: 1;\n}"]);return o=function(){return n},n}function s(){let n=(0,r._)(["\n0% {\n  opacity: 0;\n  transform: translateY(10px);\n}\n100% {\n  opacity: 1;\n  transform: translateY(0);\n}"]);return s=function(){return n},n}function a(){let n=(0,r._)(["\n0% {\n  -webkit-transform: translateX(50px);\n          transform: translateX(50px);\n  opacity: 0;\n}\n100% {\n  -webkit-transform: translateX(0);\n          transform: translateX(0);\n  opacity: 1;\n}\n"]);return a=function(){return n},n}function c(){let n=(0,r._)(["\n0% {\n  -webkit-filter: blur(12px);\n          filter: blur(12px);\n  opacity: 0;\n}\n100% {\n  -webkit-filter: blur(0px);\n          filter: blur(0px);\n  opacity: 1;\n}\n"]);return c=function(){return n},n}function l(){let n=(0,r._)(["\n0% {\n  transform: translateY(-100%);\n}\n100% {\n  transform: translateY(0);\n}"]);return l=function(){return n},n}function d(){let n=(0,r._)(["\n0% {\n  transform: translateY(0);\n}\n100% {\n  transform: translateY(-100%);\n}"]);return d=function(){return n},n}(0,i.F4)(o());let u=(0,i.F4)(s()),h=(0,i.F4)(a());(0,i.F4)(c()),(0,i.F4)(l()),(0,i.F4)(d())},5545:function(n,e,t){t.d(e,{FQ:function(){return h},Gl:function(){return f},Ve:function(){return u}});var r=t(2095),i=t(8598);function o(){let n=(0,r._)(["\n  -webkit-text-stroke: 1px;\n  -webkit-text-fill-color: transparent;\n"]);return o=function(){return n},n}function s(){let n=(0,r._)(["box-shadow: inset 0 -0.3em 0 ",";"]);return s=function(){return n},n}function a(){let n=(0,r._)(["box-shadow: inset 0 -0.5em 0 ",";"]);return a=function(){return n},n}function c(){let n=(0,r._)(["box-shadow: inset 0 -0.8em 0 ",";"]);return c=function(){return n},n}function l(){let n=(0,r._)(["box-shadow: inset 0 -1em 0 ",";"]);return l=function(){return n},n}function d(){let n=(0,r._)(["box-shadow: "," 0px 0.5rem 2rem;"]);return d=function(){return n},n}let u=(0,i.iv)(o()),h={s:(0,i.iv)(s(),n=>n.theme.colors.hoverBg),m:(0,i.iv)(a(),n=>n.theme.colors.hoverBg),l:(0,i.iv)(c(),n=>n.theme.colors.hoverBg),f:(0,i.iv)(l(),n=>n.theme.colors.hoverBg)},f=(0,i.iv)(d(),n=>n.theme.colors.shadowBg)}}]);