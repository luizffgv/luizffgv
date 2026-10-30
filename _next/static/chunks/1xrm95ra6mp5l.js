(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,[93789,e=>{var t=e.i(43476),r=e.i(932),n=e.i(71645);e.i(42147);var i=e.i(1121);e.s(["default",0,function(e){let o,a,l,s,c,d,u,p,m,h,f,g=(0,r.c)(30),{sparkColor:v,sparkSize:b,sparkRadius:w,sparkCount:y,duration:x,easing:k,extraScale:_,children:N}=e,S=void 0===v?"currentColor":v,E=void 0===b?10:b,C=void 0===w?15:w,T=void 0===y?8:y,A=void 0===x?400:x,z=void 0===k?"ease-out":k,M=void 0===_?1:_,R=(0,n.useRef)(null),$=(0,n.useRef)(null);g[0]===Symbol.for("react.memo_cache_sentinel")?(o=[],g[0]=o):o=g[0];let j=(0,n.useRef)(o),F=(0,n.useRef)(null);g[1]===Symbol.for("react.memo_cache_sentinel")?(l=()=>{let e,t=R.current;if(!t)return;let r=$.current;if(!r)return;let n=()=>{let{width:e,height:n}=r.getBoundingClientRect();(t.width!==e||t.height!==n)&&(t.width=e,t.height=n)},i=new ResizeObserver(()=>{clearTimeout(e),e=setTimeout(n,100)});return i.observe(r),n(),()=>{i.disconnect(),clearTimeout(e)}},a=[],g[1]=a,g[2]=l):(a=g[1],l=g[2]),(0,n.useEffect)(l,a),g[3]!==z?(s=e=>{switch(z){case"linear":return e;case"ease-in":return e*e;case"ease-in-out":return e<.5?2*e*e:-1+(4-2*e)*e;default:return e*(2-e)}},g[3]=z,g[4]=s):s=g[4];let O=s;g[5]!==A||g[6]!==O||g[7]!==M||g[8]!==C||g[9]!==E?(c=()=>{let e,t=R.current;if(!t)return;let r=t.getContext("2d");if(!r)return;let n=i=>{F.current||(F.current=i),r.clearRect(0,0,t.width,t.height),j.current=j.current.filter(e=>{let n=i-e.startTime;if(n>=A)return!1;let o=O(n/A),a=o*C*M,l=E*(1-o),s=e.x+a*Math.cos(e.angle),c=e.y+a*Math.sin(e.angle),d=e.x+(a+l)*Math.cos(e.angle),u=e.y+(a+l)*Math.sin(e.angle);return r.strokeStyle=getComputedStyle(t).color,r.lineWidth=2,r.beginPath(),r.moveTo(s,c),r.lineTo(d,u),r.stroke(),!0}),e=requestAnimationFrame(n)};return e=requestAnimationFrame(n),()=>{cancelAnimationFrame(e)}},g[5]=A,g[6]=O,g[7]=M,g[8]=C,g[9]=E,g[10]=c):c=g[10],g[11]!==A||g[12]!==O||g[13]!==M||g[14]!==S||g[15]!==T||g[16]!==C||g[17]!==E?(d=[S,E,C,T,A,O,M],g[11]=A,g[12]=O,g[13]=M,g[14]=S,g[15]=T,g[16]=C,g[17]=E,g[18]=d):d=g[18],(0,n.useEffect)(c,d),g[19]!==T?(u=e=>{let t=R.current;if(!t)return;let r=t.getBoundingClientRect(),n=e.clientX-r.left,i=e.clientY-r.top,o=performance.now(),a=Array.from({length:T},(e,t)=>({x:n,y:i,angle:2*Math.PI*t/T,startTime:o}));j.current.push(...a)},g[19]=T,g[20]=u):u=g[20];let P=u;return g[21]!==S?(p={color:S},g[21]=S,g[22]=p):p=g[22],g[23]===Symbol.for("react.memo_cache_sentinel")?(m=(0,t.jsx)("canvas",{ref:R,className:"pointer-events-none absolute inset-0 text-primary"}),g[23]=m):m=g[23],g[24]!==p?(h=(0,t.jsx)(i.f,{period:18,children:(0,t.jsx)("div",{className:"contents",style:p,children:m})}),g[24]=p,g[25]=h):h=g[25],g[26]!==N||g[27]!==P||g[28]!==h?(f=(0,t.jsxs)("div",{className:"relative",onClick:P,ref:$,children:[N,h]}),g[26]=N,g[27]=P,g[28]=h,g[29]=f):f=g[29],f}])},17504,e=>{var t=e.i(932),r=e.i(18566),n=e.i(71645),i=e.i(22831);let o={"/":"home","/projetos":"projects","/sobre":"about"};e.s(["default",0,function(){let e,a,l=(0,t.c)(5),{t:s,i18n:c}=(0,i.f)(),d=(0,r.usePathname)(),u=c.language;return l[0]!==u||l[1]!==d||l[2]!==s?(e=()=>{if(document.documentElement.lang=u,!(d in o))return;let e=o[d];document.title=s(`meta.${e}.title`),document.querySelector('meta[name="description"]')?.setAttribute("content",s(`meta.${e}.description`))},a=[u,d,s],l[0]=u,l[1]=d,l[2]=s,l[3]=e,l[4]=a):(e=l[3],a=l[4]),(0,n.useEffect)(e,a),null}])},84450,e=>{var t=e.i(43476),r=e.i(932);let n=(0,e.i(75254).f)("heart",[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]]);var i=e.i(45771),o=e.i(22831);e.s(["default",0,function(){let e,a,l=(0,r.c)(3),{t:s}=(0,o.f)();return l[0]===Symbol.for("react.memo_cache_sentinel")?(e={Heart:(0,t.jsx)(n,{className:"inline h-4 w-4 fill-red-500 stroke-red-500"})},l[0]=e):e=l[0],l[1]!==s?(a=(0,t.jsx)("footer",{className:"flex flex-col items-center gap-2 bg-bg-close p-8 text-center dark:bg-bg-close-dark",children:(0,t.jsx)(i.f,{className:"max-w-prose text-lg",components:e,i18nKey:"footer.content",parent:"p",t:s})}),l[1]=s,l[2]=a):a=l[2],a}],84450)},88872,e=>{var t=e.i(43476),r=e.i(932),n=e.i(92108),i=e.i(71645),o=e.i(25913),a=e.i(75254);let l=(0,a.f)("house",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]]),s=(0,a.f)("wrench",[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z",key:"1ngwbx"}]]);var c=e.i(18566),d=e.i(22831);let u=(0,a.f)("sun-moon",[["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M14.837 16.385a6 6 0 1 1-7.223-7.222c.624-.147.97.66.715 1.248a4 4 0 0 0 5.26 5.259c.589-.255 1.396.09 1.248.715",key:"xlf6rm"}],["path",{d:"M16 12a4 4 0 0 0-4-4",key:"6vsxu"}],["path",{d:"m19 5-1.256 1.256",key:"1yg6a6"}],["path",{d:"M20 12h2",key:"1q8mjw"}]]);e.i(48248);var p=e.i(98663);function m(){let e,n,i,o,a,l=(0,r.c)(10),{t:s}=(0,d.f)();return l[0]!==s?(e=s("theme-switcher.switch"),l[0]=s,l[1]=e):e=l[1],l[2]===Symbol.for("react.memo_cache_sentinel")?(n=(0,t.jsx)(u,{}),l[2]=n):n=l[2],l[3]!==s?(i=s("theme-switcher.switch"),l[3]=s,l[4]=i):i=l[4],l[5]!==i?(o=(0,t.jsx)("span",{className:"hidden sm:inline",children:i}),l[5]=i,l[6]=o):o=l[6],l[7]!==e||l[8]!==o?(a=(0,t.jsxs)(p.f,{"aria-label":e,onClick:h,children:[n,o]}),l[7]=e,l[8]=o,l[9]=a):a=l[9],a}function h(){localStorage.setItem("theme-dark",String(document.documentElement.classList.toggle("dark")))}let f=(0,a.f)("languages",[["path",{d:"m5 8 6 6",key:"1wu5hv"}],["path",{d:"m4 14 6-6 2-3",key:"1k1g8d"}],["path",{d:"M2 5h12",key:"or177f"}],["path",{d:"M7 2h1",key:"1t2jsx"}],["path",{d:"m22 22-5-10-5 10",key:"don7ne"}],["path",{d:"M14 18h6",key:"1m8k6r"}]]);function g(){let e,n,i,o,a=(0,r.c)(8),{t:l}=(0,d.f)(),{i18n:s}=(0,d.f)();return a[0]!==l?(e=l("language-switcher.switch"),a[0]=l,a[1]=e):e=a[1],a[2]!==s?(n=()=>{s.changeLanguage("pt-BR"===s.language?"en":"pt-BR")},a[2]=s,a[3]=n):n=a[3],a[4]===Symbol.for("react.memo_cache_sentinel")?(i=(0,t.jsx)(f,{}),a[4]=i):i=a[4],a[5]!==e||a[6]!==n?(o=(0,t.jsx)(p.f,{"aria-label":e,onClick:n,children:i}),a[5]=e,a[6]=n,a[7]=o):o=a[7],o}var v=e.i(46932);let b=(0,o.f)("relative flex select-none items-center justify-center px-8 py-2 text-base font-bold transition-all",{variants:{active:{true:"text-fg-on-primary dark:text-inherit",false:"cursor-pointer text-primary hover:bg-primary/15"}}}),w=(0,o.f)("relative inline-flex items-center text-sm transition-all"),y=(0,o.f)("absolute inset-0 z-[-1] border-2 border-border-segmented-control bg-bg-segmented-control dark:bg-bg-segmented-control-dark"),x=(0,o.f)("absolute inset-0 z-[-1] bg-primary");function k(e){let n,o,a,l,s=(0,r.c)(15),{options:c,value:d,onChange:u,name:p}=e,m=(0,i.useRef)(null),h=(0,i.useId)(),f=p??`${h}-segmented-control`;if(s[0]===Symbol.for("react.memo_cache_sentinel")?(n=w(),s[0]=n):n=s[0],s[1]===Symbol.for("react.memo_cache_sentinel")?(o=(0,t.jsx)("div",{className:y()}),s[1]=o):o=s[1],s[2]!==f||s[3]!==h||s[4]!==u||s[5]!==c||s[6]!==d){let e;s[8]!==f||s[9]!==h||s[10]!==u||s[11]!==d?(e=e=>{let{value:r,label:n}=e,i=r===d;return(0,t.jsxs)("label",{className:b({active:i}),children:[i&&(0,t.jsx)(v.f.div,{className:x(),layoutId:`${h}-selected-background`,transition:{type:"spring",duration:.5}}),(0,t.jsx)("input",{type:"radio",className:"sr-only",name:f,value:r,checked:i,onChange:()=>{u?.(r)}}),(0,t.jsx)("div",{className:"flex items-center gap-2",children:"function"==typeof n?n({isActive:i}):n})]},r)},s[8]=f,s[9]=h,s[10]=u,s[11]=d,s[12]=e):e=s[12],a=c.map(e),s[2]=f,s[3]=h,s[4]=u,s[5]=c,s[6]=d,s[7]=a}else a=s[7];return s[13]!==a?(l=(0,t.jsxs)("div",{role:"radiogroup",className:n,ref:m,children:[o,a]}),s[13]=a,s[14]=l):l=s[14],l}let _=(0,o.f)("fixed left-0 top-0 z-[1] flex w-full flex-row justify-center bg-bg-close/75 px-4 py-2 shadow-sm backdrop-blur-lg transition-all dark:bg-bg-close-dark/75",{variants:{pinned:{false:"translate-y-[-100%]"}}}),N=(0,i.memo)(function(e){let n,o,a,l,s,u,p,h,f,v,b,w,y=(0,r.c)(28),{isVisible:x}=e,N=(0,c.usePathname)(),C=(0,c.useRouter)(),{t:T}=(0,d.f)(),A=function(e,{getInitialValueInEffect:t}={getInitialValueInEffect:!0}){let[r,n]=(0,i.useState)(t?void 0:function(e){if("u">typeof window&&"matchMedia"in window)try{return window.matchMedia(e).matches}catch{}return!1}(e));return(0,i.useEffect)(()=>{try{if("matchMedia"in window){let t=window.matchMedia(e);n(t.matches);let r=e=>n(e.matches);return t.addEventListener("change",r),()=>{t.removeEventListener("change",r)}}}catch(e){return}},[e]),r||!1}("(max-width: 512px)");y[0]!==T?(n=T("sections.home"),y[0]=T,y[1]=n):n=y[1],y[2]!==n?(o={name:n,icon:S,href:"/"},y[2]=n,y[3]=o):o=y[3],y[4]!==T?(a=T("sections.projects"),y[4]=T,y[5]=a):a=y[5],y[6]!==a?(l={name:a,icon:E,href:"/projetos"},y[6]=a,y[7]=l):l=y[7],y[8]!==o||y[9]!==l?(s=[o,l],y[8]=o,y[9]=l,y[10]=s):s=y[10];let z=s;y[11]!==z||y[12]!==A?(u=z.map(e=>({label:r=>{let{isActive:n}=r;return(0,t.jsxs)(t.Fragment,{children:[e.icon({isActive:n})," ",A?null:e.name]})},value:e.href})),y[11]=z,y[12]=A,y[13]=u):u=y[13];let M=u;return y[14]!==x?(p=_({pinned:x}),y[14]=x,y[15]=p):p=y[15],y[16]!==C?(h=e=>{C.push(e)},y[16]=C,y[17]=h):h=y[17],y[18]!==M||y[19]!==N||y[20]!==h?(f=(0,t.jsx)("nav",{children:(0,t.jsx)(k,{value:N,options:M,onChange:h})}),y[18]=M,y[19]=N,y[20]=h,y[21]=f):f=y[21],y[22]===Symbol.for("react.memo_cache_sentinel")?(v=(0,t.jsxs)("div",{className:"flex gap-2",children:[(0,t.jsx)(m,{}),(0,t.jsx)(g,{})]}),y[22]=v):v=y[22],y[23]!==f?(b=(0,t.jsxs)("div",{className:"flex max-w-screen-2xl grow flex-row items-center justify-between",children:[f,v]}),y[23]=f,y[24]=b):b=y[24],y[25]!==b||y[26]!==p?(w=(0,t.jsx)("header",{className:p,children:b}),y[25]=b,y[26]=p,y[27]=w):w=y[27],w});function S(e){let{isActive:r}=e;return(0,t.jsx)(l,{fill:r?"currentColor":"transparent",size:20})}function E(e){let{isActive:r}=e;return(0,t.jsx)(s,{fill:r?"currentColor":"transparent",size:20})}e.s(["default",0,function(){let e,i=(0,r.c)(2),{pinned:o}=(0,n.f)();return i[0]!==o?(e=(0,t.jsx)(N,{isVisible:o}),i[0]=o,i[1]=e):e=i[1],e}],88872)},17098,e=>{var t=e.i(43476),r=e.i(932),n=e.i(45141),i=e.i(71645),o=e.i(6593);function a({i18n:e,defaultNS:t,children:r}){let n=(0,i.useMemo)(()=>({i18n:e,defaultNS:t}),[e,t]);return(0,i.createElement)(o.k.Provider,{value:n},r)}var l=e.i(2607),s=e.i(85103),c=e.i(22794);n.U.use(l.f).init({defaultNS:"common",ns:["common"],fallbackLng:"pt-BR",lng:"pt-BR",resources:{en:{common:s.default},"pt-BR":{common:c.default}},supportedLngs:["pt-BR","en"]}),e.s(["default",0,function(e){let i,o=(0,r.c)(2),{children:l}=e;return o[0]!==l?(i=(0,t.jsx)(a,{i18n:n.U,children:l}),o[0]=l,o[1]=i):i=o[1],i}],17098)},15781,e=>{var t=e.i(43476),r=e.i(71645);e.s(["ReactBitsNoise",0,function({patternSize:e=250,patternScaleX:n=1,patternScaleY:i=1,patternRefreshInterval:o=2,patternAlpha:a=15}){let l=(0,r.useRef)(null);return(0,r.useEffect)(()=>{let e,t=l.current;if(!t)return;let r=t.getContext("2d",{alpha:!0});if(!r)return;let n=0,i=()=>{t.width=1024,t.height=1024,t.style.width="100vw",t.style.height="100vh"},s=()=>{n%o==0&&(()=>{let e=r.createImageData(1024,1024),t=e.data;for(let e=0;e<t.length;e+=4){let r=255*Math.random();t[e]=r,t[e+1]=r,t[e+2]=r,t[e+3]=a}r.putImageData(e,0,0)})(),n++,e=window.requestAnimationFrame(s)};return window.addEventListener("resize",i),i(),s(),()=>{window.removeEventListener("resize",i),window.cancelAnimationFrame(e)}},[e,n,i,o,a]),(0,t.jsx)("canvas",{className:"pointer-events-none absolute left-0 top-0 h-screen w-screen",ref:l,style:{imageRendering:"pixelated"}})}])},75280,e=>{let t,r,n,i,o,a,l,s,c;var d,u,p,m,h,f,g,v,b,w,y,x=e.i(43476),k=e.i(932);let _="bippy-0.5.43",N=Object.defineProperty,S=Object.prototype.hasOwnProperty,E=()=>{},C=e=>{try{Function.prototype.toString.call(e).indexOf("^_^")>-1&&setTimeout(()=>{throw Error("React is running in production mode, but dead code elimination has not been applied. Read how to correctly configure React for production: https://reactjs.org/link/perf-use-production-build")})}catch{}},T=(e=globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__)=>!!(e&&"getFiberRoots"in e),A=!1,z,M=(e=globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__)=>!!A||(e&&"function"==typeof e.inject&&(z=e.inject.toString()),!!z?.includes("(injected)")),R=new Set,$=new Set,j=e=>{e&&R.add(e);try{let t=globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!t)return;if(!t._instrumentationSource){t.checkDCE=C,t.supportsFiber=!0,t.supportsFlight=!0,t.hasUnsupportedRendererAttached=!1,t._instrumentationSource=_,t._instrumentationIsActive=!1;let e=T(t);if(e||(t.on=E),t.renderers.size){t._instrumentationIsActive=!0,R.forEach(e=>e());return}let r=t.inject,n=M(t);n&&!e&&(A=!0,t.inject({scheduleRefresh(){}})&&(t._instrumentationIsActive=!0)),t.inject=e=>{let i=r(e);return $.add(e),n&&t.renderers.set(i,e),t._instrumentationIsActive=!0,R.forEach(e=>e()),i}}(t.renderers.size||t._instrumentationIsActive||M())&&e?.()}catch{}},F=e=>S.call(globalThis,"__REACT_DEVTOOLS_GLOBAL_HOOK__")?(j(e),globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__):(e=>{let t=new Map,r=0,n={_instrumentationIsActive:!1,_instrumentationSource:_,checkDCE:C,hasUnsupportedRendererAttached:!1,inject(e){let i=++r;return t.set(i,e),$.add(e),n._instrumentationIsActive||(n._instrumentationIsActive=!0,R.forEach(e=>e())),i},on:E,onCommitFiberRoot:E,onCommitFiberUnmount:E,onPostCommitFiberRoot:E,renderers:t,supportsFiber:!0,supportsFlight:!0};try{N(globalThis,"__REACT_DEVTOOLS_GLOBAL_HOOK__",{configurable:!0,enumerable:!0,get:()=>n,set(t){if(t&&"object"==typeof t){let r=n.renderers;n=t,r.size>0&&(r.forEach((e,r)=>{$.add(e),t.renderers.set(r,e)}),j(e))}}});let t=window.hasOwnProperty,r=!1;N(window,"hasOwnProperty",{configurable:!0,value:function(...e){try{if(!r&&"__REACT_DEVTOOLS_GLOBAL_HOOK__"===e[0])return globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__=void 0,r=!0,-0}catch{}return t.apply(this,e)},writable:!0})}catch{j(e)}return n})(e);try{"u">typeof window&&(window.document?.createElement||window.navigator?.product==="ReactNative")&&F()}catch{}let O=e=>{switch(e.tag){case 5:case 26:case 27:return!0;default:return"string"==typeof e.type}},P=e=>{switch(e.tag){case 1:case 11:case 0:case 14:case 15:return!0;default:return!1}},L=e=>{let t=e.memoizedProps,r=e.alternate?.memoizedProps||{},n=e.flags??e.effectTag??0;switch(e.tag){case 1:case 9:case 11:case 0:case 14:case 15:return(1&n)==1;default:return!e.alternate||r!==t||e.alternate.memoizedState!==e.memoizedState||e.alternate.ref!==e.ref}},D=e=>!!(13374&e.flags||13374&e.subtreeFlags),I=e=>{switch(e.tag){case 18:case 7:case 6:case 23:case 22:return!0;case 3:return!1;default:{let t="object"==typeof e.type&&null!==e.type?e.type.$$typeof:e.type;switch("symbol"==typeof t?t.toString():t){case 60111:case"Symbol(react.concurrent_mode)":case"Symbol(react.async_mode)":return!0;default:return!1}}}};function W(e,t,r=!1){if(!e)return null;let n=t(e);if(n instanceof Promise)return(async()=>{if(await n===!0)return e;let i=r?e.return:e.child;for(;i;){let e=await H(i,t,r);if(e)return e;i=r?null:i.sibling}return null})();if(!0===n)return e;let i=r?e.return:e.child;for(;i;){let e=U(i,t,r);if(e)return e;i=r?null:i.sibling}return null}let U=(e,t,r=!1)=>{if(!e)return null;if(!0===t(e))return e;let n=r?e.return:e.child;for(;n;){let e=U(n,t,r);if(e)return e;n=r?null:n.sibling}return null},H=async(e,t,r=!1)=>{if(!e)return null;if(await t(e)===!0)return e;let n=r?e.return:e.child;for(;n;){let e=await H(n,t,r);if(e)return e;n=r?null:n.sibling}return null},B=e=>{let t=e?.actualDuration??0,r=t,n=e?.child??null;for(;t>0&&null!=n;)r-=n.actualDuration??0,n=n.sibling;return{selfTime:r,totalTime:t}},V=e=>!!e.updateQueue?.memoCache,q=e=>"function"==typeof e?e:"object"==typeof e&&e?q(e.type||e.render):null,G=e=>{if("string"==typeof e)return e;if("function"!=typeof e&&!("object"==typeof e&&e))return null;let t=e.displayName||e.name||null;if(t)return t;let r=q(e);return r&&(r.displayName||r.name)||null},J=e=>{try{if("string"==typeof e.version&&e.bundleType>0)return"development"}catch{}return"production"},X=0,Y=new WeakMap,K=e=>{let t=Y.get(e);return!t&&e.alternate&&(t=Y.get(e.alternate)),t||((e,t=X++)=>{Y.set(e,t)})(e,t=X++),t},Z=(e,t,r)=>{let n=t;for(;null!=n;){if(Y.has(n)||K(n),!I(n)&&L(n)&&e(n,"mount"),13===n.tag)if(null!==n.memoizedState){let t=n.child,r=t?t.sibling:null;if(r){let t=r.child;null!==t&&Z(e,t,!1)}}else{let t=null;null!==n.child&&(t=n.child.child),null!==t&&Z(e,t,!1)}else null!=n.child&&Z(e,n.child,!0);n=r?n.sibling:null}},Q=(e,t,r,n)=>{if(Y.has(t)||K(t),!r)return;Y.has(r)||K(r);let i=13===t.tag,o=!I(t);o&&L(t)&&e(t,"update");let a=i&&null!==r.memoizedState,l=i&&null!==t.memoizedState;if(a&&l){let n=t.child?.sibling??null,i=r.child?.sibling??null;null!==n&&null!==i&&Q(e,n,i,t)}else if(a&&!l){let r=t.child;null!==r&&Z(e,r,!0)}else if(!a&&l){et(e,r);let n=t.child?.sibling??null;null!==n&&Z(e,n,!0)}else if(t.child!==r.child){let r=t.child;for(;r;){if(r.alternate){let i=r.alternate;Q(e,r,i,o?t:n)}else Z(e,r,!1);r=r.sibling}}},ee=(e,t)=>{3!==t.tag&&I(t)||e(t,"unmount")},et=(e,t)=>{let r=13===t.tag&&null!==t.memoizedState,n=t.child;for(r&&(n=(t.child?.sibling??null)?.child??null);null!==n;)null!==n.return&&(ee(e,n),et(e,n)),n=n.sibling},er=0,en=new WeakMap;Error();var ei,eo,ea,el,es,ec,ed,eu,ep,em,eh,ef,eg,ev,eb,ew={},ey=[],ex=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,ek=Array.isArray;function e_(e,t){for(var r in t)e[r]=t[r];return e}function eN(e){e&&e.parentNode&&e.parentNode.removeChild(e)}function eS(e,t,r){var n,i,o,a={};for(o in t)"key"==o?n=t[o]:"ref"==o?i=t[o]:a[o]=t[o];if(arguments.length>2&&(a.children=arguments.length>3?ei.call(arguments,2):r),"function"==typeof e&&null!=e.defaultProps)for(o in e.defaultProps)void 0===a[o]&&(a[o]=e.defaultProps[o]);return eE(e,a,n,i,null)}function eE(e,t,r,n,i){var o={type:e,props:t,key:r,ref:n,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:null==i?++ea:i,__i:-1,__u:0};return null==i&&null!=eo.vnode&&eo.vnode(o),o}function eC(e){return e.children}function eT(e,t){this.props=e,this.context=t}function eA(e,t){if(null==t)return e.__?eA(e.__,e.__i+1):null;for(var r;t<e.__k.length;t++)if(null!=(r=e.__k[t])&&null!=r.__e)return r.__e;return"function"==typeof e.type?eA(e):null}function ez(e){(!e.__d&&(e.__d=!0)&&el.push(e)&&!eM.__r++||es!=eo.debounceRendering)&&((es=eo.debounceRendering)||ec)(eM)}function eM(){try{for(var e,t=1;el.length;)el.length>t&&el.sort(ed),e=el.shift(),t=el.length,function(e){if(e.__P&&e.__d){var t=e.__v,r=t.__e,n=[],i=[],o=e_({},t);o.__v=t.__v+1,eo.vnode&&eo.vnode(o),eP(e.__P,o,t,e.__n,e.__P.namespaceURI,32&t.__u?[r]:null,n,null==r?eA(t):r,!!(32&t.__u),i),o.__v=t.__v,o.__.__k[o.__i]=o,eL(n,o,i),t.__e=t.__=null,o.__e!=r&&function e(t){if(null!=(t=t.__)&&null!=t.__c)return t.__e=t.__c.base=null,t.__k.some(function(e){if(null!=e&&null!=e.__e)return t.__e=t.__c.base=e.__e}),e(t)}(o)}}(e)}finally{el.length=eM.__r=0}}function eR(e,t,r,n,i,o,a,l,s,c,d){var u,p,m,h,f,g,v=n&&n.__k||ey,b=t.length;for(s=function(e,t,r,n,i){var o,a,l,s,c,d=r.length,u=d,p=0;for(e.__k=Array(i),o=0;o<i;o++)null!=(a=t[o])&&"boolean"!=typeof a&&"function"!=typeof a?("string"==typeof a||"number"==typeof a||"bigint"==typeof a||a.constructor==String?a=e.__k[o]=eE(null,a,null,null,null):ek(a)?a=e.__k[o]=eE(eC,{children:a},null,null,null):void 0===a.constructor&&a.__b>0?a=e.__k[o]=eE(a.type,a.props,a.key,a.ref?a.ref:null,a.__v):e.__k[o]=a,s=o+p,a.__=e,a.__b=e.__b+1,l=null,-1!=(c=a.__i=function(e,t,r,n){var i,o,a,l=e.key,s=e.type,c=t[r],d=null!=c&&0==(2&c.__u);if(null===c&&null==l||d&&l==c.key&&s==c.type)return r;if(n>+!!d){for(i=r-1,o=r+1;i>=0||o<t.length;)if(null!=(c=t[a=i>=0?i--:o++])&&0==(2&c.__u)&&l==c.key&&s==c.type)return a}return -1}(a,r,s,u))&&(u--,(l=r[c])&&(l.__u|=2)),null==l||null==l.__v?(-1==c&&(i>d?p--:i<d&&p++),"function"!=typeof a.type&&(a.__u|=4)):c!=s&&(c==s-1?p--:c==s+1?p++:(c>s?p--:p++,a.__u|=4))):e.__k[o]=null;if(u)for(o=0;o<d;o++)null!=(l=r[o])&&0==(2&l.__u)&&(l.__e==n&&(n=eA(l)),function e(t,r,n){var i,o;if(eo.unmount&&eo.unmount(t),(i=t.ref)&&(i.current&&i.current!=t.__e||eD(i,null,r)),null!=(i=t.__c)){if(i.componentWillUnmount)try{i.componentWillUnmount()}catch(e){eo.__e(e,r)}i.base=i.__P=i.__n=null}if(i=t.__k)for(o=0;o<i.length;o++)i[o]&&e(i[o],r,n||"function"!=typeof t.type);n||eN(t.__e),t.__c=t.__=t.__e=void 0}(l,l));return n}(r,t,v,s,b),u=0;u<b;u++)null!=(m=r.__k[u])&&(p=-1!=m.__i&&v[m.__i]||ew,m.__i=u,g=eP(e,m,p,i,o,a,l,s,c,d),h=m.__e,m.ref&&p.ref!=m.ref&&(p.ref&&eD(p.ref,null,m),d.push(m.ref,m.__c||h,m)),null==f&&null!=h&&(f=h),4&m.__u?(s=function e(t,r,n){var i,o;if("function"==typeof t.type){for(i=t.__k,o=0;i&&o<i.length;o++)i[o]&&(i[o].__=t,r=e(i[o],r,n));return r}t.__e!=r&&(r&&t.type&&!r.parentNode&&(r=eA(t)),r=n.insertBefore(t.__e,r||null));do r=r&&r.nextSibling;while(null!=r&&8==r.nodeType)return r}(m,s,e),p.__e&&(p.__e=null)):"function"==typeof m.type&&void 0!==g?s=g:h&&(s=h.nextSibling),m.__u&=-7);return r.__e=f,s}function e$(e,t){return t=t||[],null==e||"boolean"==typeof e||(ek(e)?e.some(function(e){e$(e,t)}):t.push(e)),t}function ej(e,t,r){"-"==t[0]?e.setProperty(t,null==r?"":r):e[t]=null==r?"":"number"!=typeof r||ex.test(t)?r:r+"px"}function eF(e,t,r,n,i){var o,a;e:if("style"==t)if("string"==typeof r)e.style.cssText=r;else{if("string"==typeof n&&(e.style.cssText=n=""),n)for(t in n)r&&t in r||ej(e.style,t,"");if(r)for(t in r)n&&r[t]==n[t]||ej(e.style,t,r[t])}else if("o"==t[0]&&"n"==t[1])o=t!=(t=t.replace(eh,"$1")),t=(a=t.toLowerCase())in e||"onFocusOut"==t||"onFocusIn"==t?a.slice(2):t.slice(2),e.l||(e.l={}),e.l[t+o]=r,r?n?r[em]=n[em]:(r[em]=ef,e.addEventListener(t,o?ev:eg,o)):e.removeEventListener(t,o?ev:eg,o);else{if("http://www.w3.org/2000/svg"==i)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("width"!=t&&"height"!=t&&"href"!=t&&"list"!=t&&"form"!=t&&"tabIndex"!=t&&"download"!=t&&"rowSpan"!=t&&"colSpan"!=t&&"role"!=t&&"popover"!=t&&t in e)try{e[t]=null==r?"":r;break e}catch(e){}"function"==typeof r||(null==r||!1===r&&"-"!=t[4]?e.removeAttribute(t):e.setAttribute(t,"popover"==t&&1==r?"":r))}}function eO(e){return function(t){if(this.l){var r=this.l[t.type+e];if(null==t[ep])t[ep]=ef++;else if(t[ep]<r[em])return;return r(eo.event?eo.event(t):t)}}}function eP(e,t,r,n,i,o,a,l,s,c){var d,u,p,m,h,f,g,v,b,w,y,x,k,_,N,S,E=t.type;if(void 0!==t.constructor)return null;128&r.__u&&(s=!!(32&r.__u),o=[l=t.__e=r.__e]),(d=eo.__b)&&d(t);e:if("function"==typeof E){u=a.length;try{if(b=t.props,w=E.prototype&&E.prototype.render,y=(d=E.contextType)&&n[d.__c],x=d?y?y.props.value:d.__:n,r.__c?v=(p=t.__c=r.__c).__=p.__E:(w?t.__c=p=new E(b,x):(t.__c=p=new eT(b,x),p.constructor=E,p.render=eI),y&&y.sub(p),p.state||(p.state={}),p.__n=n,m=p.__d=!0,p.__h=[],p._sb=[]),w&&null==p.__s&&(p.__s=p.state),w&&null!=E.getDerivedStateFromProps&&(p.__s==p.state&&(p.__s=e_({},p.__s)),e_(p.__s,E.getDerivedStateFromProps(b,p.__s))),h=p.props,f=p.state,p.__v=t,m)w&&null==E.getDerivedStateFromProps&&null!=p.componentWillMount&&p.componentWillMount(),w&&null!=p.componentDidMount&&p.__h.push(p.componentDidMount);else{if(w&&null==E.getDerivedStateFromProps&&b!==h&&null!=p.componentWillReceiveProps&&p.componentWillReceiveProps(b,x),t.__v==r.__v||!p.__e&&null!=p.shouldComponentUpdate&&!1===p.shouldComponentUpdate(b,p.__s,x)){t.__v!=r.__v&&(p.props=b,p.state=p.__s,p.__d=!1),t.__e=r.__e,t.__k=r.__k,t.__k.some(function(e){e&&(e.__=t)}),ey.push.apply(p.__h,p._sb),p._sb=[],p.__h.length&&a.push(p),l=eA(r);break e}null!=p.componentWillUpdate&&p.componentWillUpdate(b,p.__s,x),w&&null!=p.componentDidUpdate&&p.__h.push(function(){p.componentDidUpdate(h,f,g)})}if(p.context=x,p.props=b,p.__P=e,p.__e=!1,k=eo.__r,_=0,w)p.state=p.__s,p.__d=!1,k&&k(t),d=p.render(p.props,p.state,p.context),ey.push.apply(p.__h,p._sb),p._sb=[];else do p.__d=!1,k&&k(t),d=p.render(p.props,p.state,p.context),p.state=p.__s;while(p.__d&&++_<25)p.state=p.__s,null!=p.getChildContext&&(n=e_(e_({},n),p.getChildContext())),w&&!m&&null!=p.getSnapshotBeforeUpdate&&(g=p.getSnapshotBeforeUpdate(h,f)),N=null!=d&&d.type===eC&&null==d.key?function e(t){return"object"!=typeof t||null==t||t.__b>0?t:ek(t)?t.map(e):void 0!==t.constructor?null:e_({},t)}(d.props.children):d,l=eR(e,ek(N)?N:[N],t,r,n,i,o,a,l,s,c),p.base=t.__e,t.__u&=-161,p.__h.length&&a.push(p),v&&(p.__E=p.__=null)}catch(e){if(a.length=u,t.__v=null,s||null!=o){if(e.then){for(t.__u|=s?160:128;l&&8==l.nodeType&&l.nextSibling;)l=l.nextSibling;null!=o&&(o[o.indexOf(l)]=null),t.__e=l}else if(null!=o)for(S=o.length;S--;)eN(o[S])}else t.__e=r.__e;null==t.__k&&(t.__k=r.__k||[]),e.then||function e(t){t&&(t.__c&&(t.__c.__e=!0),t.__k&&t.__k.some(e))}(t),eo.__e(e,t,r)}}else null==o&&t.__v==r.__v?(t.__k=r.__k,t.__e=r.__e):l=t.__e=function(e,t,r,n,i,o,a,l,s){var c,d,u,p,m,h,f,g=r.props||ew,v=t.props,b=t.type;if("svg"==b?i="http://www.w3.org/2000/svg":"math"==b?i="http://www.w3.org/1998/Math/MathML":i||(i="http://www.w3.org/1999/xhtml"),null!=o){for(c=0;c<o.length;c++)if((m=o[c])&&"setAttribute"in m==!!b&&(b?m.localName==b:3==m.nodeType)){e=m,o[c]=null;break}}if(null==e){if(null==b)return document.createTextNode(v);e=document.createElementNS(i,b,v.is&&v),l&&(eo.__m&&eo.__m(t,o),l=!1),o=null}if(null==b)g===v||l&&e.data==v||(e.data=v);else{if(o="textarea"==b&&null!=v.defaultValue?null:o&&ei.call(e.childNodes),!l&&null!=o)for(g={},c=0;c<e.attributes.length;c++)g[(m=e.attributes[c]).name]=m.value;for(c in g)m=g[c],"dangerouslySetInnerHTML"==c?u=m:"children"==c||c in v||"value"==c&&"defaultValue"in v||"checked"==c&&"defaultChecked"in v||eF(e,c,null,m,i);for(c in v)m=v[c],"children"==c?p=m:"dangerouslySetInnerHTML"==c?d=m:"value"==c?h=m:"checked"==c?f=m:l&&"function"!=typeof m||g[c]===m||eF(e,c,m,g[c],i);if(d)l||u&&(d.__html==u.__html||d.__html==e.innerHTML)||(e.innerHTML=d.__html),t.__k=[];else if(u&&(e.innerHTML=""),eR("template"==t.type?e.content:e,ek(p)?p:[p],t,r,n,"foreignObject"==b?"http://www.w3.org/1999/xhtml":i,o,a,o?o[0]:r.__k&&eA(r,0),l,s),null!=o)for(c=o.length;c--;)eN(o[c]);l&&"textarea"!=b||(c="value","progress"==b&&null==h?e.removeAttribute("value"):null==h||h===e[c]&&("progress"!=b||h)&&("option"!=b||h==g[c])||eF(e,c,h,g[c],i),c="checked",null!=f&&f!=e[c]&&eF(e,c,f,g[c],i))}return e}(r.__e,t,r,n,i,o,a,s,c);return(d=eo.diffed)&&d(t),128&t.__u?void 0:l}function eL(e,t,r){for(var n=0;n<r.length;n++)eD(r[n],r[++n],r[++n]);eo.__c&&eo.__c(t,e),e.some(function(t){try{e=t.__h,t.__h=[],e.some(function(e){e.call(t)})}catch(e){eo.__e(e,t.__v)}})}function eD(e,t,r){try{if("function"==typeof e){var n="function"==typeof e.__u;n&&e.__u(),n&&null==t||(e.__u=e(t))}else e.current=t}catch(e){eo.__e(e,r)}}function eI(e,t,r){return this.constructor(e,r)}function eW(e,t,r){var n,i,o,a;t==document&&(t=document.documentElement),eo.__&&eo.__(e,t),i=(n="function"==typeof r)?null:r&&r.__k||t.__k,o=[],a=[],eP(t,e=(!n&&r||t).__k=eS(eC,null,[e]),i||ew,ew,t.namespaceURI,!n&&r?[r]:i?null:t.firstChild?ei.call(t.childNodes):null,o,!n&&r?r:i?i.__e:t.firstChild,n,a),eL(o,e,a),e.props.children=null}function eU(e){function t(e){var r,n;return this.getChildContext||(r=new Set,(n={})[t.__c]=this,this.getChildContext=function(){return n},this.componentWillUnmount=function(){r=null},this.shouldComponentUpdate=function(e){this.props.value!=e.value&&r.forEach(function(e){e.__e=!0,ez(e)})},this.sub=function(e){r.add(e);var t=e.componentWillUnmount;e.componentWillUnmount=function(){r&&r.delete(e),t&&t.call(e)}}),e.children}return t.__c="__cC"+eb++,t.__=e,t.Provider=t.__l=(t.Consumer=function(e,t){return e.children(t)}).contextType=t,t}ei=ey.slice,eo={__e:function(e,t,r,n){for(var i,o,a;t=t.__;)if((i=t.__c)&&!i.__)try{if((o=i.constructor)&&null!=o.getDerivedStateFromError&&(i.setState(o.getDerivedStateFromError(e)),a=i.__d),null!=i.componentDidCatch&&(i.componentDidCatch(e,n||{}),a=i.__d),a)return i.__E=i}catch(t){e=t}throw e}},ea=0,eT.prototype.setState=function(e,t){var r;r=null!=this.__s&&this.__s!=this.state?this.__s:this.__s=e_({},this.state),"function"==typeof e&&(e=e(e_({},r),this.props)),e&&e_(r,e),null!=e&&this.__v&&(t&&this._sb.push(t),ez(this))},eT.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),ez(this))},eT.prototype.render=eC,el=[],ec="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,ed=function(e,t){return e.__v.__b-t.__v.__b},eM.__r=0,ep="__d"+(eu=Math.random().toString(8)),em="__a"+eu,eh=/(PointerCapture)$|Capture$/i,ef=0,eg=eO(!1),ev=eO(!0),eb=0;var eH,eB,eV,eq,eG=0,eJ=[],eX=eo,eY=eX.__b,eK=eX.__r,eZ=eX.diffed,eQ=eX.__c,e0=eX.unmount,e1=eX.__;function e2(e,t){eX.__h&&eX.__h(eB,e,eG||t),eG=0;var r=eB.__H||(eB.__H={__:[],__h:[]});return e>=r.__.length&&r.__.push({}),r.__[e]}function e5(e){return eG=1,function(e,t){var r=e2(eH++,2);if(r.t=e,!r.__c&&(r.__=[to(void 0,t),function(e){var t=r.__N?r.__N[0]:r.__[0],n=r.t(t,e);t!==n&&(r.__N=[n,r.__[1]],r.__c.setState({}))}],r.__c=eB,!eB.__f)){var n=function(e,t,n){if(!r.__c.__H)return!0;var o=!1,a=r.__c.props!==e;if(r.__c.__H.__.some(function(e){if(e.__N){o=!0;var t=e.__[0];e.__=e.__N,e.__N=void 0,t!==e.__[0]&&(a=!0)}}),i){var l=i.call(this,e,t,n);return o?l||a:l}return!o||a};eB.__f=!0;var i=eB.shouldComponentUpdate,o=eB.componentWillUpdate;eB.componentWillUpdate=function(e,t,r){if(this.__e){var a=i;i=void 0,n(e,t,r),i=a}o&&o.call(this,e,t,r)},eB.shouldComponentUpdate=n}return r.__N||r.__}(to,e)}function e4(e,t){var r=e2(eH++,3);!eX.__s&&ti(r.__H,t)&&(r.__=e,r.u=t,eB.__H.__h.push(r))}function e3(e,t){var r=e2(eH++,4);!eX.__s&&ti(r.__H,t)&&(r.__=e,r.u=t,eB.__h.push(r))}function e7(e){return eG=5,e6(function(){return{current:e}},[])}function e6(e,t){var r=e2(eH++,7);return ti(r.__H,t)&&(r.__=e(),r.__H=t,r.__h=e),r.__}function e8(e,t){return eG=8,e6(function(){return e},t)}function e9(e){var t=eB.context[e.__c],r=e2(eH++,9);return r.c=e,t?(null==r.__&&(r.__=!0,t.sub(eB)),t.props.value):e.__}function te(){for(var e;e=eJ.shift();){var t=e.__H;if(e.__P&&t)try{t.__h.some(tr),t.__h.some(tn),t.__h=[]}catch(r){t.__h=[],eX.__e(r,e.__v)}}}eX.__b=function(e){eB=null,eY&&eY(e)},eX.__=function(e,t){e&&t.__k&&t.__k.__m&&(e.__m=t.__k.__m),e1&&e1(e,t)},eX.__r=function(e){eK&&eK(e),eH=0;var t=(eB=e.__c).__H;t&&(eV===eB?(t.__h=[],eB.__h=[],t.__.some(function(e){e.__N&&(e.__=e.__N),e.u=e.__N=void 0})):(t.__h.some(tr),t.__h.some(tn),t.__h=[],eH=0)),eV=eB},eX.diffed=function(e){eZ&&eZ(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(1!==eJ.push(t)&&eq===eX.requestAnimationFrame||((eq=eX.requestAnimationFrame)||function(e){var t,r=function(){clearTimeout(n),tt&&cancelAnimationFrame(t),setTimeout(e)},n=setTimeout(r,35);tt&&(t=requestAnimationFrame(r))})(te)),t.__H.__.some(function(e){e.u&&(e.__H=e.u,e.u=void 0)})),eV=eB=null},eX.__c=function(e,t){t.some(function(e){try{e.__h.some(tr),e.__h=e.__h.filter(function(e){return!e.__||tn(e)})}catch(r){t.some(function(e){e.__h&&(e.__h=[])}),t=[],eX.__e(r,e.__v)}}),eQ&&eQ(e,t)},eX.unmount=function(e){e0&&e0(e);var t,r=e.__c;r&&r.__H&&(r.__H.__.some(function(e){try{tr(e)}catch(e){t=e}}),r.__H=void 0,t&&eX.__e(t,r.__v))};var tt="function"==typeof requestAnimationFrame;function tr(e){var t=eB,r=e.__c;"function"==typeof r&&(e.__c=void 0,r()),eB=t}function tn(e){var t=eB;e.__c=e.__(),eB=t}function ti(e,t){return!e||e.length!==t.length||t.some(function(t,r){return t!==e[r]})}function to(e,t){return"function"==typeof t?t(e):t}var ta=Symbol.for("preact-signals");function tl(){if(tm>1)tm--;else{var e,t=!1,r=tv;for(tv=void 0;void 0!==r;){var n=r.S;if(n.v===r.v)for(var i=n.t;void 0!==i;i=i.x)i.i===r.i&&(i.i=n.i);r=r.o}for(;void 0!==tp;){var o=tp;for(tp=void 0,th++;void 0!==o;){var a=o.u;if(o.u=void 0,o.f&=-3,!(8&o.f)&&tk(o))try{o.c()}catch(r){t||(e=r,t=!0)}o=a}}if(th=0,tm--,t)throw e}}function ts(e){if(tm>0)return e();tg=++tf,tm++;try{return e()}finally{tl()}}var tc,td=void 0;function tu(e){var t=td,r=tc;td=void 0,tc=void 0;try{return e()}finally{td=t,tc=r}}var tp=void 0,tm=0,th=0,tf=0,tg=0,tv=void 0,tb=0;function tw(e){if(void 0!==td){var t=e.n;if(void 0===t||t.t!==td)return t={i:0,S:e,p:td.s,n:void 0,t:td,e:void 0,x:void 0,r:t},void 0!==td.s&&(td.s.n=t),td.s=t,e.n=t,32&td.f&&e.S(t),t;if(-1===t.i)return t.i=0,void 0!==t.n&&(t.n.p=t.p,void 0!==t.p&&(t.p.n=t.n),t.p=td.s,t.n=void 0,td.s.n=t,td.s=t),t}}function ty(e,t){this.v=e,this.i=0,this.n=void 0,this.t=void 0,this.l=0,this.W=null==t?void 0:t.watched,this.Z=null==t?void 0:t.unwatched,this.name=null==t?void 0:t.name}function tx(e,t){return new ty(e,t)}function tk(e){for(var t=e.s;void 0!==t;t=t.n)if(t.S.i!==t.i||!t.S.h()||t.S.i!==t.i)return!0;return!1}function t_(e){for(var t=e.s;void 0!==t;t=t.n){var r=t.S.n;if(void 0!==r&&(t.r=r),t.S.n=t,t.i=-1,void 0===t.n){e.s=t;break}}}function tN(e){for(var t=e.s,r=void 0;void 0!==t;){var n=t.p;-1===t.i?(t.S.U(t),void 0!==n&&(n.n=t.n),void 0!==t.n&&(t.n.p=n)):r=t,t.S.n=t.r,void 0!==t.r&&(t.r=void 0),t=n}e.s=r}function tS(e,t){ty.call(this,void 0,t),this.x=e,this.s=void 0,this.g=tb-1,this.f=4}function tE(e,t){return new tS(e,t)}function tC(e){var t=e.j;if(e.j=void 0,"function"==typeof t){tm++;var r=td;td=void 0;try{t()}catch(t){throw e.f&=-2,e.f|=8,tT(e),t}finally{td=r,tl()}}}function tT(e){for(var t=e.s;void 0!==t;t=t.n)t.S.U(t);e.x=void 0,e.s=void 0,tC(e)}function tA(e){if(td!==this)throw Error("Out-of-order effect");tN(this),td=e,this.f&=-2;try{8&this.f&&tT(this)}finally{tl()}}function tz(e,t){this.x=e,this.j=void 0,this.s=void 0,this.u=void 0,this.f=32,this.name=null==t?void 0:t.name,tc&&tc.push(this)}function tM(e,t){var r=new tz(e,t);try{r.c()}catch(e){throw r.d(),e}var n=r.d.bind(r);return n[Symbol.dispose]=n,n}ty.prototype.brand=ta,ty.prototype.h=function(){return!0},ty.prototype.S=function(e){var t=this,r=this.t;r!==e&&void 0===e.e&&(e.x=r,this.t=e,void 0!==r?r.e=e:tu(function(){var e;null==(e=t.W)||e.call(t)}))},ty.prototype.U=function(e){var t=this;if(void 0!==this.t){var r=e.e,n=e.x;void 0!==r&&(r.x=n,e.e=void 0),void 0!==n&&(n.e=r,e.x=void 0),e===this.t&&(this.t=n,void 0===n&&tu(function(){var e;null==(e=t.Z)||e.call(t)}))}},ty.prototype.subscribe=function(e){var t=this;return tM(function(){var r=t.value;tu(function(){return e(r)})},{name:"sub"})},ty.prototype.valueOf=function(){return this.value},ty.prototype.toString=function(){return this.value+""},ty.prototype.toJSON=function(){return this.value},ty.prototype.peek=function(){var e=this;return tu(function(){return e.value})},Object.defineProperty(ty.prototype,"value",{get:function(){var e=tw(this);return void 0!==e&&(e.i=this.i),this.v},set:function(e){if(e!==this.v){if(th>100)throw Error("Cycle detected");0!==tm&&0===th&&this.l!==tg&&(this.l=tg,tv={S:this,v:this.v,i:this.i,o:tv}),this.v=e,this.i++,tb++,tm++;try{for(var t=this.t;void 0!==t;t=t.x)t.t.N()}finally{tl()}}}}),tS.prototype=new ty,tS.prototype.h=function(){if(this.f&=-3,1&this.f)return!1;if(32==(36&this.f)||(this.f&=-5,this.g===tb))return!0;if(this.g=tb,this.f|=1,this.i>0&&!tk(this))return this.f&=-2,!0;var e=td;try{t_(this),td=this;var t=this.x();(16&this.f||this.v!==t||0===this.i)&&(this.v=t,this.f&=-17,this.i++)}catch(e){this.v=e,this.f|=16,this.i++}return td=e,tN(this),this.f&=-2,!0},tS.prototype.S=function(e){if(void 0===this.t){this.f|=36;for(var t=this.s;void 0!==t;t=t.n)t.S.S(t)}ty.prototype.S.call(this,e)},tS.prototype.U=function(e){if(void 0!==this.t&&(ty.prototype.U.call(this,e),void 0===this.t)){this.f&=-33;for(var t=this.s;void 0!==t;t=t.n)t.S.U(t)}},tS.prototype.N=function(){if(!(2&this.f)){this.f|=6;for(var e=this.t;void 0!==e;e=e.x)e.t.N()}},Object.defineProperty(tS.prototype,"value",{get:function(){if(1&this.f)throw Error("Cycle detected");var e=tw(this);if(this.h(),void 0!==e&&(e.i=this.i),16&this.f)throw this.v;return this.v}}),tz.prototype.c=function(){var e=this.S();try{if(8&this.f||void 0===this.x)return;var t=this.x();"function"==typeof t&&(this.j=t)}finally{e()}},tz.prototype.S=function(){if(1&this.f)throw Error("Cycle detected");this.f|=1,this.f&=-9,tC(this),t_(this),tm++;var e=td;return td=this,tA.bind(this,e)},tz.prototype.N=function(){2&this.f||(this.f|=2,this.u=tp,tp=this)},tz.prototype.d=function(){this.f|=8,1&this.f||tT(this)},tz.prototype.dispose=function(){this.d()};var tR,t$,tj,tF="u">typeof window&&!!window.__PREACT_SIGNALS_DEVTOOLS__,tO=[],tP=[];function tL(e,t){eo[e]=t.bind(null,eo[e]||function(){})}function tD(e){if(tj){var t=tj;tj=void 0,t()}tj=e&&e.S()}function tI(e){var t=this,r=e.data,n=tW(r);n.name="ReactiveDom",n.value=r;var i=e6(function(){for(var e=t.__v;e=e.__;)if(e.__c){e.__c.__$f|=4;break}var r=tE(function(){var e=n.value.value;return 0===e?0:!0===e?"":e||""}),i=tE(function(){var e;return!Array.isArray(r.value)&&(null==(e=r.value)||void 0!==e.constructor)}),o=tM(function(){if(this.N=tG,i.value){var e=r.value;t.__v&&t.__v.__e&&3===t.__v.__e.nodeType&&(t.__v.__e.data=e)}}),a=t.__$u.d;return t.__$u.d=function(){o(),a.call(this)},[i,r]},[]),o=i[0],a=i[1];return o.value?a.peek():a.value}function tW(e,t){return e6(function(){return tx(e,t)},[])}tM(function(){tR=this.N})(),tI.displayName="ReactiveTextNode",Object.defineProperties(ty.prototype,{constructor:{configurable:!0,value:eS(eC,null).constructor},type:{configurable:!0,value:tI},props:{configurable:!0,get:function(){var e=this;return{data:{get value(){return e.value}}}}},__b:{configurable:!0,value:1}}),tL("__b",function(e,t){if(tD(),t$=void 0,"string"==typeof t.type){var r,n=t.props;for(var i in n)if("children"!==i){var o=n[i];o instanceof ty&&(r||(t.__np=r={}),r[i]=o,n[i]=o.peek())}}e(t)}),tL("__r",function(e,t){if(e(t),t.type!==eC){tD();var r,n,i=t.__c;i&&(i.__$f&=-2,void 0===(n=i.__$u)&&(tM(function(){r=this},{name:"function"==typeof t.type?t.type.displayName||t.type.name:""}),r.c=function(){var e;tF&&(null==(e=this.y)||e.call(this)),i.__$f|=1,i.setState({})},i.__$u=n=r)),t$=i,tD(n)}}),tL("__e",function(e,t,r,n){tD(),t$=void 0,e(t,r,n)}),tL("diffed",function(e,t){if(tD(),t$=void 0,"string"==typeof t.type&&(r=t.__e)){var r,n=t.__np,i=t.props,o=r.U;if(o)for(var a in o){var l=o[a];void 0===l||n&&a in n||(l.d(),o[a]=void 0)}if(n)for(var s in o||(o={},r.U=o),n){var c=o[s],d=n[s];void 0===c?(c=function(e,t,r,n){var i=t in e&&void 0===e.ownerSVGElement,o=tx(r);return{o:function(e,t){o.value=e,n=t},d:tM(function(){this.N=tG;var r=o.value.value;n[t]!==r&&(n[t]=r,i?e[t]=r:null!=r&&(!1!==r||"-"===t[4])?e.setAttribute(t,r):e.removeAttribute(t))})}}(r,s,d,i),o[s]=c):c.o(d,i)}}e(t)}),tL("unmount",function(e,t){if("string"==typeof t.type){var r=t.__e;if(r){var n=r.U;if(n)for(var i in r.U=void 0,n){var o=n[i];o&&o.d()}}var a=t.__np;if(a){var l=t.props;for(var s in a)l[s]=a[s]}t.__np=void 0}else{var c=t.__c;if(c){c.__$f|=8;var d=c.__$u;d&&(c.__$u=void 0,d.d())}}e(t)}),tL("__h",function(e,t,r,n){n<3&&(t.__$f|=2),e(t,r,n)}),eT.prototype.shouldComponentUpdate=function(e,t){if(this.__R)return!0;var r=this.__$u,n=r&&void 0!==r.s;for(var i in t)return!0;if(this.__f||"boolean"==typeof this.u&&!0===this.u){var o=2&this.__$f;if(!(n||o||4&this.__$f)||1&this.__$f)return!0}else if(!(n||4&this.__$f)||3&this.__$f)return!0;for(var a in e)if("__source"!==a&&e[a]!==this.props[a])return!0;for(var l in this.props)if(!(l in e))return!0;return!1};var tU="u"<typeof requestAnimationFrame?setTimeout:function(e){var t=function(){clearTimeout(r),cancelAnimationFrame(n),e()},r=setTimeout(t,35),n=requestAnimationFrame(t)},tH=function(e){queueMicrotask(function(){queueMicrotask(e)})};function tB(){ts(function(){for(var e;e=tO.shift();)tR.call(e)})}function tV(){1===tO.push(this)&&(eo.requestAnimationFrame||tU)(tB)}function tq(){ts(function(){for(var e;e=tP.shift();)tR.call(e)})}function tG(){1===tP.push(this)&&(eo.requestAnimationFrame||tH)(tq)}function tJ(e,t){var r=e7(e);r.current=e;var n=t$;e4(function(){return tM(function(){if(this.N=tV,!(n&&8&n.__$f))return r.current()},t)},[])}function tX(e,t){for(var r in t)e[r]=t[r];return e}function tY(e,t){for(var r in e)if("__source"!==r&&!(r in t))return!0;for(var n in t)if("__source"!==n&&e[n]!==t[n])return!0;return!1}function tK(e){var t,r;try{return((t=e.__)!==(r=e.u())||0===t&&1/t!=1/r)&&(t==t||r==r)}catch(e){return!0}}function tZ(e,t){this.props=e,this.context=t}function tQ(e,t){function r(e){var r=this.props.ref;return r!=e.ref&&r&&("function"==typeof r?r(null):r.current=null),t?!t(this.props,e)||r!=e.ref:tY(this.props,e)}function n(t){return this.shouldComponentUpdate=r,eS(e,t)}return n.displayName="Memo("+(e.displayName||e.name)+")",n.__f=n.prototype.isReactComponent=!0,n.type=e,n}(tZ.prototype=new eT).isPureReactComponent=!0,tZ.prototype.shouldComponentUpdate=function(e,t){return tY(this.props,e)||tY(this.state,t)};var t0=eo.__b;eo.__b=function(e){e.type&&e.type.__f&&e.ref&&(e.props.ref=e.ref,e.ref=null),t0&&t0(e)};var t1="u">typeof Symbol&&Symbol.for&&Symbol.for("react.forward_ref")||3911;function t2(e){function t(t){var r=tX({},t);return delete r.ref,e(r,t.ref||null)}return t.$$typeof=t1,t.render=e,t.prototype.isReactComponent=t.__f=!0,t.displayName="ForwardRef("+(e.displayName||e.name)+")",t}var t5=eo.__e;eo.__e=function(e,t,r,n){if(e.then){for(var i,o=t;o=o.__;)if((i=o.__c)&&i.__c)return null==t.__e&&(t.__e=r.__e,t.__k=r.__k||[]),i.__c(e,t)}t5(e,t,r,n)};var t4=eo.unmount;function t3(){this.__u=0,this.o=null,this.__b=null}function t7(e){var t=e.__&&e.__.__c;return t&&t.__a&&t.__a(e)}function t6(){this.i=null,this.l=null}eo.unmount=function(e){var t=e.__c;t&&(t.__z=!0),t&&t.__R&&t.__R(),t&&32&e.__u&&(e.type=null),t4&&t4(e)},(t3.prototype=new eT).__c=function(e,t){var r=t.__c,n=this;null==n.o&&(n.o=[]),n.o.push(r);var i=t7(n.__v),o=!1,a=function(){o||n.__z||(o=!0,r.__R=null,i?i(s):s())};r.__R=a;var l=r.__P;r.__P=null;var s=function(){if(!--n.__u){if(n.state.__a){var e,t=n.state.__a;n.__v.__k[0]=function e(t,r,n){return t&&n&&(t.__v=null,t.__k=t.__k&&t.__k.map(function(t){return e(t,r,n)}),t.__c&&t.__c.__P===r&&(t.__e&&n.appendChild(t.__e),t.__c.__e=!0,t.__c.__P=n)),t}(t,t.__c.__P,t.__c.__O)}for(n.setState({__a:n.__b=null});e=n.o.pop();)e.__P=l,e.forceUpdate()}};n.__u++||32&t.__u||n.setState({__a:n.__b=n.__v.__k[0]}),e.then(a,a)},t3.prototype.componentWillUnmount=function(){this.o=[]},t3.prototype.render=function(e,t){if(this.__b){if(this.__v.__k){var r=document.createElement("div"),n=this.__v.__k[0].__c;this.__v.__k[0]=function e(t,r,n){return t&&(t.__c&&t.__c.__H&&(t.__c.__H.__.forEach(function(e){"function"==typeof e.__c&&e.__c()}),t.__c.__H=null),null!=(t=tX({},t)).__c&&(t.__c.__P===n&&(t.__c.__P=r),t.__c.__e=!0,t.__c=null),t.__k=t.__k&&t.__k.map(function(t){return e(t,r,n)})),t}(this.__b,r,n.__O=n.__P)}this.__b=null}var i=t.__a&&eS(eC,null,e.fallback);return i&&(i.__u&=-33),[eS(eC,null,t.__a?null:e.children),i]};var t8=function(e,t,r){if(++r[1]===r[0]&&e.l.delete(t),e.props.revealOrder&&("t"!==e.props.revealOrder[0]||!e.l.size))for(r=e.i;r;){for(;r.length>3;)r.pop()();if(r[1]<r[0])break;e.i=r=r[2]}};function t9(e){return this.getChildContext=function(){return e.context},e.children}function re(e){var t=this,r=e.h;if(t.componentWillUnmount=function(){eW(null,t.v),t.v=null,t.h=null},t.h&&t.h!==r&&t.componentWillUnmount(),!t.v){for(var n=t.__v;null!==n&&!n.__m&&null!==n.__;)n=n.__;t.h=r,t.v={nodeType:1,parentNode:r,childNodes:[],__k:{__m:n.__m},contains:function(){return!0},namespaceURI:r.namespaceURI,insertBefore:function(e,r){this.childNodes.push(e),t.h.insertBefore(e,r)},removeChild:function(e){this.childNodes.splice(this.childNodes.indexOf(e)>>>1,1),t.h.removeChild(e)}}}eW(eS(t9,{context:t.context},e.__v),t.v)}(t6.prototype=new eT).__a=function(e){var t=this,r=t7(t.__v),n=t.l.get(e);return n[0]++,function(i){var o=function(){t.props.revealOrder?(n.push(i),t8(t,e,n)):i()};r?r(o):o()}},t6.prototype.render=function(e){this.i=null,this.l=new Map;var t=e$(e.children);e.revealOrder&&"b"===e.revealOrder[0]&&t.reverse();for(var r=t.length;r--;)this.l.set(t[r],this.i=[1,0,this.i]);return e.children},t6.prototype.componentDidUpdate=t6.prototype.componentDidMount=function(){var e=this;this.l.forEach(function(t,r){t8(e,r,t)})};var rt="u">typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,rr=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,rn=/^on(Ani|Tra|Tou|BeforeInp|Compo)/,ri=/[A-Z0-9]/g,ro="u">typeof document;eT.prototype.isReactComponent=!0,["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(e){Object.defineProperty(eT.prototype,e,{configurable:!0,get:function(){return this["UNSAFE_"+e]},set:function(t){Object.defineProperty(this,e,{configurable:!0,writable:!0,value:t})}})});var ra=eo.event;eo.event=function(e){return ra&&(e=ra(e)),e.persist=function(){},e.isPropagationStopped=function(){return this.cancelBubble},e.isDefaultPrevented=function(){return this.defaultPrevented},e.nativeEvent=e};var rl={configurable:!0,get:function(){return this.class}},rs=eo.vnode;eo.vnode=function(e){"string"==typeof e.type&&function(e){var t=e.props,r=e.type,n={},i=-1==r.indexOf("-");for(var o in t){var a=t[o];if(!("value"===o&&"defaultValue"in t&&null==a||ro&&"children"===o&&"noscript"===r||"class"===o||"className"===o)){var l,s=o.toLowerCase();"defaultValue"===o&&"value"in t&&null==t.value?o="value":"download"===o&&!0===a?a="":"translate"===s&&"no"===a?a=!1:"o"===s[0]&&"n"===s[1]?"ondoubleclick"===s?o="ondblclick":"onchange"!==s||"input"!==r&&"textarea"!==r||(l=t.type,("u">typeof Symbol&&"symbol"==typeof Symbol()?/fil|che|rad/:/fil|che|ra/).test(l))?"onfocus"===s?o="onfocusin":"onblur"===s?o="onfocusout":rn.test(o)&&(o=s):s=o="oninput":i&&rr.test(o)?o=o.replace(ri,"-$&").toLowerCase():null===a&&(a=void 0),"oninput"===s&&n[o=s]&&(o="oninputCapture"),n[o]=a}}"select"==r&&(n.multiple&&Array.isArray(n.value)&&(n.value=e$(t.children).forEach(function(e){e.props.selected=-1!=n.value.indexOf(e.props.value)})),null!=n.defaultValue&&(n.value=e$(t.children).forEach(function(e){e.props.selected=n.multiple?-1!=n.defaultValue.indexOf(e.props.value):n.defaultValue==e.props.value}))),t.class&&!t.className?(n.class=t.class,Object.defineProperty(n,"className",rl)):t.className&&(n.class=n.className=t.className),e.props=n}(e),e.$$typeof=rt,rs&&rs(e)};var rc=eo.__r;eo.__r=function(e){rc&&rc(e),e.__c};var rd=eo.diffed;eo.diffed=function(e){rd&&rd(e);var t=e.props,r=e.__e;null!=r&&"textarea"===e.type&&"value"in t&&t.value!==r.value&&(r.value=null==t.value?"":t.value)};var ru=0;function rp(e,t,r,n,i,o){t||(t={});var a,l,s=t;if("ref"in s)for(l in s={},t)"ref"==l?a=t[l]:s[l]=t[l];var c={type:e,props:s,key:r,ref:a,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--ru,__i:-1,__u:0,__source:i,__self:o};if("function"==typeof e&&(a=e.defaultProps))for(l in a)void 0===s[l]&&(s[l]=a[l]);return eo.vnode&&eo.vnode(c),c}let rm=null,rh=(()=>{if(null!==rm)return rm;try{rm=window.matchMedia("(color-gamut: p3)").matches}catch{rm=!1}return rm})(),rf=e=>rh?`color(display-p3 0.84 0.19 0.78 / ${e})`:`rgba(210, 57, 192, ${e})`,rg=["/components/ui/","/packages/ui/","/design-system/","/design-systems/","/primitives/"],rv=8e3,rb=1e4,rw=(rf(.4),rf(.05),rf(.5),rf(.08),rf(.15),["id","class","aria-label","data-testid","role","name","title"]),ry=new Set(["id","data-testid","aria-label","href","src","alt","type","name","placeholder","role","for","action","method","title","disabled","checked","readonly","required","selected","open"]),rx=new Set(["a","button","code","label","option","pre","summary","text"]),rk=new Set(["script","style","template","noscript"]),r_="data-react-grab-frozen",rN=new Set("display.position.top.right.bottom.left.z-index.overflow.overflow-x.overflow-y.width.height.min-width.min-height.max-width.max-height.margin-top.margin-right.margin-bottom.margin-left.padding-top.padding-right.padding-bottom.padding-left.flex-direction.flex-wrap.justify-content.align-items.align-self.align-content.flex-grow.flex-shrink.flex-basis.order.gap.row-gap.column-gap.grid-template-columns.grid-template-rows.grid-template-areas.font-family.font-size.font-weight.font-style.line-height.letter-spacing.text-align.text-decoration-line.text-decoration-style.text-transform.text-overflow.text-shadow.white-space.word-break.overflow-wrap.vertical-align.color.background-color.background-image.background-position.background-size.background-repeat.border-top-width.border-right-width.border-bottom-width.border-left-width.border-top-style.border-right-style.border-bottom-style.border-left-style.border-top-color.border-right-color.border-bottom-color.border-left-color.border-top-left-radius.border-top-right-radius.border-bottom-left-radius.border-bottom-right-radius.box-shadow.opacity.transform.filter.backdrop-filter.object-fit.object-position".split(".")),rS=e=>"object"==typeof e&&!!e&&"nodeType"in e&&e.nodeType===Node.ELEMENT_NODE,rE=new WeakMap,rC=e=>{if(!e)return null;try{return e.frameElement}catch{return null}},rT="bippy-0.6.1",rA=Object.defineProperty,rz=Object.prototype.hasOwnProperty,rM=()=>{},rR=e=>{try{Function.prototype.toString.call(e).indexOf("^_^")>-1&&setTimeout(()=>{throw Error("React is running in production mode, but dead code elimination has not been applied. Read how to correctly configure React for production: https://reactjs.org/link/perf-use-production-build")})}catch{}},r$=(e=globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__)=>!!(e&&"getFiberRoots"in e),rj=!1,rF,rO=(e=globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__)=>!!rj||(e&&"function"==typeof e.inject&&(rF=e.inject.toString()),!!rF?.includes("(injected)")),rP=new Set,rL=new Set,rD=e=>{e&&rP.add(e);try{let t=globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!t)return;if(!t._instrumentationSource){t.checkDCE=rR,t.supportsFiber=!0,t.supportsFlight=!0,t.hasUnsupportedRendererAttached=!1,t._instrumentationSource=rT,t._instrumentationIsActive=!1;let e=r$(t);if(e||(t.on=rM),t.renderers.size){t._instrumentationIsActive=!0,rP.forEach(e=>e());return}let r=t.inject,n=rO(t);n&&!e&&(rj=!0,t.inject({scheduleRefresh(){}})&&(t._instrumentationIsActive=!0)),t.inject=e=>{let i=r(e);return rL.add(e),n&&t.renderers.set(i,e),t._instrumentationIsActive=!0,rP.forEach(e=>e()),i}}(t.renderers.size||t._instrumentationIsActive||rO())&&e?.()}catch{}},rI=e=>rz.call(globalThis,"__REACT_DEVTOOLS_GLOBAL_HOOK__")?(rD(e),globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__):(e=>{e&&rP.add(e);let t=new Map,r=0,n={_instrumentationIsActive:!1,_instrumentationSource:rT,checkDCE:rR,hasUnsupportedRendererAttached:!1,inject(e){let i=++r;return t.set(i,e),rL.add(e),n._instrumentationIsActive||(n._instrumentationIsActive=!0,rP.forEach(e=>e())),i},on:rM,onCommitFiberRoot:rM,onCommitFiberUnmount:rM,onPostCommitFiberRoot:rM,renderers:t,supportsFiber:!0,supportsFlight:!0};try{rA(globalThis,"__REACT_DEVTOOLS_GLOBAL_HOOK__",{configurable:!0,enumerable:!0,get:()=>n,set(t){if(t&&"object"==typeof t){let r=n.renderers;n=t,r.size>0&&(r.forEach((e,r)=>{rL.add(e),t.renderers.set(r,e)}),rD(e))}}});let t=window.hasOwnProperty,r=!1;rA(window,"hasOwnProperty",{configurable:!0,value:function(...e){try{if(!r&&"__REACT_DEVTOOLS_GLOBAL_HOOK__"===e[0])return globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__=void 0,r=!0,-0}catch{}return t.apply(this,e)},writable:!0})}catch{rD(e)}return n})(e);try{"u">typeof window&&(window.document?.createElement||window.navigator?.product==="ReactNative")&&rI()}catch{}let rW=e=>{switch(e.tag){case 1:case 11:case 0:case 14:case 15:return!0;default:return!1}};function rU(e,t,r=!1){if(!e)return null;let n=t(e);if(n instanceof Promise)return(async()=>{if(await n===!0)return e;let i=r?e.return:e.child;for(;i;){let e=await rB(i,t,r);if(e)return e;i=r?null:i.sibling}return null})();if(!0===n)return e;let i=r?e.return:e.child;for(;i;){let e=rH(i,t,r);if(e)return e;i=r?null:i.sibling}return null}let rH=(e,t,r=!1)=>{if(!e)return null;if(!0===t(e))return e;let n=r?e.return:e.child;for(;n;){let e=rH(n,t,r);if(e)return e;n=r?null:n.sibling}return null},rB=async(e,t,r=!1)=>{if(!e)return null;if(await t(e)===!0)return e;let n=r?e.return:e.child;for(;n;){let e=await rB(n,t,r);if(e)return e;n=r?null:n.sibling}return null},rV=e=>"function"==typeof e?e:"object"==typeof e&&e?rV(e.type||e.render):null,rq=e=>{if("string"==typeof e)return e;if("function"!=typeof e&&!("object"==typeof e&&e))return null;let t=e.displayName||e.name||null;if(t)return t;let r=rV(e);return r&&(r.displayName||r.name)||null},rG=()=>{let e=globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__;return!!e?._instrumentationIsActive||r$(e)||rO(e)},rJ=new Set,rX=e=>{let t=e.alternate;if(!t)return e;if(t.actualStartTime&&e.actualStartTime)return t.actualStartTime>e.actualStartTime?t:e;for(let t of rJ){let r=rU(t.current,t=>{if(t===e)return!0});if(r)return r}return e},rY=new WeakMap,rK=e=>{if(!rz.call(globalThis,"__REACT_DEVTOOLS_GLOBAL_HOOK__"))return null;let t=e;for(;t.return;)t=t.return;let r=r5.get(t.stateNode);return void 0===r?null:rI().renderers?.get(r)??null},rZ=new Set,rQ=new Set,r0=new Set,r1=new Set,r2=new WeakMap,r5=new WeakMap,r4=e=>{let t,r=rI(e.onActive);r._instrumentationSource=e.name??rT,(e=>{let t=r2.get(e)??{};if(r2.set(e,t),!t.onCommitFiberRoot||e.onCommitFiberRoot!==t.onCommitFiberRoot){let r=e.onCommitFiberRoot,n=(t,i,o)=>{if(r?.(t,i,o),r2.get(e)?.onCommitFiberRoot===n)for(let e of(rJ.add(i),r5.set(i,t),rZ))e(t,i,o)};t.onCommitFiberRoot=n,e.onCommitFiberRoot=n}if(!t.onCommitFiberUnmount||e.onCommitFiberUnmount!==t.onCommitFiberUnmount){let r=e.onCommitFiberUnmount,n=(t,i)=>{if(r?.(t,i),r2.get(e)?.onCommitFiberUnmount===n)for(let e of rQ)e(t,i)};t.onCommitFiberUnmount=n,e.onCommitFiberUnmount=n}if(!t.onPostCommitFiberRoot||e.onPostCommitFiberRoot!==t.onPostCommitFiberRoot){let r=e.onPostCommitFiberRoot,n=(t,i)=>{if(r?.(t,i),r2.get(e)?.onPostCommitFiberRoot===n)for(let e of r0)e(t,i)};t.onPostCommitFiberRoot=n,e.onPostCommitFiberRoot=n}if(!t.onScheduleFiberRoot||e.onScheduleFiberRoot!==t.onScheduleFiberRoot){let r=e.onScheduleFiberRoot,n=(t,i,o)=>{if(r?.(t,i,o),r2.get(e)?.onScheduleFiberRoot===n)for(let e of r1)e(t,i,o)};t.onScheduleFiberRoot=n,e.onScheduleFiberRoot=n}})(r);let{onActive:n,onCommitFiberRoot:i,onCommitFiberUnmount:o,onPostCommitFiberRoot:a,onScheduleFiberRoot:l}=e;return i&&rZ.add(i),o&&rQ.add(o),a&&r0.add(a),l&&r1.add(l),Object.assign(t=()=>{n&&rP.delete(n),i&&rZ.delete(i),o&&rQ.delete(o),a&&r0.delete(a),l&&r1.delete(l)},{[Symbol.dispose]:t})},r3=new Set,r7=e=>e.startsWith("__reactContainer$")||e.startsWith("__reactInternalInstance$")||e.startsWith("__reactFiber"),r6=new WeakMap,r8=e=>r6.get(e)??null,r9=e=>r8(e)?.getFiber()??(e=>{let t=globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__;if(t?.renderers)for(let r of t.renderers.values())try{let t=r.findFiberByHostInstance?.(e);if(t)return t}catch{}if("object"==typeof e&&e){if("_reactRootContainer"in e)return e._reactRootContainer?._internalRoot?.current?.child;let t=e.__internalInstanceHandle??e._internalInstanceHandle;if(t&&"object"==typeof t&&"pendingProps"in t&&!("containerInfo"in t))return t;for(let t of r3){let r=e[t];if(r)return r}for(let t of Object.keys(e))if(r7(t))return r3.add(t),e[t]||null;for(let t of rJ){if(rK(t.current)?.findFiberByHostInstance)continue;let r=rU(t.current,t=>t.stateNode===e);if(r)return r}}return null})(e);new WeakMap,new WeakMap;let ne=e=>{let t=e.ownerDocument?.defaultView;return!!(t&&e instanceof t.ShadowRoot)};var nt=class extends Error{constructor(e,t){super(e,t),this.name="ReactGrabError"}},nr=class extends nt{constructor(){super("Can't generate CSS selector for non-element node type."),this.name="NonElementNodeError"}},nn=class extends nt{constructor(e){super(`Timeout: Can't find a unique selector after ${e}ms`),this.name="SelectorTimeoutError",this.timeoutMs=e}},ni=class extends nt{constructor(){super("Selector was not found."),this.name="SelectorNotFoundError"}};let no=e=>r8(e)?.getTagName()??(e.tagName||"").toLowerCase(),na=(new WeakMap,e=>"object"==typeof e&&!!e&&"nodeType"in e&&9===e.nodeType),nl=e=>{if(e.assignedSlot)return e.assignedSlot;if(e.parentElement)return e.parentElement;let t=e.getRootNode();return ne(t)?t.host:na(t)?rC(t.defaultView):null},ns="u">typeof window,nc=ns?(Object.getOwnPropertyDescriptor(Window.prototype,"requestAnimationFrame")?.value??window.requestAnimationFrame).bind(window):e=>0,nd=ns?(Object.getOwnPropertyDescriptor(Window.prototype,"cancelAnimationFrame")?.value??window.cancelAnimationFrame).bind(window):e=>{},nu="u">typeof Element&&"function"==typeof Element.prototype.checkVisibility,np={checkOpacity:!0,checkVisibilityCSS:!0,opacityProperty:!0,visibilityProperty:!0},nm={checkVisibilityCSS:!0,visibilityProperty:!0},nh=new WeakMap,nf=new Set(["A","AUDIO","BUTTON","CANVAS","DETAILS","EMBED","IFRAME","IMG","INPUT","METER","OBJECT","OPTION","PROGRESS","SELECT","SUMMARY","SVG","TEXTAREA","VIDEO"]),ng=new Set(["button","checkbox","combobox","gridcell","link","listbox","menuitem","menuitemcheckbox","menuitemradio","option","radio","scrollbar","searchbox","slider","spinbutton","switch","tab","textbox","treeitem"]),nv=new Set("A.ABBR.B.BDI.BDO.BR.CITE.CODE.DATA.DEL.DFN.EM.I.INS.KBD.MARK.Q.S.SAMP.SMALL.SPAN.STRONG.SUB.SUP.TIME.U.VAR.WBR".split(".")),nb=new WeakMap,nw=new WeakMap,ny=(e,t)=>{if(0!==e.length)throw 1===e.length?e[0]:AggregateError(e,t)},nx=new Set,nk=new Set;new WeakMap,new WeakMap;let n_=new WeakMap,nN=new WeakMap,nS=new WeakMap,nE=e=>"object"==typeof e&&!!e,nC=(e,t)=>"function"==typeof e[t],nT=e=>{var t,r,n;let i,o,a,l,s;return nE(e)&&nE(t=e.gl)&&nE(i=t.domElement)&&"string"==typeof i.tagName&&"canvas"===i.tagName.toLowerCase()&&nC(i,"getContext")&&nE(n=r=e.scene)&&!0===n.isObject3D&&"string"==typeof n.uuid&&"string"==typeof n.name&&"string"==typeof n.type&&"boolean"==typeof n.visible&&nE(o=n.matrixWorld)&&nC(o,"clone")&&nC(o,"premultiply")&&nC(n,"updateWorldMatrix")&&!0===r.isScene&&Array.isArray(r.children)&&nE(a=e.camera)&&!0===a.isCamera&&nE(l=e.raycaster)&&nC(l,"setFromCamera")&&nC(l,"intersectObjects")&&nE(s=e.pointer)&&nC(s,"set")},nA=e=>nE(e)&&"number"==typeof e.elapsedTime,nz=(e,t)=>{let r=e.getState();if("function"!=typeof r.setFrameloop)return;let n=nA(r.clock)?r.clock.elapsedTime:null;r.setFrameloop(t);let i=e.getState().clock;null!==n&&nA(i)&&(i.elapsedTime=n)},nM=e=>{var t;let r,n=nS.get(e);n&&(nS.delete(e),n_.get(n.canvas)===n.root&&(n_.delete(n.canvas),t=n.canvas,(r=nN.get(t))&&(nN.delete(t),r())))};r4({name:"react-grab-three-selection",onCommitFiberRoot:(e,t)=>(e=>{let t=(e=>{let t,r=e.current.stateNode;if(!nE(r)||!("object"==typeof(t=r.containerInfo)&&t||"function"==typeof t))return null;let n=r.containerInfo,i=Reflect.get(n,"getState");if("function"!=typeof i)return null;let o=Reflect.apply(i,n,[]);return nT(o)?()=>{let e=Reflect.apply(i,n,[]);return nT(e)?e:o}:null})(e);if(!t)return void nM(e);let r=t().gl.domElement;if(!r.isConnected||!e.current.child)return void nM(e);let n=nS.get(e);n&&n.canvas!==r&&(nM(e),n=void 0),n?(n.root.getState=t,n.root.selectableObjects=null):(n={canvas:r,root:{getState:t,selectableObjects:null}},nS.set(e,n)),n_.set(r,n.root),(e=>{var t;if(nN.has(e))return;let r=null,n=(t={freeze:()=>{let t,n=n_.get(e);if(!n)return;let i=n.getState();if(("always"===(t=i.frameloop)||"demand"===t||"never"===t)&&"function"==typeof i.setFrameloop){let e=i.frameloop;nz(n,"never"),r=()=>nz(n,e)}},isConnected:()=>e.isConnected,unfreeze:()=>{r?.(),r=null}},nx.add(t),()=>{let e=[];((e,t)=>{if(nk.has(e))try{e.unfreeze()}catch(e){t.push(e)}finally{nk.delete(e)}})(t,e),nx.delete(t),ny(e,"Unregistering renderer freeze failed")});nN.set(e,n)})(r)})(t)});let nR=null,n$=!1,nj=new Map,nF=new WeakSet,nO=new WeakSet,nP=new WeakMap,nL=new Map,nD=new Map;"u">typeof window&&(window.requestAnimationFrame=e=>((e=>{if(nR===e&&(n$=!0),nF.has(e))return;if(nR===e){let t=(nP.get(e)??0)+1;return nP.set(e,t),!(t<4)&&nF.add(e)}return})(e),nc(t=>{let r=nR,n=n$;nR=e,n$=!1;try{e(t)}finally{let t=n$;nR=r,n$=n,t||nO.has(e)||(nF.delete(e),nP.delete(e))}})),window.cancelAnimationFrame=e=>{if(nj.has(e))return void nj.delete(e);let t=nD.get(e);if(void 0!==t){nd(t.nativeId),nD.delete(e);return}let r=nL.get(e);if(void 0!==r){nj.delete(r),nL.delete(e);return}nd(e)});new WeakMap,new WeakMap,new WeakMap,new WeakMap,new WeakMap,new WeakSet;let nI=new WeakMap;r4({name:"react-grab-freeze-updates",onCommitFiberRoot:(e,t)=>{let r=rI().renderers.get(e);r&&nI.set(t,r)}});let nW=/^[a-zA-Z][a-zA-Z\d+\-.]*:/,nU=["rsc://","file:///","webpack-internal://","webpack://","node:","turbopack://","metro://","/app-pages-browser/","/(app-pages-browser)/"],nH=["rsc://","about://React/"],nB=["<anonymous>","eval",""],nV=/\.(jsx|tsx|ts|js)$/,nq=/(\.min|bundle|chunk|vendor|vendors|runtime|polyfill|polyfills)\.(js|mjs|cjs)$|(chunk|bundle|vendor|vendors|runtime|polyfill|polyfills|framework|app|main|index)[-_.][A-Za-z0-9_-]{4,}\.(js|mjs|cjs)$|[\da-f]{8,}\.(js|mjs|cjs)$|[-_.][\da-f]{20,}\.(js|mjs|cjs)$|\/dist\/|\/build\/|\/.next\/|\/out\/|\/node_modules\/|\.webpack\.|\.vite\.|\.turbopack\./i,nG=/^\?[\w~.-]+(?:=[^&#]*)?(?:&[\w~.-]+(?:=[^&#]*)?)*$/,nJ=/\(at [^)]+\)$/,nX=["react_stack_bottom_frame","react-stack-bottom-frame"],nY=/(^|@)\S+:\d+/,nK=/^\s*at .*(\S+:\d+|\(native\))/m,nZ=/^(eval@)?(\[native code\])?$/,nQ=(e,t)=>{if(t?.includeInElement!==!1){let r=e.split(`
`),n=[];for(let e of r)if(/^\s*at\s+/.test(e)){let t=n2(e,void 0)[0];t&&n.push(t)}else if(/^\s*in\s+/.test(e)){let t=e.replace(/^\s*in\s+/,"").replace(/\s*\(at .*\)$/,"");n.push({functionName:t,source:e})}else if(e.match(nY)){let t=n5(e,void 0)[0];t&&n.push(t)}return n1(n,t)}return e.match(nK)?n2(e,t):n5(e,t)},n0=e=>{if(!e.includes(":"))return[e,void 0,void 0];let t=e.startsWith("(")&&/:\d+\)$/.test(e)?e.slice(1,-1):e,r=/(.+?)(?::(\d+))?(?::(\d+))?$/.exec(t);return r?[r[1],r[2]||void 0,r[3]||void 0]:[t,void 0,void 0]},n1=(e,t)=>t&&null!=t.slice?Array.isArray(t.slice)?e.slice(t.slice[0],t.slice[1]):e.slice(0,t.slice):e,n2=(e,t)=>n1(e.split(`
`).filter(e=>!!e.match(nK)),t).map(e=>{let t=e;t.includes("(eval ")&&(t=t.replace(/eval code/g,"eval").replace(/(\(eval at [^()]*)|(,.*$)/g,""));let r=t.replace(/^\s+/,"").replace(/\(eval code/g,"(").replace(/^.*?\s+/,""),n=r.match(/ (\(.+\)$)/);r=n?r.replace(n[0],""):r;let i=n0(n?n[1]:r);return{functionName:n&&r||void 0,fileName:["eval","<anonymous>"].includes(i[0])?void 0:i[0],lineNumber:i[1]?+i[1]:void 0,columnNumber:i[2]?+i[2]:void 0,source:t}}),n5=(e,t)=>n1(e.split(`
`).filter(e=>!e.match(nZ)),t).map(e=>{let t=e;if(t.includes(" > eval")&&(t=t.replace(/ line (\d+)(?: > eval line \d+)* > eval:\d+:\d+/g,":$1")),!t.includes("@")&&!t.includes(":"))return{functionName:t};{let e=/(([^\n\r"\u2028\u2029]*".[^\n\r"\u2028\u2029]*"[^\n\r@\u2028\u2029]*(?:@[^\n\r"\u2028\u2029]*"[^\n\r@\u2028\u2029]*)*(?:[\n\r\u2028\u2029][^@]*)?)?[^@]*)@/,r=t.match(e),n=r&&r[1]?r[1]:void 0,i=n0(t.replace(e,""));return{functionName:n,fileName:i[0],lineNumber:i[1]?+i[1]:void 0,columnNumber:i[2]?+i[2]:void 0,source:t}}}),n4=new WeakMap,n3=e=>nX.some(t=>e.includes(t)),n7=e=>{let t=e.getFunctionName?.()??"";if(t)return t;let r=e.getTypeName?.()??"",n=e.getMethodName?.()??"";return r&&n?`${r}.${n}`:n},n6=e=>{let t,r=n4.get(e);if(r)return r;let n=null,i=Error.prepareStackTrace;Error.prepareStackTrace=(e,t)=>{n=(e=>{let t=[];for(let r=1;r<e.length;r++){let n=e[r],i=n7(n);if(n3(i))return{frames:t,isTrusted:!0};if(n.isNative?.()){t.push({functionName:i||void 0});continue}let o=n.getScriptNameOrSourceURL?.()??"";!o&&n.isEval?.()&&(o=n.getEvalOrigin?.()??""),t.push({functionName:i&&"<anonymous>"!==i?i:void 0,fileName:o&&"<anonymous>"!==o?o:void 0,lineNumber:n.getLineNumber?.()??void 0,columnNumber:n.getColumnNumber?.()??void 0,enclosingLineNumber:n.getEnclosingLineNumber?.()??void 0,enclosingColumnNumber:n.getEnclosingColumnNumber?.()??void 0,source:`    at ${n.toString()}`})}return{frames:t,isTrusted:!1}})(t);let r=`${e.name||"Error"}: ${e.message||""}`;for(let e of t)r+=`
    at ${e.toString()}`;return r};try{t=String(e.stack)}finally{Error.prepareStackTrace=i}let o=n??(e=>{let t=-1;for(let r of nX)if(-1!==(t=e.indexOf(r)))break;return{frames:nQ(-1===t?e:e.slice(0,e.lastIndexOf(`
`,t))).slice(1),isTrusted:-1!==t}})(t);return n4.set(e,o),o};var n8="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",n9=new Uint8Array(64),ie=new Uint8Array(128);for(let e=0;e<n8.length;e++){let t=n8.charCodeAt(e);n9[e]=t,ie[t]=e}function it(e,t){let r=0,n=0,i=0;do r|=(31&(i=ie[e.next()]))<<n,n+=5;while(32&i)let o=1&r;return r>>>=1,o&&(r=-0x80000000|-r),t+r}function ir(e,t){return!(e.pos>=t)&&44!==e.peek()}var ii=class{constructor(e){this.pos=0,this.buffer=e}next(){return this.buffer.charCodeAt(this.pos++)}peek(){return this.buffer.charCodeAt(this.pos)}indexOf(e){let{buffer:t,pos:r}=this,n=t.indexOf(e,r);return -1===n?t.length:n}};function io(e){let{length:t}=e,r=new ii(e),n=[],i=0,o=0,a=0,l=0,s=0;do{let e=r.indexOf(";"),t=[],c=!0,d=0;for(i=0;r.pos<e;){let n;(i=it(r,i))<d&&(c=!1),d=i,ir(r,e)?(o=it(r,o),a=it(r,a),l=it(r,l),n=ir(r,e)?[i,o,a,l,s=it(r,s)]:[i,o,a,l]):n=[i],t.push(n),r.pos++}c||t.sort(ia),n.push(t),r.pos=e+1}while(r.pos<=t)return n}function ia(e,t){return e[0]-t[0]}let il=/^[a-zA-Z][a-zA-Z\d+\-.]*:/,is=/^data:application\/json[^,]+base64,/,ic=/(?:\/\/[@#][ \t]+sourceMappingURL=([^\s'"]+?)[ \t]*$)|(?:\/\*[@#][ \t]+sourceMappingURL=([^*]+?)[ \t]*(?:\*\/)[ \t]*$)/,id=new Map,iu=new Map,ip=(e,t,r,n,i)=>{if(r<0||r>=e.length)return null;let o=e[r];if(!o||0===o.length)return null;let a=null,l=0,s=o.length-1;for(;l<=s;){let e=l+s>>1;o[e][0]<=n?(a=o[e],l=e+1):s=e-1}if(!a||a.length<4)return null;let[,c,d,u]=a;if(void 0===c||void 0===d||void 0===u)return null;let p=t[c];return p?{columnNumber:u,fileName:p,lineNumber:d+1,isIgnoreListed:i?.has(c)??!1}:null},im=e=>{let t=e.ignoreList??e.x_google_ignoreList;return Array.isArray(t)&&t.length>0?new Set(t):void 0},ih=e=>{if(!e)return!1;let t=e.trim();if(!t)return!1;let r=t.match(il);if(!r)return!0;let n=r[0].toLowerCase();return"http:"===n||"https:"===n},ig=async(e,t=fetch)=>{if(!ih(e))return null;let r=await t(e);if(!r.ok)return null;let n=await r.text();if(!n)return null;let i=((e,t)=>{let r,n=t.length;for(;n>0&&!r;){let e=t.lastIndexOf(`
`,n-1)+1,i=t.slice(e,n).match(ic);i&&(r=i[1]||i[2]),n=e-1}if(!r)return null;let i=il.test(r);if(!(is.test(r)||i||r.startsWith("/"))){let t=e.split("/");t[t.length-1]=r,r=t.join("/")}return r})(e,n);if(!i||!ih(i)&&!is.test(i))return null;let o=await t(i);if(!o.ok)return null;try{let e=await o.json();return"sections"in e?(e=>{let t=e.sections.map(({map:e,offset:t})=>({map:{...e,ignoredSourceIndices:im(e),mappings:io(e.mappings)},offset:t})),r=new Set;for(let e of t)for(let t of e.map.sources)r.add(t);return{file:e.file,mappings:[],names:[],sections:t,sourceRoot:void 0,sources:Array.from(r),sourcesContent:void 0,version:3}})(e):{file:e.file,ignoredSourceIndices:im(e),mappings:io(e.mappings),names:e.names,sourceRoot:e.sourceRoot,sources:e.sources,sourcesContent:e.sourcesContent,version:3}}catch{return null}},iv=async(e,t=!0,r)=>{if(t&&id.has(e))return id.get(e)??null;let n=t?iu.get(e):void 0;if(n)return(await n).sourceMap;let i=ig(e,r).then(e=>({sourceMap:e,isTransientFailure:!1}),()=>({sourceMap:null,isTransientFailure:!0}));t&&iu.set(e,i);let{sourceMap:o,isTransientFailure:a}=await i;return t&&(iu.delete(e),a||id.set(e,o)),o},ib=async(e,t=!0,r)=>await Promise.all(e.map(async e=>{if(!e.fileName)return e;let n=await iv(e.fileName,t,r);if(!n||"number"!=typeof e.lineNumber||"number"!=typeof e.columnNumber)return e;let i=((e,t,r)=>{if(e.sections){let n=t-1,i=null;for(let t of e.sections)if(n>t.offset.line||n===t.offset.line&&r>=t.offset.column)i=t;else break;if(!i)return null;let o=n-i.offset.line,a=n===i.offset.line?r-i.offset.column:r;return ip(i.map.mappings,i.map.sources,o,a,i.map.ignoredSourceIndices)}return ip(e.mappings,e.sources,t-1,r,e.ignoredSourceIndices)})(n,e.lineNumber,e.columnNumber);return i?{...e,source:i.fileName&&e.source?e.source.replace(e.fileName,i.fileName):e.source,fileName:i.fileName,lineNumber:i.lineNumber,columnNumber:i.columnNumber,isIgnoreListed:i.isIgnoreListed,isSymbolicated:!0}:e})),iw=e=>e._debugStack instanceof Error&&"string"==typeof e._debugStack?.stack,iy=e=>"number"==typeof e.tag,ix=e=>e._debugOwner,ik=e=>{let t=null;if(rU(e,r=>{if(r===e)return!1;let n=r._debugOwner;return(n===e||null!==e.alternate&&n===e.alternate)&&r._debugStack instanceof Error&&(t=r._debugStack,!0)}),!t)return null;let{frames:r,isTrusted:n}=n6(t);if(!n)return null;for(let e=r.length-1;e>=0;e--){let t=r[e];if(t.fileName)return{...t,lineNumber:t.enclosingLineNumber||t.lineNumber,columnNumber:t.enclosingColumnNumber||t.columnNumber}}return null},i_=e=>{for(let t of rL){let r=t.currentDispatcherRef;r&&"object"==typeof r&&("H"in r?r.H=e:r.current=e)}},iN=e=>`
    in ${e}`,iS=(e,t)=>{let r=iN(e);return t&&(r+=` (at ${t})`),r},iE=!1,iC=new WeakMap,iT=(e,t)=>{if(!e||iE)return"";let r=iC.get(e);if(void 0!==r)return r;let n=Error.prepareStackTrace;Error.prepareStackTrace=void 0,iE=!0;let i=(()=>{let e=rI();for(let t of[...Array.from(rL),...Array.from(e.renderers.values())]){let e=t.currentDispatcherRef;if(e&&"object"==typeof e)return"H"in e?e.H:e.current}return null})();i_(null);let o=console.error,a=console.warn;console.error=()=>{},console.warn=()=>{};try{let r={DetermineComponentFrameRoot(){let r;try{if(t){let t=function(){throw Error()};if(Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),"object"==typeof Reflect&&Reflect.construct){try{Reflect.construct(t,[])}catch(e){r=e}Reflect.construct(e,[],t)}else{try{t.call()}catch(e){r=e}e.call(t.prototype)}}else{try{throw Error()}catch(e){r=e}let t=e();t&&"function"==typeof t.catch&&t.catch(()=>{})}}catch(e){if(e instanceof Error&&r instanceof Error&&"string"==typeof e.stack)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot",Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name")?.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});let[n,i]=r.DetermineComponentFrameRoot();if(n&&i){let t=n.split(`
`),r=i.split(`
`),o=0,a=0;for(;o<t.length&&!t[o].includes("DetermineComponentFrameRoot");)o++;for(;a<r.length&&!r[a].includes("DetermineComponentFrameRoot");)a++;if(o===t.length||a===r.length)for(o=t.length-1,a=r.length-1;o>=1&&a>=0&&t[o]!==r[a];)a--;for(;o>=1&&a>=0;o--,a--)if(t[o]!==r[a]){if(1!==o||1!==a)do if(o--,--a<0||t[o]!==r[a]){let r=`
${t[o].replace(" at new "," at ")}`,n=rq(e);return n&&r.includes("<anonymous>")&&(r=r.replace("<anonymous>",n)),iC.set(e,r),r}while(o>=1&&a>=0)break}}}finally{iE=!1,Error.prepareStackTrace=n,i_(i),console.error=o,console.warn=a}let l=e?rq(e):"",s=l?iN(l):"";return iC.set(e,s),s},iA=(e,t)=>{let r=e.tag,n="";switch(r){case 28:n=iN("Activity");break;case 1:n=iT(e.type,!0);break;case 11:n=iT(e.type.render,!1);break;case 0:case 15:n=iT(e.type,!1);break;case 5:case 26:case 27:n=iN(e.type);break;case 16:n=iN("Lazy");break;case 13:n=e.child!==t&&null!==t?iN("Suspense Fallback"):iN("Suspense");break;case 19:n=iN("SuspenseList");break;case 30:n=iN("ViewTransition");break;default:return""}return n},iz=e=>{let t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;let r=e;if(!r)return"";Error.prepareStackTrace=t,r.startsWith(`Error: react-stack-top-frame
`)&&(r=r.slice(29));let n=r.indexOf(`
`);-1!==n&&(r=r.slice(n+1));let i=Math.max(r.indexOf("react_stack_bottom_frame"),r.indexOf("react-stack-bottom-frame"));return(-1!==i&&(i=r.lastIndexOf(`
`,i)),-1===i)?"":r=r.slice(0,i)},iM=e=>!!(e.functionName&&e.fileName&&i$(e.fileName)),iR=(e,t)=>e.fileName===t.fileName&&e.lineNumber===t.lineNumber&&e.columnNumber===t.columnNumber,i$=e=>nH.some(t=>e.startsWith(t)),ij=e=>!e.isServer&&e.fileName&&i$(e.fileName)?{...e,isServer:!0}:e,iF=async(e,t=!0,r)=>{let n,i=(n=[],rU(e,e=>{if(!iw(e))return;let t="string"==typeof e.type?e.type:rq(e.type)||"<anonymous>";n.push({componentName:t,stackFrames:nQ(iz(e._debugStack?.stack))})},!0),n),o=nQ((e=>{try{let t="",r=e,n=null;do{t+=iA(r,n);let e=r._debugInfo;if(e&&Array.isArray(e))for(let r=e.length-1;r>=0;r--){let n=e[r];"string"==typeof n.name&&(t+=iS(n.name,n.env))}n=r,r=r.return}while(r)return t}catch(e){return e instanceof Error?`
Error generating stack: ${e.message}
${e.stack}`:""}})(e)),a=(e=>{let t=new Map;for(let r of e)for(let e of r.stackFrames){if(!iM(e))continue;let r=e.functionName,n=t.get(r)??[];n.some(t=>iR(t,e))||(n.push(e),t.set(r,n))}return t})(i),l=new Map;return ib(o.map(e=>e.source?.includes("(at Server)")||null!=e.source&&nJ.test(e.source)?((e,t,r)=>{if(!e.functionName)return{...e,isServer:!0};let n=t.get(e.functionName);if(!n||0===n.length)return{...e,isServer:!0};let i=r.get(e.functionName)??0,o=n[i%n.length];return r.set(e.functionName,i+1),{...e,isServer:!0,fileName:o.fileName,lineNumber:o.lineNumber,columnNumber:o.columnNumber,source:e.source?.replace("(at Server)",`(${o.fileName}:${o.lineNumber}:${o.columnNumber})`)}})(e,a,l):e).filter((e,t,r)=>{if(0===t)return!0;let n=r[t-1];return e.functionName!==n.functionName}),t,r)},iO=async(e,t=!0,r)=>{let n=(e=>{let t=[],r=e;for(;r;)if(iy(r)){let e=r;if((r=ix(e))&&iw(e)){let{frames:r,isTrusted:n}=n6(e._debugStack);if(n)for(let e of r)t.push(ij(e))}}else{let e=r;if((r=e.owner)&&e.debugStack instanceof Error)for(let r of n6(e.debugStack).frames)t.push({...r,isServer:!0})}return t})(e);if(n.length>0){let i=ik(e)??{};i.functionName=rq(e.type)??i.functionName;let o=await ib([i,...n],t,r);if(o.some((e,t)=>t>0&&!!e.fileName&&!e.isIgnoreListed))return o}return iF(e,t,r)},iP=e=>e.fileName?{fileName:e.fileName,lineNumber:e.lineNumber,columnNumber:e.columnNumber,functionName:e.functionName}:null,iL=async(e,t=!0,r)=>{let n;if((n=e._debugSource)&&"object"==typeof n&&n&&"fileName"in n&&"string"==typeof n.fileName&&"lineNumber"in n&&"number"==typeof n.lineNumber)return e._debugSource||null;let i=(e=>{if(!iw(e))return null;let{frames:t,isTrusted:r}=n6(e._debugStack);if(!r)return null;for(let e of t)if(e.fileName)return e;return null})(e)??ik(e);if(i){let[e]=await ib([i],t,r),n=iP(e);if(n)return n}for(let n of(await iF(e,t,r)))if(n.fileName)return iP(n);return null},iD=e=>e.split("/").filter(Boolean).length,iI=e=>{if(!e||nB.some(t=>t===e))return"";let t=e,r=t.startsWith("http://")||t.startsWith("https://");if(r)try{t=new URL(t).pathname}catch{}if(r&&(t=(e=>{let t=e.indexOf("/",1);if(-1===t||1!==iD(e.slice(0,t)))return e;let r=e.slice(t);if(!nV.test(r)||2>iD(r))return e;let n=r.split("/").filter(Boolean)[0]??null;return!n||n.startsWith("@")||n.length>4?e:r})(t)),t.startsWith("about://React/")){let e=t.slice(14),r=e.indexOf("/"),n=e.indexOf(":");t=-1!==r&&(-1===n||r<n)?e.slice(r+1):e}let n=!0;for(;n;)for(let e of(n=!1,nU))if(t.startsWith(e)){t=t.slice(e.length),"file:///"===e&&(t=`/${t.replace(/^\/+/,"")}`),n=!0;break}if(nW.test(t)){let e=t.match(nW);e&&(t=t.slice(e[0].length))}if(t.startsWith("//")){let e=t.indexOf("/",2);t=-1===e?"":t.slice(e)}let i=t.indexOf("?");if(-1!==i){let e=t.slice(i);nG.test(e)&&(t=t.slice(0,i))}return t},iW=Symbol.for("react.context"),iU=[],iH=null,iB=Error("Suspense Exception: This is not a real error! It's an implementation detail of `use` to interrupt the current render."),iV=()=>{let e=iH;return null!==e&&(iH=e.next),e},iq=e=>e._currentValue,iG=(e,t,r,n=null)=>{iU.push({displayName:n,primitive:e,stackError:Error(),value:t,dispatcherHookName:r})},iJ=e=>(t,r)=>{let n=iV();iV(),iV();let i=Error(),{value:o,error:a}=((e,t)=>{let r,n=null;if(null!==e){let t=e.memoizedState;if("object"==typeof t&&t&&"then"in t&&"function"==typeof t.then)switch(t.status){case"fulfilled":r=t.value;break;case"rejected":n=t.reason;break;default:n=iB,r=t}else r=t}else r=t;return{value:r,error:n}})(n,r);if(iU.push({displayName:null,primitive:e,stackError:i,value:o,dispatcherHookName:e}),null!==a)throw a;return[o,()=>{},!1]},iX=iJ("ActionState"),iY={readContext:iq,use:e=>{if("object"==typeof e&&e){if("function"==typeof e.then){switch(e.status){case"fulfilled":return iG("Promise",e.value,"Use"),e.value;case"rejected":throw e.reason}throw iG("Unresolved",e,"Use"),iB}if(e.$$typeof===iW&&"_currentValue"in e){let t=iq(e);return iG("Context (use)",t,"Use",e.displayName||"Context"),t}}throw Error("An unsupported type was passed to use(): "+String(e))},useCallback:e=>{let t=iV();return iG("Callback",null===t?e:t.memoizedState[0],"Callback"),e},useContext:e=>{let t=iq(e);return iG("Context",t,"Context",e.displayName||null),t},useEffect:e=>{iV(),iG("Effect",e,"Effect")},useImperativeHandle:e=>{let t;iV(),"object"==typeof e&&e&&"current"in e&&(t=e.current),iG("ImperativeHandle",t,"ImperativeHandle")},useLayoutEffect:e=>{iV(),iG("LayoutEffect",e,"LayoutEffect")},useInsertionEffect:e=>{iV(),iG("InsertionEffect",e,"InsertionEffect")},useMemo:e=>{let t=iV(),r=null===t?e():t.memoizedState[0];return iG("Memo",r,"Memo"),r},useReducer:(e,t,r)=>{let n=iV(),i=null===n?void 0===r?t:r(t):n.memoizedState;return iG("Reducer",i,"Reducer"),[i,()=>{}]},useRef:e=>{let t=iV(),r=null===t?{current:e}:t.memoizedState;return iG("Ref",r.current,"Ref"),r},useState:e=>{let t=iV(),r=null===t?"function"==typeof e?e():e:t.memoizedState;return iG("State",r,"State"),[r,()=>{}]},useDebugValue:(e,t)=>{iG("DebugValue","function"==typeof t?t(e):e,"DebugValue")},useDeferredValue:e=>{let t=iV(),r=null===t?e:t.memoizedState;return iG("DeferredValue",r,"DeferredValue"),r},useTransition:()=>{let e=iV();iV();let t=null!==e&&e.memoizedState;return iG("Transition",t,"Transition"),[t,()=>{}]},useSyncExternalStore:(e,t)=>{let r=iV();iV();let n=null===r?t():r.memoizedState;return iG("SyncExternalStore",n,"SyncExternalStore"),n},useId:()=>{let e=iV(),t=null===e?"":e.memoizedState;return iG("Id",t,"Id"),t},useHostTransitionStatus:()=>{let e=iq({_currentValue:null});return iG("HostTransitionStatus",e,"HostTransitionStatus"),e},useFormState:iJ("FormState"),useActionState:iX,useOptimistic:e=>{let t=iV(),r=null===t?e:t.memoizedState;return iG("Optimistic",r,"Optimistic"),[r,()=>{}]},useMemoCache:e=>[],useCacheRefresh:()=>{let e=iV();return iG("CacheRefresh",null===e?()=>{}:e.memoizedState,"CacheRefresh"),()=>{}},useEffectEvent:e=>(iV(),iG("EffectEvent",e,"EffectEvent"),e)};typeof Proxy>"u"||new Proxy(iY,{get(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t];let r=Error("Missing method in Dispatcher: "+t);throw r.name="ReactDebugToolsUnsupportedHookError",r}});let iK=e=>void 0!==e&&Number.isFinite(e)?Math.max(0,Math.floor(e)):3,iZ=/^(?:\.\/)?\/?\([a-z][a-z0-9-]*\)\//,iQ=e=>{let t=iI(e);return(t=t.replace(iZ,"")).startsWith("./")&&(t=t.slice(2)),t},i0=e=>{try{return decodeURIComponent(e)}catch{return e}},i1=/(?:^|[/\\])node_modules[/\\]/,i2=/[/\\]\.vite[/\\]deps[^/\\]*[/\\]/,i5=/\.[mc]?[jt]sx?$/i,i4=/^chunk-[A-Za-z0-9_-]+$/,i3=/[/\\]/,i7=/^(.+?)@v?\d/,i6=e=>e.split(i3).filter(Boolean),i8=e=>{let[t,r]=i6(e);return!t||t.startsWith(".")?null:t.startsWith("@")?r?`${t}/${r}`:null:t},i9=e=>{let t=i6(e)[0];if(!t)return null;let r=t.replace(i5,"");if(i4.test(r))return null;if(!r.startsWith("@"))return r;let n=r.indexOf("_");return -1===n?null:`${r.slice(0,n)}/${r.slice(n+1)}`},oe=(e,t,r)=>{let n=e.split(t);return n.length>1?r(n[n.length-1]):null},ot=e=>e?.match(i7)?.[1]??null,or=/^@[A-Za-z0-9][A-Za-z0-9._-]*$/,on=/^[A-Za-z0-9][A-Za-z0-9._-]*$/,oi=new Set(["app","web","website","frontend","client","src"]),oo=new Set(["app","src","components","pages","features","modules","hooks","lib","utils","ui","shared","common","core","styles","assets"]),oa=e=>{let t;if(!e)return{origin:"unknown",packageName:null};let r=e?(e=>{let t;if(!e)return null;let r=iI(e);return r&&((oe(t=i0(r),i2,i9)??oe(t,i1,i8))||(e=>{let t;try{t=new URL(e)}catch{return null}if(!t.hostname)return null;let r=i6(t.pathname).map(i0);for(let[e,t]of r.entries()){if(t.startsWith("@")){let n=ot(r[e+1]);if(n)return`${t}/${n}`;continue}let n=ot(t);if(n)return n}return null})(e))||null})(e)??(e=>{let t=(e=>{let t=e;for(;t.startsWith("../")||t.startsWith("./");)t=t.slice(t.startsWith("../")?3:2);return t})(i0(iI(e)));if(t.startsWith("/"))return null;let[r,n,...i]=i6(t);return!r||!n||0===i.length||!or.test(r)||oo.has(r.slice(1))||!on.test(n)||i5.test(n)||oi.has(n)?null:`${r}/${n}`})(e):null;return r?{origin:"package",packageName:r}:!(!(t=iI(e))||!nV.test(t)||nq.test(t))?{origin:"app",packageName:null}:{origin:"unknown",packageName:null}},ol=new Set(["role","name","aria-label","rel","href"]),os=e=>{if(!/^[a-z-]{3,}$/i.test(e))return!1;for(let t of e.split(/-|[A-Z]/))if(t.length<=2||/[^aeiou]{4,}/i.test(t))return!1;return!0},oc=e=>{let t=e[0].name;for(let r=1;r<e.length;r++)t=`${e[r].name} > ${t}`;return t},od=e=>{let t=0;for(let r of e)t+=r.penalty;return t},ou=(e,t)=>od(e)-od(t),op=(e,t)=>{let r=e.parentNode;if(!r)return;let n=r.firstChild;if(!n)return;let i=0;for(;n&&(rS(n)&&(void 0===t||n.tagName.toLowerCase()===t)&&i++,n!==e);)n=n.nextSibling;return i},om=(e,t)=>"html"===e?"html":`${e}:nth-of-type(${t})`,oh=(e,t)=>{let r=[],n=e.getAttribute("id"),i=e.tagName.toLowerCase();for(let t of(n&&os(n)&&r.push({name:`#${CSS.escape(n)}`,penalty:0}),e.classList))os(t)&&r.push({name:`.${CSS.escape(t)}`,penalty:1});for(let n of e.attributes)t(n.name,n.value)&&r.push({name:`[${CSS.escape(n.name)}="${CSS.escape(n.value)}"]`,penalty:2});r.push({name:i,penalty:5});let o=op(e,i);void 0!==o&&r.push({name:om(i,o),penalty:10});let a=op(e);return void 0!==a&&r.push({name:"html"===i?"html":`${i}:nth-child(${a})`,penalty:50}),r},of=(e,t=rb,r=[])=>{if(t<=0)return[];if(0===e.length)return[r];let n=[];for(let i of e[0]){let o=t-n.length;if(o<=0)break;n.push(...of(e.slice(1),o,[...r,i]))}return n},og=(e,t)=>1===t.querySelectorAll(oc(e)).length,ov=(e,t)=>{let r=e,n=[];for(;r&&r!==t;){let e=r.tagName.toLowerCase(),t=op(r,e);if(void 0===t)return;n.push({name:om(e,t),penalty:10}),r=r.parentElement}return og(n,t)?n:void 0},ob=/^[0-9a-f]{8}(?:-[0-9a-f]{4}){3}-[0-9a-f]{12}$/i,ow=/:r[a-z0-9]+:/i,oy=/_r_[a-z0-9]+_(?:$|-)/i,ox=/«r[a-z0-9]+»/i,ok=/^(?:downshift-\d+(?:-|$)|headlessui-[a-z-]+-\d+(?:-|$)|mui-\d+(?:-|$)|radix-\d+(?:-|$)|react-aria-\d+(?:-|$)|react-select-\d+(?:-|$))/i,o_=/^ember\d+$/i,oN=/^\d+$/,oS=e=>e.length>0&&e.length<=120&&!ow.test(e)&&!ob.test(e)&&!oy.test(e)&&!ox.test(e)&&!ok.test(e)&&!o_.test(e)&&!oN.test(e),oE=new Set(["data-testid","data-test-id","data-test","data-cy","data-qa","aria-label","href","src","role","name","title","alt"]),oC=new Set(["button","link","checkbox","radio","switch","tab","menuitem","option","textbox","combobox","slider","spinbutton"]),oT=e=>e.ownerDocument.body??e.ownerDocument.documentElement,oA=(e,t)=>oE.has(e)&&t.length>0&&t.length<=120&&("role"!==e||t.split(/\s+/).some(e=>oC.has(e))),oz=(e,t)=>{try{let r=e.getRootNode(),n=(ne(r)?r:e.ownerDocument).querySelectorAll(t);return 1===n.length&&n[0]===e}catch{return!1}},oM=e=>{let t=e.getAttribute("id"),r=null;if(t){let n=`#${CSS.escape(t)}`;if(oz(e,n)){if(oS(t))return{selector:n,isSemantic:!0};r=n}}for(let t of oE){let r=e.getAttribute(t);if(!r||!oA(t,r))continue;let n=`[${t}=${JSON.stringify(r)}]`;if(oz(e,n))return{selector:n,isSemantic:!0};let i=`${e.tagName.toLowerCase()}${n}`;if(oz(e,i))return{selector:i,isSemantic:!0}}return r?{selector:r,isSemantic:!1}:null},oR=e=>{let t=r8(e);if(t)return{selector:t.getSelector(),isSemantic:!0};let r=oM(e);if(!r?.isSemantic)return null;let n=e.getRootNode();if(ne(n)){let e=oR(n.host);return e?{selector:`${e.selector} >>> ${r.selector}`,isSemantic:!0}:null}let i=rC(e.ownerDocument.defaultView);if(!i)return r;let o=oR(i);return o?{selector:`${o.selector} >>iframe>> ${r.selector}`,isSemantic:!0}:null},o$=e=>{let t=r8(e);if(t)return{selector:t.getSelector(),isSemantic:!0};let r=(e=>{let t=oM(e);if(t)return t;try{let t=((e,t,r)=>{let n;if(e.nodeType!==Node.ELEMENT_NODE)throw new nr;if("html"===e.tagName.toLowerCase())return"html";let i=ne(n=e.getRootNode())?n:na(t)?t:t.ownerDocument,o=Date.now(),a=[],l=e,s=0,c;for(;l&&l!==i&&!c;)if(a.push(oh(l,r)),l=l.parentElement,++s>=3){let t=of(a);for(let r of(t.sort(ou),t)){if(Date.now()-o>200){let t=ov(e,i);if(!t)throw new nn(200);return oc(t)}if(og(r,i)){c=r;break}}}if(!c&&s<3){let e=of(a);for(let t of(e.sort(ou),e)){if(Date.now()-o>200)break;if(og(t,i)){c=t;break}}}if(!c)throw new ni;return oc(c)})(e,oT(e),(e,t)=>{let r,n;return r=ol.has(e)||e.startsWith("data-")&&os(e),n=os(t)&&t.length<100||t.startsWith("#")&&os(t.slice(1)),r&&n||oA(e,t)});if(t)return{selector:t,isSemantic:!1}}catch{}return{selector:(e=>{let t=[],r=e.getRootNode(),n=ne(r)?r:oT(e),i=e;for(;i;){let e=i.getAttribute("id");if(e){t.unshift(`#${CSS.escape(e)}`);break}let r=i.parentNode;if(!r){t.unshift(i.tagName.toLowerCase());break}let o=Array.from(r.children).indexOf(i)+1;if(t.unshift(`${i.tagName.toLowerCase()}:nth-child(${o})`),r===n){rS(n)&&t.unshift(n.tagName.toLowerCase());break}i=rS(r)?r:null}return t.join(" > ")})(e),isSemantic:!1}})(e),n=e.getRootNode();if(ne(n)){let e=o$(n.host);return{selector:`${e.selector} >>> ${r.selector}`,isSemantic:e.isSemantic&&r.isSemantic}}let i=rC(e.ownerDocument.defaultView);if(!i)return r;let o=o$(i);return{selector:`${o.selector} >>iframe>> ${r.selector}`,isSemantic:o.isSemantic&&r.isSemantic}},oj=[...Array.from(oE).filter(e=>"role"!==e).map(e=>`[${e}]`),...Array.from(oC).map(e=>`[role~="${e}"]`)].join(","),oF=e=>{let t=e.getAttribute("id");return!!(t&&oS(t)||e.matches(oj))},oO=e=>oF(e)||e.matches("button,input,select,textarea"),oP=e=>{let{body:t,documentElement:r}=e.ownerDocument;if(e===t||e===r)return!0;if(!t)return!1;let n=t.getElementsByTagName("*").length;return 0!==n&&e.getElementsByTagName("*").length/n>=.5},oL=(e,t)=>{let r=e.getRootNode(),n=e;for(;n;){let i=oO(n),o=i&&oP(n);if(i){if(o&&n!==e)return e;if(!t||t(n)||o||!oF(n)&&n===e)return n}let a=nl(n);n=a?.getRootNode()===r?a:null}return e},oD=[/\/assets\/[^/?#]+-[a-z0-9_-]{6,}\.(?:c|m)?js(?:[?#]|$)/,/\/_next\/static\/.*\.(?:c|m)?js(?:[?#]|$)/,/\/static\/chunks\/.*\.(?:c|m)?js(?:[?#]|$)/],oI=e=>{if(!e)return!1;let t=`/${iQ(e)}`.toLowerCase();return oD.some(e=>e.test(t))},oW=(e=!1)=>{let t=new URL(document.baseURI);return Array.from(document.scripts).some(r=>{if(!r.src)return!1;try{let n=new URL(r.src,t);return(e||n.origin===t.origin)&&n.pathname.includes("/_next/static/")}catch{return!1}})},oU=e=>(e&&(t=void 0),t??="u">typeof document&&!!(document.getElementById("__NEXT_DATA__")||document.querySelector("nextjs-portal")||oW()||Array.from(document.scripts).some(e=>e.textContent?.includes("self.__next_f.push"))&&oW(!0))),oH=e=>e.map(e=>`
  in ${e}`).join(""),oB=["about://React/","rsc://React/"],oV=e=>oB.some(t=>e.startsWith(t)),oq=e=>{for(let t of oB){if(!e.startsWith(t))continue;let r=e.indexOf("/",t.length);if(-1===r)continue;let n=r+1,i=e.lastIndexOf("?");return i0(i>n?e.slice(n,i):e.slice(n))}return e},oG=e=>{if("object"!=typeof e||!e||!("status"in e)||"fulfilled"!==e.status||!("value"in e)||"object"!=typeof e.value||null===e.value||!("originalStackFrame"in e.value))return null;let t=e.value.originalStackFrame;return"object"==typeof t&&t&&"file"in t&&"string"==typeof t.file&&t.file&&(!("ignored"in t)||!t.ignored)?{file:t.file,line1:"line1"in t&&"number"==typeof t.line1?t.line1:null,column1:"column1"in t&&"number"==typeof t.column1?t.column1:null}:null},oJ=async(e,t)=>{let n=[],i=[];for(let t=0;t<e.length;t++){let r=e[t];r.isServer&&r.fileName&&(n.push(t),i.push({file:oq(r.fileName),methodName:r.functionName??"<unknown>",line1:r.lineNumber??null,column1:r.columnNumber??null,arguments:[]}))}if(0===i.length)return e;let o=new AbortController,a=setTimeout(()=>o.abort(),5e3),l=()=>o.abort();t?.aborted&&o.abort(),t?.addEventListener("abort",l);try{let t=await fetch(`${(()=>{if(void 0!==r)return r;let e=document.querySelector('script[src*="/_next/"]')?.src,t=e?new URL(e).pathname:"",n=t.indexOf("/_next/");return r=n>0?t.slice(0,n):""})()}/__nextjs_original-stack-frames`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({frames:i,isServer:!0,isEdgeServer:!1,isAppDirectory:!0}),priority:"high",signal:o.signal});if(!t.ok)return e;let a=await t.json();if(!Array.isArray(a))return e;let l=[...e];for(let t=0;t<n.length;t++){let r=oG(a[t]);if(!r)continue;let i=n[t];l[i]={...e[i],fileName:r.file,lineNumber:r.line1??void 0,columnNumber:r.column1??void 0,isSymbolicated:!0}}return l}catch{return e}finally{clearTimeout(a),t?.removeEventListener("abort",l)}},oX=0,oY=[],oK=async(e,t,r=rv,n)=>{if(!await (n?.aborted?Promise.resolve(!1):oX<3?(oX+=1,Promise.resolve(!0)):new Promise(e=>{let t={abortSignal:n,resolve:e};n&&(t.handleAbort=()=>{let r=oY.indexOf(t);-1!==r&&(oY.splice(r,1),e(!1))},n.addEventListener("abort",t.handleAbort,{once:!0})),oY.push(t)})))return t;let i=new AbortController,o,a=new Promise(e=>{o=setTimeout(()=>{i.abort(),e(t)},r)}),l,s=new Promise(e=>{n&&(l=()=>{i.abort(),e(t)},n.aborted?l():n.addEventListener("abort",l,{once:!0}))});try{let t=e(i.signal);return t.catch(()=>{}),await Promise.race([t,a,s])}finally{clearTimeout(o),l&&n?.removeEventListener("abort",l),(()=>{let e=oY.shift();if(e){e.abortSignal&&e.handleAbort&&e.abortSignal.removeEventListener("abort",e.handleAbort),e.resolve(!0);return}--oX})()}},oZ=e=>e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),oQ=(e,t)=>{if(e.length<=t)return e;let r=Math.max(0,t-3),n=e.slice(0,r),i=n.lastIndexOf("&");return`${i>n.lastIndexOf(";")?n.slice(0,i):n}...`.slice(0,t)},o0=e=>e.startsWith("data-react-grab-"),o1=e=>e.replace(/\s+/g," ").trim(),o2=e=>!!("true"===e.getAttribute("aria-hidden")||e.hasAttribute("hidden"))||rk.has(e.tagName.toLowerCase()),o5=(e,t,r)=>{if(e.nodeType===Node.TEXT_NODE){let n=o1(e.textContent??"");return n?(t.push(n),r-n.length):r}if(!rS(e)||o2(e))return r;for(let n of e.childNodes)if((r=o5(n,t,r))<=0)break;return r},o4=(e,t,r)=>`${e}="${oQ(oZ(t).replace(/"/g,"&quot;").replace(/\r/g,"&#13;").replace(/\n/g,"&#10;").replace(/\t/g,"&#9;"),r)}"`,o3=e=>"class"===e||"className"===e||"style"===e,o7=e=>0===e.length?"":e.length<=2?e.map(e=>`<${no(e)} ...>`).join(`
  `):`(${e.length} elements)`,o6=e=>{let t=r8(e);if(t)return t.getPreview();let r=no(e),n=(e=>{let t=(e=>{let t=[];for(let r of rw){if(t.length>=8)break;let n=e.getAttribute(r);if(!n)continue;let i="class"===r?15:120;t.push(o4(r,n,i))}return t})(e).map(e=>` ${e}`),r=[],n=[];for(let{name:t,value:i}of e.attributes)o0(t)||rw.includes(t)||o3(t)||(ry.has(t)?r.push(i?` ${o4(t,i,120)}`:` ${t}`):i&&n.push(` ${o4(t,i,15)}`));return[...t,...r,...n].slice(0,8).join("")})(e),i=((e,t)=>{if(o2(e))return"";let r=(e=>{let t=[];for(let r of e.childNodes){if(r.nodeType!==Node.TEXT_NODE)continue;let e=o1(r.textContent??"");e&&t.push(e)}return t.join(" ")})(e);if(!rx.has(t)||r&&0===e.children.length)return r;let n=[];return o5(e,n,100),n.join(" ")})(e,r),o=[],a=[],l=!1;for(let t of e.childNodes)t.nodeType!==Node.COMMENT_NODE&&(t.nodeType===Node.TEXT_NODE?t.textContent&&t.textContent.trim().length>0&&(l=!0):rS(t)&&(l?a.push(t):o.push(t)));let s=i.length>0&&rx.has(r),c="",d=o7(o);d&&!s&&(c+=`
  ${d}`),i&&(c+=`
  ${oQ(oZ(i),100)}`);let u=o7(a);return u&&!s&&(c+=`
  ${u}`),c.length>0?`<${r}${n}>${c}
</${r}>`:`<${r}${n} />`},o8=new Set(["_","$","motion.","styled.","chakra.","ark.","Primitive.","Slot."]),o9=new Set("AppRouter.AppRouterAnnouncer.AppDevOverlay.AppDevOverlayErrorBoundary.ClientPageRoot.ClientSegmentRoot.DevRootHTTPAccessFallbackBoundary.ErrorBoundary.ErrorBoundaryHandler.GracefulDegradeBoundary.HTTPAccessErrorFallback.HTTPAccessFallbackBoundary.HTTPAccessFallbackErrorBoundary.HandleRedirect.Head.HistoryUpdater.HotReload.InnerLayoutRouter.InnerScrollAndFocusHandler.InnerScrollAndFocusHandlerOld.InnerScrollAndMaybeFocusHandler.InnerScrollHandlerNew.LinkComponent.LoadableComponent.LoadingBoundary.LoadingBoundaryProvider.NotAllowedRootHTTPFallbackError.OfflineProvider.OuterLayoutRouter.RedirectBoundary.RedirectErrorBoundary.RenderFromTemplateContext.RenderValidationBoundaryAtThisLevel.ReplaySsrOnlyErrors.RootErrorBoundary.RootLevelDevOverlayElement.Router.ScrollAndFocusHandler.ScrollAndMaybeFocusHandler.SegmentBoundaryTrigger.SegmentBoundaryTriggerNode.SegmentStateProvider.SegmentTrieNode.SegmentViewNode.SegmentViewStateNode.ServerRoot.body.html".split(".")),ae=new Set(["<anonymous>","<unknown>","Anonymous","Unknown"]),at=new Set(["Suspense","Fragment","StrictMode","Profiler","SuspenseList"]),ar=new Set(["MotionDOMComponent","Slot","SlotClone"]),an=[".Consumer",".Context",".Provider",".Slot",".SlotClone",".Slottable","ProviderProvider"],ai=(e,t=!1)=>{if(ae.has(e)||t&&o9.has(e)||at.has(e)||ar.has(e))return!0;for(let t of an)if(e.endsWith(t))return!0;for(let t of o8)if(e.startsWith(t))return!0;return!1},ao=(e,t,r)=>{e.get(t)===r&&e.delete(t)},aa=async(e,t)=>{for(let t=0;t<2;t+=1){let r=e();if(!r)break;let n=await r.valuePromise;if(r.isCurrent()||1===t)return n}return t()},al=(e,t)=>!(e.length<=1||ai(e,t)||e[0]!==e[0].toUpperCase()),as=(e,t)=>e&&al(e,t)?e:null,ac=e=>!(e=>{if(!e)return!1;let t=`/${iQ(e)}/`.toLowerCase();return rg.some(e=>t.includes(e))})(e)&&!oI(e),ad=e=>{if(!rG())return e;let t=e;for(;t?.ownerDocument===e.ownerDocument;){if(r9(t))return t;if(t.parentElement){t=t.parentElement;continue}let e=t.getRootNode();t=ne(e)?e.host:null}return e},au=e=>{let t=e.return?.child??null;for(;t;){if(t!==e&&null!==t.key)return!0;t=t.sibling}return!1},ap=new WeakMap,am=new WeakMap,ah=e=>{let t,r,n,i,o=ad(e),a=r9(o);if(!a)return null;let l=rX(a);return{element:o,fiber:l,revision:(t=l.alternate,r=l._debugOwner,n=l._debugSource,i=l._debugStack,{matches:e=>(e===l||e===t||e.alternate===l)&&e._debugOwner===r&&e._debugSource===n&&e._debugStack===i})}},af=(e,t)=>{let r=ah(e);return!!(r&&r.element===t.element&&t.revision.matches(r.fiber))},ag=e=>t=>fetch(t,{signal:e,priority:"high"}),av=async e=>{let[t,r]=await Promise.all([(e=>{let t,r=am.get(e.element);if(r?.revision.matches(e.fiber))return r.promise;let n=new AbortController,i=(t=e.fiber,oK(async e=>{try{let r,n=await iL(t,!0,ag(e));if(!n?.fileName)return null;let i=oU();return{filePath:iQ(n.fileName),lineNumber:n.lineNumber??null,columnNumber:n.columnNumber??null,componentName:as(n.functionName,i)??(r=t._debugOwner,r&&rW(r)?as(rq(r.type),i):null),origin:oa(n.fileName).origin}}catch{return null}},null,void 0,n.signal));if(!af(e.element,e))return i;let o={controller:n,promise:i,revision:e.revision};return am.set(e.element,o),r?.controller.abort(),o.promise.then(t=>{t||ao(am,e.element,o)}),o.promise})(e),(e=>{let t;if(!rG())return Promise.resolve([]);let r=ap.get(e.element);if(r?.revision.matches(e.fiber))return r.promise;let n=new AbortController,i=(t=e.fiber,oK(async e=>{try{let r=await iO(t,!0,ag(e));return oU()?await oJ(((e,t)=>{let r;if(!t.some(e=>e.isServer&&!e.fileName&&e.functionName))return t;let n=(r=new Map,rU(e,e=>{if(!iw(e))return!1;let t=iz(e._debugStack.stack);if(!t)return!1;for(let e of nQ(t))!e.functionName||!e.fileName||oV(e.fileName)&&(r.has(e.functionName)||r.set(e.functionName,{...e,isServer:!0}));return!1},!0),r);return 0===n.size?t:t.map(e=>{if(!e.isServer||e.fileName||!e.functionName)return e;let t=n.get(e.functionName);return t?{...e,fileName:t.fileName,lineNumber:t.lineNumber,columnNumber:t.columnNumber}:e})})(t,r),e):r}catch{return null}},null,void 0,n.signal));if(!af(e.element,e))return i;let o={controller:n,promise:i,revision:e.revision};return ap.set(e.element,o),r?.controller.abort(),o.promise.then(t=>{null===t&&ao(ap,e.element,o)}),o.promise})(e)]);return{fiber:e.fiber,fiberSource:t,stack:r}},ab=(e,t)=>{let r=oU(),n=(e,t)=>{let n=e[0]??null;return n?.fileName?{filePath:iQ(n.fileName),lineNumber:n.lineNumber??null,columnNumber:n.columnNumber??null,componentName:as(n.functionName,r),origin:t}:null},i=t.filter(e=>"app"===oa(e.fileName).origin),o=i.filter(e=>ac(e.fileName));return e?.origin==="app"&&ac(e.filePath)?e:n(o,"app")||(e?.origin!=="app"||oI(e.filePath)?n(i,"app")||(e?.origin==="app"||e?.origin==="package"?e:n(t.filter(e=>"package"===oa(e.fileName).origin),"package")):e)},aw=(e,t,r=()=>!0)=>{if(!rG())return[];let n=r9(e);if(!n)return[];let i=oU(),o=[];return rU(rX(n),e=>{if(o.length>=t)return!0;if(rW(e)){let t=rq(e.type);t&&((e,t=!1)=>!(!e||ai(e,t)))(t,i)&&r(t)&&o.push(t)}return!1},!0),o},ay=["/src/app/","/src/pages/","/app/","/pages/"],ax=(e,t)=>{let r=((e,t)=>{let r=iQ(e);if(!t||!r.startsWith("/"))return r;for(let e of ay){let t=r.indexOf(e);if(-1!==t)return`/./${r.slice(t+1)}`}return r})(e.filePath,t),n=t&&e.lineNumber?`${r}:${e.lineNumber}${e.columnNumber?`:${e.columnNumber}`:""}`:r;return e.componentName?`
  in ${e.componentName} (at ${n})`:`
  in ${n}`},ak={isAppSource:!1,consumesBudget:!1},a_=(e,t,r,n)=>{let i=t.packageName,o="app"===t.origin?e.fileName:null;if(e.isServer&&!o&&(r||!e.functionName)){let e=i?`${i} at Server`:"at Server";return{text:`
  in ${r??"<anonymous>"} (${e})`,...ak}}return!o&&r?{text:i?`
  in ${r} (${i})`:`
  in ${r}`,...ak}:i?{text:`
  in ${i}`,...ak}:o?{text:ax({componentName:r,filePath:o,lineNumber:e.lineNumber??null,columnNumber:e.columnNumber??null},n),isAppSource:!0,consumesBudget:ac(o)}:null},aN=(e,t,r)=>{var n,i,o;let a,l,s=((e,t,r)=>{let n,i=r.stack??[],o=(n=ab(r.fiberSource,i),n?.origin==="app"?n:null),a=iK(t.maxLines),l=((e,t={},r=null)=>{let n=iK(t.maxLines),i=Math.max(n,20),o=oU(),a=[],l=new Set,s=null,c=!1,d=!1,u=!1,p=0,m=e=>{e&&l.add(e)};if(r){let e="app"===r.origin&&ac(r.filePath);d=e,e&&(p+=1),m(r.componentName),a.push(ax(r,o))}for(let t of e){if(!n||a.length>=i)break;let e=oa(t.fileName),l=as(t.functionName,o),h=e.packageName?`${e.packageName}:${l??""}:${t.isServer?"server":"client"}`:null;if(h&&h===s)continue;if(!c&&l&&l===r?.componentName){c=!0;continue}let f=a_(t,e,l,o);null!==f&&(f.consumesBudget&&p>=n||f.text!==a[a.length-1]&&(f.isAppSource&&f.consumesBudget&&(d=!0),f.consumesBudget&&(p+=1,u=!0),m(l),a.push(f.text),s=h))}return{text:a.join(""),shouldAppendSelectorHint:!d,hasBudgetedStackFrame:u,renderedComponentNames:l,remainingHardLineCapacity:Math.max(0,i-a.length)}})(i,t,o);if(l.text)return l.hasBudgetedStackFrame?l:((e,t,r)=>{let n=Math.min(r,t.remainingHardLineCapacity);if(0===n)return t;let i=oU(),o=aw(ad(e),n,e=>al(e,i)&&!t.renderedComponentNames.has(e));return 0===o.length?t:{...t,text:`${t.text}${oH(o)}`,remainingHardLineCapacity:t.remainingHardLineCapacity-o.length}})(e,l,a);let s=aw(ad(e),a),c=Math.max(a,20);return{text:oH(s),shouldAppendSelectorHint:!0,hasBudgetedStackFrame:!1,renderedComponentNames:new Set(s),remainingHardLineCapacity:Math.max(0,c-s.length)}})(e,t,r),c=ad(e),d=((e,t)=>{let r,n=(e=>{if(!rG())return null;let t=r9(ad(e)),r=t?rX(t):null,n=0;for(;r;){if(null!==r.key&&au(r))return String(r.key);if(rW(r)&&2===(n+=1))break;r=r.return}return null})(e),i=null===n?"":`
  key: ${JSON.stringify(n.length>120?`${n.slice(0,120)}...`:n)}`,o=t.shouldAppendSelectorHint?o$(oL(e)):(e=>{if(r8(e))return oR(e);let t=null;return oL(e,e=>{let r=oR(e);return!!r&&(t=r,!0)}),t})(e),a=o&&(r=t.shouldAppendSelectorHint,r||o.isSemantic)?o.selector:null,l=a?`
  selector: ${a}`:"";return{selector:a,text:`${t.text}${i}${l}`}})(c,s);return{...(n=e,i=r,o=s,a=i.stack??[],l=ab(i.fiberSource,a),{componentName:aw(ad(n),1)[0]??null,fiber:i.fiber,source:l,stack:a,stackContext:o.text}),elementInfo:`${o6(c)}${d.text}`,selector:d.selector}},aS=new Map(["top","right","bottom","left"].flatMap(e=>[[`border-${e}-style`,e],[`border-${e}-color`,e]])),aE=null,aC=new Map,aT=(e,t)=>{let r=aS.get(e);if(!r)return!1;let n=t.getPropertyValue(`border-${r}-width`);return"0px"===n||"0"===n},aA=async e=>{let t=await ((e,t={})=>{let r,n;return r=()=>aN(e,t,{fiber:null,fiberSource:null,stack:[]}),n=async r=>aN(e,t,await av(r)),aa(()=>{let t=ah(e);return t?{isCurrent:()=>af(e,t),valuePromise:n(t)}:null},r)})(e),r=o6(e),n=(e=>{if(r8(e)?.supportsDomEditing===!1)return"";let t=(e=>{let t=aC.get(e);if(t)return t;let r=aE||((aE=document.createElement("iframe")).style.cssText="position:fixed;left:-9999px;width:0;height:0;border:none;visibility:hidden;",document.body.appendChild(aE),aE),n=r.contentDocument,i=n.createElement(e);n.body.appendChild(i);let o=r.contentWindow.getComputedStyle(i),a=new Map;for(let e of rN){let t=o.getPropertyValue(e);t&&a.set(e,t)}return i.remove(),aC.set(e,a),a})(e.tagName.toLowerCase()),r=getComputedStyle(e),n=[];for(let e of rN){let i=r.getPropertyValue(e);i&&i!==t.get(e)&&(aT(e,r)||n.push(`${e}: ${i};`))}let i=e.getAttribute("class")?.trim(),o=n.join(`
`);return i?o?`className: ${i}

${o}`:`className: ${i}`:o})(e);return{element:e,snippet:t.elementInfo,htmlPreview:r,stackString:t.stackContext,stack:t.stack,componentName:t.componentName,filePath:t.source?.filePath??null,lineNumber:t.source?.lineNumber??null,columnNumber:t.source?.columnNumber??null,fiber:t.fiber,selector:t.selector,styles:n}};var az=e.i(33902),aM=Object.defineProperty,aR=(e,t,r)=>{let n;return(n="symbol"!=typeof t?t+"":t)in e?aM(e,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[n]=r};Array.prototype.toSorted||Object.defineProperty(Array.prototype,"toSorted",{value:function(e){return[...this].sort(e)},writable:!0,configurable:!0});var a$="u">typeof window;function aj(e,t){return t-e}var aF=e=>{let t="",r=new Map;for(let t of e){let{forget:e,time:n,aggregatedCount:i,name:o}=t;r.has(i)||r.set(i,[]);let a=r.get(i);a&&a.push({name:o,forget:e,time:null!=n?n:0})}let n=Array.from(r.keys()).sort(aj),i=[],o=0;for(let e of n){let t=r.get(e);if(!t)continue;let n=function(e){let t=e[0].name,r=Math.min(4,e.length);for(let n=1;n<r;n++)t+=`, ${e[n].name}`;return t}(t),a=function(e){let t=e[0].time;for(let r=1,n=e.length;r<n;r++)t+=e[r].time;return t}(t),l=function(e){for(let t=0,r=e.length;t<r;t++)if(e[t].forget)return!0;return!1}(t);o+=a,t.length>4&&(n+="…"),e>1&&(n+=` \xd7 ${e}`),l&&(n=`✨${n}`),i.push(n)}return(t=i.join(", ")).length?(t.length>40&&(t=`${t.slice(0,40)}…`),o>=.01&&(t+=` (${Number(o.toFixed(2))}ms)`),t):null};function aO(e,t){return e===t||e!=e&&t!=t}var aP=()=>a$?(void 0===window.reactScanIdCounter&&(window.reactScanIdCounter=0),`${++window.reactScanIdCounter}`):"0",aL=e=>{let t=e.createOscillator(),r=e.createGain();t.connect(r),r.connect(e.destination);let n=[392,600],i=.3/n.length;n.forEach((r,n)=>{t.frequency.setValueAtTime(r,e.currentTime+n*i)}),t.type="sine",r.gain.setValueAtTime(.12,e.currentTime),r.gain.setTargetAtTime(0,e.currentTime+.21,.05),t.start(),t.stop(e.currentTime+.3)},aD=t2(({size:e=15,name:t,fill:r="currentColor",stroke:n="currentColor",className:i,externalURL:o="",style:a},l)=>{let s=Array.isArray(e)?e[0]:e,c=Array.isArray(e)?e[1]||e[0]:e,d=`${o}#${t}`;return rp("svg",{ref:l,width:`${s}px`,height:`${c}px`,fill:r,stroke:n,className:i,style:{...a,minWidth:`${s}px`,maxWidth:`${s}px`,minHeight:`${c}px`,maxHeight:`${c}px`},children:[rp("title",{children:t}),rp("use",{href:d})]})}),aI="react-scan-widget-settings-v2",aW="react-scan-widget-collapsed-v1",aU="react-scan-widget-last-view-v1",aH=(e=new Map,t=null,r)=>({nextPart:e,validators:t,classGroupId:r}),aB=[],aV=(e,t,r)=>{if(0==e.length-t)return r.classGroupId;let n=e[t],i=r.nextPart.get(n);if(i){let r=aV(e,t+1,i);if(r)return r}let o=r.validators;if(null===o)return;let a=0===t?e.join("-"):e.slice(t).join("-"),l=o.length;for(let e=0;e<l;e++){let t=o[e];if(t.validator(a))return t.classGroupId}},aq=(e,t)=>{let r=aH();for(let n in e)aG(e[n],r,n,t);return r},aG=(e,t,r,n)=>{let i=e.length;for(let o=0;o<i;o++)aJ(e[o],t,r,n)},aJ=(e,t,r,n)=>{"string"==typeof e?aX(e,t,r):"function"==typeof e?aY(e,t,r,n):aK(e,t,r,n)},aX=(e,t,r)=>{(""===e?t:aZ(t,e)).classGroupId=r},aY=(e,t,r,n)=>{aQ(e)?aG(e(n),t,r,n):(null===t.validators&&(t.validators=[]),t.validators.push({classGroupId:r,validator:e}))},aK=(e,t,r,n)=>{let i=Object.entries(e),o=i.length;for(let e=0;e<o;e++){let[o,a]=i[e];aG(a,aZ(t,o),r,n)}},aZ=(e,t)=>{let r=e,n=t.split("-"),i=n.length;for(let e=0;e<i;e++){let t=n[e],i=r.nextPart.get(t);i||(i=aH(),r.nextPart.set(t,i)),r=i}return r},aQ=e=>"isThemeGetter"in e&&!0===e.isThemeGetter,a0=[],a1=(e,t,r,n,i)=>({modifiers:e,hasImportantModifier:t,baseClassName:r,maybePostfixModifierPosition:n,isExternal:i}),a2=/\s+/,a5=e=>{let t;if("string"==typeof e)return e;let r="";for(let n=0;n<e.length;n++)e[n]&&(t=a5(e[n]))&&(r&&(r+=" "),r+=t);return r},a4=[],a3=e=>{let t=t=>t[e]||a4;return t.isThemeGetter=!0,t},a7=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,a6=/^\((?:(\w[\w-]*):)?(.+)\)$/i,a8=/^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/,a9=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,le=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,lt=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,lr=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,ln=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,li=e=>a8.test(e),lo=e=>!!e&&!Number.isNaN(Number(e)),la=e=>!!e&&Number.isInteger(Number(e)),ll=e=>e.endsWith("%")&&lo(e.slice(0,-1)),ls=e=>a9.test(e),lc=()=>!0,ld=e=>le.test(e)&&!lt.test(e),lu=()=>!1,lp=e=>lr.test(e),lm=e=>ln.test(e),lh=e=>!lg(e)&&!lN(e),lf=e=>lR(e,lO,lu),lg=e=>a7.test(e),lv=e=>lR(e,lP,ld),lb=e=>lR(e,lL,lo),lw=e=>lR(e,lI,lc),ly=e=>lR(e,lD,lu),lx=e=>lR(e,lj,lu),lk=e=>lR(e,lF,lm),l_=e=>lR(e,lW,lp),lN=e=>a6.test(e),lS=e=>l$(e,lP),lE=e=>l$(e,lD),lC=e=>l$(e,lj),lT=e=>l$(e,lO),lA=e=>l$(e,lF),lz=e=>l$(e,lW,!0),lM=e=>l$(e,lI,!0),lR=(e,t,r)=>{let n=a7.exec(e);return!!n&&(n[1]?t(n[1]):r(n[2]))},l$=(e,t,r=!1)=>{let n=a6.exec(e);return!!n&&(n[1]?t(n[1]):r)},lj=e=>"position"===e||"percentage"===e,lF=e=>"image"===e||"url"===e,lO=e=>"length"===e||"size"===e||"bg-size"===e,lP=e=>"length"===e,lL=e=>"number"===e,lD=e=>"family-name"===e,lI=e=>"number"===e||"weight"===e,lW=e=>"shadow"===e,lU=(d=()=>{let e=a3("color"),t=a3("font"),r=a3("text"),n=a3("font-weight"),i=a3("tracking"),o=a3("leading"),a=a3("breakpoint"),l=a3("container"),s=a3("spacing"),c=a3("radius"),d=a3("shadow"),u=a3("inset-shadow"),p=a3("text-shadow"),m=a3("drop-shadow"),h=a3("blur"),f=a3("perspective"),g=a3("aspect"),v=a3("ease"),b=a3("animate"),w=()=>["auto","avoid","all","avoid-page","page","left","right","column"],y=()=>["center","top","bottom","left","right","top-left","left-top","top-right","right-top","bottom-right","right-bottom","bottom-left","left-bottom"],x=()=>[...y(),lN,lg],k=()=>["auto","hidden","clip","visible","scroll"],_=()=>["auto","contain","none"],N=()=>[lN,lg,s],S=()=>[li,"full","auto",...N()],E=()=>[la,"none","subgrid",lN,lg],C=()=>["auto",{span:["full",la,lN,lg]},la,lN,lg],T=()=>[la,"auto",lN,lg],A=()=>["auto","min","max","fr",lN,lg],z=()=>["start","end","center","between","around","evenly","stretch","baseline","center-safe","end-safe"],M=()=>["start","end","center","stretch","center-safe","end-safe"],R=()=>["auto",...N()],$=()=>[li,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",...N()],j=()=>[li,"screen","full","dvw","lvw","svw","min","max","fit",...N()],F=()=>[li,"screen","full","lh","dvh","lvh","svh","min","max","fit",...N()],O=()=>[e,lN,lg],P=()=>[...y(),lC,lx,{position:[lN,lg]}],L=()=>["no-repeat",{repeat:["","x","y","space","round"]}],D=()=>["auto","cover","contain",lT,lf,{size:[lN,lg]}],I=()=>[ll,lS,lv],W=()=>["","none","full",c,lN,lg],U=()=>["",lo,lS,lv],H=()=>["solid","dashed","dotted","double"],B=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],V=()=>[lo,ll,lC,lx],q=()=>["","none",h,lN,lg],G=()=>["none",lo,lN,lg],J=()=>["none",lo,lN,lg],X=()=>[lo,lN,lg],Y=()=>[li,"full",...N()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[ls],breakpoint:[ls],color:[lc],container:[ls],"drop-shadow":[ls],ease:["in","out","in-out"],font:[lh],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[ls],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[ls],shadow:[ls],spacing:["px",lo],text:[ls],"text-shadow":[ls],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",li,lg,lN,g]}],container:["container"],columns:[{columns:[lo,lg,lN,l]}],"break-after":[{"break-after":w()}],"break-before":[{"break-before":w()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:x()}],overflow:[{overflow:k()}],"overflow-x":[{"overflow-x":k()}],"overflow-y":[{"overflow-y":k()}],overscroll:[{overscroll:_()}],"overscroll-x":[{"overscroll-x":_()}],"overscroll-y":[{"overscroll-y":_()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:S()}],"inset-x":[{"inset-x":S()}],"inset-y":[{"inset-y":S()}],start:[{"inset-s":S(),start:S()}],end:[{"inset-e":S(),end:S()}],"inset-bs":[{"inset-bs":S()}],"inset-be":[{"inset-be":S()}],top:[{top:S()}],right:[{right:S()}],bottom:[{bottom:S()}],left:[{left:S()}],visibility:["visible","invisible","collapse"],z:[{z:[la,"auto",lN,lg]}],basis:[{basis:[li,"full","auto",l,...N()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[lo,li,"auto","initial","none",lg]}],grow:[{grow:["",lo,lN,lg]}],shrink:[{shrink:["",lo,lN,lg]}],order:[{order:[la,"first","last","none",lN,lg]}],"grid-cols":[{"grid-cols":E()}],"col-start-end":[{col:C()}],"col-start":[{"col-start":T()}],"col-end":[{"col-end":T()}],"grid-rows":[{"grid-rows":E()}],"row-start-end":[{row:C()}],"row-start":[{"row-start":T()}],"row-end":[{"row-end":T()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":A()}],"auto-rows":[{"auto-rows":A()}],gap:[{gap:N()}],"gap-x":[{"gap-x":N()}],"gap-y":[{"gap-y":N()}],"justify-content":[{justify:[...z(),"normal"]}],"justify-items":[{"justify-items":[...M(),"normal"]}],"justify-self":[{"justify-self":["auto",...M()]}],"align-content":[{content:["normal",...z()]}],"align-items":[{items:[...M(),{baseline:["","last"]}]}],"align-self":[{self:["auto",...M(),{baseline:["","last"]}]}],"place-content":[{"place-content":z()}],"place-items":[{"place-items":[...M(),"baseline"]}],"place-self":[{"place-self":["auto",...M()]}],p:[{p:N()}],px:[{px:N()}],py:[{py:N()}],ps:[{ps:N()}],pe:[{pe:N()}],pbs:[{pbs:N()}],pbe:[{pbe:N()}],pt:[{pt:N()}],pr:[{pr:N()}],pb:[{pb:N()}],pl:[{pl:N()}],m:[{m:R()}],mx:[{mx:R()}],my:[{my:R()}],ms:[{ms:R()}],me:[{me:R()}],mbs:[{mbs:R()}],mbe:[{mbe:R()}],mt:[{mt:R()}],mr:[{mr:R()}],mb:[{mb:R()}],ml:[{ml:R()}],"space-x":[{"space-x":N()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":N()}],"space-y-reverse":["space-y-reverse"],size:[{size:$()}],"inline-size":[{inline:["auto",...j()]}],"min-inline-size":[{"min-inline":["auto",...j()]}],"max-inline-size":[{"max-inline":["none",...j()]}],"block-size":[{block:["auto",...F()]}],"min-block-size":[{"min-block":["auto",...F()]}],"max-block-size":[{"max-block":["none",...F()]}],w:[{w:[l,"screen",...$()]}],"min-w":[{"min-w":[l,"screen","none",...$()]}],"max-w":[{"max-w":[l,"screen","none","prose",{screen:[a]},...$()]}],h:[{h:["screen","lh",...$()]}],"min-h":[{"min-h":["screen","lh","none",...$()]}],"max-h":[{"max-h":["screen","lh",...$()]}],"font-size":[{text:["base",r,lS,lv]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[n,lM,lw]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",ll,lg]}],"font-family":[{font:[lE,ly,t]}],"font-features":[{"font-features":[lg]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[i,lN,lg]}],"line-clamp":[{"line-clamp":[lo,"none",lN,lb]}],leading:[{leading:[o,...N()]}],"list-image":[{"list-image":["none",lN,lg]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",lN,lg]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:O()}],"text-color":[{text:O()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...H(),"wavy"]}],"text-decoration-thickness":[{decoration:[lo,"from-font","auto",lN,lv]}],"text-decoration-color":[{decoration:O()}],"underline-offset":[{"underline-offset":[lo,"auto",lN,lg]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:N()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",lN,lg]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],wrap:[{wrap:["break-word","anywhere","normal"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",lN,lg]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:P()}],"bg-repeat":[{bg:L()}],"bg-size":[{bg:D()}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},la,lN,lg],radial:["",lN,lg],conic:[la,lN,lg]},lA,lk]}],"bg-color":[{bg:O()}],"gradient-from-pos":[{from:I()}],"gradient-via-pos":[{via:I()}],"gradient-to-pos":[{to:I()}],"gradient-from":[{from:O()}],"gradient-via":[{via:O()}],"gradient-to":[{to:O()}],rounded:[{rounded:W()}],"rounded-s":[{"rounded-s":W()}],"rounded-e":[{"rounded-e":W()}],"rounded-t":[{"rounded-t":W()}],"rounded-r":[{"rounded-r":W()}],"rounded-b":[{"rounded-b":W()}],"rounded-l":[{"rounded-l":W()}],"rounded-ss":[{"rounded-ss":W()}],"rounded-se":[{"rounded-se":W()}],"rounded-ee":[{"rounded-ee":W()}],"rounded-es":[{"rounded-es":W()}],"rounded-tl":[{"rounded-tl":W()}],"rounded-tr":[{"rounded-tr":W()}],"rounded-br":[{"rounded-br":W()}],"rounded-bl":[{"rounded-bl":W()}],"border-w":[{border:U()}],"border-w-x":[{"border-x":U()}],"border-w-y":[{"border-y":U()}],"border-w-s":[{"border-s":U()}],"border-w-e":[{"border-e":U()}],"border-w-bs":[{"border-bs":U()}],"border-w-be":[{"border-be":U()}],"border-w-t":[{"border-t":U()}],"border-w-r":[{"border-r":U()}],"border-w-b":[{"border-b":U()}],"border-w-l":[{"border-l":U()}],"divide-x":[{"divide-x":U()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":U()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...H(),"hidden","none"]}],"divide-style":[{divide:[...H(),"hidden","none"]}],"border-color":[{border:O()}],"border-color-x":[{"border-x":O()}],"border-color-y":[{"border-y":O()}],"border-color-s":[{"border-s":O()}],"border-color-e":[{"border-e":O()}],"border-color-bs":[{"border-bs":O()}],"border-color-be":[{"border-be":O()}],"border-color-t":[{"border-t":O()}],"border-color-r":[{"border-r":O()}],"border-color-b":[{"border-b":O()}],"border-color-l":[{"border-l":O()}],"divide-color":[{divide:O()}],"outline-style":[{outline:[...H(),"none","hidden"]}],"outline-offset":[{"outline-offset":[lo,lN,lg]}],"outline-w":[{outline:["",lo,lS,lv]}],"outline-color":[{outline:O()}],shadow:[{shadow:["","none",d,lz,l_]}],"shadow-color":[{shadow:O()}],"inset-shadow":[{"inset-shadow":["none",u,lz,l_]}],"inset-shadow-color":[{"inset-shadow":O()}],"ring-w":[{ring:U()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:O()}],"ring-offset-w":[{"ring-offset":[lo,lv]}],"ring-offset-color":[{"ring-offset":O()}],"inset-ring-w":[{"inset-ring":U()}],"inset-ring-color":[{"inset-ring":O()}],"text-shadow":[{"text-shadow":["none",p,lz,l_]}],"text-shadow-color":[{"text-shadow":O()}],opacity:[{opacity:[lo,lN,lg]}],"mix-blend":[{"mix-blend":[...B(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":B()}],"mask-clip":[{"mask-clip":["border","padding","content","fill","stroke","view"]},"mask-no-clip"],"mask-composite":[{mask:["add","subtract","intersect","exclude"]}],"mask-image-linear-pos":[{"mask-linear":[lo]}],"mask-image-linear-from-pos":[{"mask-linear-from":V()}],"mask-image-linear-to-pos":[{"mask-linear-to":V()}],"mask-image-linear-from-color":[{"mask-linear-from":O()}],"mask-image-linear-to-color":[{"mask-linear-to":O()}],"mask-image-t-from-pos":[{"mask-t-from":V()}],"mask-image-t-to-pos":[{"mask-t-to":V()}],"mask-image-t-from-color":[{"mask-t-from":O()}],"mask-image-t-to-color":[{"mask-t-to":O()}],"mask-image-r-from-pos":[{"mask-r-from":V()}],"mask-image-r-to-pos":[{"mask-r-to":V()}],"mask-image-r-from-color":[{"mask-r-from":O()}],"mask-image-r-to-color":[{"mask-r-to":O()}],"mask-image-b-from-pos":[{"mask-b-from":V()}],"mask-image-b-to-pos":[{"mask-b-to":V()}],"mask-image-b-from-color":[{"mask-b-from":O()}],"mask-image-b-to-color":[{"mask-b-to":O()}],"mask-image-l-from-pos":[{"mask-l-from":V()}],"mask-image-l-to-pos":[{"mask-l-to":V()}],"mask-image-l-from-color":[{"mask-l-from":O()}],"mask-image-l-to-color":[{"mask-l-to":O()}],"mask-image-x-from-pos":[{"mask-x-from":V()}],"mask-image-x-to-pos":[{"mask-x-to":V()}],"mask-image-x-from-color":[{"mask-x-from":O()}],"mask-image-x-to-color":[{"mask-x-to":O()}],"mask-image-y-from-pos":[{"mask-y-from":V()}],"mask-image-y-to-pos":[{"mask-y-to":V()}],"mask-image-y-from-color":[{"mask-y-from":O()}],"mask-image-y-to-color":[{"mask-y-to":O()}],"mask-image-radial":[{"mask-radial":[lN,lg]}],"mask-image-radial-from-pos":[{"mask-radial-from":V()}],"mask-image-radial-to-pos":[{"mask-radial-to":V()}],"mask-image-radial-from-color":[{"mask-radial-from":O()}],"mask-image-radial-to-color":[{"mask-radial-to":O()}],"mask-image-radial-shape":[{"mask-radial":["circle","ellipse"]}],"mask-image-radial-size":[{"mask-radial":[{closest:["side","corner"],farthest:["side","corner"]}]}],"mask-image-radial-pos":[{"mask-radial-at":y()}],"mask-image-conic-pos":[{"mask-conic":[lo]}],"mask-image-conic-from-pos":[{"mask-conic-from":V()}],"mask-image-conic-to-pos":[{"mask-conic-to":V()}],"mask-image-conic-from-color":[{"mask-conic-from":O()}],"mask-image-conic-to-color":[{"mask-conic-to":O()}],"mask-mode":[{mask:["alpha","luminance","match"]}],"mask-origin":[{"mask-origin":["border","padding","content","fill","stroke","view"]}],"mask-position":[{mask:P()}],"mask-repeat":[{mask:L()}],"mask-size":[{mask:D()}],"mask-type":[{"mask-type":["alpha","luminance"]}],"mask-image":[{mask:["none",lN,lg]}],filter:[{filter:["","none",lN,lg]}],blur:[{blur:q()}],brightness:[{brightness:[lo,lN,lg]}],contrast:[{contrast:[lo,lN,lg]}],"drop-shadow":[{"drop-shadow":["","none",m,lz,l_]}],"drop-shadow-color":[{"drop-shadow":O()}],grayscale:[{grayscale:["",lo,lN,lg]}],"hue-rotate":[{"hue-rotate":[lo,lN,lg]}],invert:[{invert:["",lo,lN,lg]}],saturate:[{saturate:[lo,lN,lg]}],sepia:[{sepia:["",lo,lN,lg]}],"backdrop-filter":[{"backdrop-filter":["","none",lN,lg]}],"backdrop-blur":[{"backdrop-blur":q()}],"backdrop-brightness":[{"backdrop-brightness":[lo,lN,lg]}],"backdrop-contrast":[{"backdrop-contrast":[lo,lN,lg]}],"backdrop-grayscale":[{"backdrop-grayscale":["",lo,lN,lg]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[lo,lN,lg]}],"backdrop-invert":[{"backdrop-invert":["",lo,lN,lg]}],"backdrop-opacity":[{"backdrop-opacity":[lo,lN,lg]}],"backdrop-saturate":[{"backdrop-saturate":[lo,lN,lg]}],"backdrop-sepia":[{"backdrop-sepia":["",lo,lN,lg]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":N()}],"border-spacing-x":[{"border-spacing-x":N()}],"border-spacing-y":[{"border-spacing-y":N()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",lN,lg]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[lo,"initial",lN,lg]}],ease:[{ease:["linear","initial",v,lN,lg]}],delay:[{delay:[lo,lN,lg]}],animate:[{animate:["none",b,lN,lg]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[f,lN,lg]}],"perspective-origin":[{"perspective-origin":x()}],rotate:[{rotate:G()}],"rotate-x":[{"rotate-x":G()}],"rotate-y":[{"rotate-y":G()}],"rotate-z":[{"rotate-z":G()}],scale:[{scale:J()}],"scale-x":[{"scale-x":J()}],"scale-y":[{"scale-y":J()}],"scale-z":[{"scale-z":J()}],"scale-3d":["scale-3d"],skew:[{skew:X()}],"skew-x":[{"skew-x":X()}],"skew-y":[{"skew-y":X()}],transform:[{transform:[lN,lg,"","none","gpu","cpu"]}],"transform-origin":[{origin:x()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:Y()}],"translate-x":[{"translate-x":Y()}],"translate-y":[{"translate-y":Y()}],"translate-z":[{"translate-z":Y()}],"translate-none":["translate-none"],accent:[{accent:O()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:O()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",lN,lg]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":N()}],"scroll-mx":[{"scroll-mx":N()}],"scroll-my":[{"scroll-my":N()}],"scroll-ms":[{"scroll-ms":N()}],"scroll-me":[{"scroll-me":N()}],"scroll-mbs":[{"scroll-mbs":N()}],"scroll-mbe":[{"scroll-mbe":N()}],"scroll-mt":[{"scroll-mt":N()}],"scroll-mr":[{"scroll-mr":N()}],"scroll-mb":[{"scroll-mb":N()}],"scroll-ml":[{"scroll-ml":N()}],"scroll-p":[{"scroll-p":N()}],"scroll-px":[{"scroll-px":N()}],"scroll-py":[{"scroll-py":N()}],"scroll-ps":[{"scroll-ps":N()}],"scroll-pe":[{"scroll-pe":N()}],"scroll-pbs":[{"scroll-pbs":N()}],"scroll-pbe":[{"scroll-pbe":N()}],"scroll-pt":[{"scroll-pt":N()}],"scroll-pr":[{"scroll-pr":N()}],"scroll-pb":[{"scroll-pb":N()}],"scroll-pl":[{"scroll-pl":N()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",lN,lg]}],fill:[{fill:["none",...O()]}],"stroke-w":[{stroke:[lo,lS,lv,lb]}],stroke:[{stroke:["none",...O()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","inset-bs","inset-be","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pbs","pbe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mbs","mbe","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-x","border-w-y","border-w-s","border-w-e","border-w-bs","border-w-be","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-x","border-color-y","border-color-s","border-color-e","border-color-bs","border-color-be","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mbs","scroll-mbe","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pbs","scroll-pbe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},orderSensitiveModifiers:["*","**","after","backdrop","before","details-content","file","first-letter","first-line","marker","placeholder","selection"]}},l=e=>{let t=i(e);if(t)return t;let r=((e,t)=>{let{parseClassName:r,getClassGroupId:n,getConflictingClassGroupIds:i,sortModifiers:o}=t,a=[],l=e.trim().split(a2),s="";for(let e=l.length-1;e>=0;e-=1){let t=l[e],{isExternal:c,modifiers:d,hasImportantModifier:u,baseClassName:p,maybePostfixModifierPosition:m}=r(t);if(c){s=t+(s.length>0?" "+s:s);continue}let h=!!m,f=n(h?p.substring(0,m):p);if(!f){if(!h||!(f=n(p))){s=t+(s.length>0?" "+s:s);continue}h=!1}let g=0===d.length?"":1===d.length?d[0]:o(d).join(":"),v=u?g+"!":g,b=v+f;if(a.indexOf(b)>-1)continue;a.push(b);let w=i(f,h);for(let e=0;e<w.length;++e){let t=w[e];a.push(v+t)}s=t+(s.length>0?" "+s:s)}return s})(e,n);return o(e,r),r},a=e=>{var t;let r;return i=(n={cache:(e=>{if(e<1)return{get:()=>void 0,set:()=>{}};let t=0,r=Object.create(null),n=Object.create(null),i=(i,o)=>{r[i]=o,++t>e&&(t=0,n=r,r=Object.create(null))};return{get(e){let t=r[e];return void 0!==t?t:void 0!==(t=n[e])?(i(e,t),t):void 0},set(e,t){e in r?r[e]=t:i(e,t)}}})((t=[].reduce((e,t)=>t(e),d())).cacheSize),parseClassName:(e=>{let{prefix:t,experimentalParseClassName:r}=e,n=e=>{let t,r=[],n=0,i=0,o=0,a=e.length;for(let l=0;l<a;l++){let a=e[l];if(0===n&&0===i){if(":"===a){r.push(e.slice(o,l)),o=l+1;continue}if("/"===a){t=l;continue}}"["===a?n++:"]"===a?n--:"("===a?i++:")"===a&&i--}let l=0===r.length?e:e.slice(o),s=l,c=!1;return l.endsWith("!")?(s=l.slice(0,-1),c=!0):l.startsWith("!")&&(s=l.slice(1),c=!0),a1(r,c,s,t&&t>o?t-o:void 0)};if(t){let e=t+":",r=n;n=t=>t.startsWith(e)?r(t.slice(e.length)):a1(a0,!1,t,void 0,!0)}if(r){let e=n;n=t=>r({className:t,parseClassName:e})}return n})(t),sortModifiers:(r=new Map,t.orderSensitiveModifiers.forEach((e,t)=>{r.set(e,1e6+t)}),e=>{let t=[],n=[];for(let i=0;i<e.length;i++){let o=e[i],a="["===o[0],l=r.has(o);a||l?(n.length>0&&(n.sort(),t.push(...n),n=[]),t.push(o)):n.push(o)}return n.length>0&&(n.sort(),t.push(...n)),t}),...(e=>{let t=(e=>{let{theme:t,classGroups:r}=e;return aq(r,t)})(e),{conflictingClassGroups:r,conflictingClassGroupModifiers:n}=e;return{getClassGroupId:e=>{if(e.startsWith("[")&&e.endsWith("]")){var r;let t,n,i;return -1===(r=e).slice(1,-1).indexOf(":")?void 0:(n=(t=r.slice(1,-1)).indexOf(":"),(i=t.slice(0,n))?"arbitrary.."+i:void 0)}let n=e.split("-"),i=+(""===n[0]&&n.length>1);return aV(n,i,t)},getConflictingClassGroupIds:(e,t)=>{if(t){let t=n[e],i=r[e];if(t){if(i){let e=Array(i.length+t.length);for(let t=0;t<i.length;t++)e[t]=i[t];for(let r=0;r<t.length;r++)e[i.length+r]=t[r];return e}return t}return i||aB}return r[e]||aB}}})(t)}).cache.get,o=n.cache.set,a=l,l(e)},(...e)=>a(((...e)=>{let t,r,n=0,i="";for(;n<e.length;)(t=e[n++])&&(r=a5(t))&&(i&&(i+=" "),i+=r);return i})(...e))),lH=(...e)=>lU(function(){for(var e,t,r=0,n="",i=arguments.length;r<i;r++)(e=arguments[r])&&(t=function e(t){var r,n,i="";if("string"==typeof t||"number"==typeof t)i+=t;else if("object"==typeof t)if(Array.isArray(t)){var o=t.length;for(r=0;r<o;r++)t[r]&&(n=e(t[r]))&&(i&&(i+=" "),i+=n)}else for(n in t)t[n]&&(i&&(i+=" "),i+=n);return i}(e))&&(n&&(n+=" "),n+=t);return n}(e));"u">typeof navigator&&navigator.userAgent.includes("Firefox");var lB=(e,t)=>{let r=0;return n=>{let i=Date.now();if(i-r>=t)return r=i,e(n)}},lV=e=>{if(!a$)return null;try{let t=localStorage.getItem(e);return t?JSON.parse(t):null}catch{return null}},lq=(e,t)=>{if(a$)try{window.localStorage.setItem(e,JSON.stringify(t))}catch{}},lG=e=>{if(a$)try{window.localStorage.removeItem(e)}catch{}},lJ=e=>{if(!e)return{name:"Unknown",wrappers:[],wrapperTypes:[]};let{tag:t,type:r,elementType:n}=e,i=G(r),o=[],a=[];if(V(e)||15===t||14===t||(null==r?void 0:r.$$typeof)===Symbol.for("react.memo")||(null==n?void 0:n.$$typeof)===Symbol.for("react.memo")){let t=V(e);a.push({type:"memo",title:t?"This component has been auto-memoized by the React Compiler.":"Memoized component that skips re-renders if props are the same",compiler:t})}if(24===t&&a.push({type:"lazy",title:"Lazily loaded component that supports code splitting"}),13===t&&a.push({type:"suspense",title:"Component that can suspend while content is loading"}),12===t&&a.push({type:"profiler",title:"Component that measures rendering performance"}),"string"==typeof i){let e=/^(\w+)\((.*)\)$/,t=i;for(;e.test(t);){let r=t.match(e);if((null==r?void 0:r[1])&&(null==r?void 0:r[2]))o.unshift(r[1]),t=r[2];else break}i=t}return{name:i||"Unknown",wrappers:o,wrapperTypes:a}},lX=e=>"number"==typeof e&&Number.isFinite(e)&&e>=0,lY=e=>!!e&&"object"==typeof e&&!Array.isArray(e),lK=()=>{let e=uW.options.value.safeArea;if(lX(e))return{top:e,right:e,bottom:e,left:e};if(lY(e)){let t=e.top,r=e.right,n=e.bottom,i=e.left;return{top:lX(t)?t:24,right:lX(r)?r:24,bottom:lX(n)?n:24,left:lX(i)?i:24}}return{top:24,right:24,bottom:24,left:24}},lZ=tx(!1),lQ=tx(null),l0=()=>({corner:"bottom-right",dimensions:{isFullWidth:!1,isFullHeight:!1,width:550,height:350,position:{x:24,y:24}},lastDimensions:{isFullWidth:!1,isFullHeight:!1,width:550,height:350,position:{x:24,y:24}},componentsTree:{width:240}});l0();var l1=tx((s=l0(),(c=lV(aI))?{corner:null!=(u=c.corner)?u:s.corner,dimensions:null!=(p=c.dimensions)?p:s.dimensions,lastDimensions:null!=(h=null!=(m=c.lastDimensions)?m:c.dimensions)?h:s.lastDimensions,componentsTree:null!=(f=c.componentsTree)?f:s.componentsTree}:(lq(aI,{corner:s.corner,dimensions:s.dimensions,lastDimensions:s.lastDimensions,componentsTree:s.componentsTree}),s))),l2=()=>{if(!a$)return;let{dimensions:e}=l1.value,{width:t,height:r,position:n}=e,i=lK();l1.value={...l1.value,dimensions:{isFullWidth:t>=window.innerWidth-i.left-i.right,isFullHeight:r>=window.innerHeight-i.top-i.bottom,width:t,height:r,position:n}}},l5=tx({view:"none"}),l4=lV(aW),l3=tx(null!=l4?l4:null);function l7(){return!1}function l6(e){function t(t){return this.shouldComponentUpdate=l7,eS(e,t)}return t.displayName=`Memo(${e.displayName||e.name})`,t.prototype.isReactComponent=!0,t._forwarded=!0,t}var l8=new WeakMap,l9={activeFlashes:new Map,create(e){let t,r,n,i=e.querySelector(".react-scan-flash-overlay"),o=i instanceof HTMLElement?i:((t=document.createElement("div")).className="react-scan-flash-overlay",e.appendChild(t),r=(()=>{e.querySelector(".react-scan-flash-overlay")&&this.create(e)}).bind(null,e),document.addEventListener("scroll",r,{passive:!0,capture:!0}),n=()=>{document.removeEventListener("scroll",r,{capture:!0})},this.activeFlashes.set(e,{element:e,overlay:t,scrollCleanup:n}),t),a=l8.get(o);a&&(clearTimeout(a),l8.delete(o)),requestAnimationFrame(()=>{o.style.transition="none",o.style.opacity="0.9";let t=setTimeout(()=>{o.style.transition="opacity 150ms ease-out",o.style.opacity="0";let t=setTimeout(()=>{o.parentNode&&o.parentNode.removeChild(o);let t=this.activeFlashes.get(e);(null==t?void 0:t.scrollCleanup)&&t.scrollCleanup(),this.activeFlashes.delete(e),l8.delete(o)},150);l8.set(o,t)},300);l8.set(o,t)})},cleanup(e){let t=this.activeFlashes.get(e);if(t){let r=l8.get(t.overlay);r&&(clearTimeout(r),l8.delete(t.overlay)),t.overlay.parentNode&&t.overlay.parentNode.removeChild(t.overlay),t.scrollCleanup&&t.scrollCleanup(),this.activeFlashes.delete(e)}},cleanupAll(){for(let[,e]of this.activeFlashes)this.cleanup(e.element)}},se={updates:[],currentFiber:null,totalUpdates:0,windowOffset:0,currentIndex:0,isViewingHistory:!1,latestFiber:null,isVisible:!1,playbackSpeed:1},st=tx(se),sr=tx(0),sn=[],si=null,so=tx({query:"",matches:[],currentMatchIndex:-1}),sa=tx(!1),sl=(e,t=0,r=null)=>e.reduce((e,n,i)=>{var o,a;let l=n.element?(e=>{var t;let r=[],n=e;for(;n;){let e=n.elementType,i="function"==typeof e?e.displayName||e.name:"string"==typeof e?e:"Unknown",o=void 0!==n.index?`[${n.index}]`:"";r.unshift(`${i}${o}`),n=null!=(t=n.return)?t:null}return r.join("::")})(n.fiber):`${r}-${i}`,s=(null==(o=n.fiber)?void 0:o.type)?c_(n.fiber):void 0,c={...n,depth:t,nodeId:l,parentId:r,fiber:n.fiber,renderData:s};return e.push(c),(null==(a=n.children)?void 0:a.length)&&e.push(...sl(n.children,t+1,l)),e},[]),ss=["memo","forwardRef","lazy","suspense"],sc=e=>{let t=e.match(/\[(.*?)\]/);if(!t)return null;let r=[];for(let e of t[1].split(",")){let t=e.trim().toLowerCase();t&&r.push(t)}return r},sd=(e,t)=>{if(0===e.length)return!0;if(!t.length)return!1;for(let r of e){let e=!1;for(let n of t)if(n.type.toLowerCase().includes(r)){e=!0;break}if(!e)return!1}return!0},su=e=>e>0?e<.1-Number.EPSILON?"< 0.1":e<1e3?Number(e.toFixed(1)).toString():`${(e/1e3).toFixed(1)}k`:"0",sp=({node:e,nodeIndex:t,hasChildren:r,isCollapsed:n,handleTreeNodeClick:i,handleTreeNodeToggle:o,searchValue:a})=>{var l,s,c;let d=e7(null),u=e7(null!=(s=null==(l=e.renderData)?void 0:l.renderCount)?s:0),{highlightedText:p,typeHighlight:m}=e6(()=>{let{query:t,matches:r}=a,n=r.some(t=>t.nodeId===e.nodeId),i=sc(t)||[],o=t?t.replace(/\[.*?\]/,"").trim():"";if(!t||!n)return{highlightedText:rp("span",{className:"truncate",children:e.label}),typeHighlight:!1};let l=!0;if(i.length>0)if(e.fiber){let{wrapperTypes:t}=lJ(e.fiber);l=sd(i,t)}else l=!1;let s=rp("span",{className:"truncate",children:e.label});if(o)try{if(o.startsWith("/")&&o.endsWith("/")){let t=o.slice(1,-1),r=RegExp(`(${t})`,"i"),n=e.label.split(r);s=rp("span",{className:"tree-node-search-highlight",children:n.map((t,i)=>r.test(t)?rp("span",{className:lH("regex",{start:r.test(t)&&0===i,middle:r.test(t)&&i%2==1,end:r.test(t)&&i===n.length-1,"!ml-0":1===i}),children:t},`${e.nodeId}-${t}`):t)})}else{let t=e.label.toLowerCase(),r=o.toLowerCase(),n=t.indexOf(r);n>=0&&(s=rp("span",{className:"tree-node-search-highlight",children:[e.label.slice(0,n),rp("span",{className:"single",children:e.label.slice(n,n+o.length)}),e.label.slice(n+o.length)]}))}}catch{}return{highlightedText:s,typeHighlight:l&&i.length>0}},[e.label,e.nodeId,e.fiber,a]);e4(()=>{var t;let r=null==(t=e.renderData)?void 0:t.renderCount,n=d.current;n&&u.current&&r&&u.current!==r&&(n.classList.remove("count-flash"),n.offsetWidth,n.classList.add("count-flash"),u.current=r)},[null==(c=e.renderData)?void 0:c.renderCount]);let h=e6(()=>{if(!e.renderData)return null;let{selfTime:t,totalTime:r,renderCount:n}=e.renderData;return n?rp("span",{className:lH("flex items-center gap-x-0.5 ml-1.5","text-[10px] text-neutral-400"),children:rp("span",{ref:d,title:`Self time: ${su(t)}ms
Total time: ${su(r)}ms`,className:"count-badge",children:["×",n]})}):null},[e.renderData]),f=e6(()=>{if(!e.fiber)return null;let{wrapperTypes:t}=lJ(e.fiber),r=t[0];return rp("span",{className:lH("flex items-center gap-x-1","text-[10px] text-neutral-400 tracking-wide","overflow-hidden"),children:[r&&rp(eC,{children:[rp("span",{title:null==r?void 0:r.title,className:lH("rounded py-[1px] px-1","bg-neutral-700 text-neutral-300","truncate","memo"===r.type&&"bg-[#8e61e3] text-white",m&&"bg-yellow-300 text-black"),children:r.type},r.type),r.compiler&&rp("span",{className:"text-yellow-300 ml-1",children:"✨"})]}),t.length>1&&`\xd7${t.length}`,h]})},[e.fiber,m,h]);return rp("button",{type:"button",title:e.title,"data-index":t,className:lH("flex items-center gap-x-1","pl-1 pr-2","w-full h-7","text-left","rounded","cursor-pointer select-none"),onClick:i,children:[rp("button",{type:"button","data-index":t,onClick:o,className:lH("w-6 h-6 flex items-center justify-center","text-left"),children:r&&rp(aD,{name:"icon-chevron-right",size:12,className:lH("transition-transform",!n&&"rotate-90")})}),p,f]})},sm=()=>{let e=e7(null),t=e7(null),r=e7(null),n=e7(null),i=e7(null),o=e7(0),a=e7(!1),l=e7(!1),s=e7(null),[c,d]=e5([]),[u,p]=e5(new Set),[m,h]=e5(void 0),[f,g]=e5(so.value),v=e6(()=>{let e=[],t=new Map(c.map(e=>[e.nodeId,e]));for(let r of c){let n=!0,i=r;for(;i.parentId;){let e=t.get(i.parentId);if(!e)break;if(u.has(e.nodeId)){n=!1;break}i=e}n&&e.push(r)}return e},[u,c]),{virtualItems:b,totalSize:w}=(e=>{let{count:t,getScrollElement:r,estimateSize:n,overscan:i=5}=e,[o,a]=e5(0),[l,s]=e5(0),c=e7(),d=e7(null),u=e7(null),p=n(),m=e8(e=>{var t,r;d.current&&s(null!=(r=null==(t=null==e?void 0:e[0])?void 0:t.contentRect.height)?r:d.current.getBoundingClientRect().height)},[]),h=e8(()=>{null!==u.current&&cancelAnimationFrame(u.current),u.current=requestAnimationFrame(()=>{m(),u.current=null})},[m]);e4(()=>{let e=r();if(!e)return;d.current=e;let t=()=>{d.current&&a(d.current.scrollTop)};m(),c.current||(c.current=new ResizeObserver(()=>{h()})),c.current.observe(e),e.addEventListener("scroll",t,{passive:!0});let n=new MutationObserver(h);return n.observe(e,{attributes:!0,childList:!0,subtree:!0}),()=>{e.removeEventListener("scroll",t),c.current&&c.current.disconnect(),n.disconnect(),null!==u.current&&cancelAnimationFrame(u.current)}},[r,m,h]);let f=e6(()=>{let e=Math.floor(o/p);return{start:Math.max(0,e-i),end:Math.min(t,e+Math.ceil(l/p)+i)}},[o,p,l,t,i]);return{virtualItems:e6(()=>{let e=[];for(let t=f.start;t<f.end;t++)e.push({key:t,index:t,start:t*p});return e},[f,p]),totalSize:t*p,scrollTop:o,containerHeight:l}})({count:v.length,getScrollElement:()=>e.current,estimateSize:()=>28,overscan:5}),y=e8(t=>{var r;a.current=!0,null==(r=n.current)||r.blur(),sa.value=!0;let{parentCompositeFiber:i}=sU(t);if(!i)return;uI.inspectState.value={kind:"focused",focusedDomElement:t,fiber:i};let o=v.findIndex(e=>e.element===t);if(-1!==o){h(o);let t=28*o,r=e.current;if(r){let e=r.clientHeight,n=r.scrollTop;(t<n||t+28>n+e)&&r.scrollTo({top:Math.max(0,t-e/2),behavior:"instant"})}}},[v]),x=e8(e=>{let t=Number(e.currentTarget.dataset.index);if(Number.isNaN(t))return;let r=v[t].element;r&&y(r)},[v,y]),k=e8(e=>{p(t=>{let r=new Set(t);return r.has(e)?r.delete(e):r.add(e),r})},[]),_=e8(e=>{e.stopPropagation();let t=Number(e.target.dataset.index);Number.isNaN(t)||k(v[t].nodeId)},[v,k]),N=e8(t=>{var n,i,o,a,l;null==(n=r.current)||n.classList.remove("!border-red-500");let s=[];if(!t){so.value={query:t,matches:s,currentMatchIndex:-1};return}if(t.includes("[")&&!t.includes("]")&&t.length>t.indexOf("[")+1){null==(i=r.current)||i.classList.add("!border-red-500");return}let d=sc(t)||[];if(t.includes("[")&&!(e=>{if(0===e.length)return!1;for(let t of e){let e=!1;for(let r of ss)if(r.toLowerCase().includes(t)){e=!0;break}if(!e)return!1}return!0})(d)){null==(o=r.current)||o.classList.add("!border-red-500");return}let u=t.replace(/\[.*?\]/,"").trim(),p=/^\/.*\/$/.test(u),m=e=>!1;if(u.startsWith("/")&&!p&&u.length>1){null==(a=r.current)||a.classList.add("!border-red-500");return}if(p)try{let e=u.slice(1,-1),t=RegExp(e,"i");m=e=>t.test(e)}catch{null==(l=r.current)||l.classList.add("!border-red-500");return}else if(u){let e=u.toLowerCase();m=t=>t.toLowerCase().includes(e)}for(let e of c){let t=!0;if(u&&(t=m(e.label)),t&&d.length>0)if(e.fiber){let{wrapperTypes:r}=lJ(e.fiber);t=sd(d,r)}else t=!1;t&&s.push(e)}if(so.value={query:t,matches:s,currentMatchIndex:s.length>0?0:-1},s.length>0){let t=s[0],r=v.findIndex(e=>e.nodeId===t.nodeId);if(-1!==r){let t=e.current;if(t){let e=t.clientHeight;t.scrollTo({top:Math.max(0,28*r-e/2),behavior:"instant"})}}}},[c,v]),S=e8(e=>{let t=e.currentTarget;t&&N(t.value)},[N]),E=e8(t=>{let{matches:r,currentMatchIndex:n}=so.value;if(0===r.length)return;let i="next"===t?(n+1)%r.length:(n-1+r.length)%r.length;so.value={...so.value,currentMatchIndex:i};let o=r[i],a=v.findIndex(e=>e.nodeId===o.nodeId);if(-1!==a){h(a);let t=28*a,r=e.current;if(r){let e=r.clientHeight;r.scrollTo({top:Math.max(0,t-e/2),behavior:"instant"})}}},[v]),C=e8(r=>{if(t.current&&(t.current.style.width=`${r}px`),e.current){e.current.style.width=`${r}px`;let t=((e,t)=>{if(t<=0)return 24;let r=Math.max(0,e-240);return r<24?0:Math.max(0,Math.min(24,Math.min(.3*r,24*t)/t))})(r,o.current);e.current.style.setProperty("--indentation-size",`${t}px`)}},[]),T=e8(e=>{if(!s.current)return;let t=Math.floor(l1.value.dimensions.width-120);s.current.classList.remove("cursor-ew-resize","cursor-w-resize","cursor-e-resize"),e<=240?s.current.classList.add("cursor-w-resize"):e>=t?s.current.classList.add("cursor-e-resize"):s.current.classList.add("cursor-ew-resize")},[]),A=e8(t=>{if(t.preventDefault(),t.stopPropagation(),!e.current)return;e.current.style.setProperty("pointer-events","none"),l.current=!0;let r=t.clientX,n=e.current.offsetWidth,i=Math.floor(l1.value.dimensions.width-120);T(n);let o=e=>{let t=n+(r-e.clientX);T(t),C(Math.min(i,Math.max(240,t)))},a=()=>{e.current&&(e.current.style.removeProperty("pointer-events"),document.removeEventListener("pointermove",o),document.removeEventListener("pointerup",a),l1.value={...l1.value,componentsTree:{...l1.value.componentsTree,width:e.current.offsetWidth}},lq(aI,l1.value),l.current=!1)};document.addEventListener("pointermove",o),document.addEventListener("pointerup",a)},[C,T]);e4(()=>{if(e.current)return T(e.current.offsetWidth),l1.subscribe(()=>{e.current&&T(e.current.offsetWidth)})},[T]);let z=e8(()=>{a.current=!1},[]);return e4(()=>{let t=!0,r=()=>{let r=i.current;if(!r)return;let n=(e=>{let t=new Map,r=[];for(let{element:r,name:n,fiber:i}of e){if(!r)continue;let e=n,{name:o,wrappers:a}=lJ(i);o&&(e=a.length>0?`${a.join("(")}(${o})${")".repeat(a.length)}`:o),t.set(r,{label:o||n,title:e,children:[],element:r,fiber:i})}for(let{element:n,depth:i}of e){if(!n)continue;let e=t.get(n);if(e)if(0===i)r.push(e);else{let r=n.parentElement;for(;r;){let n=t.get(r);if(n){n.children=n.children||[],n.children.push(e);break}r=r.parentElement}}}return r})(sG());if(n.length>0){let i=sl(n);if(o.current=i.reduce((e,t)=>Math.max(e,t.depth),0),C(l1.value.componentsTree.width),d(i),t){t=!1;let n=i.findIndex(e=>e.element===r);if(-1!==n){let t=28*n,r=e.current;r&&setTimeout(()=>{r.scrollTo({top:t,behavior:"instant"})},96)}}}},n=uI.inspectState.subscribe(e=>{"focused"===e.kind&&(sa.value||(N(""),i.current=e.focusedDomElement,r()))}),a=0,s=sr.subscribe(()=>{"focused"===uI.inspectState.value.kind&&(cancelAnimationFrame(a),l.current||(a=requestAnimationFrame(()=>{sa.value=!1,r()})))});return()=>{n(),s(),so.value={query:"",matches:[],currentMatchIndex:-1}}},[]),e4(()=>{let e=e=>{if(a.current&&m)switch(e.key){case"ArrowUp":if(e.preventDefault(),e.stopPropagation(),m>0){let e=v[m-1];(null==e?void 0:e.element)&&y(e.element)}return;case"ArrowDown":if(e.preventDefault(),e.stopPropagation(),m<v.length-1){let e=v[m+1];(null==e?void 0:e.element)&&y(e.element)}return;case"ArrowLeft":case"ArrowRight":{e.preventDefault(),e.stopPropagation();let t=v[m];(null==t?void 0:t.nodeId)&&k(t.nodeId);return}}};return document.addEventListener("keydown",e),()=>{document.removeEventListener("keydown",e)}},[m,v,y,k]),e4(()=>so.subscribe(g),[]),e4(()=>l1.subscribe(e=>{var r;null==(r=t.current)||r.style.setProperty("transition","width 0.1s"),C(e.componentsTree.width),setTimeout(()=>{var e;null==(e=t.current)||e.style.removeProperty("transition")},500)}),[]),rp("div",{className:"react-scan-components-tree flex",children:[rp("div",{ref:s,onPointerDown:A,className:"relative resize-v-line",children:rp("span",{children:rp(aD,{name:"icon-ellipsis",size:18})})}),rp("div",{ref:t,className:"flex flex-col h-full",children:[rp("div",{className:"p-2 border-b border-[#1e1e1e]",children:rp("div",{ref:r,title:`Search components by:

• Name (e.g., "Button") — Case insensitive, matches any part

• Regular Expression (e.g., "/^Button/") — Use forward slashes

• Wrapper Type (e.g., "[memo,forwardRef]"):
   - Available types: memo, forwardRef, lazy, suspense
   - Matches any part of type name (e.g., "mo" matches "memo")
   - Use commas for multiple types

• Combined Search:
   - Mix name/regex with type: "button [for]"
   - Will match components satisfying both conditions

• Navigation:
   - Enter → Next match
   - Shift + Enter → Previous match
   - Cmd/Ctrl + Enter → Select and focus match
`,className:lH("relative","flex items-center gap-x-1 px-2","rounded","border border-transparent","focus-within:border-[#454545]","bg-[#1e1e1e] text-neutral-300","transition-colors","whitespace-nowrap","overflow-hidden"),children:[rp(aD,{name:"icon-search",size:12,className:" text-neutral-500"}),rp("div",{className:"relative flex-1 h-7 overflow-hidden",children:rp("input",{ref:n,type:"text",value:so.value.query,onClick:e=>{e.stopPropagation(),e.currentTarget.focus()},onPointerDown:e=>{e.stopPropagation()},onKeyDown:e=>{"Escape"===e.key&&e.currentTarget.blur(),so.value.matches.length&&("Enter"===e.key&&e.shiftKey?E("prev"):"Enter"===e.key&&(e.metaKey||e.ctrlKey?(e.preventDefault(),e.stopPropagation(),y(so.value.matches[so.value.currentMatchIndex].element),e.currentTarget.focus()):E("next")))},onChange:S,className:"absolute inset-y-0 inset-x-1",placeholder:"Component name, /regex/, or [type]"})}),so.value.query?rp(eC,{children:[rp("span",{className:"flex items-center gap-x-0.5 text-xs text-neutral-500",children:[so.value.currentMatchIndex+1,"|",so.value.matches.length]}),!!so.value.matches.length&&rp(eC,{children:[rp("button",{type:"button",onClick:e=>{e.stopPropagation(),E("prev")},className:"button rounded w-4 h-4 flex items-center justify-center text-neutral-400 hover:text-neutral-300",children:rp(aD,{name:"icon-chevron-right",className:"-rotate-90",size:12})}),rp("button",{type:"button",onClick:e=>{e.stopPropagation(),E("next")},className:"button rounded w-4 h-4 flex items-center justify-center text-neutral-400 hover:text-neutral-300",children:rp(aD,{name:"icon-chevron-right",className:"rotate-90",size:12})})]}),rp("button",{type:"button",onClick:e=>{e.stopPropagation(),N("")},className:"button rounded w-4 h-4 flex items-center justify-center text-neutral-400 hover:text-neutral-300",children:rp(aD,{name:"icon-close",size:12})})]}):!!c.length&&rp("span",{className:"text-xs text-neutral-500",children:c.length})]})}),rp("div",{className:"flex-1 overflow-hidden",children:rp("div",{ref:e,onPointerLeave:z,className:"tree h-full overflow-auto will-change-transform",children:rp("div",{className:"relative w-full",style:{height:w},children:b.map(e=>{var t;let r=v[e.index];if(!r)return null;let n="focused"===uI.inspectState.value.kind&&r.element===uI.inspectState.value.focusedDomElement,i=e.index===m;return rp("div",{className:lH("absolute left-0 w-full overflow-hidden","text-neutral-400 hover:text-neutral-300","bg-transparent hover:bg-[#5f3f9a]/20",(n||i)&&"text-neutral-300 bg-[#5f3f9a]/40 hover:bg-[#5f3f9a]/40"),style:{top:e.start,height:28},children:rp("div",{className:"w-full h-full",style:{paddingLeft:`calc(${r.depth} * var(--indentation-size))`},children:rp(sp,{node:r,nodeIndex:e.index,hasChildren:!!(null==(t=r.children)?void 0:t.length),isCollapsed:u.has(r.nodeId),handleTreeNodeClick:x,handleTreeNodeToggle:_,searchValue:f})})},r.nodeId)})})})})]})]})},sh=tQ(({text:e,children:t,onCopy:r,className:n,iconSize:i=14})=>{let[o,a]=e5(!1);e4(()=>{if(o){let e=setTimeout(()=>a(!1),600);return()=>{clearTimeout(e)}}},[o]);let l=e8(t=>{t.preventDefault(),t.stopPropagation(),navigator.clipboard.writeText(e).then(()=>{a(!0),null==r||r(!0,e)},()=>{null==r||r(!1,e)})},[e,r]),s=rp("button",{onClick:l,type:"button",className:lH("z-10","flex items-center justify-center","hover:text-dev-pink-400","transition-colors duration-200 ease-in-out","cursor-pointer",`size-[${i}px]`,n),children:rp(aD,{name:`icon-${o?"check":"copy"}`,size:[i],className:lH(o&&"text-green-500")})});return t?t({ClipboardIcon:s,onClick:l}):s}),sf=({length:e,expanded:t,onToggle:r,isNegative:n})=>rp("div",{className:"flex items-center gap-1",children:[rp("button",{type:"button",onClick:r,className:"flex items-center p-0 opacity-50",children:rp(aD,{name:"icon-chevron-right",size:12,className:lH("transition-[color,transform]",n?"text-[#f87171]":"text-[#4ade80]",t&&"rotate-90")})}),rp("span",{children:["Array(",e,")"]})]}),sg=({value:e,path:t,isNegative:r})=>{let[n,i]=e5(!1);if(null===e||"object"!=typeof e||e instanceof Date)return rp("div",{className:"flex items-center gap-1",children:[rp("span",{className:"text-gray-500",children:[t,":"]}),rp("span",{className:"truncate",children:sZ(e)})]});let o=Object.entries(e);return rp("div",{className:"flex flex-col",children:[rp("div",{className:"flex items-center gap-1",children:[rp("button",{type:"button",onClick:()=>i(!n),className:"flex items-center p-0 opacity-50",children:rp(aD,{name:"icon-chevron-right",size:12,className:lH("transition-[color,transform]",r?"text-[#f87171]":"text-[#4ade80]",n&&"rotate-90")})}),rp("span",{className:"text-gray-500",children:[t,":"]}),!n&&rp("span",{className:"truncate",children:e instanceof Date?sZ(e):`{${Object.keys(e).join(", ")}}`})]}),n&&rp("div",{className:"pl-5 border-l border-[#333] mt-0.5 ml-1 flex flex-col gap-0.5",children:o.map(([e,t])=>rp(sg,{value:t,path:e,isNegative:r},e))})]})},sv=({value:e,expanded:t,onToggle:r,isNegative:n})=>{let{value:i,error:o}=sQ(e);return o?rp("span",{className:"text-gray-500 font-italic",children:o}):null===i||"object"!=typeof i||i instanceof Promise?rp("span",{children:sZ(i)}):Array.isArray(i)?rp("div",{className:"flex flex-col gap-1 relative",children:[rp(sf,{length:i.length,expanded:t,onToggle:r,isNegative:n}),t&&rp("div",{className:"pl-2 border-l border-[#333] mt-0.5 ml-1 flex flex-col gap-0.5",children:i.map((e,t)=>rp(sg,{value:e,path:t.toString(),isNegative:n},t.toString()))}),rp(sh,{text:sJ(i),className:"absolute top-0.5 right-0.5 opacity-0 transition-opacity group-hover:opacity-100 self-end",children:({ClipboardIcon:e})=>rp(eC,{children:e})})]}):rp("div",{className:"flex items-start gap-1 relative",children:[rp("button",{type:"button",onClick:r,className:lH("flex items-center","p-0 mt-0.5 mr-1","opacity-50"),children:rp(aD,{name:"icon-chevron-right",size:12,className:lH("transition-[color,transform]",n?"text-[#f87171]":"text-[#4ade80]",t&&"rotate-90")})}),rp("div",{className:"flex-1",children:t?rp("div",{className:"pl-2 border-l border-[#333] mt-0.5 ml-1 flex flex-col gap-0.5",children:Object.entries(i).map(([e,t])=>rp(sg,{value:t,path:e,isNegative:n},e))}):rp("span",{children:sZ(i)})}),rp(sh,{text:sJ(i),className:"absolute top-0.5 right-0.5 opacity-0 transition-opacity group-hover:opacity-100 self-end",children:({ClipboardIcon:e})=>rp(eC,{children:e})})]})};tx({fiber:null,fiberProps:{current:[],changes:new Set},fiberState:{current:[],changes:new Set},fiberContext:{current:[],changes:new Set}});var sb=e=>{switch(e.kind){case"initialized":return e.changes.currentValue;case"partially-initialized":return e.value}},sw=(e,t)=>{for(let r of e){let e=t.get(r.name);if(e){t.set(e.name,{count:e.count+1,currentValue:r.value,id:e.name,lastUpdated:Date.now(),name:e.name,previousValue:r.prevValue});continue}t.set(r.name,{count:1,currentValue:r.value,id:r.name,lastUpdated:Date.now(),name:r.name,previousValue:r.prevValue})}},sy=(e,t)=>{let r=new Map;return e.forEach((e,t)=>{r.set(t,e)}),t.forEach((e,t)=>{let n=r.get(t);n?r.set(t,{count:n.count+e.count,currentValue:e.currentValue,id:e.id,lastUpdated:e.lastUpdated,name:e.name,previousValue:e.previousValue}):r.set(t,e)}),r},sx=e=>Array.from(e.propsChanges.values()).reduce((e,t)=>e+t.count,0)+Array.from(e.stateChanges.values()).reduce((e,t)=>e+t.count,0)+Array.from(e.contextChanges.values()).filter(e=>"initialized"===e.kind).reduce((e,t)=>e+t.changes.count,0),sk=tQ(()=>{let[e,t]=e5(!0),r=(()=>{let e=e7({queue:[]}),[t,r]=e5({propsChanges:new Map,stateChanges:new Map,contextChanges:new Map}),n="focused"===uI.inspectState.value.kind?uI.inspectState.value.fiber:null,i=n?K(n):null;return e4(()=>{let t=setInterval(()=>{0!==e.current.queue.length&&(r(t=>{var r;let n,i,o=(r=e.current.queue,n={contextChanges:new Map,propsChanges:new Map,stateChanges:new Map},r.forEach(e=>{for(let t of e.contextChanges){let e=n.contextChanges.get(t.contextType);if(e){if(aO(sb(e),t.value))continue;if("partially-initialized"===e.kind){n.contextChanges.set(t.contextType,{kind:"initialized",changes:{count:1,currentValue:t.value,id:t.contextType.toString(),lastUpdated:Date.now(),name:t.name,previousValue:e.value}});continue}n.contextChanges.set(t.contextType,{kind:"initialized",changes:{count:e.changes.count+1,currentValue:t.value,id:t.contextType.toString(),lastUpdated:Date.now(),name:t.name,previousValue:e.changes.currentValue}});continue}n.contextChanges.set(t.contextType,{kind:"partially-initialized",id:t.contextType.toString(),lastUpdated:Date.now(),name:t.name,value:t.value})}sw(e.stateChanges,n.stateChanges),sw(e.propsChanges,n.propsChanges)}),n),a=(i=new Map,t.contextChanges.forEach((e,t)=>{i.set(t,e)}),o.contextChanges.forEach((e,t)=>{let r=i.get(t);if(!r)return void i.set(t,e);if(sb(e)!==sb(r))switch(r.kind){case"initialized":switch(e.kind){case"initialized":return void i.set(t,{kind:"initialized",changes:{...e.changes,count:e.changes.count+r.changes.count+1,currentValue:e.changes.currentValue,previousValue:e.changes.previousValue}});case"partially-initialized":return void i.set(t,{kind:"initialized",changes:{count:r.changes.count+1,currentValue:e.value,id:e.id,lastUpdated:e.lastUpdated,name:e.name,previousValue:r.changes.currentValue}})}case"partially-initialized":switch(e.kind){case"initialized":return void i.set(t,{kind:"initialized",changes:{count:e.changes.count+1,currentValue:e.changes.currentValue,id:e.changes.id,lastUpdated:e.changes.lastUpdated,name:e.changes.name,previousValue:r.value}});case"partially-initialized":return void i.set(t,{kind:"initialized",changes:{count:1,currentValue:e.value,id:e.id,lastUpdated:e.lastUpdated,name:e.name,previousValue:r.value}})}}}),{contextChanges:i,propsChanges:sy(t.propsChanges,o.propsChanges),stateChanges:sy(t.stateChanges,o.stateChanges)});return sx(t),sx(a),a}),e.current.queue=[])},50);return()=>{clearInterval(t)}},[n]),e4(()=>{if(!i)return;let t=t=>{var r;null==(r=e.current)||r.queue.push(t)},n=uI.changesListeners.get(i);return n||(n=[],uI.changesListeners.set(i,n)),n.push(t),()=>{var n,o;r({propsChanges:new Map,stateChanges:new Map,contextChanges:new Map}),e.current.queue=[],uI.changesListeners.set(i,null!=(o=null==(n=uI.changesListeners.get(i))?void 0:n.filter(e=>e!==t))?o:[])}},[i]),e4(()=>()=>{r({propsChanges:new Map,stateChanges:new Map,contextChanges:new Map}),e.current.queue=[]},[i]),t})(),[n,i]=e5(!1),o=sx(r)>0;e4(()=>{if(!n&&o){let e=setTimeout(()=>{i(!0),requestAnimationFrame(()=>{t(!0)})},0);return()=>clearTimeout(e)}},[n,o]);let a=new Map(Array.from(r.contextChanges.entries()).filter(([,e])=>"initialized"===e.kind).map(([e,t])=>[e,"partially-initialized"===t.kind?null:t.changes])),l="focused"===uI.inspectState.value.kind?uI.inspectState.value.fiber:null;if(l)return rp(eC,{children:[rp(sN,{}),rp("div",{className:"overflow-hidden h-full flex flex-col gap-y-2",children:[rp("div",{className:"flex flex-col gap-2 px-3 pt-2",children:[rp("span",{className:"text-sm font-medium text-[#888]",children:["Why did"," ",rp("span",{className:"text-[#A855F7]",children:G(l)})," ","render?"]}),!o&&rp("div",{className:"text-sm text-[#737373] bg-[#1E1E1E] rounded-md p-4 flex flex-col gap-4",children:[rp("div",{children:"No changes detected since selecting"}),rp("div",{children:"The props, state, and context changes within your component will be reported here"})]})]}),rp("div",{className:lH("flex flex-col gap-y-2 pl-3 relative overflow-y-auto h-full"),children:[rp(sE,{changes:r.propsChanges,title:"Changed Props",isExpanded:e}),rp(sE,{renderName:e=>{var t;return s_(e,null!=(t=G(q(l)))?t:"Unknown Component")},changes:r.stateChanges,title:"Changed State",isExpanded:e}),rp(sE,{changes:a,title:"Changed Context",isExpanded:e})]})]})]})}),s_=(e,t)=>{if(Number.isNaN(Number(e)))return e;let r=Number.parseInt(e);return rp("span",{className:"truncate",children:[rp("span",{className:"text-white",children:[r,(e=>{let t=e%100;if(t>=11&&t<=13)return"th";switch(e%10){case 1:return"st";case 2:return"nd";case 3:return"rd";default:return"th"}})(r)," hook"," "]}),rp("span",{style:{color:"#666"},children:["called in ",rp("i",{className:"text-[#A855F7] truncate",children:t})]})]})},sN=tQ(()=>{let e=e7(null),t=e7(null),r=e7(null),n=e7({isPropsChanged:!1,isStateChanged:!1,isContextChanged:!1});return e4(()=>{let i=lB(()=>{var n,i,o;let a=[];for(let l of((null==(n=e.current)?void 0:n.dataset.flash)==="true"&&a.push(e.current),(null==(i=t.current)?void 0:i.dataset.flash)==="true"&&a.push(t.current),(null==(o=r.current)?void 0:o.dataset.flash)==="true"&&a.push(r.current),a))l.classList.remove("count-flash-white"),l.offsetWidth,l.classList.add("count-flash-white")},400);return st.subscribe(o=>{var a,l,s,c,d,u,p,m,h;if(!e.current||!t.current||!r.current)return;let{currentIndex:f,updates:g}=o,v=g[f];v&&0!==f&&(i(),n.current={isPropsChanged:(null!=(s=null==(l=null==(a=v.props)?void 0:a.changes)?void 0:l.size)?s:0)>0,isStateChanged:(null!=(u=null==(d=null==(c=v.state)?void 0:c.changes)?void 0:d.size)?u:0)>0,isContextChanged:(null!=(h=null==(m=null==(p=v.context)?void 0:p.changes)?void 0:m.size)?h:0)>0},"true"!==e.current.dataset.flash&&(e.current.dataset.flash=n.current.isPropsChanged.toString()),"true"!==t.current.dataset.flash&&(t.current.dataset.flash=n.current.isStateChanged.toString()),"true"!==r.current.dataset.flash&&(r.current.dataset.flash=n.current.isContextChanged.toString()))})},[]),rp("button",{type:"button",className:lH("react-section-header","overflow-hidden","max-h-0","transition-[max-height]"),children:rp("div",{className:lH("flex-1 react-scan-expandable"),children:rp("div",{className:"overflow-hidden",children:rp("div",{className:"flex items-center whitespace-nowrap",children:[rp("div",{className:"flex items-center gap-x-2",children:"What changed?"}),rp("div",{className:lH("ml-auto","change-scope","transition-opacity duration-300 delay-150"),children:[rp("div",{ref:e,children:"props"}),rp("div",{ref:t,children:"state"}),rp("div",{ref:r,children:"context"})]})]})})})})}),sS=e=>e,sE=tQ(({title:e,changes:t,renderName:r=sS})=>{let[n,i]=e5(new Set),[o,a]=e5(new Set),l=Array.from(t.entries());return 0===t.size?null:rp("div",{children:[rp("div",{className:"text-xs text-[#888] mb-1.5",children:e}),rp("div",{className:"flex flex-col gap-2",children:l.map(([t,l])=>{let s=o.has(String(t)),{value:c,error:d}=sQ(l.previousValue),{value:u,error:p}=sQ(l.currentValue),m=sX(c,u);return rp("div",{children:[rp("button",{onClick:()=>{a(e=>{let r=new Set(e);return r.has(String(t))?r.delete(String(t)):r.add(String(t)),r})},className:"flex items-center gap-2 w-full bg-transparent border-none p-0 cursor-pointer text-white text-xs",children:rp("div",{className:"flex items-center gap-1.5 flex-1",children:[rp(aD,{name:"icon-chevron-right",size:12,className:lH("text-[#666] transition-transform duration-200 ease-[cubic-bezier(0.25,0.1,0.25,1)]",{"rotate-90":s})}),rp("div",{className:"whitespace-pre-wrap break-words text-left font-medium flex items-center gap-x-1.5",children:[r(l.name),rp(sz,{count:l.count,isFunction:"function"==typeof l.currentValue,showWarning:0===m.changes.length,forceFlash:!0})]})]})}),rp("div",{className:lH("react-scan-expandable",{"react-scan-expanded":s}),children:rp("div",{className:"pl-3 text-xs font-mono border-l-1 border-[#333]",children:rp("div",{className:"flex flex-col gap-0.5",children:d||p?rp(sC,{currError:p,prevError:d}):m.changes.length>0?rp(sT,{change:l,diff:m,expandedFns:n,renderName:r,setExpandedFns:i,title:e}):rp(sA,{currValue:u,entryKey:t,expandedFns:n,prevValue:c,setExpandedFns:i})})})})]},t)})})]})}),sC=({prevError:e,currError:t})=>rp(eC,{children:[e&&rp("div",{className:"text-[#f87171] bg-[#2a1515] pr-1.5 py-[3px] rounded italic",children:e}),t&&rp("div",{className:"text-[#4ade80] bg-[#1a2a1a] pr-1.5 py-[3px] rounded italic mt-0.5",children:t})]}),sT=({diff:e,title:t,renderName:r,change:n,expandedFns:i,setExpandedFns:o})=>e.changes.map((a,l)=>{let s,{value:c,error:d}=sQ(a.prevValue),{value:u,error:p}=sQ(a.currentValue),m="function"==typeof c||"function"==typeof u;return"Props"===t&&(s=a.path.length>0?`${r(String(n.name))}.${sY(a.path)}`:void 0),"State"===t&&a.path.length>0&&(s=`state.${sY(a.path)}`),s||(s=sY(a.path)),rp("div",{className:lH("flex flex-col gap-y-1",l<e.changes.length-1&&"mb-4"),children:[s&&rp("div",{className:"text-[#666] text-[10px]",children:s}),rp("button",{type:"button",className:lH("group","flex items-start","py-[3px] px-1.5","text-left text-[#f87171] bg-[#2a1515]","rounded","overflow-hidden break-all",m&&"cursor-pointer"),onClick:m?()=>{let e=`${sY(a.path)}-prev`;o(t=>{let r=new Set(t);return r.has(e)?r.delete(e):r.add(e),r})}:void 0,children:[rp("span",{className:"w-3 flex items-center justify-center opacity-50",children:"-"}),rp("span",{className:"flex-1 whitespace-nowrap font-mono",children:d?rp("span",{className:"italic text-[#f87171]",children:d}):m?rp("div",{className:"flex gap-1 items-start flex-col",children:[rp("div",{className:"flex gap-1 items-start w-full",children:[rp("span",{className:"flex-1 max-h-40",children:sK(c,i.has(`${sY(a.path)}-prev`))}),"function"==typeof c&&rp(sh,{text:c.toString(),className:"opacity-0 transition-opacity group-hover:opacity-100",children:({ClipboardIcon:e})=>rp(eC,{children:e})})]}),(null==c?void 0:c.toString())===(null==u?void 0:u.toString())&&rp("div",{className:"text-[10px] text-[#666] italic",children:"Function reference changed"})]}):rp(sv,{value:c,expanded:i.has(`${sY(a.path)}-prev`),onToggle:()=>{let e=`${sY(a.path)}-prev`;o(t=>{let r=new Set(t);return r.has(e)?r.delete(e):r.add(e),r})},isNegative:!0})})]}),rp("button",{type:"button",className:lH("group","flex items-start","py-[3px] px-1.5","text-left text-[#4ade80] bg-[#1a2a1a]","rounded","overflow-hidden break-all",m&&"cursor-pointer"),onClick:m?()=>{let e=`${sY(a.path)}-current`;o(t=>{let r=new Set(t);return r.has(e)?r.delete(e):r.add(e),r})}:void 0,children:[rp("span",{className:"w-3 flex items-center justify-center opacity-50",children:"+"}),rp("span",{className:"flex-1 whitespace-pre-wrap font-mono",children:p?rp("span",{className:"italic text-[#4ade80]",children:p}):m?rp("div",{className:"flex gap-1 items-start flex-col",children:[rp("div",{className:"flex gap-1 items-start w-full",children:[rp("span",{className:"flex-1",children:sK(u,i.has(`${sY(a.path)}-current`))}),"function"==typeof u&&rp(sh,{text:u.toString(),className:"opacity-0 transition-opacity group-hover:opacity-100",children:({ClipboardIcon:e})=>rp(eC,{children:e})})]}),(null==c?void 0:c.toString())===(null==u?void 0:u.toString())&&rp("div",{className:"text-[10px] text-[#666] italic",children:"Function reference changed"})]}):rp(sv,{value:u,expanded:i.has(`${sY(a.path)}-current`),onToggle:()=>{let e=`${sY(a.path)}-current`;o(t=>{let r=new Set(t);return r.has(e)?r.delete(e):r.add(e),r})},isNegative:!1})})]})]},`${s}-${n.name}-${l}`)}),sA=({prevValue:e,currValue:t,entryKey:r,expandedFns:n,setExpandedFns:i})=>rp(eC,{children:[rp("div",{className:"group flex gap-0.5 items-start text-[#f87171] bg-[#2a1515] py-[3px] px-1.5 rounded",children:[rp("span",{className:"w-3 flex items-center justify-center opacity-50",children:"-"}),rp("span",{className:"flex-1 overflow-hidden whitespace-pre-wrap font-mono",children:rp(sv,{value:e,expanded:n.has(`${String(r)}-prev`),onToggle:()=>{let e=`${String(r)}-prev`;i(t=>{let r=new Set(t);return r.has(e)?r.delete(e):r.add(e),r})},isNegative:!0})})]}),rp("div",{className:"group flex gap-0.5 items-start text-[#4ade80] bg-[#1a2a1a] py-[3px] px-1.5 rounded mt-0.5",children:[rp("span",{className:"w-3 flex items-center justify-center opacity-50",children:"+"}),rp("span",{className:"flex-1 overflow-hidden whitespace-pre-wrap font-mono",children:rp(sv,{value:t,expanded:n.has(`${String(r)}-current`),onToggle:()=>{let e=`${String(r)}-current`;i(t=>{let r=new Set(t);return r.has(e)?r.delete(e):r.add(e),r})},isNegative:!1})})]}),"object"==typeof t&&null!==t&&rp("div",{className:"text-[#666] text-[10px] italic mt-1 flex items-center gap-x-1",children:[rp(aD,{name:"icon-triangle-alert",className:"text-yellow-500 mb-px",size:14}),rp("span",{children:"Reference changed but objects are structurally the same"})]})]}),sz=({count:e,forceFlash:t,isFunction:r,showWarning:n})=>{let i=e7(!0),o=e7(null),a=e7(e);return e4(()=>{let t=o.current;t&&a.current!==e&&(t.classList.remove("count-flash"),t.offsetWidth,t.classList.add("count-flash"),a.current=e)},[e]),e4(()=>{if(i.current){i.current=!1;return}if(t){let e=setTimeout(()=>{var t;null==(t=o.current)||t.classList.add("count-flash-white"),e=setTimeout(()=>{var e;null==(e=o.current)||e.classList.remove("count-flash-white")},300)},500);return()=>{clearTimeout(e)}}},[t]),rp("div",{ref:o,className:"count-badge",children:[n&&rp(aD,{name:"icon-triangle-alert",className:"text-yellow-500 mb-px",size:14}),r&&rp(aD,{name:"icon-function",className:"text-[#A855F7] mb-px",size:14}),"x",e]})},sM={lastRendered:new Map,expandedPaths:new Set,cleanup:()=>{sM.lastRendered.clear(),sM.expandedPaths.clear(),l9.cleanupAll(),s8(),si&&(clearTimeout(si),si=null),sn=[],st.value=se}},sR=class extends eT{constructor(){super(...arguments),aR(this,"state",{hasError:!1,error:null}),aR(this,"handleReset",()=>{this.setState({hasError:!1,error:null}),sM.cleanup()})}static getDerivedStateFromError(e){return{hasError:!0,error:e}}render(){var e;return this.state.hasError?rp("div",{className:"p-4 bg-red-950/50 h-screen backdrop-blur-sm",children:[rp("div",{className:"flex items-center gap-2 mb-3 text-red-400 font-medium",children:[rp(aD,{name:"icon-flame",className:"text-red-500",size:16}),"Something went wrong in the inspector"]}),rp("div",{className:"p-3 bg-black/40 rounded font-mono text-xs text-red-300 mb-4 break-words",children:(null==(e=this.state.error)?void 0:e.message)||JSON.stringify(this.state.error)}),rp("button",{type:"button",onClick:this.handleReset,className:"px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md text-sm font-medium transition-colors flex items-center justify-center gap-2",children:"Reset Inspector"})]}):this.props.children}},s$=tE(()=>lH("react-scan-inspector","flex-1","opacity-0","overflow-y-auto overflow-x-hidden","transition-opacity delay-0","pointer-events-none",!lZ.value&&"opacity-100 delay-300 pointer-events-auto")),sj=l6(()=>{let e=e7(null),t=t=>{if(!t)return;e.current=t;let{data:r,shouldUpdate:n}=ci(t);if(n){var i={timestamp:Date.now(),fiberInfo:s1(t),props:r.fiberProps,state:r.fiberState,context:r.fiberContext,stateNames:s6(t)},o=t;if(sn.push({update:i,fiber:o}),!si){let e=()=>{(()=>{let e;if(0===sn.length)return;let t=[...sn],{updates:r,totalUpdates:n,currentIndex:i,isViewingHistory:o}=st.value,a=[...r],l=n;for(let{update:e}of t)a.length>=1e3&&a.shift(),a.push(e),l++;let s=Math.max(0,l-1e3);e=o?i===n-1?a.length-1:0===i?0:0===s?i:i-1:a.length-1;let c=t[t.length-1];st.value={...st.value,latestFiber:c.fiber,updates:a,totalUpdates:l,windowOffset:s,currentIndex:e,isViewingHistory:o},sn=sn.slice(t.length)})(),si=null,sn.length>0&&(si=setTimeout(e,96))};si=setTimeout(e,96)}}};return tJ(()=>{let r=uI.inspectState.value;tu(()=>{var n;if("focused"!==r.kind||!r.focusedDomElement){e.current=null,sM.cleanup();return}"focused"===r.kind&&(lZ.value=!1);let{parentCompositeFiber:i}=sH(r.focusedDomElement,r.fiber);if(!i){uI.inspectState.value={kind:"inspect-off"},l5.value={view:"none"};return}(null==(n=e.current)?void 0:n.type)!==i.type&&(e.current=i,sM.cleanup(),t(i))})}),tJ(()=>{sr.value,tu(()=>{let r=uI.inspectState.value;if("focused"!==r.kind||!r.focusedDomElement){e.current=null,sM.cleanup();return}let{parentCompositeFiber:n}=sH(r.focusedDomElement,r.fiber);if(!n){uI.inspectState.value={kind:"inspect-off"},l5.value={view:"none"};return}t(n),r.focusedDomElement.isConnected||(e.current=null,sM.cleanup(),uI.inspectState.value={kind:"inspecting",hoveredDomElement:null})})}),e4(()=>()=>{sM.cleanup()},[]),rp(sR,{children:rp("div",{className:s$,children:rp("div",{className:"w-full h-full",children:rp(sk,{})})})})}),sF=l6(()=>"focused"!==uI.inspectState.value.kind?null:rp(sR,{children:[rp(sj,{}),rp(sm,{})]})),sO=e=>{var t,r,n,i;if("__REACT_DEVTOOLS_GLOBAL_HOOK__"in window){let r=window.__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!(null==r?void 0:r.renderers))return null;for(let[,n]of Array.from(r.renderers))try{let r=null==(t=n.findFiberByHostInstance)?void 0:t.call(n,e);if(r)return r}catch{}}if("_reactRootContainer"in e){let t=e._reactRootContainer;return null!=(i=null==(n=null==(r=null==t?void 0:t._internalRoot)?void 0:r.current)?void 0:n.child)?i:null}for(let t in e)if(t.startsWith("__reactInternalInstance$")||t.startsWith("__reactFiber"))return e[t];return null},sP=e=>{let t=e;for(;t;){if(t.stateNode instanceof Element)return t.stateNode;if(!t.child)break;t=t.child}for(;t;){if(t.stateNode instanceof Element)return t.stateNode;if(!t.return)break;t=t.return}return null},sL=e=>{if(!e)return null;try{let t=sO(e);if(!t)return null;let r=sD(t);return r?r[0]:null}catch{return null}},sD=e=>{let t=e,r=null;for(;t;){if(P(t))return[t,r];O(t)&&!r&&(r=t),t=t.return}return null},sI=(e,t)=>!!W(t,t=>t===e),sW=async e=>{let t=sL(e);if(!t)return null;let r=sP(t);return r?await new Promise(e=>{let t=new IntersectionObserver(r=>{var n,i;t.disconnect(),e(null!=(i=null==(n=r[0])?void 0:n.boundingClientRect)?i:null)});t.observe(r)}):null},sU=e=>{let t=sL(e);if(!t||!sP(t))return{};let r=sD(t);if(!r)return{};let[n]=r;return{parentCompositeFiber:n}},sH=(e,t)=>{var r,n,i,o;if(!e.isConnected)return{};let a=null!=t?t:sL(e);if(!a)return{};let l=a,s=null,c=null;for(;l;){if(!l.stateNode){l=l.return;continue}if(null==(r=uW.instrumentation)?void 0:r.fiberRoots.has(l.stateNode)){s=l,c=l.stateNode.current;break}l=l.return}if(!s||!c||!(a=sI(a,c)?a:null!=(n=a.alternate)?n:a)||!sP(a))return{};let d=null==(i=sD(a))?void 0:i[0];return d?{parentCompositeFiber:sI(d,c)?d:null!=(o=d.alternate)?o:d}:{}},sB=e=>{var t,r,n;let i=null!=(t=e.memoizedProps)?t:{},o=null!=(n=null==(r=e.alternate)?void 0:r.memoizedProps)?n:{},a=[];for(let e in i){if("children"===e)continue;let t=i[e],r=o[e];aO(t,r)||a.push({name:e,value:t,prevValue:r,type:1})}return a},sV=new Set(["HTML","HEAD","META","TITLE","BASE","SCRIPT","SCRIPT","STYLE","LINK","NOSCRIPT","SOURCE","TRACK","EMBED","OBJECT","PARAM","TEMPLATE","PORTAL","SLOT","AREA","XML","DOCTYPE","COMMENT"]),sq=(e,t=!0)=>{if(e.stateNode&&"nodeType"in e.stateNode){let r=e.stateNode;return t&&r.tagName&&sV.has(r.tagName.toLowerCase())?null:r}let r=e.child;for(;r;){let e=sq(r,t);if(e)return e;r=r.sibling}return null},sG=(e=document.body)=>{let t=[],r=(e,n=0)=>{var i;let o=(e=>{if(!e)return null;let{parentCompositeFiber:t}=sU(e);return t&&sq(t)===e?e:null})(e);if(o){let{parentCompositeFiber:e}=sU(o);if(!e)return;t.push({element:o,depth:n,name:null!=(i=G(e.type))?i:"Unknown",fiber:e})}for(let t of Array.from(e.children))r(t,o?n+1:n)};return r(e),t},sJ=e=>{try{if(null===e)return"null";if(void 0===e)return"undefined";if(s0(e))return"Promise";if("function"==typeof e){let t=e.toString();try{return t.replace(/\s+/g," ").replace(/{\s+/g,"{\n  ").replace(/;\s+/g,";\n  ").replace(/}\s*$/g,"\n}").replace(/\(\s+/g,"(").replace(/\s+\)/g,")").replace(/,\s+/g,", ")}catch{return t}}switch(!0){case e instanceof Date:return e.toISOString();case e instanceof RegExp:return e.toString();case e instanceof Error:return`${e.name}: ${e.message}`;case e instanceof Map:return JSON.stringify(Array.from(e.entries()),null,2);case e instanceof Set:return JSON.stringify(Array.from(e),null,2);case e instanceof DataView:return JSON.stringify(Array.from(new Uint8Array(e.buffer)),null,2);case e instanceof ArrayBuffer:return JSON.stringify(Array.from(new Uint8Array(e)),null,2);case ArrayBuffer.isView(e)&&"length"in e:return JSON.stringify(Array.from(e),null,2);case Array.isArray(e):case"object"==typeof e:return JSON.stringify(e,null,2);default:return String(e)}}catch{return String(e)}},sX=(e,t,r=[],n=new WeakSet)=>{if(e===t)return{type:"primitive",changes:[],hasDeepChanges:!1};if("function"==typeof e&&"function"==typeof t){let n=((e,t)=>{try{if("function"!=typeof e||"function"!=typeof t)return!1;return e.toString()===t.toString()}catch{return!1}})(e,t);return{type:"primitive",changes:[{path:r,prevValue:e,currentValue:t,sameFunction:n}],hasDeepChanges:!n}}if(null===e||null===t||void 0===e||void 0===t||"object"!=typeof e||"object"!=typeof t)return{type:"primitive",changes:[{path:r,prevValue:e,currentValue:t}],hasDeepChanges:!0};if(n.has(e)||n.has(t))return{type:"object",changes:[{path:r,prevValue:"[Circular]",currentValue:"[Circular]"}],hasDeepChanges:!1};n.add(e),n.add(t);let i=new Set([...Object.keys(e),...Object.keys(t)]),o=[],a=!1;for(let l of i){let i=e[l],s=t[l];if(i!==s)if("object"==typeof i&&"object"==typeof s&&null!==i&&null!==s){let e=sX(i,s,[...r,l],n);o.push(...e.changes),e.hasDeepChanges&&(a=!0)}else o.push({path:[...r,l],prevValue:i,currentValue:s}),a=!0}return{type:"object",changes:o,hasDeepChanges:a}},sY=e=>0===e.length?"":e.reduce((e,t,r)=>/^\d+$/.test(t)?`${e}[${t}]`:0===r?t:`${e}.${t}`,""),sK=(e,t=!1)=>{try{let r=e.toString(),n=r.match(/(?:function\s*)?(?:\(([^)]*)\)|([^=>\s]+))\s*=>?/);if(!n)return"ƒ";let i=(n[1]||n[2]||"").replace(/\s+/g,"");if(!t)return`ƒ (${i}) => ...`;return function(e){let t=e.replace(/\s+/g," ").trim(),r=[],n="";for(let e=0;e<t.length;e++){let i=t[e];if("="===i&&">"===t[e+1]){n.trim()&&r.push(n.trim()),r.push("=>"),n="",e++;continue}/[(){}[\];,<>:\?!]/.test(i)?(n.trim()&&r.push(n.trim()),r.push(i),n=""):/\s/.test(i)?(n.trim()&&r.push(n.trim()),n=""):n+=i}n.trim()&&r.push(n.trim());let i=[];for(let e=0;e<r.length;e++){let t=r[e],n=r[e+1];"("===t&&")"===n||"["===t&&"]"===n||"{"===t&&"}"===n||"<"===t&&">"===n?(i.push(t+n),e++):i.push(t)}let o=new Set,a=new Set;function l(e,t,r){let n=0;for(let o=r;o<i.length;o++){let r=i[o];if(r===e)n++;else if(r===t&&0==--n)return o}return -1}for(let e=0;e<i.length;e++)if("("===i[e]){let t=l("(",")",e);if(-1!==t&&"=>"===i[t+1])for(let r=e;r<=t;r++)o.add(r)}for(let e=1;e<i.length;e++){let t=i[e-1],r=i[e];if(/^[a-zA-Z0-9_$]+$/.test(t)&&"<"===r){let t=l("<",">",e);if(-1!==t)for(let r=e;r<=t;r++)a.add(r)}}let s=0,c=[],d="";function u(){d.trim()&&c.push(d.replace(/\s+$/,"")),d=""}function p(){u(),d="  ".repeat(s)}let m=[];function h(){return m.length?m[m.length-1]:null}function f(e,t=!1){d.trim()?t||/^[),;:\].}>]$/.test(e)?d+=e:d+=` ${e}`:d+=e}for(let e=0;e<i.length;e++){let t=i[e],r=i[e+1]||"";if(["(","{","[","<"].includes(t))f(t),m.push(t),"{"===t?(s++,p()):("("===t||"["===t||"<"===t)&&(o.has(e)&&"("===t||a.has(e)&&"<"===t||r!==({"(":")","[":"]","<":">"})[t]&&"()"!==r&&"[]"!==r&&"<>"!==r&&(s++,p()));else if([")","}","]",">"].includes(t)){let r=h();")"===t&&"("===r||"]"===t&&"["===r||">"===t&&"<"===r?o.has(e)&&")"===t||a.has(e)&&">"===t||(s=Math.max(s-1,0),p()):"}"===t&&"{"===r&&(s=Math.max(s-1,0),p()),m.pop(),f(t),"}"===t&&p()}else if(/^\(\)|\[\]|\{\}|\<\>$/.test(t))f(t);else if("=>"===t)f(t);else if(";"===t)f(t,!0),p();else if(","===t){f(t,!0);let r=h();!(o.has(e)&&"("===r)&&!(a.has(e)&&"<"===r)&&r&&["{","[","(","<"].includes(r)&&p()}else f(t)}return u(),c.join("\n").replace(/\n\s*\n+/g,"\n").trim()}(r)}catch{return"ƒ"}},sZ=e=>{if(null===e)return"null";if(void 0===e)return"undefined";if("string"==typeof e)return`"${e.length>150?`${e.slice(0,20)}...`:e}"`;if("number"==typeof e||"boolean"==typeof e)return String(e);if("function"==typeof e)return sK(e);if(Array.isArray(e))return`Array(${e.length})`;if(e instanceof Map)return`Map(${e.size})`;if(e instanceof Set)return`Set(${e.size})`;if(e instanceof Date)return e.toISOString();if(e instanceof RegExp)return e.toString();if(e instanceof Error)return`${e.name}: ${e.message}`;if("object"==typeof e){let t=Object.keys(e);return`{${t.length>2?`${t.slice(0,2).join(", ")}, ...`:t.join(", ")}}`}return String(e)},sQ=e=>{var t;if(null==e||"function"==typeof e||"object"!=typeof e)return{value:e};if(s0(e))return{value:"Promise"};try{let r=Object.getPrototypeOf(e);if(r===Promise.prototype||(null==(t=null==r?void 0:r.constructor)?void 0:t.name)==="Promise")return{value:"Promise"};return{value:e}}catch{return{value:null,error:"Error accessing value"}}},s0=e=>!!e&&(e instanceof Promise||"object"==typeof e&&"then"in e),s1=e=>{var t,r;let n=B(e);return{displayName:G(e)||"Unknown",type:e.type,key:e.key,id:e.index,selfTime:null!=(t=null==n?void 0:n.selfTime)?t:null,totalTime:null!=(r=null==n?void 0:n.totalTime)?r:null}},s2=new Map,s5=new Map,s4=new Map,s3=null,s7=/\[(?<name>\w+),\s*set\w+\]/g,s6=e=>{var t,r;let n=(null==(r=null==(t=e.type)?void 0:t.toString)?void 0:r.call(t))||"";return n?Array.from(n.matchAll(s7),e=>{var t,r;return null!=(r=null==(t=e.groups)?void 0:t.name)?r:""}):[]},s8=()=>{s2.clear(),s5.clear(),s4.clear(),s3=null},s9=(e,t,r,n)=>{let i=e.get(t),o=e===s2||e===s4,a=!aO(r,n);if(!i)return e.set(t,{count:a&&o?1:0,currentValue:r,previousValue:n,lastUpdated:Date.now()}),{hasChanged:a,count:a&&o?1:+!o};if(!aO(i.currentValue,r)){let n=i.count+1;return e.set(t,{count:n,currentValue:r,previousValue:i.currentValue,lastUpdated:Date.now()}),{hasChanged:!0,count:n}}return{hasChanged:!1,count:i.count}},ce=e=>{if(!e)return{};if(0===e.tag||11===e.tag||15===e.tag||14===e.tag){let t=e.memoizedState,r={},n=0;for(;t;)t.queue&&void 0!==t.memoizedState&&(r[n]=t.memoizedState),t=t.next,n++;return r}return 1===e.tag&&e.memoizedState||{}},ct=e=>{var t;let r=e.memoizedProps||{},n=(null==(t=e.alternate)?void 0:t.memoizedProps)||{},i={},o={};for(let e of Object.keys(r))e in r&&(i[e]=r[e],o[e]=n[e]);return{current:i,prev:o,changes:sB(e).map(e=>({name:e.name,value:e.value,prevValue:e.prevValue}))}},cr=e=>{let t=ce(e),r=e.alternate?ce(e.alternate):{},n=[];for(let[i,o]of Object.entries(t)){let t=1===e.tag?i:Number(i);e.alternate&&!aO(r[i],o)&&n.push({name:t,value:o,prevValue:r[i]})}return{current:t,prev:r,changes:n}},cn=e=>{let t=ca(e),r=e.alternate?ca(e.alternate):new Map,n={},i={},o=[],a=new Set;for(let[e,l]of t){let t=l.displayName;if(a.has(e))continue;a.add(e),n[t]=l.value;let s=r.get(e);s&&(i[t]=s.value,aO(s.value,l.value)||o.push({name:t,value:l.value,prevValue:s.value,contextType:e}))}return{current:n,prev:i,changes:o}},ci=e=>{let t,r=()=>({current:[],changes:new Set,changesCounts:new Map});if(!e)return{data:{fiberProps:r(),fiberState:r(),fiberContext:r()},shouldUpdate:!1};let n=!1,i=(t=e.type!==s3,s3=e.type,t),o=r();if(e.memoizedProps){let{current:t,changes:r}=ct(e);for(let[e,r]of Object.entries(t))o.current.push({name:e,value:s0(r)?{type:"promise",displayValue:"Promise"}:r});for(let e of r){let{hasChanged:t,count:r}=s9(s2,e.name,e.value,e.prevValue);t&&(n=!0,o.changes.add(e.name),o.changesCounts.set(e.name,r))}}let a=r(),{current:l,changes:s}=cr(e);for(let[t,r]of Object.entries(l)){let n=1===e.tag?t:Number(t);a.current.push({name:n,value:r})}for(let e of s){let{hasChanged:t,count:r}=s9(s5,e.name,e.value,e.prevValue);t&&(n=!0,a.changes.add(e.name),a.changesCounts.set(e.name,r))}let c=r(),{current:d,changes:u}=cn(e);for(let[e,t]of Object.entries(d))c.current.push({name:e,value:t});if(!i)for(let e of u){let{hasChanged:t,count:r}=s9(s4,e.name,e.value,e.prevValue);t&&(n=!0,c.changes.add(e.name),c.changesCounts.set(e.name,r))}return n||i||(o.changes.clear(),a.changes.clear(),c.changes.clear()),{data:{fiberProps:o,fiberState:a,fiberContext:c},shouldUpdate:n||i}},co=new WeakMap,ca=e=>{var t;if(!e)return new Map;let r=co.get(e);if(r)return r;let n=new Map,i=e;for(;i;){let e=i.dependencies;if(null==e?void 0:e.firstContext){let r=e.firstContext;for(;r;){let e=r.memoizedValue,i=null==(t=r.context)?void 0:t.displayName;if(n.has(e)||n.set(r.context,{value:e,displayName:null!=i?i:"UnnamedContext",contextType:null}),r===r.next)break;r=r.next}}i=i.return}return co.set(e,n),n},cl=e=>{let t=()=>({current:[],changes:new Set,changesCounts:new Map});if(!e)return{fiberProps:t(),fiberState:t(),fiberContext:t()};let r=t();if(e.memoizedProps){let{current:t,changes:n}=ct(e);for(let[e,n]of Object.entries(t))r.current.push({name:e,value:s0(n)?{type:"promise",displayValue:"Promise"}:n});for(let e of n)r.changes.add(e.name),r.changesCounts.set(e.name,1)}let n=t();if(e.memoizedState){let{current:t,changes:r}=cr(e);for(let[e,r]of Object.entries(t))n.current.push({name:e,value:s0(r)?{type:"promise",displayValue:"Promise"}:r});for(let e of r)n.changes.add(e.name),n.changesCounts.set(e.name,1)}let i=t(),{current:o,changes:a}=cn(e);for(let[e,t]of Object.entries(o))i.current.push({name:e,value:s0(t)?{type:"promise",displayValue:"Promise"}:t});for(let e of a)i.changes.add(e.name),i.changesCounts.set(e.name,1);return{fiberProps:r,fiberState:n,fiberContext:i}},cs={mount:1,update:2,unmount:4},cc=0,cd=performance.now(),cu=0,cp=!1,cm=()=>{cu++;let e=performance.now();e-cd>=1e3&&(cc=cu,cu=0,cd=e),requestAnimationFrame(cm)},ch=()=>(cp||(cp=!0,cm(),cc=60),cc),cf=0,cg=new WeakMap;function cv(e,t){var r,n;let i;if(!e||!t)return;let o=e.memoizedValue,a={type:4,name:null!=(r=e.context.displayName)?r:"Context.Provider",value:o,contextType:(n=e.context,(i=cg.get(n))||(cf++,cg.set(n,cf),cf))};this.push(a)}var cb=new Map,cw=!1,cy=()=>Array.from(cb.values()),cx=new WeakMap;function ck(e){return String(K(e))}function c_(e){let t=ck(e),r=cx.get(q(e));if(r)return r.get(t)}var cN=(e,t)=>{let r=t-e;return .5>Math.abs(r)?t:e+.2*r},cS="115,97,230";function cE(e,t){return t[0]-e[0]}function cC([e,t]){let r=`${t.slice(0,4).join(", ")} \xd7${e}`;return r.length>40&&(r=`${r.slice(0,40)}…`),r}var cT=e=>{let t=new Map;for(let{name:r,count:n}of e)t.set(r,(t.get(r)||0)+n);let r=new Map;for(let[e,n]of t){let t=r.get(n);t?t.push(e):r.set(n,[e])}let n=[...r.entries()].sort(cE),i=cC(n[0]);for(let e=1,t=n.length;e<t;e++)i+=", "+cC(n[e]);return i.length>40?`${i.slice(0,40)}…`:i},cA=e=>{let t=0;for(let r of e)t+=r.width*r.height;return t},cz=(e,t)=>{for(let{id:r,name:n,count:i,x:o,y:a,width:l,height:s,didCommit:c}of t){let t={id:r,name:n,count:i,x:o,y:a,width:l,height:s,frame:0,targetX:o,targetY:a,targetWidth:l,targetHeight:s,didCommit:c},d=String(t.id),u=e.get(d);u?(u.count++,u.frame=0,u.targetX=o,u.targetY=a,u.targetWidth=l,u.targetHeight=s,u.didCommit=c):e.set(d,t)}},cM=(e,t,r)=>{for(let n of e.values()){let e=n.x-t,i=n.y-r;n.targetX=e,n.targetY=i}},cR=null,c$=null,cj=null,cF=1,cO=null,cP=new Map,cL=new Map,cD=new Set,cI=e=>{let t,r,n,i,o=e[0];if(1===e.length)return o;for(let o=0,a=e.length;o<a;o++){let a=e[o];t=null==t?a.x:Math.min(t,a.x),r=null==r?a.y:Math.min(r,a.y),n=null==n?a.x+a.width:Math.max(n,a.x+a.width),i=null==i?a.y+a.height:Math.max(i,a.y+a.height)}return null==t||null==r||null==n||null==i?e[0]:new DOMRect(t,r,n-t,i-r)};function cW(e,t){let r=[];for(let t of e){let e=t.target;this.seenElements.has(e)||(this.seenElements.add(e),r.push(t))}r.length>0&&this.resolveNext&&(this.resolveNext(r),this.resolveNext=null),this.seenElements.size===this.uniqueElements.size&&(t.disconnect(),this.done=!0,this.resolveNext&&this.resolveNext([]))}var cU=async function*(e){let t={uniqueElements:new Set(e),seenElements:new Set,resolveNext:null,done:!1},r=new IntersectionObserver(cW.bind(t));for(let e of t.uniqueElements)r.observe(e);for(;!t.done;){let e=await new Promise(e=>{t.resolveNext=e});e.length>0&&(yield e)}},cH="u">typeof SharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,cB=async()=>{let e=[];for(let t of cD){let r=cL.get(t);if(r)for(let t=0;t<r.elements.length;t++)r.elements[t]instanceof Element&&e.push(r.elements[t])}let t=new Map;for await(let r of cU(e)){for(let e of r){let r=e.target,n=e.intersectionRect;e.isIntersecting&&n.width&&n.height&&t.set(r,n)}let e=[],n=[],i=[];for(let r of cD){let o=cL.get(r);if(!o)continue;let a=[];for(let e=0;e<o.elements.length;e++){let r=o.elements[e],n=t.get(r);n&&a.push(n)}a.length&&(e.push(o),n.push(cI(a)),i.push(K(r)))}if(e.length>0){let t,r=new cH(7*e.length*4),o=new Float32Array(r),a=Array(e.length);for(let r=0,l=e.length;r<l;r++){let l=e[r],s=i[r],{x:c,y:d,width:u,height:p}=n[r],{count:m,name:h,didCommit:f}=l;if(cR){let e=7*r;o[e]=s,o[e+1]=m,o[e+2]=c,o[e+3]=d,o[e+4]=u,o[e+5]=p,o[e+6]=f,a[r]=h}else t||(t=Array(e.length)),t[r]={id:s,name:h,count:m,x:c,y:d,width:u,height:p,didCommit:f}}cR?cR.postMessage({type:"draw-outlines",data:r,names:a}):c$&&cj&&t&&(cz(cP,t),cO||(cO=requestAnimationFrame(cV)))}}for(let e of cD)cL.delete(e),cD.delete(e)},cV=()=>{cj&&c$&&(cO=((e,t,r,n)=>{e.clearRect(0,0,t.width/r,t.height/r);let i=new Map,o=new Map;for(let e of n.values()){let{x:t,y:r,width:n,height:a,targetX:l,targetY:s,targetWidth:c,targetHeight:d,frame:u}=e;l!==t&&(e.x=cN(t,l)),s!==r&&(e.y=cN(r,s)),c!==n&&(e.width=cN(n,c)),d!==a&&(e.height=cN(a,d));let p=`${null!=l?l:t},${null!=s?s:r}`,m=`${p},${null!=c?c:n},${null!=d?d:a}`,h=i.get(p);h?h.push(e):i.set(p,[e]);let f=1-u/45;e.frame++;let g=o.get(m)||{x:t,y:r,width:n,height:a,alpha:f};f>g.alpha&&(g.alpha=f),o.set(m,g)}for(let{x:t,y:r,width:n,height:i,alpha:a}of o.values()){e.strokeStyle=`rgba(${cS},${a})`,e.lineWidth=1;let o=Math.round(t)+.5,l=Math.round(r)+.5,s=Math.round(n),c=Math.round(i);e.beginPath(),e.rect(o,l,s,c),e.stroke(),e.fillStyle=`rgba(${cS},${.1*a})`,e.fill()}e.font="11px Menlo,Consolas,Monaco,Liberation Mono,Lucida Console,monospace";let a=new Map;for(let t of(e.textRendering="optimizeSpeed",i.values())){let{x:r,y:i,frame:o}=t[0],l=1-o/45,s=cT(t),{width:c}=e.measureText(s);a.set(`${r},${i},${c},${s}`,{text:s,width:c,height:11,alpha:l,x:r,y:i,outlines:t});let d=i-11-4;if(d<0&&(d=0),o>45)for(let e of t)n.delete(String(e.id))}for(let[t,r]of Array.from(a.entries()).sort(([e,t],[r,n])=>cA(n.outlines)-cA(t.outlines)))if(a.has(t))for(let[n,i]of a.entries()){if(t===n)continue;let{x:o,y:l,width:s,height:c}=r,{x:d,y:u,width:p,height:m}=i;o+s>d&&d+p>o&&l+c>u&&u+m>l&&(r.text=cT(r.outlines.concat(i.outlines)),r.width=e.measureText(r.text).width,a.delete(n))}for(let t of a.values()){let{x:r,y:n,alpha:i,width:o,height:a,text:l}=t,s=n-a-4;s<0&&(s=0),e.fillStyle=`rgba(${cS},${i})`,e.fillRect(r,s,o+4,a+4),e.fillStyle=`rgba(255,255,255,${i})`,e.fillText(l,r+2,s+a)}return n.size>0})(cj,c$,cF,cP)?requestAnimationFrame(cV):null)},cq="u">typeof OffscreenCanvas&&"u">typeof Worker,cG=()=>Math.min(window.devicePixelRatio||1,2),cJ=!1,cX=e=>!uG.has(e.memoizedProps),cY=!1,cK=`/*! tailwindcss v4.2.4 | MIT License | https://tailwindcss.com */
@layer properties;
@layer theme, base, components, utilities;
@layer theme {
  :root, :host {
    --font-sans: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji",
      "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    --color-red-300: oklch(80.8% 0.114 19.571);
    --color-red-400: oklch(70.4% 0.191 22.216);
    --color-red-500: oklch(63.7% 0.237 25.331);
    --color-red-600: oklch(57.7% 0.245 27.325);
    --color-red-950: oklch(25.8% 0.092 26.042);
    --color-yellow-300: oklch(90.5% 0.182 98.111);
    --color-yellow-500: oklch(79.5% 0.184 86.047);
    --color-green-500: oklch(72.3% 0.219 149.579);
    --color-purple-400: oklch(71.4% 0.203 305.504);
    --color-purple-500: oklch(62.7% 0.265 303.9);
    --color-purple-800: oklch(43.8% 0.218 303.724);
    --color-gray-100: oklch(96.7% 0.003 264.542);
    --color-gray-300: oklch(87.2% 0.01 258.338);
    --color-gray-400: oklch(70.7% 0.022 261.325);
    --color-gray-500: oklch(55.1% 0.027 264.364);
    --color-zinc-200: oklch(92% 0.004 286.32);
    --color-zinc-400: oklch(70.5% 0.015 286.067);
    --color-zinc-500: oklch(55.2% 0.016 285.938);
    --color-zinc-600: oklch(44.2% 0.017 285.786);
    --color-zinc-700: oklch(37% 0.013 285.805);
    --color-zinc-800: oklch(27.4% 0.006 286.033);
    --color-zinc-900: oklch(21% 0.006 285.885);
    --color-neutral-300: oklch(87% 0 0);
    --color-neutral-400: oklch(70.8% 0 0);
    --color-neutral-500: oklch(55.6% 0 0);
    --color-neutral-700: oklch(37.1% 0 0);
    --color-black: #000;
    --color-white: #fff;
    --spacing: 4px;
    --container-md: 448px;
    --text-xs: 12px;
    --text-xs--line-height: calc(1 / 0.75);
    --text-sm: 14px;
    --text-sm--line-height: calc(1.25 / 0.875);
    --font-weight-medium: 500;
    --font-weight-semibold: 600;
    --font-weight-bold: 700;
    --tracking-wide: 0.025em;
    --radius-sm: 4px;
    --radius-md: 6px;
    --radius-lg: 8px;
    --ease-in: cubic-bezier(0.4, 0, 1, 1);
    --ease-out: cubic-bezier(0, 0, 0.2, 1);
    --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
    --blur-sm: 8px;
    --default-transition-duration: 150ms;
    --default-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    --default-font-family: var(--font-sans);
  }
}
@layer base {
  *, ::after, ::before, ::backdrop, ::file-selector-button {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: 0 solid;
  }
  html, :host {
    line-height: 1.5;
    -webkit-text-size-adjust: 100%;
    -moz-tab-size: 4;
      -o-tab-size: 4;
         tab-size: 4;
    font-family: var(--default-font-family, ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji");
    font-feature-settings: var(--default-font-feature-settings, normal);
    font-variation-settings: var(--default-font-variation-settings, normal);
    -webkit-tap-highlight-color: transparent;
  }
  hr {
    height: 0;
    color: inherit;
    border-top-width: 1px;
  }
  abbr:where([title]) {
    -webkit-text-decoration: underline dotted;
    text-decoration: underline dotted;
  }
  h1, h2, h3, h4, h5, h6 {
    font-size: inherit;
    font-weight: inherit;
  }
  a {
    color: inherit;
    -webkit-text-decoration: inherit;
    text-decoration: inherit;
  }
  b, strong {
    font-weight: bolder;
  }
  code, kbd, samp, pre {
    font-family: Menlo, Consolas, Monaco, Liberation Mono, Lucida Console, monospace;
    font-feature-settings: normal;
    font-variation-settings: normal;
    font-size: 1em;
  }
  small {
    font-size: 80%;
  }
  sub, sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }
  sub {
    bottom: -0.25em;
  }
  sup {
    top: -0.5em;
  }
  table {
    text-indent: 0;
    border-color: inherit;
    border-collapse: collapse;
  }
  :-moz-focusring {
    outline: auto;
  }
  progress {
    vertical-align: baseline;
  }
  summary {
    display: list-item;
  }
  ol, ul, menu {
    list-style: none;
  }
  img, svg, video, canvas, audio, iframe, embed, object {
    display: block;
    vertical-align: middle;
  }
  img, video {
    max-width: 100%;
    height: auto;
  }
  button, input, select, optgroup, textarea, ::file-selector-button {
    font: inherit;
    font-feature-settings: inherit;
    font-variation-settings: inherit;
    letter-spacing: inherit;
    color: inherit;
    border-radius: 0;
    background-color: transparent;
    opacity: 1;
  }
  :where(select:is([multiple], [size])) optgroup {
    font-weight: bolder;
  }
  :where(select:is([multiple], [size])) optgroup option {
    padding-inline-start: 20px;
  }
  ::file-selector-button {
    margin-inline-end: 4px;
  }
  ::-moz-placeholder {
    opacity: 1;
  }
  ::placeholder {
    opacity: 1;
  }
  @supports (not (-webkit-appearance: -apple-pay-button))  or (contain-intrinsic-size: 1px) {
    ::-moz-placeholder {
      color: currentcolor;
      @supports (color: color-mix(in lab, red, red)) {
        color: color-mix(in oklab, currentcolor 50%, transparent);
      }
    }
    ::placeholder {
      color: currentcolor;
      @supports (color: color-mix(in lab, red, red)) {
        color: color-mix(in oklab, currentcolor 50%, transparent);
      }
    }
  }
  textarea {
    resize: vertical;
  }
  ::-webkit-search-decoration {
    -webkit-appearance: none;
  }
  ::-webkit-date-and-time-value {
    min-height: 1lh;
    text-align: inherit;
  }
  ::-webkit-datetime-edit {
    display: inline-flex;
  }
  ::-webkit-datetime-edit-fields-wrapper {
    padding: 0;
  }
  ::-webkit-datetime-edit, ::-webkit-datetime-edit-year-field, ::-webkit-datetime-edit-month-field, ::-webkit-datetime-edit-day-field, ::-webkit-datetime-edit-hour-field, ::-webkit-datetime-edit-minute-field, ::-webkit-datetime-edit-second-field, ::-webkit-datetime-edit-millisecond-field, ::-webkit-datetime-edit-meridiem-field {
    padding-block: 0;
  }
  ::-webkit-calendar-picker-indicator {
    line-height: 1;
  }
  :-moz-ui-invalid {
    box-shadow: none;
  }
  button, input:where([type="button"], [type="reset"], [type="submit"]), ::file-selector-button {
    -webkit-appearance: button;
       -moz-appearance: button;
            appearance: button;
  }
  ::-webkit-inner-spin-button, ::-webkit-outer-spin-button {
    height: auto;
  }
  [hidden]:where(:not([hidden="until-found"])) {
    display: none !important;
  }
}
@layer utilities {
  .pointer-events-auto {
    pointer-events: auto;
  }
  .pointer-events-bounding-box {
    pointer-events: bounding-box;
  }
  .pointer-events-none {
    pointer-events: none;
  }
  .collapse {
    visibility: collapse;
  }
  .visible {
    visibility: visible;
  }
  .absolute {
    position: absolute;
  }
  .fixed {
    position: fixed;
  }
  .relative {
    position: relative;
  }
  .static {
    position: static;
  }
  .inset-0 {
    inset: calc(var(--spacing) * 0);
  }
  .inset-x-1 {
    inset-inline: calc(var(--spacing) * 1);
  }
  .inset-y-0 {
    inset-block: calc(var(--spacing) * 0);
  }
  .start {
    inset-inline-start: var(--spacing);
  }
  .end {
    inset-inline-end: var(--spacing);
  }
  .-top-1 {
    top: calc(var(--spacing) * -1);
  }
  .-top-2\\.5 {
    top: calc(var(--spacing) * -2.5);
  }
  .top-0 {
    top: calc(var(--spacing) * 0);
  }
  .top-0\\.5 {
    top: calc(var(--spacing) * 0.5);
  }
  .top-1\\/2 {
    top: calc(1 / 2 * 100%);
  }
  .top-2 {
    top: calc(var(--spacing) * 2);
  }
  .-right-1 {
    right: calc(var(--spacing) * -1);
  }
  .-right-2\\.5 {
    right: calc(var(--spacing) * -2.5);
  }
  .right-0 {
    right: calc(var(--spacing) * 0);
  }
  .right-0\\.5 {
    right: calc(var(--spacing) * 0.5);
  }
  .right-2 {
    right: calc(var(--spacing) * 2);
  }
  .right-4 {
    right: calc(var(--spacing) * 4);
  }
  .bottom-0 {
    bottom: calc(var(--spacing) * 0);
  }
  .bottom-4 {
    bottom: calc(var(--spacing) * 4);
  }
  .left-0 {
    left: calc(var(--spacing) * 0);
  }
  .left-3 {
    left: calc(var(--spacing) * 3);
  }
  .z-10 {
    z-index: 10;
  }
  .z-50 {
    z-index: 50;
  }
  .z-100 {
    z-index: 100;
  }
  .z-\\[214748365\\] {
    z-index: 214748365;
  }
  .z-\\[214748367\\] {
    z-index: 214748367;
  }
  .z-\\[124124124124\\] {
    z-index: 124124124124;
  }
  .container {
    width: 100%;
    @media (width >= 640px) {
      max-width: 640px;
    }
    @media (width >= 768px) {
      max-width: 768px;
    }
    @media (width >= 1024px) {
      max-width: 1024px;
    }
    @media (width >= 1280px) {
      max-width: 1280px;
    }
    @media (width >= 1536px) {
      max-width: 1536px;
    }
  }
  .m-\\[2px\\] {
    margin: 2px;
  }
  .mx-0\\.5 {
    margin-inline: calc(var(--spacing) * 0.5);
  }
  .mt-0\\.5 {
    margin-top: calc(var(--spacing) * 0.5);
  }
  .mt-1 {
    margin-top: calc(var(--spacing) * 1);
  }
  .mt-4 {
    margin-top: calc(var(--spacing) * 4);
  }
  .mr-0\\.5 {
    margin-right: calc(var(--spacing) * 0.5);
  }
  .mr-1 {
    margin-right: calc(var(--spacing) * 1);
  }
  .mr-1\\.5 {
    margin-right: calc(var(--spacing) * 1.5);
  }
  .mr-16 {
    margin-right: calc(var(--spacing) * 16);
  }
  .mr-auto {
    margin-right: auto;
  }
  .mb-1\\.5 {
    margin-bottom: calc(var(--spacing) * 1.5);
  }
  .mb-2 {
    margin-bottom: calc(var(--spacing) * 2);
  }
  .mb-3 {
    margin-bottom: calc(var(--spacing) * 3);
  }
  .mb-4 {
    margin-bottom: calc(var(--spacing) * 4);
  }
  .mb-px {
    margin-bottom: 1px;
  }
  .\\!ml-0 {
    margin-left: calc(var(--spacing) * 0) !important;
  }
  .ml-1 {
    margin-left: calc(var(--spacing) * 1);
  }
  .ml-1\\.5 {
    margin-left: calc(var(--spacing) * 1.5);
  }
  .ml-auto {
    margin-left: auto;
  }
  .block {
    display: block;
  }
  .contents {
    display: contents;
  }
  .flex {
    display: flex;
  }
  .hidden {
    display: none;
  }
  .inline {
    display: inline;
  }
  .aspect-square {
    aspect-ratio: 1 / 1;
  }
  .h-1 {
    height: calc(var(--spacing) * 1);
  }
  .h-4 {
    height: calc(var(--spacing) * 4);
  }
  .h-4\\/5 {
    height: calc(4 / 5 * 100%);
  }
  .h-6 {
    height: calc(var(--spacing) * 6);
  }
  .h-7 {
    height: calc(var(--spacing) * 7);
  }
  .h-8 {
    height: calc(var(--spacing) * 8);
  }
  .h-10 {
    height: calc(var(--spacing) * 10);
  }
  .h-12 {
    height: calc(var(--spacing) * 12);
  }
  .h-\\[28px\\] {
    height: 28px;
  }
  .h-\\[48px\\] {
    height: 48px;
  }
  .h-\\[50px\\] {
    height: 50px;
  }
  .h-\\[150px\\] {
    height: 150px;
  }
  .h-\\[235px\\] {
    height: 235px;
  }
  .h-\\[calc\\(100\\%-25px\\)\\] {
    height: calc(100% - 25px);
  }
  .h-\\[calc\\(100\\%-40px\\)\\] {
    height: calc(100% - 40px);
  }
  .h-\\[calc\\(100\\%-48px\\)\\] {
    height: calc(100% - 48px);
  }
  .h-\\[calc\\(100\\%-150px\\)\\] {
    height: calc(100% - 150px);
  }
  .h-\\[calc\\(100\\%-200px\\)\\] {
    height: calc(100% - 200px);
  }
  .h-fit {
    height: -moz-fit-content;
    height: fit-content;
  }
  .h-full {
    height: 100%;
  }
  .h-screen {
    height: 100vh;
  }
  .max-h-0 {
    max-height: calc(var(--spacing) * 0);
  }
  .max-h-9 {
    max-height: calc(var(--spacing) * 9);
  }
  .max-h-40 {
    max-height: calc(var(--spacing) * 40);
  }
  .min-h-9 {
    min-height: calc(var(--spacing) * 9);
  }
  .min-h-\\[48px\\] {
    min-height: 48px;
  }
  .min-h-fit {
    min-height: -moz-fit-content;
    min-height: fit-content;
  }
  .w-1 {
    width: calc(var(--spacing) * 1);
  }
  .w-1\\/2 {
    width: calc(1 / 2 * 100%);
  }
  .w-1\\/3 {
    width: calc(1 / 3 * 100%);
  }
  .w-2\\/4 {
    width: calc(2 / 4 * 100%);
  }
  .w-3 {
    width: calc(var(--spacing) * 3);
  }
  .w-4 {
    width: calc(var(--spacing) * 4);
  }
  .w-4\\/5 {
    width: calc(4 / 5 * 100%);
  }
  .w-6 {
    width: calc(var(--spacing) * 6);
  }
  .w-80 {
    width: calc(var(--spacing) * 80);
  }
  .w-\\[20px\\] {
    width: 20px;
  }
  .w-\\[72px\\] {
    width: 72px;
  }
  .w-\\[90\\%\\] {
    width: 90%;
  }
  .w-\\[calc\\(100\\%-200px\\)\\] {
    width: calc(100% - 200px);
  }
  .w-fit {
    width: -moz-fit-content;
    width: fit-content;
  }
  .w-full {
    width: 100%;
  }
  .w-px {
    width: 1px;
  }
  .w-screen {
    width: 100vw;
  }
  .max-w-md {
    max-width: var(--container-md);
  }
  .min-w-0 {
    min-width: calc(var(--spacing) * 0);
  }
  .min-w-\\[200px\\] {
    min-width: 200px;
  }
  .min-w-fit {
    min-width: -moz-fit-content;
    min-width: fit-content;
  }
  .flex-1 {
    flex: 1;
  }
  .shrink-0 {
    flex-shrink: 0;
  }
  .grow {
    flex-grow: 1;
  }
  .-translate-y-1\\/2 {
    --tw-translate-y: calc(calc(1 / 2 * 100%) * -1);
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
  .-translate-y-\\[200\\%\\] {
    --tw-translate-y: calc(200% * -1);
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
  .translate-y-0 {
    --tw-translate-y: calc(var(--spacing) * 0);
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
  .scale-110 {
    --tw-scale-x: 110%;
    --tw-scale-y: 110%;
    --tw-scale-z: 110%;
    scale: var(--tw-scale-x) var(--tw-scale-y);
  }
  .-rotate-90 {
    rotate: calc(90deg * -1);
  }
  .rotate-90 {
    rotate: 90deg;
  }
  .rotate-180 {
    rotate: 180deg;
  }
  .transform {
    transform: var(--tw-rotate-x,) var(--tw-rotate-y,) var(--tw-rotate-z,) var(--tw-skew-x,) var(--tw-skew-y,);
  }
  .animate-fade-in {
    animation: fadeIn ease-in forwards;
  }
  .cursor-default {
    cursor: default;
  }
  .cursor-e-resize {
    cursor: e-resize;
  }
  .cursor-ew-resize {
    cursor: ew-resize;
  }
  .cursor-ew-resize {
    cursor: ew-resize;
  }
  .cursor-move {
    cursor: move;
  }
  .cursor-move {
    cursor: move;
  }
  .cursor-nesw-resize {
    cursor: nesw-resize;
  }
  .cursor-nesw-resize {
    cursor: nesw-resize;
  }
  .cursor-ns-resize {
    cursor: ns-resize;
  }
  .cursor-ns-resize {
    cursor: ns-resize;
  }
  .cursor-nwse-resize {
    cursor: nwse-resize;
  }
  .cursor-nwse-resize {
    cursor: nwse-resize;
  }
  .cursor-pointer {
    cursor: pointer;
  }
  .cursor-w-resize {
    cursor: w-resize;
  }
  .\\[touch-action\\:none\\] {
    touch-action: none;
  }
  .resize {
    resize: both;
  }
  .flex-col {
    flex-direction: column;
  }
  .items-center {
    align-items: center;
  }
  .items-end {
    align-items: flex-end;
  }
  .items-start {
    align-items: flex-start;
  }
  .items-stretch {
    align-items: stretch;
  }
  .justify-between {
    justify-content: space-between;
  }
  .justify-center {
    justify-content: center;
  }
  .justify-end {
    justify-content: flex-end;
  }
  .justify-start {
    justify-content: flex-start;
  }
  .gap-0\\.5 {
    gap: calc(var(--spacing) * 0.5);
  }
  .gap-1 {
    gap: calc(var(--spacing) * 1);
  }
  .gap-1\\.5 {
    gap: calc(var(--spacing) * 1.5);
  }
  .gap-2 {
    gap: calc(var(--spacing) * 2);
  }
  .gap-4 {
    gap: calc(var(--spacing) * 4);
  }
  .space-y-1\\.5 {
    :where(& > :not(:last-child)) {
      --tw-space-y-reverse: 0;
      margin-block-start: calc(calc(var(--spacing) * 1.5) * var(--tw-space-y-reverse));
      margin-block-end: calc(calc(var(--spacing) * 1.5) * calc(1 - var(--tw-space-y-reverse)));
    }
  }
  .gap-x-0\\.5 {
    -moz-column-gap: calc(var(--spacing) * 0.5);
         column-gap: calc(var(--spacing) * 0.5);
  }
  .gap-x-1 {
    -moz-column-gap: calc(var(--spacing) * 1);
         column-gap: calc(var(--spacing) * 1);
  }
  .gap-x-1\\.5 {
    -moz-column-gap: calc(var(--spacing) * 1.5);
         column-gap: calc(var(--spacing) * 1.5);
  }
  .gap-x-2 {
    -moz-column-gap: calc(var(--spacing) * 2);
         column-gap: calc(var(--spacing) * 2);
  }
  .gap-x-3 {
    -moz-column-gap: calc(var(--spacing) * 3);
         column-gap: calc(var(--spacing) * 3);
  }
  .gap-x-4 {
    -moz-column-gap: calc(var(--spacing) * 4);
         column-gap: calc(var(--spacing) * 4);
  }
  .gap-y-0\\.5 {
    row-gap: calc(var(--spacing) * 0.5);
  }
  .gap-y-1 {
    row-gap: calc(var(--spacing) * 1);
  }
  .gap-y-2 {
    row-gap: calc(var(--spacing) * 2);
  }
  .gap-y-4 {
    row-gap: calc(var(--spacing) * 4);
  }
  .divide-y {
    :where(& > :not(:last-child)) {
      --tw-divide-y-reverse: 0;
      border-bottom-style: var(--tw-border-style);
      border-top-style: var(--tw-border-style);
      border-top-width: calc(1px * var(--tw-divide-y-reverse));
      border-bottom-width: calc(1px * calc(1 - var(--tw-divide-y-reverse)));
    }
  }
  .divide-zinc-800 {
    :where(& > :not(:last-child)) {
      border-color: var(--color-zinc-800);
    }
  }
  .place-self-center {
    place-self: center;
  }
  .self-end {
    align-self: flex-end;
  }
  .truncate {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .\\!overflow-visible {
    overflow: visible !important;
  }
  .overflow-auto {
    overflow: auto;
  }
  .overflow-hidden {
    overflow: hidden;
  }
  .overflow-x-auto {
    overflow-x: auto;
  }
  .overflow-x-hidden {
    overflow-x: hidden;
  }
  .overflow-y-auto {
    overflow-y: auto;
  }
  .rounded {
    border-radius: 4px;
  }
  .rounded-full {
    border-radius: calc(infinity * 1px);
  }
  .rounded-lg {
    border-radius: var(--radius-lg);
  }
  .rounded-md {
    border-radius: var(--radius-md);
  }
  .rounded-sm {
    border-radius: var(--radius-sm);
  }
  .rounded-t-lg {
    border-top-left-radius: var(--radius-lg);
    border-top-right-radius: var(--radius-lg);
  }
  .rounded-t-sm {
    border-top-left-radius: var(--radius-sm);
    border-top-right-radius: var(--radius-sm);
  }
  .rounded-l-md {
    border-top-left-radius: var(--radius-md);
    border-bottom-left-radius: var(--radius-md);
  }
  .rounded-l-sm {
    border-top-left-radius: var(--radius-sm);
    border-bottom-left-radius: var(--radius-sm);
  }
  .rounded-tl-lg {
    border-top-left-radius: var(--radius-lg);
  }
  .rounded-r-md {
    border-top-right-radius: var(--radius-md);
    border-bottom-right-radius: var(--radius-md);
  }
  .rounded-r-sm {
    border-top-right-radius: var(--radius-sm);
    border-bottom-right-radius: var(--radius-sm);
  }
  .rounded-tr-lg {
    border-top-right-radius: var(--radius-lg);
  }
  .rounded-br-lg {
    border-bottom-right-radius: var(--radius-lg);
  }
  .rounded-bl-lg {
    border-bottom-left-radius: var(--radius-lg);
  }
  .border {
    border-style: var(--tw-border-style);
    border-width: 1px;
  }
  .border-4 {
    border-style: var(--tw-border-style);
    border-width: 4px;
  }
  .border-t {
    border-top-style: var(--tw-border-style);
    border-top-width: 1px;
  }
  .border-r {
    border-right-style: var(--tw-border-style);
    border-right-width: 1px;
  }
  .border-b {
    border-bottom-style: var(--tw-border-style);
    border-bottom-width: 1px;
  }
  .border-l {
    border-left-style: var(--tw-border-style);
    border-left-width: 1px;
  }
  .border-l-0 {
    border-left-style: var(--tw-border-style);
    border-left-width: 0px;
  }
  .border-l-1 {
    border-left-style: var(--tw-border-style);
    border-left-width: 1px;
  }
  .border-none {
    --tw-border-style: none;
    border-style: none;
  }
  .\\!border-red-500 {
    border-color: var(--color-red-500) !important;
  }
  .border-\\[\\#1e1e1e\\] {
    border-color: #1e1e1e;
  }
  .border-\\[\\#222\\] {
    border-color: #222;
  }
  .border-\\[\\#333\\] {
    border-color: #333;
  }
  .border-\\[\\#27272A\\] {
    border-color: #27272A;
  }
  .border-transparent {
    border-color: transparent;
  }
  .border-zinc-800 {
    border-color: var(--color-zinc-800);
  }
  .bg-\\[\\#0A0A0A\\] {
    background-color: #0A0A0A;
  }
  .bg-\\[\\#1D3A66\\] {
    background-color: #1D3A66;
  }
  .bg-\\[\\#1E1E1E\\] {
    background-color: #1E1E1E;
  }
  .bg-\\[\\#1a2a1a\\] {
    background-color: #1a2a1a;
  }
  .bg-\\[\\#1e1e1e\\] {
    background-color: #1e1e1e;
  }
  .bg-\\[\\#2a1515\\] {
    background-color: #2a1515;
  }
  .bg-\\[\\#4b4b4b\\] {
    background-color: #4b4b4b;
  }
  .bg-\\[\\#5f3f9a\\] {
    background-color: #5f3f9a;
  }
  .bg-\\[\\#5f3f9a\\]\\/40 {
    background-color: color-mix(in oklab, #5f3f9a 40%, transparent);
  }
  .bg-\\[\\#6a369e\\] {
    background-color: #6a369e;
  }
  .bg-\\[\\#8e61e3\\] {
    background-color: #8e61e3;
  }
  .bg-\\[\\#7521c8\\] {
    background-color: #7521c8;
  }
  .bg-\\[\\#18181B\\] {
    background-color: #18181B;
  }
  .bg-\\[\\#18181B\\]\\/50 {
    background-color: color-mix(in oklab, #18181B 50%, transparent);
  }
  .bg-\\[\\#27272A\\] {
    background-color: #27272A;
  }
  .bg-\\[\\#44444a\\] {
    background-color: #44444a;
  }
  .bg-\\[\\#141414\\] {
    background-color: #141414;
  }
  .bg-\\[\\#214379d4\\] {
    background-color: #214379d4;
  }
  .bg-\\[\\#412162\\] {
    background-color: #412162;
  }
  .bg-\\[\\#EFD81A\\] {
    background-color: #EFD81A;
  }
  .bg-\\[\\#b77116\\] {
    background-color: #b77116;
  }
  .bg-\\[\\#b94040\\] {
    background-color: #b94040;
  }
  .bg-\\[\\#d36cff\\] {
    background-color: #d36cff;
  }
  .bg-\\[\\#efd81a6b\\] {
    background-color: #efd81a6b;
  }
  .bg-black {
    background-color: var(--color-black);
  }
  .bg-black\\/40 {
    background-color: color-mix(in srgb, #000 40%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-black) 40%, transparent);
    }
  }
  .bg-green-500\\/50 {
    background-color: color-mix(in srgb, oklch(72.3% 0.219 149.579) 50%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-green-500) 50%, transparent);
    }
  }
  .bg-green-500\\/60 {
    background-color: color-mix(in srgb, oklch(72.3% 0.219 149.579) 60%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-green-500) 60%, transparent);
    }
  }
  .bg-neutral-700 {
    background-color: var(--color-neutral-700);
  }
  .bg-purple-500 {
    background-color: var(--color-purple-500);
  }
  .bg-purple-500\\/90 {
    background-color: color-mix(in srgb, oklch(62.7% 0.265 303.9) 90%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-purple-500) 90%, transparent);
    }
  }
  .bg-purple-800 {
    background-color: var(--color-purple-800);
  }
  .bg-red-500 {
    background-color: var(--color-red-500);
  }
  .bg-red-500\\/90 {
    background-color: color-mix(in srgb, oklch(63.7% 0.237 25.331) 90%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-red-500) 90%, transparent);
    }
  }
  .bg-red-950\\/50 {
    background-color: color-mix(in srgb, oklch(25.8% 0.092 26.042) 50%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-red-950) 50%, transparent);
    }
  }
  .bg-transparent {
    background-color: transparent;
  }
  .bg-white {
    background-color: var(--color-white);
  }
  .bg-yellow-300 {
    background-color: var(--color-yellow-300);
  }
  .bg-zinc-800 {
    background-color: var(--color-zinc-800);
  }
  .bg-zinc-900\\/30 {
    background-color: color-mix(in srgb, oklch(21% 0.006 285.885) 30%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-zinc-900) 30%, transparent);
    }
  }
  .bg-zinc-900\\/50 {
    background-color: color-mix(in srgb, oklch(21% 0.006 285.885) 50%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-zinc-900) 50%, transparent);
    }
  }
  .p-0 {
    padding: calc(var(--spacing) * 0);
  }
  .p-1 {
    padding: calc(var(--spacing) * 1);
  }
  .p-2 {
    padding: calc(var(--spacing) * 2);
  }
  .p-3 {
    padding: calc(var(--spacing) * 3);
  }
  .p-4 {
    padding: calc(var(--spacing) * 4);
  }
  .p-5 {
    padding: calc(var(--spacing) * 5);
  }
  .p-6 {
    padding: calc(var(--spacing) * 6);
  }
  .px-1 {
    padding-inline: calc(var(--spacing) * 1);
  }
  .px-1\\.5 {
    padding-inline: calc(var(--spacing) * 1.5);
  }
  .px-2 {
    padding-inline: calc(var(--spacing) * 2);
  }
  .px-2\\.5 {
    padding-inline: calc(var(--spacing) * 2.5);
  }
  .px-3 {
    padding-inline: calc(var(--spacing) * 3);
  }
  .px-4 {
    padding-inline: calc(var(--spacing) * 4);
  }
  .py-0\\.5 {
    padding-block: calc(var(--spacing) * 0.5);
  }
  .py-1 {
    padding-block: calc(var(--spacing) * 1);
  }
  .py-1\\.5 {
    padding-block: calc(var(--spacing) * 1.5);
  }
  .py-2 {
    padding-block: calc(var(--spacing) * 2);
  }
  .py-3 {
    padding-block: calc(var(--spacing) * 3);
  }
  .py-4 {
    padding-block: calc(var(--spacing) * 4);
  }
  .py-\\[1px\\] {
    padding-block: 1px;
  }
  .py-\\[3px\\] {
    padding-block: 3px;
  }
  .py-\\[5px\\] {
    padding-block: 5px;
  }
  .pt-0 {
    padding-top: calc(var(--spacing) * 0);
  }
  .pt-2 {
    padding-top: calc(var(--spacing) * 2);
  }
  .pt-5 {
    padding-top: calc(var(--spacing) * 5);
  }
  .pr-1 {
    padding-right: calc(var(--spacing) * 1);
  }
  .pr-1\\.5 {
    padding-right: calc(var(--spacing) * 1.5);
  }
  .pr-2 {
    padding-right: calc(var(--spacing) * 2);
  }
  .pr-2\\.5 {
    padding-right: calc(var(--spacing) * 2.5);
  }
  .pb-2 {
    padding-bottom: calc(var(--spacing) * 2);
  }
  .pl-1 {
    padding-left: calc(var(--spacing) * 1);
  }
  .pl-2 {
    padding-left: calc(var(--spacing) * 2);
  }
  .pl-2\\.5 {
    padding-left: calc(var(--spacing) * 2.5);
  }
  .pl-3 {
    padding-left: calc(var(--spacing) * 3);
  }
  .pl-5 {
    padding-left: calc(var(--spacing) * 5);
  }
  .pl-6 {
    padding-left: calc(var(--spacing) * 6);
  }
  .text-left {
    text-align: left;
  }
  .font-mono {
    font-family: Menlo, Consolas, Monaco, Liberation Mono, Lucida Console, monospace;
  }
  .text-sm {
    font-size: var(--text-sm);
    line-height: var(--tw-leading, var(--text-sm--line-height));
  }
  .text-xs {
    font-size: var(--text-xs);
    line-height: var(--tw-leading, var(--text-xs--line-height));
  }
  .text-\\[8px\\] {
    font-size: 8px;
  }
  .text-\\[10px\\] {
    font-size: 10px;
  }
  .text-\\[11px\\] {
    font-size: 11px;
  }
  .text-\\[13px\\] {
    font-size: 13px;
  }
  .text-\\[14px\\] {
    font-size: 14px;
  }
  .text-\\[17px\\] {
    font-size: 17px;
  }
  .leading-6 {
    --tw-leading: calc(var(--spacing) * 6);
    line-height: calc(var(--spacing) * 6);
  }
  .leading-none {
    --tw-leading: 1;
    line-height: 1;
  }
  .font-bold {
    --tw-font-weight: var(--font-weight-bold);
    font-weight: var(--font-weight-bold);
  }
  .font-medium {
    --tw-font-weight: var(--font-weight-medium);
    font-weight: var(--font-weight-medium);
  }
  .font-semibold {
    --tw-font-weight: var(--font-weight-semibold);
    font-weight: var(--font-weight-semibold);
  }
  .tracking-wide {
    --tw-tracking: var(--tracking-wide);
    letter-spacing: var(--tracking-wide);
  }
  .text-wrap {
    text-wrap: wrap;
  }
  .break-words {
    overflow-wrap: break-word;
  }
  .break-all {
    word-break: break-all;
  }
  .whitespace-nowrap {
    white-space: nowrap;
  }
  .whitespace-pre-wrap {
    white-space: pre-wrap;
  }
  .text-\\[\\#4ade80\\] {
    color: #4ade80;
  }
  .text-\\[\\#5a5a5a\\] {
    color: #5a5a5a;
  }
  .text-\\[\\#6E6E77\\] {
    color: #6E6E77;
  }
  .text-\\[\\#6F6F78\\] {
    color: #6F6F78;
  }
  .text-\\[\\#8E61E3\\] {
    color: #8E61E3;
  }
  .text-\\[\\#666\\] {
    color: #666;
  }
  .text-\\[\\#888\\] {
    color: #888;
  }
  .text-\\[\\#999\\] {
    color: #999;
  }
  .text-\\[\\#7346a0\\] {
    color: #7346a0;
  }
  .text-\\[\\#65656D\\] {
    color: #65656D;
  }
  .text-\\[\\#737373\\] {
    color: #737373;
  }
  .text-\\[\\#A1A1AA\\] {
    color: #A1A1AA;
  }
  .text-\\[\\#A855F7\\] {
    color: #A855F7;
  }
  .text-\\[\\#E4E4E7\\] {
    color: #E4E4E7;
  }
  .text-\\[\\#d36cff\\] {
    color: #d36cff;
  }
  .text-\\[\\#f87171\\] {
    color: #f87171;
  }
  .text-black {
    color: var(--color-black);
  }
  .text-gray-100 {
    color: var(--color-gray-100);
  }
  .text-gray-300 {
    color: var(--color-gray-300);
  }
  .text-gray-400 {
    color: var(--color-gray-400);
  }
  .text-gray-500 {
    color: var(--color-gray-500);
  }
  .text-green-500 {
    color: var(--color-green-500);
  }
  .text-neutral-300 {
    color: var(--color-neutral-300);
  }
  .text-neutral-400 {
    color: var(--color-neutral-400);
  }
  .text-neutral-500 {
    color: var(--color-neutral-500);
  }
  .text-purple-400 {
    color: var(--color-purple-400);
  }
  .text-red-300 {
    color: var(--color-red-300);
  }
  .text-red-400 {
    color: var(--color-red-400);
  }
  .text-red-500 {
    color: var(--color-red-500);
  }
  .text-white {
    color: var(--color-white);
  }
  .text-white\\/30 {
    color: color-mix(in srgb, #fff 30%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      color: color-mix(in oklab, var(--color-white) 30%, transparent);
    }
  }
  .text-white\\/70 {
    color: color-mix(in srgb, #fff 70%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      color: color-mix(in oklab, var(--color-white) 70%, transparent);
    }
  }
  .text-yellow-300 {
    color: var(--color-yellow-300);
  }
  .text-yellow-500 {
    color: var(--color-yellow-500);
  }
  .text-zinc-200 {
    color: var(--color-zinc-200);
  }
  .text-zinc-400 {
    color: var(--color-zinc-400);
  }
  .text-zinc-500 {
    color: var(--color-zinc-500);
  }
  .text-zinc-600 {
    color: var(--color-zinc-600);
  }
  .uppercase {
    text-transform: uppercase;
  }
  .italic {
    font-style: italic;
  }
  .opacity-0 {
    opacity: 0%;
  }
  .opacity-50 {
    opacity: 50%;
  }
  .opacity-100 {
    opacity: 100%;
  }
  .shadow-lg {
    --tw-shadow: 0 10px 15px -3px var(--tw-shadow-color, rgb(0 0 0 / 0.1)), 0 4px 6px -4px var(--tw-shadow-color, rgb(0 0 0 / 0.1));
    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  }
  .ring-1 {
    --tw-ring-shadow: var(--tw-ring-inset,) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor);
    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  }
  .ring-white\\/\\[0\\.08\\] {
    --tw-ring-color: color-mix(in srgb, #fff 8%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-ring-color: color-mix(in oklab, var(--color-white) 8%, transparent);
    }
  }
  .outline {
    outline-style: var(--tw-outline-style);
    outline-width: 1px;
  }
  .filter {
    filter: var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,);
  }
  .backdrop-blur-sm {
    --tw-backdrop-blur: blur(var(--blur-sm));
    backdrop-filter: var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);
  }
  .transition {
    transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to, opacity, box-shadow, transform, translate, scale, rotate, filter, backdrop-filter, display, content-visibility, overlay, pointer-events;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
  .transition-\\[border-radius\\] {
    transition-property: border-radius;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
  .transition-\\[color\\,transform\\] {
    transition-property: color,transform;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
  .transition-\\[max-height\\] {
    transition-property: max-height;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
  .transition-\\[opacity\\] {
    transition-property: opacity;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
  .transition-all {
    transition-property: all;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
  .transition-colors {
    transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
  .transition-opacity {
    transition-property: opacity;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
  .transition-transform {
    transition-property: transform, translate, scale, rotate;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
  .transition-none {
    transition-property: none;
  }
  .delay-0 {
    transition-delay: 0ms;
  }
  .delay-150 {
    transition-delay: 150ms;
  }
  .delay-300 {
    transition-delay: 300ms;
  }
  .\\!duration-0 {
    --tw-duration: 0ms !important;
    transition-duration: 0ms !important;
  }
  .duration-0 {
    --tw-duration: 0ms;
    transition-duration: 0ms;
  }
  .duration-120 {
    --tw-duration: 120ms;
    transition-duration: 120ms;
  }
  .duration-200 {
    --tw-duration: 200ms;
    transition-duration: 200ms;
  }
  .duration-300 {
    --tw-duration: 300ms;
    transition-duration: 300ms;
  }
  .ease-\\[cubic-bezier\\(0\\.25\\,0\\.1\\,0\\.25\\,1\\)\\] {
    --tw-ease: cubic-bezier(0.25,0.1,0.25,1);
    transition-timing-function: cubic-bezier(0.25,0.1,0.25,1);
  }
  .ease-in {
    --tw-ease: var(--ease-in);
    transition-timing-function: var(--ease-in);
  }
  .ease-in-out {
    --tw-ease: var(--ease-in-out);
    transition-timing-function: var(--ease-in-out);
  }
  .ease-out {
    --tw-ease: var(--ease-out);
    transition-timing-function: var(--ease-out);
  }
  .will-change-transform {
    will-change: transform;
  }
  .select-none {
    -webkit-user-select: none;
    -moz-user-select: none;
         user-select: none;
  }
  .animation-delay-0 {
    animation-delay: 0s;
  }
  .animation-delay-100 {
    animation-delay: .1s;
  }
  .animation-delay-150 {
    animation-delay: .15s;
  }
  .animation-delay-200 {
    animation-delay: .2s;
  }
  .animation-delay-300 {
    animation-delay: .3s;
  }
  .animation-delay-500 {
    animation-delay: .5s;
  }
  .animation-delay-700 {
    animation-delay: .7s;
  }
  .animation-delay-1000 {
    animation-delay: 1s;
  }
  .animation-duration-0 {
    animation-duration: 0s;
  }
  .animation-duration-100 {
    animation-duration: .1s;
  }
  .animation-duration-200 {
    animation-duration: .2s;
  }
  .animation-duration-300 {
    animation-duration: .3s;
  }
  .animation-duration-500 {
    animation-duration: .5s;
  }
  .animation-duration-700 {
    animation-duration: .7s;
  }
  .animation-duration-1000 {
    animation-duration: 1s;
  }
  .group-hover\\:bg-\\[\\#5b2d89\\] {
    &:is(:where(.group):hover *) {
      @media (hover: hover) {
        background-color: #5b2d89;
      }
    }
  }
  .group-hover\\:bg-\\[\\#6a6a6a\\] {
    &:is(:where(.group):hover *) {
      @media (hover: hover) {
        background-color: #6a6a6a;
      }
    }
  }
  .group-hover\\:bg-\\[\\#21437982\\] {
    &:is(:where(.group):hover *) {
      @media (hover: hover) {
        background-color: #21437982;
      }
    }
  }
  .group-hover\\:bg-\\[\\#efda1a2f\\] {
    &:is(:where(.group):hover *) {
      @media (hover: hover) {
        background-color: #efda1a2f;
      }
    }
  }
  .group-hover\\:opacity-100 {
    &:is(:where(.group):hover *) {
      @media (hover: hover) {
        opacity: 100%;
      }
    }
  }
  .peer-hover\\/bottom\\:rounded-b-none {
    &:is(:where(.peer\\/bottom):hover ~ *) {
      @media (hover: hover) {
        border-bottom-right-radius: 0;
        border-bottom-left-radius: 0;
      }
    }
  }
  .peer-hover\\/left\\:rounded-l-none {
    &:is(:where(.peer\\/left):hover ~ *) {
      @media (hover: hover) {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
      }
    }
  }
  .peer-hover\\/right\\:rounded-r-none {
    &:is(:where(.peer\\/right):hover ~ *) {
      @media (hover: hover) {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
      }
    }
  }
  .peer-hover\\/top\\:rounded-t-none {
    &:is(:where(.peer\\/top):hover ~ *) {
      @media (hover: hover) {
        border-top-left-radius: 0;
        border-top-right-radius: 0;
      }
    }
  }
  .after\\:absolute {
    &::after {
      content: var(--tw-content);
      position: absolute;
    }
  }
  .after\\:inset-0 {
    &::after {
      content: var(--tw-content);
      inset: calc(var(--spacing) * 0);
    }
  }
  .after\\:top-\\[100\\%\\] {
    &::after {
      content: var(--tw-content);
      top: 100%;
    }
  }
  .after\\:left-1\\/2 {
    &::after {
      content: var(--tw-content);
      left: calc(1 / 2 * 100%);
    }
  }
  .after\\:h-\\[6px\\] {
    &::after {
      content: var(--tw-content);
      height: 6px;
    }
  }
  .after\\:w-\\[10px\\] {
    &::after {
      content: var(--tw-content);
      width: 10px;
    }
  }
  .after\\:-translate-x-1\\/2 {
    &::after {
      content: var(--tw-content);
      --tw-translate-x: calc(calc(1 / 2 * 100%) * -1);
      translate: var(--tw-translate-x) var(--tw-translate-y);
    }
  }
  .after\\:animate-\\[fadeOut_1s_ease-out_forwards\\] {
    &::after {
      content: var(--tw-content);
      animation: fadeOut 1s ease-out forwards;
    }
  }
  .after\\:border-t-\\[6px\\] {
    &::after {
      content: var(--tw-content);
      border-top-style: var(--tw-border-style);
      border-top-width: 6px;
    }
  }
  .after\\:border-r-\\[5px\\] {
    &::after {
      content: var(--tw-content);
      border-right-style: var(--tw-border-style);
      border-right-width: 5px;
    }
  }
  .after\\:border-l-\\[5px\\] {
    &::after {
      content: var(--tw-content);
      border-left-style: var(--tw-border-style);
      border-left-width: 5px;
    }
  }
  .after\\:border-t-white {
    &::after {
      content: var(--tw-content);
      border-top-color: var(--color-white);
    }
  }
  .after\\:border-r-transparent {
    &::after {
      content: var(--tw-content);
      border-right-color: transparent;
    }
  }
  .after\\:border-l-transparent {
    &::after {
      content: var(--tw-content);
      border-left-color: transparent;
    }
  }
  .after\\:bg-purple-500\\/30 {
    &::after {
      content: var(--tw-content);
      background-color: color-mix(in srgb, oklch(62.7% 0.265 303.9) 30%, transparent);
      @supports (color: color-mix(in lab, red, red)) {
        background-color: color-mix(in oklab, var(--color-purple-500) 30%, transparent);
      }
    }
  }
  .after\\:content-\\[\\"\\"\\] {
    &::after {
      --tw-content: "";
      content: var(--tw-content);
    }
  }
  .focus-within\\:border-\\[\\#454545\\] {
    &:focus-within {
      border-color: #454545;
    }
  }
  .hover\\:bg-\\[\\#0f0f0f\\] {
    &:hover {
      @media (hover: hover) {
        background-color: #0f0f0f;
      }
    }
  }
  .hover\\:bg-\\[\\#5f3f9a\\]\\/20 {
    &:hover {
      @media (hover: hover) {
        background-color: color-mix(in oklab, #5f3f9a 20%, transparent);
      }
    }
  }
  .hover\\:bg-\\[\\#5f3f9a\\]\\/40 {
    &:hover {
      @media (hover: hover) {
        background-color: color-mix(in oklab, #5f3f9a 40%, transparent);
      }
    }
  }
  .hover\\:bg-\\[\\#18181B\\] {
    &:hover {
      @media (hover: hover) {
        background-color: #18181B;
      }
    }
  }
  .hover\\:bg-\\[\\#34343b\\] {
    &:hover {
      @media (hover: hover) {
        background-color: #34343b;
      }
    }
  }
  .hover\\:bg-red-600 {
    &:hover {
      @media (hover: hover) {
        background-color: var(--color-red-600);
      }
    }
  }
  .hover\\:bg-zinc-700 {
    &:hover {
      @media (hover: hover) {
        background-color: var(--color-zinc-700);
      }
    }
  }
  .hover\\:bg-zinc-800\\/50 {
    &:hover {
      @media (hover: hover) {
        background-color: color-mix(in srgb, oklch(27.4% 0.006 286.033) 50%, transparent);
        @supports (color: color-mix(in lab, red, red)) {
          background-color: color-mix(in oklab, var(--color-zinc-800) 50%, transparent);
        }
      }
    }
  }
  .hover\\:text-neutral-300 {
    &:hover {
      @media (hover: hover) {
        color: var(--color-neutral-300);
      }
    }
  }
  .hover\\:text-white {
    &:hover {
      @media (hover: hover) {
        color: var(--color-white);
      }
    }
  }
}
* {
  outline: none !important;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  &::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }
  &::-webkit-scrollbar-track {
    border-radius: 10px;
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.3);
  }
  &::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.4);
  }
  &::-webkit-scrollbar-corner {
    background: transparent;
  }
}
@-moz-document url-prefix() {
  * {
    scrollbar-width: thin;
    scrollbar-color: rgba(255, 255, 255, 0.4) transparent;
    scrollbar-width: 6px;
  }
}
button {
  &:hover {
    @media (hover: hover) {
      background-image: none;
    }
  }
  --tw-outline-style: none;
  outline-style: none;
  --tw-border-style: none;
  border-style: none;
  transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to;
  transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
  transition-duration: var(--tw-duration, var(--default-transition-duration));
  --tw-ease: var(--ease-out);
  transition-timing-function: var(--ease-out);
  cursor: pointer;
}
input {
  --tw-outline-style: none;
  outline-style: none;
  --tw-border-style: none;
  border-style: none;
  background-color: transparent;
  background-image: none;
  &::-moz-placeholder {
    font-size: var(--text-xs);
    line-height: var(--tw-leading, var(--text-xs--line-height));
  }
  &::placeholder {
    font-size: var(--text-xs);
    line-height: var(--tw-leading, var(--text-xs--line-height));
  }
  &::-moz-placeholder {
    color: var(--color-neutral-500);
  }
  &::placeholder {
    color: var(--color-neutral-500);
  }
  &::-moz-placeholder {
    font-style: italic;
  }
  &::placeholder {
    font-style: italic;
  }
  &:-moz-placeholder {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  &:placeholder-shown {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
svg {
  height: auto;
  width: auto;
  pointer-events: none;
}
.with-data-text {
  overflow: hidden;
  &::before {
    content: attr(data-text);
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
#react-scan-toolbar {
  position: fixed;
  top: calc(var(--spacing) * 0);
  left: calc(var(--spacing) * 0);
  display: flex;
  flex-direction: column;
  --tw-shadow: 0 10px 15px -3px var(--tw-shadow-color, rgb(0 0 0 / 0.1)), 0 4px 6px -4px var(--tw-shadow-color, rgb(0 0 0 / 0.1));
  font-family: Menlo, Consolas, Monaco, Liberation Mono, Lucida Console, monospace;
  font-size: 13px;
  color: var(--color-white);
  background-color: var(--color-black);
  -webkit-user-select: none;
  -moz-user-select: none;
       user-select: none;
  cursor: move;
  opacity: 0%;
  z-index: 2147483678;
  animation: fadeIn ease-in forwards;
  animation-delay: .3s;
  animation-duration: .3s;
  --tw-shadow: 0 4px 12px var(--tw-shadow-color, rgba(0,0,0,0.2));
  box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  place-self: start;
  will-change: transform;
  backface-visibility: hidden;
}
#react-scan-toolbar pre,
#react-scan-toolbar textarea,
#react-scan-toolbar input[type='text'],
#react-scan-toolbar input[type='search'],
#react-scan-toolbar [data-react-scan-selectable] {
  -webkit-user-select: text;
  -moz-user-select: text;
       user-select: text;
  cursor: text;
}
.button {
  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
  &:active {
    background: rgba(255, 255, 255, 0.15);
  }
}
.resize-line-wrapper {
  position: absolute;
  overflow: hidden;
}
.resize-line {
  position: absolute;
  inset: calc(var(--spacing) * 0);
  overflow: hidden;
  background-color: var(--color-black);
  transition-property: all;
  transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
  transition-duration: var(--tw-duration, var(--default-transition-duration));
  svg {
    position: absolute;
    top: calc(1 / 2 * 100%);
    left: calc(1 / 2 * 100%);
    --tw-translate-x: calc(calc(1 / 2 * 100%) * -1);
    --tw-translate-y: calc(calc(1 / 2 * 100%) * -1);
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
}
.resize-right,
.resize-left {
  inset-block: calc(var(--spacing) * 0);
  width: calc(var(--spacing) * 6);
  cursor: ew-resize;
  .resize-line-wrapper {
    inset-block: calc(var(--spacing) * 0);
    width: calc(1 / 2 * 100%);
  }
  &:hover {
    .resize-line {
      --tw-translate-x: calc(var(--spacing) * 0);
      translate: var(--tw-translate-x) var(--tw-translate-y);
    }
  }
}
.resize-right {
  right: calc(var(--spacing) * 0);
  --tw-translate-x: calc(1 / 2 * 100%);
  translate: var(--tw-translate-x) var(--tw-translate-y);
  .resize-line-wrapper {
    right: calc(var(--spacing) * 0);
  }
  .resize-line {
    border-top-right-radius: var(--radius-lg);
    border-bottom-right-radius: var(--radius-lg);
    --tw-translate-x: -100%;
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
}
.resize-left {
  left: calc(var(--spacing) * 0);
  --tw-translate-x: calc(calc(1 / 2 * 100%) * -1);
  translate: var(--tw-translate-x) var(--tw-translate-y);
  .resize-line-wrapper {
    left: calc(var(--spacing) * 0);
  }
  .resize-line {
    border-top-left-radius: var(--radius-lg);
    border-bottom-left-radius: var(--radius-lg);
    --tw-translate-x: 100%;
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
}
.resize-top,
.resize-bottom {
  inset-inline: calc(var(--spacing) * 0);
  height: calc(var(--spacing) * 6);
  cursor: ns-resize;
  .resize-line-wrapper {
    inset-inline: calc(var(--spacing) * 0);
    height: calc(1 / 2 * 100%);
  }
  &:hover {
    .resize-line {
      --tw-translate-y: calc(var(--spacing) * 0);
      translate: var(--tw-translate-x) var(--tw-translate-y);
    }
  }
}
.resize-top {
  top: calc(var(--spacing) * 0);
  --tw-translate-y: calc(calc(1 / 2 * 100%) * -1);
  translate: var(--tw-translate-x) var(--tw-translate-y);
  .resize-line-wrapper {
    top: calc(var(--spacing) * 0);
  }
  .resize-line {
    border-top-left-radius: var(--radius-lg);
    border-top-right-radius: var(--radius-lg);
    --tw-translate-y: 100%;
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
}
.resize-bottom {
  bottom: calc(var(--spacing) * 0);
  --tw-translate-y: calc(1 / 2 * 100%);
  translate: var(--tw-translate-x) var(--tw-translate-y);
  .resize-line-wrapper {
    bottom: calc(var(--spacing) * 0);
  }
  .resize-line {
    border-bottom-right-radius: var(--radius-lg);
    border-bottom-left-radius: var(--radius-lg);
    --tw-translate-y: -100%;
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
}
.react-scan-header {
  display: flex;
  align-items: center;
  -moz-column-gap: calc(var(--spacing) * 2);
       column-gap: calc(var(--spacing) * 2);
  padding-right: calc(var(--spacing) * 2);
  padding-left: calc(var(--spacing) * 3);
  min-height: calc(var(--spacing) * 9);
  border-bottom-style: var(--tw-border-style);
  border-bottom-width: 1px;
  border-color: #222;
  overflow: hidden;
  white-space: nowrap;
}
.react-scan-replay-button,
.react-scan-close-button {
  display: flex;
  align-items: center;
  padding: calc(var(--spacing) * 1);
  min-width: -moz-fit-content;
  min-width: fit-content;
  border-radius: 4px;
  transition-property: all;
  transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
  transition-duration: var(--tw-duration, var(--default-transition-duration));
  --tw-duration: 300ms;
  transition-duration: 300ms;
}
.react-scan-replay-button {
  position: relative;
  overflow: hidden;
  background-color: color-mix(in srgb, oklch(62.7% 0.265 303.9) 50%, transparent) !important;
  @supports (color: color-mix(in lab, red, red)) {
    background-color: color-mix(in oklab, var(--color-purple-500) 50%, transparent) !important;
  }
  &:hover {
    background-color: color-mix(in srgb, oklch(62.7% 0.265 303.9) 25%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-purple-500) 25%, transparent);
    }
  }
  &.disabled {
    opacity: 50%;
    pointer-events: none;
  }
  &:before {
    content: "";
    position: absolute;
    inset: calc(var(--spacing) * 0);
    --tw-translate-x: -100%;
    translate: var(--tw-translate-x) var(--tw-translate-y);
    animation: shimmer 2s infinite;
    background: linear-gradient(
      to right,
      transparent,
      rgba(142, 97, 227, 0.3),
      transparent
    );
  }
}
.react-scan-close-button {
  background-color: color-mix(in srgb, #fff 10%, transparent);
  @supports (color: color-mix(in lab, red, red)) {
    background-color: color-mix(in oklab, var(--color-white) 10%, transparent);
  }
  &:hover {
    background-color: color-mix(in srgb, #fff 15%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-white) 15%, transparent);
    }
  }
}
@keyframes shimmer {
  100% {
    transform: translateX(100%);
  }
}
.react-section-header {
  position: sticky;
  z-index: 100;
  display: flex;
  align-items: center;
  -moz-column-gap: calc(var(--spacing) * 2);
       column-gap: calc(var(--spacing) * 2);
  padding-inline: calc(var(--spacing) * 3);
  height: calc(var(--spacing) * 7);
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #888;
  border-bottom-style: var(--tw-border-style);
  border-bottom-width: 1px;
  border-color: #222;
  background-color: #0a0a0a;
}
.react-scan-section {
  display: flex;
  flex-direction: column;
  padding-inline: calc(var(--spacing) * 2);
  color: #888;
  &::before {
    content: var(--tw-content);
    color: var(--color-gray-500);
  }
  &::before {
    --tw-content: attr(data-section);
    content: var(--tw-content);
  }
  font-size: var(--text-xs);
  line-height: var(--tw-leading, var(--text-xs--line-height));
  > .react-scan-property {
    margin-left: calc(14px * -1);
  }
}
.react-scan-property {
  position: relative;
  display: flex;
  flex-direction: column;
  padding-left: calc(var(--spacing) * 8);
  border-left-style: var(--tw-border-style);
  border-left-width: 1px;
  border-color: transparent;
  overflow: hidden;
}
.react-scan-property-content {
  display: flex;
  flex: 1;
  flex-direction: column;
  min-height: calc(var(--spacing) * 7);
  max-width: 100%;
  overflow: hidden;
}
.react-scan-string {
  color: #9ecbff;
}
.react-scan-number {
  color: #79c7ff;
}
.react-scan-boolean {
  color: #56b6c2;
}
.react-scan-key {
  width: -moz-fit-content;
  width: fit-content;
  max-width: calc(var(--spacing) * 60);
  white-space: nowrap;
  color: var(--color-white);
}
.react-scan-input {
  color: var(--color-white);
  background-color: var(--color-black);
}
@keyframes blink {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.react-scan-arrow {
  position: absolute;
  top: calc(var(--spacing) * 0);
  left: calc(var(--spacing) * 7);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  height: calc(var(--spacing) * 7);
  width: calc(var(--spacing) * 6);
  --tw-translate-x: -100%;
  translate: var(--tw-translate-x) var(--tw-translate-y);
  z-index: 10;
  > svg {
    transition-property: transform, translate, scale, rotate;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
}
.react-scan-nested {
  position: relative;
  overflow: hidden;
  &:before {
    content: "";
    position: absolute;
    top: calc(var(--spacing) * 0);
    left: calc(var(--spacing) * 0);
    height: 100%;
    width: 1px;
    background-color: color-mix(in srgb, oklch(55.1% 0.027 264.364) 30%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-gray-500) 30%, transparent);
    }
  }
}
.react-scan-settings {
  position: absolute;
  inset: calc(var(--spacing) * 0);
  display: flex;
  flex-direction: column;
  gap: calc(var(--spacing) * 4);
  padding-inline: calc(var(--spacing) * 4);
  padding-block: calc(var(--spacing) * 2);
  color: #888;
  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
    --tw-duration: 300ms;
    transition-duration: 300ms;
  }
}
.react-scan-preview-line {
  position: relative;
  display: flex;
  min-height: calc(var(--spacing) * 7);
  align-items: center;
  -moz-column-gap: calc(var(--spacing) * 2);
       column-gap: calc(var(--spacing) * 2);
}
.react-scan-flash-overlay {
  position: absolute;
  inset: calc(var(--spacing) * 0);
  opacity: 0%;
  z-index: 50;
  pointer-events: none;
  transition-property: opacity;
  transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
  transition-duration: var(--tw-duration, var(--default-transition-duration));
  mix-blend-mode: multiply;
  background-color: color-mix(in srgb, oklch(62.7% 0.265 303.9) 90%, transparent);
  @supports (color: color-mix(in lab, red, red)) {
    background-color: color-mix(in oklab, var(--color-purple-500) 90%, transparent);
  }
}
.react-scan-toggle {
  position: relative;
  display: inline-flex;
  height: calc(var(--spacing) * 6);
  width: calc(var(--spacing) * 10);
  input {
    position: absolute;
    inset: calc(var(--spacing) * 0);
    z-index: 20;
    opacity: 0%;
    cursor: pointer;
    height: 100%;
    width: 100%;
  }
  input:checked {
    + div {
      background-color: #5f3f9a;
      &::before {
        --tw-translate-x: 100%;
        translate: var(--tw-translate-x) var(--tw-translate-y);
        left: auto;
        border-color: #5f3f9a;
      }
    }
  }
  > div {
    position: absolute;
    inset: calc(var(--spacing) * 1);
    background-color: var(--color-neutral-700);
    border-radius: calc(infinity * 1px);
    pointer-events: none;
    transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
    --tw-duration: 300ms;
    transition-duration: 300ms;
    &:before {
      --tw-content: '';
      content: var(--tw-content);
      position: absolute;
      top: calc(1 / 2 * 100%);
      left: calc(var(--spacing) * 0);
      --tw-translate-y: calc(calc(1 / 2 * 100%) * -1);
      translate: var(--tw-translate-x) var(--tw-translate-y);
      height: calc(var(--spacing) * 4);
      width: calc(var(--spacing) * 4);
      background-color: var(--color-white);
      border-style: var(--tw-border-style);
      border-width: 2px;
      border-color: var(--color-neutral-700);
      border-radius: calc(infinity * 1px);
      --tw-shadow: 0 1px 3px 0 var(--tw-shadow-color, rgb(0 0 0 / 0.1)), 0 1px 2px -1px var(--tw-shadow-color, rgb(0 0 0 / 0.1));
      box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
      transition-property: all;
      transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
      transition-duration: var(--tw-duration, var(--default-transition-duration));
      --tw-duration: 300ms;
      transition-duration: 300ms;
    }
  }
}
.react-scan-flash-active {
  opacity: 40%;
  transition-property: opacity;
  transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
  transition-duration: var(--tw-duration, var(--default-transition-duration));
  --tw-duration: 300ms;
  transition-duration: 300ms;
}
.react-scan-inspector-overlay {
  display: flex;
  flex-direction: column;
  opacity: 0%;
  transition-property: opacity;
  transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
  transition-duration: var(--tw-duration, var(--default-transition-duration));
  --tw-duration: 200ms;
  transition-duration: 200ms;
  --tw-ease: var(--ease-out);
  transition-timing-function: var(--ease-out);
  will-change: opacity;
  &.fade-out {
    opacity: 0%;
  }
  &.fade-in {
    opacity: 100%;
  }
}
.react-scan-what-changed {
  ul {
    list-style-type: disc;
    padding-left: calc(var(--spacing) * 4);
  }
  li {
    white-space: nowrap;
    > div {
      display: flex;
      align-items: center;
      justify-content: space-between;
      -moz-column-gap: calc(var(--spacing) * 2);
           column-gap: calc(var(--spacing) * 2);
    }
  }
}
.count-badge {
  display: flex;
  align-items: center;
  -moz-column-gap: calc(var(--spacing) * 2);
       column-gap: calc(var(--spacing) * 2);
  padding-inline: calc(var(--spacing) * 1.5);
  padding-block: calc(var(--spacing) * 0.5);
  border-radius: 4px;
  font-size: var(--text-xs);
  line-height: var(--tw-leading, var(--text-xs--line-height));
  --tw-font-weight: var(--font-weight-medium);
  font-weight: var(--font-weight-medium);
  color: #a855f7;
  --tw-numeric-spacing: tabular-nums;
  font-variant-numeric: var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,);
  background-color: color-mix(in oklab, #a855f7 10%, transparent);
  transform-origin: center;
  transition-property: all;
  transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
  transition-duration: var(--tw-duration, var(--default-transition-duration));
  transition-delay: 150ms;
  --tw-duration: 300ms;
  transition-duration: 300ms;
}
.count-flash {
  animation: countFlash .3s ease-out forwards;
}
.count-flash-white {
  animation: countFlashShake .3s ease-out forwards;
  transition-delay: 500ms !important;
}
.change-scope {
  display: flex;
  align-items: center;
  -moz-column-gap: calc(var(--spacing) * 1);
       column-gap: calc(var(--spacing) * 1);
  color: #666;
  font-size: var(--text-xs);
  line-height: var(--tw-leading, var(--text-xs--line-height));
  font-family: Menlo, Consolas, Monaco, Liberation Mono, Lucida Console, monospace;
  > div {
    padding-inline: calc(var(--spacing) * 1.5);
    padding-block: calc(var(--spacing) * 0.5);
    border-radius: 4px;
    font-size: var(--text-xs);
    line-height: var(--tw-leading, var(--text-xs--line-height));
    --tw-font-weight: var(--font-weight-medium);
    font-weight: var(--font-weight-medium);
    --tw-numeric-spacing: tabular-nums;
    font-variant-numeric: var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,);
    transform-origin: center;
    transition-property: all;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
    transition-delay: 150ms;
    --tw-duration: 300ms;
    transition-duration: 300ms;
    &[data-flash="true"] {
      background-color: color-mix(in oklab, #a855f7 10%, transparent);
      color: #a855f7;
    }
  }
}
.react-scan-slider {
  position: relative;
  min-height: calc(var(--spacing) * 6);
  > input {
    position: absolute;
    inset: calc(var(--spacing) * 0);
    opacity: 0%;
  }
  &:before {
    --tw-content: '';
    content: var(--tw-content);
    position: absolute;
    inset-inline: calc(var(--spacing) * 0);
    top: calc(1 / 2 * 100%);
    --tw-translate-y: calc(calc(1 / 2 * 100%) * -1);
    translate: var(--tw-translate-x) var(--tw-translate-y);
    height: calc(var(--spacing) * 1.5);
    background-color: color-mix(in oklab, #8e61e3 40%, transparent);
    border-radius: var(--radius-lg);
    pointer-events: none;
  }
  &:after {
    --tw-content: '';
    content: var(--tw-content);
    position: absolute;
    inset-inline: calc(var(--spacing) * 0);
    inset-block: calc(var(--spacing) * -2);
    z-index: calc(10 * -1);
  }
  span {
    position: absolute;
    top: calc(1 / 2 * 100%);
    left: calc(var(--spacing) * 0);
    --tw-translate-y: calc(calc(1 / 2 * 100%) * -1);
    translate: var(--tw-translate-x) var(--tw-translate-y);
    height: calc(var(--spacing) * 2.5);
    width: calc(var(--spacing) * 2.5);
    border-radius: var(--radius-lg);
    background-color: #8e61e3;
    pointer-events: none;
    transition-property: transform, translate, scale, rotate;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
    --tw-duration: 75ms;
    transition-duration: 75ms;
  }
}
.resize-v-line {
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: calc(var(--spacing) * 1);
  min-width: calc(var(--spacing) * 1);
  height: 100%;
  width: 100%;
  transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to;
  transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
  transition-duration: var(--tw-duration, var(--default-transition-duration));
  &:hover,
  &:active {
    > span {
      background-color: #222;
    }
    svg {
      opacity: 100%;
    }
  }
  &::before {
    --tw-content: "";
    content: var(--tw-content);
    position: absolute;
    inset: calc(var(--spacing) * 0);
    left: calc(1 / 2 * 100%);
    --tw-translate-x: calc(calc(1 / 2 * 100%) * -1);
    translate: var(--tw-translate-x) var(--tw-translate-y);
    width: 1px;
    background-color: #222;
    transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
  > span {
    position: absolute;
    top: calc(1 / 2 * 100%);
    left: calc(1 / 2 * 100%);
    --tw-translate-x: calc(calc(1 / 2 * 100%) * -1);
    --tw-translate-y: calc(calc(1 / 2 * 100%) * -1);
    translate: var(--tw-translate-x) var(--tw-translate-y);
    height: 18px;
    width: calc(var(--spacing) * 1.5);
    border-radius: 4px;
    transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
  svg {
    position: absolute;
    top: calc(1 / 2 * 100%);
    left: calc(1 / 2 * 100%);
    --tw-translate-x: calc(calc(1 / 2 * 100%) * -1);
    --tw-translate-y: calc(calc(1 / 2 * 100%) * -1);
    translate: var(--tw-translate-x) var(--tw-translate-y);
    rotate: 90deg;
    color: var(--color-neutral-400);
    opacity: 0%;
    transition-property: opacity;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
    z-index: 50;
  }
}
.tree-node-search-highlight {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  span {
    padding-block: 1px;
    border-radius: var(--radius-sm);
    background-color: var(--color-yellow-300);
    --tw-font-weight: var(--font-weight-medium);
    font-weight: var(--font-weight-medium);
    color: var(--color-black);
  }
  .single {
    margin-right: 1px;
    padding-inline: 2px;
  }
  .regex {
    padding-inline: 2px;
  }
  .start {
    margin-left: 1px;
    border-top-left-radius: var(--radius-sm);
    border-bottom-left-radius: var(--radius-sm);
  }
  .end {
    margin-right: 1px;
    border-top-right-radius: var(--radius-sm);
    border-bottom-right-radius: var(--radius-sm);
  }
  .middle {
    margin-inline: 1px;
    border-radius: var(--radius-sm);
  }
}
.react-scan-toolbar-notification {
  position: absolute;
  inset-inline: calc(var(--spacing) * 0);
  display: flex;
  align-items: center;
  -moz-column-gap: calc(var(--spacing) * 2);
       column-gap: calc(var(--spacing) * 2);
  padding: calc(var(--spacing) * 1);
  padding-left: calc(var(--spacing) * 2);
  font-size: 10px;
  color: var(--color-neutral-300);
  background-color: color-mix(in srgb, #000 90%, transparent);
  @supports (color: color-mix(in lab, red, red)) {
    background-color: color-mix(in oklab, var(--color-black) 90%, transparent);
  }
  transition-property: transform, translate, scale, rotate;
  transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
  transition-duration: var(--tw-duration, var(--default-transition-duration));
  &:before {
    --tw-content: '';
    content: var(--tw-content);
    position: absolute;
    inset-inline: calc(var(--spacing) * 0);
    background-color: var(--color-black);
    height: calc(var(--spacing) * 2);
  }
  &.position-top {
    top: 100%;
    --tw-translate-y: -100%;
    translate: var(--tw-translate-x) var(--tw-translate-y);
    border-bottom-right-radius: var(--radius-lg);
    border-bottom-left-radius: var(--radius-lg);
    &::before {
      top: calc(var(--spacing) * 0);
      --tw-translate-y: -100%;
      translate: var(--tw-translate-x) var(--tw-translate-y);
    }
  }
  &.position-bottom {
    bottom: 100%;
    --tw-translate-y: 100%;
    translate: var(--tw-translate-x) var(--tw-translate-y);
    border-top-left-radius: var(--radius-lg);
    border-top-right-radius: var(--radius-lg);
    &::before {
      bottom: calc(var(--spacing) * 0);
      --tw-translate-y: 100%;
      translate: var(--tw-translate-x) var(--tw-translate-y);
    }
  }
  &.is-open {
    --tw-translate-y: calc(var(--spacing) * 0);
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
}
.react-scan-header-item {
  position: absolute;
  inset: calc(var(--spacing) * 0);
  --tw-translate-y: calc(200% * -1);
  translate: var(--tw-translate-x) var(--tw-translate-y);
  transition-property: transform, translate, scale, rotate;
  transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
  transition-duration: var(--tw-duration, var(--default-transition-duration));
  --tw-duration: 300ms;
  transition-duration: 300ms;
  &.is-visible {
    --tw-translate-y: calc(var(--spacing) * 0);
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
}
.react-scan-components-tree:has(.resize-v-line:hover, .resize-v-line:active)
  .tree {
  overflow: hidden;
}
.react-scan-expandable {
  display: grid;
  grid-template-rows: 0fr;
  overflow: hidden;
  transition-property: all;
  transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
  transition-duration: var(--tw-duration, var(--default-transition-duration));
  --tw-duration: 75ms;
  transition-duration: 75ms;
  transition-timing-function: ease-out;
  > * {
    min-height: 0;
  }
  &.react-scan-expanded {
    grid-template-rows: 1fr;
    transition-duration: 100ms;
  }
}
@property --tw-translate-x {
  syntax: "*";
  inherits: false;
  initial-value: 0;
}
@property --tw-translate-y {
  syntax: "*";
  inherits: false;
  initial-value: 0;
}
@property --tw-translate-z {
  syntax: "*";
  inherits: false;
  initial-value: 0;
}
@property --tw-scale-x {
  syntax: "*";
  inherits: false;
  initial-value: 1;
}
@property --tw-scale-y {
  syntax: "*";
  inherits: false;
  initial-value: 1;
}
@property --tw-scale-z {
  syntax: "*";
  inherits: false;
  initial-value: 1;
}
@property --tw-rotate-x {
  syntax: "*";
  inherits: false;
}
@property --tw-rotate-y {
  syntax: "*";
  inherits: false;
}
@property --tw-rotate-z {
  syntax: "*";
  inherits: false;
}
@property --tw-skew-x {
  syntax: "*";
  inherits: false;
}
@property --tw-skew-y {
  syntax: "*";
  inherits: false;
}
@property --tw-space-y-reverse {
  syntax: "*";
  inherits: false;
  initial-value: 0;
}
@property --tw-divide-y-reverse {
  syntax: "*";
  inherits: false;
  initial-value: 0;
}
@property --tw-border-style {
  syntax: "*";
  inherits: false;
  initial-value: solid;
}
@property --tw-leading {
  syntax: "*";
  inherits: false;
}
@property --tw-font-weight {
  syntax: "*";
  inherits: false;
}
@property --tw-tracking {
  syntax: "*";
  inherits: false;
}
@property --tw-shadow {
  syntax: "*";
  inherits: false;
  initial-value: 0 0 #0000;
}
@property --tw-shadow-color {
  syntax: "*";
  inherits: false;
}
@property --tw-shadow-alpha {
  syntax: "<percentage>";
  inherits: false;
  initial-value: 100%;
}
@property --tw-inset-shadow {
  syntax: "*";
  inherits: false;
  initial-value: 0 0 #0000;
}
@property --tw-inset-shadow-color {
  syntax: "*";
  inherits: false;
}
@property --tw-inset-shadow-alpha {
  syntax: "<percentage>";
  inherits: false;
  initial-value: 100%;
}
@property --tw-ring-color {
  syntax: "*";
  inherits: false;
}
@property --tw-ring-shadow {
  syntax: "*";
  inherits: false;
  initial-value: 0 0 #0000;
}
@property --tw-inset-ring-color {
  syntax: "*";
  inherits: false;
}
@property --tw-inset-ring-shadow {
  syntax: "*";
  inherits: false;
  initial-value: 0 0 #0000;
}
@property --tw-ring-inset {
  syntax: "*";
  inherits: false;
}
@property --tw-ring-offset-width {
  syntax: "<length>";
  inherits: false;
  initial-value: 0px;
}
@property --tw-ring-offset-color {
  syntax: "*";
  inherits: false;
  initial-value: #fff;
}
@property --tw-ring-offset-shadow {
  syntax: "*";
  inherits: false;
  initial-value: 0 0 #0000;
}
@property --tw-outline-style {
  syntax: "*";
  inherits: false;
  initial-value: solid;
}
@property --tw-blur {
  syntax: "*";
  inherits: false;
}
@property --tw-brightness {
  syntax: "*";
  inherits: false;
}
@property --tw-contrast {
  syntax: "*";
  inherits: false;
}
@property --tw-grayscale {
  syntax: "*";
  inherits: false;
}
@property --tw-hue-rotate {
  syntax: "*";
  inherits: false;
}
@property --tw-invert {
  syntax: "*";
  inherits: false;
}
@property --tw-opacity {
  syntax: "*";
  inherits: false;
}
@property --tw-saturate {
  syntax: "*";
  inherits: false;
}
@property --tw-sepia {
  syntax: "*";
  inherits: false;
}
@property --tw-drop-shadow {
  syntax: "*";
  inherits: false;
}
@property --tw-drop-shadow-color {
  syntax: "*";
  inherits: false;
}
@property --tw-drop-shadow-alpha {
  syntax: "<percentage>";
  inherits: false;
  initial-value: 100%;
}
@property --tw-drop-shadow-size {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-blur {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-brightness {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-contrast {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-grayscale {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-hue-rotate {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-invert {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-opacity {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-saturate {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-sepia {
  syntax: "*";
  inherits: false;
}
@property --tw-duration {
  syntax: "*";
  inherits: false;
}
@property --tw-ease {
  syntax: "*";
  inherits: false;
}
@property --tw-content {
  syntax: "*";
  initial-value: "";
  inherits: false;
}
@property --tw-ordinal {
  syntax: "*";
  inherits: false;
}
@property --tw-slashed-zero {
  syntax: "*";
  inherits: false;
}
@property --tw-numeric-figure {
  syntax: "*";
  inherits: false;
}
@property --tw-numeric-spacing {
  syntax: "*";
  inherits: false;
}
@property --tw-numeric-fraction {
  syntax: "*";
  inherits: false;
}
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes fadeOut {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
@keyframes countFlash {
  0% {
    background-color: rgba(168, 85, 247, 0.3);
    transform: scale(1.05);
  }
  100% {
    background-color: rgba(168, 85, 247, 0.1);
    transform: scale(1);
  }
}
@keyframes countFlashShake {
  0% {
    transform: translateX(0);
  }
  25% {
    transform: translateX(-5px);
  }
  50% {
    transform: translateX(5px) scale(1.1);
  }
  75% {
    transform: translateX(-5px);
  }
  100% {
    transform: translateX(0);
  }
}
@layer properties {
  @supports ((-webkit-hyphens: none) and (not (margin-trim: inline))) or ((-moz-orient: inline) and (not (color:rgb(from red r g b)))) {
    *, ::before, ::after, ::backdrop {
      --tw-translate-x: 0;
      --tw-translate-y: 0;
      --tw-translate-z: 0;
      --tw-scale-x: 1;
      --tw-scale-y: 1;
      --tw-scale-z: 1;
      --tw-rotate-x: initial;
      --tw-rotate-y: initial;
      --tw-rotate-z: initial;
      --tw-skew-x: initial;
      --tw-skew-y: initial;
      --tw-space-y-reverse: 0;
      --tw-divide-y-reverse: 0;
      --tw-border-style: solid;
      --tw-leading: initial;
      --tw-font-weight: initial;
      --tw-tracking: initial;
      --tw-shadow: 0 0 #0000;
      --tw-shadow-color: initial;
      --tw-shadow-alpha: 100%;
      --tw-inset-shadow: 0 0 #0000;
      --tw-inset-shadow-color: initial;
      --tw-inset-shadow-alpha: 100%;
      --tw-ring-color: initial;
      --tw-ring-shadow: 0 0 #0000;
      --tw-inset-ring-color: initial;
      --tw-inset-ring-shadow: 0 0 #0000;
      --tw-ring-inset: initial;
      --tw-ring-offset-width: 0px;
      --tw-ring-offset-color: #fff;
      --tw-ring-offset-shadow: 0 0 #0000;
      --tw-outline-style: solid;
      --tw-blur: initial;
      --tw-brightness: initial;
      --tw-contrast: initial;
      --tw-grayscale: initial;
      --tw-hue-rotate: initial;
      --tw-invert: initial;
      --tw-opacity: initial;
      --tw-saturate: initial;
      --tw-sepia: initial;
      --tw-drop-shadow: initial;
      --tw-drop-shadow-color: initial;
      --tw-drop-shadow-alpha: 100%;
      --tw-drop-shadow-size: initial;
      --tw-backdrop-blur: initial;
      --tw-backdrop-brightness: initial;
      --tw-backdrop-contrast: initial;
      --tw-backdrop-grayscale: initial;
      --tw-backdrop-hue-rotate: initial;
      --tw-backdrop-invert: initial;
      --tw-backdrop-opacity: initial;
      --tw-backdrop-saturate: initial;
      --tw-backdrop-sepia: initial;
      --tw-duration: initial;
      --tw-ease: initial;
      --tw-content: "";
      --tw-ordinal: initial;
      --tw-slashed-zero: initial;
      --tw-numeric-figure: initial;
      --tw-numeric-spacing: initial;
      --tw-numeric-fraction: initial;
    }
  }
}
`,cZ=async e=>{try{let t=await aA(e),r=`${t.htmlPreview}${t.stackString}`;if(!r.trim())return!1;return await navigator.clipboard.writeText(r),!0}catch{return!1}},cQ=tE(()=>lH("absolute inset-0 flex items-center gap-x-2","translate-y-0","transition-transform duration-300",lZ.value&&"-translate-y-[200%]")),c0=()=>{let e=e7(null),t=e7(null),[r,n]=e5(null);tJ(()=>{let e=uI.inspectState.value;"focused"===e.kind&&n(e.fiber)}),tJ(()=>{let r=st.value;tu(()=>{var n,i;let o;if("focused"!==uI.inspectState.value.kind||!e.current||!t.current)return;let{totalUpdates:a,currentIndex:l,updates:s,isVisible:c,windowOffset:d}=r,u=Math.max(0,a-1),p=c?`#${d+l} Re-render`:u>0?`\xd7${u}`:"";if(u>0&&l>=0&&l<s.length){let e=null==(i=null==(n=s[l])?void 0:n.fiberInfo)?void 0:i.selfTime;o=e>0?e<.1-Number.EPSILON?"< 0.1ms":`${Number(e.toFixed(1))}ms`:void 0}e.current.dataset.text=p?` • ${p}`:"",t.current.dataset.text=o?` • ${o}`:""})});let i=e6(()=>{if(!r)return null;let{name:e,wrappers:t,wrapperTypes:n}=lJ(r),i=t.length?`${t.join("(")}(${e})${")".repeat(t.length)}`:null!=e?e:"",o=n[0];return rp("span",{title:i,className:"flex items-center gap-x-1",children:[null!=e?e:"Unknown",rp("span",{title:null==o?void 0:o.title,className:"flex items-center gap-x-1 text-[10px] text-purple-400",children:!!o&&rp(eC,{children:[rp("span",{className:lH("rounded py-[1px] px-1","truncate",o.compiler&&"bg-purple-800 text-neutral-400",!o.compiler&&"bg-neutral-700 text-neutral-300","memo"===o.type&&"bg-[#5f3f9a] text-white"),children:o.type},o.type),o.compiler&&rp("span",{className:"text-yellow-300",children:"✨"})]})}),n.length>1&&rp("span",{className:"text-[10px] text-neutral-400",children:["×",n.length-1]})]})},[r]);return rp("div",{className:cQ,children:[i,rp("div",{className:"flex items-center gap-x-2 mr-auto text-xs text-[#888]",children:[rp("span",{ref:e,className:"with-data-text cursor-pointer !overflow-visible",title:"Click to toggle between rerenders and total renders"}),rp("span",{ref:t,className:"with-data-text !overflow-visible"})]})]})},c1=()=>{let e=((e,t=150)=>{let[r,n]=e5(e);return e4(()=>{if(e===r)return;let i=setTimeout(()=>n(e),e?150:t);return()=>clearTimeout(i)},[e,150,t]),r})("focused"===uI.inspectState.value.kind,0),t=tW(!1),r=()=>{l5.value={view:"none"},uI.inspectState.value={kind:"inspect-off"}},n=async()=>{let e=uI.inspectState.value;"focused"!==e.kind||!e.focusedDomElement||await cZ(e.focusedDomElement)&&(t.value=!0,setTimeout(()=>{t.value=!1,r()},600))},i=e7(n);if(i.current=n,e4(()=>{let e=e=>{var t;let r,n=uI.inspectState.value;!("focused"!==n.kind||!n.focusedDomElement||"u">typeof window&&window.__REACT_GRAB__)&&(e.metaKey||e.ctrlKey)&&!e.shiftKey&&!e.altKey&&("c"===e.key||"KeyC"===e.code)&&((()=>{let e=document.activeElement;if(!e)return!1;let t=e.tagName;return!!("INPUT"===t||"TEXTAREA"===t||"SELECT"===t||e instanceof HTMLElement&&e.isContentEditable)})()||(r=null==(t=window.getSelection)?void 0:t.call(window))&&r.toString().length>0||(e.preventDefault(),e.stopImmediatePropagation(),i.current()))};return document.addEventListener("keydown",e,{capture:!0}),()=>{document.removeEventListener("keydown",e,{capture:!0})}},[]),"notifications"===l5.value.view)return;let o="focused"===uI.inspectState.value.kind,a=(()=>{if("u"<typeof navigator)return!1;let e=navigator.platform||"";return e?/Mac|iPhone|iPad|iPod/i.test(e):/Mac|iPhone|iPad|iPod/i.test(navigator.userAgent)})()?"⌘C":"Ctrl+C";return rp("div",{className:"react-scan-header",children:[rp("div",{className:"relative flex-1 h-full",children:rp("div",{className:lH("react-scan-header-item is-visible",!e&&"!duration-0"),children:rp(c0,{})})}),o&&rp("button",{type:"button",title:`Copy element (${a})`,className:"react-scan-close-button",onClick:n,children:rp(aD,{name:t.value?"icon-check":"icon-copy",className:lH(t.value&&"text-green-500")})}),rp("button",{type:"button",title:"Close",className:"react-scan-close-button",onClick:r,children:rp(aD,{name:"icon-close"})})]})},c2=({className:e,...t})=>rp("div",{className:lH("react-scan-toggle",e),children:[rp("input",{type:"checkbox",...t}),rp("div",{})]}),c5=({fps:e})=>rp("div",{className:lH("flex items-center gap-x-1 px-2 w-full","h-6","rounded-md","font-mono leading-none","bg-[#141414]","ring-1 ring-white/[0.08]"),children:[rp("div",{style:{color:e<30?"#EF4444":e<50?"#F59E0B":"rgb(214,132,245)"},className:"text-sm font-semibold tracking-wide transition-colors ease-in-out w-full flex justify-center items-center",children:e}),rp("span",{className:"text-white/30 text-[11px] font-medium tracking-wide ml-auto min-w-fit",children:"FPS"})]}),c4=()=>{let[e,t]=e5(null);return e4(()=>{let e=setInterval(()=>{t(ch())},200);return()=>clearInterval(e)},[]),rp("div",{className:lH("flex items-center justify-end gap-x-2 px-1 ml-1 w-[72px]","whitespace-nowrap text-sm text-white"),children:null===e?rp(eC,{children:"️"}):rp(c5,{fps:e})})},c3=e=>{},c7=class e extends Array{constructor(e=25){super(),aR(this,"capacity",e)}push(...e){let t=super.push(...e);for(;this.length>this.capacity;)this.shift();return t}static fromArray(t,r){let n=new e(r);return n.push(...t),n}},c6=new class{constructor(e){aR(this,"subscribers",new Set),aR(this,"currentValue"),this.currentValue=e}subscribe(e){return this.subscribers.add(e),e(this.currentValue),()=>{this.subscribers.delete(e)}}setState(e){this.currentValue=e,this.subscribers.forEach(t=>t(e))}getCurrentState(){return this.currentValue}}(new c7(150)),c8=new class{constructor(){aR(this,"channels",{})}publish(e,t,r=!0){let n=this.channels[t];if(!n){if(!r)return;this.channels[t]={callbacks:new c7(50),state:new c7(50)},this.channels[t].state.push(e);return}n.state.push(e),n.callbacks.forEach(t=>t(e))}getAvailableChannels(){return c7.fromArray(Object.keys(this.channels),50)}subscribe(e,t,r=!1){let n=()=>(r||this.channels[e].state.forEach(e=>{t(e)}),()=>{let r=this.channels[e].callbacks.filter(e=>e!==t);this.channels[e].callbacks=c7.fromArray(r,50)}),i=this.channels[e];return i?i.callbacks.push(t):(this.channels[e]={callbacks:new c7(50),state:new c7(50)},this.channels[e].callbacks.push(t)),n()}updateChannelState(e,t,r=!0){let n=this.channels[e];if(!n){if(!r)return;let n=new c7(50),i={callbacks:new c7(50),state:n};this.channels[e]=i,i.state=t(n);return}n.state=t(n.state)}getChannelState(e){var t;return null!=(t=this.channels[e].state)?t:new c7(50)}},c9={skipProviders:!0,skipHocs:!0,skipContainers:!0,skipMinified:!0,skipUtilities:!0,skipBoundaries:!0},de=[/Provider$/,/^Provider$/,/^Context$/],dt=[/^with[A-Z]/,/^forward(?:Ref)?$/i,/^Forward(?:Ref)?\(/],dr=[/^(?:App)?Container$/,/^Root$/,/^ReactDev/],dn=[/^Fragment$/,/^Suspense$/,/^ErrorBoundary$/,/^Portal$/,/^Consumer$/,/^Layout$/,/^Router/,/^Hydration/],di=[/^Boundary$/,/Boundary$/,/^Provider$/,/Provider$/],da=(e,t=c9)=>{let r=[];return t.skipProviders&&r.push(...de),t.skipHocs&&r.push(...dt),t.skipContainers&&r.push(...dr),t.skipUtilities&&r.push(...dn),t.skipBoundaries&&r.push(...di),!r.some(t=>t.test(e))},dl=[/^[a-z]$/,/^[a-z][0-9]$/,/^_+$/,/^[A-Za-z][_$]$/,/^[a-z]{1,2}$/],ds=e=>{var t,r;for(let t=0;t<dl.length;t++)if(dl[t].test(e))return!0;let n=!/[aeiou]/i.test(e),i=(null!=(r=null==(t=e.match(/\d/g))?void 0:t.length)?r:0)>e.length/2,o=/^[a-z]+$/.test(e),a=/[$_]{2,}/.test(e);return Number(n)+Number(i)+Number(o)+Number(a)>=2},dc=e=>{let t=G(e);return t?t.replace(/^(?:Memo|Forward(?:Ref)?|With.*?)\((?<inner>.*?)\)$/,"$<inner>"):""},dd="never-hidden",du=null,dp=new c7(25),dm=(e,t)=>{let r=null,n=t=>{switch(e){case"pointer":if("start"===t.phase)return"pointerup";if(t.target instanceof HTMLInputElement||t.target instanceof HTMLSelectElement)return"change";return"click";case"keyboard":if("start"===t.phase)return"keydown";return"change"}},i={current:{kind:"uninitialized-stage",interactionUUID:aP(),stageStart:Date.now(),interactionType:e}},o=r=>{var o,l;if(r.composedPath().some(e=>e instanceof Element&&"react-scan-toolbar-root"===e.id)||(Date.now()-i.current.stageStart>2e3&&(i.current={kind:"uninitialized-stage",interactionUUID:aP(),stageStart:Date.now(),interactionType:e}),"uninitialized-stage"!==i.current.kind))return;let s=performance.now();null==(o=null==t?void 0:t.onStart)||o.call(t,i.current.interactionUUID);let c=(e=>{var t;let r=sO(e);if(!r)return;let n=r?G(null==r?void 0:r.type):"N/A";if(n||(n=null!=(t=((e,t=()=>!0)=>{let r=e;for(;r;){let e=G(r.type);if(e&&t(e))return e;r=r.return}return null})(r,e=>e.length>2))?t:"N/A"),n)return{componentPath:((e,t=c9)=>{if(!e||!G(e.type))return[];let r=[],n=e;for(;n.return;){let e=dc(n.type);e&&!ds(e)&&da(e,t)&&e.toLowerCase()!==e&&r.push(e),n=n.return}let i=Array(r.length);for(let e=0;e<r.length;e++)i[e]=r[r.length-e-1];return i})(r),childrenTree:{},componentName:n,elementFiber:r}})(r.target);if(!c){null==(l=null==t?void 0:t.onError)||l.call(t,i.current.interactionUUID);return}let d={},u=dg(d);i.current={...i.current,interactionType:e,blockingTimeStart:Date.now(),childrenTree:c.childrenTree,componentName:c.componentName,componentPath:c.componentPath,fiberRenders:d,kind:"interaction-start",interactionStartDetail:s,stopListeningForRenders:u};let p=n({phase:"end",target:r.target});document.addEventListener(p,a,{once:!0}),requestAnimationFrame(()=>{document.removeEventListener(p,a)})};document.addEventListener(n({phase:"start"}),o,{capture:!0});let a=(n,o,a)=>{var l;if("interaction-start"!==i.current.kind&&o===r){if("pointer"===e&&n.target instanceof HTMLSelectElement){i.current={kind:"uninitialized-stage",interactionUUID:aP(),stageStart:Date.now(),interactionType:e};return}null==(l=null==t?void 0:t.onError)||l.call(t,i.current.interactionUUID),i.current={kind:"uninitialized-stage",interactionUUID:aP(),stageStart:Date.now(),interactionType:e},c3("pointer -> click");return}r=o,(({onMicroTask:e,onRAF:t,onTimeout:r,abort:n})=>{queueMicrotask(()=>{(null==n?void 0:n())===!0||e()&&requestAnimationFrame(()=>{(null==n?void 0:n())===!0||t()&&setTimeout(()=>{(null==n?void 0:n())!==!0&&r()},0)})})})({abort:a,onMicroTask:()=>"uninitialized-stage"!==i.current.kind&&(i.current={...i.current,kind:"js-end-stage",jsEndDetail:performance.now()},!0),onRAF:()=>{var r;return"js-end-stage"!==i.current.kind&&"raf-stage"!==i.current.kind?(null==(r=null==t?void 0:t.onError)||r.call(t,i.current.interactionUUID),c3("bad transition to raf"),i.current={kind:"uninitialized-stage",interactionUUID:aP(),stageStart:Date.now(),interactionType:e},!1):(i.current={...i.current,kind:"raf-stage",rafStart:performance.now()},!0)},onTimeout:()=>{var r;if("raf-stage"!==i.current.kind){null==(r=null==t?void 0:t.onError)||r.call(t,i.current.interactionUUID),i.current={kind:"uninitialized-stage",interactionUUID:aP(),stageStart:Date.now(),interactionType:e},c3("raf->timeout");return}let n=Date.now(),o=Object.freeze({...i.current,kind:"timeout-stage",blockingTimeEnd:n,commitEnd:performance.now()});i.current={kind:"uninitialized-stage",interactionUUID:aP(),stageStart:n,interactionType:e};let a=!1,l=e=>{var r;a=!0;let n={detailedTiming:o,latency:"auto-complete-race"===e.kind?e.detailedTiming.commitEnd-e.detailedTiming.interactionStartDetail:e.entry.latency,completedAt:Date.now(),flushNeeded:!0};null==(r=null==t?void 0:t.onComplete)||r.call(t,o.interactionUUID,n,e);let i=dp.filter(e=>e.interactionUUID!==o.interactionUUID);return dp=c7.fromArray(i,25),n},s={completeInteraction:l,endDateTime:Date.now(),startDateTime:o.blockingTimeStart,type:e,interactionUUID:o.interactionUUID};if(dp.push(s),df())setTimeout(()=>{if(a)return;l({kind:"auto-complete-race",detailedTiming:o,interactionUUID:o.interactionUUID});let e=dp.filter(e=>e.interactionUUID!==o.interactionUUID);dp=c7.fromArray(e,25)},1e3);else{let e=dp.filter(e=>e.interactionUUID!==o.interactionUUID);dp=c7.fromArray(e,25),l({kind:"auto-complete-race",detailedTiming:o,interactionUUID:o.interactionUUID})}}})},l=e=>{let t=aP();a(e,t,()=>t!==r)};return"keyboard"===e&&document.addEventListener("keypress",l),()=>{document.removeEventListener(n({phase:"start"}),o,{capture:!0}),document.removeEventListener("keypress",l)}},dh=e=>{var t;return null==(t=W(e,e=>{if(O(e))return!0}))?void 0:t.stateNode},df=()=>"PerformanceEventTiming"in globalThis,dg=e=>{let t=t=>{var r,n,i,o,a,l,s;let c=G(t.type);if(!c)return;let d=e[c];if(!d){let n=new Set,i=t.return&&sD(t.return),o=i&&G(i[0]);o&&n.add(o);let{selfTime:a,totalTime:l}=B(t),s=cl(t),d={current:[],changes:new Set,changesCounts:new Map},u={fiberProps:s.fiberProps||d,fiberState:s.fiberState||d,fiberContext:s.fiberContext||d};e[c]={renderCount:1,hasMemoCache:V(t),wasFiberRenderMount:db(t),parents:n,selfTime:a,totalTime:l,nodeInfo:[{element:dh(t),name:null!=(r=G(t.type))?r:"Unknown",selfTime:B(t).selfTime}],changes:u};return}if(null==(i=null==(n=sD(t))?void 0:n[0])?void 0:i.type){let e=t.return&&sD(t.return),r=e&&G(e[0]);r&&d.parents.add(r)}let{selfTime:u,totalTime:p}=B(t),m=cl(t),h={current:[],changes:new Set,changesCounts:new Map};d.wasFiberRenderMount=d.wasFiberRenderMount||db(t),d.hasMemoCache=d.hasMemoCache||V(t),d.changes={fiberProps:dv((null==(o=d.changes)?void 0:o.fiberProps)||h,m.fiberProps||h),fiberState:dv((null==(a=d.changes)?void 0:a.fiberState)||h,m.fiberState||h),fiberContext:dv((null==(l=d.changes)?void 0:l.fiberContext)||h,m.fiberContext||h)},d.renderCount+=1,d.selfTime+=u,d.totalTime+=p,d.nodeInfo.push({element:dh(t),name:null!=(s=G(t.type))?s:"Unknown",selfTime:B(t).selfTime})};return uI.interactionListeningForRenders=t,()=>{uI.interactionListeningForRenders===t&&(uI.interactionListeningForRenders=null)}},dv=(e,t)=>{let r={current:[...e.current],changes:new Set,changesCounts:new Map};for(let e of t.current)r.current.some(t=>t.name===e.name)||r.current.push(e);for(let n of t.changes)if("string"==typeof n||"number"==typeof n){r.changes.add(n);let i=e.changesCounts.get(n)||0,o=t.changesCounts.get(n)||0;r.changesCounts.set(n,i+o)}return r},db=e=>{if(!e.alternate)return!0;let t=e.alternate,r=t&&null!=t.memoizedState&&null!=t.memoizedState.element&&!0!==t.memoizedState.isDehydrated,n=null!=e.memoizedState&&null!=e.memoizedState.element&&!0!==e.memoizedState.isDehydrated;return!r&&n},dw=e=>{let t,r=new Set,n=(e,n)=>{let i="function"==typeof e?e(t):e;if(!Object.is(i,t)){let e=t;t=(null!=n?n:"object"!=typeof i||null===i)?i:Object.assign({},t,i),r.forEach(r=>r(t,e))}},i=()=>t,o={setState:n,getState:i,getInitialState:()=>a,subscribe:(e,n)=>{let i,o;n?(i=e,o=n):o=e;let a=i?i(t):void 0,l=(e,t)=>{if(i){let r=i(e),n=i(t);Object.is(a,r)||(a=r,o(r,n))}else o(e,t)};return r.add(l),()=>r.delete(l)}},a=t=e(n,i,o);return o},dy=e=>e?dw(e):dw,dx=null;dy()(e=>({state:{events:[]},actions:{addEvent:t=>{e(e=>({state:{events:[...e.state.events,t]}}))},clear:()=>{e({state:{events:[]}})}}}));var dk=dy()((e,t)=>{let r=new Set;return{state:{events:new c7(200)},actions:{addEvent:n=>{r.forEach(e=>e(n));let i=[...t().state.events,n],o=new Set;i.forEach(e=>{if("interaction"!==e.kind){let t;(t=i.find(t=>{if("long-render"!==t.kind&&t.id!==e.id&&(e.data.startAt<=t.data.startAt&&e.data.endAt<=t.data.endAt&&e.data.endAt>=t.data.startAt||t.data.startAt<=e.data.startAt&&t.data.endAt>=e.data.startAt||e.data.startAt<=t.data.startAt&&e.data.endAt>=t.data.endAt))return!0}))&&(()=>{o.add(e.id)})()}});let a=i.filter(e=>!o.has(e.id));e(()=>({state:{events:c7.fromArray(a,200)}}))},addListener:e=>(r.add(e),()=>{r.delete(e)}),clear:()=>{e({state:{events:new c7(200)}})}}}}),d_=null,dN=null,dS=null,dE=[],dC=e=>{var t;let r=e.filter(e=>e.length>2);return 0===r.length?null!=(t=e.at(-1))?t:"Unknown":r.at(-1)},dT=e=>{switch(e.kind){case"interaction":{let{renderTime:t,otherJSTime:r,framePreparation:n,frameConstruction:i,frameDraw:o}=e;return t+r+n+i+(null!=o?o:0)}case"dropped-frames":return e.otherTime+e.renderTime}},dA=e=>{let t=dT(e.timing);switch(e.kind){case"interaction":if(t<200)return"low";if(t<500)return"needs-improvement";return"high";case"dropped-frames":if(t<50)return"low";if(t<150)return"needs-improvement";return"high"}},dz=eU(null),dM=({size:e=24,className:t})=>rp("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:e,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:lH(["lucide lucide-chevron-right",t]),children:rp("path",{d:"m9 18 6-6-6-6"})}),dR=({className:e="",size:t=24,events:r=[]})=>{let n=r.includes(!0),i=r.filter(e=>e).length,o=n?Math.max(.6*t,14):Math.max(.4*t,6);return rp("div",{className:"relative",children:[rp("svg",{xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:`lucide lucide-bell ${e}`,children:[rp("path",{d:"M10.268 21a2 2 0 0 0 3.464 0"}),rp("path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"})]}),r.length>0&&i>0&&uW.options.value.showNotificationCount&&rp("div",{className:lH(["absolute",n?"-top-2.5 -right-2.5":"-top-1 -right-1","rounded-full","flex items-center justify-center","text-[8px] font-medium text-white","aspect-square",n?"bg-red-500/90":"bg-purple-500/90"]),style:{width:`${o}px`,height:`${o}px`,padding:n?"0.5px":"0"},children:n&&(i>99?">99":i)})]})},d$=({className:e="",size:t=24})=>rp("svg",{xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:e,children:[rp("path",{d:"M18 6 6 18"}),rp("path",{d:"m6 6 12 12"})]}),dj=({className:e="",size:t=24})=>rp("svg",{xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:e,children:[rp("path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"}),rp("path",{d:"M16 9a5 5 0 0 1 0 6"}),rp("path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728"})]}),dF=({className:e="",size:t=24})=>rp("svg",{xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:e,children:[rp("path",{d:"M16 9a5 5 0 0 1 .95 2.293"}),rp("path",{d:"M19.364 5.636a9 9 0 0 1 1.889 9.96"}),rp("path",{d:"m2 2 20 20"}),rp("path",{d:"m7 7-.587.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298V11"}),rp("path",{d:"M9.828 4.172A.686.686 0 0 1 11 4.657v.686"})]}),dO=({size:e=24,className:t})=>rp("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:e,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:lH(["lucide lucide-arrow-left",t]),children:[rp("path",{d:"m12 19-7-7 7-7"}),rp("path",{d:"M19 12H5"})]}),dP=({className:e="",size:t=24})=>rp("svg",{xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:e,children:[rp("path",{d:"M14 4.1 12 6"}),rp("path",{d:"m5.1 8-2.9-.8"}),rp("path",{d:"m6 12-1.9 2"}),rp("path",{d:"M7.2 2.2 8 5.1"}),rp("path",{d:"M9.037 9.69a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z"})]}),dL=({className:e="",size:t=24})=>rp("svg",{xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:e,children:[rp("path",{d:"M10 8h.01"}),rp("path",{d:"M12 12h.01"}),rp("path",{d:"M14 8h.01"}),rp("path",{d:"M16 12h.01"}),rp("path",{d:"M18 8h.01"}),rp("path",{d:"M6 8h.01"}),rp("path",{d:"M7 16h10"}),rp("path",{d:"M8 12h.01"}),rp("rect",{width:"20",height:"16",x:"2",y:"4",rx:"2"})]}),dD=({className:e="",size:t=24})=>rp("svg",{xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:e,style:{transform:"rotate(180deg)"},children:[rp("circle",{cx:"12",cy:"12",r:"10"}),rp("path",{d:"m4.9 4.9 14.2 14.2"})]}),dI=({className:e="",size:t=24})=>rp("svg",{xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:e,children:[rp("polyline",{points:"22 17 13.5 8.5 8.5 13.5 2 7"}),rp("polyline",{points:"16 17 22 17 22 11"})]}),dW=({children:e,triggerContent:t,wrapperProps:r})=>{var n;let[i,o]=e5("closed"),[a,l]=e5(null),[s,c]=e5({width:window.innerWidth,height:window.innerHeight}),d=e7(null),u=e7(null),p=e9(uR),m=e7(!1);e4(()=>{let e=()=>{c({width:window.innerWidth,height:window.innerHeight}),h()};return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]);let h=()=>{if(d.current&&p){let e=d.current.getBoundingClientRect(),t=p.getBoundingClientRect(),r=e.left+e.width/2,n=e.top;l(new DOMRect(r-t.left,n-t.top,e.width,e.height))}};e4(()=>{h()},[d.current]),e4(()=>{if("opening"===i){let e=setTimeout(()=>o("open"),120);return()=>clearTimeout(e)}if("closing"===i){let e=setTimeout(()=>o("closed"),120);return()=>clearTimeout(e)}},[i]),e4(()=>{let e=setInterval(()=>{m.current||"closed"===i||o("closing")},1e3);return()=>clearInterval(e)},[i]);let f=(()=>{var e;if(!a||!p)return{top:0,left:0};let t=p.getBoundingClientRect(),r=(null==(e=u.current)?void 0:e.offsetHeight)||40,n=a.x+t.left,i=a.y+t.top,o=n,l=i-4;return o-87.5<5?o=92.5:o+87.5>s.width-5&&(o=s.width-5-87.5),l-r<5&&(l=i+a.height+4),{top:l-t.top,left:o-t.left}})();return rp(eC,{children:[p&&a&&"closed"!==i&&((n=eS(re,{__v:rp("div",{ref:u,className:lH(["absolute z-100 bg-white text-black rounded-lg px-3 py-2 shadow-lg","transition-[opacity] duration-120 ease-out",'after:content-[""] after:absolute after:top-[100%]',"after:left-1/2 after:-translate-x-1/2","after:w-[10px] after:h-[6px]","after:border-l-[5px] after:border-l-transparent","after:border-r-[5px] after:border-r-transparent","after:border-t-[6px] after:border-t-white","pointer-events-none","opening"===i||"closing"===i?"opacity-0":"opacity-100"]),style:{top:f.top+"px",left:f.left+"px",transform:`translate(-50%, calc(-100% - 4px)) scale(${"open"===i?1:.97})`,minWidth:"175px",willChange:"opacity, transform"},children:e}),h:p})).containerInfo=p,n),rp("div",{ref:d,onMouseEnter:()=>{m.current=!0,h(),o("opening")},onMouseLeave:()=>{m.current=!1,h(),o("closing")},...r,children:t})]})},dU=({selectedEvent:e})=>{let{notificationState:t,setNotificationState:r,setRoute:n}=e9(dz);return rp("div",{className:lH(["flex w-full justify-between items-center px-3 py-2 text-xs"]),children:[rp("div",{className:lH(["bg-[#18181B] flex items-center gap-x-1 p-1 rounded-sm"]),children:[rp("button",{onClick:()=>{n({route:"render-visualization",routeMessage:null})},className:lH(["w-1/2 flex items-center justify-center whitespace-nowrap py-[5px] px-1 gap-x-1","render-visualization"===t.route||"render-explanation"===t.route?"text-white bg-[#7521c8] rounded-sm":"text-[#6E6E77] bg-[#18181B] rounded-sm"]),children:"Ranked"}),rp("button",{onClick:()=>{n({route:"other-visualization",routeMessage:null})},className:lH(["w-1/2 flex items-center justify-center whitespace-nowrap py-[5px] px-1 gap-x-1","other-visualization"===t.route?"text-white bg-[#7521c8] rounded-sm":"text-[#6E6E77] bg-[#18181B] rounded-sm"]),children:"Overview"}),rp("button",{onClick:()=>{n({route:"optimize",routeMessage:null})},className:lH(["w-1/2 flex items-center justify-center whitespace-nowrap py-[5px] px-1 gap-x-1","optimize"===t.route?"text-white bg-[#7521c8] rounded-sm":"text-[#6E6E77] bg-[#18181B] rounded-sm"]),children:rp("span",{children:"Prompts"})})]}),rp(dW,{triggerContent:rp("button",{onClick:()=>{r(e=>{e.audioNotificationsOptions.enabled&&"closed"!==e.audioNotificationsOptions.audioContext.state&&e.audioNotificationsOptions.audioContext.close();let t=e.audioNotificationsOptions.enabled;localStorage.setItem("react-scan-notifications-audio",String(!t));let r=new AudioContext;return e.audioNotificationsOptions.enabled||aL(r),t&&r.close(),{...e,audioNotificationsOptions:t?{audioContext:null,enabled:!1}:{audioContext:r,enabled:!0}}})},className:"ml-auto",children:rp("div",{className:lH(["flex gap-x-2 justify-center items-center text-[#6E6E77]"]),children:[rp("span",{children:"Alerts"}),t.audioNotificationsOptions.enabled?rp(dj,{size:16,className:"text-[#6E6E77]"}):rp(dF,{size:16,className:"text-[#6E6E77]"})]})}),children:rp(eC,{children:"Play a chime when a slowdown is recorded"})})]})},dH=e=>{let t="";return e.toSorted((e,t)=>t.totalTime-e.totalTime).slice(0,30).filter(e=>e.totalTime>5).forEach(e=>{let r="";r+="Component Name:",r+=e.name,r+="\n",r+=`Rendered: ${e.count} times
`,r+=`Sum of self times for ${e.name} is ${e.totalTime.toFixed(0)}ms
`,e.changes.props.length>0&&(r+=`Changed props for all ${e.name} instances ("name:count" pairs)
`,e.changes.props.forEach(e=>{r+=`${e.name}:${e.count}x
`})),e.changes.state.length>0&&(r+=`Changed state for all ${e.name} instances ("hook index:count" pairs)
`,e.changes.state.forEach(e=>{r+=`${e.index}:${e.count}x
`})),e.changes.context.length>0&&(r+=`Changed context for all ${e.name} instances ("context display name (if exists):count" pairs)
`,e.changes.context.forEach(e=>{r+=`${e.name}:${e.count}x
`})),t+=r,t+="\n"}),t},dB=(e,t)=>(()=>{switch(e){case"data":switch(t.kind){case"dropped-frames":return(({renderTime:e,otherTime:t,formattedReactData:r})=>`I will provide you with a set of high level, and low level performance data about a large frame drop in a React App:
### High level
- react component render time: ${e.toFixed(0)}ms
- how long it took to run everything else (other JavaScript, hooks like useEffect, style recalculations, layerization, paint & commit and everything else the browser might do to draw a new frame after javascript mutates the DOM): ${t}ms

### Low level
We also have lower level information about react components, such as their render time, and which props/state/context changed when they re-rendered.
${r}`)({formattedReactData:dH(t.groupedFiberRenders),renderTime:t.groupedFiberRenders.reduce((e,t)=>e+t.totalTime,0),otherTime:t.timing.otherTime});case"interaction":return(({renderTime:e,eHandlerTimeExcludingRenders:t,toRafTime:r,commitTime:n,framePresentTime:i,formattedReactData:o})=>`I will provide you with a set of high level, and low level performance data about an interaction in a React App:
### High level
- react component render time: ${e.toFixed(0)}ms
- how long it took to run javascript event handlers (EXCLUDING REACT RENDERS): ${t.toFixed(0)}ms
- how long it took from the last event handler time, to the last request animation frame: ${r.toFixed(0)}ms
	- things like prepaint, style recalculations, layerization, async web API's like observers may occur during this time
- how long it took from the last request animation frame to when the dom was committed: ${n.toFixed(0)}ms
	- during this period you will see paint, commit, potential style recalcs, and other misc browser activity. Frequently high times here imply css that makes the browser do a lot of work, or mutating expensive dom properties during the event handler stage. This can be many things, but it narrows the problem scope significantly when this is high
${null===i?"":`- how long it took from dom commit for the frame to be presented: ${i.toFixed(0)}ms. This is when information about how to paint the next frame is sent to the compositor threads, and when the GPU does work. If this is high, look for issues that may be a bottleneck for operations occurring during this time`}

### Low level
We also have lower level information about react components, such as their render time, and which props/state/context changed when they re-rendered.
${o}`)({commitTime:t.timing.frameConstruction,eHandlerTimeExcludingRenders:t.timing.otherJSTime,formattedReactData:dH(t.groupedFiberRenders),framePresentTime:t.timing.frameDraw,renderTime:t.groupedFiberRenders.reduce((e,t)=>e+t.totalTime,0),toRafTime:t.timing.framePreparation})}case"explanation":switch(t.kind){case"dropped-frames":return(({renderTime:e,otherTime:t,formattedReactData:r})=>`Your goal will be to help me find the source of a performance problem in a React App. I collected a large dataset about this specific performance problem.

We have the high level time of how much react spent rendering, and what else the browser spent time on during this slowdown

- react component render time: ${e.toFixed(0)}ms
- other time (other JavaScript, hooks like useEffect, style recalculations, layerization, paint & commit and everything else the browser might do to draw a new frame after javascript mutates the DOM): ${t}ms


We also have lower level information about react components, such as their render time, and which props/state/context changed when they re-rendered.

${r}

You may notice components have many renders, but much fewer props/state/context changes. This normally implies most of the components could have been memoized to avoid computation

It's also important to remember if a component had no props/state/context change, and it was memoized, it would not render. So a flow we can go through is:
- find the most expensive components
- see what's causing them to render
- determine how you can make those state/props/context not change for a large set of the renders
- once there are no more changes left, you can memoize the component so it no longer unnecessarily re-renders. 


An important thing to note is that if you see a lot of react renders (some components with very high render counts), but other time is much higher than render time, it is possible that the components with lots of renders run hooks like useEffect/useLayoutEffect, which run outside of what we profile (just react render time).

It's also good to note that react profiles hook times in development, and if many hooks are called (lets say 5,000 components all called a useEffect), it will have to profile every single one, and this can add significant overhead when thousands of effects ran.

If it's not possible to explain the root problem from this data, please ask me for more data explicitly, and what we would need to know to find the source of the performance problem.
`)({formattedReactData:dH(t.groupedFiberRenders),renderTime:t.groupedFiberRenders.reduce((e,t)=>e+t.totalTime,0),otherTime:t.timing.otherTime});case"interaction":return(({interactionType:e,name:t,time:r,renderTime:n,eHandlerTimeExcludingRenders:i,toRafTime:o,commitTime:a,framePresentTime:l,formattedReactData:s})=>`Your goal will be to help me find the source of a performance problem. I collected a large dataset about this specific performance problem.

There was a ${e} on a component named ${t}. This means, roughly, the component that handled the ${e} event was named ${t}.

We have a set of high level, and low level data about the performance issue.

The click took ${r.toFixed(0)}ms from interaction start, to when a new frame was presented to a user.

We also provide you with a breakdown of what the browser spent time on during the period of interaction start to frame presentation.

- react component render time: ${n.toFixed(0)}ms
- how long it took to run javascript event handlers (EXCLUDING REACT RENDERS): ${i.toFixed(0)}ms
- how long it took from the last event handler time, to the last request animation frame: ${o.toFixed(0)}ms
	- things like prepaint, style recalculations, layerization, async web API's like observers may occur during this time
- how long it took from the last request animation frame to when the dom was committed: ${a.toFixed(0)}ms
	- during this period you will see paint, commit, potential style recalcs, and other misc browser activity. Frequently high times here imply css that makes the browser do a lot of work, or mutating expensive dom properties during the event handler stage. This can be many things, but it narrows the problem scope significantly when this is high
${null===l?"":`- how long it took from dom commit for the frame to be presented: ${l.toFixed(0)}ms. This is when information about how to paint the next frame is sent to the compositor threads, and when the GPU does work. If this is high, look for issues that may be a bottleneck for operations occurring during this time`}

We also have lower level information about react components, such as their render time, and which props/state/context changed when they re-rendered.

${s}


You may notice components have many renders, but much fewer props/state/context changes. This normally implies most of the components could have been memoized to avoid computation

It's also important to remember if a component had no props/state/context change, and it was memoized, it would not render. So a flow we can go through is:
- find the most expensive components
- see what's causing them to render
- determine how you can make those state/props/context not change for a large set of the renders
- once there are no more changes left, you can memoize the component so it no longer unnecessarily re-renders. 


An important thing to note is that if you see a lot of react renders (some components with very high render counts), but javascript excluding renders is much higher than render time, it is possible that the components with lots of renders run hooks like useEffect/useLayoutEffect, which run during the JS event handler period.

It's also good to note that react profiles hook times in development, and if many hooks are called (lets say 5,000 components all called a useEffect), it will have to profile every single one. And it may also be the case the comparison of the hooks dependency can be expensive, and that would not be tracked in render time.

If it's not possible to explain the root problem from this data, please ask me for more data explicitly, and what we would need to know to find the source of the performance problem.
`)({commitTime:t.timing.frameConstruction,eHandlerTimeExcludingRenders:t.timing.otherJSTime,formattedReactData:dH(t.groupedFiberRenders),framePresentTime:t.timing.frameDraw,interactionType:t.type,name:dC(t.componentPath),renderTime:t.groupedFiberRenders.reduce((e,t)=>e+t.totalTime,0),time:dT(t.timing),toRafTime:t.timing.framePreparation})}case"fix":switch(t.kind){case"dropped-frames":return(({renderTime:e,otherTime:t,formattedReactData:r})=>`You will attempt to implement a performance improvement to a large slowdown in a react app

Your should split your goals into 2 parts:
- identifying the problem
- fixing the problem
	- it is okay to implement a fix even if you aren't 100% sure the fix solves the performance problem. When you aren't sure, you should tell the user to try repeating the interaction, and feeding the "Formatted Data" in the React Scan notifications optimize tab. This allows you to start a debugging flow with the user, where you attempt a fix, and observe the result. The user may make a mistake when they pass you the formatted data, so must make sure, given the data passed to you, that the associated data ties to the same interaction you were trying to debug.

Make sure to check if the user has the react compiler enabled (project dependent, configured through build tool), so you don't unnecessarily memoize components. If it is, you do not need to worry about memoizing user components

One challenge you may face is the performance problem lies in a node_module, not in user code. If you are confident the problem originates because of a node_module, there are multiple strategies, which are context dependent:
- you can try to work around the problem, knowing which module is slow
- you can determine if its possible to resolve the problem in the node_module by modifying non node_module code
- you can monkey patch the node_module to experiment and see if it's really the problem (you can modify a functions properties to hijack the call for example)
- you can determine if it's feasible to replace whatever node_module is causing the problem with a performant option (this is an extreme)


We have the high level time of how much react spent rendering, and what else the browser spent time on during this slowdown

- react component render time: ${e.toFixed(0)}ms
- other time: ${t}ms


We also have lower level information about react components, such as their render time, and which props/state/context changed when they re-rendered.

${r}

You may notice components have many renders, but much fewer props/state/context changes. This normally implies most of the components could have been memoized to avoid computation

It's also important to remember if a component had no props/state/context change, and it was memoized, it would not render. So the flow should be:
- find the most expensive components
- see what's causing them to render
- determine how you can make those state/props/context not change for a large set of the renders
- once there are no more changes left, you can memoize the component so it no longer unnecessarily re-renders. 

An important thing to note is that if you see a lot of react renders (some components with very high render counts), but other time is much higher than render time, it is possible that the components with lots of renders run hooks like useEffect/useLayoutEffect, which run outside of what we profile (just react render time).

It's also good to note that react profiles hook times in development, and if many hooks are called (lets say 5,000 components all called a useEffect), it will have to profile every single one. And it may also be the case the comparison of the hooks dependency can be expensive, and that would not be tracked in render time.

If a node_module is the component with high renders, you can experiment to see if that component is the root issue (because of hooks). You should use the same instructions for node_module debugging mentioned previously.

If renders don't seem to be the problem, see if there are any expensive CSS properties being added/mutated, or any expensive DOM Element mutations/new elements being created that could cause this slowdown. 
`)({formattedReactData:dH(t.groupedFiberRenders),renderTime:t.groupedFiberRenders.reduce((e,t)=>e+t.totalTime,0),otherTime:t.timing.otherTime});case"interaction":return(({interactionType:e,name:t,componentPath:r,time:n,renderTime:i,eHandlerTimeExcludingRenders:o,toRafTime:a,commitTime:l,framePresentTime:s,formattedReactData:c})=>`You will attempt to implement a performance improvement to a user interaction in a React app. You will be provided with data about the interaction, and the slow down.

Your should split your goals into 2 parts:
- identifying the problem
- fixing the problem
	- it is okay to implement a fix even if you aren't 100% sure the fix solves the performance problem. When you aren't sure, you should tell the user to try repeating the interaction, and feeding the "Formatted Data" in the React Scan notifications optimize tab. This allows you to start a debugging flow with the user, where you attempt a fix, and observe the result. The user may make a mistake when they pass you the formatted data, so must make sure, given the data passed to you, that the associated data ties to the same interaction you were trying to debug.


Make sure to check if the user has the react compiler enabled (project dependent, configured through build tool), so you don't unnecessarily memoize components. If it is, you do not need to worry about memoizing user components

One challenge you may face is the performance problem lies in a node_module, not in user code. If you are confident the problem originates because of a node_module, there are multiple strategies, which are context dependent:
- you can try to work around the problem, knowing which module is slow
- you can determine if its possible to resolve the problem in the node_module by modifying non node_module code
- you can monkey patch the node_module to experiment and see if it's really the problem (you can modify a functions properties to hijack the call for example)
- you can determine if it's feasible to replace whatever node_module is causing the problem with a performant option (this is an extreme)

The interaction was a ${e} on the component named ${t}. This component has the following ancestors ${r}. This is the path from the component, to the root. This should be enough information to figure out where this component is in the user's code base

This path is the component that was clicked, so it should tell you roughly where component had an event handler that triggered a state change.

Please note that the leaf node of this path might not be user code (if they use a UI library), and they may contain many wrapper components that just pass through children that aren't relevant to the actual click. So make you sure analyze the path and understand what the user code is doing

We have a set of high level, and low level data about the performance issue.

The click took ${n.toFixed(0)}ms from interaction start, to when a new frame was presented to a user.

We also provide you with a breakdown of what the browser spent time on during the period of interaction start to frame presentation.

- react component render time: ${i.toFixed(0)}ms
- how long it took to run javascript event handlers (EXCLUDING REACT RENDERS): ${o.toFixed(0)}ms
- how long it took from the last event handler time, to the last request animation frame: ${a.toFixed(0)}ms
	- things like prepaint, style recalculations, layerization, async web API's like observers may occur during this time
- how long it took from the last request animation frame to when the dom was committed: ${l.toFixed(0)}ms
	- during this period you will see paint, commit, potential style recalcs, and other misc browser activity. Frequently high times here imply css that makes the browser do a lot of work, or mutating expensive dom properties during the event handler stage. This can be many things, but it narrows the problem scope significantly when this is high
${null===s?"":`- how long it took from dom commit for the frame to be presented: ${s.toFixed(0)}ms. This is when information about how to paint the next frame is sent to the compositor threads, and when the GPU does work. If this is high, look for issues that may be a bottleneck for operations occurring during this time`}


We also have lower level information about react components, such as their render time, and which props/state/context changed when they re-rendered.

${c}

You may notice components have many renders, but much fewer props/state/context changes. This normally implies most of the components could have been memoized to avoid computation

It's also important to remember if a component had no props/state/context change, and it was memoized, it would not render. So the flow should be:
- find the most expensive components
- see what's causing them to render
- determine how you can make those state/props/context not change for a large set of the renders
- once there are no more changes left, you can memoize the component so it no longer unnecessarily re-renders. 

An important thing to note is that if you see a lot of react renders (some components with very high render counts), but javascript excluding renders is much higher than render time, it is possible that the components with lots of renders run hooks like useEffect/useLayoutEffect, which run during the JS event handler period.

It's also good to note that react profiles hook times in development, and if many hooks are called (lets say 5,000 components all called a useEffect), it will have to profile every single one. And it may also be the case the comparison of the hooks dependency can be expensive, and that would not be tracked in render time.

If a node_module is the component with high renders, you can experiment to see if that component is the root issue (because of hooks). You should use the same instructions for node_module debugging mentioned previously.

`)({commitTime:t.timing.frameConstruction,componentPath:t.componentPath.join(">"),eHandlerTimeExcludingRenders:t.timing.otherJSTime,formattedReactData:dH(t.groupedFiberRenders),framePresentTime:t.timing.frameDraw,interactionType:t.type,name:dC(t.componentPath),renderTime:t.groupedFiberRenders.reduce((e,t)=>e+t.totalTime,0),time:dT(t.timing),toRafTime:t.timing.framePreparation})}}})(),dV=({selectedEvent:e})=>{let[t,r]=e5("fix"),[n,i]=e5(!1);return rp("div",{className:lH(["w-full h-full"]),children:[rp("div",{className:lH(["border border-[#27272A] rounded-sm h-4/5 text-xs overflow-hidden"]),children:[rp("div",{className:lH(["bg-[#18181B] p-1 rounded-t-sm"]),children:rp("div",{className:lH(["flex items-center gap-x-1"]),children:[rp("button",{onClick:()=>r("fix"),className:lH(["flex items-center justify-center whitespace-nowrap py-1.5 px-3 rounded-sm","fix"===t?"text-white bg-[#7521c8]":"text-[#6E6E77] hover:text-white"]),children:"Fix"}),rp("button",{onClick:()=>r("explanation"),className:lH(["flex items-center justify-center whitespace-nowrap py-1.5 px-3 rounded-sm","explanation"===t?"text-white bg-[#7521c8]":"text-[#6E6E77] hover:text-white"]),children:"Explanation"}),rp("button",{onClick:()=>r("data"),className:lH(["flex items-center justify-center whitespace-nowrap py-1.5 px-3 rounded-sm","data"===t?"text-white bg-[#7521c8]":"text-[#6E6E77] hover:text-white"]),children:"Data"})]})}),rp("div",{className:lH(["overflow-y-auto h-full"]),children:rp("pre",{className:lH(["p-2 h-full","whitespace-pre-wrap break-words","text-gray-300 font-mono "]),children:dB(t,e)})})]}),rp("button",{onClick:async()=>{let r=dB(t,e);await navigator.clipboard.writeText(r),i(!0),setTimeout(()=>i(!1),1e3)},className:lH(["mt-4 px-4 py-2 bg-[#18181B] text-[#6E6E77] rounded-sm","hover:text-white transition-colors duration-200","flex items-center justify-center gap-x-2 text-xs"]),children:[rp("span",{children:n?"Copied!":"Copy Prompt"}),rp("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:lH(["transition-transform duration-200",n&&"scale-110"]),children:n?rp("path",{d:"M20 6L9 17l-5-5"}):rp(eC,{children:[rp("rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2"}),rp("path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"})]})})]})]})},dq=({selectedEvent:e})=>{var t,r;let[n]=e5(null!=(t=uB())&&t),{notificationState:i}=e9(dz),[o,a]=e5((null==(r=i.routeMessage)?void 0:r.name)?[i.routeMessage.name]:[]),l=((e,t)=>{switch(e.kind){case"dropped-frames":return[...t?[{name:"Total Processing Time",time:dT(e.timing),color:"bg-red-500",kind:"total-processing-time"}]:[{name:"Renders",time:e.timing.renderTime,color:"bg-purple-500",kind:"render"},{name:"JavaScript, DOM updates, Draw Frame",time:e.timing.otherTime,color:"bg-[#4b4b4b]",kind:"other-frame-drop"}]];case"interaction":return[...t?[]:[{name:"Renders",time:e.timing.renderTime,color:"bg-purple-500",kind:"render"}],{name:t?"React Renders, Hooks, Other JavaScript":"JavaScript/React Hooks ",time:e.timing.otherJSTime,color:"bg-[#EFD81A]",kind:"other-javascript"},{name:"Update DOM and Draw New Frame",time:dT(e.timing)-e.timing.renderTime-e.timing.otherJSTime,color:"bg-[#1D3A66]",kind:"other-not-javascript"}]}})(e,n),s=e9(uR);e4(()=>{var e;if(null==(e=i.routeMessage)?void 0:e.name){let e=null==s?void 0:s.querySelector("#overview-scroll-container"),t=null==s?void 0:s.querySelector(`#react-scan-overview-bar-${i.routeMessage.name}`);if(e&&t){let r=t.getBoundingClientRect().top,n=e.getBoundingClientRect().top;e.scrollTop=e.scrollTop+(r-n)}}},[i.route]),e4(()=>{"other-visualization"===i.route&&a(e=>{var t;return(null==(t=i.routeMessage)?void 0:t.name)?[i.routeMessage.name]:e})},[i.route]);let c=l.reduce((e,t)=>e+t.time,0);return rp("div",{className:"rounded-sm border border-zinc-800 text-xs",children:[rp("div",{className:"p-2 border-b border-zinc-800 bg-zinc-900/50",children:rp("div",{className:"flex items-center justify-between",children:[rp("h3",{className:"text-xs font-medium",children:"What was time spent on?"}),rp("span",{className:"text-xs text-zinc-400",children:["Total: ",c.toFixed(0),"ms"]})]})}),rp("div",{className:"divide-y divide-zinc-800",children:l.map(t=>{let r=o.includes(t.kind);return rp("div",{id:`react-scan-overview-bar-${t.kind}`,children:[rp("button",{onClick:()=>a(e=>e.includes(t.kind)?e.filter(e=>e!==t.kind):[...e,t.kind]),className:"w-full px-3 py-2 flex items-center gap-4 hover:bg-zinc-800/50 transition-colors",children:rp("div",{className:"flex-1",children:[rp("div",{className:"flex items-center justify-between mb-2",children:[rp("div",{className:"flex items-center gap-0.5",children:[rp("svg",{className:`h-4 w-4 text-zinc-400 transition-transform ${r?"rotate-90":""}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:rp("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})}),rp("span",{className:"font-medium flex items-center text-left",children:t.name})]}),rp("span",{className:" text-zinc-400",children:[t.time.toFixed(0),"ms"]})]}),rp("div",{className:"h-1 bg-zinc-800 rounded-full overflow-hidden",children:rp("div",{className:`h-full ${t.color} transition-all`,style:{width:`${t.time/c*100}%`}})})]})}),r&&rp("div",{className:"bg-zinc-900/30 border-t border-zinc-800 px-2.5 py-3",children:rp("p",{className:" text-zinc-400 mb-4 text-xs",children:(()=>{switch(e.kind){case"interaction":switch(t.kind){case"render":return rp(dK,{input:dX(e)});case"other-javascript":return rp(dK,{input:dY(e)});case"other-not-javascript":return rp(dK,{input:dG(e)})}case"dropped-frames":switch(t.kind){case"total-processing-time":return rp(dK,{input:{kind:"total-processing",data:{time:dT(e.timing)}}});case"render":return rp(eC,{children:rp(dK,{input:{kind:"render",data:{topByTime:e.groupedFiberRenders.toSorted((e,t)=>t.totalTime-e.totalTime).slice(0,3).map(t=>({name:t.name,percentage:t.totalTime/dT(e.timing)}))}}})});case"other-frame-drop":return rp(dK,{input:{kind:"other"}})}}})()})})]},t.kind)})})]})},dG=e=>{let t=e.groupedFiberRenders.reduce((e,t)=>e+t.count,0),r=e.timing.renderTime,n=dT(e.timing);return t>100?{kind:"high-render-count-update-dom-draw-frame",data:{count:t,percentageOfTotal:r/n*100,copyButton:rp(dJ,{})}}:{kind:"update-dom-draw-frame",data:{copyButton:rp(dJ,{})}}},dJ=()=>{let[e,t]=e5(!1),{notificationState:r}=e9(dz);return rp("button",{onClick:async()=>{r.selectedEvent&&(await navigator.clipboard.writeText(dB("explanation",r.selectedEvent)),t(!0),setTimeout(()=>t(!1),1e3))},className:"bg-zinc-800 flex hover:bg-zinc-700 text-zinc-200 px-2 py-1 rounded gap-x-3",children:[rp("span",{children:e?"Copied!":"Copy Prompt"}),rp("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:lH(["transition-transform duration-200",e&&"scale-110"]),children:e?rp("path",{d:"M20 6L9 17l-5-5"}):rp(eC,{children:[rp("rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2"}),rp("path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"})]})})]})},dX=e=>e.timing.renderTime/dT(e.timing)>.3?{kind:"render",data:{topByTime:e.groupedFiberRenders.toSorted((e,t)=>t.totalTime-e.totalTime).slice(0,3).map(t=>({percentage:t.totalTime/dT(e.timing),name:t.name}))}}:{kind:"other"},dY=e=>{let t=e.groupedFiberRenders.reduce((e,t)=>e+t.count,0);return e.timing.otherJSTime/dT(e.timing)<.2?{kind:"js-explanation-base"}:e.groupedFiberRenders.find(e=>e.count>200)||e.groupedFiberRenders.reduce((e,t)=>e+t.count,0)>500?{kind:"high-render-count-high-js",data:{renderCount:t,topByCount:e.groupedFiberRenders.filter(e=>e.count>100).toSorted((e,t)=>t.count-e.count).slice(0,3)}}:e.timing.otherJSTime/dT(e.timing)>.3?e.timing.renderTime>.2?{kind:"js-explanation-base"}:{kind:"low-render-count-high-js",data:{renderCount:t}}:{kind:"js-explanation-base"}},dK=({input:e})=>{switch(e.kind){case"total-processing":return rp("div",{className:lH(["text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2"]),children:[rp("p",{children:["This is the time it took to draw the entire frame that was presented to the user. To be at 60FPS, this number needs to be ","<=16ms"]}),rp("p",{children:'To debug the issue, check the "Ranked" tab to see if there are significant component renders'}),rp("p",{children:"On a production React build, React Scan can't access the time it took for component to render. To get that information, run React Scan on a development build"}),rp("p",{children:["To understand precisely what caused the slowdown while in production, use the ",rp("strong",{children:"Chrome profiler"})," and analyze the function call times."]}),rp("p",{})]});case"render":return rp("div",{className:lH(["text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2"]),children:[rp("p",{children:"This is the time it took React to run components, and internal logic to handle the output of your component."}),rp("div",{className:lH(["flex flex-col"]),children:[rp("p",{children:"The slowest components for this time period were:"}),e.data.topByTime.map(e=>rp("div",{children:[rp("strong",{children:e.name}),":"," ",(100*e.percentage).toFixed(0),"% of total"]},e.name))]}),rp("p",{children:'To view the render times of all your components, and what caused them to render, go to the "Ranked" tab'}),rp("p",{children:'The "Ranked" tab shows the render times of every component.'}),rp("p",{children:"The render times of the same components are grouped together into one bar."}),rp("p",{children:"Clicking the component will show you what props, state, or context caused the component to re-render."})]});case"js-explanation-base":return rp("div",{className:lH(["text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2"]),children:[rp("p",{children:"This is the period when JavaScript hooks and other JavaScript outside of React Renders run."}),rp("p",{children:["The most common culprit for high JS time is expensive hooks, like expensive callbacks inside of ",rp("code",{children:"useEffect"}),"'s or a large number of useEffect's called, but this can also be JavaScript event handlers (",rp("code",{children:"'onclick'"}),", ",rp("code",{children:"'onchange'"}),") that performed expensive computation."]}),rp("p",{children:"If you have lots of components rendering that call hooks, like useEffect, it can add significant overhead even if the callbacks are not expensive. If this is the case, you can try optimizing the renders of those components to avoid the hook from having to run."}),rp("p",{children:["You should profile your app using the"," ",rp("strong",{children:"Chrome DevTools profiler"})," to learn exactly which functions took the longest to execute."]})]});case"high-render-count-high-js":return rp("div",{className:lH(["text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2"]),children:[rp("p",{children:"This is the period when JavaScript hooks and other JavaScript outside of React Renders run."}),0===e.data.renderCount?rp(eC,{children:[rp("p",{children:"There were no renders, which means nothing related to React caused this slowdown. The most likely cause of the slowdown is a slow JavaScript event handler, or code related to a Web API"}),rp("p",{children:["You should try to reproduce the slowdown while profiling your website with the",rp("strong",{children:"Chrome DevTools profiler"})," to see exactly what functions took the longest to execute."]})]}):rp(eC,{children:[" ",rp("p",{children:["There were ",rp("strong",{children:e.data.renderCount})," renders, which could have contributed to the high JavaScript/Hook time if they ran lots of hooks, like ",rp("code",{children:"useEffects"}),"."]}),rp("div",{className:lH(["flex flex-col"]),children:[rp("p",{children:"You should try optimizing the renders of:"}),e.data.topByCount.map(e=>rp("div",{children:["- ",rp("strong",{children:e.name})," (rendered ",e.count,"x)"]},e.name))]}),"and then checking if the problem still exists.",rp("p",{children:["You can also try profiling your app using the"," ",rp("strong",{children:"Chrome DevTools profiler"})," to see exactly what functions took the longest to execute."]})]})]});case"low-render-count-high-js":return rp("div",{className:lH(["text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2"]),children:[rp("p",{children:"This is the period when JavaScript hooks and other JavaScript outside of React Renders run."}),rp("p",{children:["There were only ",rp("strong",{children:e.data.renderCount})," renders detected, which means either you had very expensive hooks like"," ",rp("code",{children:"useEffect"}),"/",rp("code",{children:"useLayoutEffect"}),", or there is other JavaScript running during this interaction that took up the majority of the time."]}),rp("p",{children:["To understand precisely what caused the slowdown, use the"," ",rp("strong",{children:"Chrome profiler"})," and analyze the function call times."]})]});case"high-render-count-update-dom-draw-frame":return rp("div",{className:lH(["text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2"]),children:[rp("p",{children:"These are the calculations the browser is forced to do in response to the JavaScript that ran during the interaction."}),rp("p",{children:"This can be caused by CSS updates/CSS recalculations, or new DOM elements/DOM mutations."}),rp("p",{children:["During this interaction, there were"," ",rp("strong",{children:e.data.count})," renders, which was"," ",rp("strong",{children:[e.data.percentageOfTotal.toFixed(0),"%"]})," of the time spent processing"]}),rp("p",{children:"The work performed as a result of the renders may have forced the browser to spend a lot of time to draw the next frame."}),rp("p",{children:'You can try optimizing the renders to see if the performance problem still exists using the "Ranked" tab.'}),rp("p",{children:"If you use an AI-based code editor, you can export the performance data collected as a prompt."}),rp("p",{children:e.data.copyButton}),rp("p",{children:"Provide this formatted data to the model and ask it to find, or fix, what could be causing this performance problem."}),rp("p",{children:'For a larger selection of prompts, try the "Prompts" tab'})]});case"update-dom-draw-frame":return rp("div",{className:lH(["text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2"]),children:[rp("p",{children:"These are the calculations the browser is forced to do in response to the JavaScript that ran during the interaction."}),rp("p",{children:"This can be caused by CSS updates/CSS recalculations, or new DOM elements/DOM mutations."}),rp("p",{children:"If you use an AI-based code editor, you can export the performance data collected as a prompt."}),rp("p",{children:e.data.copyButton}),rp("p",{children:"Provide this formatted data to the model and ask it to find, or fix, what could be causing this performance problem."}),rp("p",{children:'For a larger selection of prompts, try the "Prompts" tab'})]});case"other":return rp("div",{className:lH(["text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2"]),children:[rp("p",{children:["This is the time it took to run everything other than React renders. This can be hooks like ",rp("code",{children:"useEffect"}),", other JavaScript not part of React, or work the browser has to do to update the DOM and draw the next frame."]}),rp("p",{children:["To get a better picture of what happened, profile your app using the"," ",rp("strong",{children:"Chrome profiler"})," when the performance problem arises."]})]})}},dZ=null,dQ=null,d0=tx({kind:"idle",current:null}),d1=null,d2=0,d5=1/60,d4=()=>{d1&&cancelAnimationFrame(d1),d1=requestAnimationFrame(e=>{if(!dZ||!dQ)return;let t=d2?Math.min((e-d2)/1e3,.05):d5;d2=e;let r=1.8*t;dQ.clearRect(0,0,dZ.width,dZ.height);let n="hsl(271, 76%, 53%)",i=d0.value,{alpha:o,current:a}=(()=>{var e,t,r;switch(i.kind){case"transition":{let t=(null==(e=i.current)?void 0:e.alpha)&&i.current.alpha>0?i.current:i.transitionTo;return{alpha:t?t.alpha:0,current:t}}case"move-out":return{alpha:null!=(r=null==(t=i.current)?void 0:t.alpha)?r:0,current:i.current};case"idle":return{alpha:1,current:i.current}}})();switch(null==a||a.rects.forEach(e=>{dQ&&(dQ.shadowColor=n,dQ.shadowBlur=6,dQ.strokeStyle=n,dQ.lineWidth=2,dQ.globalAlpha=o,dQ.beginPath(),dQ.rect(e.left,e.top,e.width,e.height),dQ.stroke(),dQ.shadowBlur=0,dQ.beginPath(),dQ.rect(e.left,e.top,e.width,e.height),dQ.stroke())}),i.kind){case"move-out":if(0===i.current.alpha){d0.value={kind:"idle",current:null},d2=0;return}i.current.alpha<=.01&&(i.current.alpha=0),i.current.alpha=Math.max(0,i.current.alpha-r),d4();return;case"transition":if(i.current&&i.current.alpha>0){i.current.alpha=Math.max(0,i.current.alpha-r),d4();return}if(1===i.transitionTo.alpha){d0.value={kind:"idle",current:i.transitionTo},d2=0;return}i.transitionTo.alpha=Math.min(i.transitionTo.alpha+r,1),d4();case"idle":d2=0;return}})},d3=null;function d7(){(null==dZ?void 0:dZ.parentNode)&&dZ.parentNode.removeChild(dZ),dZ=null,dQ=null}var d6=()=>{var e,t;let r=d0.value.current?d0.value.current:"transition"===d0.value.kind?d0.value.transitionTo:null;if(r){if("transition"===d0.value.kind){d0.value={kind:"move-out",current:(null==(e=d0.value.current)?void 0:e.alpha)===0?d0.value.transitionTo:null!=(t=d0.value.current)?t:d0.value.transitionTo};return}d0.value={kind:"move-out",current:{alpha:0,...r}}}},d8=({selectedEvent:e})=>{let t=dT(e.timing),r=t-e.timing.renderTime,[n]=e5(uB()),i=e.groupedFiberRenders.map(e=>({event:e,kind:"render",totalTime:n?e.count:e.totalTime})),o=(()=>{switch(e.kind){case"dropped-frames":return e.timing.renderTime/t<.1;case"interaction":return(e.timing.otherJSTime+e.timing.renderTime)/t<.2}})();"interaction"!==e.kind||n||i.push({kind:"other-javascript",totalTime:e.timing.otherJSTime}),o&&!n&&("interaction"===e.kind?i.push({kind:"other-not-javascript",totalTime:dT(e.timing)-e.timing.renderTime-e.timing.otherJSTime}):i.push({kind:"other-frame-drop",totalTime:r}));let a=e7({lastCallAt:null,timer:null}),l=i.reduce((e,t)=>e+t.totalTime,0);return rp("div",{className:lH(["flex flex-col h-full w-full gap-y-1"]),children:[n&&0===i.length?rp("div",{className:"flex flex-col items-center justify-center h-full text-zinc-400",children:[rp("p",{className:"text-sm w-full text-left text-white mb-1.5",children:"No data available"}),rp("p",{className:"text-x w-full text-lefts",children:"No data was collected during this period"})]}):0===i.length?rp("div",{className:"flex flex-col items-center justify-center h-full text-zinc-400",children:[rp("p",{className:"text-sm w-full text-left text-white mb-1.5",children:"No renders collected"}),rp("p",{className:"text-x w-full text-lefts",children:"There were no renders during this period"})]}):void 0,i.toSorted((e,t)=>t.totalTime-e.totalTime).map(e=>rp(d9,{bars:i,bar:e,debouncedMouseEnter:a,totalBarTime:l,isProduction:n},"render"===e.kind?e.event.id:e.kind))]})},d9=({bar:e,debouncedMouseEnter:t,totalBarTime:r,isProduction:n,bars:i,depth:o=0})=>{var a;let{setNotificationState:l,setRoute:s}=e9(dz),[c,d]=e5(!1),u="render"!==e.kind||0===e.event.parents.size,p=i.filter(t=>"render"===t.kind&&"render"===e.kind&&e.event.parents.has(t.event.name)&&t.event.name!==e.event.name),m="render"===e.kind?Array.from(e.event.parents).filter(e=>!i.some(t=>"render"===t.kind&&t.event.name===e)):[];return rp("div",{className:"w-full",children:[rp("div",{className:lH(["w-full flex items-center relative text-xs min-w-0"]),children:[rp("button",{onMouseLeave:()=>{t.current.timer&&clearTimeout(t.current.timer),d6()},onMouseEnter:async()=>{let r=async()=>{if(t.current.lastCallAt=Date.now(),"render"!==e.kind){let e=d0.value.current?d0.value.current:"transition"===d0.value.kind?d0.value.transitionTo:null;if(!e){d0.value={kind:"idle",current:null};return}d0.value={kind:"move-out",current:{alpha:0,...e}};return}let r=d0.value,n=(()=>{switch(r.kind){case"transition":return r.transitionTo;case"idle":case"move-out":return r.current}})(),i=[];if("transition"===r.kind){let t=r.current&&r.current.alpha>0?"fading-out":"fading-in";(()=>{switch(t){case"fading-in":d0.value={kind:"transition",current:r.transitionTo,transitionTo:{rects:i,alpha:0,name:e.event.name}};return;case"fading-out":d0.value={kind:"transition",current:d0.value.current?{alpha:0,...d0.value.current}:null,transitionTo:{rects:i,alpha:0,name:e.event.name}};return}})()}else d0.value={kind:"transition",transitionTo:{rects:i,alpha:0,name:e.event.name},current:n?{alpha:0,...n}:null};for await(let t of cU(e.event.elements.filter(e=>e instanceof Element)))t.forEach(({boundingClientRect:e})=>{i.push(e)}),d4()};if(t.current.lastCallAt&&Date.now()-t.current.lastCallAt<200){t.current.timer&&clearTimeout(t.current.timer),t.current.timer=setTimeout(()=>{r()},200);return}r()},onClick:()=>{"render"===e.kind?(l(t=>({...t,selectedFiber:e.event})),s({route:"render-explanation",routeMessage:null})):s({route:"other-visualization",routeMessage:{kind:"auto-open-overview-accordion",name:e.kind}})},className:lH(["h-full w-[90%] flex items-center hover:bg-[#0f0f0f] rounded-l-md min-w-0 relative"]),children:[rp("div",{style:{minWidth:"fit-content",width:`${e.totalTime/r*100}%`},className:lH(["flex items-center rounded-sm text-white text-xs h-[28px] shrink-0","render"===e.kind&&"bg-[#412162] group-hover:bg-[#5b2d89]","other-frame-drop"===e.kind&&"bg-[#44444a] group-hover:bg-[#6a6a6a]","other-javascript"===e.kind&&"bg-[#efd81a6b] group-hover:bg-[#efda1a2f]","other-not-javascript"===e.kind&&"bg-[#214379d4] group-hover:bg-[#21437982]"])}),rp("div",{className:lH(["absolute inset-0 flex items-center px-2","min-w-0"]),children:rp("div",{className:"flex items-center gap-x-2 min-w-0 w-full",children:[rp("span",{className:lH(["truncate"]),children:(()=>{switch(e.kind){case"other-frame-drop":return"JavaScript, DOM updates, Draw Frame";case"other-javascript":return"JavaScript/React Hooks";case"other-not-javascript":return"Update DOM and Draw New Frame";case"render":return e.event.name}})()}),"render"===e.kind&&!(a=e.event).wasFiberRenderMount&&!a.hasMemoCache&&0===a.changes.context.length&&0===a.changes.props.length&&0===a.changes.state.length&&rp("div",{style:{lineHeight:"10px"},className:lH(["px-1 py-0.5 bg-[#6a369e] flex items-center rounded-sm font-semibold text-[8px] shrink-0"]),children:"Memoizable"})]})})]}),rp("button",{onClick:()=>"render"===e.kind&&!u&&d(!c),className:lH(["flex items-center min-w-fit shrink-0 rounded-r-md h-[28px]",!u&&"hover:bg-[#0f0f0f]","render"!==e.kind||u?"cursor-default":"cursor-pointer"]),children:[rp("div",{className:"w-[20px] flex items-center justify-center",children:"render"===e.kind&&!u&&rp(dM,{className:lH("transition-transform",c&&"rotate-90"),size:16})}),rp("div",{style:{minWidth:u?"fit-content":n?"30px":"60px"},className:"flex items-center justify-end gap-x-1",children:["render"===e.kind&&rp("span",{className:lH(["text-[10px]"]),children:["x",e.event.count]}),("render"!==e.kind||!n)&&rp("span",{className:"text-[10px] text-[#7346a0] pr-1",children:[e.totalTime<1?"<1":e.totalTime.toFixed(0),"ms"]})]})]}),0===o&&rp("div",{className:lH(["absolute right-0 top-1/2 transition-none -translate-y-1/2 bg-white text-black px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity mr-16","pointer-events-none"]),children:"Click to learn more"})]}),c&&(p.length>0||m.length>0)&&rp("div",{className:"pl-3 flex flex-col gap-y-1 mt-1",children:[p.toSorted((e,t)=>t.totalTime-e.totalTime).map((e,a)=>rp(d9,{depth:o+1,bar:e,debouncedMouseEnter:t,totalBarTime:r,isProduction:n,bars:i},a)),m.map(e=>rp("div",{className:"w-full",children:rp("div",{className:"w-full flex items-center relative text-xs",children:rp("div",{className:"h-full w-full flex items-center relative",children:[rp("div",{className:"flex items-center rounded-sm text-white text-xs h-[28px] w-full"}),rp("div",{className:"absolute inset-0 flex items-center px-2",children:rp("span",{className:"truncate whitespace-nowrap text-white/70 w-full",children:e})})]})})},e))]})]})},ue=({selectedEvent:e,selectedFiber:t})=>{let{setRoute:r}=e9(dz),[n,i]=e5(!0),[o]=e5(uB());e3(()=>{let e=localStorage.getItem("react-scan-tip-shown"),t="true"===e||"false"!==e&&null;if(null===t){i(!0),localStorage.setItem("react-scan-tip-is-shown","true");return}t||i(!1)},[]);let a=0===t.changes.context.length&&0===t.changes.props.length&&0===t.changes.state.length;return rp("div",{className:lH(["w-full min-h-fit h-full flex flex-col py-4 pt-0 rounded-sm"]),children:[rp("div",{className:lH(["flex items-start gap-x-4 "]),children:[rp("button",{onClick:()=>{r({route:"render-visualization",routeMessage:null})},className:lH(["text-white hover:bg-[#34343b] flex gap-x-1 justify-center items-center mb-4 w-fit px-2.5 py-1.5 text-xs rounded-sm bg-[#18181B]"]),children:[rp(dO,{size:14})," ",rp("span",{children:"Overview"})]}),rp("div",{className:lH(["flex flex-col gap-y-1"]),children:[rp("div",{className:lH(["text-sm font-bold text-white overflow-x-hidden"]),children:rp("div",{className:"flex items-center gap-x-2 truncate",children:t.name})}),rp("div",{className:lH(["flex gap-x-2"]),children:[!o&&rp(eC,{children:rp("div",{className:lH(["text-xs text-gray-400"]),children:["• Render time: ",t.totalTime.toFixed(0),"ms"]})}),rp("div",{className:lH(["text-xs text-gray-400 mb-4"]),children:["• Renders: ",t.count,"x"]})]})]})]}),n&&!a&&rp("div",{className:lH(["w-full mb-4 bg-[#0A0A0A] border border-[#27272A] rounded-sm overflow-hidden flex relative"]),children:[rp("button",{onClick:()=>{i(!1),localStorage.setItem("react-scan-tip-shown","false")},className:lH(["absolute right-2 top-2 rounded-sm p-1 hover:bg-[#18181B]"]),children:rp(d$,{size:12})}),rp("div",{className:lH(["w-1 bg-[#d36cff]"])}),rp("div",{className:lH(["flex-1"]),children:[rp("div",{className:lH(["px-3 py-2 text-gray-100 text-xs font-semibold"]),children:"How to stop renders"}),rp("div",{className:lH(["px-3 pb-2 text-gray-400 text-[10px]"]),children:"Stop the following props, state and context from changing between renders, and wrap the component in React.memo if not already"})]})]}),a&&rp("div",{className:lH(["w-full mb-4 bg-[#0A0A0A] border border-[#27272A] rounded-sm overflow-hidden flex"]),children:[rp("div",{className:lH(["w-1 bg-[#d36cff]"])}),rp("div",{className:lH(["flex-1"]),children:[rp("div",{className:lH(["px-3 py-2 text-gray-100 text-sm font-semibold"]),children:"No changes detected"}),rp("div",{className:lH(["px-3 pb-2 text-gray-400 text-xs"]),children:"This component would not have rendered if it was memoized"})]})]}),rp("div",{className:lH(["flex w-full"]),children:[rp("div",{className:lH(["flex flex-col border border-[#27272A] rounded-l-sm overflow-hidden w-1/3"]),children:[rp("div",{className:lH(["text-[14px] font-semibold px-2 py-2 bg-[#18181B] text-white flex justify-center"]),children:"Changed Props"}),t.changes.props.length>0?t.changes.props.toSorted((e,t)=>t.count-e.count).map(e=>rp("div",{className:lH(["flex flex-col justify-between items-center border-t overflow-x-auto border-[#27272A] px-1 py-1 text-wrap bg-[#0A0A0A] text-[10px]"]),children:[rp("span",{className:lH(["text-white "]),children:e.name}),rp("div",{className:lH([" text-[8px]  text-[#d36cff] pl-1 py-1 "]),children:[e.count,"/",t.count,"x"]})]},e.name)):rp("div",{className:lH(["flex items-center justify-center h-full bg-[#0A0A0A] text-[#A1A1AA] border-t border-[#27272A]"]),children:"No changes"})]}),rp("div",{className:lH(["flex flex-col border border-[#27272A] border-l-0 overflow-hidden w-1/3"]),children:[rp("div",{className:lH([" text-[14px] font-semibold px-2 py-2 bg-[#18181B] text-white flex justify-center"]),children:"Changed State"}),t.changes.state.length>0?t.changes.state.toSorted((e,t)=>t.count-e.count).map(e=>rp("div",{className:lH(["flex flex-col justify-between items-center border-t overflow-x-auto border-[#27272A] px-1 py-1 text-wrap bg-[#0A0A0A] text-[10px]"]),children:[rp("span",{className:lH(["text-white "]),children:["index ",e.index]}),rp("div",{className:lH(["rounded-full  text-[#d36cff] pl-1 py-1 text-[8px]"]),children:[e.count,"/",t.count,"x"]})]},e.index)):rp("div",{className:lH(["flex items-center justify-center h-full bg-[#0A0A0A] text-[#A1A1AA] border-t border-[#27272A]"]),children:"No changes"})]}),rp("div",{className:lH(["flex flex-col border border-[#27272A] border-l-0 rounded-r-sm overflow-hidden w-1/3"]),children:[rp("div",{className:lH([" text-[14px] font-semibold px-2 py-2 bg-[#18181B] text-white flex justify-center"]),children:"Changed Context"}),t.changes.context.length>0?t.changes.context.toSorted((e,t)=>t.count-e.count).map(e=>rp("div",{className:lH(["flex flex-col justify-between items-center border-t  border-[#27272A] px-1 py-1 bg-[#0A0A0A] text-[10px] overflow-x-auto"]),children:[rp("span",{className:lH(["text-white "]),children:e.name}),rp("div",{className:lH(["rounded-full text-[#d36cff] pl-1 py-1 text-[8px] text-wrap"]),children:[e.count,"/",t.count,"x"]})]},e.name)):rp("div",{className:lH(["flex items-center justify-center h-full bg-[#0A0A0A] text-[#A1A1AA] border-t border-[#27272A] py-2"]),children:"No changes"})]})]})]})},ut=()=>{let{notificationState:e,setNotificationState:t}=e9(dz),[r,n]=e5("..."),i=e7(null);if(e4(()=>{let e=setInterval(()=>{n(e=>"..."===e?"":e+".")},500);return()=>clearInterval(e)},[]),!e.selectedEvent)return rp("div",{ref:i,className:lH(["h-full w-full flex flex-col items-center justify-center relative py-2 px-4"]),children:[rp("div",{className:lH(["p-2 flex justify-center items-center border-[#27272A] absolute top-0 right-0"]),children:rp("button",{onClick:()=>{l5.value={view:"none"}},children:rp(d$,{size:18,className:"text-[#6F6F78]"})})}),rp("div",{className:lH(["flex flex-col items-start pt-5 bg-[#0A0A0A] p-5 rounded-sm max-w-md"," shadow-lg"]),children:rp("div",{className:lH(["flex flex-col items-start gap-y-4"]),children:[rp("div",{className:lH(["flex items-center"]),children:rp("span",{className:lH(["text-zinc-400 font-medium text-[17px]"]),children:["Scanning for slowdowns",r]})}),0!==e.events.length&&rp("p",{className:lH(["text-xs"]),children:["Click on an item in the"," ",rp("span",{className:lH(["text-purple-400"]),children:"History"})," list to get started"]}),rp("p",{className:lH(["text-zinc-600 text-xs"]),children:"You don't need to keep this panel open for React Scan to record slowdowns"}),rp("p",{className:lH(["text-zinc-600 text-xs"]),children:"Enable audio alerts to hear a delightful ding every time a large slowdown is recorded"}),rp("button",{onClick:()=>{if(e.audioNotificationsOptions.enabled)return void t(e=>{var t,r;return(null==(t=e.audioNotificationsOptions.audioContext)?void 0:t.state)!=="closed"&&(null==(r=e.audioNotificationsOptions.audioContext)||r.close()),localStorage.setItem("react-scan-notifications-audio","false"),{...e,audioNotificationsOptions:{audioContext:null,enabled:!1}}});localStorage.setItem("react-scan-notifications-audio","true");let r=new AudioContext;aL(r),t(e=>({...e,audioNotificationsOptions:{enabled:!0,audioContext:r}}))},className:lH(["px-4 py-2 bg-zinc-800 hover:bg-zinc-700 rounded-sm w-full"," text-sm flex items-center gap-x-2 justify-center"]),children:e.audioNotificationsOptions.enabled?rp(eC,{children:rp("span",{className:"flex items-center gap-x-1",children:"Disable audio alerts"})}):rp(eC,{children:rp("span",{className:"flex items-center gap-x-1",children:"Enable audio alerts"})})})]})})]});switch(e.route){case"render-visualization":return rp(ur,{children:rp(d8,{selectedEvent:e.selectedEvent})});case"render-explanation":if(!e.selectedFiber)throw Error("Invariant: must have selected fiber when viewing render explanation");return rp(ur,{children:rp(ue,{selectedFiber:e.selectedFiber,selectedEvent:e.selectedEvent})});case"other-visualization":return rp(ur,{children:rp("div",{className:lH(["flex w-full h-full flex-col overflow-y-auto"]),id:"overview-scroll-container",children:rp(dq,{selectedEvent:e.selectedEvent})})});case"optimize":return rp(ur,{children:rp(dV,{selectedEvent:e.selectedEvent})})}e.route},ur=({children:e})=>{let{notificationState:t}=e9(dz);if(!t.selectedEvent)throw Error("Invariant: d must have selected event when viewing render explanation");return rp("div",{className:lH(["w-full h-full flex flex-col gap-y-2"]),children:[rp("div",{className:lH(["h-[50px] w-full"]),children:rp(dU,{selectedEvent:t.selectedEvent})}),rp("div",{className:lH(["h-calc(100%-50px) flex flex-col overflow-y-auto px-3"]),children:e})]})},un=({selectedEvent:e})=>{let t=dA(e);switch(e.kind){case"interaction":return rp("div",{className:lH(["w-full flex border-b border-[#27272A] min-h-[48px]"]),children:rp("div",{className:lH(["min-w-fit w-full justify-start flex items-center border-r border-[#27272A] pl-5 pr-2 text-sm gap-x-4"]),children:[rp("div",{className:lH(["flex items-center gap-x-2 "]),children:[rp("span",{className:lH(["text-[#5a5a5a] mr-0.5"]),children:"click"===e.type?"Clicked ":"Typed in "}),rp("span",{children:dC(e.componentPath)}),rp("div",{className:lH(["w-fit flex items-center justify-center h-fit text-white px-1 rounded-sm font-semibold text-[10px] whitespace-nowrap","low"===t&&"bg-green-500/50","needs-improvement"===t&&"bg-[#b77116]","high"===t&&"bg-[#b94040]"]),children:[dT(e.timing).toFixed(0),"ms processing time"]})]}),rp("div",{className:lH(["flex items-center gap-x-2  justify-end ml-auto"]),children:rp("div",{className:lH(["p-2 flex justify-center items-center border-[#27272A]"]),children:rp("button",{onClick:()=>{l5.value={view:"none"}},title:"Close",children:rp(d$,{size:18,className:"text-[#6F6F78]"})})})})]})});case"dropped-frames":return rp("div",{className:lH(["w-full flex border-b border-[#27272A] min-h-[48px]"]),children:rp("div",{className:lH(["min-w-fit w-full justify-start flex items-center border-r border-[#27272A] pl-5 pr-2 text-sm gap-x-4"]),children:[rp("div",{className:lH(["flex items-center gap-x-2 "]),children:["FPS Drop",rp("div",{className:lH(["w-fit flex items-center justify-center h-fit text-white px-1 rounded-sm font-semibold text-[10px] whitespace-nowrap","low"===t&&"bg-green-500/50","needs-improvement"===t&&"bg-[#b77116]","high"===t&&"bg-[#b94040]"]),children:["dropped to ",e.fps," FPS"]})]}),rp("div",{className:lH(["flex items-center gap-x-2 w-2/4 justify-end ml-auto"]),children:rp("div",{className:lH(["p-2 flex justify-center items-center border-[#27272A]"]),children:rp("button",{onClick:()=>{l5.value={view:"none"}},children:rp(d$,{size:18,className:"text-[#6F6F78]"})})})})]})})}},ui=({item:e,shouldFlash:t})=>{var r,n;let[i,o]=e5(!1),a=e.events.map(dA).reduce((e,t)=>{switch(t){case"high":return"high";case"needs-improvement":return"high"===e?"high":"needs-improvement";case"low":return e}},"low"),l=(({flashingItemsCount:e,totalEvents:t})=>{let[r,n]=e5(!1),i=e7(0),o=e7(0);return e4(()=>{if(i.current>=t)return;let e=Date.now()-o.current;if(e>=250){n(!1);let e=setTimeout(()=>{i.current=t,o.current=Date.now(),n(!0),setTimeout(()=>{n(!1)},2e3)},50);return()=>clearTimeout(e)}{let r=setTimeout(()=>{n(!1),setTimeout(()=>{i.current=t,o.current=Date.now(),n(!0),setTimeout(()=>{n(!1)},2e3)},50)},250-e);return()=>clearTimeout(r)}},[e]),r})({flashingItemsCount:e.events.reduce((e,r)=>t(r.id)?e+1:e,0),totalEvents:e.events.length});return rp("div",{className:lH(["flex flex-col gap-y-0.5"]),children:[rp("button",{onClick:()=>o(e=>!e),className:lH(["pl-2 py-1.5  text-sm flex items-center rounded-sm hover:bg-[#18181B] relative overflow-hidden",l&&!i&&"after:absolute after:inset-0 after:bg-purple-500/30 after:animate-[fadeOut_1s_ease-out_forwards]"]),children:[rp("div",{className:lH(["w-4/5 flex items-center justify-start h-full text-xs truncate gap-x-1.5"]),children:[rp("span",{className:lH(["min-w-fit"]),children:rp(dM,{className:lH(["text-[#A1A1AA] transition-transform",i?"rotate-90":""]),size:14},`chevron-${e.timestamp}`)}),rp("span",{className:lH(["text-xs"]),children:"collapsed-frame-drops"===e.kind?"FPS Drops":dC(null!=(n=null==(r=e.events.at(0))?void 0:r.componentPath)?n:[])})]}),rp("div",{className:lH(["ml-auto min-w-fit flex justify-end items-center"]),children:rp("div",{style:{lineHeight:"10px"},className:lH(["w-fit flex items-center text-[10px] justify-center h-full text-white px-1 py-1 rounded-sm font-semibold","low"===a&&"bg-green-500/60","needs-improvement"===a&&"bg-[#b77116] text-[10px]","high"===a&&"bg-[#b94040]"]),children:["x",e.events.length]})})]}),i&&rp(uo,{children:e.events.toSorted((e,t)=>t.timestamp-e.timestamp).map(e=>rp(ua,{event:e,shouldFlash:t(e.id)}))})]})},uo=({children:e})=>rp("div",{className:"relative pl-6 flex flex-col gap-y-1",children:[rp("div",{className:"absolute left-3 top-0 bottom-0 w-px bg-[#27272A]"}),e]}),ua=({event:e,shouldFlash:t})=>{var r,n;let{notificationState:i,setNotificationState:o}=e9(dz),a=dA(e),l=(({shouldFlash:e})=>{let[t,r]=e5(e);return e4(()=>{if(e){r(!0);let e=setTimeout(()=>{r(!1)},1e3);return()=>clearTimeout(e)}},[e]),t})({shouldFlash:t});switch(e.kind){case"interaction":return rp("button",{onClick:()=>{o(t=>({...t,selectedEvent:e,route:"render-visualization",selectedFiber:null}))},className:lH(["pl-2 py-1.5  text-sm flex w-full items-center rounded-sm hover:bg-[#18181B] relative overflow-hidden",e.id===(null==(r=i.selectedEvent)?void 0:r.id)&&"bg-[#18181B]",l&&"after:absolute after:inset-0 after:bg-purple-500/30 after:animate-[fadeOut_1s_ease-out_forwards]"]),children:[rp("div",{className:lH(["w-4/5 flex items-center justify-start h-full gap-x-1.5"]),children:[rp("span",{className:lH(["min-w-fit text-xs"]),children:(()=>{switch(e.type){case"click":return rp(dP,{size:14});case"keyboard":return rp(dL,{size:14})}})()}),rp("span",{className:lH(["text-xs pr-1 truncate"]),children:dC(e.componentPath)})]}),rp("div",{className:lH([" min-w-fit flex justify-end items-center ml-auto"]),children:rp("div",{style:{lineHeight:"10px"},className:lH(["gap-x-0.5 w-fit flex items-end justify-center h-full text-white px-1 py-1 rounded-sm font-semibold text-[10px]","low"===a&&"bg-green-500/50","needs-improvement"===a&&"bg-[#b77116] text-[10px]","high"===a&&"bg-[#b94040]"]),children:rp("div",{style:{lineHeight:"10px"},className:lH(["text-[10px] text-white flex items-end"]),children:[dT(e.timing).toFixed(0),"ms"]})})})]});case"dropped-frames":return rp("button",{onClick:()=>{o(t=>({...t,selectedEvent:e,route:"render-visualization",selectedFiber:null}))},className:lH(["pl-2 py-1.5  w-full text-sm flex items-center rounded-sm hover:bg-[#18181B] relative overflow-hidden",e.id===(null==(n=i.selectedEvent)?void 0:n.id)&&"bg-[#18181B]",l&&"after:absolute after:inset-0 after:bg-purple-500/30 after:animate-[fadeOut_1s_ease-out_forwards]"]),children:[rp("div",{className:lH(["w-4/5 flex items-center justify-start h-full text-xs truncate"]),children:[rp(dI,{size:14,className:"mr-1.5"})," FPS Drop"]}),rp("div",{className:lH([" min-w-fit flex justify-end items-center ml-auto"]),children:rp("div",{style:{lineHeight:"10px"},className:lH(["w-fit flex items-center justify-center h-full text-white px-1 py-1 rounded-sm text-[10px] font-bold","low"===a&&"bg-green-500/60","needs-improvement"===a&&"bg-[#b77116] text-[10px]","high"===a&&"bg-[#b94040]"]),children:[e.fps," FPS"]})})]})}},ul=(e=150)=>{let{notificationState:t}=e9(dz),[r,n]=e5(t.events);return e4(()=>{setTimeout(()=>{n(t.events)},e)},[t.events]),[r,n]},us=()=>{let{notificationState:e,setNotificationState:t}=e9(dz),r=(e=>{let t=e7([]),[r,n]=e5(new Set),i=e7(!0);return e4(()=>{if(i.current){i.current=!1,t.current=e;return}let r=new Set(e.map(e=>e.id)),o=new Set(t.current.map(e=>e.id)),a=new Set;r.forEach(e=>{o.has(e)||a.add(e)}),a.size>0&&(n(a),setTimeout(()=>{n(new Set)},2e3)),t.current=e},[e]),e=>r.has(e)})(e.events),[n,i]=ul(),o=n.reduce((e,t)=>{let r=e.at(-1);if(!r)return[{kind:"single",event:t,timestamp:t.timestamp}];switch(r.kind){case"collapsed-keyboard":if("interaction"===t.kind&&"keyboard"===t.type&&t.componentPath.join("-")===r.events[0].componentPath.join("-"))return[...e.filter(e=>e!==r),{kind:"collapsed-keyboard",events:[...r.events,t],timestamp:Math.max(...[...r.events,t].map(e=>e.timestamp))}];return[...e,{kind:"single",event:t,timestamp:t.timestamp}];case"single":if("interaction"===r.event.kind&&"keyboard"===r.event.type&&"interaction"===t.kind&&"keyboard"===t.type&&r.event.componentPath.join("-")===t.componentPath.join("-"))return[...e.filter(e=>e!==r),{kind:"collapsed-keyboard",events:[r.event,t],timestamp:Math.max(r.event.timestamp,t.timestamp)}];if("dropped-frames"===r.event.kind&&"dropped-frames"===t.kind)return[...e.filter(e=>e!==r),{kind:"collapsed-frame-drops",events:[r.event,t],timestamp:Math.max(r.event.timestamp,t.timestamp)}];return[...e,{kind:"single",event:t,timestamp:t.timestamp}];case"collapsed-frame-drops":if("dropped-frames"===t.kind)return[...e.filter(e=>e!==r),{kind:"collapsed-frame-drops",events:[...r.events,t],timestamp:Math.max(...[...r.events,t].map(e=>e.timestamp))}];return[...e,{kind:"single",event:t,timestamp:t.timestamp}]}},[]).toSorted((e,t)=>t.timestamp-e.timestamp);return rp("div",{className:lH(["w-full h-full gap-y-2 flex flex-col border-r border-[#27272A] overflow-y-auto"]),children:[rp("div",{className:lH(["text-sm text-[#65656D] pl-3 pr-1 w-full flex items-center justify-between"]),children:[rp("span",{children:"History"}),rp(dW,{wrapperProps:{className:"h-full flex items-center justify-center ml-auto"},triggerContent:rp("button",{className:lH(["hover:bg-[#18181B] rounded-full p-2"]),title:"Clear all events",onClick:()=>{dk.getState().actions.clear(),t(e=>({...e,selectedEvent:null,selectedFiber:null,route:"other-visualization"===e.route?"other-visualization":"render-visualization"})),i([])},children:rp(dD,{className:lH([""]),size:16})}),children:rp("div",{className:lH(["w-full flex justify-center"]),children:"Clear all events"})})]}),rp("div",{className:lH(["flex flex-col px-1 gap-y-1"]),children:[0===o.length&&rp("div",{className:lH(["flex items-center justify-center text-zinc-500 text-sm py-4"]),children:"No Events"}),o.map(e=>(()=>{switch(e.kind){case"collapsed-keyboard":case"collapsed-frame-drops":return rp(ui,{shouldFlash:r,item:e});case"single":return rp(ua,{event:e.event,shouldFlash:r(e.event.id)},e.event.id)}})())]})]})},uc=()=>{var e,t,r,n,i,o,a;let l=(e=dk.subscribe,i=(n=e5({t:{__:r=(t=dk.getState)(),u:t}}))[0].t,o=n[1],e3(function(){i.__=r,i.u=t,tK(i)&&o({t:i})},[e,r,t]),e4(function(){return tK(i)&&o({t:i}),e(function(){tK(i)&&o({t:i})})},[e]),r),s=[];return e4(()=>{let e=setInterval(()=>{a.forEach(e=>{e.groupedFiberRenders&&e.groupedFiberRenders.forEach(e=>{if(e.deletedAll)return;if(!e.elements||0===e.elements.length){e.deletedAll=!0;return}let t=e.elements.length;e.elements=e.elements.filter(e=>e&&e.isConnected),0===e.elements.length&&t>0&&(e.deletedAll=!0)})})},5e3);return()=>{clearInterval(e)}},[a=s]),l.state.events.forEach(e=>{let t=Object.values("interaction"===e.kind?e.data.meta.detailedTiming.fiberRenders:e.data.meta.fiberRenders).map(e=>({id:aP(),totalTime:e.nodeInfo.reduce((e,t)=>e+t.selfTime,0),count:e.nodeInfo.length,name:e.nodeInfo[0].name,deletedAll:!1,parents:e.parents,hasMemoCache:e.hasMemoCache,wasFiberRenderMount:e.wasFiberRenderMount,elements:e.nodeInfo.map(e=>e.element),changes:{context:e.changes.fiberContext.current.filter(t=>e.changes.fiberContext.changesCounts.get(t.name)).map(t=>{var r;return{name:String(t.name),count:null!=(r=e.changes.fiberContext.changesCounts.get(t.name))?r:0}}),props:e.changes.fiberProps.current.filter(t=>e.changes.fiberProps.changesCounts.get(t.name)).map(t=>{var r;return{name:String(t.name),count:null!=(r=e.changes.fiberProps.changesCounts.get(t.name))?r:0}}),state:e.changes.fiberState.current.filter(t=>e.changes.fiberState.changesCounts.get(Number(t.name))).map(t=>{var r;return{index:t.name,count:null!=(r=e.changes.fiberState.changesCounts.get(Number(t.name)))?r:0}})}})),r=t.reduce((e,t)=>e+t.totalTime,0);switch(e.kind){case"interaction":{let{commitEnd:n,jsEndDetail:i,interactionStartDetail:o,rafStart:a}=e.data.meta.detailedTiming;i-o-r<0&&c3("js time must be longer than render time");let l=Math.max(0,i-o-r),c=Math.max(e.data.meta.latency-(n-o),0);s.push({componentPath:e.data.meta.detailedTiming.componentPath,groupedFiberRenders:t,id:e.id,kind:"interaction",memory:null,timestamp:e.data.startAt,type:"keyboard"===e.data.meta.detailedTiming.interactionType?"keyboard":"click",timing:{renderTime:r,kind:"interaction",otherJSTime:l,framePreparation:a-i,frameConstruction:n-a,frameDraw:c}});return}case"long-render":return void s.push({kind:"dropped-frames",id:e.id,memory:null,timing:{kind:"dropped-frames",renderTime:r,otherTime:e.data.meta.latency},groupedFiberRenders:t,timestamp:e.data.startAt,fps:e.data.meta.fps})}}),s},ud=()=>{let{notificationState:e,setNotificationState:t}=e9(dz),r=e7(null),n=e7(null),i=e7(0),[o]=ul(),a=o.filter(e=>"high"===dA(e)).length;return e4(()=>{let e=localStorage.getItem("react-scan-notifications-audio");"false"!==e&&"true"!==e?localStorage.setItem("react-scan-notifications-audio","false"):"false"!==e&&t(e=>e.audioNotificationsOptions.enabled?e:{...e,audioNotificationsOptions:{enabled:!0,audioContext:new AudioContext}})},[]),e4(()=>{let{audioNotificationsOptions:t}=e;!t.enabled||0===a||r.current&&r.current>=a||(n.current&&clearTimeout(n.current),n.current=setTimeout(()=>{aL(t.audioContext),r.current=a,i.current=Date.now(),n.current=null},Math.max(0,1e3-(Date.now()-i.current))))},[a]),e4(()=>{0===a&&(r.current=null)},[a]),e4(()=>()=>{n.current&&clearTimeout(n.current)},[]),null},uu=t2((e,t)=>{var r;let n=uc(),[i,o]=e5({detailsExpanded:!1,events:n,filterBy:"latest",moreInfoExpanded:!1,route:"render-visualization",selectedEvent:null!=(r=n.toSorted((e,t)=>e.timestamp-t.timestamp).at(-1))?r:null,selectedFiber:null,routeMessage:null,audioNotificationsOptions:{enabled:!1,audioContext:null}});return i.events=n,rp(dz.Provider,{value:{notificationState:i,setNotificationState:o,setRoute:({route:e,routeMessage:t})=>{o(r=>{let n={...r,route:e,routeMessage:t};switch(e){case"render-visualization":case"optimize":case"other-visualization":return d6(),{...n,selectedFiber:null};case"render-explanation":return d6(),n}})}},children:[rp(ud,{}),rp(up,{ref:t})]})}),up=t2((e,t)=>{var r;let{notificationState:n}=e9(dz);return rp("div",{ref:t,className:lH(["h-full w-full flex flex-col"]),children:[n.selectedEvent&&rp("div",{className:lH(["w-full h-[48px] flex flex-col",n.moreInfoExpanded&&"h-[235px]",n.moreInfoExpanded&&"dropped-frames"===n.selectedEvent.kind&&"h-[150px]"]),children:[rp(un,{selectedEvent:n.selectedEvent}),n.moreInfoExpanded&&rp(um,{})]}),rp("div",{className:lH(["flex ",n.selectedEvent?"h-[calc(100%-48px)]":"h-full",n.moreInfoExpanded&&"h-[calc(100%-200px)]",n.moreInfoExpanded&&(null==(r=n.selectedEvent)?void 0:r.kind)==="dropped-frames"&&"h-[calc(100%-150px)]"]),children:[rp("div",{className:lH(["h-full min-w-[200px]"]),children:rp(us,{})}),rp("div",{className:lH(["w-[calc(100%-200px)] h-full overflow-y-auto"]),children:rp(ut,{})})]})]})}),um=()=>{let{notificationState:e}=e9(dz);if(!e.selectedEvent)throw Error("Invariant must have selected event for more info");let t=e.selectedEvent;return rp("div",{className:lH(["px-4 py-2 border-b border-[#27272A] bg-[#18181B]/50 h-[calc(100%-40px)]","dropped-frames"===t.kind&&"h-[calc(100%-25px)]"]),children:rp("div",{className:lH(["flex flex-col gap-y-4 h-full"]),children:(()=>{switch(t.kind){case"interaction":return rp(eC,{children:[rp("div",{className:lH(["flex items-center gap-x-3"]),children:[rp("span",{className:"text-[#6F6F78] text-xs font-medium",children:"click"===t.type?"Clicked component location":"Typed in component location"}),rp("div",{className:"font-mono text-[#E4E4E7] flex items-center bg-[#27272A] pl-2 py-1 rounded-sm overflow-x-auto",children:t.componentPath.toReversed().map((e,r)=>rp(eC,{children:[rp("span",{style:{lineHeight:"14px"},className:"text-[10px] whitespace-nowrap",children:e},e),r<t.componentPath.length-1&&rp("span",{className:"text-[#6F6F78] mx-0.5",children:"‹"})]}))})]}),rp("div",{className:lH(["flex items-center gap-x-3"]),children:[rp("span",{className:"text-[#6F6F78] text-xs font-medium",children:"Total Time"}),rp("span",{className:"text-[#E4E4E7] bg-[#27272A] px-1.5 py-1 rounded-sm text-xs",children:[dT(t.timing).toFixed(0),"ms"]})]}),rp("div",{className:lH(["flex items-center gap-x-3"]),children:[rp("span",{className:"text-[#6F6F78] text-xs font-medium",children:"Occurred"}),rp("span",{className:"text-[#E4E4E7] bg-[#27272A] px-1.5 py-1 rounded-sm text-xs",children:`${((Date.now()-t.timestamp)/1e3).toFixed(0)}s ago`})]})]});case"dropped-frames":return rp(eC,{children:[rp("div",{className:lH(["flex items-center gap-x-3"]),children:[rp("span",{className:"text-[#6F6F78] text-xs font-medium",children:"Total Time"}),rp("span",{className:"text-[#E4E4E7] bg-[#27272A] px-1.5 py-1 rounded-sm text-xs",children:[dT(t.timing).toFixed(0),"ms"]})]}),rp("div",{className:lH(["flex items-center gap-x-3"]),children:[rp("span",{className:"text-[#6F6F78] text-xs font-medium",children:"Occurred"}),rp("span",{className:"text-[#E4E4E7] bg-[#27272A] px-1.5 py-1 rounded-sm text-xs",children:`${((Date.now()-t.timestamp)/1e3).toFixed(0)}s ago`})]})]})}})()})})},uh=l6(()=>{var e;let t=uc(),[r,n]=e5(t);e4(()=>{let e=setTimeout(()=>{n(t)},600);return()=>{clearTimeout(e)}},[t]);let i=uI.inspectState,o="inspecting"===i.value.kind,a="focused"===i.value.kind,[l,s]=e5([]),c=e8(()=>{switch(uI.inspectState.value.kind){case"inspecting":l5.value={view:"none"},uI.inspectState.value={kind:"inspect-off"};return;case"focused":l5.value={view:"inspector"},uI.inspectState.value={kind:"inspecting",hoveredDomElement:null};return;case"inspect-off":l5.value={view:"none"},uI.inspectState.value={kind:"inspecting",hoveredDomElement:null};return;case"uninitialized":return}},[]),d=e8(e=>{if(e.preventDefault(),e.stopPropagation(),!uW.instrumentation)return;let t=!uW.instrumentation.isPaused.value;uW.instrumentation.isPaused.value=t,lq("react-scan-options",{...lV("react-scan-options"),enabled:!t})},[]);tJ(()=>{"uninitialized"===uI.inspectState.value.kind&&(uI.inspectState.value={kind:"inspect-off"})});let u=null,p="#999";return o?(u=rp(aD,{name:"icon-inspect"}),p="#8e61e3"):a?(u=rp(aD,{name:"icon-focus"}),p="#8e61e3"):(u=rp(aD,{name:"icon-inspect"}),p="#999"),e3(()=>{"notifications"!==l5.value.view||s([...new Set(t.map(e=>e.id)).values()])},[t.length,l5.value.view]),rp("div",{className:"flex max-h-9 min-h-9 flex-1 items-stretch overflow-hidden",children:[rp("div",{className:"h-full flex items-center min-w-fit",children:rp("button",{type:"button",id:"react-scan-inspect-element",title:"Inspect element",onClick:c,className:"button flex items-center justify-center h-full w-full pl-3 pr-2.5",style:{color:p},children:u})}),rp("div",{className:"h-full flex items-center justify-center",children:rp("button",{type:"button",id:"react-scan-notifications",title:"Notifications",onClick:()=>{switch("inspect-off"!==uI.inspectState.value.kind&&(uI.inspectState.value={kind:"inspect-off"}),l5.value.view){case"inspector":uI.inspectState.value={kind:"inspect-off"},s([...new Set(t.map(e=>e.id)).values()]),l5.value={view:"notifications"};return;case"notifications":l5.value={view:"none"};return;case"none":s([...new Set(t.map(e=>e.id)).values()]),l5.value={view:"notifications"};return}},className:"button flex items-center justify-center h-full pl-2.5 pr-2.5",style:{color:p},children:rp(dR,{events:r.filter(e=>!l.includes(e.id)).map(e=>"high"===dA(e)),size:16,className:lH(["text-[#999]","notifications"===l5.value.view&&"text-[#8E61E3]"])})})}),rp(c2,{checked:!(null==(e=uW.instrumentation)?void 0:e.isPaused.value),onChange:d,className:"place-self-center",title:"Outline Re-renders"}),uW.options.value.showFPS&&rp(c4,{})]})}),uf=tE(()=>"inspecting"===uI.inspectState.value.kind),ug=tE(()=>lH("relative","flex-1","flex flex-col","rounded-t-lg","overflow-hidden","opacity-100","transition-[opacity]",uf.value&&"opacity-0 duration-0 delay-0")),uv=tE(()=>"inspector"===l5.value.view),ub=tE(()=>"notifications"===l5.value.view),uw=()=>rp("div",{className:lH("flex flex-1 flex-col","overflow-hidden z-10","rounded-lg","bg-black","opacity-100","transition-[border-radius]","peer-hover/left:rounded-l-none","peer-hover/right:rounded-r-none","peer-hover/top:rounded-t-none","peer-hover/bottom:rounded-b-none"),children:[rp("div",{className:ug,children:[rp(c1,{}),rp("div",{className:lH("relative","flex-1 flex","text-white","bg-[#0A0A0A]","transition-opacity delay-150","overflow-hidden","border-b border-[#222]"),children:[rp(uy,{isOpen:uv,children:rp(sF,{})}),rp(uy,{isOpen:ub,children:rp(uu,{})})]})]}),rp(uh,{})]}),uy=({isOpen:e,children:t})=>rp("div",{className:lH("flex-1","opacity-0","overflow-y-auto overflow-x-hidden","transition-opacity delay-0","pointer-events-none",e.value&&"opacity-100 delay-150 pointer-events-auto"),children:rp("div",{className:"absolute inset-0 flex",children:t})}),ux=(e,t,r)=>e+(t-e)*r,uk={frameInterval:1e3/60,speeds:{fast:.51,slow:.1,off:0}},u_=a$&&window.devicePixelRatio||1,uN=()=>{let e=e7(null),t=e7(null),r=e7(null),n=e7(null),i=e7(null),o=e7(0),a=e7(),l=e7(new Map),s=e7(!1),c=e7(0),d=(e,t,i,o)=>{if(!r.current)return;let a=r.current;t.clearRect(0,0,e.width,e.height),t.strokeStyle="rgba(142, 97, 227, 0.5)",t.fillStyle="rgba(173, 97, 230, 0.10)","locked"===i?t.setLineDash([]):t.setLineDash([4]),t.lineWidth=1,t.fillRect(a.left,a.top,a.width,a.height),t.strokeRect(a.left,a.top,a.width,a.height),((e,t,r,i)=>{var o;if(!i)return;let a=null!=(o=(null==i?void 0:i.type)&&G(i.type))?o:"Unknown";e.save(),e.font="12px system-ui, -apple-system, sans-serif";let l=e.measureText(a).width,s=14*("locked"===r),c=6*("locked"===r),d=t.left,u=t.top-24-4;if(e.fillStyle="rgb(37, 37, 38, .75)",e.beginPath(),e.roundRect(d,u,l+16+s+c,24,3),e.fill(),"locked"===r){let t,r,i,o=d+8,a=u+(24-s)/2+2;e.save(),e.strokeStyle="white",e.fillStyle="white",e.lineWidth=1.5,t=.6*s,r=.5*s,e.beginPath(),e.arc(o+(s-t)/2+t/2,a+r/2,t/2,Math.PI,0,!1),e.stroke(),i=.8*s,e.fillRect(o+(s-i)/2,a+r/2,i,.5*s),e.restore(),n.current={x:o,y:a,width:s,height:s}}else n.current=null;e.fillStyle="white",e.textBaseline="middle";e.fillText(a,d+8+("locked"===r?s+c:0),u+12),e.restore()})(t,a,i,o)},u=async(e,t,n,i)=>{if(!e||!t||!n)return;let{parentCompositeFiber:l}=sU(e),s=await sW(e);l&&s&&((e,t,n,i,l)=>{var s;let u,p,m;if(t.save(),!r.current){r.current=n,d(e,t,i,l),t.restore();return}u=uW.options.value.animationSpeed,p=null!=(s=uk.speeds[u])?s:uk.speeds.off,m=a=>{if(a-c.current<uk.frameInterval){o.current=requestAnimationFrame(m);return}(c.current=a,r.current)?(r.current={left:ux(r.current.left,n.left,p),top:ux(r.current.top,n.top,p),width:ux(r.current.width,n.width,p),height:ux(r.current.height,n.height,p)},d(e,t,i,l),Math.abs(r.current.left-n.left)>.1||Math.abs(r.current.top-n.top)>.1||Math.abs(r.current.width-n.width)>.1||Math.abs(r.current.height-n.height)>.1?o.current=requestAnimationFrame(m):(r.current=n,d(e,t,i,l),cancelAnimationFrame(o.current),t.restore())):cancelAnimationFrame(o.current)},cancelAnimationFrame(o.current),clearTimeout(a.current),o.current=requestAnimationFrame(m),a.current=setTimeout(()=>{cancelAnimationFrame(o.current),r.current=n,d(e,t,i,l),t.restore()},1e3)})(t,n,s,i,l)},p=t=>{if(!e.current||s.current)return;let o=a=>{if(e.current&&"opacity"===a.propertyName&&s.current){var l;let a;e.current.removeEventListener("transitionend",o),(a=(l=e.current).getContext("2d"))&&a.clearRect(0,0,l.width,l.height),r.current=null,n.current=null,i.current=null,l.classList.remove("fade-in"),s.current=!1,null==t||t()}},a=l.current.get("fade-out");a&&(a(),l.current.delete("fade-out")),e.current.addEventListener("transitionend",o),l.current.set("fade-out",()=>{var t;null==(t=e.current)||t.removeEventListener("transitionend",o)}),s.current=!0,e.current.classList.remove("fade-in"),requestAnimationFrame(()=>{var t;null==(t=e.current)||t.classList.add("fade-out")})},m=()=>{e.current&&(s.current=!1,e.current.classList.remove("fade-out"),requestAnimationFrame(()=>{var t;null==(t=e.current)||t.classList.add("fade-in")}))},h=lB(n=>{var o,l;if("inspecting"!==uI.inspectState.peek().kind||!t.current)return;t.current.style.pointerEvents="none";let c=document.elementFromPoint(null!=(o=null==n?void 0:n.clientX)?o:0,null!=(l=null==n?void 0:n.clientY)?l:0);if(t.current.style.removeProperty("pointer-events"),clearTimeout(a.current),c&&c!==e.current){let{parentCompositeFiber:e}=sU(c);if(e){let t=sq(e);if(t)return void(t!==i.current&&(i.current=t,sV.has(t.tagName)?p():m(),uI.inspectState.value={kind:"inspecting",hoveredDomElement:t}))}}r.current&&e.current&&!s.current&&p()},32),f=(e,t)=>{let r=n.current;if(!r)return!1;let i=t.getBoundingClientRect(),o=t.width/i.width,a=t.height/i.height,l=(e.clientX-i.left)*o,s=(e.clientY-i.top)*a,c=l/u_,d=s/u_;return c>=r.x&&c<=r.x+r.width&&d>=r.y&&d<=r.y+r.height},g=r=>{if(r.__reactScanSyntheticEvent)return;let n=uI.inspectState.peek(),o=e.current;if(o&&t.current){if(f(r,o)){r.preventDefault(),r.stopPropagation(),"focused"===n.kind&&(uI.inspectState.value={kind:"inspecting",hoveredDomElement:n.focusedDomElement});return}"inspecting"===n.kind&&(e=>{var t,r;let n=["react-scan-inspect-element","react-scan-power"];if(e.target instanceof HTMLElement&&n.includes(e.target.id))return;let o=null==(t=i.current)?void 0:t.tagName;if(o&&sV.has(o))return;e.preventDefault(),e.stopPropagation();let a=null!=(r=i.current)?r:document.elementFromPoint(e.clientX,e.clientY);if(!a)return;let l=e.composedPath().at(0);if(l instanceof HTMLElement&&n.includes(l.id)){let t=new MouseEvent(e.type,e);t.__reactScanSyntheticEvent=!0,l.dispatchEvent(t);return}let{parentCompositeFiber:s}=sU(a);if(!s)return;let c=sq(s);if(!c){i.current=null,uI.inspectState.value={kind:"inspect-off"};return}uI.inspectState.value={kind:"focused",focusedDomElement:c,fiber:s}})(r)}},v=t=>{var n;if("Escape"!==t.key)return;let o=uI.inspectState.peek();if(e.current&&(null==(n=document.activeElement)?void 0:n.id)!=="react-scan-root"&&(l5.value={view:"none"},"focused"===o.kind||"inspecting"===o.kind))switch(t.preventDefault(),t.stopPropagation(),o.kind){case"focused":m(),r.current=null,i.current=o.focusedDomElement,uI.inspectState.value={kind:"inspecting",hoveredDomElement:o.focusedDomElement};break;case"inspecting":p(()=>{lZ.value=!1,uI.inspectState.value={kind:"inspect-off"}})}},b=(e,t)=>{let r=e.getBoundingClientRect();e.width=r.width*u_,e.height=r.height*u_,t.scale(u_,u_),t.save()},w=()=>{let t=uI.inspectState.peek(),n=e.current;if(!n)return;let i=null==n?void 0:n.getContext("2d");i&&(cancelAnimationFrame(o.current),clearTimeout(a.current),b(n,i),r.current=null,"focused"===t.kind&&t.focusedDomElement?u(t.focusedDomElement,n,i,"locked"):"inspecting"===t.kind&&t.hoveredDomElement&&u(t.hoveredDomElement,n,i,"inspecting"))},y=t=>{let r=uI.inspectState.peek(),n=e.current;n&&("inspecting"===r.kind||f(t,n))&&(t.preventDefault(),t.stopPropagation(),t.stopImmediatePropagation())};return e4(()=>{let n=e.current;if(!n)return;let s=null==n?void 0:n.getContext("2d");if(!s)return;b(n,s);let c=uI.inspectState.subscribe(e=>{((e,n,a)=>{var s;let c;switch(null==(s=l.current.get(e.kind))||s(),t.current&&"inspecting"!==e.kind&&(t.current.style.pointerEvents="none"),o.current&&cancelAnimationFrame(o.current),e.kind){case"inspect-off":p();return;case"inspecting":u(e.hoveredDomElement,n,a,"inspecting");break;case"focused":if(!e.focusedDomElement)return;i.current!==e.focusedDomElement&&(i.current=e.focusedDomElement),l5.value={view:"inspector"},u(e.focusedDomElement,n,a,"locked"),(c=uI.lastReportTime.subscribe(()=>{if(o.current&&r.current){let{parentCompositeFiber:t}=sU(e.focusedDomElement);t&&u(e.focusedDomElement,n,a,"locked")}}))&&l.current.set(e.kind,c)}})(e,n,s)});return window.addEventListener("scroll",w,{passive:!0}),window.addEventListener("resize",w,{passive:!0}),document.addEventListener("pointermove",h,{passive:!0,capture:!0}),document.addEventListener("pointerdown",y,{capture:!0}),document.addEventListener("click",g,{capture:!0}),document.addEventListener("keydown",v,{capture:!0}),()=>{for(let e of l.current.values())null==e||e();c(),window.removeEventListener("scroll",w),window.removeEventListener("resize",w),document.removeEventListener("pointermove",h,{capture:!0}),document.removeEventListener("click",g,{capture:!0}),document.removeEventListener("pointerdown",y,{capture:!0}),document.removeEventListener("keydown",v,{capture:!0}),o.current&&cancelAnimationFrame(o.current),clearTimeout(a.current)}},[]),rp(eC,{children:[rp("div",{ref:t,className:lH("fixed top-0 left-0 w-screen h-screen","z-[214748365]"),style:{pointerEvents:"none"}}),rp("canvas",{ref:e,dir:"ltr",className:lH("react-scan-inspector-overlay","fixed top-0 left-0 w-screen h-screen","pointer-events-none","z-[214748367]")})]})},uS=class{constructor(e,t,r){aR(this,"width",e),aR(this,"height",t),aR(this,"safeArea",r),aR(this,"maxWidth"),aR(this,"maxHeight"),this.maxWidth=e-r.left-r.right,this.maxHeight=t-r.top-r.bottom}rightEdge(e){return this.width-e-this.safeArea.right}bottomEdge(e){return this.height-e-this.safeArea.bottom}isFullWidth(e){return e>=this.maxWidth}isFullHeight(e){return e>=this.maxHeight}},uE=()=>{let e,t=window.innerWidth,r=window.innerHeight,n=lK();return w&&w.width===t&&w.height===r&&(e=w.safeArea,e.top===n.top&&e.right===n.right&&e.bottom===n.bottom&&e.left===n.left)?w:w=new uS(t,r,n)},uC=(e,t,r)=>{let n,i,o="rtl"===getComputedStyle(document.body).direction,a=window.innerWidth,l=window.innerHeight,s=lK(),c=550===t,d=c?t:Math.min(t,a-s.left-s.right),u=c?r:Math.min(r,l-s.top-s.bottom),p=s.left,m=a-d-s.right,h=s.top,f=l-u-s.bottom,g=-s.right,v=-(a-d-s.left);switch(e){case"top-right":n=o?g:m,i=h;break;case"bottom-right":n=o?g:m,i=f;break;case"bottom-left":n=o?v:p,i=f;break;case"top-left":n=o?v:p,i=h;break;default:n=p,i=h}return c&&(n=o?Math.min(g,Math.max(n,v)):Math.max(p,Math.min(n,m)),i=Math.max(h,Math.min(i,f))),{x:n,y:i}},uT=(e,t,r)=>{let n=r?uE().maxWidth:uE().maxHeight;return Math.min(Math.max(r?550:400,e+t),n)},uA=({position:e})=>{let t=e7(null),r=e7(null),n=e7(null),i=e7(null);return e4(()=>{let o=t.current;if(!o)return;let a=()=>{var t,r,n;o.classList.remove("pointer-events-none");let i="focused"===uI.inspectState.value.kind,a="none"!==l5.value.view;(i||a)&&(t=l1.value.corner,r=l1.value.dimensions.isFullWidth,n=l1.value.dimensions.isFullHeight,r&&n||(r||n?r?e!==t.split("-")[0]:!!n&&e!==t.split("-")[1]:((e,t)=>{let[r,n]=t.split("-");return e!==r&&e!==n})(e,t)))?o.classList.remove("hidden","pointer-events-none","opacity-0"):o.classList.add("hidden","pointer-events-none","opacity-0")},l=l1.subscribe(e=>{(null===r.current||null===n.current||null===i.current||e.dimensions.width!==r.current||e.dimensions.height!==n.current||e.corner!==i.current)&&(a(),r.current=e.dimensions.width,n.current=e.dimensions.height,i.current=e.corner)}),s=uI.inspectState.subscribe(()=>{a()});return()=>{l(),s(),r.current=null,n.current=null,i.current=null}},[]),rp("div",{ref:t,onPointerDown:e8(t=>{t.preventDefault(),t.stopPropagation();let r=lQ.value;if(!r)return;let n=r.style,{dimensions:i}=l1.value,o=t.clientX,a=t.clientY,l=i.width,s=i.height,c=i.position;l1.value={...l1.value,dimensions:{...i,isFullWidth:!1,isFullHeight:!1,width:l,height:s,position:c}};let d=null,u=t=>{d||(n.transition="none",d=requestAnimationFrame(()=>{let{newSize:r,newPosition:i}=((e,t,r,n,i)=>{let o="rtl"===getComputedStyle(document.body).direction,a=lK(),l=window.innerWidth-a.left-a.right,s=window.innerHeight-a.top-a.bottom,c=t.width,d=t.height,u=r.x,p=r.y;if(o&&e.includes("right")){let e=-r.x+t.width-a.right;c=Math.min(l,Math.max(550,Math.min(t.width+n,e))),u=r.x+(c-t.width)}if(o&&e.includes("left")){let e=window.innerWidth-r.x-a.left;c=Math.min(l,Math.max(550,Math.min(t.width-n,e)))}if(!o&&e.includes("right")){let e=window.innerWidth-r.x-a.right;c=Math.min(l,Math.max(550,Math.min(t.width+n,e)))}if(!o&&e.includes("left")){let e=r.x+t.width-a.left;c=Math.min(l,Math.max(550,Math.min(t.width-n,e))),u=r.x-(c-t.width)}if(e.includes("bottom")){let e=window.innerHeight-r.y-a.bottom;d=Math.min(s,Math.max(400,Math.min(t.height+i,e)))}if(e.includes("top")){let e=r.y+t.height-a.top;d=Math.min(s,Math.max(400,Math.min(t.height-i,e))),p=r.y-(d-t.height)}let m=a.left,h=window.innerWidth-a.right-c,f=a.top,g=window.innerHeight-a.bottom-d,v=-a.right,b=-(window.innerWidth-c-a.left);return{newSize:{width:c,height:d},newPosition:{x:u=o?Math.min(v,Math.max(u,b)):Math.max(m,Math.min(u,h)),y:p=Math.max(f,Math.min(p,g))}}})(e,{width:l,height:s},c,t.clientX-o,t.clientY-a);n.transform=`translate3d(${i.x}px, ${i.y}px, 0)`,n.width=`${r.width}px`,n.height=`${r.height}px`;let u=Math.min(Math.floor(r.width-120),Math.max(240,l1.value.componentsTree.width));l1.value={...l1.value,dimensions:{isFullWidth:!1,isFullHeight:!1,width:r.width,height:r.height,position:i},componentsTree:{...l1.value.componentsTree,width:u}},d=null}))},p=()=>{d&&(cancelAnimationFrame(d),d=null),document.removeEventListener("pointermove",u),document.removeEventListener("pointerup",p);let{dimensions:e,corner:t}=l1.value,i=uE(),o=i.isFullWidth(e.width),a=i.isFullHeight(e.height),l=t;(o&&a||o||a)&&(l=(e=>{let t=uE(),r={"top-left":Math.hypot(e.x,e.y),"top-right":Math.hypot(t.maxWidth-e.x,e.y),"bottom-left":Math.hypot(e.x,t.maxHeight-e.y),"bottom-right":Math.hypot(t.maxWidth-e.x,t.maxHeight-e.y)},n="top-left";for(let e in r)r[e]<r[n]&&(n=e);return n})(e.position));let s=uC(l,e.width,e.height),c=()=>{r.removeEventListener("transitionend",c)};r.addEventListener("transitionend",c),n.transform=`translate3d(${s.x}px, ${s.y}px, 0)`,l1.value={...l1.value,corner:l,dimensions:{isFullWidth:o,isFullHeight:a,width:e.width,height:e.height,position:s},lastDimensions:{isFullWidth:o,isFullHeight:a,width:e.width,height:e.height,position:s}},lq(aI,{corner:l,dimensions:l1.value.dimensions,lastDimensions:l1.value.lastDimensions,componentsTree:l1.value.componentsTree})};document.addEventListener("pointermove",u,{passive:!0}),document.addEventListener("pointerup",p)},[]),onDblClick:e8(t=>{t.preventDefault(),t.stopPropagation();let r=lQ.value;if(!r)return;let n=r.style,{dimensions:i,corner:o}=l1.value,a=uE(),l=a.isFullWidth(i.width),s=a.isFullHeight(i.height),c=l&&s,d=(l||s)&&!c,u=i.width,p=i.height,m=((e,t,r,n,i)=>{if(r){if("top-left"===e)return"bottom-right";if("top-right"===e)return"bottom-left";if("bottom-left"===e)return"top-right";if("bottom-right"===e)return"top-left";let[r,n]=t.split("-");if("left"===e)return`${r}-right`;if("right"===e)return`${r}-left`;if("top"===e)return`bottom-${n}`;if("bottom"===e)return`top-${n}`}if(n){if("left"===e)return`${t.split("-")[0]}-right`;if("right"===e)return`${t.split("-")[0]}-left`}if(i){if("top"===e)return`bottom-${t.split("-")[1]}`;if("bottom"===e)return`top-${t.split("-")[1]}`}return t})(e,o,c,l,s);"left"===e||"right"===e?(u=l?i.width:a.maxWidth,d&&(u=l?550:a.maxWidth)):(p=s?i.height:a.maxHeight,d&&(p=s?400:a.maxHeight)),c&&("left"===e||"right"===e?u=550:p=400);let h=uC(m,u,p),f={isFullWidth:a.isFullWidth(u),isFullHeight:a.isFullHeight(p),width:u,height:p,position:h},g=Math.floor(u-275),v=l1.value.componentsTree.width,b=Math.floor(.3*u),w=l?240:"left"!==e&&"right"!==e||l?Math.min(g,Math.max(240,v)):Math.min(g,Math.max(240,b));requestAnimationFrame(()=>{l1.value={corner:m,dimensions:f,lastDimensions:i,componentsTree:{...l1.value.componentsTree,width:w}},n.transition="all 0.25s cubic-bezier(0, 0, 0.2, 1)",n.width=`${u}px`,n.height=`${p}px`,n.transform=`translate3d(${h.x}px, ${h.y}px, 0)`}),lq(aI,{corner:m,dimensions:f,lastDimensions:i,componentsTree:{...l1.value.componentsTree,width:w}})},[]),className:lH("absolute z-50","flex items-center justify-center","group","transition-colors select-none","peer",{"resize-left peer/left":"left"===e,"resize-right peer/right z-10":"right"===e,"resize-top peer/top":"top"===e,"resize-bottom peer/bottom":"bottom"===e}),children:rp("span",{className:"resize-line-wrapper",children:rp("span",{className:"resize-line",children:rp(aD,{name:"icon-ellipsis",size:18,className:lH("text-neutral-400",("left"===e||"right"===e)&&"rotate-90")})})})})},uz={horizontal:{width:20,height:48},vertical:{width:48,height:20}},uM=()=>{let e=e7(null),t=e7(!1),r=e7(0),n=e7(0),i=e7(!1),o=e8((o=!0)=>{let a,l;if(!e.current)return;let{corner:s}=l1.value;if(l3.value){let e=uz[l3.value.orientation||"horizontal"];a=e.width,l=e.height}else if(t.current){let e=l1.value.lastDimensions;a=uT(e.width,0,!0),l=uT(e.height,0,!1),i.current&&(i.current=!1)}else a=r.current,l=n.current;let c=uC(s,a,l);if(l3.value){let{corner:e,orientation:t="horizontal"}=l3.value,r=uz[t],n=lK();switch(e){case"top-left":c="horizontal"===t?{x:-1,y:n.top}:{x:n.left,y:-1};break;case"bottom-left":c="horizontal"===t?{x:-1,y:window.innerHeight-r.height-n.bottom}:{x:n.left,y:window.innerHeight-r.height+1};break;case"top-right":c="horizontal"===t?{x:window.innerWidth-r.width+1,y:n.top}:{x:window.innerWidth-r.width-n.right,y:-1};break;default:c="horizontal"===t?{x:window.innerWidth-r.width+1,y:window.innerHeight-r.height-n.bottom}:{x:window.innerWidth-r.width-n.right,y:window.innerHeight-r.height+1}}}let d=a<550||l<400,u=e.current,p=u.style,m=null,h=()=>{l2(),u.removeEventListener("transitionend",h),m&&(cancelAnimationFrame(m),m=null)};u.addEventListener("transitionend",h),p.transition="all 0.25s cubic-bezier(0, 0, 0.2, 1)",m=requestAnimationFrame(()=>{p.width=`${a}px`,p.height=`${l}px`,p.transform=`translate3d(${c.x}px, ${c.y}px, 0)`,m=null});let f=lK(),g={isFullWidth:a>=window.innerWidth-f.left-f.right,isFullHeight:l>=window.innerHeight-f.top-f.bottom,width:a,height:l,position:c};l1.value={corner:s,dimensions:g,lastDimensions:t?l1.value.lastDimensions:a>r.current?g:l1.value.lastDimensions,componentsTree:l1.value.componentsTree},o&&!d&&lq(aI,{corner:l1.value.corner,dimensions:l1.value.dimensions,lastDimensions:l1.value.lastDimensions,componentsTree:l1.value.componentsTree}),l2()},[]),a=e8(t=>{if(t.target.closest("button, a, input, textarea, select, pre, [contenteditable], [data-react-scan-selectable]")||(t.preventDefault(),!e.current))return;let r=e.current,n=r.style,{dimensions:i}=l1.value,a=t.clientX,l=t.clientY,s=i.position.x,c=i.position.y,d=s,u=c,p=null,m=!1,h=a,f=l,g=e=>{p||(m=!0,h=e.clientX,f=e.clientY,p=requestAnimationFrame(()=>{let e=h-a,t=f-l;d=Number(s)+e,u=Number(c)+t,n.transition="none",n.transform=`translate3d(${d}px, ${u}px, 0)`;let r=d+i.width,m=u+i.height,b=Math.max(0,-d),w=Math.max(0,r-window.innerWidth),y=Math.max(0,-u),x=Math.max(0,m-window.innerHeight),k=Math.min(i.width,b+w),_=Math.min(i.height,y+x),N=k*i.height+_*i.width-k*_>.35*(i.width*i.height);if(!N&&uW.options.value.showFPS){let e=d+i.width;N=e<=0||e-100>=window.innerWidth||u+i.height<=0||u>=window.innerHeight}if(N){let e,t=d+i.width/2,r=u+i.height/2,n=window.innerWidth/2,a=window.innerHeight/2;e=t<n?r<a?"top-left":"bottom-left":r<a?"top-right":"bottom-right";let l=Math.max(b,w),s=Math.max(y,x);l1.value={...l1.value,corner:e,lastDimensions:{...i,position:uC(e,i.width,i.height)}};let c={corner:e,orientation:l>s?"horizontal":"vertical"};l3.value=c,lq(aW,c),lq(aI,l1.value),o(!1),document.removeEventListener("pointermove",g),document.removeEventListener("pointerup",v),p&&(cancelAnimationFrame(p),p=null)}p=null}))},v=()=>{if(!r)return;p&&(cancelAnimationFrame(p),p=null),document.removeEventListener("pointermove",g),document.removeEventListener("pointerup",v);let e=Math.abs(h-a),t=Math.abs(f-l),o=Math.sqrt(e*e+t*t);if(!m||o<60)return;let b=((e,t,r,n,i=100)=>{let o=void 0!==r?e-r:0,a=void 0!==n?t-n:0,l=window.innerWidth/2,s=window.innerHeight/2,c=o>i,d=a>i;if(c||o<-i){let e=t>s;return c?e?"bottom-right":"top-right":e?"bottom-left":"top-left"}if(d||a<-i){let t=e>l;return d?t?"bottom-right":"bottom-left":t?"top-right":"top-left"}return e>l?t>s?"bottom-right":"top-right":t>s?"bottom-left":"top-left"})(h,f,a,l,"focused"===uI.inspectState.value.kind?80:40);if(b===l1.value.corner){n.transition="transform 0.25s cubic-bezier(0, 0, 0.2, 1)";let e=l1.value.dimensions.position;requestAnimationFrame(()=>{n.transform=`translate3d(${e.x}px, ${e.y}px, 0)`});return}let w=uC(b,i.width,i.height);if(d===s&&u===c)return;let y=()=>{n.transition="none",l2(),r.removeEventListener("transitionend",y),p&&(cancelAnimationFrame(p),p=null)};r.addEventListener("transitionend",y),n.transition="transform 0.25s cubic-bezier(0, 0, 0.2, 1)",requestAnimationFrame(()=>{n.transform=`translate3d(${w.x}px, ${w.y}px, 0)`}),l1.value={corner:b,dimensions:{isFullWidth:i.isFullWidth,isFullHeight:i.isFullHeight,width:i.width,height:i.height,position:w},lastDimensions:l1.value.lastDimensions,componentsTree:l1.value.componentsTree},lq(aI,{corner:b,dimensions:l1.value.dimensions,lastDimensions:l1.value.lastDimensions,componentsTree:l1.value.componentsTree})};document.addEventListener("pointermove",g),document.addEventListener("pointerup",v)},[]),l=e8(t=>{if(t.preventDefault(),!e.current||!l3.value)return;let{corner:n,orientation:i="horizontal"}=l3.value,a=t.clientX,l=t.clientY,s=!1,c=t=>{if(s)return;let u=t.clientX-a,p=t.clientY-l,m=!1;"horizontal"===i?n.endsWith("left")&&u>50?m=!0:n.endsWith("right")&&u<-50&&(m=!0):n.startsWith("top")&&p>50?m=!0:n.startsWith("bottom")&&p<-50&&(m=!0),m&&(s=!0,l3.value=null,lq(aW,null),0===r.current&&e.current?requestAnimationFrame(()=>{if(e.current){e.current.style.width="min-content",r.current=e.current.offsetWidth||300;let n=l1.value.lastDimensions,i=uT(n.width,0,!0),a=uT(n.height,0,!1),l=t.clientX-i/2,s=t.clientY-a/2,c=lK();l=Math.max(c.left,Math.min(l,window.innerWidth-i-c.right)),s=Math.max(c.top,Math.min(s,window.innerHeight-a-c.bottom)),l1.value={...l1.value,dimensions:{...l1.value.dimensions,position:{x:l,y:s}}},o(!0),l5.value=lV(aU)||{view:"none"},setTimeout(()=>{if(e.current){let r=new PointerEvent("pointerdown",{clientX:t.clientX,clientY:t.clientY,pointerId:t.pointerId,bubbles:!0});e.current.dispatchEvent(r)}},100)}}):(o(!0),l5.value=lV(aU)||{view:"none"}),document.removeEventListener("pointermove",c),document.removeEventListener("pointerup",d))},d=()=>{document.removeEventListener("pointermove",c),document.removeEventListener("pointerup",d)};document.addEventListener("pointermove",c),document.addEventListener("pointerup",d)},[]);e4(()=>{if(!e.current)return;lG(aU),l3.value?(n.current=36,r.current=0):(e.current.style.width="min-content",n.current=36,r.current=e.current.offsetWidth);let a=lK();e.current.style.maxWidth=`calc(100vw - ${a.left+a.right}px)`,e.current.style.maxHeight=`calc(100vh - ${a.top+a.bottom}px)`,o(),"focused"===uI.inspectState.value.kind||l3.value||i.current||(l1.value={...l1.value,dimensions:{isFullWidth:!1,isFullHeight:!1,width:r.current,height:n.current,position:l1.value.dimensions.position}}),lQ.value=e.current;let l=l1.subscribe(t=>{if(!e.current)return;let{x:r,y:n}=t.dimensions.position,{width:i,height:o}=t.dimensions,a=e.current;requestAnimationFrame(()=>{a.style.transform=`translate3d(${r}px, ${n}px, 0)`,a.style.width=`${i}px`,a.style.height=`${o}px`})}),s=l5.subscribe(e=>{t.current="none"!==e.view,o(),l3.value||("none"!==e.view?lq(aU,e):lG(aU))}),c=uI.inspectState.subscribe(e=>{t.current="focused"===e.kind,o()}),d=()=>{o(!0)};return window.addEventListener("resize",d,{passive:!0}),()=>{window.removeEventListener("resize",d),s(),c(),l(),lq(aI,{...l0(),corner:l1.value.corner})}},[]);let[s,c]=e5(!1);e4(()=>{c(!0)},[]);let d=l3.value,u="";if(d){let{orientation:e="horizontal",corner:t}=d;u="horizontal"===e?(null==t?void 0:t.endsWith("right"))?"rotate-180":"":(null==t?void 0:t.startsWith("bottom"))?"-rotate-90":"rotate-90"}return rp(eC,{children:[rp(uN,{}),rp(uR.Provider,{value:e.current,children:rp("div",{id:"react-scan-toolbar",dir:"ltr",ref:e,onPointerDown:d?l:a,className:lH("fixed inset-0",d?(()=>{let{orientation:e="horizontal",corner:t}=d;return"horizontal"===e?(null==t?void 0:t.endsWith("right"))?"rounded-tl-lg rounded-bl-lg shadow-lg":"rounded-tr-lg rounded-br-lg shadow-lg":(null==t?void 0:t.startsWith("bottom"))?"rounded-tl-lg rounded-tr-lg shadow-lg":"rounded-bl-lg rounded-br-lg shadow-lg"})():"rounded-lg shadow-lg","flex flex-col","font-mono text-[13px]","user-select-none","opacity-0",d?"cursor-pointer":"cursor-move","z-[124124124124]","animate-fade-in animation-duration-300 animation-delay-300","will-change-transform","[touch-action:none]"),style:{WebkitAppRegion:"no-drag"},children:d?rp("button",{type:"button",onClick:()=>{l3.value=null,lq(aW,null),0===r.current&&e.current&&requestAnimationFrame(()=>{e.current&&(e.current.style.width="min-content",r.current=e.current.offsetWidth||300,o(!0))}),l5.value=lV(aU)||{view:"none"}},className:"flex items-center justify-center w-full h-full text-white",title:"Expand toolbar",children:rp(aD,{name:"icon-chevron-right",size:16,className:lH("transition-transform",u)})}):rp(eC,{children:[rp(uA,{position:"top"}),rp(uA,{position:"bottom"}),rp(uA,{position:"left"}),rp(uA,{position:"right"}),rp(uw,{})]})})})]})},uR=eU(null),u$=()=>rp("svg",{xmlns:"http://www.w3.org/2000/svg",style:"display: none;",children:[rp("title",{children:"React Scan Icons"}),rp("symbol",{id:"icon-inspect",viewBox:"0 0 24 24",fill:"none","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[rp("path",{d:"M12.034 12.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.943l-3.444 1.068a1 1 0 0 0-.66.66l-1.067 3.443a.5.5 0 0 1-.943.033z"}),rp("path",{d:"M5 3a2 2 0 0 0-2 2"}),rp("path",{d:"M19 3a2 2 0 0 1 2 2"}),rp("path",{d:"M5 21a2 2 0 0 1-2-2"}),rp("path",{d:"M9 3h1"}),rp("path",{d:"M9 21h2"}),rp("path",{d:"M14 3h1"}),rp("path",{d:"M3 9v1"}),rp("path",{d:"M21 9v2"}),rp("path",{d:"M3 14v1"})]}),rp("symbol",{id:"icon-focus",viewBox:"0 0 24 24",fill:"none","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[rp("path",{d:"M12.034 12.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.943l-3.444 1.068a1 1 0 0 0-.66.66l-1.067 3.443a.5.5 0 0 1-.943.033z"}),rp("path",{d:"M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6"})]}),rp("symbol",{id:"icon-next",viewBox:"0 0 24 24",fill:"none","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:rp("path",{d:"M6 9h6V5l7 7-7 7v-4H6V9z"})}),rp("symbol",{id:"icon-previous",viewBox:"0 0 24 24",fill:"none","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:rp("path",{d:"M18 15h-6v4l-7-7 7-7v4h6v6z"})}),rp("symbol",{id:"icon-close",viewBox:"0 0 24 24",fill:"none","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[rp("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),rp("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]}),rp("symbol",{id:"icon-replay",viewBox:"0 0 24 24",fill:"none","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[rp("path",{d:"M3 7V5a2 2 0 0 1 2-2h2"}),rp("path",{d:"M17 3h2a2 2 0 0 1 2 2v2"}),rp("path",{d:"M21 17v2a2 2 0 0 1-2 2h-2"}),rp("path",{d:"M7 21H5a2 2 0 0 1-2-2v-2"}),rp("circle",{cx:"12",cy:"12",r:"1"}),rp("path",{d:"M18.944 12.33a1 1 0 0 0 0-.66 7.5 7.5 0 0 0-13.888 0 1 1 0 0 0 0 .66 7.5 7.5 0 0 0 13.888 0"})]}),rp("symbol",{id:"icon-ellipsis",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[rp("circle",{cx:"12",cy:"12",r:"1"}),rp("circle",{cx:"19",cy:"12",r:"1"}),rp("circle",{cx:"5",cy:"12",r:"1"})]}),rp("symbol",{id:"icon-copy",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[rp("rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2"}),rp("path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"})]}),rp("symbol",{id:"icon-check",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:rp("path",{d:"M20 6 9 17l-5-5"})}),rp("symbol",{id:"icon-chevron-right",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:rp("path",{d:"m9 18 6-6-6-6"})}),rp("symbol",{id:"icon-settings",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[rp("path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"}),rp("circle",{cx:"12",cy:"12",r:"3"})]}),rp("symbol",{id:"icon-flame",viewBox:"0 0 24 24",children:rp("path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"})}),rp("symbol",{id:"icon-function",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[rp("rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}),rp("path",{d:"M9 17c2 0 2.8-1 2.8-2.8V10c0-2 1-3.3 3.2-3"}),rp("path",{d:"M9 11.2h5.7"})]}),rp("symbol",{id:"icon-triangle-alert",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[rp("path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"}),rp("path",{d:"M12 9v4"}),rp("path",{d:"M12 17h.01"})]}),rp("symbol",{id:"icon-gallery-horizontal-end",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[rp("path",{d:"M2 7v10"}),rp("path",{d:"M6 5v14"}),rp("rect",{width:"12",height:"18",x:"10",y:"3",rx:"2"})]}),rp("symbol",{id:"icon-search",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[rp("circle",{cx:"11",cy:"11",r:"8"}),rp("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"})]}),rp("symbol",{id:"icon-lock",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[rp("rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2"}),rp("path",{d:"M7 11V7a5 5 0 0 1 10 0v4"})]}),rp("symbol",{id:"icon-lock-open",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[rp("rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2"}),rp("path",{d:"M7 11V7a5 5 0 0 1 9.9-1"})]}),rp("symbol",{id:"icon-sanil",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[rp("path",{d:"M2 13a6 6 0 1 0 12 0 4 4 0 1 0-8 0 2 2 0 0 0 4 0"}),rp("circle",{cx:"10",cy:"13",r:"8"}),rp("path",{d:"M2 21h12c4.4 0 8-3.6 8-8V7a2 2 0 1 0-4 0v6"}),rp("path",{d:"M18 3 19.1 5.2"})]})]}),uj=class extends eT{constructor(){super(...arguments),aR(this,"state",{hasError:!1,error:null}),aR(this,"handleReset",()=>{this.setState({hasError:!1,error:null})})}static getDerivedStateFromError(e){return{hasError:!0,error:e}}render(){var e;return this.state.hasError?rp("div",{className:"fixed bottom-4 right-4 z-[124124124124]",children:rp("div",{className:"p-3 bg-black rounded-lg shadow-lg w-80",children:[rp("div",{className:"flex items-center gap-2 mb-2 text-red-400 text-sm font-medium",children:[rp(aD,{name:"icon-flame",className:"text-red-500",size:14}),"React Scan ran into a problem"]}),rp("div",{className:"p-2 bg-black rounded font-mono text-xs text-red-300 mb-3 break-words",children:(null==(e=this.state.error)?void 0:e.message)||JSON.stringify(this.state.error)}),rp("button",{type:"button",onClick:this.handleReset,className:"px-3 py-1.5 bg-red-500 hover:bg-red-600 text-white rounded text-xs font-medium transition-colors flex items-center justify-center gap-1.5",children:"Restart"})]})}):this.props.children}},uF=!1,uO=["top","right","bottom","left"],uP=e=>{if(lX(e))return{ok:!0,value:e};if(!lY(e))return{ok:!1,error:`- safeArea must be a non-negative number or { top?, right?, bottom?, left? }. Got "${JSON.stringify(e)}"`};let t={};for(let r of uO){let n=e[r];if(void 0!==n){if(!lX(n))return{ok:!1,error:`- safeArea.${r} must be a non-negative number. Got "${JSON.stringify(n)}"`};t[r]=n}}return{ok:!0,value:t}},uL=null,uD=null,uI={wasDetailsOpen:tx(!0),isInIframe:tx(a$&&window.self!==window.top),inspectState:tx({kind:"uninitialized"}),fiberRoots:new Set,reportData:new Map,legacyReportData:new Map,lastReportTime:tx(0),interactionListeningForRenders:null,changesListeners:new Map},uW={instrumentation:null,componentAllowList:null,options:tx({enabled:!0,log:!1,showToolbar:!0,animationSpeed:"fast",dangerouslyForceRunInProduction:!1,showFPS:!0,showNotificationCount:!0,allowInIframe:!1}),runInAllEnvironments:!1,onRender:null,Store:uI,version:"0.5.7"};a$&&window.__REACT_SCAN_EXTENSION__&&(window.__REACT_SCAN_VERSION__=uW.version);var uU=e=>{let t=[],r={};for(let n in e){let i=e[n];switch(n){case"enabled":case"log":case"showToolbar":case"showNotificationCount":case"dangerouslyForceRunInProduction":case"showFPS":case"allowInIframe":case"useOffscreenCanvasWorker":"boolean"!=typeof i?t.push(`- ${n} must be a boolean. Got "${i}"`):r[n]=i;break;case"animationSpeed":["slow","fast","off"].includes(i)?r[n]=i:t.push(`- Invalid animation speed "${i}". Using default "fast"`);break;case"safeArea":{let e=uP(i);e.ok?r.safeArea=e.value:t.push(e.error);break}case"onCommitStart":"function"!=typeof i?t.push(`- ${n} must be a function. Got "${i}"`):r.onCommitStart=i;break;case"onCommitFinish":"function"!=typeof i?t.push(`- ${n} must be a function. Got "${i}"`):r.onCommitFinish=i;break;case"onRender":"function"!=typeof i?t.push(`- ${n} must be a function. Got "${i}"`):r.onRender=i;break;default:t.push(`- Unknown option "${n}"`)}}return t.length>0&&console.warn(`[React Scan] Invalid options:
${t.join("\n")}`),r},uH=null,uB=()=>{if(!1===uH)return!1;null!=y||(y=F());let e=Array.from(y.renderers.values());if(0===e.length)return null;for(let t of e)if("production"!==J(t))return uH=!1,!1;return!0},uV=e=>{var t,r;let n,i,o,a,l,s,c,d,u,p,m,h,f,g,w;null==(t=window.reactScanCleanupListeners)||t.call(window);let y=(n=(e=>{let t;null==v||v(),t=()=>{document.hidden&&(dd=Date.now())},document.addEventListener("visibilitychange",t),v=()=>{document.removeEventListener("visibilitychange",t)};let r=new Map,n=new Map,i=t=>{if(!t.interactionId)return;if(t.interactionId&&t.target&&!n.has(t.interactionId)&&n.set(t.interactionId,t.target),t.target){let e=t.target;for(;e;){if("react-scan-toolbar-root"===e.id||"react-scan-root"===e.id)return;e=e.parentElement}}let i=r.get(t.interactionId);if(i)t.duration>i.latency?(i.entries=[t],i.latency=t.duration):t.duration===i.latency&&t.startTime===i.entries[0].startTime&&i.entries.push(t);else{var o;let n=["pointerup","click"].includes(o=t.name)?"pointer":(o.includes("key"),["keydown","keyup"].includes(o))?"keyboard":null;if(!n)return;let i={id:t.interactionId,latency:t.duration,entries:[t],target:t.target,type:n,startTime:t.startTime,endTime:Date.now(),processingStart:t.processingStart,processingEnd:t.processingEnd,duration:t.duration,inputDelay:t.processingStart-t.startTime,processingDuration:t.processingEnd-t.processingStart,presentationDelay:t.duration-(t.processingEnd-t.startTime),timestamp:Date.now(),timeSinceTabInactive:"never-hidden"===dd?"never-hidden":Date.now()-dd,visibilityState:document.visibilityState,timeOrigin:performance.timeOrigin,referrer:document.referrer};r.set(i.id,i),du||(du=requestAnimationFrame(()=>{requestAnimationFrame(()=>{e(r.get(i.id)),du=null})}))}},o=new PerformanceObserver(e=>{let t=e.getEntries();for(let e=0,r=t.length;e<r;e++)i(t[e])});try{o.observe({type:"event",buffered:!0,durationThreshold:16}),o.observe({type:"first-input",buffered:!0})}catch{}return()=>o.disconnect()})(e=>{c8.publish({kind:"entry-received",entry:e},"recording")}),i=e=>{b=e.composedPath().map(e=>e.id).filter(Boolean).includes("react-scan-toolbar")},document.addEventListener("mouseover",i),dS=i,o=()=>{dS&&document.removeEventListener("mouseover",dS)},a=()=>{d_=performance.now(),dN=performance.timeOrigin},document.addEventListener("visibilitychange",a),l=()=>{document.removeEventListener("visibilitychange",a)},d=function e(){let t=null;dx=null,t=dg(dx={});let r=performance.timeOrigin,n=performance.now();return s=requestAnimationFrame(()=>{c=setTimeout(()=>{let i=performance.now(),o=i-n,a=performance.timeOrigin;dE.push(i+a);let l=dE.filter(e=>i+a-e<=1e3),s=l.length;dE=l;let c=null!==d_&&null!==dN?i+a-(dN+d_)<100:null,d=null!==b&&b;!(o>150)||c||"visible"!==document.visibilityState||d||dk.getState().actions.addEvent({kind:"long-render",id:aP(),data:{endAt:a+i,startAt:n+r,meta:{fiberRenders:dx,latency:o,fps:s}}}),d_=null,dN=null,null==t||t(),e()},0)}),t}(),u=()=>{d(),cancelAnimationFrame(s),clearTimeout(c)},m=dm("pointer",{onComplete:p=async(e,t,r)=>{dk.getState().actions.addEvent({kind:"interaction",id:aP(),data:{startAt:t.detailedTiming.blockingTimeStart,endAt:performance.now()+performance.timeOrigin,meta:{...t,kind:r.kind}}});let n=c8.getChannelState("recording");t.detailedTiming.stopListeningForRenders(),n.length&&c8.updateChannelState("recording",()=>new c7(50))}}),h=dm("keyboard",{onComplete:p}),r=e=>{c6.setState(c7.fromArray(c6.getCurrentState().concat(e),150))},f=c8.subscribe("recording",e=>{let t="auto-complete-race"===e.kind?dp.find(t=>t.interactionUUID===e.interactionUUID):((e,t)=>{let r=null;for(let n of t){if(n.type!==e.type)continue;if(null===r){r=n;continue}let t=(e,t)=>Math.abs(e.startDateTime)-(t.startTime+t.timeOrigin);t(n,e)<t(r,e)&&(r=n)}return r})(e.entry,dp);t&&r(t.completeInteraction(e))}),()=>{o(),l(),u(),n(),m(),f(),h()}),x=uq();window.reactScanCleanupListeners=()=>{y(),null==x||x()};let k=window.__REACT_SCAN_TOOLBAR_CONTAINER__;if(!e){null==k||k.remove();return}null==k||k.remove();let{shadowRoot:_}=(()=>{if(uL&&uD)return{rootContainer:uL,shadowRoot:uD};(uL=document.createElement("div")).id="react-scan-root",uD=uL.attachShadow({mode:"open"});let e=document.createElement("style");return e.textContent=cK,uD.appendChild(e),document.documentElement.appendChild(uL),{rootContainer:uL,shadowRoot:uD}})();(g=document.createElement("div")).id="react-scan-toolbar-root",window.__REACT_SCAN_TOOLBAR_CONTAINER__=g,_.appendChild(g),eW(rp(uj,{children:rp(eC,{children:[rp(u$,{}),rp(uM,{})]})}),g),w=g.remove.bind(g),g.remove=()=>{window.__REACT_SCAN_TOOLBAR_CONTAINER__=void 0,g.hasChildNodes()&&(eW(null,g),eW(null,g)),w()}},uq=()=>{try{let e=document.documentElement;return(e=>{if(!(dQ=(dZ=document.createElement("canvas")).getContext("2d",{alpha:!0})))return null;let t=window.devicePixelRatio||1,{innerWidth:r,innerHeight:n}=window;dZ.style.width=`${r}px`,dZ.style.height=`${n}px`,dZ.width=r*t,dZ.height=n*t,dZ.style.position="fixed",dZ.style.left="0",dZ.style.top="0",dZ.style.pointerEvents="none",dZ.style.zIndex="2147483600",dQ.scale(t,t),e.appendChild(dZ),d3&&window.removeEventListener("resize",d3);let i=()=>{if(!dZ||!dQ)return;let e=window.devicePixelRatio||1,{innerWidth:t,innerHeight:r}=window;dZ.style.width=`${t}px`,dZ.style.height=`${r}px`,dZ.width=t*e,dZ.height=r*e,dQ.scale(e,e),d4()};return d3=i,window.addEventListener("resize",i),d0.subscribe(()=>{requestAnimationFrame(()=>{d4()})}),d7})(e)}catch(e){"verbose"===uW.options.value._debug&&console.error("[React Scan Internal Error]","Failed to create notifications outline canvas",e)}},uG=new WeakSet;e.s(["default",0,function(){let e,t,r=(0,k.c)(2);return r[0]===Symbol.for("react.memo_cache_sentinel")?(e={dangerouslyForceRunInProduction:!1,trackUnnecessaryRenders:!0},r[0]=e):e=r[0],((e={})=>{(e=>{var t;try{let r=uU(e);if(0===Object.keys(r).length)return;let n="showToolbar"in r&&void 0!==r.showToolbar,i={...uW.options.value,...r},{instrumentation:o}=uW;o&&"enabled"in r&&(o.isPaused.value=!1===r.enabled),uW.options.value=i;try{let e=null==(t=lV("react-scan-options"))?void 0:t.enabled;"boolean"==typeof e&&(i.enabled=e)}catch(e){"verbose"===uW.options.value._debug&&console.error("[React Scan Internal Error]","Failed to create notifications outline canvas",e)}return lq("react-scan-options",(e=>{let{onCommitStart:t,onRender:r,onCommitFinish:n,...i}=e;return i})(i)),n&&uV(!!i.showToolbar),i}catch(e){"verbose"===uW.options.value._debug&&console.error("[React Scan Internal Error]","Failed to create notifications outline canvas",e)}})(e),(()=>{try{if(!a$||!uW.runInAllEnvironments&&uB()&&!uW.options.value.dangerouslyForceRunInProduction)return;(()=>{if(!uF){if(uF=!0,!("u"<typeof window)&&!window.__REACT_GRAB__&&navigator.onLine&&az.version)try{fetch(`https://www.react-grab.com/api/version?source=react-scan&v=${az.version}&t=${Date.now()}`,{referrerPolicy:"origin",keepalive:!0,priority:"low",cache:"no-store"}).then(e=>e.ok?e.text():null).then(e=>{if(!e)return;let t=e.trim();/^\d+\.\d+\.\d+/.test(t)&&t!==az.version&&console.warn(`[React Scan] react-grab v${az.version} is outdated (latest: v${t}). Update react-scan to pick up the newer react-grab.`)}).catch(()=>null)}catch{}}})();let e=lV("react-scan-options");if(e){let t=uU(e);Object.keys(t).length>0&&(uW.options.value={...uW.options.value,...t})}let t=uW.options;(e=>{var t,r;let n,i,o;if(globalThis.__REACT_SCAN_STOP__||cY)return;cY=!0;let a=!1,l=()=>{a||(n&&cancelAnimationFrame(n),n=requestAnimationFrame(()=>{a=!0;let t=(()=>{var e;let t,r;(r=document.querySelector("[data-react-scan]"))&&r.remove();let n=document.createElement("div");n.setAttribute("data-react-scan","true");let i=n.attachShadow({mode:"open"}),o=document.createElement("canvas");if(o.style.position="fixed",o.style.top="0",o.style.left="0",o.style.pointerEvents="none",o.style.zIndex="2147483646",o.setAttribute("aria-hidden","true"),i.appendChild(o),!o)return null;cF=cG(),c$=o;let{innerWidth:a,innerHeight:l}=window;o.style.width=`${a}px`,o.style.height=`${l}px`;let s=a*cF,c=l*cF;o.width=s,o.height=c;let d=!1===uW.options.value.useOffscreenCanvasWorker;if(cq&&!window.__REACT_SCAN_EXTENSION__&&!d)try{let e=URL.createObjectURL(new Blob(['"use strict";(()=>{var D="Menlo,Consolas,Monaco,Liberation Mono,Lucida Console,monospace";var T=(t,n)=>{let r=n-t;return Math.abs(r)<.5?n:t+r*.2};var x="115,97,230";function P(t,n){return n[0]-t[0]}function F(t){return[...t.entries()].sort(P)}function v([t,n]){let r=`${n.slice(0,4).join(", ")} \\xD7${t}`;return r.length>40&&(r=`${r.slice(0,40)}\\u2026`),r}var $=t=>{let n=new Map;for(let{name:e,count:u}of t)n.set(e,(n.get(e)||0)+u);let r=new Map;for(let[e,u]of n){let A=r.get(u);A?A.push(e):r.set(u,[e])}let d=F(r),a=v(d[0]);for(let e=1,u=d.length;e<u;e++)a+=", "+v(d[e]);return a.length>40?`${a.slice(0,40)}\\u2026`:a},H=t=>{let n=0;for(let r of t)n+=r.width*r.height;return n};var N=(t,n)=>{let r=t.getContext("2d",{alpha:!0});return r&&r.scale(n,n),r},X=(t,n,r,d)=>{t.clearRect(0,0,n.width/r,n.height/r);let a=new Map,e=new Map;for(let i of d.values()){let{x:o,y:c,width:l,height:g,targetX:s,targetY:f,targetWidth:h,targetHeight:m,frame:O}=i;s!==o&&(i.x=T(o,s)),f!==c&&(i.y=T(c,f)),h!==l&&(i.width=T(l,h)),m!==g&&(i.height=T(g,m));let M=`${s??o},${f??c}`,L=`${M},${h??l},${m??g}`,S=a.get(M);S?S.push(i):a.set(M,[i]);let C=1-O/45;i.frame++;let _=e.get(L)||{x:o,y:c,width:l,height:g,alpha:C};C>_.alpha&&(_.alpha=C),e.set(L,_)}for(let{x:i,y:o,width:c,height:l,alpha:g}of e.values()){t.strokeStyle=`rgba(${x},${g})`,t.lineWidth=1;let s=Math.round(i)+.5,f=Math.round(o)+.5,h=Math.round(c),m=Math.round(l);t.beginPath(),t.rect(s,f,h,m),t.stroke(),t.fillStyle=`rgba(${x},${g*.1})`,t.fill()}t.font=`11px ${D}`;let u=new Map;t.textRendering="optimizeSpeed";for(let i of a.values()){let o=i[0],{x:c,y:l,frame:g}=o,s=1-g/45,f=$(i),{width:h}=t.measureText(f),m=11;u.set(`${c},${l},${h},${f}`,{text:f,width:h,height:m,alpha:s,x:c,y:l,outlines:i});let O=l-m-4;if(O<0&&(O=0),g>45)for(let M of i)d.delete(String(M.id))}let A=Array.from(u.entries()).sort(([i,o],[c,l])=>H(l.outlines)-H(o.outlines));for(let[i,o]of A)if(u.has(i))for(let[c,l]of u.entries()){if(i===c)continue;let{x:g,y:s,width:f,height:h}=o,{x:m,y:O,width:M,height:L}=l;g+f>m&&m+M>g&&s+h>O&&O+L>s&&(o.text=$(o.outlines.concat(l.outlines)),o.width=t.measureText(o.text).width,u.delete(c))}for(let i of u.values()){let{x:o,y:c,alpha:l,width:g,height:s,text:f}=i,h=c-s-4;h<0&&(h=0),t.fillStyle=`rgba(${x},${l})`,t.fillRect(o,h,g+4,s+4),t.fillStyle=`rgba(255,255,255,${l})`,t.fillText(f,o+2,h+s)}return d.size>0};var p=null,w=null,b=1,y=new Map,E=null,R=()=>{if(!w||!p)return;X(w,p,b,y)?E=requestAnimationFrame(R):E=null};self.onmessage=t=>{let{type:n}=t.data;if(n==="init"&&(p=t.data.canvas,b=t.data.dpr,p&&(p.width=t.data.width,p.height=t.data.height,w=N(p,b))),!(!p||!w)){if(n==="resize"){b=t.data.dpr,p.width=t.data.width*b,p.height=t.data.height*b,w.resetTransform(),w.scale(b,b),R();return}if(n==="draw-outlines"){let{data:r,names:d}=t.data,a=new Float32Array(r);for(let e=0;e<a.length;e+=7){let u=a[e+2],A=a[e+3],i=a[e+4],o=a[e+5],c=a[e+6],l={id:a[e],name:d[e/7],count:a[e+1],x:u,y:A,width:i,height:o,frame:0,targetX:u,targetY:A,targetWidth:i,targetHeight:o,didCommit:c},g=String(l.id),s=y.get(g);s?(s.count++,s.frame=0,s.targetX=u,s.targetY=A,s.targetWidth=i,s.targetHeight=o,s.didCommit=c):y.set(g,l)}E||(E=requestAnimationFrame(R));return}if(n==="scroll"){let{deltaX:r,deltaY:d}=t.data;for(let a of y.values()){let e=a.x-r,u=a.y-d;a.targetX=e,a.targetY=u}}}};})();\n'],{type:"application/javascript"}));cR=new Worker(e);let t=o.transferControlToOffscreen();cR.postMessage({type:"init",canvas:t,width:o.width,height:o.height,dpr:cF},[t])}catch(e){cR=null,"verbose"===uW.options.value._debug&&console.warn("Failed to initialize OffscreenCanvas worker:",e)}cR||(e=cF,(t=o.getContext("2d",{alpha:!0}))&&t.scale(e,e),cj=t);let u=!1;window.addEventListener("resize",()=>{u||(u=!0,setTimeout(()=>{let e=window.innerWidth,t=window.innerHeight;cF=cG(),o.style.width=`${e}px`,o.style.height=`${t}px`,cR?cR.postMessage({type:"resize",width:e,height:t,dpr:cF}):(o.width=e*cF,o.height=t*cF,cj&&(cj.resetTransform(),cj.scale(cF,cF)),cV()),u=!1}))});let p=window.scrollX,m=window.scrollY,h=!1;return window.addEventListener("scroll",()=>{h||(h=!0,setTimeout(()=>{let{scrollX:e,scrollY:t}=window,r=e-p,n=t-m;p=e,m=t,cR?cR.postMessage({type:"scroll",deltaX:r,deltaY:n}):requestAnimationFrame(cM.bind(null,cP,r,n)),h=!1},32))}),setInterval(()=>{cD.size&&requestAnimationFrame(cB)},32),i.appendChild(o),n})();t&&document.documentElement.appendChild(t),e()}))},s=(t="react-scan-devtools-0.1.0",r={onCommitStart:()=>{var e,t;null==(t=(e=uW.options.value).onCommitStart)||t.call(e)},onActive:(i=!1,()=>{globalThis.__REACT_SCAN_STOP__||i||(i=!0,l(),window.__REACT_SCAN_EXTENSION__||(globalThis.__REACT_SCAN__={ReactScanInternals:uW}),clearInterval(g),g=setInterval(()=>{cJ&&(uI.lastReportTime.value=Date.now(),cJ=!1)},50),(()=>{if(window.hideIntro){window.hideIntro=void 0;return}console.log("%c[·] %cReact Scan","font-weight:bold;color:#7a68e8;font-size:20px;","font-weight:bold;font-size:14px;")})())}),onError:()=>{},isValidFiber:cX,onRender:(e,t)=>{var r,n,i,o;P(e)&&(null==(r=uI.interactionListeningForRenders)||r.call(uI,e,t));let a=null==(n=uW.instrumentation)?void 0:n.isPaused.value,l="inspect-off"===uI.inspectState.value.kind||"uninitialized"===uI.inspectState.value.kind;a&&l||(a||(e=>{if(!P(e))return;let t="string"==typeof e.type?e.type:G(e);if(!t)return;let r=cL.get(e),n=(e=>{let t=[],r=[];for(O(e)?t.push(e):e.child&&r.push(e.child);r.length;){let e=r.pop();if(!e)break;O(e)?t.push(e):e.child&&r.push(e.child),e.sibling&&r.push(e.sibling)}return t})(e),i=D(e);r?r.count++:(cL.set(e,{name:t,count:1,elements:n.map(e=>e.stateNode),didCommit:+!!i}),cD.add(e))})(e),uW.options.value.log&&(e=>{var t;let r=new Map;for(let n=0,i=e.length;n<i;n++){let i=e[n];if(!i.componentName)continue;let o=null!=(t=r.get(i.componentName))?t:[],a=aF([{aggregatedCount:1,computedKey:null,name:i.componentName,frame:null,...i,changes:{type:i.changes.reduce((e,t)=>e|t.type,0),unstable:i.changes.some(e=>e.unstable)},phase:i.phase,computedCurrent:null}]);if(!a)continue;let l=null,s=null;if(i.changes)for(let e=0,t=i.changes.length;e<t;e++){let{name:t,prevValue:r,nextValue:n,unstable:a,type:c}=i.changes[e];1===c?(null!=l||(l={}),null!=s||(s={}),l[`${a?"⚠️":""}${t} (prev)`]=r,s[`${a?"⚠️":""}${t} (next)`]=n):o.push({prev:r,next:n,type:4===c?"context":"state",unstable:null!=a&&a})}l&&s&&o.push({prev:l,next:s,type:"props",unstable:!1}),r.set(a,o)}for(let[e,t]of Array.from(r.entries())){for(let{type:r,prev:n,next:i,unstable:o}of(console.group(`%c${e}`,"background: hsla(0,0%,70%,.3); border-radius:3px; padding: 0 2px;"),t))console.log(`${r}:`,o?"⚠️":"",n,"!==",i);console.groupEnd()}})(t),"focused"===uI.inspectState.value.kind&&(sr.value=Date.now()),l||(e=>{var t,r;if(P(e)&&!1!==uW.options.value.showToolbar&&"focused"===uI.inspectState.value.kind){let{selfTime:n}=B(e),i=G(e.type),o=K(e),a=uI.reportData.get(o),l=null!=(t=null==a?void 0:a.count)?t:0,s=null!=(r=null==a?void 0:a.time)?r:0,c=uI.changesListeners.get(K(e));if(null==c?void 0:c.length){let t,r=sB(e).map(e=>({type:1,name:e.name,value:e.value,prevValue:e.prevValue,unstable:!1})),n=(e=>{var t,r;if(!e)return[];let n=[];if(0===e.tag||11===e.tag||15===e.tag||14===e.tag){let r=e.memoizedState,i=null==(t=e.alternate)?void 0:t.memoizedState,o=0;for(;r;){if(r.queue&&void 0!==r.memoizedState){let e={type:2,name:o.toString(),value:r.memoizedState,prevValue:null==i?void 0:i.memoizedState};aO(e.prevValue,e.value)||n.push(e)}r=r.next,i=null==i?void 0:i.next,o++}return n}if(1===e.tag){let t={type:3,name:"state",value:e.memoizedState,prevValue:null==(r=e.alternate)?void 0:r.memoizedState};aO(t.prevValue,t.value)||n.push(t)}return n})(e),i=(t=[],((e,t)=>{try{let r=e.dependencies,n=e.alternate?.dependencies;if(!r||!n||"object"!=typeof r||!("firstContext"in r)||"object"!=typeof n||!("firstContext"in n))return!1;let i=r.firstContext,o=n.firstContext;for(;i&&"object"==typeof i&&"memoizedValue"in i||o&&"object"==typeof o&&"memoizedValue"in o;){if(!0===t(i,o))return!0;i=i?.next,o=o?.next}}catch{}})(e,cv.bind(t)),t).map(e=>({name:e.name,type:4,value:e.value,contextType:e.contextType}));c.forEach(e=>{e({propsChanges:r,stateChanges:n,contextChanges:i})})}let d={count:l+1,time:s+n||0,renders:[],displayName:i,type:q(e.type)||null,changes:[]};uI.reportData.set(o,d),cJ=!0}})(e),null==(o=(i=uW.options.value).onRender)||o.call(i,e,t))},onCommitFinish:()=>{var e,t;l(),null==(t=(e=uW.options.value).onCommitFinish)||t.call(e)},onPostCommitFiberRoot(){l()},trackChanges:!1},o={isPaused:tx(!uW.options.value.enabled),fiberRoots:new WeakSet},cb.set(t,{key:t,config:r,instrumentation:o}),cw||(cw=!0,(e=>{let t=F(e.onActive);t._instrumentationSource=e.name??_;let r=t.onCommitFiberRoot;if(e.onCommitFiberRoot){let n=(t,i,o)=>{r!==n&&(r?.(t,i,o),e.onCommitFiberRoot?.(t,i,o))};t.onCommitFiberRoot=n}let n=t.onCommitFiberUnmount;if(e.onCommitFiberUnmount){let r=(i,o)=>{t.onCommitFiberUnmount===r&&(n?.(i,o),e.onCommitFiberUnmount?.(i,o))};t.onCommitFiberUnmount=r}let i=t.onPostCommitFiberRoot;if(e.onPostCommitFiberRoot){let r=(n,o)=>{t.onPostCommitFiberRoot===r&&(i?.(n,o),e.onPostCommitFiberRoot?.(n,o))};t.onPostCommitFiberRoot=r}})({name:"react-scan",onActive:r.onActive,onCommitFiberRoot(e,t){o.fiberRoots.add(t);let r=cy();for(let e of r)e.config.onCommitStart();for(let e of(((e,t)=>{let r="current"in e?e.current:e,n=en.get(e);n||(n={id:er++,prevFiber:null},en.set(e,n));let{prevFiber:i}=n;if(r)if(null!==i){let e=i&&null!=i.memoizedState&&null!=i.memoizedState.element&&!0!==i.memoizedState.isDehydrated,n=null!=r.memoizedState&&null!=r.memoizedState.element&&!0!==r.memoizedState.isDehydrated;!e&&n?Z(t,r,!1):e&&n?Q(t,r,r.alternate,null):e&&!n&&ee(t,r)}else Z(t,r,!0);else ee(t,r);n.prevFiber=r})(t.current,(e,t)=>{let r=q(e.type);if(!r)return null;let n=cy(),i=[];for(let t=0,r=n.length;t<r;t++)n[t].config.isValidFiber(e)&&i.push(t);if(!i.length)return null;let o=[];if(n.some(e=>e.config.trackChanges)){let t=ct(e).changes,r=cr(e).changes,n=cn(e).changes;for(let n of(o.push.apply(null,t.map(e=>({type:1,name:e.name,value:e.value}))),r))1===e.tag?o.push({type:3,name:n.name.toString(),value:n.value}):o.push({type:2,name:n.name.toString(),value:n.value});o.push.apply(null,n.map(e=>({type:4,name:e.name,value:e.value,contextType:Number(e.contextType)})))}let{selfTime:a,totalTime:l}=B(e),s=ch(),c={phase:cs[t],componentName:G(r),count:1,changes:o,time:a,forget:V(e),unnecessary:null,didCommit:D(e),fps:s},d=o.length>0,u=(e=>{let t=[],r=[e];for(;r.length;){let e=r.pop();e&&(O(e)&&D(e)&&L(e)&&t.push(e),e.child&&r.push(e.child),e.sibling&&r.push(e.sibling))}return t})(e).length>0;"update"===t&&((e,t,r,n,i)=>{let o=Date.now(),a=c_(e);if((n||i)&&(!a||o-(a.lastRenderTimestamp||0)>16)){var l;let n,i,s,c=a||{selfTime:0,totalTime:0,renderCount:0,lastRenderTimestamp:o};c.renderCount=(c.renderCount||0)+1,c.selfTime=t||0,c.totalTime=r||0,c.lastRenderTimestamp=o,l={...c},n=q(e.type),i=ck(e),(s=cx.get(n))||(s=new Map,cx.set(n,s)),s.set(i,l)}})(e,a,l,d,u);for(let t=0,r=i.length;t<r;t++)n[i[t]].config.onRender(e,[c])}),r))e.config.onCommitFinish()},onPostCommitFiberRoot(){for(let e of cy())e.config.onPostCommitFiberRoot()}})),o);uW.instrumentation=s})(()=>{uV(!!t.value.showToolbar)}),a$&&setTimeout(()=>{let e;e=globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__,e?._instrumentationIsActive||T(e)||M(e)||console.error("[React Scan] Failed to load. Must import React Scan before React runs.")},5e3)}catch(e){"verbose"===uW.options.value._debug&&console.error("[React Scan Internal Error]","Failed to create notifications outline canvas",e)}})()})(e),r[1]===Symbol.for("react.memo_cache_sentinel")?(t=(0,x.jsx)(x.Fragment,{}),r[1]=t):t=r[1],t}],75280)}],33902,(e,t,r)=>{t.exports={name:"react-grab",version:"0.2.0",description:"Select context for coding agents directly from your website",keywords:["agent","context","grab","react","react-grab"],homepage:"https://react-grab.com",bugs:{url:"https://github.com/aidenybai/react-grab/issues"},license:"MIT",author:{name:"Aiden Bai",email:"aiden@million.dev"},repository:{type:"git",url:"git+https://github.com/aidenybai/react-grab.git"},bin:{"react-grab":"./bin/cli.js"},files:["bin","dist","package.json","README.md","LICENSE"],type:"module",main:"dist/index.js",module:"dist/index.js",browser:"dist/index.global.js",types:"dist/index.d.ts",exports:{"./package.json":"./package.json",".":{import:{types:"./dist/index.d.ts",default:"./dist/index.js"},require:{types:"./dist/index.d.cts",default:"./dist/index.cjs"}},"./core":{import:{types:"./dist/core/index.d.ts",default:"./dist/core/index.js"},require:{types:"./dist/core/index.d.cts",default:"./dist/core/index.cjs"}},"./primitives":{import:{types:"./dist/primitives.d.ts",default:"./dist/primitives.js"},require:{types:"./dist/primitives.d.cts",default:"./dist/primitives.cjs"}},"./styles.css":"./dist/styles.css","./dist/styles.css":"./dist/styles.css","./dist/*":"./dist/*.js","./dist/*.js":"./dist/*.js","./dist/*.cjs":"./dist/*.cjs"},publishConfig:{access:"public"},dependencies:{bippy:"^0.6.1","@react-grab/cli":"0.2.0"},devDependencies:{"@babel/core":"^7.29.0","@babel/preset-typescript":"^7.28.5","@jridgewell/trace-mapping":"^0.3.31","@playwright/test":"^1.59.1","@tailwindcss/cli":"^4.3.0","@types/babel__core":"^7.20.5","@types/node":"^25.6.2","@types/react":"^19.2.14","babel-preset-solid":"^1.9.12",concurrently:"^9.2.1","expect-sdk":"^0.1.2","solid-js":"^1.9.12",tailwindcss:"^4.3.0",tsx:"^4.21.0","vite-plus":"^0.1.20","@react-grab/playwright-coverage":"0.1.47"},peerDependencies:{react:">=17.0.0"},peerDependenciesMeta:{react:{optional:!0}},scripts:{"css:watch":"tailwindcss -i ./src/styles.css -o ./dist/styles.css -w",prebuild:"mkdir -p dist && tailwindcss -i ./src/styles.css -o ./dist/styles.css -m && tsx scripts/css-rem-to-px.ts",build:"NODE_ENV=production vp pack","build:e2e-development":"pnpm run prebuild && NODE_ENV=development REACT_GRAB_SOURCE_LOCATIONS=true vp pack --out-dir ../../apps/e2e-react-grab-development/dist","build:e2e-development:coverage":"pnpm run prebuild && NODE_ENV=production REACT_GRAB_SOURCE_LOCATIONS=true REACT_GRAB_NO_MINIFY=true REACT_GRAB_SOURCEMAP=true vp pack --out-dir ../../apps/e2e-react-grab-development/dist","build:demo":"IS_DEMO=true pnpm build","build:profiling":"pnpm run prebuild && NODE_ENV=profiling REACT_GRAB_NO_MINIFY=true REACT_GRAB_SOURCEMAP=true vp pack","build:coverage":"pnpm run prebuild && NODE_ENV=production REACT_GRAB_NO_MINIFY=true REACT_GRAB_SOURCEMAP=true vp pack",dev:'concurrently "pnpm:css:watch" "vp pack --watch"',test:"vp test run tests && playwright test --grep-invert @perf && E2E_ENVIRONMENT=vite-plus-development playwright test --grep @perf --workers=1","test:unit":"vp test run tests","pretest:coverage":"pnpm --filter @react-grab/playwright-coverage build","test:coverage":"COVERAGE=1 playwright test","test:perf":"playwright test --grep @perf --reporter=list","test:perf:animation":"playwright test e2e/perf-bench.spec.ts --grep animation-scheduling-controls --reporter=list","test:perf:idle":"playwright test e2e/perf-bench.spec.ts --grep idle-after-activation --reporter=list","test:perf:dom-breakpoints":"PERF_DOM_BREAKPOINTS=1 playwright test e2e/perf-bench.spec.ts --grep dom-rerender-during-selection --reporter=list","test:perf:trace":"PERF_TRACE=1 playwright test --grep @perf --reporter=list","test:perf:render":"PERF_RENDER_TRACE=1 playwright test --grep @perf --reporter=list","test:perf:full":"PERF_TRACE=1 PERF_RENDER_TRACE=1 playwright test --grep @perf --reporter=list && node scripts/deopt-trace.mjs && node scripts/analyze-perf-trace.mjs perf/${PERF_LABEL:-current}","perf:analyze":"node scripts/analyze-perf-trace.mjs","test:perf:baseline":"PERF_LABEL=baseline playwright test --grep @perf --reporter=list","test:expect":"bun e2e/react-grab.expect.ts",typecheck:"tsc --noEmit","test:e2e:ui":"playwright test --ui","perf:deopt":"node scripts/deopt-trace.mjs"}}},85103,(e,t,r)=>{t.exports={about:{interests:"My interests",philosophy:{content:"I love philosophy, especially the concepts of <strong>qualia</strong> and <strong>epiphenomenalism</strong>.",title:"Philosophy"},poetry:{content:"Poetry is one of my favorite forms of expression. One of my favorite poems is <Link><Glow>Fire and Ice</Glow></Link> by Robert Frost.",title:"Poetry"},title:"About me",topology:{content:"I haven't studied topology formally, but I love how topology can be as concrete as it is abstract, from the topology of a shirt to that of a manifold.",title:"Topology"}},career:{"come-closer":"Come a little closer...",contact:"Contact me here","dont-wait":"How about securing me while you can?",talk:"Let's talk",wish:"I would l<Heart/>ve a <Glow>job</Glow> or an <Glow>internship</Glow>.","wish-label":"I would love a job or an internship"},companies:{zenvia:"Zenvia"},filters:{categories:"Categories",collapse:"Hide filters",expand:"Expand filters",languages:"Languages",libraries:"Libraries",uncategorized:"Uncategorized"},footer:{content:"Made with <Heart/>, over 250 commits and many redesigns and frameworks since 2021."},"hard-skills":{"ai-assisted-development":{description:"<ul><li>Agent and subagent workflows, sequential and concurrent flows, and worktrees for parallel work</li><li>Skills and plugins, context optimization, and cost reduction</li><li>Tuning <strong>feedback loops</strong> so agents can verify their own work</li></ul>",shortcut:"AI",title:"AI-assisted development"},"frontend-architecture":{description:"<ul><li><strong>Hexagonal architecture</strong> (ports and adapters) with strict boundaries</li><li>Acyclic dependency graph with <strong>automatically enforced</strong> rules</li><li>Monorepos with workspaces and task orchestration</li><li>Documented component libraries with multiple build modes</li></ul>",shortcut:"Architecture",title:"Frontend architecture and platform"},git:{description:"<ul><li><strong>Minimizing diffs</strong> and <strong>rewriting history</strong></li><li>Comfortable with flows based on rebases, merge commits, and/or squashes</li></ul>",shortcut:"$t(tools.git)",title:"$t(tools.git)"},"npm-publishing":{description:"<ul><li>Creating, publishing, and maintaining NPM packages</li><li><strong>Type declarations</strong> and JSDoc documentation</li><li><strong>Release automation</strong> and tree-shaking support</li></ul>",shortcut:"NPM",title:"NPM Publishing"},react:{description:"<ul><li>Rendering and <strong>reconciliation</strong>, building reusable components that reduce unnecessary renders</li><li>React Redux, Redux-Saga, <strong>TanStack Query</strong>, and React Hook Form</li></ul>",shortcut:"$t(tools.react)",title:"$t(tools.react)"},"single-spa":{description:"<ul><li>Creating applications and <strong>parcels</strong></li></ul>",shortcut:"$t(tools.single-spa)",title:"$t(tools.single-spa)"},title:"My <1>hard skills</1>",typescript:{description:"<ul><li>Balancing <strong>type safety</strong> and ergonomics to increase agility and reduce bugs</li><li><strong>Structural typing</strong>, set theory applied to types, and covariance and contravariance</li><li>Generic types and type inference</li></ul>",shortcut:"$t(tools.typescript)",title:"$t(tools.typescript)"}},hero:{greeting:"Hi, my name is",name:"Luiz",subtitle:"<0>I'm a web developer focused on </0><Tool/>","subtitle-label":"I'm a web developer focused on Node.js, React and TypeScript"},"language-switcher":{switch:"Switch language"},meta:{about:{description:"Learn about me here on my personal website.",title:"About me"},home:{description:"Learn about me here on my personal website.",title:"About me"},projects:{description:"See my projects here.",title:"My projects"}},modal:{close:"Close modal"},"my-github":{links:{"my-github":"My GitHub","my-npm-packages":"My NPM packages"},subtitle:"I have many open source projects and NPM packages",title:"Take a look at my <Link>GitHub</Link>"},project:{image:"Image of the project {{name}}","source-code":"View source code",visit:"Visit project"},"project-tags":{Biblioteca:"Library",Livro:"Book",Organização:"Organization","Pacote NPM":"NPM package",Site:"Website"},projects:{"blink-ultimate-teleportation":{description:"Installed by over 32 thousand different users, Blink is a mod written in Lua for Teardown, included in the official modpack for Xbox and PlayStation."},codinstruct:{description:"An organization created as a college project, aimed at helping students learn C, JavaScript and Python. I worked mainly on the organization, the Sass and the C content."},"codinstruct-next":{description:"Next.js front end made for codinStruct, a project carried out at Rede de Ensino Doctum to produce educational content about programming."},ekranoplan:{description:"General-purpose JS/TS library with simple and advanced features."},figment:{description:"A C++ class that allows precise control over the lifetime of objects of any type. Similar to std::optional, but holds no information about the contained object."},glimmer:{description:"A simple modular framework for Discord bots based on discord.js."},globe:{description:"A website with a rotating globe made of dots, letting you use your own images as textures."},goo:{description:"Configurable HTML element that provides an animated, goo-like background."},htilesml:{description:"Experimental game using HTML elements and 3D CSS transforms."},"modern-c-sorting-algorithms":{description:"Collection of generic sorting algorithms making extensive use of the C18 standard, made to ease my college C assignments."},phasmoo:{description:"A fully responsive website and PWA that filters ghosts to help with gameplay in the game Phasmophobia."},"separador-de-silabas":{description:"A Next.js website that splits text into syllables using an algorithm I created."},"shader-site":{description:"A website that helps you find the ideal Minecraft shader pack for you."},"spirit-box":{description:"Discord bot that generates a journal of notes for the game Phasmophobia, helping identify ghosts and share clues with your team."},swapem:{description:"CLI tool and NPM package providing a transform stream that reads text and replaces directives with values from a JSON file."},swash:{description:"React framework for inter-component communication via drag-and-drop interactions. Modular, extensible and customizable."},"ts-conversions":{description:"Library and NPM package providing utilities to perform safe or unsafe conversions and cut down on boilerplate in TypeScript."},"viewport-based-scaling":{description:"Website that generates CSS to set a property's value based on the viewport width, linearly interpolating between several pairs of points."}},roles:{"development-assistant":"Development assistant","junior-developer":"Junior developer"},sections:{home:"Home",projects:"Projects"},"theme-switcher":{switch:"Switch theme"},tools:{git:"Git","node-js":"Node.js",react:"React","single-spa":"single-spa",typescript:"TypeScript"},trajectory:{dates:{2020:"2020","2024-05":"May 2024","2025-05":"May 2025"},details:{"assistant-maintenance":"Performed maintenance on web applications using ASP.NET, Next.js, single-spa, and Vite","frontend-monorepo":"Designed and built from scratch the foundation of a frontend monorepo with pnpm and Turborepo for a large-scale web application, with hexagonal architecture and boundaries automatically enforced with dependency-cruiser","mfe-i18n":"Implemented internationalization in a microfrontend application","react-component-library":"Developed a React component package (ESM and CJS) using Class Variance Authority, Jest, and CSS Modules, following a design system, with support for tree-shaking and type declarations"},"first-hello-world":"My first Hello World","my-role":"myRole",title:"My <1>trajectory</1>",writing:"Writing...","you-decide":"It's up to you","your-team":"yourTeam"}}},22794,(e,t,r)=>{t.exports={about:{interests:"Meus interesses",philosophy:{content:"Eu adoro filosofia, principalmente os conceitos de <strong>qualia</strong> e <strong>epifenomenalismo</strong>.",title:"Filosofia"},poetry:{content:"Poesia é uma das minhas formas de expressão que mais aprecio. Um de meus poemas favoritos é <Link><Glow>Fire and Ice</Glow></Link> de Robert Frost.",title:"Poesia"},title:"Sobre mim",topology:{content:"Não estudei topologia especificamente, mas adoro como topologia pode ser tão concreta quanto abstrata, desde a topologia de uma camisa até a de uma variedade.",title:"Topologia"}},career:{"come-closer":"Agora chega aqui pertinho...",contact:"Me contate aqui","dont-wait":"Que tal me garantir enquanto pode?",talk:"Vamos conversar",wish:"Eu ad<Heart/>raria um <Glow>emprego</Glow> ou um <Glow>estágio</Glow>.","wish-label":"Eu adoraria um emprego ou um estágio"},companies:{zenvia:"Zenvia"},filters:{categories:"Categorias",collapse:"Ocultar filtros",expand:"Expandir filtros",languages:"Linguagens",libraries:"Bibliotecas",uncategorized:"Sem categoria"},footer:{content:"Feito com <Heart/>, mais de 250 commits, vários redesigns e vários frameworks desde 2021."},"hard-skills":{"ai-assisted-development":{description:"<ul><li>Fluxos com agentes e subagentes, fluxos sequenciais e concorrentes e worktrees para trabalho em paralelo</li><li>Skills e plugins, otimização de contexto e redução de custos</li><li>Ajuste de <strong>ciclos de feedback</strong> para que agentes verifiquem o próprio trabalho</li></ul>",shortcut:"IA",title:"Desenvolvimento assistido por IA"},"frontend-architecture":{description:"<ul><li><strong>Arquitetura hexagonal</strong> (ports and adapters) com fronteiras estritas</li><li>Grafo acíclico de dependências com regras <strong>garantidas automaticamente</strong></li><li>Monorepos com workspaces e orquestração de tarefas</li><li>Bibliotecas de componentes documentadas com múltiplos modos de build</li></ul>",shortcut:"Arquitetura",title:"Arquitetura e plataforma de frontend"},git:{description:"<ul><li><strong>Minimizar diffs</strong> e <strong>reescrever histórico</strong></li><li>Confortável com fluxos baseados em rebases, merge commits e/ou squashes</li></ul>",shortcut:"$t(tools.git)",title:"$t(tools.git)"},"npm-publishing":{description:"<ul><li>Criação, publicação e manutenção de pacotes NPM</li><li><strong>Declarações de tipos</strong> e documentação JSDoc</li><li><strong>Automação de releases</strong> e suporte a tree-shaking</li></ul>",shortcut:"NPM",title:"Publicação NPM"},react:{description:"<ul><li>Renderização e <strong>reconciliação</strong>, criando componentes reutilizáveis que reduzem renderizações desnecessárias</li><li>React Redux, Redux-Saga, <strong>TanStack Query</strong> e React Hook Form</li></ul>",shortcut:"$t(tools.react)",title:"$t(tools.react)"},"single-spa":{description:"<ul><li>Criação de applications e <strong>parcels</strong></li></ul>",shortcut:"$t(tools.single-spa)",title:"$t(tools.single-spa)"},title:"Minhas <1>hard skills</1>",typescript:{description:"<ul><li>Equilíbrio entre <strong>segurança de tipos</strong> e ergonomia para aumentar a agilidade e reduzir bugs</li><li><strong>Tipagem estrutural</strong>, teoria dos conjuntos aplicada a tipos, covariância e contravariância</li><li>Tipos genéricos e inferência de tipos</li></ul>",shortcut:"$t(tools.typescript)",title:"$t(tools.typescript)"}},hero:{greeting:"Olá, meu nome é",name:"Luiz",subtitle:"<0>Eu sou um desenvolvedor focado em </0><Tool/>","subtitle-label":"Eu sou um desenvolvedor focado em Node.js, React e TypeScript"},"language-switcher":{switch:"Mudar linguagem"},meta:{about:{description:"Veja sobre mim aqui em meu site pessoal.",title:"Sobre mim"},home:{description:"Veja sobre mim aqui em meu site pessoal.",title:"Sobre mim"},projects:{description:"Veja meus projetos aqui.",title:"Meus projetos"}},modal:{close:"Fechar modal"},"my-github":{links:{"my-github":"Meu GitHub","my-npm-packages":"Meus pacotes NPM"},subtitle:"Eu tenho vários projetos open source e alguns pacotes NPM",title:"Dê uma olhada em meu <Link>GitHub</Link>"},project:{image:"Imagem do projeto {{name}}","source-code":"Visualizar código-fonte",visit:"Visitar projeto"},"project-tags":{Biblioteca:"Biblioteca",Livro:"Livro",Organização:"Organização","Pacote NPM":"Pacote NPM",Site:"Site"},projects:{"blink-ultimate-teleportation":{description:"Instalado por mais de 32 mil usuários diferentes, Blink é um mod feito em Lua para Teardown incluso no modpack oficial para Xbox e PlayStation."},codinstruct:{description:"Uma organização feita como projeto de faculdade, visando ajudar estudantes a aprender C, JavaScript e Python.  Trabalhei principalmente na organização, no Sass e no conteúdo de C."},"codinstruct-next":{description:"Front-end em Next.js feito para o codinStruct—projeto realizado na Rede de Ensino Doctum com o intuito de produzir conteúdos educacionais sobre programação."},ekranoplan:{description:"Biblioteca JS/TS de uso geral com features simples e avançadas."},figment:{description:"Uma classe em C++ que permite controle preciso da vida útil de objetos de qualquer tipo. Semelhante a std::optional, mas não contém informações sobre o objeto contido."},glimmer:{description:"Um simples framework modular para bots de Discord baseado em discord.js."},globe:{description:"Um site com um globo giratório formado por pontos, te permitindo usar suas próprias imagens como texturas."},goo:{description:"Elemento HTML configurável que fornece um fundo animado com efeito de gosma."},htilesml:{description:"Jogo experimental utilizando elementos HTML e transformações CSS 3D."},"modern-c-sorting-algorithms":{description:"Coleção de algoritmos de ordenação genéricos utilizando o padrão C18 extensivamente, feita para facilitar meus trabalhos de C na faculdade."},phasmoo:{description:"Um website e PWA totalmente responsivo que filtra fantasmas para auxiliar no gameplay do jogo Phasmophobia."},"separador-de-silabas":{description:"Um site feito em Next.js que divide um texto em sílabas utilizando um algoritmo que criei."},"shader-site":{description:"Um site que te ajuda a encontrar o shaderpack de Minecraft ideal para você."},"spirit-box":{description:"Bot para Discord que gera um diário de anotações do jogo Phasmophobia, para auxiliar na identificação de fantasmas e no compartilhamento de pistas com sua equipe."},swapem:{description:"Ferramenta CLI e pacote NPM fornecendo uma stream transform que lê texto e substitui diretivas por valores vindos de um arquivo JSON."},swash:{description:"Framework React para comunicação inter-componente via interações de arrastar e soltar. Modular, extensível e customizável."},"ts-conversions":{description:"Biblioteca e pacote NPM fornecendo utilitários para realizar conversões seguras ou inseguras e diminuir código boilerplate no TypeScript."},"viewport-based-scaling":{description:"Site que gera CSS para definir o valor de uma propriedade baseado na largura do viewport, realizando interpolação linear entre vários pares de pontos."}},roles:{"development-assistant":"Assistente de desenvolvimento","junior-developer":"Desenvolvedor júnior"},sections:{home:"Início",projects:"Projetos"},"theme-switcher":{switch:"Mudar tema"},tools:{git:"Git","node-js":"Node.js",react:"React","single-spa":"single-spa",typescript:"TypeScript"},trajectory:{dates:{2020:"2020","2024-05":"Maio 2024","2025-05":"Maio 2025"},details:{"assistant-maintenance":"Realizei manutenção de aplicações web com ASP.NET, Next.js, single-spa e Vite","frontend-monorepo":"Projetei e construí do zero a base de um monorepo frontend com pnpm e Turborepo para uma aplicação web, com arquitetura hexagonal e fronteiras garantidas automaticamente com dependency-cruiser","mfe-i18n":"Implementei internacionalização em uma aplicação de microfrontends","react-component-library":"Desenvolvi um pacote de componentes React ESM e CJS com Class Variance Authority, Jest e CSS Modules, seguindo um design system, com suporte a tree-shaking e declarações de tipos"},"first-hello-world":"Meu primeiro Hello World","my-role":"meuPapel",title:"Minha <1>trajetória</1>",writing:"Escrevendo...","you-decide":"Você decide","your-team":"suaEquipe"}}}]);