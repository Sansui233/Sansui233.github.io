import{a as i,p as e,q as u,w as d,t as m,M as g,L as l,S as h,v as p,O as f,i as x}from"./chunk-JMJ3UQ3L-BVFOw7ai.js";import{s}from"./i18nInstance-DPKwMV5N.js";import{d as w,i as o}from"./i18n-C8hHMX00.js";function j({children:t}){return i.useEffect(()=>{const a=w();o.language,o.language!==a&&o.changeLanguage(a)},[]),e.jsx(e.Fragment,{children:t})}function y(){const t=u();i.useEffect(()=>{typeof window.gtag<"u"&&window.gtag("config",s.GAId,{page_path:t.pathname})},[t,s.GAId])}const S=()=>[];function A({children:t}){return y(),e.jsxs("html",{lang:"zh",suppressHydrationWarning:!0,children:[e.jsxs("head",{children:[e.jsx("meta",{charSet:"utf-8"}),e.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0, user-scalable=yes, minimum-scale=0.25, maximum-scale=5.0"}),e.jsx("script",{dangerouslySetInnerHTML:{__html:`
              (function() {
                var theme = localStorage.getItem("theme");
                if (theme === "system" || !theme) {
                  theme = window.matchMedia("(prefers-color-scheme: dark)").matches
                    ? "dark" : "light";
                }
                console.debug("theme", theme);
                document.documentElement.classList.add(theme);
              })();
            `}}),e.jsx(g,{}),e.jsx(l,{}),e.jsx("script",{async:!0,src:`https://www.googletagmanager.com/gtag/js?id=${s.GAId}`}),e.jsx("script",{dangerouslySetInnerHTML:{__html:`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${s.GAId}', {
                page_path: window.location.pathname,
              });
            `}})]}),e.jsxs("body",{children:[t,e.jsx(h,{}),e.jsx(p,{})]})]})}const _=d(function(){return e.jsx(j,{children:e.jsx(f,{})})}),b=m(function({error:a}){let r="Oops!",n="An unexpected error occurred.",c;return x(a)&&(r=a.status===404?"404":"Error",n=a.status===404?"The requested page could not be found.":a.statusText||n),e.jsxs("main",{className:"container mx-auto p-4 pt-16",children:[e.jsx("h1",{children:r}),e.jsx("p",{children:n}),c]})});export{b as ErrorBoundary,A as Layout,_ as default,S as links};
