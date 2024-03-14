(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[157],{8157:function(e,t,a){Promise.resolve().then(a.bind(a,7749))},429:function(e,t,a){"use strict";a.d(t,{Z:function(){return n}});var i=a(7437),o=a(2265),s=a(8656),r=a.n(s);function n(e){let{children:t,onDismiss:a,noCard:s}=e,n=(0,o.useRef)(null);return(0,o.useEffect)(()=>{if(null==n.current){console.error("dialogRef.current is null.");return}n.current.showModal()},[]),(0,i.jsxs)("dialog",{ref:n,className:"".concat(r()["modal-container"]," raiar flex-col align-items-center justify-content-safe-center gap"),children:[a?(0,i.jsx)("button",{type:"button",className:r().dismiss,onClick:()=>a(),children:(0,i.jsx)("span",{className:"material-symbols-outlined",children:"close"})}):(0,i.jsx)(i.Fragment,{}),(0,i.jsx)("div",{className:"".concat(r().modal," ").concat(s?"":"raiar-card"),children:t})]})}},7749:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return _}});var i=a(7437),o=a(2265);let s=(0,o.createContext)({filter:e=>e,setFilter:()=>{}});function r(e,...t){let a=t.map(String);return a.push(""),e.map((e,t)=>e+a[t]).reduce((e,t)=>e+t)}let n=[{name:"Blink: Ultimate Teleportation",description:"Instalado por mais de 32 mil usu\xe1rios diferentes, Blink \xe9 um mod feito em Lua para o jogo Teardown.",details:r`
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
    `,tags:["Bash","Docker","Express.js","GitHub","GitHub Actions","HTML","JavaScript","Markdown","mdBook","Node.js","Organiza\xe7\xe3o","Python","Sass","Site","TypeScript","Webpack"],url:"https://github.com/codinStruct",image:"codinStruct"},{name:"codinStruct Next",description:"Front-end em Next.js feito para o projeto codinStruct.",tags:["GitHub","GitHub Actions","HTML","Next.js","Node.js","React","TypeScript"],url:"https://codinstruct.luizf.dev",repository:"https://github.com/luizffgv/codinStruct-next"},{name:"ExpTL",description:"Biblioteca de C++ de uso geral, pretendendo complementar a biblioteca padr\xe3o.",tags:["Biblioteca","C++","C++20","Doxygen","GitHub","GitHub Actions"],license:"MIT License",url:"https://exptl.luizf.dev/modules.html",repository:"https://github.com/luizffgv/exptl"},{name:"Figment",description:"Uma classe em C++ que permite controle preciso da vida \xfatil de objetos de qualquer tipo. Semelhante a std::optional, mas n\xe3o cont\xe9m informa\xe7\xf5es sobre o objeto contido.",tags:["Biblioteca","C++","C++17","C++20","Doxygen","GitHub Actions","GitHub"],license:"Unlicense",url:"https://figment.luizf.dev",repository:"https://github.com/luizffgv/Figment"},{name:"Glimmer",description:"Um simples framework modular para bots de Discord baseado em discord.js.",tags:["Framework","Discord App","GitHub","GitHub Actions","JavaScript","Node.js","TypeScript"],license:"MIT License",repository:"https://github.com/luizffgv/Glimmer"},{name:"Globe",description:"Um site com um globo girat\xf3rio formado por pontos, te permitindo usar suas pr\xf3prias imagens como texturas.",tags:["GitHub Actions","GitHub","HTML","JavaScript","Node.js","Sass","Site","Three.js","TypeScript","Webpack"],details:r`
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
    `,tags:["Biblioteca","C","C18","GitHub"],license:"GNU General Public License v3.0",repository:"https://github.com/luizffgv/modern-c-sorting-algorithms"},{name:"Raiar",description:"Um pequeno framework web front-end fornecendo web components JS e estilos Sass configur\xe1veis.",details:r`
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
    `,tags:["GitHub","HTML","Framework","JavaScript","Sass"],license:"MIT License",repository:"https://github.com/luizffgv/raiar"},{name:"Separador de s\xedlabas",description:"Um site feito em Next.js que divide um texto em s\xedlabas utilizando um algoritmo que criei.",tags:["GitHub","GitHub Actions","HTML","JavaScript","Next.js","Node.js","React","Site","TypeScript"],license:"MIT License",url:"https://silabas.luizf.dev/",repository:"https://github.com/luizffgv/silabas-website"},{name:"Shader Site",description:"Um site que te ajuda a encontrar o shaderpack de Minecraft ideal para voc\xea.",tags:["GitHub","GitHub Actions","HTML","JavaScript","Lit","Node.js","Sass","Site","TypeScript","Webpack"],license:"MIT License",repository:"https://github.com/luizffgv/shader-site",url:"https://shadersite.luizf.dev",image:"Shader Site"},{name:"SoR-pt-BR",description:"Tradu\xe7\xe3o n\xe3o oficial para o jogo Streets of Rogue, com melhorias—algumas subjetivas—em rela\xe7\xe3o \xe0 vers\xe3o oficial.",tags:["GitHub","Python"],license:"Unlicense",repository:"https://github.com/luizffgv/SoR-pt-BR"},{name:"Spirit Box",description:"Bot para Discord que gera um di\xe1rio de anota\xe7\xf5es do jogo Phasmophobia, para auxiliar na identifica\xe7\xe3o de fantasmas e no compartilhamento de pistas com sua equipe.",details:r`
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
    `,tags:["Discord App","GitHub","JavaScript","Node.js","TypeScript"],license:"MIT License",repository:"https://github.com/luizffgv/spirit-box",image:"Spirit Box"},{name:"TS Conversions",description:"Biblioteca e pacote NPM fornecendo utilit\xe1rios para realizar convers\xf5es seguras ou inseguras e diminuir c\xf3digo boilerplate no TypeScript. Tamb\xe9m \xe9 utilizada nesse site.",tags:["Biblioteca","GitHub Actions","GitHub","JavaScript","Node.js","Pacote NPM","TypeScript"],license:"MIT License",url:"https://www.npmjs.com/package/@luizffgv/ts-conversions",repository:"https://github.com/luizffgv/ts-conversions"},{name:"Viewport-Based Scaling",description:"Site que gera CSS para definir o valor de uma propriedade baseado na largura do viewport, realizando interpola\xe7\xe3o linear entre v\xe1rios pares de pontos.",tags:["GitHub","GitHub Actions","HTML","JavaScript","Node.js","Site","TypeScript","Webpack"],license:"MIT License",url:"https://vbs.luizf.dev",repository:"https://github.com/luizffgv/viewport-based-rescaling"}];var l=a(6585),c=a.n(l),d=a(5313);let u=[...n.map(e=>e.tags).reduce((e,t)=>{for(let a of t)e.add(a);return e},new Set)].sort();function p(e,t){var a;return new Set((null!==(a=e.tags)&&void 0!==a?a:[]).filter(e=>t.has(e)))}function m(){let e=(0,d.useSearchParams)(),{setFilter:t}=(0,o.useContext)(s),[a,r]=(0,o.useState)("best-match"),[n,l]=(0,o.useState)({value:new Set}),m=(0,o.useRef)(null);return(0,o.useLayoutEffect)(()=>{l({value:new Set(e.getAll("tags").filter(e=>u.includes(e)))}),null==m.current?console.error("detailsRef is null."):null!=e.get("tags")&&(m.current.open=!0)},[e]),(0,o.useEffect)(()=>{t(e=>{let t=[...e].sort((e,t)=>p(t,n.value).size-p(e,n.value).size);return n.value.size>0&&(t=t.filter(e=>p(e,n.value).size>0)),"every"==a&&(t=t.filter(e=>{for(let a of n.value){var t;if(!(null===(t=e.tags)||void 0===t?void 0:t.includes(a)))return!1}return!0})),t})},[a,n,t]),(0,i.jsx)("div",{id:"filters-accordion",className:c().container,children:(0,i.jsxs)("details",{ref:m,children:[(0,i.jsx)("summary",{children:"Filtros"}),(0,i.jsxs)("div",{className:"raiar flex-row flex-wrap gap justify-content-center",children:[(0,i.jsxs)("fieldset",{id:"tags",className:"".concat(c().tags," raiar flex-row flex-wrap gap"),onChange:e=>{if(!(e.target instanceof HTMLInputElement)){console.error("event.target is not an HTMLInputElement");return}e.target.checked?n.value.add(e.target.value):n.value.delete(e.target.value),l({value:n.value})},children:[(0,i.jsx)("legend",{children:"Selecione tags"}),u.map(e=>(0,i.jsxs)("label",{children:[e," ",(0,i.jsx)("input",{type:"checkbox",value:e,checked:n.value.has(e),onChange:()=>{}})]},e))]}),(0,i.jsxs)("fieldset",{id:"project-filter-modes",onChange:e=>{if(!(e.target instanceof HTMLInputElement)){console.error("event.target is not an HTMLInputElement");return}r(e.target.value)},children:[(0,i.jsx)("legend",{children:"L\xf3gica de filtragem"}),(0,i.jsxs)("label",{children:[(0,i.jsx)("input",{type:"radio",name:"project-filter-mode",value:"best-match",defaultChecked:!0}),"Melhor correspond\xeancia"]}),(0,i.jsxs)("label",{children:[(0,i.jsx)("input",{type:"radio",name:"project-filter-mode",value:"every"}),"Possui todas categorias selecionadas"]})]})]})]})})}var g=a(728),f=a.n(g),h=a(429),v=a(1642),b=a.n(v);function j(e){let{project:t}=e;return(0,i.jsxs)("div",{className:"raiar-card width-fit",children:[null==t.image?(0,i.jsx)(i.Fragment,{}):(0,i.jsx)("div",{className:"raiar flex-row justify-content-center",children:(0,i.jsx)("img",{className:b().image,src:"/project-images/".concat(t.image,".webp"),alt:t.name})}),(0,i.jsxs)("div",{className:b().content,children:[(0,i.jsx)("h1",{children:t.name}),(0,i.jsx)("p",{children:t.description}),null==t.details?(0,i.jsx)(i.Fragment,{}):(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("h2",{children:"Detalhes"}),(0,i.jsx)("div",{dangerouslySetInnerHTML:{__html:t.details}})]})]})]})}function x(e){let{project:t}=e,[a,s]=(0,o.useState)(!1);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("div",{className:"".concat(f().project," raiar-card raiar align-items-center flex-col gap justify-content-between"),role:"group","aria-label":t.name,children:[(0,i.jsxs)("div",{className:"".concat(f()["title-container"]," raiar flex-row gap flex-wrap align-items-center justify-content-center"),style:{minHeight:"48px"},children:[null==t.image?(0,i.jsx)(i.Fragment,{}):(0,i.jsx)("img",{className:f().image,src:"/project-images/".concat(t.image,".webp"),alt:t.name}),(0,i.jsxs)("div",{className:"raiar flex-row gap flex-wrap align-items-baseline",children:[(0,i.jsxs)("h3",{children:[t.name," ",t.wip?"(em progresso)":""]}),(0,i.jsx)("small",{className:f().license,children:t.license})]})]}),(0,i.jsx)("p",{children:t.description}),(0,i.jsxs)("div",{className:"raiar flex-row gap flex-wrap justify-content-center",children:[null==t.url?(0,i.jsx)(i.Fragment,{}):(0,i.jsxs)("a",{className:"".concat(f()["button-view"]," button"),href:t.url,children:[(0,i.jsx)("span",{className:"material-symbols-outlined","aria-hidden":"true",children:"visibility"}),"Visualizar"]}),null==t.repository?(0,i.jsx)(i.Fragment,{}):(0,i.jsxs)("a",{className:"button",href:t.repository,"aria-label":"Reposit\xf3rio",children:[(0,i.jsx)("span",{className:"material-symbols-outlined","aria-hidden":"true",children:"code"}),"Reposit\xf3rio"]}),null==t.details?(0,i.jsx)(i.Fragment,{}):(0,i.jsxs)("button",{type:"button",className:f()["button-details"],onClick:()=>s(!0),children:[(0,i.jsx)("span",{className:"material-symbols-outlined","aria-hidden":"true",children:"add"}),"Detalhes"]})]})]}),a?(0,i.jsx)(h.Z,{onDismiss:()=>s(!1),noCard:!0,children:(0,i.jsx)(j,{project:t})}):(0,i.jsx)(i.Fragment,{})]})}var S=a(3444),w=a.n(S);function y(){let{filter:e}=(0,o.useContext)(s),t=(0,o.useMemo)(()=>e(n),[e]);return(0,i.jsx)("ul",{className:"".concat(w().list," no-list-style raiar flex-row flex-wrap gap-2x justify-content-center"),children:t.map(e=>(0,i.jsx)("li",{className:"display-contents",children:(0,i.jsx)(x,{project:e})},e.name))})}function _(){let[e,t]=(0,o.useState)(()=>e=>e),a=(0,o.useCallback)(e=>t(()=>e),[]),r=(0,o.useRef)(null);return(0,o.useLayoutEffect)(()=>{if(null==r){console.error("projectsListRef is null");return}new Animation(new KeyframeEffect(r.current,[{opacity:0},{}],{duration:500,easing:"ease"})).play()},[e]),(0,i.jsx)("section",{className:"raiar flex-col gap-2x align-center","aria-labelledby":"heading-projects",children:(0,i.jsxs)(s.Provider,{value:{filter:e,setFilter:a},children:[(0,i.jsxs)("div",{id:"projects-title-bar",className:"raiar flex-row gap flex-wrap justify-content-center",children:[(0,i.jsx)("h2",{id:"heading-projects",children:"Meus projetos"}),(0,i.jsx)(o.Suspense,{children:(0,i.jsx)(m,{})})]}),(0,i.jsx)("div",{ref:r,children:(0,i.jsx)(y,{})})]})})}},8656:function(e){e.exports={"modal-container":"modal_modal-container__CjvJZ",dismiss:"modal_dismiss__uuQxh",modal:"modal_modal__noGlo"}},6585:function(e){e.exports={container:"project-filter-selector_container__HqZSA","fade-in-2":"project-filter-selector_fade-in-2__oS0d4","fade-in":"project-filter-selector_fade-in__iq0_o",tags:"project-filter-selector_tags__TxW2X"}},728:function(e){e.exports={project:"project-preview_project__VM549","slide-in":"project-preview_slide-in__Ob6r0","title-container":"project-preview_title-container__WZbAq",image:"project-preview_image__mPSMn",license:"project-preview_license__Op7LG","button-details":"project-preview_button-details__h4Wtm",wiggle:"project-preview_wiggle__st5iI","button-view":"project-preview_button-view__d__V6","eye-blink":"project-preview_eye-blink__vWdLG"}},1642:function(e){e.exports={image:"project_image__P3LqK",content:"project_content__2jOat"}},3444:function(e){e.exports={list:"projects-list_list__T93GK"}}}]);