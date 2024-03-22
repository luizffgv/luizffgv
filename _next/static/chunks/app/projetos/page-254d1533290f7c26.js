(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[725],{8157:function(e,a,t){Promise.resolve().then(t.bind(t,3763))},7907:function(e,a,t){"use strict";var o=t(5313);t.o(o,"usePathname")&&t.d(a,{usePathname:function(){return o.usePathname}}),t.o(o,"useSearchParams")&&t.d(a,{useSearchParams:function(){return o.useSearchParams}})},2529:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return d}});var o=t(7437),i=t(8792),s=t(2265),r=t(8656),n=t.n(r);function l(e){let{children:a,onDismiss:t}=e,i=(0,s.useRef)(null);return(0,s.useEffect)(()=>{if(null==i.current){console.error("dialogRef.current is null.");return}i.current.showModal()},[]),(0,o.jsxs)("dialog",{ref:i,className:"".concat(n()["modal-container"]," fixed flex h-[100dvh] max-h-none w-[100dvw] max-w-none flex-col items-center justify-center gap-4 bg-transparent p-4 text-inherit"),onClose:()=>null==t?void 0:t(),children:[t?(0,o.jsx)("div",{className:n().dismiss,children:(0,o.jsx)(d,{onClick:t,"aria-label":"Fechar modal",children:(0,o.jsx)("span",{className:"material-symbols-outlined","aria-hidden":!0,translate:"no",children:"close"})})}):(0,o.jsx)(o.Fragment,{}),(0,o.jsx)("div",{className:"".concat(n().modal," dark:bg-bg-close-dark rounded-xl bg-bg-close p-4"),children:a})]})}function c(e){let[a,t]=(0,s.useState)(!1);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("button",{className:"inline-block flex flex-row items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2 font-bold text-fg-on-primary transition hover:brightness-110",onClick:()=>t(!0),"aria-label":e["aria-label"],children:e.children}),a?(0,o.jsx)(l,{onDismiss:()=>t(!1),children:e.modalContent}):(0,o.jsx)(o.Fragment,{})]})}function d(e){let a="inline-block flex flex-row items-center gap-2 rounded-lg bg-primary px-4 py-2 font-bold text-fg-on-primary justify-center transition hover:brightness-110 hover:shadow-[0_0_10px_theme(colors.primary)]";return(0,o.jsx)(o.Fragment,{children:"onClick"in e?(0,o.jsx)("button",{...e,type:"button",className:a}):"href"in e?(0,o.jsx)(i.default,{...e,className:a}):(0,o.jsx)(c,{...e,className:a})})}},3763:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return b}});var o=t(7437),i=t(2265);let s=(0,i.createContext)({filter:e=>e,setFilter:()=>{}});function r(e,...a){let t=a.map(String);return t.push(""),e.map((e,a)=>e+t[a]).reduce((e,a)=>e+a)}let n=[{name:"Blink: Ultimate Teleportation",description:"Instalado por mais de 32 mil usu\xe1rios diferentes, Blink \xe9 um mod feito em Lua para o jogo Teardown.",details:r`
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
    `,tags:["Bash","Docker","Express.js","GitHub","GitHub Actions","HTML","JavaScript","Markdown","mdBook","Node.js","Organiza\xe7\xe3o","Python","Sass","Site","TypeScript","Webpack"],url:"https://github.com/codinStruct",image:"codinStruct"},{name:"codinStruct Next",description:"Front-end em Next.js feito para o codinStruct—projeto realizado na Rede de Ensino Doctum com o intuito de produzir conte\xfados educacionais sobre programa\xe7\xe3o.",tags:["GitHub","GitHub Actions","HTML","Next.js","Node.js","React","TypeScript"],url:"https://codinstruct.luizf.dev",repository:"https://github.com/luizffgv/codinStruct-next",image:"codinStruct"},{name:"ExpTL",description:"Biblioteca de C++ de uso geral, pretendendo complementar a biblioteca padr\xe3o.",tags:["Biblioteca","C++","C++20","Doxygen","GitHub","GitHub Actions"],license:"MIT License",url:"https://exptl.luizf.dev/modules.html",repository:"https://github.com/luizffgv/exptl"},{name:"Figment",description:"Uma classe em C++ que permite controle preciso da vida \xfatil de objetos de qualquer tipo. Semelhante a std::optional, mas n\xe3o cont\xe9m informa\xe7\xf5es sobre o objeto contido.",tags:["Biblioteca","C++","C++17","C++20","Doxygen","GitHub Actions","GitHub"],license:"Unlicense",url:"https://figment.luizf.dev",repository:"https://github.com/luizffgv/Figment"},{name:"Glimmer",description:"Um simples framework modular para bots de Discord baseado em discord.js.",tags:["Framework","Discord App","GitHub","GitHub Actions","JavaScript","Node.js","TypeScript"],license:"MIT License",repository:"https://github.com/luizffgv/Glimmer"},{name:"Globe",description:"Um site com um globo girat\xf3rio formado por pontos, te permitindo usar suas pr\xf3prias imagens como texturas.",tags:["GitHub Actions","GitHub","HTML","JavaScript","Node.js","Sass","Site","Three.js","TypeScript","Webpack"],details:r`
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
    `,license:"MIT License",url:"https://globe.luizf.dev",repository:"https://github.com/luizffgv/globe",image:"Globe"},{name:"HTilesML",description:"Jogo experimental utilizando elementos HTML e transforma\xe7\xf5es CSS 3D.",details:r`
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
    `,tags:["Discord App","GitHub","JavaScript","Node.js","TypeScript"],license:"MIT License",repository:"https://github.com/luizffgv/spirit-box",image:"Spirit Box"},{name:"TS Conversions",description:"Biblioteca e pacote NPM fornecendo utilit\xe1rios para realizar convers\xf5es seguras ou inseguras e diminuir c\xf3digo boilerplate no TypeScript.",tags:["Biblioteca","GitHub Actions","GitHub","JavaScript","Node.js","Pacote NPM","TypeScript"],license:"MIT License",url:"https://www.npmjs.com/package/@luizffgv/ts-conversions",repository:"https://github.com/luizffgv/ts-conversions"},{name:"Viewport-Based Scaling",description:"Site que gera CSS para definir o valor de uma propriedade baseado na largura do viewport, realizando interpola\xe7\xe3o linear entre v\xe1rios pares de pontos.",tags:["GitHub","GitHub Actions","HTML","JavaScript","Node.js","Site","TypeScript","Webpack"],license:"MIT License",url:"https://vbs.luizf.dev",repository:"https://github.com/luizffgv/viewport-based-rescaling"}];var l=t(7907);function c(e){let{value:a,checked:t,onChange:i}=e;return(0,o.jsxs)("label",{className:"relative inline-block rounded-lg border border-fg/5 bg-bg-close px-4 py-2 text-center font-bold shadow-sm transition-all hover:brightness-110 has-[:checked]:border-transparent has-[:checked]:bg-primary has-[:checked]:text-fg-on-primary has-[:checked]:shadow-[0_0_10px_theme(colors.primary)] dark:border-fg-dark/10 dark:bg-bg-close-dark",children:[(0,o.jsx)("input",{className:"absolute inset-0 cursor-pointer appearance-none rounded-lg",type:"checkbox",value:a,checked:t,onChange:i||(()=>{})}),a]})}function d(e){let{value:a,checked:t,name:i,children:s,onChange:r}=e;return(0,o.jsxs)("label",{className:"relative inline-block rounded-lg border border-fg/5 bg-bg-close px-4 py-2 text-center font-bold shadow-sm transition-all hover:brightness-110 has-[:checked]:border-transparent has-[:checked]:bg-primary has-[:checked]:text-fg-on-primary has-[:checked]:shadow-[0_0_10px_theme(colors.primary)] dark:border-fg-dark/10 dark:bg-bg-close-dark",children:[(0,o.jsx)("input",{className:"absolute inset-0 cursor-pointer appearance-none rounded-lg",type:"radio",name:i,value:a,checked:t,onChange:r||(()=>{})}),s]})}let u=[...n.map(e=>e.tags).reduce((e,a)=>{for(let t of a)e.add(t);return e},new Set)].sort();function m(e,a){var t;return new Set((null!==(t=e.tags)&&void 0!==t?t:[]).filter(e=>a.has(e)))}function p(){let e=(0,l.useSearchParams)(),{setFilter:a}=(0,i.useContext)(s),[t,r]=(0,i.useState)("best-match"),[n,p]=(0,i.useState)({value:new Set});return(0,i.useLayoutEffect)(()=>{p({value:new Set(e.getAll("tags").filter(e=>u.includes(e)))})},[e]),(0,i.useEffect)(()=>{a(e=>{let a=[...e].sort((e,a)=>m(a,n.value).size-m(e,n.value).size);return n.value.size>0&&(a=a.filter(e=>m(e,n.value).size>0)),"every"==t&&(a=a.filter(e=>{for(let t of n.value){var a;if(!(null===(a=e.tags)||void 0===a?void 0:a.includes(t)))return!1}return!0})),a})},[t,n,a]),(0,o.jsxs)("div",{className:"flex flex-col items-center gap-4",children:[(0,o.jsx)("h2",{className:"text-xl",children:"Filtros"}),(0,o.jsxs)("div",{className:"flex flex-row flex-wrap items-stretch justify-center gap-4",children:[(0,o.jsxs)("fieldset",{className:"flex max-h-[50vh] max-w-4xl flex-row flex-wrap gap-1 overflow-y-auto rounded-2xl bg-bg-close p-4 dark:bg-bg-close-dark",onChange:e=>{if(!(e.target instanceof HTMLInputElement)){console.error("event.target is not an HTMLInputElement");return}e.target.checked?n.value.add(e.target.value):n.value.delete(e.target.value),p({value:n.value})},children:[(0,o.jsx)("legend",{className:"float-left mb-3 w-full text-center",children:"Selecione tags"}),u.map(e=>(0,o.jsx)("div",{className:"flex grow flex-col items-stretch",children:(0,o.jsx)(c,{value:e,checked:n.value.has(e)})},e))]}),(0,o.jsxs)("fieldset",{className:"flex flex-col items-stretch gap-4 rounded-2xl bg-bg-close p-4 dark:bg-bg-close-dark",onChange:e=>{if(!(e.target instanceof HTMLInputElement)){console.error("event.target is not an HTMLInputElement");return}r(e.target.value)},children:[(0,o.jsx)("legend",{className:"float-left w-full text-center",children:"L\xf3gica de filtragem"}),(0,o.jsx)(d,{name:"project-filter-mode",value:"best-match",checked:"best-match"===t,children:"Melhor correspond\xeancia"}),(0,o.jsx)(d,{name:"project-filter-mode",value:"every",checked:"every"===t,children:"Possui todas categorias selecionadas"})]})]})]})}var g=t(2529);function f(e){let{project:a}=e;return(0,o.jsxs)("div",{className:"flex max-w-prose flex-col items-center",role:"group","aria-label":a.name,children:[null!=a.image?(0,o.jsxs)("div",{className:"relative",children:[(0,o.jsx)("img",{src:"/project-images/".concat(a.image,".webp"),className:"h-16 rounded-lg blur-2xl",alt:"Imagem do projeto ".concat(a.name)}),(0,o.jsx)("img",{src:"/project-images/".concat(a.image,".webp"),className:"absolute left-0 top-0 h-16 rounded-lg",alt:"Imagem do projeto ".concat(a.name)})]}):(0,o.jsx)("div",{className:"h-16"}),(0,o.jsxs)("div",{className:"flex grow flex-col items-center justify-between gap-4 p-4",children:[(0,o.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,o.jsx)("div",{className:"text-center text-lg font-bold",children:a.name}),(0,o.jsx)("div",{children:a.description})]}),(0,o.jsxs)("div",{className:"flex flex-row flex-wrap items-stretch justify-center gap-4 *:grow",children:[a.url?(0,o.jsx)("div",{children:(0,o.jsxs)(g.default,{href:a.url,target:"_blank",children:[(0,o.jsx)("span",{className:"material-symbols-outlined","aria-hidden":!0,translate:"no",children:"visibility"}),"Visitar"]})}):(0,o.jsx)(o.Fragment,{}),a.repository?(0,o.jsx)("div",{children:(0,o.jsxs)(g.default,{href:a.repository,target:"_blank",children:[(0,o.jsx)("span",{className:"material-symbols-outlined","aria-hidden":!0,translate:"no",children:"folder_data"}),"Reposit\xf3rio"]})}):(0,o.jsx)(o.Fragment,{})]})]})]})}function h(){let{filter:e}=(0,i.useContext)(s),a=(0,i.useMemo)(()=>e(n),[e]);return(0,o.jsxs)("ul",{className:"flex flex-row flex-wrap justify-center gap-8",children:[a.map(e=>(0,o.jsx)("li",{className:"appear flex min-w-fit grow basis-0 flex-row items-stretch justify-center rounded-2xl bg-bg-close p-4 shadow-sm dark:bg-bg-close-dark",children:(0,o.jsx)(f,{project:e})},e.name)),0==a.length&&(0,o.jsx)("li",{className:"text-center text-xl",children:"Nenhum projeto se encaixa nos filtros."})]})}function b(){let[e,a]=(0,i.useState)(()=>e=>e),t=(0,i.useCallback)(e=>a(()=>e),[]),r=(0,i.useRef)(null);return(0,i.useLayoutEffect)(()=>{if(null==r){console.error("projectsListRef is null");return}new Animation(new KeyframeEffect(r.current,[{opacity:0},{}],{duration:500,easing:"ease"})).play()},[e]),(0,o.jsxs)("section",{className:"flex flex-col items-center gap-8","aria-label":"Meus projetos",children:[(0,o.jsx)("h1",{className:"text-center text-2xl",children:"Meus projetos"}),(0,o.jsxs)(s.Provider,{value:{filter:e,setFilter:t},children:[(0,o.jsx)(i.Suspense,{children:(0,o.jsx)(p,{})}),(0,o.jsx)("div",{ref:r,className:"max-w-screen-2xl pb-[100vh]",children:(0,o.jsx)(h,{})})]})]})}},8656:function(e){e.exports={"modal-container":"modal_modal-container__CjvJZ",dismiss:"modal_dismiss__uuQxh",modal:"modal_modal__noGlo"}}},function(e){e.O(0,[792,971,69,744],function(){return e(e.s=8157)}),_N_E=e.O()}]);