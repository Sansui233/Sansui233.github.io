"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[996],{6437:function(n,e,t){t.d(e,{Z:function(){return D}});var r=t(5893),i=t(1664),o=t.n(i),s=t(1163),c=t(7294),a=t(2125);function u(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function d(){var n=u(["\n  width: ","px;\n  height: ","px;\n  position: relative;\n"]);return d=function(){return n},n}function l(){var n=u(["\n  width: ","px;\n  background: ",";\n  height: 2px;\n  position: absolute;\n  left:0;\n  top:","px;\n  transition: all .3s;\n"]);return l=function(){return n},n}function f(){var n=u(["\n  &.is-close {\n    opacity: 0;\n  }\n"]);return f=function(){return n},n}function h(){var n=u(["\n  &.is-close {\n    transform: rotate(45deg);\n  }\n"]);return h=function(){return n},n}function m(){var n=u(["\n  &.is-close {\n    transform: rotate(-45deg);\n  }\n"]);return m=function(){return n},n}var p=a.ZP.div.withConfig({componentId:"sc-d91860bd-0"})(d(),(function(n){return n.width}),(function(n){return n.height})),x=a.ZP.div.withConfig({componentId:"sc-d91860bd-1"})(l(),(function(n){return n.size}),(function(n){return n.theme.colors.textPrimary}),(function(n){return n.top})),g=(0,a.ZP)(x).withConfig({componentId:"sc-d91860bd-2"})(f()),v=(0,a.ZP)(x).withConfig({componentId:"sc-d91860bd-3"})(h()),b=(0,a.ZP)(x).withConfig({componentId:"sc-d91860bd-4"})(m()),j=function(n){var e=n.width,t=n.height,i=n.isClose,o=(0,c.useMemo)((function(){return[0,(t-4)/2+1,t-2]}),[t]);return(0,r.jsxs)(p,{width:e,height:t,children:[(0,r.jsx)(g,{size:e,top:o[0],className:i?"is-close":""}),(0,r.jsx)(v,{size:e,top:o[1],className:i?"is-close":""}),(0,r.jsx)(b,{size:e,top:o[1],className:i?"is-close":""}),(0,r.jsx)(g,{size:e,top:o[2],className:i?"is-close":""})]})},w=t(4626),C=t(4193);function z(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function P(){var n=z(["\n  background: ",";\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  z-index: 10;\n  transform: translateY(0);\n  transition: transform 1s cubic-bezier(0.35, 0, 0.15, 1);\n\n  &.hidden {\n    transform: translateY(-100%);\n  }\n\n  h1 {\n    ","\n    span{\n      position: relative;\n    }\n    span::after {\n      content:'';\n      position: absolute;\n      left:0;\n      bottom: -1rem;\n      width: 100%;\n      height: 1px;\n      background: ",";\n    }\n  }\n"]);return P=function(){return n},n}function y(){var n=z(["\n  margin: 0 auto;\n  padding: 92px 0px;\n  text-align: center;\n  font-weight: bold;\n"]);return y=function(){return n},n}function Z(){var n=z(["\n\n  font-size: 1.625rem;\n  position: relative;\n  transition: box-shadow .3s ease;\n  cursor: pointer;\n\n  :hover {\n    box-shadow: inset 0 -0.5em 0 #ffffff55;\n    transform: scale(1.2);\n  }\n"]);return Z=function(){return n},n}function k(n){var e=n.isShow,t=(n.toggle,(0,c.useContext)(a.Ni));return(0,r.jsx)(I,{className:e?"":"hidden",children:(0,r.jsxs)(N,{style:{paddingTop:"8rem"},children:[(0,r.jsx)("h1",{children:(0,r.jsx)("span",{children:"Sansui's blog"})}),(0,r.jsx)("div",{onClick:function(){var n=(0,w.Z8)(),e="system"===n?"dark":"dark"===n?"light":"system";(0,w.wl)(e)},children:(0,r.jsxs)(O,{style:{fontSize:"1.625rem"},children:[t.mode.toUpperCase()," THEME"]})}),(0,r.jsx)("div",{children:(0,r.jsx)(O,{children:(0,r.jsx)(o(),{href:"/categories",children:"TAGS"})})}),(0,r.jsx)("div",{children:(0,r.jsx)(O,{children:(0,r.jsx)(o(),{href:"/atom.xml",children:"RSS"})})}),(0,r.jsx)("p",{style:{paddingTop:"2em"},children:"\u6301\u7eed\u5b8c\u5584\u4e2d"}),(0,r.jsx)("p",{children:"Sansui 2022 All rights reserved"})]})})}var I=a.ZP.div.withConfig({componentId:"sc-1af2c22-0"})(P(),(function(n){return n.theme.colors.bg}),(function(){return C.Ve}),(function(n){return n.theme.colors.gold})),N=a.ZP.div.withConfig({componentId:"sc-1af2c22-1"})(y()),O=a.ZP.span.withConfig({componentId:"sc-1af2c22-2"})(Z());function S(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function T(){var n=S(["\n    height: 63px;\n    width: 100%;\n    text-align: center;\n    padding-top: 0.625rem;\n    font-size: 14px;\n    opacity: .6;\n"]);return T=function(){return n},n}function Y(){var n=S(["\n  height: 63px;\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  position: fixed;\n  background-color: ",";\n  z-index:10;\n  transform: ",";\n  transition: transform .5s ease;\n"]);return Y=function(){return n},n}function E(){var n=S(["\n  flex: 1 1 auto;\n  text-align: right;\n  font-size: 0.875em;\n  cursor: pointer;\n  max-width: 63px;\n\n  & > div {\n    display: inline-block;\n    margin-left: auto;\n    margin-right: 20px;\n  }\n\n  @media screen and (max-width: 580px) {\n    & > div {\n      display: inline-block;\n      margin-right: 10px;\n    }\n  }\n"]);return E=function(){return n},n}function M(){var n=S(["\n  flex: 2 1 auto;\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  @media screen and (min-width: 780px) {\n    max-width: 50%;\n  }\n  @media screen and (min-width: 580px) {\n    max-width: 390px;\n  }\n  @media screen and (max-width: 580px) {\n    max-width: 290px;\n  }\n  \n\n  ol {\n    padding: 0 .5em;\n  }\n\n  a {\n    position: relative;\n    font-weight: 500;\n  }\n\n  a::before {\n    content: '';\n    position: absolute;\n    left: 0;\n    bottom: -3px;\n    width: 0;\n    height: 2px;\n    background: ",";\n    transition: width 1s cubic-bezier(0.34, 0.04, 0.03, 1.4), background .3s;\n  }\n    \n  a:hover::before {\n    width: 100%;\n  }\n\n  ol.current a{\n    color: ",";\n  }\n\n"]);return M=function(){return n},n}function B(){var n=S(["\n  flex: 1 1 auto;\n  max-width: 63px;\n  img {\n    z-index: 11;\n    width: 63px;\n    height: 63px;\n    float: left;\n    cursor: pointer;\n  }\n"]);return B=function(){return n},n}function _(){var n=(0,c.useContext)(a.Ni),e=(0,c.useState)(!1),t=e[0],i=e[1],u=(0,c.useState)(!1),d=u[0],l=u[1],f=(0,s.useRouter)();(0,c.useEffect)((function(){var n=globalThis.scrollY,e=function(n,e){var t=null;return(new Date).getMilliseconds(),function(){t||(n.apply(this,arguments),t=setTimeout((function(){clearTimeout(t),t=null}),e))}}((function(){if(globalThis.scrollY<63)return i(!1),void(n=globalThis.scrollY);var e=globalThis.scrollY-n;e>50?(i(!0),n=globalThis.scrollY):e<-10&&(i(!1),n=globalThis.scrollY)}),250);return globalThis.addEventListener("scroll",e,!0),function(){return window.removeEventListener("scroll",e)}}),[]);var h=function(){l(!d)};return(0,r.jsxs)(c.Fragment,{children:[(0,r.jsx)(k,{isShow:d,toggle:h}),(0,r.jsxs)(H,{isHidden:t,children:[(0,r.jsx)(L,{children:(0,r.jsx)(o(),{href:"/",passHref:!0,children:(0,r.jsx)("a",{children:(0,r.jsx)("img",{src:n.assets.favico,alt:"Sansui"})})})}),(0,r.jsxs)(F,{children:[(0,r.jsx)("ol",{className:"/"===f.pathname?"current":"",children:(0,r.jsx)(o(),{href:"/",children:"Posts"})}),(0,r.jsx)("ol",{className:"/memos"===f.pathname?"current":"",children:(0,r.jsx)(o(),{href:"/memos",children:"Memos"})}),(0,r.jsx)("ol",{className:"/about"===f.pathname?"current":"",children:(0,r.jsx)(o(),{href:"/about",children:"About"})})]}),(0,r.jsx)(A,{children:(0,r.jsx)("div",{onClick:h,children:(0,r.jsx)(j,{width:24,height:20,isClose:d})})})]}),(0,r.jsx)(G,{children:"- \u4eba\u6d3b\u7740\u5c31\u662f\u4e3a\u4e86\u5361\u5361\u897f -"})]})}var G=a.ZP.div.withConfig({componentId:"sc-8ebaf56e-0"})(T()),H=a.ZP.header.withConfig({componentId:"sc-8ebaf56e-1"})(Y(),(function(n){return n.theme.colors.bg}),(function(n){return n.isHidden?"translateY(-100%)":"translateY(0)"})),A=a.ZP.div.withConfig({componentId:"sc-8ebaf56e-2"})(E()),F=a.ZP.nav.withConfig({componentId:"sc-8ebaf56e-3"})(M(),(function(n){return n.theme.colors.gold}),(function(n){return n.theme.colors.gold})),L=a.ZP.div.withConfig({componentId:"sc-8ebaf56e-4"})(B()),D=function(n){var e=n.children;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(_,{}),(0,r.jsx)("main",{children:e})]})}},4996:function(n,e,t){t.r(e),t.d(e,{CommonHeader:function(){return N},MainLayoutStyle:function(){return S},PageDescription:function(){return T},__N_SSG:function(){return I},default:function(){return O}});var r=t(5893),i=t(9008),o=t.n(i),s=t(1664),c=t.n(s),a=t(7294),u=t(2125),d=t(6437);function l(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function f(){var n=l(["\n  text-align: right;\n  position: relative;\n  padding: 2rem 0;\n"]);return f=function(){return n},n}function h(){var n=l(["\n  position: absolute;\n  right:0;\n  opacity: 0;\n  pointer-events: none;\n  margin-top: .625rem;\n  border-right: 1px solid ",";\n  padding-left: 2.5rem;\n  transform: none;\n  ",";\n  transform: translateY(-0.5rem);\n  transition: opacity .5s ease, transform .5s ease;\n\n  &.is-open {\n    z-index: 1;\n    opacity: 1;\n    transform: translate(0);\n    pointer-events: auto;\n  }\n"]);return h=function(){return n},n}function m(){var n=l(["\n  font-size: 0.875rem;\n  padding: 0.3em .6em;\n  cursor: pointer;\n  position: relative;\n  &:hover span{\n    border-bottom: solid 1px ",";\n  }\n"]);return m=function(){return n},n}function p(){var n=l(["\n  transform: translateX(.3em);\n  span {\n    cursor: pointer;\n  }\n"]);return p=function(){return n},n}function x(n){var e=n.items,t=n.current,i=n.setCurrent,o=(0,a.useState)(!1),s=o[0],c=o[1];return(0,r.jsxs)(g,{onMouseLeave:function(){c(!1)},children:[(0,r.jsx)(j,{children:(0,r.jsxs)("span",{onMouseEnter:function(){c(!0)},onClick:function(){c(!s)},className:s?"is-open":"",children:[e[t][0],"(",e[t][1],") \u25bc"]})}),(0,r.jsx)(v,{className:s?"is-open":"",children:e.map((function(n,e){return(0,r.jsx)(b,{onClick:function(){i(e),c(!1)},children:(0,r.jsxs)("span",{children:[n[0],"(",n[1],")"]})},e)}))})]})}var g=u.ZP.nav.withConfig({componentId:"sc-17bc4746-0"})(f()),v=u.ZP.div.withConfig({componentId:"sc-17bc4746-1"})(h(),(function(n){return n.theme.colors.gold}),(function(n){return n.theme.colors.navBgGradient})),b=u.ZP.div.withConfig({componentId:"sc-17bc4746-2"})(m(),(function(n){return n.theme.colors.gold})),j=u.ZP.div.withConfig({componentId:"sc-17bc4746-3"})(p()),w=t(4193);function C(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function z(){var n=C(["\n  max-width: 780px;\n  margin: 0 auto;\n  padding: 0 48px 48px 48px;\n\n  @media screen and (max-width: 780px) {\n    max-width: 580px;\n  }\n\n  @media screen and (max-width: 580px) {\n    padding: 0 20px 48px 20px;\n  }\n"]);return z=function(){return n},n}function P(){var n=C(["\n  margin-top: 2rem;\n  font-style: italic;\n  font-size: 0.875rem;\n  color: ",";\n  text-align: right;\n"]);return P=function(){return n},n}function y(){var n=C(["\n  display: grid;\n  grid-template-columns: repeat(2, 50%);\n  grid-row-gap: 1rem;\n  grid-column-gap: 1rem;\n\n  @media screen and (max-width: 780px) {\n    grid-template-columns: repeat(1, 100%);\n  }\n"]);return y=function(){return n},n}function Z(){var n=C(["\n  display: block;\n  min-height: 6rem;\n  cursor: pointer;\n  transition: transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0s;\n  position: relative;\n\n  :hover{\n    ","\n    transform: scale(1.1);\n  }\n\n  .card-content {\n    padding: 1rem;\n  }\n\n  .meta {\n    margin-top: 0.25rem;\n    font-size: 0.875rem;\n  }\n\n  .date {\n    font-size: 0.9rem;\n    font-family: Dosis;\n  }\n"]);return Z=function(){return n},n}function k(){var n=C(["\n  font-size: 1.125rem;\n  font-weight: 500;\n"]);return k=function(){return n},n}var I=!0,N=function(){return(0,r.jsxs)(a.Fragment,{children:[(0,r.jsx)("meta",{name:"description",content:"A personal blog about work and life"}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.ico"})]})},O=function(n){var e=n.posts,t=n.categories,i=(0,a.useState)(0),s=i[0],u=i[1],l=(0,a.useMemo)((function(){return 0===s?e:e.filter((function(n){return n.categories===t[s][0]}))}),[s,e,t]);return(0,r.jsxs)("div",{children:[(0,r.jsxs)(o(),{children:[(0,r.jsx)("title",{children:"Sansui - Blog"}),(0,r.jsx)(N,{})]}),(0,r.jsx)(d.Z,{children:(0,r.jsxs)(S,{children:[(0,r.jsx)(x,{items:t,current:s,setCurrent:u}),(0,r.jsx)(Y,{children:l.map((function(n){return(0,r.jsx)(c(),{href:"/posts/"+n.id,passHref:!0,children:(0,r.jsx)(E,{children:(0,r.jsxs)("div",{className:"card-content",children:[(0,r.jsx)(M,{children:n.title}),(0,r.jsxs)("div",{className:"meta",children:[(0,r.jsx)("span",{className:"date",children:n.date})," | ",n.categories]})]})})},n.id)}))})]})})]})},S=u.ZP.div.withConfig({componentId:"sc-9fd857c5-0"})(z()),T=u.ZP.div.withConfig({componentId:"sc-9fd857c5-1"})(P(),(function(n){return n.theme.colors.textGray})),Y=u.ZP.section.withConfig({componentId:"sc-9fd857c5-2"})(y()),E=u.ZP.a.withConfig({componentId:"sc-9fd857c5-3"})(Z(),(function(){return w.Gl})),M=u.ZP.span.withConfig({componentId:"sc-9fd857c5-4"})(k())},4193:function(n,e,t){t.d(e,{FQ:function(){return f},Gl:function(){return h},Ve:function(){return l}});var r=t(2125);function i(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function o(){var n=i(["\n  -webkit-text-stroke: 1px;\n  -webkit-text-fill-color: transparent;\n"]);return o=function(){return n},n}function s(){var n=i(["box-shadow: inset 0 -0.3em 0 ",";"]);return s=function(){return n},n}function c(){var n=i(["box-shadow: inset 0 -0.5em 0 ",";"]);return c=function(){return n},n}function a(){var n=i(["box-shadow: inset 0 -0.8em 0 ",";"]);return a=function(){return n},n}function u(){var n=i(["box-shadow: inset 0 -1em 0 ",";"]);return u=function(){return n},n}function d(){var n=i(["box-shadow: "," 0px 0.5rem 2rem;"]);return d=function(){return n},n}var l=(0,r.iv)(o()),f={s:(0,r.iv)(s(),(function(n){return n.theme.colors.hoverBg})),m:(0,r.iv)(c(),(function(n){return n.theme.colors.hoverBg})),l:(0,r.iv)(a(),(function(n){return n.theme.colors.hoverBg})),f:(0,r.iv)(u(),(function(n){return n.theme.colors.hoverBg}))},h=(0,r.iv)(d(),(function(n){return n.theme.colors.shadowBg}))}}]);