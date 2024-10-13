(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{7400:function(e,t,n){Promise.resolve().then(n.t.bind(n,5250,23)),Promise.resolve().then(n.bind(n,2086)),Promise.resolve().then(n.bind(n,2206)),Promise.resolve().then(n.bind(n,9559)),Promise.resolve().then(n.bind(n,5275)),Promise.resolve().then(n.bind(n,529)),Promise.resolve().then(n.t.bind(n,2092,23))},5475:function(e){"use strict";e.exports=function(e){for(var t=5381,n=e.length;n;)t=33*t^e.charCodeAt(--n);return t>>>0}},2086:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return m}});var r=n(7437),i=n(2265),s=n(8792),l=n(4464),o=n(3125),a=n(2235),c=n(3975),d=n.n(c);function u(e){let{children:t,onDismiss:n}=e,s=(0,i.useRef)(null);return(0,i.useEffect)(()=>{if(null==s.current){console.error("dialogRef.current is null.");return}s.current.showModal()},[]),(0,r.jsxs)("dialog",{ref:s,className:"".concat(d()["modal-container"]," fixed flex h-[100dvh] max-h-none w-[100dvw] max-w-none flex-col items-center gap-4 bg-transparent p-4 text-inherit [justify-content:safe_center]"),onClose:()=>null==n?void 0:n(),children:[n?(0,r.jsx)("div",{className:d().dismiss,children:(0,r.jsx)(l.Z,{variant:"danger",onClick:n,"aria-label":"Fechar modal",children:(0,r.jsx)(a.Z,{})})}):(0,r.jsx)(r.Fragment,{}),(0,r.jsx)("div",{className:d().modal,children:(0,r.jsx)(o.Z,{children:t})})]})}let f=(0,n(5640).j)("flex flex-row items-center gap-2 rounded-md px-4 py-2 font-bold justify-center transition-all hover:brightness-110 hover:[text-shadow:_0_0_15px_currentcolor]",{variants:{variant:{primary:"text-fg-on-primary bg-primary",danger:"text-fg-on-primary bg-danger"}}});function h(e){let[t,n]=(0,i.useState)(!1);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("button",{className:e.className,onClick:()=>{n(!0)},"aria-label":e["aria-label"],children:e.children}),t?(0,r.jsx)(u,{onDismiss:()=>{n(!1)},children:e.modalContent}):(0,r.jsx)(r.Fragment,{})]})}function m(e){let{variant:t="primary",...n}=e,i=f({variant:t});return(0,r.jsx)(r.Fragment,{children:"onClick"in n?(0,r.jsx)("button",{...n,type:"button",className:i}):"href"in n?(0,r.jsx)(s.default,{...n,className:i}):(0,r.jsx)(h,{...n,className:i})})}},4464:function(e,t,n){"use strict";n.d(t,{Z:function(){return r.default}});var r=n(2086)},2206:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return s}});var r=n(7437),i=n(1968);function s(e){let{children:t,footer:n}=e;return(0,r.jsx)(i.E.div,{initial:{scale:.75},whileInView:{scale:1},className:"bg-bg-closer dark:bg-bg-closer-dark rounded-lg shadow-sm transition-colors",children:(0,r.jsxs)("div",{className:"flex h-full w-full flex-col justify-between rounded-lg p-4",children:[(0,r.jsx)("div",{className:"flex justify-center",children:t}),n&&(0,r.jsx)("div",{className:"mt-4 flex justify-center",children:n})]})})}},3125:function(e,t,n){"use strict";n.d(t,{Z:function(){return r.default}});var r=n(2206)},7536:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(7437);function i(e){let{children:t}=e;return(0,r.jsx)("strong",{className:"text-primary [filter:drop-shadow(0_0_2em_theme(colors.primary))]",children:t})}},9559:function(e,t,n){"use strict";let r,i;n.r(t),n.d(t,{default:function(){return ei}});var s=n(7437),l=n(843);/**
 * @license lucide-react v0.365.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let o=(0,l.Z)("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]),a=(0,l.Z)("MessageCircle",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]]);var c=n(3299),d=n(2435),u=n(2265),f=n(9908);let h=new WeakMap;function m({target:e,contentRect:t,borderBoxSize:n}){var r;null===(r=h.get(e))||void 0===r||r.forEach(r=>{r({target:e,contentSize:t,get size(){return function(e,t){if(t){let{inlineSize:e,blockSize:n}=t[0];return{width:e,height:n}}return e instanceof SVGElement&&"getBBox"in e?e.getBBox():{width:e.offsetWidth,height:e.offsetHeight}}(e,n)}})})}function x(e){e.forEach(m)}let g=new Set;var v=n(9049),p=n(2181);let w=()=>({current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0}),y=()=>({time:0,x:w(),y:w()}),j={x:{length:"Width",position:"Left"},y:{length:"Height",position:"Top"}};function b(e,t,n,r){let i=n[t],{length:s,position:l}=j[t],o=i.current,a=n.time;i.current=e[`scroll${l}`],i.scrollLength=e[`scroll${s}`]-e[`client${s}`],i.offset.length=0,i.offset[0]=0,i.offset[1]=i.scrollLength,i.progress=(0,v.Y)(0,i.scrollLength,i.current);let c=r-a;i.velocity=c>50?0:(0,p.R)(i.current-o,c)}let N={All:[[0,0],[1,1]]},k={start:0,center:.5,end:1};function E(e,t,n=0){let r=0;if(e in k&&(e=k[e]),"string"==typeof e){let t=parseFloat(e);e.endsWith("px")?r=t:e.endsWith("%")?e=t/100:e.endsWith("vw")?r=t/100*document.documentElement.clientWidth:e.endsWith("vh")?r=t/100*document.documentElement.clientHeight:e=t}return"number"==typeof e&&(r=t*e),n+r}let _=[0,0];var L=n(9780),Z=n(4594);let W={x:0,y:0};var M=n(4205);let S=new WeakMap,z=new WeakMap,B=new WeakMap,A=e=>e===document.documentElement?window:e;var P=n(5526);function H(e,t){(0,f.K)(!!(!t||t.current),`You have defined a ${e} options but the provided ref is not yet hydrated, probably because it's defined higher up the tree. Try calling useScroll() in the same component as the ref, or setting its \`layoutEffect: false\` option.`)}let O=()=>({scrollX:(0,c.BX)(0),scrollY:(0,c.BX)(0),scrollXProgress:(0,c.BX)(0),scrollYProgress:(0,c.BX)(0)}),C=e=>e&&"object"==typeof e&&e.mix,R=e=>C(e)?e.mix:void 0;var F=n(3449);function V(e,t){let n=function(e){let t=(0,d.h)(()=>(0,c.BX)(e)),{isStatic:n}=(0,u.useContext)(F._);if(n){let[,n]=(0,u.useState)(e);(0,u.useEffect)(()=>t.on("change",n),[])}return t}(t()),r=()=>n.set(t());return r(),(0,P.L)(()=>{let t=()=>M.Wi.preRender(r,!1,!0),n=e.map(e=>e.on("change",t));return()=>{n.forEach(e=>e()),(0,M.Pn)(r)}}),n}function I(e,t,n,r){if("function"==typeof e)return function(e){c.S1.current=[],e();let t=V(c.S1.current,e);return c.S1.current=void 0,t}(e);let i="function"==typeof t?t:function(...e){let t=!Array.isArray(e[0]),n=t?0:-1,r=e[0+n],i=e[1+n],s=e[2+n],l=e[3+n],o=(0,L.s)(i,s,{mixer:R(s[0]),...l});return t?o(r):o}(t,n,r);return Array.isArray(e)?X(e,i):X([e],([e])=>i(e))}function X(e,t){let n=(0,d.h)(()=>[]);return V(e,()=>{n.length=0;let r=e.length;for(let t=0;t<r;t++)n[t]=e[t].get();return t(n)})}var Y=n(1968),q=n(4464);/**
 * @license lucide-react v0.365.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let T=(0,l.Z)("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]),D=(0,l.Z)("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]),G=(0,l.Z)("AtSign",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8",key:"7n84p3"}]]);function K(){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:"grow",children:(0,s.jsxs)(q.Z,{href:"https://www.linkedin.com/in/luizffgv/",target:"_blank",children:[(0,s.jsx)(T,{}),"LinkedIn"]})}),(0,s.jsxs)("address",{className:"contents not-italic *:grow",children:[(0,s.jsx)("div",{children:(0,s.jsxs)(q.Z,{href:"tel:+5533991262949",target:"_blank",children:[(0,s.jsx)(D,{}),"+55 (33) 99126-2949"]})}),(0,s.jsx)("div",{children:(0,s.jsxs)(q.Z,{href:"mailto:hireme@luizf.dev",target:"_blank",children:[(0,s.jsx)(G,{}),"hireme@luizf.dev"]})})]})]})}var $=n(7536);/**
 * @license lucide-react v0.365.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let U=(0,l.Z)("ArrowDown",[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]]);function J(){return(0,s.jsxs)(q.Z,{onClick:()=>{document.documentElement.scrollBy(0,2*innerHeight)},"aria-label":"Avan\xe7ar",children:[(0,s.jsx)(U,{}),"Veja se sou mais do mesmo"]})}var Q=n(8792),ee=n(1724);function et(){return(0,s.jsx)("div",{className:"jump-in h-48 w-48 overflow-hidden rounded-full",children:(0,s.jsx)(ee.Z,{src:"/android-chrome-192x192.png",alt:"Logo do site"})})}var en=n(8214),er=n.n(en);function ei(){let e=(0,u.useRef)(null),{scrollYProgress:t}=function({container:e,target:t,layoutEffect:n=!0,...s}={}){let l=(0,d.h)(O);return(n?P.L:u.useEffect)(()=>(H("target",t),H("container",e),function(e,{container:t=document.documentElement,...n}={}){let s=B.get(t);s||(s=new Set,B.set(t,s));let l=function(e,t,n,r={}){return{measure:()=>(function(e,t=e,n){if(n.x.targetOffset=0,n.y.targetOffset=0,t!==e){let r=t;for(;r&&r!==e;)n.x.targetOffset+=r.offsetLeft,n.y.targetOffset+=r.offsetTop,r=r.offsetParent}n.x.targetLength=t===e?t.scrollWidth:t.clientWidth,n.y.targetLength=t===e?t.scrollHeight:t.clientHeight,n.x.containerLength=e.clientWidth,n.y.containerLength=e.clientHeight})(e,r.target,n),update:t=>{b(e,"x",n,t),b(e,"y",n,t),n.time=t,(r.offset||r.target)&&function(e,t,n){let{offset:r=N.All}=n,{target:i=e,axis:s="y"}=n,l="y"===s?"height":"width",o=i!==e?function(e,t){let n={x:0,y:0},r=e;for(;r&&r!==t;)if(r instanceof HTMLElement)n.x+=r.offsetLeft,n.y+=r.offsetTop,r=r.offsetParent;else if("svg"===r.tagName){let e=r.getBoundingClientRect(),t=(r=r.parentElement).getBoundingClientRect();n.x+=e.left-t.left,n.y+=e.top-t.top}else if(r instanceof SVGGraphicsElement){let{x:e,y:t}=r.getBBox();n.x+=e,n.y+=t;let i=null,s=r.parentNode;for(;!i;)"svg"===s.tagName&&(i=s),s=r.parentNode;r=i}else break;return n}(i,e):W,a=i===e?{width:e.scrollWidth,height:e.scrollHeight}:"getBBox"in i&&"svg"!==i.tagName?i.getBBox():{width:i.clientWidth,height:i.clientHeight},c={width:e.clientWidth,height:e.clientHeight};t[s].offset.length=0;let d=!t[s].interpolate,u=r.length;for(let e=0;e<u;e++){let n=function(e,t,n,r){let i=Array.isArray(e)?e:_,s=0;return"number"==typeof e?i=[e,e]:"string"==typeof e&&(i=(e=e.trim()).includes(" ")?e.split(" "):[e,k[e]?e:"0"]),E(i[0],n,r)-E(i[1],t)}(r[e],c[l],a[l],o[s]);d||n===t[s].interpolatorOffsets[e]||(d=!0),t[s].offset[e]=n}d&&(t[s].interpolate=(0,L.s)(t[s].offset,(0,Z.Y)(r)),t[s].interpolatorOffsets=[...t[s].offset]),t[s].progress=t[s].interpolate(t[s].current)}(e,n,r)},notify:()=>t(n)}}(t,e,y(),n);if(s.add(l),!S.has(t)){let e=()=>{for(let e of s)e.measure()},n=()=>{for(let e of s)e.update(M.frameData.timestamp)},l=()=>{for(let e of s)e.notify()},o=()=>{M.Wi.read(e,!1,!0),M.Wi.read(n,!1,!0),M.Wi.update(l,!1,!0)};S.set(t,o);let a=A(t);window.addEventListener("resize",o,{passive:!0}),t!==document.documentElement&&z.set(t,"function"==typeof t?(g.add(t),i||(i=()=>{let e={width:window.innerWidth,height:window.innerHeight},t={target:window,size:e,contentSize:e};g.forEach(e=>e(t))},window.addEventListener("resize",i)),()=>{g.delete(t),!g.size&&i&&(i=void 0)}):function(e,t){r||"undefined"==typeof ResizeObserver||(r=new ResizeObserver(x));let n=function(e,t,n){var r;if("string"==typeof e){let i=document;t&&((0,f.k)(!!t.current,"Scope provided, but no element detected."),i=t.current),n?(null!==(r=n[e])&&void 0!==r||(n[e]=i.querySelectorAll(e)),e=n[e]):e=i.querySelectorAll(e)}else e instanceof Element&&(e=[e]);return Array.from(e||[])}(e);return n.forEach(e=>{let n=h.get(e);n||(n=new Set,h.set(e,n)),n.add(t),null==r||r.observe(e)}),()=>{n.forEach(e=>{let n=h.get(e);null==n||n.delete(t),(null==n?void 0:n.size)||null==r||r.unobserve(e)})}}(t,o)),a.addEventListener("scroll",o,{passive:!0})}let o=S.get(t);return M.Wi.read(o,!1,!0),()=>{var e;(0,M.Pn)(o);let n=B.get(t);if(!n||(n.delete(l),n.size))return;let r=S.get(t);S.delete(t),r&&(A(t).removeEventListener("scroll",r),null===(e=z.get(t))||void 0===e||e(),window.removeEventListener("resize",r))}}(({x:e,y:t})=>{l.scrollX.set(e.current),l.scrollXProgress.set(e.progress),l.scrollY.set(t.current),l.scrollYProgress.set(t.progress)},{...s,container:(null==e?void 0:e.current)||void 0,target:(null==t?void 0:t.current)||void 0})),[e,t,JSON.stringify(s.offset)]),l}({target:e}),n=I(t,[0,1],[1,.75]),l=I(t,[0,1],[1,0]);return(0,s.jsx)("div",{ref:e,className:"relative h-[200svh]",children:(0,s.jsxs)(Y.E.div,{style:{scale:n,opacity:l},className:"sticky top-0 flex min-h-[100svh] flex-col items-center justify-center px-8 pb-16 pt-24",children:[(0,s.jsxs)("div",{className:"relative flex flex-col items-center gap-8",children:[(0,s.jsxs)("div",{className:"flex flex-col items-center gap-4",children:[(0,s.jsx)(et,{}),(0,s.jsxs)("p",{className:"text-center text-2xl",children:["Ol\xe1, meu nome \xe9"," ",(0,s.jsx)($.Z,{children:"Luiz Fernando F. G. Valle"})]}),(0,s.jsxs)("p",{className:"text-center text-2xl",children:["Eu sou um desenvolvedor front-end com foco em"," ",(0,s.jsx)(Q.default,{href:"/projetos?tags=React",children:(0,s.jsx)($.Z,{children:"React"})})]})]}),(0,s.jsxs)("div",{className:"flex flex-row flex-wrap justify-center gap-4",children:[(0,s.jsxs)(q.Z,{href:"https://drive.proton.me/urls/Q84XZHZPB0#UaNx9svTyKL4",target:"_blank",children:[(0,s.jsx)(o,{}),"Currículo"]}),(0,s.jsxs)(q.Z,{modalContent:(0,s.jsxs)("div",{className:"flex flex-col gap-4",children:[(0,s.jsx)("span",{className:"text-center",children:"Me contate aqui"}),(0,s.jsx)(K,{})]}),children:[(0,s.jsx)(a,{}),"Vamos conversar"]})]})]}),(0,s.jsx)("div",{className:"".concat(er()["down-arrow"]," absolute bottom-2 left-1/2 translate-x-[-50%]"),children:(0,s.jsx)("div",{className:"animate-bounce [animation-duration:2s]",children:(0,s.jsx)(J,{})})})]})})}},5275:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return h}});var r=n(7437),i=n(2265),s=n(7536),l=n(2092),o=n.n(l);function a(e){return(0,r.jsx)("div",{className:"max-w-prose ".concat(o()["text-body"]),children:e.children})}var c=n(7773),d=n(1968),u=n(5475),f=n.n(u);function h(e){let t=function(e,t){var n;let{getInitialValueInEffect:r}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{getInitialValueInEffect:!0},[s,l]=(0,i.useState)(r?void 0:"boolean"==typeof n?n:!!("undefined"!=typeof window&&"matchMedia"in window)&&window.matchMedia(e).matches),o=(0,i.useRef)();return(0,i.useEffect)(()=>{if("matchMedia"in window)return o.current=window.matchMedia(e),l(o.current.matches),function(e,t){try{return e.addEventListener("change",t),()=>e.removeEventListener("change",t)}catch(n){return e.addListener(t),()=>e.removeListener(t)}}(o.current,e=>l(e.matches))},[e]),s}("screen and (min-width: 768px)"),{left:n,rotate:l}=(0,i.useMemo)(()=>{let n=f()(e.title)%5*20;return{left:t?"".concat(n,"%"):"50%",rotate:"".concat(-20+n/100*40,"deg")}},[t,e.title]);return(0,r.jsx)(c.Z,{level:2,title:e.title,children:(0,r.jsxs)("div",{className:"relative",children:[(0,r.jsx)("div",{style:{left:n},className:"absolute -top-8 h-24 w-24 -translate-x-1/2 opacity-15 md:h-48 md:w-48",children:(0,r.jsx)(d.E.div,{initial:{scale:.75},whileInView:{scale:1,rotate:l,transition:{duration:.25}},children:(0,r.jsx)(s.Z,{children:(0,r.jsx)("div",{className:"*:h-24 *:w-24 *:md:h-48 *:md:w-48",children:e.icon})})})}),(0,r.jsx)(d.E.div,{initial:{opacity:0,translateY:"-2em"},whileInView:{opacity:1,translateY:"0",transition:{delay:.25}},children:(0,r.jsx)(a,{children:e.children})})]})})}},1724:function(e,t,n){"use strict";n.d(t,{Z:function(){return r.default}});var r=n(529)},529:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return s}});var r=n(7437),i=n(2265);function s(e){let{src:t,alt:n}=e,[s,l]=(0,i.useState)(!1),o=(0,i.useRef)(null),a=(0,i.useRef)(null);return(0,i.useEffect)(()=>{a.current=new Image,a.current.addEventListener("load",()=>{l(!0)})},[]),(0,i.useEffect)(()=>{if(l(!1),"IntersectionObserver"in window){let e=new IntersectionObserver((e,n)=>{if(e[0].isIntersecting){if(null==a.current){console.error("image.current is null");return}a.current.src=t,n.disconnect()}});return null==o.current?console.error("ref.current is null"):e.observe(o.current),()=>{e.disconnect()}}if(null==a.current){console.error("image.current is null");return}a.current.src=t},[t]),(0,r.jsxs)("div",{className:"relative h-full w-full",ref:o,children:[(0,r.jsx)("div",{className:"absolute inset-0 flex items-center justify-center rounded-3xl bg-bg-close has-[~_img]:hidden dark:bg-bg-close-dark",children:(0,r.jsx)("svg",{viewBox:"0 0 1 1",xmlns:"http://www.w3.org/2000/svg",className:"h-8 w-8 animate-spin stroke-primary",children:(0,r.jsx)("circle",{cx:"0.5",cy:"0.5",fill:"none",r:"0.25",strokeWidth:"0.1",strokeDasharray:"1",strokeLinecap:"round"})})}),s?(0,r.jsx)("img",{src:t,alt:n,className:"h-full w-full"}):(0,r.jsx)(r.Fragment,{})]})}},7773:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(7437);function i(e){let{level:t,children:n}=e;return 1===t?(0,r.jsx)("h1",{className:"mb-8 text-center text-3xl",children:n}):2===t?(0,r.jsx)("h2",{className:"mb-6 text-center text-2xl",children:n}):3===t?(0,r.jsx)("h3",{className:"mb-4 text-center text-xl",children:n}):4===t?(0,r.jsx)("h4",{className:"mb-2 text-center text-lg",children:n}):5===t?(0,r.jsx)("h5",{className:"mb-2 text-center text-lg",children:n}):(0,r.jsx)("h6",{className:"mb-2 text-center text-lg",children:n})}function s(e){let{title:t,children:n,level:s}=e;return(0,r.jsxs)("section",{children:[(0,r.jsx)(i,{level:s,children:t}),n]})}},8214:function(e){e.exports={"down-arrow":"hero_down-arrow__zKaOc","hide-arrow":"hero_hide-arrow__78058"}},3975:function(e){e.exports={"modal-container":"modal_modal-container__i_YSx",dismiss:"modal_dismiss__Pn0UK",modal:"modal_modal__L3VW0"}},2092:function(e){e.exports={"text-body":"text-body_text-body__76jiF"}}},function(e){e.O(0,[113,971,69,744],function(){return e(e.s=7400)}),_N_E=e.O()}]);