(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{1917:function(e,n,r){Promise.resolve().then(r.t.bind(r,5335,23)),Promise.resolve().then(r.bind(r,2529)),Promise.resolve().then(r.bind(r,4228)),Promise.resolve().then(r.bind(r,3249)),Promise.resolve().then(r.t.bind(r,3385,23))},7907:function(e,n,r){"use strict";var t=r(5313);r.o(t,"usePathname")&&r.d(n,{usePathname:function(){return t.usePathname}}),r.o(t,"useSearchParams")&&r.d(n,{useSearchParams:function(){return t.useSearchParams}})},2529:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return d}});var t=r(7437),s=r(8792),l=r(2265),a=r(8656),o=r.n(a);function i(e){let{children:n,onDismiss:r}=e,s=(0,l.useRef)(null);return(0,l.useEffect)(()=>{if(null==s.current){console.error("dialogRef.current is null.");return}s.current.showModal()},[]),(0,t.jsxs)("dialog",{ref:s,className:"".concat(o()["modal-container"]," fixed flex h-[100dvh] max-h-none w-[100dvw] max-w-none flex-col items-center gap-4 bg-transparent p-4 text-inherit [justify-content:safe_center]"),onClose:()=>null==r?void 0:r(),children:[r?(0,t.jsx)("div",{className:o().dismiss,children:(0,t.jsx)(d,{onClick:r,"aria-label":"Fechar modal",children:(0,t.jsx)("span",{className:"material-symbols-outlined","aria-hidden":!0,translate:"no",children:"close"})})}):(0,t.jsx)(t.Fragment,{}),(0,t.jsx)("div",{className:"".concat(o().modal," rounded-3xl bg-bg-close p-4 dark:bg-bg-close-dark"),children:n})]})}function c(e){let[n,r]=(0,l.useState)(!1);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("button",{className:"flex flex-row items-center justify-center gap-2 rounded-3xl bg-primary px-4 py-2 font-bold text-fg-on-primary transition-all hover:shadow-[0_0_50px_theme(colors.primary_/_25%)] hover:brightness-110 hover:[text-shadow:_0_0_15px_currentcolor]",onClick:()=>r(!0),"aria-label":e["aria-label"],children:e.children}),n?(0,t.jsx)(i,{onDismiss:()=>r(!1),children:e.modalContent}):(0,t.jsx)(t.Fragment,{})]})}function d(e){let n="flex flex-row items-center gap-2 rounded-3xl bg-primary px-4 py-2 font-bold text-fg-on-primary justify-center transition-all hover:brightness-110 hover:shadow-[0_0_50px_theme(colors.primary_/_25%)] hover:[text-shadow:_0_0_15px_currentcolor]";return(0,t.jsx)(t.Fragment,{children:"onClick"in e?(0,t.jsx)("button",{...e,type:"button",className:n}):"href"in e?(0,t.jsx)(s.default,{...e,className:n}):(0,t.jsx)(c,{...e,className:n})})}},4228:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return l}});var t=r(7437),s=r(2265);function l(){let e=(0,s.useRef)(null);return(0,s.useEffect)(()=>{if(null==e.current){console.error("ref.current is null");return}let n=e.current,r=e=>{let{clientX:r,clientY:t}=e;n.style.opacity="1",n.style.left="".concat(r,"px"),n.style.top="".concat(t,"px")};return document.addEventListener("mousemove",r),()=>document.removeEventListener("mousemove",r)},[]),(0,t.jsx)("div",{ref:e,className:"pointer-events-none fixed z-[2] h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 opacity-0 blur-3xl transition-opacity"})}},3249:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return d}});var t=r(7437),s=r(8792),l=r(2529);function a(){return(0,t.jsxs)(l.default,{"aria-label":"Mudar tema",onClick:()=>{localStorage.setItem("theme-dark",String(document.documentElement.classList.toggle("dark")))},children:[(0,t.jsx)("span",{className:"material-symbols-outlined","aria-hidden":!0,translate:"no",children:"contrast"}),"Mudar tema"]})}var o=r(7907),i=r(2265);let c=[{name:"In\xedcio",href:"/"},{name:"Projetos",href:"/projetos"}];function d(){let e=(0,o.usePathname)(),n=(0,i.useRef)(null);return(0,i.useEffect)(()=>{let e=scrollY,r=()=>{var r,t;let s=scrollY;s>e&&0!=scrollY?null===(r=n.current)||void 0===r||r.classList.add("translate-y-[-100%]"):null===(t=n.current)||void 0===t||t.classList.remove("translate-y-[-100%]"),e=s};return addEventListener("scroll",r),()=>document.body.removeEventListener("scroll",r)}),(0,t.jsx)("header",{ref:n,className:"fixed left-0 top-0 z-[1] flex w-full flex-row justify-end bg-bg-close px-4 py-2 shadow-sm transition-all dark:bg-bg-close-dark",children:(0,t.jsxs)("div",{className:"flex grow flex-row items-center justify-end sm:justify-between",children:[(0,t.jsx)("nav",{className:"hidden flex-row gap-8 sm:flex",children:c.map(n=>{let{name:r,href:l}=n;return(0,t.jsx)(s.default,{href:l,className:e===l?"font-bold text-primary":"",children:r},r)})}),(0,t.jsxs)("div",{className:"flex flex-row gap-4",children:[(0,t.jsx)("div",{className:"sm:invisible",children:(0,t.jsxs)(l.default,{modalContent:(0,t.jsxs)("div",{className:"flex flex-col gap-4",children:[(0,t.jsx)("div",{className:"sm:hidden",children:(0,t.jsx)(a,{})}),c.map(n=>{let{name:r,href:l}=n;return(0,t.jsx)(s.default,{href:l,className:e===l?"font-bold text-primary":"",children:r},r)})]}),children:[(0,t.jsx)("span",{className:"material-symbols-outlined","aria-hidden":!0,translate:"no",children:"menu"}),"Menu"]})}),(0,t.jsx)("div",{className:"hidden sm:block",children:(0,t.jsx)(a,{})})]})]})})}},3385:function(){},8656:function(e){e.exports={"modal-container":"modal_modal-container__CjvJZ",dismiss:"modal_dismiss__uuQxh",modal:"modal_modal__noGlo"}},5335:function(e){e.exports={style:{fontFamily:"'__Quicksand_68e9d9', '__Quicksand_Fallback_68e9d9'",fontStyle:"normal"},className:"__className_68e9d9"}}},function(e){e.O(0,[792,971,69,744],function(){return e(e.s=1917)}),_N_E=e.O()}]);