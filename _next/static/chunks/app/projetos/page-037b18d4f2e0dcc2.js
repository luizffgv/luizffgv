(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[725],{5963:function(e,t,a){Promise.resolve().then(a.bind(a,8949))},7907:function(e,t,a){"use strict";var i=a(5313);a.o(i,"usePathname")&&a.d(t,{usePathname:function(){return i.usePathname}}),a.o(i,"useSearchParams")&&a.d(t,{useSearchParams:function(){return i.useSearchParams}})},2086:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return f}});var i=a(7437),o=a(2265),r=a(8792),s=a(4464),n=a(5889),l=a(2235),c=a(3975),d=a.n(c);function u(e){let{children:t,onDismiss:a}=e,r=(0,o.useRef)(null);return(0,o.useEffect)(()=>{if(null==r.current){console.error("dialogRef.current is null.");return}r.current.showModal()},[]),(0,i.jsxs)("dialog",{ref:r,className:"".concat(d()["modal-container"]," fixed flex h-[100dvh] max-h-none w-[100dvw] max-w-none flex-col items-center gap-4 bg-transparent p-4 text-inherit [justify-content:safe_center]"),onClose:()=>null==a?void 0:a(),children:[a?(0,i.jsx)("div",{className:d().dismiss,children:(0,i.jsx)(s.Z,{variant:"danger",onClick:a,"aria-label":"Fechar modal",children:(0,i.jsx)(l.Z,{})})}):(0,i.jsx)(i.Fragment,{}),(0,i.jsx)("div",{className:d().modal,children:(0,i.jsx)(n.Z,{children:t})})]})}let m=(0,a(7742).j)("flex flex-row items-center gap-2 rounded-lg justify-center transition-all",{variants:{icon:{true:"p-2",false:"px-4 py-2"},variant:{primary:"text-primary bg-bg-button dark:bg-primary/5 backdrop-blur-md dark:hover:bg-primary hover:bg-primary hover:text-fg-on-primary",danger:"text-fg-on-primary bg-danger"}}});function p(e){let[t,a]=(0,o.useState)(!1);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("button",{className:e.className,onClick:()=>{a(!0)},"aria-label":e["aria-label"],children:e.children}),t?(0,i.jsx)(u,{onDismiss:()=>{a(!1)},children:e.modalContent}):(0,i.jsx)(i.Fragment,{})]})}function f(e){let{isIcon:t=!1,variant:a="primary",...o}=e,s=m({icon:t,variant:a});return(0,i.jsx)(i.Fragment,{children:"onClick"in o?(0,i.jsx)("button",{...o,type:"button",className:s}):"href"in o?(0,i.jsx)(r.default,{...o,className:s}):(0,i.jsx)(p,{...o,className:s})})}},4464:function(e,t,a){"use strict";a.d(t,{Z:function(){return i.default}});var i=a(2086)},5889:function(e,t,a){"use strict";a.d(t,{Z:function(){return r}});var i=a(7437),o=a(7749);function r(e){let{children:t,footer:a}=e;return(0,i.jsx)(o.E.div,{initial:{scale:.75},whileInView:{scale:1},className:"rounded-lg border-2 border-primary/15 bg-bg-close shadow-sm transition-colors dark:border-transparent dark:bg-bg-close-dark",children:(0,i.jsxs)("div",{className:"flex h-full w-full flex-col justify-between rounded-lg p-4",children:[(0,i.jsx)("div",{className:"flex justify-center",children:t}),a&&(0,i.jsx)("div",{className:"mt-4 flex justify-center",children:a})]})})}},8949:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return B}});var i=a(7437),o=a(2265);let r=(0,o.createContext)({filter:e=>e,setFilter:()=>{}});function s(e,...t){let a=t.map(String);return a.push(""),e.map((e,t)=>e+a[t]).reduce((e,t)=>e+t)}let n=[{name:"Blink: Ultimate Teleportation",description:"Instalado por mais de 32 mil usu\xe1rios diferentes, Blink \xe9 um mod feito em Lua para o jogo Teardown.",details:s`
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
    `,tags:["GitHub","Lua","Mod","Python"],url:"https://steamcommunity.com/sharedfiles/filedetails/?id=2875792342",repository:"https://github.com/luizffgv/blink-mod-teardown",image:"Blink Ultimate Teleportation"},{name:"codinStruct",description:"Uma organiza\xe7\xe3o feita como projeto de faculdade, visando ajudar estudantes a aprender C, JavaScript e Python.  Trabalhei principalmente na organiza\xe7\xe3o, no Sass e no conte\xfado de C.",details:s`
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
    `,tags:["Bash","Docker","Express.js","GitHub","GitHub Actions","HTML","JavaScript","Markdown","mdBook","Node.js","Organiza\xe7\xe3o","Python","Sass","Site","TypeScript","Webpack"],url:"https://github.com/codinStruct",image:"codinStruct"},{name:"codinStruct Next",description:"Front-end em Next.js feito para o codinStruct—projeto realizado na Rede de Ensino Doctum com o intuito de produzir conte\xfados educacionais sobre programa\xe7\xe3o.",tags:["GitHub","GitHub Actions","HTML","Next.js","Node.js","React","TypeScript"],url:"https://codinstruct.luizf.dev",repository:"https://github.com/luizffgv/codinStruct-next",image:"codinStruct"},{name:"Ekranoplan",description:"Biblioteca JS/TS de uso geral com features simples e avan\xe7adas.",tags:["Biblioteca","GitHub","GitHub Actions","JavaScript","Node.js","Pacote NPM","TypeScript"],license:"MIT License",url:"https://ekranoplan.luizf.dev/",repository:"https://github.com/luizffgv/ekranoplan",image:"Ekranoplan"},{name:"ExpTL",description:"Biblioteca de C++ de uso geral, pretendendo complementar a biblioteca padr\xe3o.",tags:["Biblioteca","C++","C++20","Doxygen","GitHub","GitHub Actions"],license:"MIT License",url:"https://exptl.luizf.dev/modules.html",repository:"https://github.com/luizffgv/exptl"},{name:"Figment",description:"Uma classe em C++ que permite controle preciso da vida \xfatil de objetos de qualquer tipo. Semelhante a std::optional, mas n\xe3o cont\xe9m informa\xe7\xf5es sobre o objeto contido.",tags:["Biblioteca","C++","C++17","C++20","Doxygen","GitHub Actions","GitHub"],license:"Unlicense",url:"https://figment.luizf.dev",repository:"https://github.com/luizffgv/Figment"},{name:"Glimmer",description:"Um simples framework modular para bots de Discord baseado em discord.js.",tags:["Framework","Discord App","GitHub","GitHub Actions","JavaScript","Node.js","TypeScript"],license:"MIT License",repository:"https://github.com/luizffgv/Glimmer"},{name:"Globe",description:"Um site com um globo girat\xf3rio formado por pontos, te permitindo usar suas pr\xf3prias imagens como texturas.",tags:["GitHub Actions","GitHub","HTML","JavaScript","Node.js","Sass","Site","Three.js","TypeScript","Webpack"],details:s`
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
    `,license:"MIT License",url:"https://globe.luizf.dev",repository:"https://github.com/luizffgv/globe",image:"Globe"},{name:"Goo",description:"Elemento HTML configur\xe1vel que fornece um fundo animado com efeito de gosma.",tags:["GitHub","HTML","JavaScript","Node.js"],license:"MIT License",repository:"https://github.com/luizffgv/goo-html",image:"Goo"},{name:"HTilesML",description:"Jogo experimental utilizando elementos HTML e transforma\xe7\xf5es CSS 3D.",details:s`
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
    `,tags:["GitHub","HTML","JavaScript","Site"],license:"MIT License",url:"https://htilesml.luizf.dev",repository:"https://github.com/luizffgv/htilesml"},{name:"livro-c",description:"Livro virtual gratuito que pretende trazer uma fonte moderna, confi\xe1vel e completa para o aprendizado de C.",tags:["C","GitHub","Livro","mdBook"],license:"CC BY-SA 4.0",url:"https://luizffgv.github.io/livro-c/",repository:"https://github.com/luizffgv/livro-c"},{name:"Modern C Sorting Algorithms",description:"Cole\xe7\xe3o de algoritmos de ordena\xe7\xe3o gen\xe9ricos utilizando o padr\xe3o C18 extensivamente, feita para facilitar meus trabalhos de C na faculdade.",details:s`
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
    `,tags:["Biblioteca","C","C18","GitHub"],license:"GNU General Public License v3.0",repository:"https://github.com/luizffgv/modern-c-sorting-algorithms"},{name:"Phasmoo",description:"Um website e PWA totalmente responsivo que filtra fantasmas para auxiliar no gameplay do jogo Phasmophobia.",tags:["GitHub","GitHub Actions","HTML","JavaScript","Next.js","Node.js","React","Site","Tailwind CSS"],license:"MIT License",url:"https://phasmoo.luizf.dev",repository:"https://github.com/luizffgv/phasmoo",image:"Phasmoo"},{name:"Raiar",description:"Um pequeno framework web front-end fornecendo web components JS e estilos Sass configur\xe1veis.",details:s`
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
    `,tags:["GitHub","HTML","Framework","JavaScript","Sass"],license:"MIT License",repository:"https://github.com/luizffgv/raiar"},{name:"Separador de s\xedlabas",description:"Um site feito em Next.js que divide um texto em s\xedlabas utilizando um algoritmo que criei.",tags:["GitHub","GitHub Actions","HTML","JavaScript","Next.js","Node.js","React","Site","TypeScript"],license:"MIT License",url:"https://silabas.luizf.dev/",repository:"https://github.com/luizffgv/silabas-website",image:"Silabas"},{name:"Shader Site",description:"Um site que te ajuda a encontrar o shaderpack de Minecraft ideal para voc\xea.",tags:["GitHub","GitHub Actions","HTML","JavaScript","Lit","Node.js","Sass","Site","TypeScript","Webpack"],license:"MIT License",repository:"https://github.com/luizffgv/shader-site",url:"https://shadersite.luizf.dev",image:"Shader Site"},{name:"SoR-pt-BR",description:"Tradu\xe7\xe3o n\xe3o oficial para o jogo Streets of Rogue, com melhorias—algumas subjetivas—em rela\xe7\xe3o \xe0 vers\xe3o oficial.",tags:["GitHub","Python"],license:"Unlicense",repository:"https://github.com/luizffgv/SoR-pt-BR"},{name:"Spirit Box",description:"Bot para Discord que gera um di\xe1rio de anota\xe7\xf5es do jogo Phasmophobia, para auxiliar na identifica\xe7\xe3o de fantasmas e no compartilhamento de pistas com sua equipe.",details:s`
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
    `,tags:["Discord App","GitHub","JavaScript","Node.js","TypeScript"],license:"MIT License",repository:"https://github.com/luizffgv/spirit-box",image:"Spirit Box"},{name:"Swapem",description:"Ferramenta CLI e pacote NPM fornecendo uma stream transform que l\xea texto e substitui diretivas por valores vindos de um arquivo JSON.",tags:["Biblioteca","GitHub","GitHub Actions","JavaScript","Node.js","Pacote NPM","TypeScript"],license:"MIT License",url:"https://www.npmjs.com/package/swapem",repository:"https://github.com/luizffgv/swapem"},{name:"TS Conversions",description:"Biblioteca e pacote NPM fornecendo utilit\xe1rios para realizar convers\xf5es seguras ou inseguras e diminuir c\xf3digo boilerplate no TypeScript.",tags:["Biblioteca","GitHub Actions","GitHub","JavaScript","Node.js","Pacote NPM","TypeScript"],license:"MIT License",url:"https://www.npmjs.com/package/@luizffgv/ts-conversions",repository:"https://github.com/luizffgv/ts-conversions"},{name:"Viewport-Based Scaling",description:"Site que gera CSS para definir o valor de uma propriedade baseado na largura do viewport, realizando interpola\xe7\xe3o linear entre v\xe1rios pares de pontos.",tags:["GitHub","GitHub Actions","HTML","JavaScript","Node.js","Site","TypeScript","Webpack"],license:"MIT License",url:"https://vbs.luizf.dev",repository:"https://github.com/luizffgv/viewport-based-rescaling"}];var l=a(5889);function c(e){let{value:t,checked:a,onChange:o}=e;return(0,i.jsxs)("label",{className:"bg-bg-checkbox-unchecked relative inline-block rounded-lg border-2 border-primary px-2 py-1 text-center text-base text-primary transition-all hover:brightness-110 has-[:checked]:border-transparent has-[:checked]:bg-primary has-[:checked]:text-fg-on-primary dark:bg-bg-close-dark dark:has-[:checked]:bg-primary",children:[(0,i.jsx)("input",{className:"absolute inset-0 cursor-pointer appearance-none rounded-lg",type:"checkbox",value:t,checked:a,onChange:o||(()=>{})}),t]})}function d(e){let{value:t,checked:a,name:o,children:r,onChange:s}=e;return(0,i.jsxs)("label",{className:"bg-bg-checkbox-unchecked relative inline-block rounded-3xl border-2 border-primary px-2 py-1 text-center text-primary transition-all has-[:checked]:bg-primary has-[:checked]:text-fg-on-primary dark:bg-bg-close-dark dark:has-[:checked]:bg-primary",children:[(0,i.jsx)("input",{className:"absolute inset-0 cursor-pointer appearance-none rounded-3xl checked:cursor-default",type:"radio",name:o,value:t,checked:a,onChange:s||(()=>{})}),r]})}function u(e){let{level:t,children:a}=e;return 1===t?(0,i.jsx)("h1",{className:"mb-8 text-center text-3xl font-bold",children:a}):2===t?(0,i.jsx)("h2",{className:"mb-12 text-center text-3xl font-bold",children:a}):3===t?(0,i.jsx)("h3",{className:"mb-4 text-center text-xl",children:a}):4===t?(0,i.jsx)("h4",{className:"mb-2 text-center text-lg",children:a}):5===t?(0,i.jsx)("h5",{className:"mb-2 text-center text-lg",children:a}):(0,i.jsx)("h6",{className:"mb-2 text-center text-lg",children:a})}function m(e){let{title:t,children:a,level:o}=e;return(0,i.jsxs)("section",{children:[(0,i.jsx)(u,{level:o,children:t}),a]})}var p=a(7907);let f=new Set(["Bash","C++17","C++20","C18","Doxygen","GitHub","HTML","Livro","Markdown","mdBook","Organiza\xe7\xe3o"]),h=[...n.map(e=>e.tags).reduce((e,t)=>{for(let a of t)e.add(a);return e},new Set)].filter(e=>!f.has(e)).sort();function g(e,t){var a;return new Set((null!==(a=e.tags)&&void 0!==a?a:[]).filter(e=>t.has(e)))}function b(){let e=(0,p.useSearchParams)(),{setFilter:t}=(0,o.useContext)(r),[a,s]=(0,o.useState)("best-match"),[n,u]=(0,o.useState)({value:new Set});return(0,o.useLayoutEffect)(()=>{u({value:new Set(e.getAll("tags").filter(e=>h.includes(e)))})},[e]),(0,o.useEffect)(()=>{t(e=>{let t=[...e].sort((e,t)=>g(t,n.value).size-g(e,n.value).size);return n.value.size>0&&(t=t.filter(e=>g(e,n.value).size>0)),"every"===a&&(t=t.filter(e=>{for(let a of n.value){var t;if(!(null===(t=e.tags)||void 0===t?void 0:t.includes(a)))return!1}return!0})),t})},[a,n,t]),(0,i.jsx)(m,{level:2,title:"Filtros",children:(0,i.jsxs)("div",{className:"flex flex-row flex-wrap items-stretch justify-center gap-4",children:[(0,i.jsx)(l.Z,{children:(0,i.jsxs)("fieldset",{className:"flex max-h-[50vh] max-w-4xl flex-row flex-wrap gap-1 overflow-y-auto",onChange:e=>{if(!(e.target instanceof HTMLInputElement)){console.error("event.target is not an HTMLInputElement");return}e.target.checked?n.value.add(e.target.value):n.value.delete(e.target.value),u({value:n.value})},children:[(0,i.jsx)("legend",{className:"float-left mb-3 w-full text-center",children:"Selecione tags"}),h.map(e=>(0,i.jsx)("div",{className:"flex grow flex-col items-stretch",children:(0,i.jsx)(c,{value:e,checked:n.value.has(e)})},e))]})}),(0,i.jsx)(l.Z,{children:(0,i.jsxs)("fieldset",{className:"flex flex-col items-stretch gap-4",onChange:e=>{if(!(e.target instanceof HTMLInputElement)){console.error("event.target is not an HTMLInputElement");return}s(e.target.value)},children:[(0,i.jsx)("legend",{className:"float-left w-full text-center",children:"L\xf3gica de filtragem"}),(0,i.jsx)(d,{name:"project-filter-mode",value:"best-match",checked:"best-match"===a,children:"Melhor correspond\xeancia"}),(0,i.jsx)(d,{name:"project-filter-mode",value:"every",checked:"every"===a,children:"Possui todas categorias selecionadas"})]})})]})})}var x=a(5526);function v(){let e=(0,o.useRef)(!1);return(0,x.L)(()=>(e.current=!0,()=>{e.current=!1}),[]),e}var j=a(4205),S=a(4561),y=a(2435),w=a(3449);class k extends o.Component{getSnapshotBeforeUpdate(e){let t=this.props.childRef.current;if(t&&e.isPresent&&!this.props.isPresent){let e=this.props.sizeRef.current;e.height=t.offsetHeight||0,e.width=t.offsetWidth||0,e.top=t.offsetTop,e.left=t.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function z({children:e,isPresent:t}){let a=(0,o.useId)(),r=(0,o.useRef)(null),s=(0,o.useRef)({width:0,height:0,top:0,left:0}),{nonce:n}=(0,o.useContext)(w._);return(0,o.useInsertionEffect)(()=>{let{width:e,height:i,top:o,left:l}=s.current;if(t||!r.current||!e||!i)return;r.current.dataset.motionPopId=a;let c=document.createElement("style");return n&&(c.nonce=n),document.head.appendChild(c),c.sheet&&c.sheet.insertRule(`
          [data-motion-pop-id="${a}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${i}px !important;
            top: ${o}px !important;
            left: ${l}px !important;
          }
        `),()=>{document.head.removeChild(c)}},[t]),(0,i.jsx)(k,{isPresent:t,childRef:r,sizeRef:s,children:o.cloneElement(e,{ref:r})})}let N=({children:e,initial:t,isPresent:a,onExitComplete:r,custom:s,presenceAffectsLayout:n,mode:l})=>{let c=(0,y.h)(T),d=(0,o.useId)(),u=(0,o.useMemo)(()=>({id:d,initial:t,isPresent:a,custom:s,onExitComplete:e=>{for(let t of(c.set(e,!0),c.values()))if(!t)return;r&&r()},register:e=>(c.set(e,!1),()=>c.delete(e))}),n?[Math.random()]:[a]);return(0,o.useMemo)(()=>{c.forEach((e,t)=>c.set(t,!1))},[a]),o.useEffect(()=>{a||c.size||!r||r()},[a]),"popLayout"===l&&(e=(0,i.jsx)(z,{isPresent:a,children:e})),(0,i.jsx)(S.O.Provider,{value:u,children:e})};function T(){return new Map}var C=a(3856),L=a(9908);let M=e=>e.key||"",H=({children:e,custom:t,initial:a=!0,onExitComplete:r,exitBeforeEnter:s,presenceAffectsLayout:n=!0,mode:l="sync"})=>{var c;(0,L.k)(!s,"Replace exitBeforeEnter with mode='wait'");let d=(0,o.useContext)(C.p).forceRender||function(){let e=v(),[t,a]=(0,o.useState)(0),i=(0,o.useCallback)(()=>{e.current&&a(t+1)},[t]);return[(0,o.useCallback)(()=>j.Wi.postRender(i),[i]),t]}()[0],u=v(),m=function(e){let t=[];return o.Children.forEach(e,e=>{(0,o.isValidElement)(e)&&t.push(e)}),t}(e),p=m,f=(0,o.useRef)(new Map).current,h=(0,o.useRef)(p),g=(0,o.useRef)(new Map).current,b=(0,o.useRef)(!0);if((0,x.L)(()=>{b.current=!1,function(e,t){e.forEach(e=>{let a=M(e);t.set(a,e)})}(m,g),h.current=p}),c=()=>{b.current=!0,g.clear(),f.clear()},(0,o.useEffect)(()=>()=>c(),[]),b.current)return(0,i.jsx)(i.Fragment,{children:p.map(e=>(0,i.jsx)(N,{isPresent:!0,initial:!!a&&void 0,presenceAffectsLayout:n,mode:l,children:e},M(e)))});p=[...p];let S=h.current.map(M),y=m.map(M),w=S.length;for(let e=0;e<w;e++){let t=S[e];-1!==y.indexOf(t)||f.has(t)||f.set(t,void 0)}return"wait"===l&&f.size&&(p=[]),f.forEach((e,a)=>{if(-1!==y.indexOf(a))return;let o=g.get(a);if(!o)return;let s=S.indexOf(a),c=e;c||(c=(0,i.jsx)(N,{isPresent:!1,onExitComplete:()=>{f.delete(a);let e=Array.from(g.keys()).filter(e=>!y.includes(e));if(e.forEach(e=>g.delete(e)),h.current=m.filter(t=>{let i=M(t);return i===a||e.includes(i)}),!f.size){if(!1===u.current)return;d(),r&&r()}},custom:t,presenceAffectsLayout:n,mode:l,children:o},M(o)),f.set(a,c)),p.splice(s,0,c)}),p=p.map(e=>{let t=e.key;return f.has(t)?e:(0,i.jsx)(N,{isPresent:!0,presenceAffectsLayout:n,mode:l,children:e},M(e))}),(0,i.jsx)(i.Fragment,{children:f.size?p:p.map(e=>(0,o.cloneElement)(e))})};var G=a(7749),P=a(4464);/**
 * @license lucide-react v0.365.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let E=(0,a(843).Z)("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);function q(e){let{project:t}=e;return(0,i.jsxs)(G.E.div,{"aria-label":t.name,className:"flex w-[400px] flex-col gap-4",role:"group",children:[null==t.image?(0,i.jsx)("div",{className:"aspect-[400/225] rounded-2xl"}):(0,i.jsxs)("div",{className:"relative aspect-[400/225]  rounded-2xl",children:[(0,i.jsx)("img",{className:"absolute left-1/2 top-1/2 max-h-full max-w-full -translate-x-1/2 -translate-y-1/2 blur-2xl",src:"/project-images/".concat(t.image,".webp"),alt:"Imagem do projeto ".concat(t.name),"aria-hidden":!0}),(0,i.jsx)("img",{className:"absolute left-1/2 top-1/2 max-h-full max-w-full -translate-x-1/2 -translate-y-1/2",src:"/project-images/".concat(t.image,".webp"),alt:"Imagem do projeto ".concat(t.name),"aria-hidden":!0})]}),(0,i.jsxs)("div",{className:"flex justify-between",children:[(0,i.jsx)("div",{className:"text-2xl font-bold",children:t.name}),(0,i.jsx)("div",{children:t.repository?(0,i.jsx)(P.Z,{href:t.repository,isIcon:!0,children:(0,i.jsx)(E,{})}):null})]}),(0,i.jsx)("div",{children:t.description})]})}function R(){let{filter:e}=(0,o.useContext)(r),t=(0,o.useMemo)(()=>e(n),[e]);return(0,i.jsxs)("ul",{className:"flex flex-row flex-wrap justify-center gap-16",children:[(0,i.jsx)(H,{children:t.map(e=>(0,i.jsx)(G.E.li,{className:"contents",layout:!0,children:(0,i.jsx)(q,{project:e})},e.name))}),0===t.length&&(0,i.jsx)("li",{className:"text-center text-xl",children:"Nenhum projeto se encaixa nos filtros."})]})}function B(){let[e,t]=(0,o.useState)(()=>e=>e),a=(0,o.useCallback)(e=>{t(()=>e)},[]),s=(0,o.useRef)(null);return(0,o.useLayoutEffect)(()=>{if(null==s.current){console.error("projectsListRef.current is null");return}new Animation(new KeyframeEffect(s.current,[{opacity:0},{}],{duration:500,easing:"ease"})).play()},[e]),(0,i.jsx)(m,{level:1,title:(0,i.jsx)(i.Fragment,{children:"Meus projetos"}),children:(0,i.jsx)(r.Provider,{value:{filter:e,setFilter:a},children:(0,i.jsxs)("div",{className:"flex flex-col items-center gap-8",children:[(0,i.jsx)(o.Suspense,{children:(0,i.jsx)(b,{})}),(0,i.jsx)("div",{ref:s,className:"max-w-screen-2xl pb-[100vh]",children:(0,i.jsx)(R,{})})]})})})}},3975:function(e){e.exports={"modal-container":"modal_modal-container__i_YSx",dismiss:"modal_dismiss__Pn0UK",modal:"modal_modal__L3VW0"}}},function(e){e.O(0,[407,971,69,744],function(){return e(e.s=5963)}),_N_E=e.O()}]);