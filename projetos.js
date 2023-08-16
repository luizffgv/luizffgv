(()=>{"use strict";var e={500:(e,t,o)=>{o.d(t,{Z:()=>s});var r=o(81),n=o.n(r),i=o(645),a=o.n(i)()(n());a.push([e.id,".project{box-shadow:8px 8px 16px 0px rgba(0,0,0,.05);padding:16px 32px;background-color:#fff;border-radius:16px}.project-name{color:#1e1e1e;font-size:24px;font-weight:700}.project-description{min-width:256px;max-width:512px}.project-buttons{display:flex;gap:16px;margin-top:16px}#projects{display:flex;flex-flow:row wrap;justify-content:space-evenly;align-items:flex-start;gap:32px;width:fit-content;max-width:75vw}#tags{display:flex;flex-flow:row wrap;gap:16px;max-height:50vh;max-width:75vw;overflow-y:auto}",""]);const s=a},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var o="",r=void 0!==t[5];return t[4]&&(o+="@supports (".concat(t[4],") {")),t[2]&&(o+="@media ".concat(t[2]," {")),r&&(o+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),o+=e(t),r&&(o+="}"),t[2]&&(o+="}"),t[4]&&(o+="}"),o})).join("")},t.i=function(e,o,r,n,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(a[c]=!0)}for(var l=0;l<e.length;l++){var p=[].concat(e[l]);r&&a[p[0]]||(void 0!==i&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=i),o&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=o):p[2]=o),n&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=n):p[4]="".concat(n)),t.push(p))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function o(e){for(var o=-1,r=0;r<t.length;r++)if(t[r].identifier===e){o=r;break}return o}function r(e,r){for(var i={},a=[],s=0;s<e.length;s++){var c=e[s],l=r.base?c[0]+r.base:c[0],p=i[l]||0,u="".concat(l," ").concat(p);i[l]=p+1;var d=o(u),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==d)t[d].references++,t[d].updater(f);else{var m=n(f,r);r.byIndex=s,t.splice(s,0,{identifier:u,updater:m,references:1})}a.push(u)}return a}function n(e,t){var o=t.domAPI(t);return o.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;o.update(e=t)}else o.remove()}}e.exports=function(e,n){var i=r(e=e||[],n=n||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var s=o(i[a]);t[s].references--}for(var c=r(e,n),l=0;l<i.length;l++){var p=o(i[l]);0===t[p].references&&(t[p].updater(),t.splice(p,1))}i=c}}},569:e=>{var t={};e.exports=function(e,o){var r=function(e){if(void 0===t[e]){var o=document.querySelector(e);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(e){o=null}t[e]=o}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(o)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,o)=>{e.exports=function(e){var t=o.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(o){!function(e,t,o){var r="";o.supports&&(r+="@supports (".concat(o.supports,") {")),o.media&&(r+="@media ".concat(o.media," {"));var n=void 0!==o.layer;n&&(r+="@layer".concat(o.layer.length>0?" ".concat(o.layer):""," {")),r+=o.css,n&&(r+="}"),o.media&&(r+="}"),o.supports&&(r+="}");var i=o.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,o)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function o(r){var n=t[r];if(void 0!==n)return n.exports;var i=t[r]={id:r,exports:{}};return e[r](i,i.exports,o),i.exports}o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.nc=void 0,(()=>{var e=o(379),t=o.n(e),r=o(795),n=o.n(r),i=o(569),a=o.n(i),s=o(565),c=o.n(s),l=o(216),p=o.n(l),u=o(589),d=o.n(u),f=o(500),m={};function h(e){if(null==e)throw TypeError("throwIfNull received null value");return e}function v(e,...t){const o=t.map(String);return o.push(""),e.map(((e,t)=>e+o[t])).reduce(((e,t)=>e+t))}function g(e,t){return e+t}m.styleTagTransform=d(),m.setAttributes=c(),m.insert=a().bind(null,"head"),m.domAPI=n(),m.insertStyleElement=p(),t()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;const b=JSON.parse('[{"name":"Blink: Ultimate Teleportation","description":"Um mod feito em Lua para o jogo Teardown, utilizando Python para ajudar na organização dos módulos.","tags":["GitHub","Lua","Mod","Python"],"url":"https://steamcommunity.com/sharedfiles/filedetails/?id=2875792342","repository":"https://github.com/luizffgv/blink-mod-teardown"},{"name":"codinStruct","description":"Uma organização feita como projeto de faculdade, visando ajudar estudantes a aprender C, JavaScript e Python.  Trabalhei principalmente na organização, no CSS e no conteúdo de C.","tags":["Bash","Docker","Express.js","GitHub","GitHub Actions","HTML","JavaScript","Markdown","mdBook","Node.js","Organização","Python","Sass","Site","TypeScript","Webpack"],"url":"https://github.com/codinStruct"},{"name":"ExpTL","description":"Biblioteca de C++ de uso geral, pretendendo complementar a biblioteca padrão.","tags":["Biblioteca","C++","C++20","Doxygen","GitHub","GitHub Actions"],"license":"MIT License","url":"https://exptl.luizf.dev/modules.html","repository":"https://github.com/luizffgv/exptl"},{"name":"Figment","description":"Uma classe em C++ que permite controle preciso da vida útil de objetos de qualquer tipo. Semelhante a std::optional, mas não contém informações sobre o objeto contido.","tags":["Biblioteca","C++","C++17","C++20","Doxygen","GitHub Actions","GitHub"],"license":"Unlicense","url":"https://figment.luizf.dev","repository":"https://github.com/luizffgv/Figment"},{"name":"Globe","description":"Um site com um globo giratório formado por pontos, te permitindo usar suas próprias imagens como texturas.","tags":["GitHub Actions","GitHub","HTML","JavaScript","Node.js","Site","Three.js","TypeScript","Webpack"],"license":"MIT License","url":"https://globe.luizf.dev","repository":"https://github.com/luizffgv/globe"},{"name":"livro-c","description":"Livro virtual gratuito que pretende trazer uma fonte moderna, confiável e completa para o aprendizado de C.","tags":["C","GitHub","Livro","mdBook"],"license":"CC BY-SA 4.0","url":"https://luizffgv.github.io/livro-c/","repository":"https://github.com/luizffgv/livro-c"},{"name":"Modern C Sorting Algorithms","description":"Coleção de algoritmos de ordenação genéricos, utilizando o padrão C18 extensivamente.","tags":["Biblioteca","C","C18","GitHub"],"license":"GNU General Public License v3.0","repository":"https://github.com/luizffgv/modern-c-sorting-algorithms"},{"name":"SoR-pt-BR","description":"Tradução não oficial para o jogo Streets of Rogue, com melhorias—algumas subjetivas—em relação à versão oficial.","tags":["GitHub","Python"],"license":"Unlicense","repository":"https://github.com/luizffgv/SoR-pt-BR"},{"name":"TS Conversions","description":"Biblioteca e pacote NPM fornecendo utilitários para realizar conversões seguras ou inseguras e diminuir código boilerplate no TypeScript.","tags":["Biblioteca","GitHub Actions","GitHub","JavaScript","Node.js","Pacote NPM","TypeScript"],"license":"MIT License","url":"https://www.npmjs.com/package/@luizffgv/ts-conversions","repository":"https://github.com/luizffgv/ts-conversions"}]');var y,w,x=function(e,t,o,r){if("a"===o&&!r)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!r:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===o?r:"a"===o?r.call(e):r?r.value:t.get(e)};class T{constructor(e){this.name=e.name,this.description=e.description,this.tags=e.tags??[],null!=e.license&&(this.license=e.license),null!=e.url&&(this.url=e.url),null!=e.repository&&(this.repository=e.repository)}asHTML(){let e="";return null!=this.url&&(e+=v`<a class="button" href=${this.url}>
        <span class="material-symbols-outlined">link</span> Ver
      </a>`),null!=this.repository&&(e+=v`<a class="button" href=${this.repository}>
        <span class="material-symbols-outlined">code</span> Repositório
      </a>`),v`<div class="project">
      <div>
        <p class="project-name">${this.name}</p>
        <p class="project-description">${this.description}</p>
      </div>
      <div class="project-buttons">${e}</div>
    </div>`}}class C{constructor(e){this.projects=e}asHTML(){return this.projects.map((e=>e.asHTML())).reduce(g,"")}}class j{constructor(e){y.set(this,void 0),w.set(this,new Set),function(e,t,o,r,n){if("m"===r)throw new TypeError("Private method is not writable");if("a"===r&&!n)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!n:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");"a"===r?n.call(e,o):n?n.value=o:t.set(e,o)}(this,y,e,"f")}withTags(...e){for(const t of e)x(this,w,"f").add(t);return this}get(){return new C(x(this,y,"f").filter((e=>{for(const t of x(this,w,"f"))if(!e.tags.includes(t))return!1;return!0})))}}function S(e){const t=document.createElement("input");t.type="checkbox",t.addEventListener("change",(()=>{t.checked?H.add(e):H.delete(e),L()}));const o=document.createElement("label");return o.classList.add("checkbox"),o.appendChild(t),o.appendChild(document.createTextNode(e)),o}function L(){const e=h(document.getElementById("projects")),t=new j(M).withTags(...H).get();0==t.projects.length?e.textContent="Que pena, nenhum projeto se encaixa em todas essas categorias.":e.innerHTML=t.asHTML()}y=new WeakMap,w=new WeakMap;const M=b.map((e=>new T(e))),z=new Set(M.flatMap((e=>e.tags)).sort((function(e,t){return e.toLocaleLowerCase().localeCompare(t.toLocaleLowerCase())}))),H=new Set;addEventListener("DOMContentLoaded",(()=>{L();const e=h(document.getElementById("tags"));for(const t of z)e.appendChild(S(t))}))})()})();