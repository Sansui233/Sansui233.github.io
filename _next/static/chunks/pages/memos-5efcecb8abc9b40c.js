(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[106],{83:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/memos",function(){return n(7782)}])},2723:function(e,t,n){"use strict";n.d(t,{H:function(){return o}});var r=n(1262),i=n(8598);function _templateObject(){let e=(0,r._)(["\n  font-style: italic;\n  font-size: 0.875rem;\n  color: ",";\n  text-align: right;\n"]);return _templateObject=function(){return e},e}let o=i.ZP.div.withConfig({componentId:"sc-47295c3a-0"})(_templateObject(),e=>e.theme.colors.textGray2)},4247:function(e,t,n){"use strict";n.d(t,{Z:function(){return CardCommon}});var r=n(1262),i=n(1527);n(959);var o=n(8598);function _templateObject(){let e=(0,r._)(["\n  margin-top: 1.5rem;\n  padding: 0.5rem 1rem;\n  color:",";\n"]);return _templateObject=function(){return e},e}function _templateObject1(){let e=(0,r._)(["\n  font-weight: bold;\n  text-transform: uppercase;\n  font-size: 0.875rem;\n  color: ",";\n"]);return _templateObject1=function(){return e},e}function CardCommon(e){let{title:t,Icon:n,children:r,...o}=e;return(0,i.jsxs)(a,{...o,children:[(0,i.jsxs)(l,{children:[n&&(0,i.jsx)(n,{size:"1em",style:{marginRight:"0.5em"}}),t]}),(0,i.jsx)("div",{style:{paddingTop:"0.5rem"},children:r})]})}let a=o.ZP.section.withConfig({componentId:"sc-43627143-0"})(_templateObject(),e=>e.theme.colors.textSecondary),l=o.ZP.div.withConfig({componentId:"sc-43627143-1"})(_templateObject1(),e=>e.theme.colors.textGray2)},6918:function(e,t,n){"use strict";n.d(t,{Z:function(){return CommentCard}});var r=n(1262),i=n(1527),o=n(4042),a=n(8886),l=n(3130),s=n(5849),c=n.n(s),d=n(959),m=n(8598),h=n(8476),u=n(9946),p=n(4247);function _templateObject(){let e=(0,r._)(["\n  font-size: 0.9rem;\n  \n  li {\n    list-style: none;\n    height: 1.5em;\n    overflow: hidden;\n  }\n"]);return _templateObject=function(){return e},e}function _templateObject1(){let e=(0,r._)(["\n  display: inline-block;\n  margin-top: 2.5rem;\n  padding-right: 0.5rem;\n  font-weight: bold;\n  color:",";\n  cursor: pointer;\n\n  &:hover {\n    color:",";\n  }\n"]);return _templateObject1=function(){return e},e}function _templateObject2(){let e=(0,r._)(["\n  height:100%;\n  width:100%;\n  padding-top:64px;\n  overflow-y: auto;\n\n  &>div{\n    max-width: min(90%, 640px);\n    cursor: default;\n  }\n"]);return _templateObject2=function(){return e},e}let g=c()(()=>Promise.all([n.e(576),n.e(537),n.e(615),n.e(679)]).then(n.bind(n,9679)),{loadableGenerated:{webpack:()=>[9679]}});function CommentCard(){let e=(0,d.useContext)(m.Ni),[t,n]=(0,d.useState)([{objectId:"0x00",comment:"等等，好像没有评论哦~"}]),[r,s]=(0,d.useState)(!1);return(0,d.useEffect)(()=>{let e=encodeURIComponent(globalThis.location.pathname);fetch(h.d.walineApi+"/comment?path="+e+"&pageSize=10&page=1&lang=en-US&sortBy=insertedAt_desc").then(e=>e.json()).then(e=>{n(e.data)})},[]),(0,i.jsxs)(i.Fragment,{children:[r&&(0,i.jsx)(u.Z,{isModel:r,setModel:s,style:{background:null==e?void 0:e.colors.bgMask},children:(0,i.jsx)(b,{children:(0,i.jsx)(g,{onClick:e=>e.stopPropagation()})})}),(0,i.jsxs)(p.Z,{title:o.ZP.t("latestcomments"),Icon:a.Z,children:[(0,i.jsx)(f,{children:t.map(e=>(0,i.jsx)("li",{children:e.comment.replace(/<[^>]*>/g,"")},e.objectId))}),(0,i.jsxs)(x,{children:[(0,i.jsx)(l.Z,{size:"1em",style:{marginRight:"0.5em"}}),(0,i.jsx)("span",{onClick:()=>s(!0),children:"给我留言"})]})]})]})}let f=m.ZP.div.withConfig({componentId:"sc-1430a56b-0"})(_templateObject()),x=m.ZP.span.withConfig({componentId:"sc-1430a56b-1"})(_templateObject1(),e=>e.theme.colors.textPrimary,e=>e.theme.colors.accent),b=m.ZP.div.withConfig({componentId:"sc-1430a56b-2"})(_templateObject2())},5713:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return ImageBrowser},useImageBroswerStore:function(){return g}});var r=n(1262),i=n(1527),o=n(889),a=n(8314),l=n(959),s=n(8598),c=n(6856),d=n(8852),m=n(5956),h=n(9946),u=n(1702);let p={isPressed:!1,startpos:[0,0,0],starttime:0,trans:[0,0],direction:0,bias:0},coord=e=>e.type.includes("touch")?{x:e.touches[0].clientX,y:e.touches[0].clientY}:{x:e.clientX,y:e.clientY},evtName=(e,t)=>e.type.includes("touch")?"move"===t?"touchmove":"touchend":"move"===t?"mousemove":"mouseup";function useDrag(e,t,n,r){let i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:17,[o,a]=(0,l.useState)(),[s,c]=(0,l.useState)([0,0]),[d,m]=(0,l.useState)(0),[h,g]=(0,l.useState)(!1),f=(0,l.useCallback)((e,t)=>n=>{if(n.stopPropagation(),n.target){p.isPressed=!0,p.starttime=Date.now(),p.startpos=[coord(n).x,coord(n).y,n.target.scrollTop];let r=n.target;n.type.includes("touch")&&r.addEventListener(evtName(n,"move"),e,{passive:!1}),r.addEventListener(evtName(n,"end"),t,{once:!0})}},[]),x=(0,l.useCallback)(e=>{if(e.stopPropagation(),e.type.includes("touch")&&e.touches.length>1){e.preventDefault();return}if(e.target&&p.isPressed){let t=coord(e).x-p.startpos[0],n=coord(e).y-p.startpos[1];if(p.trans=[t,n],0!==p.direction){let e="x"===p.direction?[t-p.bias,0]:[0,n-p.bias];c(e)}else if(Math.abs(t)>20||Math.abs(n)>20){let e=Math.abs(t)>Math.abs(n)?"x":"y";p.bias="x"===e?t:n,p.direction=e,m(e);let r="x"===e?[t-p.bias,0]:[0,n-p.bias];c(r)}}},[]),b=(0,l.useCallback)(i=>o=>{o.stopPropagation(),Date.now()-p.starttime<140&&5>Math.abs(p.trans[0])&&5>Math.abs(p.trans[1])?(g(!0),setTimeout(()=>{e.setisModel(!1),g(!1)},300)):"x"===p.direction&&(p.trans[0]<-60?n():p.trans[0]>60?t():r()),p.isPressed=!1,p.startpos=[0,0,0],p.trans=[0,0],c([0,0]),p.direction=0,p.bias=0,m(0),o.target.removeEventListener("touchmove",i)},[e,t,n,r]);return(0,l.useEffect)(()=>{let e=(0,u.P)(x,i),t=f(e,b(e));a(()=>t)},[b,x,f,i]),{trans:s,direction:d,isBeforeUnmount:h,bind:{onTouchStart:o,onMouseDown:o}}}function _templateObject(){let e=(0,r._)(["\n  position: absolute;\n  will-change: transform;\n"]);return _templateObject=function(){return e},e}function _templateObject1(){let e=(0,r._)(["\n  display: block;\n  margin: 0 auto;\n  \n  &::after{\n    content: attr(alt);\n  }\n\n"]);return _templateObject1=function(){return e},e}function _templateObject2(){let e=(0,r._)(["\n  position: fixed;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  top: 0.5rem;\n  right: 0.5rem;\n\n  height: 2.5rem;\n  border-radius: 1.25rem;\n  padding: 0 1rem;\n  background: #5b5b5bbd;\n  color: white;\n  backdrop-filter: blur(5px);\n  -webkit-backdrop-filter: blur(5px);\n\n  &:hover{\n    opacity: 1;\n  }\n"]);return _templateObject2=function(){return e},e}function _templateObject3(){let e=(0,r._)(["\n  \n  position: fixed;\n  bottom: calc(50vh - 2.5rem);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n\n  width: 2.5rem;\n  height: 2.5rem;\n  padding: 0rem;\n  color: white;\n  opacity: 0.5;\n  background: #5b5b5bbd;\n  font-size: 1.25rem;\n  border-radius: 50%;\n  ","\n\n  @media screen and (max-width: 580px) {\n    ","\n    transition: left 0.3s linear, right 0.3s linear;\n  }\n\n  &:hover{\n    opacity: 1;\n    backdrop-filter: blur(5px);\n    -webkit-backdrop-filter: blur(5px);\n  }\n"]);return _templateObject3=function(){return e},e}function _templateObject4(){let e=(0,r._)(["\n  width: 100%;\n  height: 100%;\n  overflow-x: clip;\n  overflow-y: hidden;\n  position: relative;\n  cursor: default;\n  will-change: transform;\n\n  -webkit-user-select:none;\n  -moz-user-select:none;\n  -ms-user-select:none;\n  user-select:none;	\n"]);return _templateObject4=function(){return e},e}let g=(0,c.Ue)(e=>({isModel:!1,setisModel:t=>e(()=>({isModel:t})),imagesData:[],setImagesData:t=>e(()=>({imagesData:t})),currentIndex:0,setCurrentIndex:t=>e(()=>({currentIndex:t}))}));function ImageBrowser(){let e=g(e=>e),t=g(e=>e.imagesData),[n,r]=(0,l.useState)({curr:g(e=>e.currentIndex),last:g(e=>e.currentIndex)});n.curr>t.length-1&&console.error("uncaught invalid image index:",n,"in length",t.length);let s=(0,l.useCallback)(()=>{n.curr>0&&r({curr:n.curr-1,last:n.curr})},[n,r]),c=(0,l.useCallback)(()=>{n.curr<t.length-1&&r({curr:n.curr+1,last:n.curr})},[n,r,t]),u=(0,l.useCallback)(()=>{},[]),p=(0,l.useCallback)(e=>{"ArrowLeft"===e.key?s():"ArrowRight"===e.key&&c()},[c,s]);(0,d.I)("keydown",p);let{bind:y,trans:v,direction:_,isBeforeUnmount:C}=useDrag(e,s,c,u,20),k=(0,l.useMemo)(()=>"x"===_&&v[0]>60,[v,_]),O=(0,l.useMemo)(()=>"x"===_&&v[0]<-60,[v,_]),I=(0,m.aA)(),M=(0,m.hV)(),P=(0,l.useMemo)(()=>"x"===_?{transition:"transform 0.05s linear",transform:"translate3d(".concat(v[0]-n.curr*M,"px, 0px, 0px)"),width:"".concat(M*t.length,"px")}:{transition:"transform 0.5s ease",transform:"translate3d(".concat(-n.curr*M,"px, 0px, 0px)"),width:"".concat(M*t.length,"px")},[v,_,n.curr,M,t.length]),S=(0,l.useMemo)(()=>C?{opacity:0,transition:"opacity 0.3s ease"}:{},[C]),Z=(0,l.useMemo)(()=>{let e=n.curr,r=e>0?{i:e-1,data:t[e-1]}:{i:e-1,data:void 0},i={i:e,data:t[e]},o=e+1<t.length?{i:e+1,data:t[e+1]}:{i:e+1,data:void 0};return[r,i,o]},[t,n.curr]),T=(0,l.useMemo)(()=>Z.map(e=>{let t=M*e.i,n={transform:"translateX(".concat(t,"px)"),width:"".concat(M,"px"),height:"100%"};if(e.data){let t=0===e.data.width||0===e.data.height?1:e.data.width/e.data.height;return t>.6||e.data.height<I?{...n,display:"flex",alignItems:"center"}:{...n,overflowY:"auto"}}return n}),[Z,I,M]),N=(0,l.useMemo)(()=>"x"===_?{overflowY:"hidden"}:{},[_]),E=(0,l.useCallback)(e=>{let t=0===e.width||0===e.height?1:e.width/e.height,n=t>=2?{maxWidth:M,maxHeight:.9*I+"px"}:t>.6||e.height<I?{maxWidth:M,maxHeight:I+"px"}:{maxWidth:.95*M};return n},[I,M]);return(0,i.jsxs)(h.Z,{isModel:!0,setModel:e.setisModel,style:{...S,background:"#1d1d1d"},children:[(0,i.jsx)(w,{...y,onClick:e=>e.stopPropagation(),style:P,children:Z.map((e,t)=>(0,i.jsx)(f,{style:{...T[t],...N},children:e.data&&(0,i.jsx)(x,{src:"loaded"===e.data.ok?e.data.src:"",alt:e.data.ok,style:E(e.data)})},e.i))}),n.curr>0&&(0,i.jsx)(j,{$isLeft:!0,$isShown:k,onClick:e=>{e.stopPropagation(),s()},children:(0,i.jsx)(o.Z,{})}),n.curr<t.length-1&&(0,i.jsx)(j,{$isLeft:!1,$isShown:O,onClick:e=>{e.stopPropagation(),c()},children:(0,i.jsx)(a.Z,{})}),(0,i.jsxs)(b,{children:[n.curr+1,"/",t.length," \xa0|\xa0",(0,i.jsx)("span",{onClick:t=>{t.stopPropagation(),e.setisModel(!1)},children:"关闭"})]})]})}let f=s.ZP.div.withConfig({componentId:"sc-74a0f7de-0"})(_templateObject()),x=s.ZP.img.withConfig({componentId:"sc-74a0f7de-1"})(_templateObject1()),b=s.ZP.div.withConfig({componentId:"sc-74a0f7de-2"})(_templateObject2()),j=s.ZP.div.withConfig({componentId:"sc-74a0f7de-3"})(_templateObject3(),e=>e.$isLeft?"left: 1rem;":"right: 1rem;",e=>e.$isLeft?e.$isShown?"left: 1rem;":"left: -2.5rem;":e.$isShown?"right: 1rem;":"right: -2.5rem;"),w=s.ZP.div.withConfig({componentId:"sc-74a0f7de-4"})(_templateObject4())},7207:function(e,t,n){"use strict";n.d(t,{l:function(){return MemoCard}});var r=n(1262),i=n(1527),o=n(959),a=n(8598),l=n(2995),s=n(8476),c=n(3318),d=n(7100),m=n(1737),h=n(720),u=n(5713);function _templateObject(){let e=(0,r._)(["\n  position: absolute;\n  top:0;\n  left:0;\n  width: 100%;\n  height: 100%;\n"]);return _templateObject=function(){return e},e}function _templateObject1(){let e=(0,r._)(["\n  border-radius: 0.5rem;\n  background: ",";\n  position: relative;\n  overflow: hidden;\n  aspect-ratio: 1;\n  cursor: zoom-in;\n  \n  user-select:none;\n  -webkit-user-select:none;\n\n  & img {\n    position: absolute;\n    -o-object-fit: cover;\n    object-fit: cover;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n  }\n\n  & img:after {\n    content: attr(alt);\n    background: ",";\n    color: ",";\n    font-weight: bold;\n    display: block;\n    position: absolute;\n    top: 0;\n    height: 100%;\n    width: 100%;\n    text-align: left;\n    padding: 1em;\n    word-break: break-all;\n  }\n"]);return _templateObject1=function(){return e},e}function _templateObject2(){let e=(0,r._)(["\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 5px;\n\n  @media screen and (max-width: 580px) {\n    grid-template-columns: repeat(3, 1fr);\n  }\n\n"]);return _templateObject2=function(){return e},e}function parseMarkdownImage(e){let t=/!\[(.*?)\]\((.*?)\)/.exec(e);if(!t)return null;{let e=t[1],n=t[2];return{alt:e,url:n}}}function ImageThumbs(e){var t,n,r;let{imgsmd:a}=e,l=(0,u.useImageBroswerStore)(e=>e),[s,c]=(0,o.useState)(Array(a.length).fill(1).map((e,t)=>({ok:"loading",index:t,src:"",width:1,height:1,alt:""})));return((0,o.useEffect)(()=>{(async function(){let e=a.map(async(e,t)=>{let n;let r=parseMarkdownImage(e);if(!r)return{ok:"failed",index:t,src:"",width:0,height:0,alt:""};let{url:i,alt:o}=r,a=new Image,l=new Promise((e,n)=>{a.onload=()=>e(a),a.onerror=()=>n({ok:"failed",index:t,src:"",width:0,height:0,alt:o}),a.src=i});return(await l.catch(e=>{n=e}),n)?n:{ok:"loaded",index:t,src:i,width:a.width,height:a.height,alt:o}});try{let t=await Promise.all(e);c(t)}catch(e){console.error("Error loading images:",e)}})()},[a,c]),0===a.length)?null:(0,i.jsx)(i.Fragment,{children:1===a.length?(0,i.jsx)("div",{style:{height:"250px"},children:(0,i.jsxs)(g,{style:{maxWidth:"100%",height:"100%",aspectRatio:s[0]?s[0].width/s[0].height>2.5?2.5:s[0].width/s[0].height<.75?.75:s[0].width/s[0].height:2},children:[" ",(0,i.jsx)("img",{loading:"lazy",src:(null===(t=s[0])||void 0===t?void 0:t.ok)==="loaded"?null===(n=s[0])||void 0===n?void 0:n.src:"",alt:null===(r=s[0])||void 0===r?void 0:r.ok}),(0,i.jsx)(p,{onClick:e=>{e.stopPropagation(),l.setCurrentIndex(0),l.setImagesData(s),l.setisModel(!0)}})]})}):(0,i.jsx)(f,{children:s.map((e,t)=>(0,i.jsxs)(g,{onTouchEnd:e=>{e.stopPropagation()},children:[" ",(0,i.jsx)("img",{loading:"lazy",src:"loaded"===e.ok?e.src:"",alt:e.ok}),(0,i.jsx)(p,{onClick:e=>{e.stopPropagation(),l.setCurrentIndex(t),l.setImagesData(s),l.setisModel(!0)}})]},t))})})}let p=a.ZP.div.withConfig({componentId:"sc-c0175b54-0"})(_templateObject()),g=a.ZP.div.withConfig({componentId:"sc-c0175b54-1"})(_templateObject1(),e=>e.theme.colors.bg2,e=>e.theme.colors.bg2,e=>e.theme.colors.uiLineGray),f=a.ZP.div.withConfig({componentId:"sc-c0175b54-2"})(_templateObject2());function memocard_templateObject(){let e=(0,r._)(["\n\n  background:",";\n  margin: 0.625rem 0;\n  padding: 1.5rem;\n  border-radius: 0.75rem;\n  animation: "," .3s ease;\n\n  @media screen and (max-width: 580px) {\n    padding: 1rem;\n    border-radius: unset;\n  }\n  \n  & > .content {\n    position: relative;\n    height: ",";\n    overflow: hidden;\n    /* transition: height 0.5s ease; */\n  }\n"]);return memocard_templateObject=function(){return e},e}function memocard_templateObject1(){let e=(0,r._)(["\n    display: ",";\n    position: absolute;\n    bottom: 0;\n    width: 100%;\n    height: 7rem;\n    text-align: right;\n    \n    color: ",";\n    ","\n\n    .rd-more {\n      font-size: 0.875rem;\n      letter-spacing: 0.02rem;\n      margin-top: 5.5rem;;\n      cursor: pointer;\n      span {\n        transition: box-shadow .3s;\n        margin-right: 0.5rem;\n      }\n    }\n\n    & .rd-more:hover span {\n      ","\n    }\n   \n"]);return memocard_templateObject1=function(){return e},e}function memocard_templateObject2(){let e=(0,r._)(["\n    padding-left: 5px;\n\n    @media screen and (min-width: 580px){\n      padding-left: 0.5rem;\n      padding-right: 0.5rem;\n    }\n\n    padding-bottom: ",";\n    \n    h1,h2,h3,h4,h5,h6 {\n      font-size: 1rem;\n    }\n\n    & .tag {\n      color: ",";\n    }\n\n    & .tag:hover {\n      cursor: pointer;\n      color: ",";\n    }\n"]);return memocard_templateObject2=function(){return e},e}function _templateObject3(){let e=(0,r._)(["\n    display: flex;\n\n    & > .avatar {\n      width: 3rem;\n      height: 3rem;\n      border-radius: 50%;\n      border: 1px solid ",";\n\n      @media screen and (max-width: 580px){\n        width: 2.75rem;\n        height: 2.75rem;\n      }\n\n    }\n\n    & .meta{\n      margin-left: 0.5rem;\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      font-weight: bold;\n    }\n\n    & .date {\n      font-size: 0.85rem;\n      font-weight: normal;\n      color: ",";\n    }\n\n    & .word-count {\n      position: absolute;\n      right: 0;\n    }\n"]);return _templateObject3=function(){return e},e}function MemoCard(e){let{source:t,setSearchText:n,triggerHeightChange:r,...c}=e,[d,h]=(0,o.useState)(!0),u=(0,o.useContext)(a.Ni),p=o.useRef(null),g=t.length>200,f=(0,o.useMemo)(()=>{let e=(0,l.sG)(t.id);return -1!==e.getTime()?(0,l.l0)(e):t.id},[t.id]);function handleExpand(e){if(!d){let e=p.current;if(e){let t=e.getBoundingClientRect().top;(t<0||t>window.innerHeight)&&globalThis.scrollTo({top:t+globalThis.scrollY})}}h(!d),p.current&&r&&r(!0)}return(0,i.jsxs)(x,{...c,$isCollapse:!1!==g&&d,ref:p,children:[(0,i.jsxs)("div",{className:"content",children:[(0,i.jsxs)(w,{children:[(0,i.jsx)("img",{className:"avatar",src:u.assets.favico,alt:s.d.author}),(0,i.jsxs)("div",{className:"meta",children:[(0,i.jsx)("div",{children:s.d.author}),(0,i.jsxs)("div",{className:"date",children:[f,(0,i.jsxs)("span",{className:"word-count",children:[t.length,"\xa0字"]})]})]})]}),(0,i.jsx)(j,{$bottomSpace:g,children:(0,m.n)(t.code,n)}),(0,i.jsx)(b,{$isCollapse:d,$isShown:g,children:(0,i.jsx)("div",{onClick:handleExpand,className:"rd-more",children:(0,i.jsx)("span",{children:d?"展开全文":"收起"})})})]}),0!==t.imgsmd.length&&(0,i.jsx)("div",{style:{padding:"0 0.5rem"},children:(0,i.jsx)(ImageThumbs,{imgsmd:t.imgsmd})})]})}let x=a.ZP.section.withConfig({componentId:"sc-ae18b464-0"})(memocard_templateObject(),e=>e.theme.colors.bg,c.r$,e=>!0===e.$isCollapse?"18.2rem":"auto"),b=a.ZP.div.withConfig({componentId:"sc-ae18b464-1"})(memocard_templateObject1(),e=>!0===e.$isShown?"block":"none",e=>e.theme.colors.accent,e=>!0===e.$isCollapse?e.theme.colors.maskGradient:"",()=>d.XC.f),j=(0,a.ZP)(h.j).withConfig({componentId:"sc-ae18b464-2"})(memocard_templateObject2(),e=>!0===e.$bottomSpace?"2rem":"inherit",e=>e.theme.colors.accent,e=>e.theme.colors.accentHover),w=a.ZP.div.withConfig({componentId:"sc-ae18b464-3"})(_templateObject3(),e=>e.theme.colors.uiLineGray,e=>e.theme.colors.textGray2)},1812:function(e,t,n){"use strict";n.d(t,{Z:function(){return NavCard}});var r=n(1262),i=n(1527),o=n(4738),a=n(8598);function _templateObject(){let e=(0,r._)(["\n  margin-top: 1.5rem;\n  padding-left: 1rem;\n  display: flex;\n  flex-direction: column;\n  color:",";\n\n  .item {\n    padding: 0.25rem 0;\n    margin-right: 0.75rem;\n    border-right: 2px solid ",";\n  }\n\n  .item.active {\n    border-right: 2px solid ",";\n  }\n\n  .title {\n    font-weight: bold;\n    margin-right: 0.25rem;\n  }\n\n  .count {\n    font-size: 0.875rem;\n    font-weight: bold;\n    color: ",";\n    vertical-align: bottom;\n  }\n"]);return _templateObject=function(){return e},e}function NavCard(e){let{info:t}=e,[n,r]=(0,o.$G)();return(0,i.jsxs)(l,{children:[(0,i.jsxs)("div",{className:"item active",children:[(0,i.jsx)("span",{className:"title",children:n("memos")}),(0,i.jsx)("span",{className:"count",children:t.memos})]}),(0,i.jsxs)("div",{className:"item",children:[(0,i.jsx)("span",{className:"title",children:n("photos")}),(0,i.jsx)("span",{className:"count",children:t.imgs})]})]})}let l=a.ZP.section.withConfig({componentId:"sc-727864c5-0"})(_templateObject(),e=>e.theme.colors.textSecondary,e=>e.theme.colors.uiLineGray,e=>e.theme.colors.accent,e=>e.theme.colors.textGray2)},5376:function(e,t,n){"use strict";var r=n(1527),i=n(959),o=n(1702);function ListItem(e){let{Elem:t,index:n,source:a,placeHolder:l,setplaceHolder:s}=e,c=(0,i.useRef)(null),d=(0,i.useCallback)(()=>{if(c.current){let e=c.current.offsetHeight;s(t=>{if(t[n]===e||0===e)return t;let r=[...t];return r[n]=e,r})}},[c,s,n]);(0,i.useEffect)(()=>{let e=(0,o.P)(d,150);return globalThis.addEventListener("resize",e),()=>{globalThis.removeEventListener("resize",e)}},[c,n,s,d]);let[m,h]=(0,i.useState)(!1);(0,i.useEffect)(()=>{m&&(d(),h(!1))},[m,d]);let[u,p]=(0,i.useState)(!1);(0,i.useEffect)(()=>{d(),p(!0)},[c,d]);let g=(0,i.useMemo)(()=>l.slice(0,n).reduce((e,t)=>e+=t,0),[n,l]);return(0,r.jsx)("div",{ref:c,style:{position:"absolute",width:"100%",transform:"translateY(".concat(g,"px)"),visibility:u?"visible":"hidden"},children:t({source:a,triggerHeightChange:h})})}t.Z=e=>{let{sources:t,setSources:n,Elem:a,scrollRef:l,fetchFrom:s,batchsize:c}=e,[d,m]=(0,i.useState)(Array(t.length).fill(300)),[h,u]=(0,i.useState)(Array(t.length).fill(0).map((e,t)=>t)),[p,g]=(0,i.useState)(3*t.length),f=(0,i.useRef)({enable:!0}),x=(0,i.useMemo)(()=>d.reduce((e,t)=>e+=t,0),[d]),b=(0,i.useCallback)(e=>{let t=0;for(let n=0;n<e;n++)t+=d[n];return t},[d]);return(0,i.useEffect)(()=>{let e=null==l?void 0:l.current,r=(0,o.P)(()=>{if(!f.current.enable)return;let r=b(h[h.length-1])-b(h[0]),i=(e?e.scrollHeight:globalThis.scrollY)-b(h[0]),o=i/r;if(!isNaN(o)&&isFinite(o)&&!(o>1.5)){if(f.current={enable:!1},s&&o<.2){let e=h[0]-c;if(e<0){f.current={enable:!0};return}s(e,c).then(e=>{if(!e||0===e.length){f.current={enable:!0};return}let r=h.map(e=>e-h.length);if(e.length>h.length){let t=Array(e.length-h.length).fill(0).map((t,n)=>n-e.length+h.length+r[0]);r=t.concat(r)}else e.length<h.length&&(r=r.slice(h.length-e.length,h.length));let i=r.concat(h),o=e.concat(t);i.length>p&&(i.splice(0-r.length,r.length),o.splice(0-r.length,r.length)),u(i),n(o),f.current={enable:!0}})}else if(s&&o>.7){let e=h[h.length-1]+1;s(e,c).then(e=>{if(!e||0===e.length){f.current={enable:!0};return}let r=h.map(e=>e+h.length);if(e.length>h.length){let t=Array(e.length-h.length).fill(0).map((e,t)=>t+r[r.length-1]);r=r.concat(t)}else e.length<h.length&&(r=r.slice(0,e.length));if(r[r.length-1]>d.length-1){let e=Array(r[r.length-1]-d.length+1).fill(300);m(d.concat(e))}let i=h.concat(r),o=t.concat(e);i.length>p&&(i.splice(0,e.length),o.splice(0,e.length)),u(i),n(o),f.current={enable:!0}})}else f.current={enable:!0}}},500);return e?e.addEventListener("scroll",r):globalThis.addEventListener("scroll",r),()=>{e?e.addEventListener("scroll",r):globalThis.removeEventListener("scroll",r)}},[f,l,s,h,n,d,b,t,c,p]),(0,r.jsx)("div",{style:{position:"relative",width:"100%",minHeight:"".concat(x,"px")},children:t.map((e,t)=>(0,r.jsx)(ListItem,{index:h[t],Elem:a,source:e,placeHolder:d,setplaceHolder:m},e.id))})}},1024:function(e,t,n){"use strict";n.d(t,{e:function(){return createClient}});let r="/data/memos",getMemoInfo=async()=>fetch(r+"/status.json").then(e=>e.json()).then(e=>e),queryMemoByCount=async(e,t)=>{let n=[Math.floor(e/10),e%10],i=[Math.floor((e+t-1)/10),(e+t-1)%10],o=await getMemoInfo(),a=[];for(let e=n[0];e<=i[0];e++)e>=0&&e<=o.pages&&a.push("".concat(r,"/").concat(e,".json"));let l=a.map(async(e,t)=>fetch(e).then(e=>e.json()).then(e=>0===t?i[0]-n[0]!=0?e.slice(n[1]):e.slice(n[1],i[1]+1):t===i[0]?e.slice(0,i[1]+1):e));return(await Promise.all(l)).flat()},queryMemoByDate=async(e,t)=>{let n=await getMemoInfo(),i=n.pageMap.filter(n=>{if(n.endDate<e.getTime()||n.startDate>t.getTime())return!1}),o=i.map(e=>"".concat(r,"/").concat(e,".json")),a=o.map(async(e,t)=>fetch(e).then(e=>e.json()).then(e=>e));return(await Promise.all(a)).flat()},queryMemoTags=async()=>fetch("".concat(r,"/tags.json")).then(e=>e.json()),queryMemoImgs=async()=>[],i={static:{getMemoInfo,queryMemoByCount,queryMemoByDate,queryMemoTags,queryMemoImgs}};function createClient(e){return i[e]||console.error("[client.ts] client ".concat(e," not in clientList")),i[e]}},5534:function(e,t,n){"use strict";n.d(t,{n5:function(){return compileMdxMemo}}),n(959),n(9995),n(1527);var r=n(6276),i=n(3535),o=n(5709);function remarkTag(){return function(e){(0,o.Vn)(e,function(e,t,n){if("paragraph"===e.type){let t=[];e.children.forEach(e=>{if("text"===e.type){let n=e.value,r=extractTags(n);if(r.length>0){let e=flatsplit(n,r),i="#"+r[r.length-1],o=e[e.length-1].text;o.endsWith(i)&&(e[e.length-1]={text:o.slice(0,o.length-i.length),isDelimiter:!1},e.push({text:i,isDelimiter:!0})),e.forEach(e=>{if(e.isDelimiter){let n={type:"mdxJsxFlowElement",name:"Tag",attributes:[{type:"mdxJsxAttribute",name:"text",value:e.text.slice(1)}]};t.push(n)}else t.push({type:"text",value:e.text})})}else t.push(e)}else t.push(e)}),e.children=t}})}}function flatsplit(e,t){if(t.includes(e))return[{text:e,isDelimiter:!0}];let n=[{text:e,isDelimiter:!1}];for(let e of t){let t=[];for(let r of n){if(r.isDelimiter){t.push(r);continue}if(""===r.text)continue;let n=r.text.split(e);for(let r=0;r<n.length&&(t.push({text:n[r],isDelimiter:!1}),r!==n.length-1);r++)t.push({text:e,isDelimiter:!0})}n=t}return n.filter(e=>""!==e.text)}function extractTags(e){let t=["#","##","###","####","#####","######"],n=[],r="",i=!1;for(let o=0;o<e.length;o++){let a=e[o];"`"===a&&(i=!i)&&(r=""),i||(r.length>0?" "===a||"\n"===a||"\r\n"===a?(t.includes(r)||n.push(r),r=""):r+=a:"#"!==a||0!==o&&" "!==e[o-1]&&"\n"!==e[o-1]||(r+=a))}return r.length>0&&n.push(r),n}async function compileImport(){return(await Promise.all([n.e(54),n.e(291),n.e(467)]).then(n.bind(n,3467))).compile}async function compileMdxMemo(e){let t=await compileImport(),n=String(await t(e,{outputFormat:"function-body",remarkPlugins:[i.Z,remarkTag],rehypePlugins:[r.Z]}));return{code:n}}},420:function(e,t,n){"use strict";n.a(e,async function(e,r){try{var i=n(959),o=n(8852);let e=await n.e(828).then(n.bind(n,3828)).then(e=>e.createNaive);function useSearch(t){let{inputRef:n,setRes:r,initData:a}=t,[l,s]=(0,i.useState)(),[c,d]=(0,i.useState)({isSearch:"ready",searchText:""}),m=(0,i.useCallback)(async()=>{let t;console.debug("%% init search...");let{searchObj:n,filterRes:i}=await a();function notifier(e){let t=i(e);Promise.all(t).then(e=>{r(e),d(e=>({...e,isSearch:"done"}))})}return t=e({data:n,field:["tags","content"],notifier,disableStreamNotify:!0}),s(t),d(e=>({...e})),t},[a,r]),h=(0,i.useCallback)(async()=>{if(!n.current)return;let e=n.current.value.trim();if(0===e.length)return;d(t=>({...t,isSearch:"searching",searchText:e})),globalThis.scrollTo({top:0});let t=l;t||(t=await m()),t.search(e.split(" "))},[m,l,n]),u=(0,i.useCallback)(function(e){let t=!(arguments.length>1)||void 0===arguments[1]||arguments[1];n.current&&(n.current.value=e,t&&h())},[h,n]);return(0,o.I)("keydown",e=>{n.current&&n.current===document.activeElement&&"Enter"===e.key&&h()},void 0,[h]),{searchStatus:c,setsearchStatus:d,setSearchText:u,handleSearch:h,initSearch:m}}t.Z=useSearch,r()}catch(e){r(e)}},1)},7782:function(e,t,n){"use strict";n.a(e,async function(e,r){try{n.r(t),n.d(t,{__N_SSG:function(){return D},default:function(){return Memos}});var i=n(1262),o=n(1527),a=n(4822),l=n(8999),s=n(67),c=n(3542),d=n(9343),m=n(5849),h=n.n(m),u=n(3522),p=n.n(u),g=n(959),f=n(4738),x=n(8598),b=n(4085),j=n(8607),w=n(972),y=n(2723),v=n(1060),_=n(3797),C=n(4247),k=n(6918),O=n(5713),I=n(7207),M=n(1812),P=n(5376),S=n(5124),Z=n(1024),T=n(5534),N=n(420),E=n(8476),L=n(7100),z=e([N]);function _templateObject(){let e=(0,i._)(["\n  max-width: 1080px;\n  margin: 0 auto;\n  .button-float {\n    display: none;\n  }\n\n  @media screen and (max-width: 780px) {\n    max-width: 100%;\n    .button-float {\n      display: unset;\n    }\n  }\n\n  @media screen and (max-width: 580px) {\n  }\n"]);return _templateObject=function(){return e},e}function _templateObject1(){let e=(0,i._)(["\n  width: 100%;\n  padding: 73px 16px 48px 16px; /* top height + memocard margin */\n  align-self: flex-end;\n\n  &::-webkit-scrollbar {\n    display: none;\n  }\n\n  @media screen and (min-width: 1080px) {\n    max-width: 700px;\n  }\n\n\n  @media screen and (max-width: 780px) {\n    width: 100%;\n  }\n\n  @media screen and (max-width: 580px) {\n    padding-left: 0;\n    padding-right: 0;\n  }\n"]);return _templateObject1=function(){return e},e}function _templateObject2(){let e=(0,i._)(["\n  position: sticky;\n\n  max-width: 15rem;\n  padding-top: 83px; /* top height + memocard margin * 2 */\n  padding-bottom: 64px;\n  margin: 0 0.5rem;\n  height: 100vh;\n  overflow-y: auto;\n  &::-webkit-scrollbar {\n    display: none;\n  }\n\n  .close-btn {\n    display:none;\n    z-index: 1;\n  }\n  \n  @media screen and (max-width: 1080px) {\n    margin: 0;\n  }\n\n  @media screen and (max-width: 780px) {\n    ","\n    padding: 0rem 1rem;\n    transition: transform .3s ease;\n    transform: ",";\n\n    .close-btn {\n      position: sticky;\n      top:0;\n      background: inherit;\n\n      display: flex;\n      font-weight: bold;\n      justify-content: space-between;\n      align-items: center;\n\n      padding: 1rem 0;\n      ","\n      color: ",";\n      font-size: 1rem;\n      cursor:pointer;\n    }\n    .close-btn:hover{\n      color: ",";\n    }\n  }\n\n  /* util class */\n  .hover-gold {\n    cursor: pointer;\n  }\n\n  .hover-gold:hover {\n    color: ",";\n  }\n"]);return _templateObject2=function(){return e},e}function _templateObject3(){let e=(0,i._)(["\n  border-radius: 2rem;\n  background: ",";\n  color: ",";\n  display: flex;\n  align-items: center;\n  margin: 0 0.5rem; /* 无 bg 时*/\n  border: 1px solid ",";\n\n  &:focus-within {\n    border: 1px solid ",";\n  }\n\n  input {\n    border: none;\n    background: inherit;\n    line-height: 2rem;\n    color: inherit;\n    flex: 1 1 auto;\n    width: 0;\n    margin-left: 1rem;\n  }\n\n  input:focus,\n  input:focus-visible {\n    outline: none;\n  }\n\n  svg {\n    margin: 0 auto;\n    flex: 0  0 auto;\n    margin: 0 0.6rem 0 0.5rem;\n    color: ",";\n  }\n"]);return _templateObject3=function(){return e},e}N=(z.then?(await z)():z)[0];let $=h()(()=>Promise.resolve().then(n.bind(n,5713)),{loadableGenerated:{webpack:()=>[5713]}});var D=!0;function Memos(e){let{source:t,info:n,memotags:r,client:i}=e,m=(0,g.useContext)(x.Ni),[h,u]=(0,g.useState)(t),[L,z]=(0,g.useState)(t),[D,B]=(0,g.useState)(!1),[q,F]=(0,f.$G)(),Y=(0,O.useImageBroswerStore)(e=>e.isModel),[W,X]=(0,g.useState)((0,Z.e)(i)),U=(0,g.useCallback)(async(e,t)=>W.queryMemoByCount(e,t).then(e=>e.length>0?Promise.all(e.map(async e=>({...e,length:e.content.length,code:(await (0,T.n5)(e.content)).code}))):void 0),[W]),J=(0,g.useRef)(null),{searchStatus:V,setsearchStatus:K,setSearchText:Q,handleSearch:ee,initSearch:et}=(0,N.Z)({inputRef:J,setRes:u,initData:async()=>{let e=Array.from({length:n.pages+1},(e,t)=>"".concat("/data/memos","/").concat(t,".json")),t=e.map(e=>fetch(e).then(e=>e.json())),r=await Promise.all(t),i=r.flatMap(e=>e),o=i.map(e=>({id:e.id,title:"",content:e.content,tags:e.tags}));return{searchObj:o,filterRes:e=>{let t=e.map(e=>e.id),n=i.filter(e=>!!t.includes(e.id)).map(async e=>({...e,code:(await (0,T.n5)(e.content)).code,length:e.content.length}));return n}}}});function statusRender(){switch(V.isSearch){case"ready":return"";case"searching":return"Searching...";case"done":return(0,o.jsxs)(o.Fragment,{children:["Results: ",h.length," memos",(0,o.jsx)("span",{style:{fontStyle:"normal",fontWeight:"bold",cursor:"pointer",marginLeft:"0.875em"},onClick:()=>{K(e=>({...e,isSearch:"ready",searchText:""})),u(L)},children:"X"})]})}}return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(p(),{children:[(0,o.jsx)("title",{children:"".concat(E.d.author," - Memos")}),(0,o.jsx)(b.CommonHead,{})]}),(0,o.jsx)(v.Z,{placeHolder:!1,hideSearch:!0}),(0,o.jsxs)("main",{style:{backgroundColor:null==m?void 0:m.colors.bg2},children:[(0,o.jsxs)(H,{children:[(0,o.jsx)(j.Z,{className:"button-float",Icon:a.Z,clickHandler:e=>B(e=>!e)}),(0,o.jsxs)(_.Uq,{sep:1,siderLocation:"right",children:[(0,o.jsxs)(G,{children:[(0,o.jsx)(y.H,{style:{marginRight:"1rem"},children:statusRender()}),(0,o.jsx)("div",{style:{minHeight:"100vh"},children:"ready"===V.isSearch?(0,o.jsx)(P.Z,{sources:h,setSources:u,Elem:e=>(0,o.jsx)(I.l,{source:e.source,setSearchText:Q,triggerHeightChange:e.triggerHeightChange}),fetchFrom:U,batchsize:10},"vl1"):"done"===V.isSearch?(0,o.jsx)(P.Z,{sources:h,setSources:u,Elem:e=>(0,o.jsx)(I.l,{source:e.source,setSearchText:Q,triggerHeightChange:e.triggerHeightChange}),batchsize:10},V.searchText):null}),(0,o.jsx)(w.Z,{})]}),(0,o.jsxs)(R,{$isMobileSider:D,children:[(0,o.jsxs)("div",{className:"close-btn",onClick:e=>{e.stopPropagation(),B(e=>!e)},children:["小小の菜单",(0,o.jsx)(l.Z,{size:"1.25em",style:{marginLeft:".5rem"}})]}),(0,o.jsxs)(A,{children:[(0,o.jsx)("input",{type:"text",placeholder:q("search"),ref:J,onFocus:()=>{et()}}),(0,o.jsx)(s.Z,{className:"hover-gold",size:"1.4rem",onClick:ee})]}),(0,o.jsx)(M.Z,{info:n}),(0,o.jsx)(C.Z,{Icon:c.Z,title:q("tags"),children:r.map(e=>(0,o.jsx)("span",{className:"hover-gold",style:{display:"inline-block",paddingRight:"0.5em"},onClick:()=>{Q("#"+e.name)},children:"#".concat(e.name)},e.name))}),E.d.friends&&(0,o.jsx)(C.Z,{title:q("friends"),Icon:d.Z,children:E.d.friends.map((e,t)=>(0,o.jsx)("div",{children:(0,o.jsx)(S.IM,{href:e.link,style:{fontWeight:"normal"},children:e.name})},t))}),E.d.walineApi&&""!==E.d.walineApi&&(0,o.jsx)(k.Z,{})]})]})]}),Y&&(0,o.jsx)($,{})]})]})}let H=x.ZP.div.withConfig({componentId:"sc-c0779128-0"})(_templateObject()),G=x.ZP.div.withConfig({componentId:"sc-c0779128-1"})(_templateObject1()),R=x.ZP.div.withConfig({componentId:"sc-c0779128-2"})(_templateObject2(),L.Cz,e=>e.$isMobileSider?"translateY(0)":"translateY(100%)",e=>e.$isMobileSider?null:"visibility:hidden;",e=>e.theme.colors.textGray2,e=>e.theme.colors.accent,e=>e.theme.colors.accent),A=x.ZP.div.withConfig({componentId:"sc-c0779128-3"})(_templateObject3(),e=>e.theme.colors.bg,e=>e.theme.colors.textPrimary,e=>e.theme.colors.uiLineGray,e=>e.theme.colors.accentHover,e=>e.theme.colors.uiLineGray);r()}catch(e){r(e)}})}},function(e){e.O(0,[774,746,115,797,767,888,179],function(){return e(e.s=83)}),_N_E=e.O()}]);