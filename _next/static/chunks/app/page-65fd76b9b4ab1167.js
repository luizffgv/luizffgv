(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{6751:function(e,t,n){Promise.resolve().then(n.t.bind(n,5250,23)),Promise.resolve().then(n.bind(n,2086)),Promise.resolve().then(n.bind(n,7868)),Promise.resolve().then(n.bind(n,1108)),Promise.resolve().then(n.t.bind(n,8214,23)),Promise.resolve().then(n.t.bind(n,3929,23)),Promise.resolve().then(n.bind(n,529)),Promise.resolve().then(n.bind(n,2585)),Promise.resolve().then(n.t.bind(n,6759,23)),Promise.resolve().then(n.t.bind(n,2092,23))},2086:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return f}});var i=n(7437),r=n(2265),s=n(8792),a=n(4464),l=n(5889),o=n(2235),c=n(3975),u=n.n(c);function h(e){let{children:t,onDismiss:n}=e,s=(0,r.useRef)(null);return(0,r.useEffect)(()=>{if(null==s.current){console.error("dialogRef.current is null.");return}s.current.showModal()},[]),(0,i.jsxs)("dialog",{ref:s,className:"".concat(u()["modal-container"]," fixed flex h-[100dvh] max-h-none w-[100dvw] max-w-none flex-col items-center gap-4 bg-transparent p-4 text-inherit [justify-content:safe_center]"),onClose:()=>null==n?void 0:n(),children:[n?(0,i.jsx)("div",{className:u().dismiss,children:(0,i.jsx)(a.Z,{onClick:n,"aria-label":"Fechar modal",children:(0,i.jsx)(o.Z,{})})}):(0,i.jsx)(i.Fragment,{}),(0,i.jsx)("div",{className:u().modal,children:(0,i.jsx)(l.Z,{children:t})})]})}function d(e){let[t,n]=(0,r.useState)(!1);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("button",{className:"flex flex-row items-center justify-center gap-2 rounded-3xl bg-primary px-4 py-2 font-bold text-fg-on-primary transition-all hover:shadow-[0_0_50px_theme(colors.primary_/_25%)] hover:brightness-110 hover:[text-shadow:_0_0_15px_currentcolor]",onClick:()=>{n(!0)},"aria-label":e["aria-label"],children:e.children}),t?(0,i.jsx)(h,{onDismiss:()=>{n(!1)},children:e.modalContent}):(0,i.jsx)(i.Fragment,{})]})}function f(e){let t="flex flex-row items-center gap-2 rounded-3xl bg-primary px-4 py-2 font-bold text-fg-on-primary justify-center transition-all hover:brightness-110 hover:shadow-[0_0_50px_theme(colors.primary_/_25%)] hover:[text-shadow:_0_0_15px_currentcolor]";return(0,i.jsx)(i.Fragment,{children:"onClick"in e?(0,i.jsx)("button",{...e,type:"button",className:t}):"href"in e?(0,i.jsx)(s.default,{...e,className:t}):(0,i.jsx)(d,{...e,className:t})})}},4464:function(e,t,n){"use strict";n.d(t,{Z:function(){return i.default}});var i=n(2086)},5889:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var i=n(7437);function r(e){let{children:t,footer:n,level:r="close"}=e;return(0,i.jsx)("div",{className:"rounded-3xl shadow-sm transition-colors ".concat("close"===r?"bg-bg-close dark:bg-bg-close-dark":"bg-bg-closer dark:bg-bg-closer-dark"),children:(0,i.jsxs)("div",{className:"flex h-full w-full flex-col justify-between rounded-3xl p-4 dark:[background:radial-gradient(ellipse_at_center,_theme(colors.primary/10%),_transparent)]",children:[(0,i.jsx)("div",{className:"flex justify-center",children:t}),n&&(0,i.jsx)("div",{className:"mt-4 flex justify-center",children:n})]})})}},7868:function(e,t,n){"use strict";function i(e,t,n){if(!t.has(e))throw TypeError("attempted to "+n+" private field on non-instance");return t.get(e)}function r(e,t){var n=i(e,t,"get");return n.get?n.get.call(e):n.value}function s(e,t){if(t.has(e))throw TypeError("Cannot initialize the same private elements twice on an object")}function a(e,t,n){s(e,t),t.set(e,n)}function l(e,t,n){var r=i(e,t,"set");return!function(e,t,n){if(t.set)t.set.call(e,n);else{if(!t.writable)throw TypeError("attempted to set read only private field");t.value=n}}(e,r,n),n}function o(e,t,n){if(!t.has(e))throw TypeError("attempted to get private field on non-instance");return n}n.r(t),n.d(t,{Bubbles:function(){return N},CircleParticle:function(){return v},SquareParticle:function(){return _},default:function(){return E}});var c=n(7437),u=n(2265),h=n(5191),d=n.n(h);class f{update(e){this.x+=this.velX*e,this.y+=this.velY*e}constructor(e,t,n=0,i=0){this.x=e,this.y=t,this.velX=n,this.velY=i}}class m extends f{update(e){super.update(e),this.rotZ+=this.velAngZ*e}constructor(e,t,n=0,i=0,r=0,s=0){super(e,t,i,r),this.velAngZ=0,this.rotZ=n,this.velAngZ=s}}class v extends f{isMaybeInRect(e,t,n,i){return!(this.y-this.radius>t+i||this.y+this.radius<t||this.x+this.radius<e||this.x-this.radius>e+n)}draw(e){e.save(),e.beginPath(),e.arc(this.x,this.y,this.radius,0,2*Math.PI),e.lineWidth=Math.max(1,this.radius/10),this.solid?e.fill():e.stroke(),e.restore()}constructor(e,t,n,i){super(e,t),this.radius=n,this.solid=i}}class _ extends m{isMaybeInRect(e,t,n,i){let r=1.41421356237*this.size;return!(this.y-r>t+i||this.y+r<t||this.x+r<e||this.x-r>e+n)}draw(e){e.save(),e.translate(this.x,this.y),e.rotate(this.rotZ),e.fillRect(-this.size/2,-this.size/2,this.size,this.size),e.restore()}constructor(e,t,n,i=0){super(e,t,i),this.size=n}}var x=new WeakMap,p=new WeakMap,w=new WeakMap,g=new WeakMap,y=new WeakMap,b=new WeakMap,j=new WeakMap,k=new WeakMap,M=new WeakSet;class N{start(){l(this,j,new IntersectionObserver(e=>{l(this,k,!e[0].isIntersecting)})),r(this,j).observe(r(this,x)),l(this,b,requestAnimationFrame(o(this,M,Z).bind(this)))}stop(){var e;null===(e=r(this,j))||void 0===e||e.disconnect(),null!=r(this,b)&&cancelAnimationFrame(r(this,b)),l(this,b,null),l(this,g,[])}constructor(e,t){s(this,M),M.add(this),a(this,x,{writable:!0,value:void 0}),a(this,p,{writable:!0,value:void 0}),a(this,w,{writable:!0,value:void 0}),a(this,g,{writable:!0,value:void 0}),a(this,y,{writable:!0,value:void 0}),a(this,b,{writable:!0,value:void 0}),a(this,j,{writable:!0,value:void 0}),a(this,k,{writable:!0,value:void 0}),l(this,g,[]),l(this,b,null),l(this,k,!1),l(this,x,e),l(this,y,"string"==typeof t?()=>t:t);let n=r(this,x).getContext("2d");if(null==n)throw TypeError("Couldn't get 2D canvas context.");l(this,p,n)}}function Z(e){if(l(this,b,requestAnimationFrame(o(this,M,Z).bind(this))),r(this,k))return;let t=r(this,x).clientWidth,n=r(this,x).clientHeight;r(this,x).width=t,r(this,x).height=n,null==r(this,w)&&l(this,w,e);let i=(e-r(this,w))/1e3,s=[];for(let e of(r(this,p).fillStyle=r(this,y).call(this),r(this,p).strokeStyle=r(this,p).fillStyle,r(this,p).shadowColor=r(this,p).fillStyle,r(this,p).shadowBlur=25,r(this,g)))e.isMaybeInRect(-50,-50,t+100,n+100)&&(e.velX+=(Math.random()-.5)*2*i*250,e.velY+=(Math.random()-.5)*2*i*250,e.update(i),e.draw(r(this,p)),s.push(e));let a=Math.min(100,t/10);for(;s.length<15;){let e;let n=a*(.9*Math.random()+.1),i=.5>Math.random(),l=Math.random()*t,o=i?-n-25:r(this,x).clientHeight+n+25,c=10*Math.random()*(i?1:-1);.5>Math.random()?e=new v(l,o,n,n>a/3):(e=new _(l,o,n)).velAngZ=(Math.random()-.5)*2,e.velY=c,s.push(e)}l(this,g,s),l(this,w,e)}function E(){let e=(0,u.useId)(),t=(0,u.useRef)(null);return(0,u.useEffect)(()=>{if(null==t.current){console.error("canvasRef is null");return}let e=new N(t.current,()=>null==t.current?"transparent":getComputedStyle(t.current).color);return e.start(),()=>{e.stop()}},[]),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("svg",{className:"hidden",xmlns:"http://www.w3.org/2000/svg",children:(0,c.jsx)("defs",{children:(0,c.jsx)("filter",{id:e,children:(0,c.jsx)("feColorMatrix",{in:"goo",type:"matrix",values:"1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 50 -10"})})})}),(0,c.jsx)("canvas",{className:"".concat(d().canvas," absolute left-0 top-0 h-full w-full"),ref:t,style:{"--filter-url":"url(#".concat(e,")")}})]})}},1108:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return a}});var i=n(7437);/**
 * @license lucide-react v0.365.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let r=(0,n(843).Z)("ArrowDown",[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]]);var s=n(4464);function a(){return(0,i.jsxs)(s.Z,{onClick:()=>{document.documentElement.scrollBy(0,innerHeight)},"aria-label":"Avan\xe7ar",children:[(0,i.jsx)(r,{}),"Veja se sou mais do mesmo"]})}},529:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return s}});var i=n(7437),r=n(2265);function s(e){let{src:t,alt:n}=e,[s,a]=(0,r.useState)(!1),l=(0,r.useRef)(null),o=(0,r.useRef)(null);return(0,r.useEffect)(()=>{o.current=new Image,o.current.addEventListener("load",()=>{a(!0)})},[]),(0,r.useEffect)(()=>{if(a(!1),"IntersectionObserver"in window){let e=new IntersectionObserver((e,n)=>{if(e[0].isIntersecting){if(null==o.current){console.error("image.current is null");return}o.current.src=t,n.disconnect()}});return null==l.current?console.error("ref.current is null"):e.observe(l.current),()=>{e.disconnect()}}if(null==o.current){console.error("image.current is null");return}o.current.src=t},[t]),(0,i.jsxs)("div",{className:"relative h-full w-full",ref:l,children:[(0,i.jsx)("div",{className:"absolute inset-0 flex items-center justify-center rounded-3xl bg-bg-close has-[~_img]:hidden dark:bg-bg-close-dark",children:(0,i.jsx)("svg",{viewBox:"0 0 1 1",xmlns:"http://www.w3.org/2000/svg",className:"h-8 w-8 animate-spin stroke-primary",children:(0,i.jsx)("circle",{cx:"0.5",cy:"0.5",fill:"none",r:"0.25",strokeWidth:"0.1",strokeDasharray:"1",strokeLinecap:"round"})})}),s?(0,i.jsx)("img",{src:t,alt:n,className:"h-full w-full"}):(0,i.jsx)(i.Fragment,{})]})}},2585:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return s}});var i=n(7437),r=n(2265);function s(e){let{children:t}=e,n=(0,r.useRef)(null);return(0,r.useEffect)(()=>{let e=n.current;if(null==e){console.error("ref.current is null");return}let t=!0,i=new IntersectionObserver(e=>{let[n]=e;t=n.isIntersecting});i.observe(e);let r=n=>{if(!t)return;let{top:i,left:r,width:s,height:a}=e.getBoundingClientRect(),l={x:r+s/2,y:i+a/2},o={x:n.clientX-l.x,y:n.clientY-l.y},c={x:-o.y/innerHeight*45,y:o.x/innerWidth*45,z:o.x/innerWidth*15};e.style.transform="rotateX(".concat(c.x,"deg) rotateY(").concat(c.y,"deg) rotateZ(").concat(c.z,"deg)")};return addEventListener("mousemove",r),()=>{removeEventListener("mousemove",r),e.style.transform="none",i.disconnect()}}),(0,i.jsx)("div",{className:"[perspective:100vmax]",children:(0,i.jsx)("div",{ref:n,className:"transition-all ease-linear [transform-style:preserve-3d]",children:t})})}},3929:function(e){e.exports={container:"autism_container__aJfWW",infinity:"autism_infinity__UrZin","infinity-blink":"autism_infinity-blink__6HcFZ",infinity1:"autism_infinity1__TTNua",infinity2:"autism_infinity2__Qk4AJ",infinity3:"autism_infinity3__9V0Ej",infinity4:"autism_infinity4__qQGIa",infinity5:"autism_infinity5__SLE9t","infinity-shadow-blink":"autism_infinity-shadow-blink__iZDX1",sparkles:"autism_sparkles__j5D9d","sparkles-rotate":"autism_sparkles-rotate__D2wVM","sparkles-scale":"autism_sparkles-scale__2ZY5s",sparkle1:"autism_sparkle1__xz40A",sparkle2:"autism_sparkle2__VJmxW",sparkle:"autism_sparkle__PGjLL"}},5191:function(e){e.exports={canvas:"goo_canvas__NZ_9X","fade-in":"goo_fade-in__fwXA2"}},8214:function(e){e.exports={"down-arrow":"hero_down-arrow__zKaOc","hide-arrow":"hero_hide-arrow__78058"}},3975:function(e){e.exports={"modal-container":"modal_modal-container__i_YSx",dismiss:"modal_dismiss__Pn0UK",modal:"modal_modal__L3VW0"}},6759:function(e){e.exports={gradient:"rotating-colors_gradient__7jn7w",rotate:"rotating-colors_rotate__oCMYg"}},2092:function(e){e.exports={"text-body":"text-body_text-body__76jiF"}}},function(e){e.O(0,[512,971,69,744],function(){return e(e.s=6751)}),_N_E=e.O()}]);