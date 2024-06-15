(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{8563:function(e,n,r){Promise.resolve().then(r.t.bind(r,5335,23)),Promise.resolve().then(r.bind(r,2086)),Promise.resolve().then(r.bind(r,6789)),Promise.resolve().then(r.bind(r,8460)),Promise.resolve().then(r.t.bind(r,3385,23))},7907:function(e,n,r){"use strict";var t=r(5313);r.o(t,"usePathname")&&r.d(n,{usePathname:function(){return t.usePathname}}),r.o(t,"useSearchParams")&&r.d(n,{useSearchParams:function(){return t.useSearchParams}})},2086:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return f}});var t=r(7437),s=r(2265),l=r(8792),a=r(4464),o=r(5889),i=r(2235),c=r(3975),d=r.n(c);function u(e){let{children:n,onDismiss:r}=e,l=(0,s.useRef)(null);return(0,s.useEffect)(()=>{if(null==l.current){console.error("dialogRef.current is null.");return}l.current.showModal()},[]),(0,t.jsxs)("dialog",{ref:l,className:"".concat(d()["modal-container"]," fixed flex h-[100dvh] max-h-none w-[100dvw] max-w-none flex-col items-center gap-4 bg-transparent p-4 text-inherit [justify-content:safe_center]"),onClose:()=>null==r?void 0:r(),children:[r?(0,t.jsx)("div",{className:d().dismiss,children:(0,t.jsx)(a.Z,{onClick:r,"aria-label":"Fechar modal",children:(0,t.jsx)(i.Z,{})})}):(0,t.jsx)(t.Fragment,{}),(0,t.jsx)("div",{className:d().modal,children:(0,t.jsx)(o.Z,{children:n})})]})}function m(e){let[n,r]=(0,s.useState)(!1);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("button",{className:"flex flex-row items-center justify-center gap-2 rounded-3xl bg-primary px-4 py-2 font-bold text-fg-on-primary transition-all hover:shadow-[0_0_50px_theme(colors.primary_/_25%)] hover:brightness-110 hover:[text-shadow:_0_0_15px_currentcolor]",onClick:()=>{r(!0)},"aria-label":e["aria-label"],children:e.children}),n?(0,t.jsx)(u,{onDismiss:()=>{r(!1)},children:e.modalContent}):(0,t.jsx)(t.Fragment,{})]})}function f(e){let n="flex flex-row items-center gap-2 rounded-3xl bg-primary px-4 py-2 font-bold text-fg-on-primary justify-center transition-all hover:brightness-110 hover:shadow-[0_0_50px_theme(colors.primary_/_25%)] hover:[text-shadow:_0_0_15px_currentcolor]";return(0,t.jsx)(t.Fragment,{children:"onClick"in e?(0,t.jsx)("button",{...e,type:"button",className:n}):"href"in e?(0,t.jsx)(l.default,{...e,className:n}):(0,t.jsx)(m,{...e,className:n})})}},4464:function(e,n,r){"use strict";r.d(n,{Z:function(){return t.default}});var t=r(2086)},5889:function(e,n,r){"use strict";r.d(n,{Z:function(){return s}});var t=r(7437);function s(e){let{children:n,level:r="close"}=e;return(0,t.jsx)("div",{className:"rounded-3xl bg-bg-close shadow-sm transition-colors dark:bg-bg-close-dark ".concat("close"===r?"bg-bg-close dark:bg-bg-close-dark":"bg-bg-closer dark:bg-bg-closer-dark"),children:(0,t.jsx)("div",{className:"h-full w-full rounded-3xl p-4 dark:[background:radial-gradient(ellipse_at_center,_theme(colors.primary/10%),_transparent)]",children:n})})}},6789:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return l}});var t=r(7437),s=r(2265);function l(){let e=(0,s.useRef)(null);return(0,s.useEffect)(()=>{if(null==e.current){console.error("ref.current is null");return}let n=e.current,r=e=>{let{clientX:r,clientY:t}=e;n.style.opacity="1",n.style.left="".concat(r,"px"),n.style.top="".concat(t,"px")};return document.addEventListener("mousemove",r),()=>{document.removeEventListener("mousemove",r)}},[]),(0,t.jsx)("div",{ref:e,className:"pointer-events-none fixed z-[2] h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 opacity-0 blur-3xl transition-opacity"})}},8460:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return f}});var t=r(7437),s=r(2265),l=r(4464),a=r(8792),o=r(843);/**
 * @license lucide-react v0.365.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let i=(0,o.Z)("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]),c=(0,o.Z)("SunMoon",[["path",{d:"M12 8a2.83 2.83 0 0 0 4 4 4 4 0 1 1-4-4",key:"1fu5g2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.9 4.9 1.4 1.4",key:"b9915j"}],["path",{d:"m17.7 17.7 1.4 1.4",key:"qc3ed3"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.3 17.7-1.4 1.4",key:"5gca6"}],["path",{d:"m19.1 4.9-1.4 1.4",key:"wpu9u6"}]]);function d(){return(0,t.jsxs)(l.Z,{"aria-label":"Mudar tema",onClick:()=>{localStorage.setItem("theme-dark",String(document.documentElement.classList.toggle("dark")))},children:[(0,t.jsx)(c,{}),"Mudar tema"]})}var u=r(7907);let m=[{name:"In\xedcio",href:"/"},{name:"Projetos",href:"/projetos"}];function f(){let e=(0,u.usePathname)(),n=(0,s.useRef)(null);return(0,s.useEffect)(()=>{let e=scrollY,r=()=>{var r,t;let s=scrollY;s>e&&0!==scrollY?null===(r=n.current)||void 0===r||r.classList.add("translate-y-[-100%]"):null===(t=n.current)||void 0===t||t.classList.remove("translate-y-[-100%]"),e=s};return addEventListener("scroll",r),()=>{document.body.removeEventListener("scroll",r)}}),(0,t.jsx)("header",{ref:n,className:"fixed left-0 top-0 z-[1] flex w-full flex-row justify-end bg-bg-close px-4 py-2 shadow-sm transition-all dark:bg-bg-close-dark",children:(0,t.jsxs)("div",{className:"flex grow flex-row items-center justify-end sm:justify-between",children:[(0,t.jsx)("nav",{className:"hidden flex-row gap-8 font-bold sm:flex",children:m.map(n=>{let{name:r,href:s}=n;return e===s?(0,t.jsx)("span",{className:"text-primary",children:r},r):(0,t.jsx)(a.default,{href:s,children:r},r)})}),(0,t.jsxs)("div",{className:"flex flex-row gap-4",children:[(0,t.jsx)("div",{className:"sm:invisible",children:(0,t.jsxs)(l.Z,{modalContent:(0,t.jsxs)("div",{className:"flex flex-col gap-4",children:[(0,t.jsx)("div",{className:"sm:hidden",children:(0,t.jsx)(d,{})}),m.map(n=>{let{name:r,href:s}=n;return(0,t.jsx)(a.default,{href:s,className:e===s?"font-bold text-primary":"",children:r},r)})]}),children:[(0,t.jsx)(i,{}),"Menu"]})}),(0,t.jsx)("div",{className:"hidden sm:block",children:(0,t.jsx)(d,{})})]})]})})}},3385:function(){},3975:function(e){e.exports={"modal-container":"modal_modal-container__i_YSx",dismiss:"modal_dismiss__Pn0UK",modal:"modal_modal__L3VW0"}},5335:function(e){e.exports={style:{fontFamily:"'__Quicksand_68e9d9', '__Quicksand_Fallback_68e9d9'",fontStyle:"normal"},className:"__className_68e9d9"}}},function(e){e.O(0,[512,971,69,744],function(){return e(e.s=8563)}),_N_E=e.O()}]);