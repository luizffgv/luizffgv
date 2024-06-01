(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{3238:function(e,t,i){Promise.resolve().then(i.t.bind(i,5250,23)),Promise.resolve().then(i.t.bind(i,4688,23)),Promise.resolve().then(i.bind(i,2529)),Promise.resolve().then(i.bind(i,1293)),Promise.resolve().then(i.bind(i,8393)),Promise.resolve().then(i.t.bind(i,1536,23)),Promise.resolve().then(i.bind(i,1215)),Promise.resolve().then(i.bind(i,2073))},2529:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return d}});var n=i(7437),s=i(8792),r=i(2265),l=i(8656),a=i.n(l),o=i(6265),c=i(2235);function u(e){let{children:t,onDismiss:i}=e,s=(0,r.useRef)(null);return(0,r.useEffect)(()=>{if(null==s.current){console.error("dialogRef.current is null.");return}s.current.showModal()},[]),(0,n.jsxs)("dialog",{ref:s,className:"".concat(a()["modal-container"]," fixed flex h-[100dvh] max-h-none w-[100dvw] max-w-none flex-col items-center gap-4 bg-transparent p-4 text-inherit [justify-content:safe_center]"),onClose:()=>null==i?void 0:i(),children:[i?(0,n.jsx)("div",{className:a().dismiss,children:(0,n.jsx)(d,{onClick:i,"aria-label":"Fechar modal",children:(0,n.jsx)(c.Z,{})})}):(0,n.jsx)(n.Fragment,{}),(0,n.jsx)("div",{className:a().modal,children:(0,n.jsx)(o.Z,{children:t})})]})}function h(e){let[t,i]=(0,r.useState)(!1);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("button",{className:"flex flex-row items-center justify-center gap-2 rounded-3xl bg-primary px-4 py-2 font-bold text-fg-on-primary transition-all hover:shadow-[0_0_50px_theme(colors.primary_/_25%)] hover:brightness-110 hover:[text-shadow:_0_0_15px_currentcolor]",onClick:()=>i(!0),"aria-label":e["aria-label"],children:e.children}),t?(0,n.jsx)(u,{onDismiss:()=>i(!1),children:e.modalContent}):(0,n.jsx)(n.Fragment,{})]})}function d(e){let t="flex flex-row items-center gap-2 rounded-3xl bg-primary px-4 py-2 font-bold text-fg-on-primary justify-center transition-all hover:brightness-110 hover:shadow-[0_0_50px_theme(colors.primary_/_25%)] hover:[text-shadow:_0_0_15px_currentcolor]";return(0,n.jsx)(n.Fragment,{children:"onClick"in e?(0,n.jsx)("button",{...e,type:"button",className:t}):"href"in e?(0,n.jsx)(s.default,{...e,className:t}):(0,n.jsx)(h,{...e,className:t})})}},6265:function(e,t,i){"use strict";i.d(t,{Z:function(){return s}});var n=i(7437);function s(e){let{children:t}=e;return(0,n.jsx)("div",{className:"rounded-3xl bg-bg-close shadow-sm transition-colors dark:bg-bg-close-dark",children:(0,n.jsx)("div",{className:"h-full w-full rounded-3xl p-4 dark:[background:radial-gradient(ellipse_at_center,_theme(colors.primary/10%),_transparent)]",children:t})})}},1293:function(e,t,i){"use strict";function n(e,t,i){if(!t.has(e))throw TypeError("attempted to "+i+" private field on non-instance");return t.get(e)}function s(e,t){var i=n(e,t,"get");return i.get?i.get.call(e):i.value}function r(e,t){if(t.has(e))throw TypeError("Cannot initialize the same private elements twice on an object")}function l(e,t,i){r(e,t),t.set(e,i)}function a(e,t,i){var s=n(e,t,"set");return!function(e,t,i){if(t.set)t.set.call(e,i);else{if(!t.writable)throw TypeError("attempted to set read only private field");t.value=i}}(e,s,i),i}function o(e,t,i){if(!t.has(e))throw TypeError("attempted to get private field on non-instance");return i}i.r(t),i.d(t,{Bubbles:function(){return M},CircleParticle:function(){return _},SquareParticle:function(){return v},default:function(){return E}});var c=i(7437),u=i(2265),h=i(1191),d=i.n(h);class f{update(e){this.x+=this.velX*e,this.y+=this.velY*e}constructor(e,t,i=0,n=0){this.x=e,this.y=t,this.velX=i,this.velY=n}}class m extends f{update(e){super.update(e),this.rotZ+=this.velAngZ*e}constructor(e,t,i=0,n=0,s=0,r=0){super(e,t,n,s),this.velAngZ=0,this.rotZ=i,this.velAngZ=r}}class _ extends f{isMaybeInRect(e,t,i,n){return!(this.y-this.radius>t+n||this.y+this.radius<t||this.x+this.radius<e||this.x-this.radius>e+i)}draw(e){e.save(),e.beginPath(),e.arc(this.x,this.y,this.radius,0,2*Math.PI),e.lineWidth=Math.max(1,this.radius/10),this.solid?e.fill():e.stroke(),e.restore()}constructor(e,t,i,n){super(e,t),this.radius=i,this.solid=n}}class v extends m{isMaybeInRect(e,t,i,n){let s=1.41421356237*this.size;return!(this.y-s>t+n||this.y+s<t||this.x+s<e||this.x-s>e+i)}draw(e){e.save(),e.translate(this.x,this.y),e.rotate(this.rotZ),e.fillRect(-this.size/2,-this.size/2,this.size,this.size),e.restore()}constructor(e,t,i,n=0){super(e,t,n),this.size=i}}var x=new WeakMap,p=new WeakMap,g=new WeakMap,w=new WeakMap,b=new WeakMap,y=new WeakMap,j=new WeakMap,k=new WeakMap,N=new WeakSet;class M{start(){a(this,j,new IntersectionObserver(e=>{a(this,k,!e[0].isIntersecting)})),s(this,j).observe(s(this,x)),a(this,y,requestAnimationFrame(o(this,N,C).bind(this)))}stop(){var e;null===(e=s(this,j))||void 0===e||e.disconnect(),null!=s(this,y)&&cancelAnimationFrame(s(this,y)),a(this,y,null),a(this,w,[])}constructor(e,t){r(this,N),N.add(this),l(this,x,{writable:!0,value:void 0}),l(this,p,{writable:!0,value:void 0}),l(this,g,{writable:!0,value:void 0}),l(this,w,{writable:!0,value:void 0}),l(this,b,{writable:!0,value:void 0}),l(this,y,{writable:!0,value:void 0}),l(this,j,{writable:!0,value:void 0}),l(this,k,{writable:!0,value:void 0}),a(this,w,[]),a(this,y,null),a(this,k,!1),a(this,x,e),a(this,b,"string"==typeof t?()=>t:t);let i=s(this,x).getContext("2d");if(null==i)throw TypeError("Couldn't get 2D canvas context.");a(this,p,i)}}function C(e){if(a(this,y,requestAnimationFrame(o(this,N,C).bind(this))),s(this,k))return;let t=s(this,x).clientWidth,i=s(this,x).clientHeight;s(this,x).width=t,s(this,x).height=i,null==s(this,g)&&a(this,g,e);let n=(e-s(this,g))/1e3,r=[];for(let e of(s(this,p).fillStyle=s(this,b).call(this),s(this,p).strokeStyle=s(this,p).fillStyle,s(this,p).shadowColor=s(this,p).fillStyle,s(this,p).shadowBlur=25,s(this,w)))e.isMaybeInRect(-50,-50,t+100,i+100)&&(e.velX+=(Math.random()-.5)*2*n*250,e.velY+=(Math.random()-.5)*2*n*250,e.update(n),e.draw(s(this,p)),r.push(e));let l=Math.min(100,t/10);for(;r.length<15;){let e;let i=l*(.9*Math.random()+.1),n=.5>Math.random(),a=Math.random()*t,o=n?-i-25:s(this,x).clientHeight+i+25,c=10*Math.random()*(n?1:-1);.5>Math.random()?e=new _(a,o,i,i>l/3):(e=new v(a,o,i)).velAngZ=(Math.random()-.5)*2,e.velY=c,r.push(e)}a(this,w,r),a(this,g,e)}function E(){let e=(0,u.useId)(),t=(0,u.useRef)(null);return(0,u.useEffect)(()=>{if(null==t.current){console.error("canvasRef is null");return}let e=new M(t.current,()=>null==t.current?"transparent":getComputedStyle(t.current).color);return e.start(),()=>e.stop()},[]),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("svg",{className:"hidden",xmlns:"http://www.w3.org/2000/svg",children:(0,c.jsx)("defs",{children:(0,c.jsx)("filter",{id:e,children:(0,c.jsx)("feColorMatrix",{in:"goo",type:"matrix",values:"1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 50 -10"})})})}),(0,c.jsx)("canvas",{className:"".concat(d().canvas," absolute left-0 top-0 h-full w-full"),ref:t,style:{"--filter-url":"url(#".concat(e,")")}})]})}},8393:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return l}});var n=i(7437);/**
 * @license lucide-react v0.365.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let s=(0,i(843).Z)("ArrowDown",[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]]);var r=i(2529);function l(){return(0,n.jsx)(r.default,{onClick:()=>{document.documentElement.scrollBy(0,innerHeight)},"aria-label":"Avan\xe7ar",children:(0,n.jsx)(s,{})})}},1215:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return r}});var n=i(7437),s=i(2265);function r(e){let{src:t,alt:i}=e,[r,l]=(0,s.useState)(!1),a=(0,s.useRef)(null),o=(0,s.useRef)(null);return(0,s.useEffect)(()=>{o.current=new Image,o.current.addEventListener("load",()=>{l(!0)})},[]),(0,s.useEffect)(()=>{if(l(!1),"IntersectionObserver"in window){let e=new IntersectionObserver((e,i)=>{if(e[0].isIntersecting){if(null==o.current){console.error("image.current is null");return}o.current.src=t,i.disconnect()}});return null==a.current?console.error("ref.current is null"):e.observe(a.current),()=>e.disconnect()}if(null==o.current){console.error("image.current is null");return}o.current.src=t},[t]),(0,n.jsxs)("div",{className:"relative h-full w-full",ref:a,children:[(0,n.jsx)("div",{className:"absolute inset-0 flex items-center justify-center rounded-3xl bg-bg-close has-[~_img]:hidden dark:bg-bg-close-dark",children:(0,n.jsx)("svg",{viewBox:"0 0 1 1",xmlns:"http://www.w3.org/2000/svg",className:"h-8 w-8 animate-spin stroke-primary",children:(0,n.jsx)("circle",{cx:"0.5",cy:"0.5",fill:"none",r:"0.25",strokeWidth:"0.1",strokeDasharray:"1",strokeLinecap:"round"})})}),r?(0,n.jsx)("img",{src:t,alt:i,className:"h-full w-full"}):(0,n.jsx)(n.Fragment,{})]})}},2073:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return l}});var n=i(7437),s=i(2265),r=i(1215);function l(e){let t=(0,s.useRef)(null);return(0,s.useEffect)(()=>{if(null==e.color)return;if(null==t.current){console.error("glowRef is null");return}let i=t.current;return t.current.style.animationDelay="".concat(5*Math.random(),"s"),()=>{i.style.animationDelay=""}},[e.color]),(0,n.jsx)("div",{className:"flex flex-col items-center gap-4",role:"group","aria-label":e.name,children:(0,n.jsxs)("div",{className:"flex flex-col items-center",children:[(0,n.jsx)("div",{className:"relative mb-2 h-12",children:e.image&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{ref:t,className:"absolute inset-0 animate-[pulse_5s_infinite] blur-2xl","aria-hidden":!0,children:(0,n.jsx)(r.default,{src:e.image,alt:"".concat(e.name," logo")})}),(0,n.jsx)(r.default,{src:e.image,alt:"".concat(e.name," logo")})]})}),(0,n.jsxs)("div",{className:"font-display relative text-center text-lg font-bold",children:["color"in e&&(0,n.jsx)("div",{ref:t,className:"absolute inset-0 animate-[pulse_5s_infinite] rounded-full blur-2xl",style:{backgroundColor:e.color}}),(0,n.jsx)("span",{children:e.name})]}),null!=e.details&&(0,n.jsx)("div",{className:"text-center",children:e.details})]})})}},4688:function(e){e.exports={container:"autism_container__sK0zj",infinity:"autism_infinity__m9Hvg","infinity-blink":"autism_infinity-blink__RUqTk",infinity1:"autism_infinity1__EnKN0",infinity2:"autism_infinity2__1LRAC",infinity3:"autism_infinity3__3gVnd",infinity4:"autism_infinity4__dUqVN",infinity5:"autism_infinity5__8q_xW","infinity-shadow-blink":"autism_infinity-shadow-blink__sN9lk",sparkles:"autism_sparkles__SDl84","sparkles-rotate":"autism_sparkles-rotate__C4_a2","sparkles-scale":"autism_sparkles-scale__hZv7i",sparkle1:"autism_sparkle1___Kdue",sparkle2:"autism_sparkle2__5EiO9",sparkle:"autism_sparkle__NfH9_"}},1191:function(e){e.exports={canvas:"goo_canvas__KnANG","fade-in":"goo_fade-in__JuPET"}},1536:function(e){e.exports={"down-arrow":"hero_down-arrow__dls6n","hide-arrow":"hero_hide-arrow__8NCB8"}},8656:function(e){e.exports={"modal-container":"modal_modal-container__CjvJZ",dismiss:"modal_dismiss__uuQxh",modal:"modal_modal__noGlo"}}},function(e){e.O(0,[512,971,69,744],function(){return e(e.s=3238)}),_N_E=e.O()}]);