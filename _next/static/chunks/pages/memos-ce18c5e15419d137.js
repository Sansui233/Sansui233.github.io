(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[106],{83:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/memos",function(){return t(7139)}])},1622:function(n,e,t){"use strict";var o=t(1262),r=t(1527),i=t(1557),l=t.n(i),a=t(959),s=t(8598);function _templateObject(){let n=(0,o._)(["\n  margin: 64px 0;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  align-items: center;\n\n  & > span {\n    color: ",";\n    font-size: 0.875rem;\n  }\n"]);return _templateObject=function(){return n},n}function _templateObject1(){let n=(0,o._)(["\n  padding: .2em 0;\n  display: flex;\n  align-items: center;\n  position: relative;\n  i {\n    transform: translateY(-0.1em);\n  }\n\n  span {\n    position: relative;\n  }\n\n  span::before {\n    content: '';\n    position: absolute;\n    left: 0;\n    bottom: 0;\n    width: 0;\n    height: 2px;\n    background: ",";\n    transition: width 1s cubic-bezier(0.34, 0.04, 0.03, 1.4), background .3s;\n  }\n    \n  span:hover::before {\n    width: 100%;\n  }\n"]);return _templateObject1=function(){return n},n}let c=s.ZP.div.withConfig({componentId:"sc-b3f43d3f-0"})(_templateObject(),n=>n.theme.colors.textGray),d=(0,s.ZP)(l()).withConfig({componentId:"sc-b3f43d3f-1"})(_templateObject1(),n=>n.theme.colors.gold);e.Z=n=>{let e=(0,a.useCallback)(()=>{var e;n.isScrollToTop&&((null===(e=n.scrollRef)||void 0===e?void 0:e.current)?n.scrollRef.current.scrollTo({top:0}):globalThis.scrollTo({top:0}))},[n.isScrollToTop,n.scrollRef]);return(0,r.jsxs)(c,{...n.elemProps,children:[n.prevPage&&(0,r.jsx)("div",{style:{flex:"1 1 auto"},children:(0,r.jsx)(d,{href:n.prevPage.link,passHref:!0,style:{justifyContent:"flex-start"},onClick:e,children:(0,r.jsxs)("span",{children:[(0,r.jsx)("i",{className:"icon-arrow-left2"}),"\xa0",n.prevPage.title]})})}),(0,r.jsx)("span",{children:n.currTitle?n.currTitle.concat(n.maxPage?" / ".concat(n.maxPage):""):""}),n.nextPage&&(0,r.jsx)("div",{style:{flex:"1 1 auto"},children:(0,r.jsx)(d,{href:n.nextPage.link,passHref:!0,style:{justifyContent:"flex-end"},onClick:e,children:(0,r.jsxs)("span",{children:[n.nextPage.title,"\xa0",(0,r.jsx)("i",{className:"icon-arrow-right2"})]})})})]})}},5594:function(n,e,t){"use strict";var o=t(1262),r=t(1527),i=t(75);t(5439);var l=t(959),a=t(8598),s=t(8476);function _templateObject(){let n=(0,o._)(["\n\n  margin: 0 auto;\n\n  --waline-theme-color: ",";\n  --waline-bgcolor: ",";\n  --waline-color: ",";\n  --waline-active-color: ",";\n  --waline-bgcolor-light: #99999915;\n  --waline-border: 1px solid #99999966;\n  --waline-border-color: #99999966;\n  --waline-info-bgcolor: #99999915;\n\n  .wl-btn.primary {\n    background: ",";\n    color:",";\n  }\n  .wl-gif-popup {\n    @media screen and (max-width: 580px) {\n      .wl-gallery-column {\n        display: grid !important;\n        grid-template-columns: 1fr 1fr 1fr;\n        max-height: 200px;\n      }\n    }\n    img {\n      border-color: ",";\n    }\n    input {\n      background: ",";\n      color: ",";\n    }\n  }\n\n\n  // @media screen and (max-width:580px) {\n  //   .wl-footer {\n  //     margin: unset;\n  //     padding: 0.5rem 0.75rem;\n  //   }\n  \n  //   .wl-gif-popup {\n  //     width: 100%;\n  //     left: 0;\n  //     padding: 0;\n  //   }\n  // }\n\n"]);return _templateObject=function(){return n},n}let c=a.ZP.div.withConfig({componentId:"sc-d6a397c0-0"})(_templateObject(),n=>n.theme.colors.bgInverse,n=>n.theme.colors.bg,n=>n.theme.colors.textGray,n=>n.theme.colors.gold,n=>n.theme.colors.bgInverse,n=>n.theme.colors.bg,n=>n.theme.colors.bg,n=>n.theme.colors.bg,n=>n.theme.colors.textPrimary);e.Z=n=>((0,l.useEffect)(()=>{(0,i.S1)({el:"#waline",serverURL:s.d.walineApi,path:window.location.pathname,pageview:!0,comment:!0})},[]),"walineApi"in s.d&&""!==s.d.walineApi)?(0,r.jsx)(c,{id:"waline",...n,children:"Waline"}):(0,r.jsx)(r.Fragment,{})},6758:function(n,e,t){"use strict";t.d(e,{p:function(){return MDImg},j:function(){return c}});var o=t(1262),r=t(1527),i=t(959),l=t(8598),a=t(3433);function _templateObject(){let n=(0,o._)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  background: #000000de;\n  z-index: 10;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: zoom-out;\n\n  & img.model {\n    max-width: 100%;\n    max-height: 100%;\n    display:block;\n  }\n\n  @media screen and (min-width: 780px) {\n    & img.model {\n    }\n  }\n\n"]);return _templateObject=function(){return n},n}let s=l.zo.div(_templateObject());var components_ImgModel=n=>{let{imgProps:e,isModel:t,setModel:o}=n;return(0,i.useEffect)(()=>{t?document.body.style.overflow="hidden":document.body.style.overflow="auto"},[t]),t?(0,r.jsxs)(s,{$isOpen:t,onClick:n=>o(!1),children:[" ",(0,r.jsx)("img",{loading:"lazy",className:"model",...e})," "]}):void 0};function markdown_templateObject(){let n=(0,o._)(["\n  text-align: justify;\n\n  @media screen and (max-width: 580px){\n    text-align: unset;\n  }\n\n  img, picture, video, canvas, svg, pre{\n    margin: 1.625rem auto;\n    display: block;\n  }\n\n  p,ul,ol {\n    line-height: 1.8rem;\n  }\n\n  blockquote {\n    margin: 1.625rem 0;\n  }\n\n  a {\n    position: relative;\n    font-weight: 500;\n    border-bottom: 1px solid ",";\n    transition: box-shadow .5s;\n  }\n\n  a:hover {\n    ","\n  }\n  \n  code {\n    color: ",";\n    background-color: ",";\n    font-size: 0.875rem;\n    border-radius: 3px;\n    padding: 0.375rem 0.375rem;\n    margin: 0rem 1px;\n  }\n\n  pre code {\n    color: ",";\n    border-radius: unset;\n    padding: 1rem 2rem;\n    margin: unset;\n    overflow: auto;\n  }\n\n  blockquote {\n    border-left: solid 2px;\n    padding-left: 1.5em;\n    color: ",";\n  }\n\n  del {\n    opacity: .33;\n  }\n\n  ul li {\n    display: block;\n    position: relative;\n  }\n  ul li::before {\n    content:'';\n    position: absolute;\n    top: .6em;\n    height: .4em;\n    width: .4em;\n    border-radius: 1em;\n    border: solid 1px ",";\n    left: -1.5rem;\n  }\n\n  .hljs {\n    background: ",";\n  }\n  \n  .hljs-emphasis {\n    font-style: italic;\n  }\n  \n  .hljs-strong {\n    font-weight: bold;\n  }\n  \n  .hljs-link {\n    text-decoration: underline;\n  }\n  \n  .hljs-comment,\n  .hljs-quote {\n    color: #878ea7ba;\n    font-style: italic;\n  }\n  \n  .hljs-params,\n  .hljs-type {\n    color: #878ea7ba;\n  }\n  \n  .hljs-punctuation,\n  .hljs-attr {\n    color: rgb(89 161 197);\n  }\n  \n  .hljs-selector-tag,\n  .hljs-name,\n  .hljs-meta,\n  .hljs-operator,\n  .hljs-char.escape_ {\n    color: #c56200;\n  }\n  \n  .hljs-keyword,\n  .hljs-deletion {\n    color: ",";\n  }\n  \n  .hljs-regexp,\n  .hljs-selector-pseudo,\n  .hljs-selector-attr,\n  .hljs-variable.language_ {\n    color: #cc5e91;\n  }\n  \n  .hljs-subst,\n  .hljs-property,\n  .hljs-code,\n  .hljs-formula,\n  .hljs-section,\n  .hljs-title.function_ {\n    color: #d14f82;\n  }\n  \n  .hljs-string,\n  .hljs-symbol,\n  .hljs-bullet,\n  .hljs-addition,\n  .hljs-selector-class,\n  .hljs-title.class_,\n  .hljs-title.class_.inherited__,\n  .hljs-meta .hljs-string {\n    color: #c68032;\n  }\n  \n  .hljs-variable,\n  .hljs-template-variable,\n  .hljs-number,\n  .hljs-literal,\n  .hljs-link,\n  .hljs-built_in,\n  .hljs-title,\n  .hljs-selector-id,\n  .hljs-tag,\n  .hljs-doctag,\n  .hljs-attribute,\n  .hljs-template-tag,\n  .hljs-meta .hljs-keyword {\n    color: #9080ff;\n  }\n\n"]);return markdown_templateObject=function(){return n},n}function MDImg(n){let[e,t]=(0,i.useState)(!1);return console.log("%% img"),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(components_ImgModel,{imgProps:n,isModel:e,setModel:t}),(0,r.jsx)("img",{loading:"lazy",onClick:()=>t(!0),style:{cursor:"zoom-in"},...n})]})}let c=l.ZP.div.withConfig({componentId:"sc-fe72b076-0"})(markdown_templateObject(),n=>n.theme.colors.gold,a._j,n=>n.theme.colors.gold,n=>n.theme.colors.codeBlockBg,n=>n.theme.colors.textPrimary,n=>n.theme.colors.textGray,n=>n.theme.colors.gold,n=>n.theme.colors.codeBlockBg,n=>n.theme.colors.gold)},2635:function(n,e,t){"use strict";t.d(e,{g:function(){return useMdxPost},n:function(){return useMdxMemo}});var o,r=t(1527),i=t(8255),l=t(959),a=t(6758);function convertBack(n){let e={Fragment:l.Fragment,...o||(o=t.t(r,2)),baseUrl:"file:///C:/Users/lingn/git/blog/components/mdx.tsx"},a=(0,i.W)(n,e);return a}function useMdxPost(n){let e=convertBack(n),t={img:a.p};return(0,r.jsx)(e.default,{components:t})}function useMdxMemo(n){let e=convertBack(n);return(0,r.jsx)(e.default,{})}},7139:function(n,e,t){"use strict";t.r(e),t.d(e,{__N_SSG:function(){return P},default:function(){return Memos}});var o=t(1262),r=t(1527),i=t(3522),l=t.n(i),a=t(3638),s=t(959),c=t(8598),d=t(518),m=t(9995),h=t(1622),u=t(1023),p=t(5594),g=t(3797),f=t(6758),x=t(2635),j=t(6336);t(5649);var b=t(6276),w=t(3535),v=t(5709);let rehype_tag_rehypeTag=()=>n=>{(0,v.Vn)(n,"element",function(n){if("h1"===n.tagName&&(n.tagName="p"),"p"===n.tagName){let e=[];n.children.forEach(n=>{if("text"===n.type){let t=n.value;if(t&&t.match(/#([^# ]+) /)){let n=t.split(/#([^# ]+) /);for(let t=0;t<n.length;t++)if(t%2==0)e.push({type:"text",value:n[t]});else{let o={type:"element",tagName:"span",properties:{className:"tag"},children:[{type:"text",value:"#".concat(n[t]," ")}]};e.push(o)}}else e.push(n)}else e.push(n)}),n.children=e}})};async function compileMdxMemo(n){let e=String(await (0,j.D)(n,{outputFormat:"function-body",remarkPlugins:[w.Z],rehypePlugins:[b.Z,rehype_tag_rehypeTag]}));return{code:e}}var y=t(8029),_=t(8476),O=t(3318),k=t(3433);function _templateObject(){let n=(0,o._)(["\n  max-width: 1080px;\n  margin: 0 auto;\n\n  @media screen and (max-width: 780px) {\n    max-width: 100%;\n  }\n\n  @media screen and (max-width: 580px) {\n  }\n"]);return _templateObject=function(){return n},n}function _templateObject1(){let n=(0,o._)(["\n  max-width: 672px;\n  padding: 66px 16px 48px 16px;\n  align-self: flex-end;\n  overflow-y: auto;\n  height: 100vh;\n\n  &::-webkit-scrollbar {\n    display: none;\n  }\n\n\n  @media screen and (max-width: 780px) {\n    width: 100%;\n  }\n\n  @media screen and (max-width: 580px) {\n    padding: 70px 0 48px 0;\n  }\n\n"]);return _templateObject1=function(){return n},n}function _templateObject2(){let n=(0,o._)(["\n  max-width: 15rem;\n  padding-top: 100px;\n  margin: 0 0.5rem;\n\n  height: 100vh;\n  overflow-y: auto;\n  &::-webkit-scrollbar {\n    display: none;\n  }\n  \n  @media screen and (max-width: 1080px) {\n    margin: 0;\n  }\n\n  @media screen and (max-width: 780px) {\n    max-width: unset;\n    display: none;\n  }\n\n  /* util class */\n  .hover-gold {\n    padding: 3px 5px;\n    borde-radius: 50%;\n    cursor: pointer;\n  }\n\n  .hover-gold:hover {\n    color: ",";\n  }\n"]);return _templateObject2=function(){return n},n}function _templateObject3(){let n=(0,o._)(["\n\n  ","\n  margin: 1rem 0;\n  padding: 1.25rem 1.5rem;\n  border-radius: 1rem;\n  animation: "," 1s ease;\n\n  @media screen and (max-width: 780px) {\n    padding: 1.25rem 1.5rem;\n  }\n\n  @media screen and (max-width: 580px) {\n    padding: 1.25rem 1rem;\n    border-radius: unset;\n  }\n  \n  & > .content {\n    position: relative;\n    height: ",";\n    overflow: hidden;\n    /* transition: height 0.5s ease; */\n  }\n"]);return _templateObject3=function(){return n},n}function _templateObject4(){let n=(0,o._)(["\n    display: flex;\n\n    & > .avatar {\n      width: 3rem;\n      height: 3rem;\n      border-radius: 50%;\n      border: 1px solid ",";\n    }\n\n    & .meta{\n      margin-left: 0.5rem;\n      display: flex;\n      flex-direction: column;\n      justify-content: flex-end;\n    }\n\n    & .date {\n      font-size: 0.9rem;\n      font-family: Dosis;\n      color: ",";\n    }\n\n    & .word-count {\n      position: absolute;\n      right: 0;\n    }\n"]);return _templateObject4=function(){return n},n}function _templateObject5(){let n=(0,o._)(["\n    padding-left: 0.5rem;\n    padding-right: 0.5rem;\n    padding-bottom: ",";\n    h1,h2,h3,h4,h5,h6 {\n      font-size: 1rem;\n    }\n\n    & .tag {\n      color: ",";\n    }\n\n    & .tag:hover {\n      cursor: pointer;\n      color: ",";\n    }\n"]);return _templateObject5=function(){return n},n}function _templateObject6(){let n=(0,o._)(["\n    display: ",";\n    position: absolute;\n    bottom: 0;\n    width: 100%;\n    height: 7rem;\n    text-align: right;\n    color: ",";\n    ","\n\n    .rd-more {\n      margin-top: 5.375rem;\n      font-size: 0.875rem;\n      padding: 0.2rem 0;\n      cursor: pointer;\n      span {\n        transition: box-shadow .3s;\n      }\n    }\n\n    & .rd-more:hover span {\n      ","\n    }\n   \n"]);return _templateObject6=function(){return n},n}function _templateObject7(){let n=(0,o._)(["\n    margin-top: 1.5rem;\n    padding-left: 1rem;\n    display: flex;\n    flex-direction: column;\n    \n    \n\n    .item {\n      padding: 0.25rem 0;\n      margin-right: 0.75rem;\n      border-right: 2px solid ",";\n    }\n\n    .item.active {\n      border-right: 2px solid ",";\n    }\n\n    .title {\n      font-weight: bold;\n      margin-right: 0.25rem;\n    }\n\n    .count {\n      font-size: 0.875rem;\n      color: ",";\n    }\n"]);return _templateObject7=function(){return n},n}function _templateObject8(){let n=(0,o._)(["\n  margin-top: 1rem;\n  padding: 1rem 1rem;\n"]);return _templateObject8=function(){return n},n}function _templateObject9(){let n=(0,o._)(["\n  font-size: 0.9rem;\n  font-weight: bold;\n  color: ",";\n"]);return _templateObject9=function(){return n},n}function _templateObject10(){let n=(0,o._)(["\n  text-align: right;\n  font-size: 1.125rem;\n  margin: unset;\n"]);return _templateObject10=function(){return n},n}function _templateObject11(){let n=(0,o._)(["\n  border: 1px solid ",";\n  border-radius: 1em;\n  padding-left: 1em;\n  background: ",";\n  color: ",";\n  width:  0;\n  flex: 2 1 0;\n  line-height: 1.7rem;\n  font-size: 0.9rem;\n\n\n  &:focus,\n  &:focus-visible{\n    outline: none;\n    border: 1px solid ",";\n  }\n"]);return _templateObject11=function(){return n},n}function _templateObject12(){let n=(0,o._)(["\n"]);return _templateObject12=function(){return n},n}let C="/data/memos";var P=!0;function Memos(n){let{memos:e,info:t,memotags:o}=n,[i,f]=(0,s.useState)(),x=(0,a.useRouter)(),[j,b]=(0,s.useState)(e),[w,v]=(0,s.useState)(!1),[y,O]=(0,s.useState)(e),k=(0,s.useContext)(c.Ni),P=(0,s.useRef)(null),M=(0,s.useRef)(null),[T,I]=(0,s.useState)({pagelimit:5,isSearch:"ready",searchText:""}),Z=(0,s.useCallback)(async()=>{if(!M.current)return;let n=M.current.value.trim();if(0!==n.length){if(i)i.search(n.split(" ")),I(e=>({...e,isSearch:"searching",searchText:n}));else{let e=await initSearch(f,b,I,t.pages);e.search(n.split(" ")),I(e=>({...e,isSearch:"searching",searchText:n}))}}},[i,t.pages]),R=(0,s.useCallback)(function(n){let e=!(arguments.length>1)||void 0===arguments[1]||arguments[1];M.current&&(M.current.value=n,e&&Z())},[Z]);(0,s.useEffect)(()=>{let n=0;if("string"==typeof x.query.p){if(isNaN(n=parseInt(x.query.p))){console.error("Wrong query p=",x.query.p);return}v(!0),fetch("".concat(C,"/").concat(n,".json")).then(n=>n.json()).then(n=>{let e=n.map(async n=>({...n,content:(await compileMdxMemo(n.content)).code,length:n.content.length}));return Promise.all(e)}).then(n=>{b(n),O(n)}).catch(n=>{}).finally(()=>{v(!1)})}},[x.query]),(0,s.useEffect)(()=>{document.addEventListener("keydown",n=>{M.current&&M.current===document.activeElement&&"Enter"===n.key&&Z()})},[Z]);let $=(()=>{if("string"==typeof x.query.p){let n=parseInt(x.query.p);if(!isNaN(n))return n}return 0})();function statusRender(){if(w)return"Fetching...";switch(T.isSearch){case"ready":return"";case"searching":return"Searching...";case"done":return(0,r.jsxs)(r.Fragment,{children:["Results: ",j.length," memos",(0,r.jsx)("span",{style:{fontStyle:"normal",fontWeight:"bold",cursor:"pointer",marginLeft:"0.875em"},onClick:()=>{I(n=>({...n,isSearch:"ready",searchText:""})),b(y)},children:"X"})]})}}return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(l(),{children:[(0,r.jsx)("title",{children:"".concat(_.d.author," - Memos")}),(0,r.jsx)(d.CommonHead,{})]}),(0,r.jsx)(u.Z,{placeHolder:!1,scrollElem:P.current?P.current:void 0,hideSearch:!0,style:{background:null==k?void 0:k.colors.bg2}}),(0,r.jsx)("main",{style:{backgroundColor:null==k?void 0:k.colors.bg2,overflow:"hidden",height:"100vh"},children:(0,r.jsx)(N,{children:(0,r.jsxs)(g.Uq,{sep:1,siderLocation:"right",children:[(0,r.jsxs)(S,{ref:P,children:[(0,r.jsx)(d.PageDescription,{style:{marginRight:"1rem"},children:statusRender()}),(0,r.jsx)("div",{style:{minHeight:"100vh"},children:w?null:j.map(n=>(0,r.jsx)(MemoCard,{memoPost:n,scrollref:P,setSearchText:R},n.id))}),(0,r.jsx)(h.Z,{currTitle:"PAGE ".concat($+1),prevPage:$>0?{title:"PREV",link:"/memos?p=".concat($-1)}:void 0,nextPage:$+1<t.pages?{title:"NEXT",link:"/memos?p=".concat($+1)}:void 0,maxPage:t.pages.toString(),elemProps:{style:{padding:"0 1rem"}},isScrollToTop:!0,scrollRef:P}),(0,r.jsx)(p.Z,{style:{padding:"0 0.5rem"}}),(0,r.jsx)(m.Z,{})]}),(0,r.jsxs)(E,{children:[(0,r.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[(0,r.jsx)(H,{type:"text",placeholder:"Search",ref:M,onFocus:()=>{initSearch(f,b,I,t.pages)}}),(0,r.jsx)(q,{className:"hover-gold",style:{fontSize:"1.275em",marginLeft:"0.125em"},onClick:Z,children:(0,r.jsx)("i",{className:"icon-search"})})]}),(0,r.jsxs)(z,{children:[(0,r.jsxs)("div",{className:"item active",children:[(0,r.jsx)("span",{className:"title",children:"Memos"}),(0,r.jsx)("span",{className:"count",children:t.count.memos})]}),(0,r.jsxs)("div",{className:"item",children:[(0,r.jsx)("span",{className:"title",children:"Photos"}),(0,r.jsx)("span",{className:"count",children:t.count.imgs})]})]}),(0,r.jsxs)(L,{children:[(0,r.jsx)(G,{children:"TAGS"}),(0,r.jsx)("div",{style:{paddingTop:"0.5rem"},children:o.map(n=>(0,r.jsx)("span",{className:"hover-gold",onClick:()=>{R("#"+n[0])},children:"#".concat(n[0])},n[0]))})]})]})]})})})]})}function MemoCard(n){let{memoPost:e,scrollref:t,setSearchText:o}=n,[i,l]=(0,s.useState)(!0),a=(0,s.useContext)(c.Ni),d=s.useRef(null);(0,s.useEffect)(()=>{if(!d.current)return;let n=d.current.getElementsByClassName("tag"),e=Array.from(n).filter(n=>n instanceof HTMLSpanElement);console.debug("[memos.tsx] tag count",e.length);let t=e.map(n=>()=>{n.textContent&&o(n.textContent,!0)});return e.forEach((n,e)=>n.addEventListener("click",t[e])),()=>{e.forEach((n,e)=>n.removeEventListener("click",t[e]))}},[d,o]);let m=e.length>200;function handleExpand(n){if(!i){let n=d.current;if(n){let o=n.getBoundingClientRect().top;if(o<0||o>window.innerHeight){var e;null===(e=t.current)||void 0===e||e.scrollTo({top:o+t.current.scrollTop})}}}l(!i)}return(0,r.jsx)(M,{$isCollapse:!1!==m&&i,ref:d,children:(0,r.jsxs)("div",{className:"content",children:[(0,r.jsxs)(T,{children:[(0,r.jsx)("img",{className:"avatar",src:a.assets.favico,alt:_.d.author}),(0,r.jsxs)("div",{className:"meta",children:[(0,r.jsx)("div",{children:_.d.author}),(0,r.jsxs)("div",{className:"date",children:[e.id,"\xa0\xa0",(0,r.jsxs)("span",{className:"word-count",children:[e.length,"\xa0字"]})]})]})]}),(0,r.jsx)(I,{$bottomSpace:m,children:(0,x.n)(e.content)}),(0,r.jsx)(Z,{$isCollapse:i,$isShown:m,children:(0,r.jsx)("div",{onClick:handleExpand,className:"rd-more",children:(0,r.jsx)("span",{children:i?"SHOW MORE":"Hide"})})})]})})}async function initSearch(n,e,t,o){let r,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:5;console.debug("%% init search..."),i=o<i?o:i;let l=Array.from({length:i+1},(n,e)=>"".concat(C,"/").concat(e,".json")),a=l.map(n=>fetch(n).then(n=>n.json())),s=await Promise.all(a),c=s.flatMap(n=>n),d=c.map(n=>({id:n.id,title:"",content:n.content,tags:n.tags}));function notifier(n){let o=n.map(n=>n.id),r=c.filter(n=>!!o.includes(n.id)).map(async n=>({...n,content:(await compileMdxMemo(n.content)).code,length:n.content.length}));Promise.all(r).then(n=>e(n)),t(n=>({...n,isSearch:"done"}))}return n(r=new y.x({data:d,field:["tags","content"],notifier,disableStreamNotify:!0})),t(n=>({...n,pagelimit:i})),r}let N=c.ZP.div.withConfig({componentId:"sc-58f86586-0"})(_templateObject()),S=c.ZP.div.withConfig({componentId:"sc-58f86586-1"})(_templateObject1()),E=c.ZP.div.withConfig({componentId:"sc-58f86586-2"})(_templateObject2(),n=>n.theme.colors.gold),M=c.ZP.section.withConfig({componentId:"sc-58f86586-3"})(_templateObject3(),k.$J,O.r$,n=>!0===n.$isCollapse?"19rem":"auto"),T=c.ZP.div.withConfig({componentId:"sc-58f86586-4"})(_templateObject4(),n=>n.theme.colors.uiLineGray,n=>n.theme.colors.textGray),I=(0,c.ZP)(f.j).withConfig({componentId:"sc-58f86586-5"})(_templateObject5(),n=>!0===n.$bottomSpace?"2rem":"inherit",n=>n.theme.colors.gold,n=>n.theme.colors.goldHover),Z=c.ZP.div.withConfig({componentId:"sc-58f86586-6"})(_templateObject6(),n=>!0===n.$isShown?"block":"none",n=>n.theme.colors.gold,n=>!0===n.$isCollapse?n.theme.colors.maskGradient:"",()=>k.XC.f),z=c.ZP.section.withConfig({componentId:"sc-58f86586-7"})(_templateObject7(),n=>n.theme.colors.uiLineGray,n=>n.theme.colors.gold,n=>n.theme.colors.textGray),R=c.ZP.section.withConfig({componentId:"sc-58f86586-8"})(_templateObject8()),G=c.ZP.div.withConfig({componentId:"sc-58f86586-9"})(_templateObject9(),n=>n.theme.colors.textGray2),q=(0,c.ZP)(G).withConfig({componentId:"sc-58f86586-10"})(_templateObject10()),H=c.ZP.input.withConfig({componentId:"sc-58f86586-11"})(_templateObject11(),n=>n.theme.colors.uiLineGray,n=>n.theme.colors.bg,n=>n.theme.colors.textPrimary,n=>n.theme.colors.goldHover),L=(0,c.ZP)(R).withConfig({componentId:"sc-58f86586-12"})(_templateObject12())}},function(n){n.O(0,[774,537,576,54,291,965,758,731,518,888,179],function(){return n(n.s=83)}),_N_E=n.O()}]);