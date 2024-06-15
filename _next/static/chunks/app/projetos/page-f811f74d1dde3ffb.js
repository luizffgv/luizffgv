(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[725],{5963:function(e,t,a){Promise.resolve().then(a.bind(a,4104))},7907:function(e,t,a){"use strict";var i=a(5313);a.o(i,"usePathname")&&a.d(t,{usePathname:function(){return i.usePathname}}),a.o(i,"useSearchParams")&&a.d(t,{useSearchParams:function(){return i.useSearchParams}})},2086:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return p}});var i=a(7437),o=a(2265),s=a(8792),r=a(4464),n=a(5889),l=a(2235),c=a(3975),d=a.n(c);function u(e){let{children:t,onDismiss:a}=e,s=(0,o.useRef)(null);return(0,o.useEffect)(()=>{if(null==s.current){console.error("dialogRef.current is null.");return}s.current.showModal()},[]),(0,i.jsxs)("dialog",{ref:s,className:"".concat(d()["modal-container"]," fixed flex h-[100dvh] max-h-none w-[100dvw] max-w-none flex-col items-center gap-4 bg-transparent p-4 text-inherit [justify-content:safe_center]"),onClose:()=>null==a?void 0:a(),children:[a?(0,i.jsx)("div",{className:d().dismiss,children:(0,i.jsx)(r.Z,{onClick:a,"aria-label":"Fechar modal",children:(0,i.jsx)(l.Z,{})})}):(0,i.jsx)(i.Fragment,{}),(0,i.jsx)("div",{className:d().modal,children:(0,i.jsx)(n.Z,{children:t})})]})}function m(e){let[t,a]=(0,o.useState)(!1);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("button",{className:"flex flex-row items-center justify-center gap-2 rounded-3xl bg-primary px-4 py-2 font-bold text-fg-on-primary transition-all hover:shadow-[0_0_50px_theme(colors.primary_/_25%)] hover:brightness-110 hover:[text-shadow:_0_0_15px_currentcolor]",onClick:()=>{a(!0)},"aria-label":e["aria-label"],children:e.children}),t?(0,i.jsx)(u,{onDismiss:()=>{a(!1)},children:e.modalContent}):(0,i.jsx)(i.Fragment,{})]})}function p(e){let t="flex flex-row items-center gap-2 rounded-3xl bg-primary px-4 py-2 font-bold text-fg-on-primary justify-center transition-all hover:brightness-110 hover:shadow-[0_0_50px_theme(colors.primary_/_25%)] hover:[text-shadow:_0_0_15px_currentcolor]";return(0,i.jsx)(i.Fragment,{children:"onClick"in e?(0,i.jsx)("button",{...e,type:"button",className:t}):"href"in e?(0,i.jsx)(s.default,{...e,className:t}):(0,i.jsx)(m,{...e,className:t})})}},4464:function(e,t,a){"use strict";a.d(t,{Z:function(){return i.default}});var i=a(2086)},5889:function(e,t,a){"use strict";a.d(t,{Z:function(){return o}});var i=a(7437);function o(e){let{children:t,footer:a,level:o="close"}=e;return(0,i.jsx)("div",{className:"rounded-3xl shadow-sm transition-colors ".concat("close"===o?"bg-bg-close dark:bg-bg-close-dark":"bg-bg-closer dark:bg-bg-closer-dark"),children:(0,i.jsxs)("div",{className:"flex h-full w-full flex-col justify-between rounded-3xl p-4 dark:[background:radial-gradient(ellipse_at_center,_theme(colors.primary/10%),_transparent)]",children:[(0,i.jsx)("div",{className:"flex justify-center",children:t}),a&&(0,i.jsx)("div",{className:"mt-4 flex justify-center",children:a})]})})}},529:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return s}});var i=a(7437),o=a(2265);function s(e){let{src:t,alt:a}=e,[s,r]=(0,o.useState)(!1),n=(0,o.useRef)(null),l=(0,o.useRef)(null);return(0,o.useEffect)(()=>{l.current=new Image,l.current.addEventListener("load",()=>{r(!0)})},[]),(0,o.useEffect)(()=>{if(r(!1),"IntersectionObserver"in window){let e=new IntersectionObserver((e,a)=>{if(e[0].isIntersecting){if(null==l.current){console.error("image.current is null");return}l.current.src=t,a.disconnect()}});return null==n.current?console.error("ref.current is null"):e.observe(n.current),()=>{e.disconnect()}}if(null==l.current){console.error("image.current is null");return}l.current.src=t},[t]),(0,i.jsxs)("div",{className:"relative h-full w-full",ref:n,children:[(0,i.jsx)("div",{className:"absolute inset-0 flex items-center justify-center rounded-3xl bg-bg-close has-[~_img]:hidden dark:bg-bg-close-dark",children:(0,i.jsx)("svg",{viewBox:"0 0 1 1",xmlns:"http://www.w3.org/2000/svg",className:"h-8 w-8 animate-spin stroke-primary",children:(0,i.jsx)("circle",{cx:"0.5",cy:"0.5",fill:"none",r:"0.25",strokeWidth:"0.1",strokeDasharray:"1",strokeLinecap:"round"})})}),s?(0,i.jsx)("img",{src:t,alt:a,className:"h-full w-full"}):(0,i.jsx)(i.Fragment,{})]})}},4104:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return N}});var i=a(7437),o=a(2265);let s=(0,o.createContext)({filter:e=>e,setFilter:()=>{}});function r(e,...t){let a=t.map(String);return a.push(""),e.map((e,t)=>e+a[t]).reduce((e,t)=>e+t)}let n=[{name:"Blink: Ultimate Teleportation",description:"Instalado por mais de 32 mil usu\xe1rios diferentes, Blink \xe9 um mod feito em Lua para o jogo Teardown.",details:r`
      <p>
        Blink: Ultimate Teleportation é um mod para
        <a href="https://teardowngame.com/">Teardown</a> que te permite desafiar
        a física e percorrer distâncias em um piscar de olhos.
      </p>
      <p>
        Tipagens via
        <a href="https://github.com/LuaLS/lua-language-server"
          >lua-language-server</a
        >
        foram amplamente utilizadas.<br />
        Embora eu não seja experiente em Lua e não seja fã de suas
        particularidades, o mod rapidamente ficou em alta na Oficina Steam.
      </p>
    `,tags:["GitHub","Lua","Mod","Python"],url:"https://steamcommunity.com/sharedfiles/filedetails/?id=2875792342",repository:"https://github.com/luizffgv/blink-mod-teardown",image:"Blink Ultimate Teleportation"},{name:"codinStruct",description:"Uma organiza\xe7\xe3o feita como projeto de faculdade, visando ajudar estudantes a aprender C, JavaScript e Python.  Trabalhei principalmente na organiza\xe7\xe3o, no Sass e no conte\xfado de C.",details:r`
      <p>
        codinStruct é um projeto com o intuito de disponibilizar conteúdo para
        auxiliar no aprendizado de C, JavaScript e Python.
      </p>
      <p>
        Eu escrevi o conteúdo sobre C (2641 linhas no momento em que isso foi
        escrito) e trabalhei nos estilos Sass utilizados nas páginas de
        conteúdo, e parte do HTML e workflows.
      </p>
      <h3>Como funciona o projeto?</h3>
      <p>A organização até o momento possui três repositórios públicos:</p>
      <ul class="raiar-list-text">
        <li>
          <a href="https://github.com/codinStruct/codinStruct"
            ><strong>codinStruct</strong></a
          >&mdash;contém o código para criar uma imagem Docker para servir o
          website.
        </li>
        <li>
          <a href="https://github.com/codinStruct/codinStruct-Content"
            ><strong>codinstruct-Content</strong></a
          >&mdash;contém o conteúdo disponibilizado no website, com a licença CC
          BY-SA 4.0.<br />
          Esse repositório também hospeda o conteúdo diretamente via mdBook e
          GitHub Pages, acessível
          <a href="https://codinStruct.github.io/codinStruct-content/">aqui</a>.
        </li>
        <li>
          <a href="https://github.com/codinStruct/md2html"
            ><strong>md2html</strong></a
          >&mdash;Contém um script Python para converter Markdown para HTML.
        </li>
      </ul>
      <p>
        Todo o conteúdo é escrito em Markdown, que é automaticamente processado
        pelo servidor e se torna HTML que por sua vez é servido e estilizado com
        Sass.
      </p>
    `,tags:["Bash","Docker","Express.js","GitHub","GitHub Actions","HTML","JavaScript","Markdown","mdBook","Node.js","Organiza\xe7\xe3o","Python","Sass","Site","TypeScript","Webpack"],url:"https://github.com/codinStruct",image:"codinStruct"},{name:"codinStruct Next",description:"Front-end em Next.js feito para o codinStruct—projeto realizado na Rede de Ensino Doctum com o intuito de produzir conte\xfados educacionais sobre programa\xe7\xe3o.",tags:["GitHub","GitHub Actions","HTML","Next.js","Node.js","React","TypeScript"],url:"https://codinstruct.luizf.dev",repository:"https://github.com/luizffgv/codinStruct-next",image:"codinStruct"},{name:"Ekranoplan",description:"Biblioteca JS/TS de uso geral com features simples e avan\xe7adas.",tags:["Biblioteca","GitHub","GitHub Actions","JavaScript","Node.js","Pacote NPM","TypeScript"],license:"MIT License",url:"https://ekranoplan.luizf.dev/",repository:"https://github.com/luizffgv/ekranoplan",image:"Ekranoplan"},{name:"ExpTL",description:"Biblioteca de C++ de uso geral, pretendendo complementar a biblioteca padr\xe3o.",tags:["Biblioteca","C++","C++20","Doxygen","GitHub","GitHub Actions"],license:"MIT License",url:"https://exptl.luizf.dev/modules.html",repository:"https://github.com/luizffgv/exptl"},{name:"Figment",description:"Uma classe em C++ que permite controle preciso da vida \xfatil de objetos de qualquer tipo. Semelhante a std::optional, mas n\xe3o cont\xe9m informa\xe7\xf5es sobre o objeto contido.",tags:["Biblioteca","C++","C++17","C++20","Doxygen","GitHub Actions","GitHub"],license:"Unlicense",url:"https://figment.luizf.dev",repository:"https://github.com/luizffgv/Figment"},{name:"Glimmer",description:"Um simples framework modular para bots de Discord baseado em discord.js.",tags:["Framework","Discord App","GitHub","GitHub Actions","JavaScript","Node.js","TypeScript"],license:"MIT License",repository:"https://github.com/luizffgv/Glimmer"},{name:"Globe",description:"Um site com um globo girat\xf3rio formado por pontos, te permitindo usar suas pr\xf3prias imagens como texturas.",tags:["GitHub Actions","GitHub","HTML","JavaScript","Node.js","Sass","Site","Three.js","TypeScript","Webpack"],details:r`
      <p>
        Globe utiliza Three.js para exibir um globo giratório de pontos com
        efeitos de bloom e ondulação.
      </p>
      <p>
        É possível escolher uma imagem para ser exibida no globo, mas ela deve
        seguir um padrão específico.
      </p>
      <p>
        A movimentação de cada ponto no globo é determinada via JavaScript, mas
        é também factível implementar via shaders para melhor desempenho.
      </p>
    `,license:"MIT License",url:"https://globe.luizf.dev",repository:"https://github.com/luizffgv/globe",image:"Globe"},{name:"Goo",description:"Elemento HTML configur\xe1vel que fornece um fundo animado com efeito de gosma.",tags:["GitHub","HTML","JavaScript","Node.js"],license:"MIT License",repository:"https://github.com/luizffgv/goo-html",image:"Goo"},{name:"HTilesML",description:"Jogo experimental utilizando elementos HTML e transforma\xe7\xf5es CSS 3D.",details:r`
      <p>
        HTilesML é um pequeno experimento que serve como prova de conceito da
        possibilidade de criar um jogo 3D sem canvas&mdash;utilizando apenas
        elementos HTML.
      </p>
      <p>
        O visual do jogo é feito utilizando ortoedros formados por faces
        posicionadas com transformações CSS 3D.
      </p>
      <p>
        Admitidamente não é um bom jogo sob nenhum padrão e realmente só deve
        ser visto como experimento.
      </p>
    `,tags:["GitHub","HTML","JavaScript","Site"],license:"MIT License",url:"https://htilesml.luizf.dev",repository:"https://github.com/luizffgv/htilesml"},{name:"livro-c",description:"Livro virtual gratuito que pretende trazer uma fonte moderna, confi\xe1vel e completa para o aprendizado de C.",tags:["C","GitHub","Livro","mdBook"],license:"CC BY-SA 4.0",url:"https://luizffgv.github.io/livro-c/",repository:"https://github.com/luizffgv/livro-c"},{name:"Modern C Sorting Algorithms",description:"Cole\xe7\xe3o de algoritmos de ordena\xe7\xe3o gen\xe9ricos utilizando o padr\xe3o C18 extensivamente, feita para facilitar meus trabalhos de C na faculdade.",details:r`
      <p>Uma coleção de algoritmos de ordenação utilizando o padrão C18.</p>
      <h3>Pontos notáveis</h3>
      <ul class="raiar-list-text">
        <li>
          Uso de macros em definições e implementações de funções, reduzindo
          drasticamente o número de linhas de código.
        </li>
        <li>
          Combinação de <code>_Generic</code> e <code>static_assert</code> para
          asseguração de interfaces.
        </li>
        <li>
          Uso de <code>_Generic</code> para determinar automaticamente qual
          função executar baseado nos tipos dos argumentos.
        </li>
      </ul>
    `,tags:["Biblioteca","C","C18","GitHub"],license:"GNU General Public License v3.0",repository:"https://github.com/luizffgv/modern-c-sorting-algorithms"},{name:"Phasmoo",description:"Um website e PWA totalmente responsivo que filtra fantasmas para auxiliar no gameplay do jogo Phasmophobia.",tags:["GitHub","GitHub Actions","HTML","JavaScript","Next.js","Node.js","React","Site","Tailwind CSS"],license:"MIT License",url:"https://phasmoo.luizf.dev",repository:"https://github.com/luizffgv/phasmoo",image:"Phasmoo"},{name:"Raiar",description:"Um pequeno framework web front-end fornecendo web components JS e estilos Sass configur\xe1veis.",details:r`
      Raiar é um pequeno framework de Sass e web components JS, criado para meus
      projetos com a intenção de acelerar o desenvolvimento e manter
      consistência entre eles.<br /><br />Raiar não é muito portável pois
      utiliza várias funcionalidades relativamente novas no CSS, portanto não é
      recomendado para todos os tipos de projetos.
      <h3>Funcionalidades</h3>
      <ul class="raiar-list-text">
        <li>
          <strong>
            Raiar utiliza tanto variáveis Sass quanto variáveis CSS</strong
          >, permitindo alterações nos estilos via JavaScript mesmo após a
          compilação.
        </li>
        <li>
          <strong
            >Raiar fornece um equilíbrio entre shadow DOM e light DOM</strong
          >&mdash;web components só são utilizados quando há a necessidade de
          executar JavaScript no funcionamento de um elemento.
        </li>
        <li>
          <strong>Raiar infere o significado dos elementos por contexto</strong
          >&mdash;o uso das pseudo-classes <code>:has</code> e
          <code>:is</code> permite que elementos sejam estilizados corretamente
          sem o uso classes.
        </li>
      </ul>
    `,tags:["GitHub","HTML","Framework","JavaScript","Sass"],license:"MIT License",repository:"https://github.com/luizffgv/raiar"},{name:"Separador de s\xedlabas",description:"Um site feito em Next.js que divide um texto em s\xedlabas utilizando um algoritmo que criei.",tags:["GitHub","GitHub Actions","HTML","JavaScript","Next.js","Node.js","React","Site","TypeScript"],license:"MIT License",url:"https://silabas.luizf.dev/",repository:"https://github.com/luizffgv/silabas-website",image:"Silabas"},{name:"Shader Site",description:"Um site que te ajuda a encontrar o shaderpack de Minecraft ideal para voc\xea.",tags:["GitHub","GitHub Actions","HTML","JavaScript","Lit","Node.js","Sass","Site","TypeScript","Webpack"],license:"MIT License",repository:"https://github.com/luizffgv/shader-site",url:"https://shadersite.luizf.dev",image:"Shader Site"},{name:"SoR-pt-BR",description:"Tradu\xe7\xe3o n\xe3o oficial para o jogo Streets of Rogue, com melhorias—algumas subjetivas—em rela\xe7\xe3o \xe0 vers\xe3o oficial.",tags:["GitHub","Python"],license:"Unlicense",repository:"https://github.com/luizffgv/SoR-pt-BR"},{name:"Spirit Box",description:"Bot para Discord que gera um di\xe1rio de anota\xe7\xf5es do jogo Phasmophobia, para auxiliar na identifica\xe7\xe3o de fantasmas e no compartilhamento de pistas com sua equipe.",details:r`
      <p>
        Bot para Discord com o intuito de compartilhar pistas e facilitar a
        identificação de fantasmas no jogo Phasmophobia.
      </p>
      <p>
        Spirit Box utiliza TypeScript extensivamente e possui um
        <a
          href="https://github.com/luizffgv/Spirit-Box/blob/b0734c85de03127fca33b9408b4f2b229366df6d/src/commands/journal.ts#L148-L202"
          >algoritmo</a
        >
        <strong>compacto</strong> e <strong>genérico</strong> para a
        identificação de fantasmas, com um modelo que o torna aplicável, sem
        alterações, a todos os fantasmas e dificuldades.
      </p>
      <h3>Passos do algoritmo</h3>
      <ul class="raiar-list-text">
        <li>
          Descartar fantasmas que não possuem alguma das evidências encontradas,
          ignorando evidências falsas.
        </li>
        <li>
          Descartar fantasmas que apresentam mais evidências do que a
          dificuldade permite, ignorando evidências falsas.
        </li>
        <li>
          Descartar fantasmas que possuem mais evidências ausentes do que
          evidências desabilitadas pela dificuldade.
        </li>
        <li>
          Descartar fantasmas cuja evidência garantida está ausente ou
          inobtível.
        </li>
        <li>Descartar fantasmas cuja evidência falsa está ausente.</li>
      </ul>
    `,tags:["Discord App","GitHub","JavaScript","Node.js","TypeScript"],license:"MIT License",repository:"https://github.com/luizffgv/spirit-box",image:"Spirit Box"},{name:"Swapem",description:"Ferramenta CLI e pacote NPM fornecendo uma stream transform que l\xea texto e substitui diretivas por valores vindos de um arquivo JSON.",tags:["Biblioteca","GitHub","GitHub Actions","JavaScript","Node.js","Pacote NPM","TypeScript"],license:"MIT License",url:"https://www.npmjs.com/package/swapem",repository:"https://github.com/luizffgv/swapem"},{name:"TS Conversions",description:"Biblioteca e pacote NPM fornecendo utilit\xe1rios para realizar convers\xf5es seguras ou inseguras e diminuir c\xf3digo boilerplate no TypeScript.",tags:["Biblioteca","GitHub Actions","GitHub","JavaScript","Node.js","Pacote NPM","TypeScript"],license:"MIT License",url:"https://www.npmjs.com/package/@luizffgv/ts-conversions",repository:"https://github.com/luizffgv/ts-conversions"},{name:"Viewport-Based Scaling",description:"Site que gera CSS para definir o valor de uma propriedade baseado na largura do viewport, realizando interpola\xe7\xe3o linear entre v\xe1rios pares de pontos.",tags:["GitHub","GitHub Actions","HTML","JavaScript","Node.js","Site","TypeScript","Webpack"],license:"MIT License",url:"https://vbs.luizf.dev",repository:"https://github.com/luizffgv/viewport-based-rescaling"}];var l=a(5889);function c(e){let{value:t,checked:a,onChange:o}=e;return(0,i.jsxs)("label",{className:"relative inline-block rounded-lg border border-fg/5 bg-bg-close px-4 py-2 text-center font-bold shadow-sm transition-all hover:brightness-110 has-[:checked]:border-transparent has-[:checked]:bg-primary has-[:checked]:text-fg-on-primary has-[:checked]:shadow-[0_0_50px_theme(colors.primary_/_25%)] has-[:checked]:[text-shadow:_0_0_15px_currentcolor] dark:border-fg-dark/10 dark:bg-bg-close-dark dark:has-[:checked]:bg-primary",children:[(0,i.jsx)("input",{className:"absolute inset-0 cursor-pointer appearance-none rounded-lg",type:"checkbox",value:t,checked:a,onChange:o||(()=>{})}),t]})}function d(e){let{value:t,checked:a,name:o,children:s,onChange:r}=e;return(0,i.jsxs)("label",{className:"relative inline-block rounded-3xl border border-fg/5 bg-bg-close px-4 py-2 text-center font-bold shadow-sm transition-all has-[:checked]:border-transparent has-[:checked]:bg-primary has-[:checked]:text-fg-on-primary has-[:checked]:shadow-[0_0_50px_theme(colors.primary_/_25%)] has-[:checked]:[text-shadow:_0_0_15px_currentcolor] has-[:not(:checked)]:hover:brightness-110 dark:border-fg-dark/10 dark:bg-bg-close-dark dark:has-[:checked]:bg-primary",children:[(0,i.jsx)("input",{className:"absolute inset-0 cursor-pointer appearance-none rounded-3xl checked:cursor-default",type:"radio",name:o,value:t,checked:a,onChange:r||(()=>{})}),s]})}function u(e){let{level:t,children:a}=e;return 1===t?(0,i.jsx)("h1",{className:"mb-8 text-center text-3xl",children:a}):2===t?(0,i.jsx)("h2",{className:"mb-6 text-center text-2xl",children:a}):3===t?(0,i.jsx)("h3",{className:"mb-4 text-center text-xl",children:a}):4===t?(0,i.jsx)("h4",{className:"mb-2 text-center text-lg",children:a}):5===t?(0,i.jsx)("h5",{className:"mb-2 text-center text-lg",children:a}):(0,i.jsx)("h6",{className:"mb-2 text-center text-lg",children:a})}function m(e){let{title:t,children:a,level:o}=e;return(0,i.jsxs)("section",{children:[(0,i.jsx)(u,{level:o,children:t}),a]})}var p=a(7907);let h=new Set(["Bash","C++17","C++20","C18","Doxygen","GitHub","HTML","Livro","Markdown","mdBook","Organiza\xe7\xe3o"]),f=[...n.map(e=>e.tags).reduce((e,t)=>{for(let a of t)e.add(a);return e},new Set)].filter(e=>!h.has(e)).sort();function g(e,t){var a;return new Set((null!==(a=e.tags)&&void 0!==a?a:[]).filter(e=>t.has(e)))}function b(){let e=(0,p.useSearchParams)(),{setFilter:t}=(0,o.useContext)(s),[a,r]=(0,o.useState)("best-match"),[n,u]=(0,o.useState)({value:new Set});return(0,o.useLayoutEffect)(()=>{u({value:new Set(e.getAll("tags").filter(e=>f.includes(e)))})},[e]),(0,o.useEffect)(()=>{t(e=>{let t=[...e].sort((e,t)=>g(t,n.value).size-g(e,n.value).size);return n.value.size>0&&(t=t.filter(e=>g(e,n.value).size>0)),"every"===a&&(t=t.filter(e=>{for(let a of n.value){var t;if(!(null===(t=e.tags)||void 0===t?void 0:t.includes(a)))return!1}return!0})),t})},[a,n,t]),(0,i.jsx)(m,{level:2,title:"Filtros",children:(0,i.jsxs)("div",{className:"flex flex-row flex-wrap items-stretch justify-center gap-4",children:[(0,i.jsx)(l.Z,{children:(0,i.jsxs)("fieldset",{className:"flex max-h-[50vh] max-w-4xl flex-row flex-wrap gap-1 overflow-y-auto",onChange:e=>{if(!(e.target instanceof HTMLInputElement)){console.error("event.target is not an HTMLInputElement");return}e.target.checked?n.value.add(e.target.value):n.value.delete(e.target.value),u({value:n.value})},children:[(0,i.jsx)("legend",{className:"float-left mb-3 w-full text-center",children:"Selecione tags"}),f.map(e=>(0,i.jsx)("div",{className:"flex grow flex-col items-stretch",children:(0,i.jsx)(c,{value:e,checked:n.value.has(e)})},e))]})}),(0,i.jsx)(l.Z,{children:(0,i.jsxs)("fieldset",{className:"flex flex-col items-stretch gap-4",onChange:e=>{if(!(e.target instanceof HTMLInputElement)){console.error("event.target is not an HTMLInputElement");return}r(e.target.value)},children:[(0,i.jsx)("legend",{className:"float-left w-full text-center",children:"L\xf3gica de filtragem"}),(0,i.jsx)(d,{name:"project-filter-mode",value:"best-match",checked:"best-match"===a,children:"Melhor correspond\xeancia"}),(0,i.jsx)(d,{name:"project-filter-mode",value:"every",checked:"every"===a,children:"Possui todas categorias selecionadas"})]})})]})})}var v=a(843);/**
 * @license lucide-react v0.365.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let x=(0,v.Z)("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]),j=(0,v.Z)("FolderGit2",[["path",{d:"M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v5",key:"1w6njk"}],["circle",{cx:"13",cy:"12",r:"2",key:"1j92g6"}],["path",{d:"M18 19c-2.8 0-5-2.2-5-5v8",key:"pkpw2h"}],["circle",{cx:"20",cy:"19",r:"2",key:"1obnsp"}]]);var S=a(4464),w=a(529);function y(e){let{project:t,level:a}=e;return(0,i.jsx)(l.Z,{level:a,footer:(0,i.jsxs)("div",{className:"flex flex-row flex-wrap items-stretch justify-center gap-4",children:[t.url?(0,i.jsx)("div",{children:(0,i.jsxs)(S.Z,{href:t.url,target:"_blank",children:[(0,i.jsx)(x,{}),"Visitar"]})}):(0,i.jsx)(i.Fragment,{}),t.repository?(0,i.jsx)("div",{children:(0,i.jsxs)(S.Z,{href:t.repository,target:"_blank",children:[(0,i.jsx)(j,{}),"Reposit\xf3rio"]})}):(0,i.jsx)(i.Fragment,{})]}),children:(0,i.jsxs)("div",{className:"flex max-w-prose flex-col items-center gap-4",role:"group","aria-label":t.name,children:[null==t.image?(0,i.jsx)("div",{className:"h-16"}):(0,i.jsxs)("div",{className:"relative",children:[(0,i.jsx)("div",{className:"h-16 w-16 overflow-hidden rounded-lg blur-2xl",children:(0,i.jsx)(w.default,{src:"/project-images/".concat(t.image,".webp"),alt:"Imagem do projeto ".concat(t.name),"aria-hidden":!0})}),(0,i.jsx)("div",{className:"absolute left-0 top-0 h-16 w-16 overflow-hidden rounded-lg",children:(0,i.jsx)(w.default,{src:"/project-images/".concat(t.image,".webp"),alt:"Imagem do projeto ".concat(t.name)})})]}),(0,i.jsx)("div",{className:"flex grow flex-col items-center",children:(0,i.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,i.jsx)("div",{className:"text-center text-lg font-bold",children:t.name}),(0,i.jsx)("div",{children:t.description})]})})]})})}function k(){let{filter:e}=(0,o.useContext)(s),t=(0,o.useMemo)(()=>e(n),[e]);return(0,i.jsxs)("ul",{className:"flex flex-row flex-wrap justify-center gap-8",children:[t.map(e=>(0,i.jsx)("li",{className:"appear min-w-fit grow basis-0 *:h-full",children:(0,i.jsx)(y,{project:e})},e.name)),0===t.length&&(0,i.jsx)("li",{className:"text-center text-xl",children:"Nenhum projeto se encaixa nos filtros."})]})}function N(){let[e,t]=(0,o.useState)(()=>e=>e),a=(0,o.useCallback)(e=>{t(()=>e)},[]),r=(0,o.useRef)(null);return(0,o.useLayoutEffect)(()=>{if(null==r.current){console.error("projectsListRef.current is null");return}new Animation(new KeyframeEffect(r.current,[{opacity:0},{}],{duration:500,easing:"ease"})).play()},[e]),(0,i.jsx)(m,{level:1,title:(0,i.jsx)(i.Fragment,{children:"Meus projetos"}),children:(0,i.jsx)(s.Provider,{value:{filter:e,setFilter:a},children:(0,i.jsxs)("div",{className:"flex flex-col items-center gap-8",children:[(0,i.jsx)(o.Suspense,{children:(0,i.jsx)(b,{})}),(0,i.jsx)("div",{ref:r,className:"max-w-screen-2xl pb-[100vh]",children:(0,i.jsx)(k,{})})]})})})}},3975:function(e){e.exports={"modal-container":"modal_modal-container__i_YSx",dismiss:"modal_dismiss__Pn0UK",modal:"modal_modal__L3VW0"}}},function(e){e.O(0,[512,971,69,744],function(){return e(e.s=5963)}),_N_E=e.O()}]);