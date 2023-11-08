"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[108],{7841:function(e,n,t){var r=t(1262),i=t(1527),o=t(8598),a=t(8476);function _templateObject(){let e=(0,r._)(["\n  padding: 24px 0 10px 0;\n  text-align: center;\n  font-size: 0.625rem;\n\n  div {\n    margin: 1rem auto;\n  }\n\n  a{\n    transition: color .5s;\n  }\n\n  a:hover {\n    color: ",";\n  }\n\n  i {\n    font-size: 1.5rem;\n    margin: 0 0.5rem;\n  }\n"]);return _templateObject=function(){return e},e}let c=o.ZP.div.withConfig({componentId:"sc-f78c3893-0"})(_templateObject(),e=>e.theme.colors.goldHover);n.Z=()=>(0,i.jsxs)(c,{children:[(0,i.jsx)("a",{href:a.d.social.github,children:(0,i.jsx)("i",{className:"icon-github-rounded"})}),(0,i.jsx)("a",{href:"mailto:".concat(a.d.social.email),children:(0,i.jsx)("i",{className:"icon-email-rounded"})}),(0,i.jsx)("a",{href:"/rss",children:(0,i.jsx)("i",{className:"icon-rss-rounded"})}),(0,i.jsxs)("div",{children:["Code & Design by Sansui 2023"," ",(0,i.jsx)("br",{})," ","All rights reserved"]})]})},8743:function(e,n,t){t.d(n,{Z:function(){return Topbar}});var r=t(1262),i=t(1527),o=t(1557),a=t.n(o),c=t(3638),l=t(959),s=t(8598),d=t(1702),m=t(8476),p=t(8029),u=t(3433);function _templateObject(){let e=(0,r._)(["\n  min-width: 60px;\n  min-height: 60px;\n  z-index: 20;\n  background: ",";\n  border: 1px solid ",";\n  border-radius: 5px;\n  transform: scale3d(1, 1, 1); /* New layer*/\n  ","\n"]);return _templateObject=function(){return e},e}let h=s.zo.div(_templateObject(),e=>e.theme.colors.bg,e=>e.theme.colors.uiLineGray,()=>u.N8);function SearchBox_templateObject(){let e=(0,r._)(["\n  overflow-y: scroll;\n  max-height: 60vh;\n"]);return SearchBox_templateObject=function(){return e},e}function _templateObject1(){let e=(0,r._)(["\n  position: sticky;\n  top: 0;\n  background: ",";\n"]);return _templateObject1=function(){return e},e}function _templateObject2(){let e=(0,r._)(["\n  border: none;\n  /*border-bottom: 1px solid ",";*/\n  border-radius: 0;\n  background: ",";\n  width: 100%;\n  color: ",";\n\n\n  &:focus,\n  &:focus-visible{\n    outline: none;\n    /*border-bottom: 1px solid ",";*/\n  }\n"]);return _templateObject2=function(){return e},e}function _templateObject3(){let e=(0,r._)(["\n  padding: 0.375rem 0;\n  display: block;\n  padding-left: 1rem;\n\n  \n  &:hover>span{\n    box-shadow: inset 0 -0.5em 0 ",';\n  }\n\n  &>span {\n    transition: box-shadow .5s;\n    position: relative;\n  }\n\n  &>span::before {\n    content: "•";\n    color: ',";\n    left: -0.875rem;\n    position: absolute;\n  }\n  \n"]);return _templateObject3=function(){return e},e}function _templateObject4(){let e=(0,r._)(["\n  font-size: 0.875rem;\n  color: ",";\n  overflow: hidden;\n  white-space: nowrap;\n  wrap: no-wrap;\n"]);return _templateObject4=function(){return e},e}function _templateObject5(){let e=(0,r._)(["\n  min-height: unset;\n  position: fixed;\n  top: 55px;\n  right: 0px;\n  width: 24rem;\n  overflow: hidden;\n  margin: 0 10px;\n  \n  & mark {\n    background: none;\n    color: ","\n  }\n\n  @media screen and (max-width: 580px){\n    width: 96%;\n    max-height:50%\n  }\n"]);return _templateObject5=function(){return e},e}function SearchBox(e){let{outSetSearch:n,stateToInner:t,iconEle:r,type:o="article"}=e,[a,c]=(0,l.useState)(),[s,m]=(0,l.useState)([]),[u,h]=(0,l.useState)(t),O=(0,l.useRef)(null),v=(0,l.useRef)(null),[w,y]=(0,l.useState)(!1),S=(0,l.useCallback)(e=>{n(e),h(e)},[n]);(0,l.useEffect)(()=>{h(t)},[t]),(0,l.useEffect)(()=>{function handleClick(e){var n;let t=O.current&&O.current.contains(e.target),i=r.current&&(null===(n=r.current)||void 0===n?void 0:n.contains(e.target));t||i||S(!1)}function close(e){"Escape"===e.key&&S(!1)}return document.addEventListener("mousedown",e=>handleClick(e),!1),document.addEventListener("keydown",e=>{close(e)},!1),()=>{document.removeEventListener("mousedown",e=>handleClick(e),!1),document.removeEventListener("keydown",e=>{close(e)},!1)}},[r,S]),(0,l.useEffect)(()=>{if(u){var e;null===(e=v.current)||void 0===e||e.focus()}},[u]),(0,l.useEffect)(()=>{"article"===o&&fetch("/data/posts/index.json").then(e=>e.json()).then(e=>{let n=new p.x({data:e,field:["title","description","keywords","content"],notifier:m});c(n),y(!0)})},[o]);let C=(0,d.D)(function(e){let n=e.target.value.split(" ");v.current&&(null==a||a.search(n))},300);function highlightSlot(e,n){if(!n)return e;"string"==typeof n&&(n=[n]);let t=RegExp("(".concat(n.join("|"),")"),"gi"),r=e.split(t);return(0,i.jsx)(i.Fragment,{children:r.map((e,n)=>t.test(e)?(0,i.jsx)("mark",{children:e},n):(0,i.jsx)("span",{children:e},n))})}return(0,i.jsxs)(_,{ref:O,style:u?{}:{display:"none"},children:[(0,i.jsx)(b,{style:{padding:"1rem 1rem 0 1rem"},children:(0,i.jsx)(x,{type:"text",placeholder:"搜索你感兴趣的内容，以空格分词",ref:v,onInput:C})}),(0,i.jsx)(f,{style:{padding:"0.5rem 1rem "},children:w?s.map((e,n)=>{var t,r;let o=e.id.substring(0,e.id.lastIndexOf("."));return(0,i.jsxs)(j,{href:"/posts/".concat(o),onClick:()=>{S(!1)},children:[(0,i.jsx)("span",{children:highlightSlot(e.title,null===(t=e.matches)||void 0===t?void 0:t.map(e=>e.word))}),null===(r=e.matches)||void 0===r?void 0:r.map(e=>e.excerpt?(0,i.jsx)(g,{children:highlightSlot(e.excerpt,e.word)},e.word):void 0)]},n)}):(0,i.jsx)("div",{style:{fontSize:"0.875rem",opacity:.5},children:(0,i.jsx)(g,{children:"搜索初始化中……"})})})]})}let f=s.ZP.div.withConfig({componentId:"sc-825e023-0"})(SearchBox_templateObject()),b=s.ZP.div.withConfig({componentId:"sc-825e023-1"})(_templateObject1(),e=>e.theme.colors.bg),x=s.ZP.input.withConfig({componentId:"sc-825e023-2"})(_templateObject2(),e=>e.theme.colors.uiLineGray,e=>e.theme.colors.bg,e=>e.theme.colors.textPrimary,e=>e.theme.colors.goldHover),j=(0,s.ZP)(a()).withConfig({componentId:"sc-825e023-3"})(_templateObject3(),e=>e.theme.colors.goldHover,e=>e.theme.colors.gold),g=s.ZP.div.withConfig({componentId:"sc-825e023-4"})(_templateObject4(),e=>e.theme.colors.textGray),_=(0,s.ZP)(h).withConfig({componentId:"sc-825e023-5"})(_templateObject5(),e=>e.theme.colors.gold);var O=SearchBox;function MenuIcon_templateObject(){let e=(0,r._)(["\n  width: ",";\n  height: ",";\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  cursor: pointer;\n"]);return MenuIcon_templateObject=function(){return e},e}function MenuIcon_templateObject1(){let e=(0,r._)(["\n  background: ",";\n  height: 2px;\n  transition: all .3s;\n  border-radius: 2px;\n\n  &.is-close {\n    opacity: 0;\n  }\n"]);return MenuIcon_templateObject1=function(){return e},e}function MenuIcon_templateObject2(){let e=(0,r._)(["transform: rotate(45deg);"]);return MenuIcon_templateObject2=function(){return e},e}function MenuIcon_templateObject3(){let e=(0,r._)(["transform: rotate(-45deg);"]);return MenuIcon_templateObject3=function(){return e},e}function MenuIcon_templateObject4(){let e=(0,r._)(["\n  height: 2px;\n  position: relative;\n  border-radius: 2px;\n\n\n  &::before,\n  &::after {\n    content: '';\n    position: absolute;\n    border-radius: 2px;\n    top:0;\n    left: 0;\n    width: 100%;\n    height: 2px;\n    background: ",";\n    transition: all .3s;\n  }\n\n  &::before {\n    ","\n  }\n  &::after {\n    ","\n  }\n"]);return MenuIcon_templateObject4=function(){return e},e}let v=s.ZP.div.withConfig({componentId:"sc-a7603314-0"})(MenuIcon_templateObject(),e=>e.width,e=>e.height?e.height:"100%"),w=s.ZP.div.withConfig({componentId:"sc-a7603314-1"})(MenuIcon_templateObject1(),e=>e.theme.colors.textPrimary),y=s.ZP.div.withConfig({componentId:"sc-a7603314-2"})(MenuIcon_templateObject4(),e=>e.theme.colors.textPrimary,e=>e.$isClose?(0,s.iv)(MenuIcon_templateObject2()):"",e=>e.$isClose?(0,s.iv)(MenuIcon_templateObject3()):"");var Topbar_MenuIcon=e=>{let{width:n="1em",height:t="1em",isClose:r,isCloseToggler:o}=e;return(0,i.jsxs)(v,{width:n,height:t,onClick:o,children:[(0,i.jsx)(w,{className:r?"is-close":""}),(0,i.jsx)(y,{$isClose:r}),(0,i.jsx)(w,{className:r?"is-close":""})]})},S=t(6271);function Sidebar_templateObject(){let e=(0,r._)(["\n  width: 24px;\n  height: 20px;\n  position: fixed;\n  top: 22px;\n  right: 20px;\n"]);return Sidebar_templateObject=function(){return e},e}function Sidebar_templateObject1(){let e=(0,r._)(["\n  font-weight: 400;\n  padding-top: 4rem;\n  font-size: 0.625rem;\n"]);return Sidebar_templateObject1=function(){return e},e}function Sidebar_templateObject2(){let e=(0,r._)(["\n  margin: 0.5rem 0;\n  a{\n    transition: color .5s;\n  }\n\n  a:hover {\n    color: ",";\n  }\n\n  i {\n    font-size: 1.5rem;\n    margin: 0 0.5rem;\n  }\n"]);return Sidebar_templateObject2=function(){return e},e}function Sidebar_templateObject3(){let e=(0,r._)(["\n  background: ",";\n  overflow: auto;\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  z-index: 10;\n  transform: translateY(0);\n  transition: transform 1s cubic-bezier(0.46, 0, 0.08, 1.11);\n\n  &.hidden {\n    transform: translateY(-100%);\n  }\n\n  h1 {\n    ","\n    span{\n      position: relative;\n    }\n    span::after {\n      content:'';\n      position: absolute;\n      left:0;\n      bottom: -1rem;\n      width: 100%;\n      height: 1px;\n      background: ",";\n    }\n  }\n"]);return Sidebar_templateObject3=function(){return e},e}function Sidebar_templateObject4(){let e=(0,r._)(["\n  margin: 0 auto;\n  padding: 92px 0px;\n  text-align: center;\n  font-weight: bold;\n"]);return Sidebar_templateObject4=function(){return e},e}function Sidebar_templateObject5(){let e=(0,r._)(["\n\n  font-size: 1.625rem;\n  line-height: 2.75rem;\n  position: relative;\n  transition: box-shadow .3s ease;\n  cursor: pointer;\n\n  &:hover {\n    ","\n    transform: scale(1.2);\n  }\n"]);return Sidebar_templateObject5=function(){return e},e}function Sidebar(e){let{isShow:n,toggle:t}=e,r=(0,l.useContext)(s.Ni);function handleThemeChange(){let e=(0,S.Z8)();(0,S.wl)("system"===e?"dark":"dark"===e?"light":"system")}let o=(0,l.useMemo)(()=>{let e=r.mode;return"system"===e?"系统外观":"dark"===e?"夜间模式":"日间模式"},[r]);return(0,i.jsxs)(P,{className:n?"":"hidden",children:[(0,i.jsxs)(T,{style:{paddingTop:"8rem"},children:[(0,i.jsx)("h1",{children:(0,i.jsx)("span",{children:"SANSUI'S BLOG"})}),(0,i.jsx)("div",{onClick:handleThemeChange,children:(0,i.jsx)(Z,{children:o})}),(0,i.jsx)("div",{children:(0,i.jsx)(Z,{children:(0,i.jsx)(a(),{href:"/categories",children:"分类"})})}),(0,i.jsx)("div",{children:(0,i.jsx)(Z,{children:(0,i.jsx)(a(),{href:"/atom.xml",children:"RSS"})})}),(0,i.jsxs)(k,{children:[(0,i.jsxs)(I,{children:[(0,i.jsx)("a",{href:m.d.social.github,children:(0,i.jsx)("i",{className:"icon-github-rounded"})}),(0,i.jsx)("a",{href:"mailto:".concat(m.d.social.email),children:(0,i.jsx)("i",{className:"icon-email-rounded"})}),(0,i.jsx)("a",{href:"/rss",children:(0,i.jsx)("i",{className:"icon-rss-rounded"})})]}),(0,i.jsx)("div",{children:"Sansui 2022 All rights reserved"})]})]}),(0,i.jsx)(C,{children:(0,i.jsx)(Topbar_MenuIcon,{isClose:!0,isCloseToggler:t})})]})}let C=s.ZP.div.withConfig({componentId:"sc-e41c1781-0"})(Sidebar_templateObject()),k=s.ZP.div.withConfig({componentId:"sc-e41c1781-1"})(Sidebar_templateObject1()),I=s.ZP.div.withConfig({componentId:"sc-e41c1781-2"})(Sidebar_templateObject2(),e=>e.theme.colors.gold),P=s.ZP.div.withConfig({componentId:"sc-e41c1781-3"})(Sidebar_templateObject3(),e=>e.theme.colors.bg,()=>u.Ve,e=>e.theme.colors.gold),T=s.ZP.div.withConfig({componentId:"sc-e41c1781-4"})(Sidebar_templateObject4()),Z=s.ZP.span.withConfig({componentId:"sc-e41c1781-5"})(Sidebar_templateObject5(),u._j);function Topbar_templateObject(){let e=(0,r._)(["\n  ","\n  ","\n  transform: translateY(0.145rem);\n  transition: color 0.3s ease;\n\n  &:hover {\n    color: ",";\n  }\n\n  @media screen and (max-width: 780px) {\n    ","\n  }\n\n"]);return Topbar_templateObject=function(){return e},e}function Topbar_templateObject1(){let e=(0,r._)(["\n    height: 63px;\n    width: 100%;\n    text-align: center;\n    padding-top: 0.625rem;\n    font-size: 0.625rem;\n    font-style: italic;\n    color: ",";\n    font-family: 'Times New Roman', STSong, '宋体', serif;\n    opacity: .6;\n"]);return Topbar_templateObject1=function(){return e},e}function Topbar_templateObject2(){let e=(0,r._)(["\n  height: 63px;\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  position: fixed;\n  background-color: ",";\n  z-index:10;\n  transform: ",";\n  transition: transform .5s ease;\n"]);return Topbar_templateObject2=function(){return e},e}function Topbar_templateObject3(){let e=(0,r._)(["\n  flex: 1 1 auto;\n  display: flex;\n  align-items: center;\n  height: 100%;\n  justify-content: flex-end;\n\n"]);return Topbar_templateObject3=function(){return e},e}function Topbar_templateObject4(){let e=(0,r._)(["\n  flex: 1 1 auto;\n  display: flex;\n  img {\n    margin-left: 10px;\n    z-index: 11;\n    width: 63px;\n    height: 63px;\n    float: left;\n    cursor: pointer;\n  }\n  justify-content: flex-start;\n\n  @media screen and (max-width: 580px){\n    img {\n      width: 48px;\n      height: 48px;\n    }\n  }\n  @media screen and (max-width: 350px){\n    display: none\n  }\n"]);return Topbar_templateObject4=function(){return e},e}function Topbar_templateObject5(){let e=(0,r._)(["\n  text-align: right;\n  font-size: 0.875em;\n  \n  & > div {\n    margin-right: 15px;\n  }\n\n  @media screen and (max-width: 580px) {\n    & > div {\n      margin-right: 16px;\n      padding: 1px 0;\n    }\n  }\n"]);return Topbar_templateObject5=function(){return e},e}function _templateObject6(){let e=(0,r._)(["\n  flex: 2 1 auto;\n  display: flex;\n  justify-content: space-evenly;\n  letter-spacing: 0.02em;\n  align-items: center;\n\n\n  @media screen and (min-width: 780px) {\n    max-width: 50%;\n  }\n  @media screen and (min-width: 580px) {\n    max-width: 390px;\n  }\n  @media screen and (max-width: 580px) {\n    max-width: 290px;\n  }\n  \n\n  ol {\n    padding: 0 .5em;\n    padding-top: 2px;\n  }\n\n  a {\n    position: relative;\n    font-weight: bold;\n  }\n\n  a::before {\n    content: '';\n    position: absolute;\n    left: 0;\n    bottom: -3px;\n    width: 0;\n    height: 2px;\n    background: ",";\n    transition: width 1s cubic-bezier(0.34, 0.04, 0.03, 1.4), background .3s;\n  }\n    \n  a:hover::before {\n    width: 100%;\n  }\n\n  ol.current a{\n    color: ",";\n  }\n\n"]);return _templateObject6=function(){return e},e}function Topbar(e){let{placeHolder:n=!0,scrollElem:t,hideSearch:r,...o}=e,p=(0,l.useContext)(s.Ni),[u,h]=(0,l.useState)(!1),[f,b]=(0,l.useState)(!1),[x,j]=(0,l.useState)(!1),g=(0,c.useRouter)(),_=(0,l.useRef)(null);(0,l.useEffect)(()=>{let e=globalThis;t&&(e=t).scrollTop;let getScrollPos=()=>t&&t instanceof HTMLElement?t.scrollTop:globalThis.scrollY,n=getScrollPos(),r=(0,d.P)(()=>{if(200>getScrollPos()){h(!1),n=getScrollPos();return}let e=getScrollPos()-n;e>10?(h(!0),n=getScrollPos()):e<-10&&(h(!1),n=getScrollPos())},100);return e.addEventListener("scroll",r),()=>{e.removeEventListener("scroll",r)}},[t]);let toggleSidebar=()=>{b(!f)},clickSearch=e=>{j(!x)};return(0,i.jsxs)(l.Fragment,{children:[(0,i.jsx)(O,{outSetSearch:e=>{j(e)},stateToInner:x,iconEle:_}),(0,i.jsx)(Sidebar,{isShow:f,toggle:toggleSidebar}),(0,i.jsxs)(z,{$isHidden:u,...o,children:[(0,i.jsx)(L,{children:(0,i.jsx)(a(),{href:"/",passHref:!0,children:(0,i.jsx)("img",{src:p.assets.favico,alt:m.d.author})})}),(0,i.jsxs)($,{children:[(0,i.jsx)("ol",{className:"/"===g.pathname?"current":"",children:(0,i.jsx)(a(),{href:"/",children:"Posts"})}),(0,i.jsx)("ol",{className:"/memos"===g.pathname?"current":"",children:(0,i.jsx)(a(),{href:"/memos",children:"Memos"})}),(0,i.jsx)("ol",{className:"/about"===g.pathname?"current":"",children:(0,i.jsx)(a(),{href:"/about",children:"About"})})]}),(0,i.jsxs)(H,{children:[(0,i.jsx)(N,{ref:_,onClick:e=>{r||clickSearch(e)},$isSearch:x,$hideSearch:r,children:(0,i.jsx)("i",{className:"icon-search",style:{fontSize:"1.725rem"}})}),(0,i.jsx)("div",{onClick:toggleSidebar,style:{marginRight:"20px",width:"22px"},children:(0,i.jsx)(Topbar_MenuIcon,{width:"100%",height:"21px",isClose:f})})]})]}),!1===n?null:(0,i.jsx)(E,{children:"人活着就是为了卡卡西"})]})}let N=s.ZP.div.withConfig({componentId:"sc-76e2481-0"})(Topbar_templateObject(),e=>e.$hideSearch?"opacity:0;":null,e=>e.$isSearch?"color:"+e.theme.colors.gold+";":"",e=>e.theme.colors.goldHover,e=>e.$hideSearch?"display:none;":null),E=s.ZP.div.withConfig({componentId:"sc-76e2481-1"})(Topbar_templateObject1(),e=>e.theme.colors.gold),z=s.ZP.header.withConfig({componentId:"sc-76e2481-2"})(Topbar_templateObject2(),e=>e.theme.colors.bg,e=>e.$isHidden?"translateY(-100%)":"translateY(0)"),M=s.ZP.div.withConfig({componentId:"sc-76e2481-3"})(Topbar_templateObject3()),L=(0,s.ZP)(M).withConfig({componentId:"sc-76e2481-4"})(Topbar_templateObject4()),H=(0,s.ZP)(M).withConfig({componentId:"sc-76e2481-5"})(Topbar_templateObject5()),$=s.ZP.nav.withConfig({componentId:"sc-76e2481-6"})(_templateObject6(),e=>e.theme.colors.gold,e=>e.theme.colors.gold)},3797:function(e,n,t){t.d(n,{Uq:function(){return TwoColLayout},kn:function(){return s}});var r=t(1262),i=t(1527),o=t(959),a=t(8598),c=t(7841),l=t(8743);function _templateObject(){let e=(0,r._)(["\n  max-width: 780px;\n  margin: 0 auto;\n  padding: 0px 48px 48px 48px;\n\n  @media screen and (max-width: 780px) {\n    max-width: 580px;\n  }\n\n  @media screen and (max-width: 580px) {\n    padding: 0 20px 48px 20px;\n  }\n"]);return _templateObject=function(){return e},e}function _templateObject1(){let e=(0,r._)(["\n  display: flex;\n  justify-content: center;\n\n  @media screen and (max-width: 780px) {\n    flex-direction: column;\n\n  }\n\n  @media screen and (max-width: 580px) {\n  }\n\n"]);return _templateObject1=function(){return e},e}function _templateObject2(){let e=(0,r._)(["\n  flex: 3 1 0;\n  display: flex;\n  flex-direction: column;\n  @media screen and (max-width: 780px) {\n    flex: 1 1 0;\n  }\n\n"]);return _templateObject2=function(){return e},e}function _templateObject3(){let e=(0,r._)(["\n  flex: 1 1 0;\n  display: flex;\n  flex-direction: column;\n\n  position: sticky;\n  top: 0px;\n  max-height: 100vh;\n"]);return _templateObject3=function(){return e},e}n.ZP=e=>{let{children:n,...t}=e;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(l.Z,{}),(0,i.jsx)("main",{...t,children:n}),(0,i.jsx)(c.Z,{})]})};let s=a.ZP.div.withConfig({componentId:"sc-f013877a-0"})(_templateObject()),TwoColLayout=e=>{let{sep:n,siderLocation:t,children:r,...a}=e,c=n>1?n:1,l=o.Children.toArray(r),s=l.slice(0,c),u=l.slice(c);return(0,i.jsxs)(d,{...a,children:["left"===t?(0,i.jsx)(p,{children:u}):(0,i.jsx)(m,{children:s}),"right"===t?(0,i.jsx)(p,{children:u}):(0,i.jsx)(m,{children:s})]})},d=a.ZP.div.withConfig({componentId:"sc-f013877a-1"})(_templateObject1()),m=a.ZP.div.withConfig({componentId:"sc-f013877a-2"})(_templateObject2()),p=a.ZP.div.withConfig({componentId:"sc-f013877a-3"})(_templateObject3())},8029:function(e,n,t){t.d(n,{x:function(){return Naive}});var r=t(1702);let Engine=class Engine{};var i=JSON.parse('["、","。","〈","〉","《","》","一","一个","一些","一何","一切","一则","一方面","一旦","一来","一样","一种","一般","一转眼","七","万一","三","上","上下","下","不","不仅","不但","不光","不单","不只","不外乎","不如","不妨","不尽","不尽然","不得","不怕","不惟","不成","不拘","不料","不是","不比","不然","不特","不独","不管","不至于","不若","不论","不过","不问","与","与其","与其说","与否","与此同时","且","且不说","且说","两者","个","个别","中","临","为","为了","为什么","为何","为止","为此","为着","乃","乃至","乃至于","么","之","之一","之所以","之类","乌乎","乎","乘","九","也","也好","也罢","了","二","二来","于","于是","于是乎","云云","云尔","五","些","亦","人","人们","人家","什","什么","什么样","今","介于","仍","仍旧","从","从此","从而","他","他人","他们","他们们","以","以上","以为","以便","以免","以及","以故","以期","以来","以至","以至于","以致","们","任","任何","任凭","会","似的","但","但凡","但是","何","何以","何况","何处","何时","余外","作为","你","你们","使","使得","例如","依","依据","依照","便于","俺","俺们","倘","倘使","倘或","倘然","倘若","借","借傥然","假使","假如","假若","做","像","儿","先不先","光","光是","全体","全部","八","六","兮","共","关于","关于具体地说","其","其一","其中","其二","其他","其余","其它","其次","具体地说","具体说来","兼之","内","再","再其次","再则","再有","再者","再者说","再说","冒","冲","况且","几","几时","凡","凡是","凭","凭借","出于","出来","分","分别","则","则甚","别","别人","别处","别是","别的","别管","别说","到","前后","前此","前者","加之","加以","区","即","即令","即使","即便","即如","即或","即若","却","去","又","又及","及","及其","及至","反之","反而","反过来","反过来说","受到","另","另一方面","另外","另悉","只","只当","只怕","只是","只有","只消","只要","只限","叫","叮咚","可","可以","可是","可见","各","各个","各位","各种","各自","同","同时","后","后者","向","向使","向着","吓","吗","否则","吧","吧哒","含","吱","呀","呃","呕","呗","呜","呜呼","呢","呵","呵呵","呸","呼哧","咋","和","咚","咦","咧","咱","咱们","咳","哇","哈","哈哈","哉","哎","哎呀","哎哟","哗","哟","哦","哩","哪","哪个","哪些","哪儿","哪天","哪年","哪怕","哪样","哪边","哪里","哼","哼唷","唉","唯有","啊","啐","啥","啦","啪达","啷当","喂","喏","喔唷","喽","嗡","嗡嗡","嗬","嗯","嗳","嘎","嘎登","嘘","嘛","嘻","嘿","嘿嘿","四","因","因为","因了","因此","因着","因而","固然","在","在下","在于","地","基于","处在","多","多么","多少","大","大家","她","她们","好","如","如上","如上所述","如下","如何","如其","如同","如是","如果","如此","如若","始而","孰料","孰知","宁","宁可","宁愿","宁肯","它","它们","对","对于","对待","对方","对比","将","小","尔","尔后","尔尔","尚且","就","就是","就是了","就是说","就算","就要","尽","尽管","尽管如此","岂但","己","已","已矣","巴","巴巴","年","并","并且","庶乎","庶几","开外","开始","归","归齐","当","当地","当然","当着","彼","彼时","彼此","往","待","很","得","得了","怎","怎么","怎么办","怎么样","怎奈","怎样","总之","总的来看","总的来说","总的说来","总而言之","恰恰相反","您","惟其","慢说","我","我们","或","或则","或是","或曰","或者","截至","所","所以","所在","所幸","所有","才","才能","打","打从","把","抑或","拿","按","按照","换句话说","换言之","据","据此","接着","故","故此","故而","旁人","无","无宁","无论","既","既往","既是","既然","日","时","时候","是","是以","是的","更","曾","替","替代","最","月","有","有些","有关","有及","有时","有的","望","朝","朝着","本","本人","本地","本着","本身","来","来着","来自","来说","极了","果然","果真","某","某个","某些","某某","根据","欤","正值","正如","正巧","正是","此","此地","此处","此外","此时","此次","此间","毋宁","每","每当","比","比及","比如","比方","没奈何","沿","沿着","漫说","点","焉","然则","然后","然而","照","照着","犹且","犹自","甚且","甚么","甚或","甚而","甚至","甚至于","用","用来","由","由于","由是","由此","由此可见","的","的确","的话","直到","相对而言","省得","看","眨眼","着","着呢","矣","矣乎","矣哉","离","秒","称","竟而","第","等","等到","等等","简言之","管","类如","紧接着","纵","纵令","纵使","纵然","经","经过","结果","给","继之","继后","继而","综上所述","罢了","者","而","而且","而况","而后","而外","而已","而是","而言","能","能否","腾","自","自个儿","自从","自各儿","自后","自家","自己","自打","自身","至","至于","至今","至若","致","般的","若","若夫","若是","若果","若非","莫不然","莫如","莫若","虽","虽则","虽然","虽说","被","要","要不","要不是","要不然","要么","要是","譬喻","譬如","让","许多","论","设使","设或","设若","诚如","诚然","该","说","说来","请","诸","诸位","诸如","谁","谁人","谁料","谁知","贼死","赖以","赶","起","起见","趁","趁着","越是","距","跟","较","较之","边","过","还","还是","还有","还要","这","这一来","这个","这么","这么些","这么样","这么点儿","这些","这会儿","这儿","这就是说","这时","这样","这次","这般","这边","这里","进而","连","连同","逐步","通过","遵循","遵照","那","那个","那么","那么些","那么样","那些","那会儿","那儿","那时","那样","那般","那边","那里","都","鄙人","鉴于","针对","阿","除","除了","除外","除开","除此之外","除非","随","随后","随时","随着","难道说","零","非","非但","非徒","非特","非独","靠","顺","顺着","首先","︿","！","＃","＄","％","＆","（","）","＊","＋","，","０","１","２","３","４","５","６","７","８","９","：","；","＜","＞","？","＠","［","］","｛","｜","｝","～","￥"]');let Naive=class Naive extends Engine{async search(e){if(0===(e=e.map(e=>e.replace(/^\s+|\s+$/g,"")).filter(e=>""!==e)).length){this.notifyInstant([]);return}this._tasks_add(e),await Promise.all(this.tasks),this.res.length>1&&void 0!==this.res[0].matches&&(this.res=this.res.sort((e,n)=>e.matches.length>n.matches.length?-1:1)),this.notifyInstant([...this.res]),this._clear()}_tasks_add(e){this.data.forEach(n=>{this.tasks.push(this.find(e,n))})}_clear(){this.tasks=[],this.res=[]}find(e,n,t){return new Promise(t=>{for(let t=0;t<this.field.length;t++){let r=this.field[t];if(r in n){if("tags"===r){let t=e.filter(e=>"#"===e[0]).map(e=>e.slice(0)),i=n[r].filter(e=>e in t);if(!(i.length>0))continue;this.res.push({id:n.id,title:n.title,matches:i.map(e=>({word:e}))});break}{let t=this._match(n[r].toLowerCase(),e.map(e=>e.toLocaleLowerCase()));if(0!==t.length){let e=t.map(e=>{let t=e.index-10<0?0:e.index-10,i=e.index+40>n[r].length?n[r].length:e.index+40;return{word:e.word,excerpt:"title"!==r?n[r].slice(t,i).replaceAll("\n",""):void 0}});this.res.push({id:n.id,title:n.title,matches:e});break}}}}0!==this.res.length&&this.notify&&this.notify([...this.res]),t()})}_match(e,n){let t=[];for(let r of n){if(i.includes(r))break;if(/^[A-Za-z]+$/.test(r)){let n=RegExp("\\b".concat(r,"\\b"),"i"),i=n.exec(e);if(i)t.push({word:r,index:i.index});else break}else{let n=e.indexOf(r);if(-1!==n)t.push({word:r,index:n});else break}}return t}_isStopword(e){if(i.includes(e))return!0}constructor(e){super(),this.data=e.data,this.field=e.field,this.tasks=[],this.res=[],this.notify=e.disableStreamNotify?void 0:(0,r.P)(e.notifier,125),this.notifyInstant=e.notifier}}},1702:function(e,n,t){function throttle(e,n){let t=null;return function(){t||(e.apply(this,arguments),t=setTimeout(()=>{clearTimeout(t),t=null},n))}}function debounce(e,n){let t,r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return function(){for(var i=arguments.length,o=Array(i),a=0;a<i;a++)o[a]=arguments[a];let c=this,l=r&&!t;"number"==typeof t&&clearTimeout(t),t=setTimeout(()=>{t=null,r||e.apply(c,o)},n),l&&e.apply(c,o)}}t.d(n,{D:function(){return debounce},P:function(){return throttle}})},7108:function(e,n,t){t.r(n),t.d(n,{CommonHead:function(){return CommonHead},__N_SSG:function(){return _},default:function(){return pages}});var r,i=t(1262),o=t(1527),a=t(3522),c=t.n(a),l=t(1557),s=t.n(l),d=t(959),m=t(8598),p=t(3797);function _extends(){return(_extends=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var chevron_down=function(e){return d.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,className:"chevron-down_svg__feather chevron-down_svg__feather-chevron-down",viewBox:"0 0 24 24"},e),r||(r=d.createElement("path",{d:"m6 9 6 6 6-6"})))};function _templateObject(){let e=(0,i._)(["\n  text-align: right;\n  position: relative;\n  padding: 2rem 0;\n"]);return _templateObject=function(){return e},e}function _templateObject1(){let e=(0,i._)(["\n  position: absolute;\n  right:0;\n  opacity: 0;\n  pointer-events: none;\n  margin-top: .625rem;\n  border-right: 1px solid ",";\n  padding-left: 2.5rem;\n  transform: none;\n  ",";\n  transform: translateY(-0.5rem);\n  transition: opacity .5s ease, transform .5s ease;\n\n  &.is-open {\n    z-index: 1;\n    opacity: 1;\n    transform: translate(0);\n    pointer-events: auto;\n  }\n"]);return _templateObject1=function(){return e},e}function _templateObject2(){let e=(0,i._)(["\n  font-size: 0.875rem;\n  padding: 0.3em .6em;\n  cursor: pointer;\n  position: relative;\n  &:hover span{\n    border-bottom: solid 1px ",";\n  }\n"]);return _templateObject2=function(){return e},e}function _templateObject3(){let e=(0,i._)(["\n  cursor: pointer;\n  span {\n    transition: box-shadow .5s;\n    box-shadow: inset 0 -1px 0 ",";\n  }\n\n  svg {\n    transition: transform .3s;\n    margin-right: -0.4em;\n    margin-top: -2px;\n    margin-left: 2px;\n  }\n\n  span.is-open {\n    box-shadow: inset 0 -0.5em 0 ",";\n  }\n\n  svg.is-open {\n    transform: rotateX(180deg);\n  }\n\n"]);return _templateObject3=function(){return e},e}function NavDropper(e){let{items:n,current:t,setCurrent:r}=e,[i,a]=(0,d.useState)(!1);return(0,o.jsxs)(u,{onClick:()=>{a(!i)},children:[(0,o.jsxs)(b,{children:[(0,o.jsxs)("span",{className:i?"is-open":"",children:[n[t][0]," ",n[t][1]]}),(0,o.jsx)(chevron_down,{className:i?"is-open":""})]}),(0,o.jsx)(h,{className:i?"is-open":"",children:n.map((e,n)=>(0,o.jsx)(f,{onClick:()=>{r(n),a(!1)},children:(0,o.jsxs)("span",{children:[e[0]," ",e[1]]})},n))})]})}let u=m.ZP.nav.withConfig({componentId:"sc-2cc55da7-0"})(_templateObject()),h=m.ZP.div.withConfig({componentId:"sc-2cc55da7-1"})(_templateObject1(),e=>e.theme.colors.gold,e=>e.theme.colors.navBgGradient),f=m.ZP.div.withConfig({componentId:"sc-2cc55da7-2"})(_templateObject2(),e=>e.theme.colors.gold),b=m.ZP.div.withConfig({componentId:"sc-2cc55da7-3"})(_templateObject3(),e=>e.theme.colors.goldHover,e=>e.theme.colors.goldHover);var x=t(8476),j=t(3318),g=t(3433);function pages_templateObject(){let e=(0,i._)(["\n  display: grid;\n  grid-template-columns: repeat(2, 50%);\n  grid-row-gap: 1rem;\n  grid-column-gap: 1rem;\n\n  @media screen and (max-width: 780px) {\n    grid-template-columns: repeat(1, 100%);\n  }\n"]);return pages_templateObject=function(){return e},e}function pages_templateObject1(){let e=(0,i._)(["\n  display: block;\n  min-height: 6rem;\n  border-radius: 5px;\n  cursor: pointer;\n  position: relative;\n  transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.1s;\n  opacity: 0;\n  animation: "," .5s ease;\n  animation-fill-mode: forwards;\n\n  @media (any-hover: hover) {\n    &:hover{\n      ","\n    }\n  }\n\n  @media (any-hover: none) {\n    &:active{\n      ","\n    }\n  }\n\n  @media screen and (max-width: 780px){\n    min-height: 5.25rem;\n  }\n\n  .card-content {\n    padding: 1rem;\n  }\n\n  .meta {\n    margin-top: 0.25rem;\n    font-size: 0.875rem;\n    color: ",";\n  }\n\n  .date {\n    font-size: 0.9rem;\n  }\n"]);return pages_templateObject1=function(){return e},e}function pages_templateObject2(){let e=(0,i._)(["\n  font-size: 1.125rem;\n  font-weight: bold;\n"]);return pages_templateObject2=function(){return e},e}var _=!0;let CommonHead=()=>(0,o.jsxs)(d.Fragment,{children:[(0,o.jsx)("meta",{name:"description",content:"A personal blog about work and life"}),(0,o.jsx)("meta",{name:"viewport",content:"width=device-width,initial-scale=1,maximum-scale=1"}),(0,o.jsx)("link",{rel:"icon",href:"/favicon.ico"})]});function ArticleItem(e){let{p:n,i:t}=e;return(0,o.jsx)(v,{href:"/posts/"+n.id,passHref:!0,children:(0,o.jsxs)("div",{className:"card-content",children:[(0,o.jsx)(w,{children:n.title}),(0,o.jsxs)("div",{className:"meta",children:[(0,o.jsx)("span",{className:"date",children:n.date}),(0,o.jsx)("span",{children:" | "}),(0,o.jsx)("i",{className:"icon-material-folder_open",style:{padding:"0.2em"}}),n.categories]})]})})}var pages=e=>{let{posts:n,categories:t}=e,[r,i]=(0,d.useState)(0),a=(0,d.useMemo)(()=>0===r?n:n.filter(e=>e.categories===t[r][0]),[r,n,t]);return(0,o.jsxs)("div",{children:[(0,o.jsxs)(c(),{children:[(0,o.jsx)("title",{children:"".concat(x.d.author," - Blog")}),(0,o.jsx)(CommonHead,{})]}),(0,o.jsx)(p.ZP,{children:(0,o.jsxs)(p.kn,{children:[(0,o.jsx)(NavDropper,{items:t,current:r,setCurrent:i}),(0,o.jsx)(O,{children:a.map((e,n)=>(0,o.jsx)(ArticleItem,{p:e,i:n},e.id))})]})})]})};let O=m.ZP.section.withConfig({componentId:"sc-9eedd323-0"})(pages_templateObject()),v=(0,m.ZP)(s()).withConfig({componentId:"sc-9eedd323-1"})(pages_templateObject1(),j.r$,()=>g.N8,()=>g.N8,e=>e.theme.colors.textSecondary),w=m.ZP.span.withConfig({componentId:"sc-9eedd323-2"})(pages_templateObject2())},3318:function(e,n,t){t.d(n,{$k:function(){return s},ER:function(){return c},Ji:function(){return o},r$:function(){return a},x$:function(){return l}});var r=t(1262),i=t(8598);function _templateObject(){let e=(0,r._)(["\n0% {\n  opacity: 0;\n}\n100% {\n  opacity: 1;\n}"]);return _templateObject=function(){return e},e}function _templateObject1(){let e=(0,r._)(["\n0% {\n  opacity: 0;\n  transform: translateY(10px);\n}\n100% {\n  opacity: 1;\n  transform: translateY(0);\n}"]);return _templateObject1=function(){return e},e}function _templateObject2(){let e=(0,r._)(["\n0% {\n  -webkit-transform: translateX(50px);\n          transform: translateX(50px);\n  opacity: 0;\n}\n100% {\n  -webkit-transform: translateX(0);\n          transform: translateX(0);\n  opacity: 1;\n}\n"]);return _templateObject2=function(){return e},e}function _templateObject3(){let e=(0,r._)(["\n0% {\n  -webkit-filter: blur(12px);\n          filter: blur(12px);\n  opacity: 0;\n}\n100% {\n  -webkit-filter: blur(0px);\n          filter: blur(0px);\n  opacity: 1;\n}\n"]);return _templateObject3=function(){return e},e}function _templateObject4(){let e=(0,r._)(["\n0% {\n  transform: translateY(-100%);\n}\n100% {\n  transform: translateY(0);\n}"]);return _templateObject4=function(){return e},e}function _templateObject5(){let e=(0,r._)(["\n0% {\n  transform: translateY(0);\n}\n100% {\n  transform: translateY(-100%);\n}"]);return _templateObject5=function(){return e},e}function _templateObject6(){let e=(0,r._)(["\n0% {\n  transform: translateX(-1000px);\n  opacity: 0;\n}\n100% {\n  transform: translateX(0);\n  opacity: 1;\n}\n"]);return _templateObject6=function(){return e},e}function _templateObject7(){let e=(0,r._)(["\n0% {\n  transform: translateX(1000px);\n  opacity: 0;\n}\n100% {\n  transform: translateX(0);\n  opacity: 1;\n}\n"]);return _templateObject7=function(){return e},e}let o=(0,i.F4)(_templateObject()),a=(0,i.F4)(_templateObject1()),c=(0,i.F4)(_templateObject2());(0,i.F4)(_templateObject3()),(0,i.F4)(_templateObject4()),(0,i.F4)(_templateObject5());let l=(0,i.F4)(_templateObject6()),s=(0,i.F4)(_templateObject7())},3433:function(e,n,t){t.d(n,{N8:function(){return l},Ve:function(){return o},XC:function(){return a},_j:function(){return c}});var r=t(1262),i=t(8598);function _templateObject(){let e=(0,r._)(["\n  -webkit-text-stroke: 1px;\n  -webkit-text-fill-color: transparent;\n"]);return _templateObject=function(){return e},e}function _templateObject1(){let e=(0,r._)(["box-shadow: inset 0 -0.3em 0 ",";"]);return _templateObject1=function(){return e},e}function _templateObject2(){let e=(0,r._)(["box-shadow: inset 0 -0.5em 0 ",";"]);return _templateObject2=function(){return e},e}function _templateObject3(){let e=(0,r._)(["box-shadow: inset 0 -0.8em 0 ",";"]);return _templateObject3=function(){return e},e}function _templateObject4(){let e=(0,r._)(["box-shadow: inset 0 -1em 0 ",";"]);return _templateObject4=function(){return e},e}function _templateObject5(){let e=(0,r._)(["box-shadow: inset 0 -0.5em 0 ",";"]);return _templateObject5=function(){return e},e}function _templateObject6(){let e=(0,r._)(["box-shadow: "," 0px 0.5rem 2rem;"]);return _templateObject6=function(){return e},e}function _templateObject7(){let e=(0,r._)(["background: ",";box-shadow: rgb(0 0 0 / 10%) 0px 2px 4px;"]);return _templateObject7=function(){return e},e}function _templateObject8(){let e=(0,r._)(["&::-webkit-scrollbar{display: none;}"]);return _templateObject8=function(){return e},e}function _templateObject9(){let e=(0,r._)(['font-family: SFMono-Regular,consolas,Liberation Mono,menlo,monaco,"Courier New",courier,monospace,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol",sans-serif;']);return _templateObject9=function(){return e},e}let o=(0,i.iv)(_templateObject()),a={s:(0,i.iv)(_templateObject1(),e=>e.theme.colors.hoverBg),m:(0,i.iv)(_templateObject2(),e=>e.theme.colors.hoverBg),l:(0,i.iv)(_templateObject3(),e=>e.theme.colors.hoverBg),f:(0,i.iv)(_templateObject4(),e=>e.theme.colors.hoverBg)},c=(0,i.iv)(_templateObject5(),e=>e.theme.colors.goldHover),l=(0,i.iv)(_templateObject6(),e=>e.theme.colors.shadowBg);(0,i.iv)(_templateObject7(),e=>e.theme.colors.bg),(0,i.iv)(_templateObject8()),(0,i.iv)(_templateObject9())}}]);