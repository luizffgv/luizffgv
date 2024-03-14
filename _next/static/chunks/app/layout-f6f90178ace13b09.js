(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{5143:function(t,e,r){Promise.resolve().then(r.bind(r,1293)),Promise.resolve().then(r.bind(r,82)),Promise.resolve().then(r.t.bind(r,9039,23)),Promise.resolve().then(r.t.bind(r,5696,23)),Promise.resolve().then(r.t.bind(r,4490,23)),Promise.resolve().then(r.t.bind(r,9795,23))},1293:function(t,e,r){"use strict";function i(t,e,r){if(!e.has(t))throw TypeError("attempted to "+r+" private field on non-instance");return e.get(t)}function s(t,e){var r=i(t,e,"get");return r.get?r.get.call(t):r.value}function a(t,e){if(e.has(t))throw TypeError("Cannot initialize the same private elements twice on an object")}function n(t,e,r){a(t,e),e.set(t,r)}function l(t,e,r){var s=i(t,e,"set");return!function(t,e,r){if(e.set)e.set.call(t,r);else{if(!e.writable)throw TypeError("attempted to set read only private field");e.value=r}}(t,s,r),r}function o(t,e,r){if(!e.has(t))throw TypeError("attempted to get private field on non-instance");return r}r.r(e),r.d(e,{Bubbles:function(){return M},CircleParticle:function(){return p},SquareParticle:function(){return v},addToPage:function(){return N},default:function(){return E}});var c=r(7437),h=r(2265),u=r(1191),d=r.n(u);class m{update(t){this.x+=this.velX*t,this.y+=this.velY*t}constructor(t,e,r=0,i=0){this.x=t,this.y=e,this.velX=r,this.velY=i}}class f extends m{update(t){super.update(t),this.rotZ+=this.velAngZ*t}constructor(t,e,r=0,i=0,s=0,a=0){super(t,e,i,s),this.velAngZ=0,this.rotZ=r,this.velAngZ=a}}class p extends m{isMaybeInRect(t,e,r,i){return!(this.y-this.radius>e+i||this.y+this.radius<e||this.x+this.radius<t||this.x-this.radius>t+r)}draw(t){t.beginPath(),t.arc(this.x,this.y,this.radius,0,2*Math.PI),t.fill()}constructor(t,e,r){super(t,e),this.radius=r}}class v extends f{isMaybeInRect(t,e,r,i){let s=1.41421356237*this.size;return!(this.y-s>e+i||this.y+s<e||this.x+s<t||this.x-s>t+r)}draw(t){t.save(),t.translate(this.x,this.y),t.rotate(this.rotZ),t.fillRect(-this.size/2,-this.size/2,this.size,this.size),t.restore()}constructor(t,e,r,i=0){super(t,e,i),this.size=r}}var _=new WeakMap,x=new WeakMap,g=new WeakMap,y=new WeakMap,b=new WeakMap,w=new WeakMap,j=new WeakSet;class M{start(){l(this,w,requestAnimationFrame(o(this,j,k).bind(this)))}stop(){null!=s(this,w)&&cancelAnimationFrame(s(this,w)),l(this,w,null),l(this,y,[])}constructor(t,e){a(this,j),j.add(this),n(this,_,{writable:!0,value:void 0}),n(this,x,{writable:!0,value:void 0}),n(this,g,{writable:!0,value:void 0}),n(this,y,{writable:!0,value:void 0}),n(this,b,{writable:!0,value:void 0}),n(this,w,{writable:!0,value:void 0}),l(this,y,[]),l(this,w,null),l(this,_,t),l(this,b,"string"==typeof e?()=>e:e);let r=s(this,_).getContext("2d");if(null==r)throw TypeError("Couldn't get 2D canvas context.");l(this,x,r)}}function k(t){let e=s(this,_).clientWidth,r=s(this,_).clientHeight;s(this,_).width=e,s(this,_).height=r,null==s(this,g)&&l(this,g,t);let i=(t-s(this,g))/1e3,a=[];for(let t of(s(this,x).fillStyle=s(this,b).call(this),s(this,x).shadowColor=s(this,x).fillStyle,s(this,x).shadowBlur=25,s(this,y)))t.isMaybeInRect(0,0,e,r)&&(t.velX+=(Math.random()-.5)*2*i*250,t.velY+=(Math.random()-.5)*2*i*250,t.update(i),t.draw(s(this,x)),a.push(t));let n=e/10;for(;a.length<15;){let t;let r=n*(.9*Math.random()+.1),i=.5>Math.random(),l=Math.random()*e,o=i?-r:s(this,_).clientHeight+r,c=50*Math.random()*(i?1:-1);.5>Math.random()?t=new p(l,o,r):(t=new v(l,o,r)).velAngZ=(Math.random()-.5)*2,t.velY=c,a.push(t)}l(this,y,a),l(this,g,t),l(this,w,requestAnimationFrame(o(this,j,k).bind(this)))}function N(){}function E(){let t=(0,h.useId)(),e=(0,h.useRef)(null);return(0,h.useEffect)(()=>{if(null==e.current){console.error("canvasRef is null");return}let t=new M(e.current,()=>getComputedStyle(document.body).getPropertyValue("--raiar-color-primary"));return t.start(),()=>t.stop()},[]),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("svg",{className:d().filter,xmlns:"http://www.w3.org/2000/svg",children:(0,c.jsx)("defs",{children:(0,c.jsx)("filter",{id:t,children:(0,c.jsx)("feColorMatrix",{in:"goo",type:"matrix",values:"1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 50 -10"})})})}),(0,c.jsx)("canvas",{className:d().canvas,ref:e,style:{filter:"url(#".concat(t,") drop-shadow(0 0 15px var(--raiar-color-primary))")}})]})}},429:function(t,e,r){"use strict";r.d(e,{Z:function(){return l}});var i=r(7437),s=r(2265),a=r(8656),n=r.n(a);function l(t){let{children:e,onDismiss:r,noCard:a}=t,l=(0,s.useRef)(null);return(0,s.useEffect)(()=>{if(null==l.current){console.error("dialogRef.current is null.");return}l.current.showModal()},[]),(0,i.jsxs)("dialog",{ref:l,className:"".concat(n()["modal-container"]," raiar flex-col align-items-center justify-content-safe-center gap"),children:[r?(0,i.jsx)("button",{type:"button",className:n().dismiss,onClick:()=>r(),children:(0,i.jsx)("span",{className:"material-symbols-outlined",children:"close"})}):(0,i.jsx)(i.Fragment,{}),(0,i.jsx)("div",{className:"".concat(n().modal," ").concat(a?"":"raiar-card"),children:e})]})}},82:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return o}});var i=r(7437),s=r(2265),a=r(5607),n=r.n(a),l=r(429);function o(){let[t,e]=(0,s.useState)(!1);return(0,i.jsxs)("div",{className:"raiar flex-col gap align-center raiar-card text-center width-fit",children:[(0,i.jsx)("h2",{children:"Mudar tema"}),(0,i.jsxs)("div",{className:"raiar flex-row justify-center gap flex-wrap",children:[(0,i.jsx)("button",{"aria-label":"Mudar tema",onClick:()=>{localStorage.setItem("theme-dark",String(document.documentElement.classList.toggle("raiar-dark")))},children:(0,i.jsx)("span",{className:n()["toggle-button-text"]})}),(0,i.jsx)("button",{"aria-label":"Escolher cor prim\xe1ria",onClick:()=>e(!0),children:(0,i.jsx)("span",{className:"material-symbols-outlined","aria-hidden":"true",children:"brush"})})]}),t?(0,i.jsx)(l.Z,{onDismiss:()=>e(!1),children:(0,i.jsxs)("div",{className:"raiar flex-col gap align-items-center",children:[(0,i.jsx)("h2",{children:"Escolher cor prim\xe1ria"}),(0,i.jsx)("input",{type:"color",onInput:t=>{localStorage.setItem("theme-color-primary",t.currentTarget.value),document.documentElement.style.setProperty("--raiar-color-primary",t.currentTarget.value)}}),(0,i.jsxs)("button",{type:"button",onClick:()=>{localStorage.removeItem("theme-color-primary"),document.documentElement.style.setProperty("--raiar-color-primary",null)},children:[(0,i.jsx)("span",{className:"material-symbols-outlined","aria-hidden":!0,children:"history"})," ","Redefinir"]})]})}):(0,i.jsx)(i.Fragment,{})]})}},9039:function(){},1191:function(t){t.exports={canvas:"goo_canvas__KnANG","fade-in":"goo_fade-in__JuPET",filter:"goo_filter__Ff6pj"}},8656:function(t){t.exports={"modal-container":"modal_modal-container__CjvJZ",dismiss:"modal_dismiss__uuQxh",modal:"modal_modal__noGlo"}},5607:function(t){t.exports={"toggle-button-text":"theme-switcher_toggle-button-text__vWpfW"}},5696:function(t){t.exports={root:"layout_root__ensIR",body:"layout_body__oiEIT"}},9795:function(t){t.exports={style:{fontFamily:"'__Archivo_Black_925659', '__Archivo_Black_Fallback_925659'",fontWeight:400,fontStyle:"normal"},className:"__className_925659",variable:"__variable_925659"}},4490:function(t){t.exports={style:{fontFamily:"'__Inter_aaf875', '__Inter_Fallback_aaf875'",fontStyle:"normal"},className:"__className_aaf875",variable:"__variable_aaf875"}}},function(t){t.O(0,[971,69,744],function(){return t(t.s=5143)}),_N_E=t.O()}]);