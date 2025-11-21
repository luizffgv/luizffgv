(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,88653,76043,e=>{"use strict";e.i(47167);var t=e.i(43476),a=e.i(71645),i=e.i(31178),o=e.i(47414),s=e.i(21476),r=a,n=e.i(37806);class l extends r.Component{getSnapshotBeforeUpdate(e){let t=this.props.childRef.current;if(t&&e.isPresent&&!this.props.isPresent){let e=this.props.sizeRef.current;e.height=t.offsetHeight||0,e.width=t.offsetWidth||0,e.top=t.offsetTop,e.left=t.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function c({children:e,isPresent:a}){let i=(0,r.useId)(),o=(0,r.useRef)(null),s=(0,r.useRef)({width:0,height:0,top:0,left:0}),{nonce:c}=(0,r.useContext)(n.MotionConfigContext);return(0,r.useInsertionEffect)(()=>{let{width:e,height:t,top:r,left:n}=s.current;if(a||!o.current||!e||!t)return;o.current.dataset.motionPopId=i;let l=document.createElement("style");return c&&(l.nonce=c),document.head.appendChild(l),l.sheet&&l.sheet.insertRule(`
          [data-motion-pop-id="${i}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${t}px !important;
            top: ${r}px !important;
            left: ${n}px !important;
          }
        `),()=>{document.head.removeChild(l)}},[a]),(0,t.jsx)(l,{isPresent:a,childRef:o,sizeRef:s,children:r.cloneElement(e,{ref:o})})}let d=({children:e,initial:i,isPresent:r,onExitComplete:n,custom:l,presenceAffectsLayout:d,mode:p})=>{let m=(0,o.useConstant)(u),f=(0,a.useId)(),h=(0,a.useCallback)(e=>{for(let t of(m.set(e,!0),m.values()))if(!t)return;n&&n()},[m,n]),g=(0,a.useMemo)(()=>({id:f,initial:i,isPresent:r,custom:l,onExitComplete:h,register:e=>(m.set(e,!1),()=>m.delete(e))}),d?[Math.random(),h]:[r,h]);return(0,a.useMemo)(()=>{m.forEach((e,t)=>m.set(t,!1))},[r]),a.useEffect(()=>{r||m.size||!n||n()},[r]),"popLayout"===p&&(e=(0,t.jsx)(c,{isPresent:r,children:e})),(0,t.jsx)(s.PresenceContext.Provider,{value:g,children:e})};function u(){return new Map}var p=e.i(64978);let m=e=>e.key||"";function f(e){let t=[];return a.Children.forEach(e,e=>{(0,a.isValidElement)(e)&&t.push(e)}),t}var h=e.i(74008);let g=({children:e,custom:s,initial:r=!0,onExitComplete:n,presenceAffectsLayout:l=!0,mode:c="sync",propagate:u=!1})=>{let[g,b]=(0,p.usePresence)(u),v=(0,a.useMemo)(()=>f(e),[e]),x=u&&!g?[]:v.map(m),S=(0,a.useRef)(!0),j=(0,a.useRef)(v),y=(0,o.useConstant)(()=>new Map),[w,T]=(0,a.useState)(v),[z,C]=(0,a.useState)(v);(0,h.useIsomorphicLayoutEffect)(()=>{S.current=!1,j.current=v;for(let e=0;e<z.length;e++){let t=m(z[e]);x.includes(t)?y.delete(t):!0!==y.get(t)&&y.set(t,!1)}},[z,x.length,x.join("-")]);let M=[];if(v!==w){let e=[...v];for(let t=0;t<z.length;t++){let a=z[t],i=m(a);x.includes(i)||(e.splice(t,0,a),M.push(a))}"wait"===c&&M.length&&(e=M),C(f(e)),T(v);return}let{forceRender:k}=(0,a.useContext)(i.LayoutGroupContext);return(0,t.jsx)(t.Fragment,{children:z.map(e=>{let a=m(e),i=(!u||!!g)&&(v===z||x.includes(a));return(0,t.jsx)(d,{isPresent:i,initial:(!S.current||!!r)&&void 0,custom:i?void 0:s,presenceAffectsLayout:l,mode:c,onExitComplete:i?void 0:()=>{if(!y.has(a))return;y.set(a,!0);let e=!0;y.forEach(t=>{t||(e=!1)}),e&&(null==k||k(),C(j.current),u&&(null==b||b()),n&&n())},children:e},a)})})};e.s(["AnimatePresence",()=>g],88653);let b=(0,e.i(75254).default)("code-xml",[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]]);e.s(["CodeXmlIcon",()=>b],76043)},79221,e=>{"use strict";var t=e.i(43476),a=e.i(71645),i=e.i(88653),o=e.i(46932),s=e.i(76043),r=e.i(75254);let n=(0,r.default)("eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);e.i(48248);var l=e.i(98663);e.i(84603);var c=e.i(17263);function d({project:e}){return(0,t.jsx)("div",{className:"group flex w-[400px] shrink items-stretch",children:(0,t.jsx)(c.default,{children:(0,t.jsxs)("div",{"aria-label":e.name,className:"flex flex-col gap-6",role:"group",children:[null==e.image?(0,t.jsx)("div",{className:"aspect-[400/225] rounded-md bg-primary/15"}):(0,t.jsx)("div",{className:"relative aspect-[400/225] rounded-lg",children:(0,t.jsxs)("div",{className:"absolute h-full w-full transition-transform group-hover:-translate-y-4",children:[(0,t.jsx)("img",{className:"absolute left-1/2 top-1/2 max-h-full max-w-full -translate-x-1/2 -translate-y-1/2 rounded-lg opacity-25 blur-xl transition-all group-hover:opacity-50 group-hover:blur-2xl",src:`/project-images/${e.image}`,alt:`Imagem do projeto ${e.name}`,"aria-hidden":!0}),(0,t.jsx)("img",{className:"absolute left-1/2 top-1/2 max-h-full max-w-full -translate-x-1/2 -translate-y-1/2 rounded-lg",src:`/project-images/${e.image}`,alt:`Imagem do projeto ${e.name}`,"aria-hidden":!0})]})}),(0,t.jsxs)("div",{className:"flex justify-between gap-4",children:[(0,t.jsx)("div",{className:"text-2xl font-bold",children:e.name}),(0,t.jsxs)("div",{className:"flex flex-row flex-wrap items-center justify-end gap-2",children:[e.url?(0,t.jsxs)(l.default,{"aria-label":"Visitar projeto",href:e.url,isIcon:!0,target:"_blank",children:[" ",(0,t.jsx)(n,{})," "]}):null,e.repository?(0,t.jsx)(l.default,{"aria-label":"Visualizar código-fonte",href:e.repository,isIcon:!0,target:"_blank",children:(0,t.jsx)(s.CodeXmlIcon,{})}):null]})]}),(0,t.jsx)("div",{children:e.description})]})})})}let u=(0,a.createContext)({filter:e=>e,setFilter:()=>{}});function p(e,...t){let a=t.map(String);return a.push(""),e.map((e,t)=>e+a[t]).reduce((e,t)=>e+t)}let m={category:["Discord App","Biblioteca","Framework","Mod","Pacote NPM","Site"],language:["C","C++","JavaScript","Lua","Python","TypeScript"],library:["Express.js","React","Tailwind CSS","Three.js"]},f=[{name:"Swash",description:"Framework React para comunicação inter-componente via interações de arrastar e soltar. Modular, extensível e customizável.",tags:["Biblioteca","Framework","GitHub","GitHub Actions","HTML","JavaScript","Node.js","Pacote NPM","React","TypeScript"],image:"Swash.gif",license:"MIT License",repository:"https://github.com/luizffgv/swash",url:"https://swash.luizf.dev/"},{name:"Blink: Ultimate Teleportation",description:"Instalado por mais de 32 mil usuários diferentes, Blink é um mod feito em Lua para Teardown incluso no modpack oficial para Xbox e PlayStation.",details:p`
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
    `,tags:["GitHub","Lua","Mod","Python"],url:"https://steamcommunity.com/sharedfiles/filedetails/?id=2875792342",repository:"https://github.com/luizffgv/blink-mod-teardown",image:"Blink Ultimate Teleportation.webp"},{name:"codinStruct",description:"Uma organização feita como projeto de faculdade, visando ajudar estudantes a aprender C, JavaScript e Python.  Trabalhei principalmente na organização, no Sass e no conteúdo de C.",details:p`
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
    `,tags:["Bash","Docker","Express.js","GitHub","GitHub Actions","HTML","JavaScript","Markdown","mdBook","Node.js","Organização","Python","Sass","Site","TypeScript","Webpack"],url:"https://github.com/codinStruct",image:"codinStruct.webp"},{name:"codinStruct Next",description:"Front-end em Next.js feito para o codinStruct—projeto realizado na Rede de Ensino Doctum com o intuito de produzir conteúdos educacionais sobre programação.",tags:["GitHub","GitHub Actions","HTML","Next.js","Node.js","React","TypeScript"],url:"https://codinstruct.luizf.dev",repository:"https://github.com/luizffgv/codinStruct-next",image:"codinStruct.webp"},{name:"Ekranoplan",description:"Biblioteca JS/TS de uso geral com features simples e avançadas.",tags:["Biblioteca","GitHub","GitHub Actions","JavaScript","Node.js","Pacote NPM","TypeScript"],license:"MIT License",url:"https://ekranoplan.luizf.dev/",repository:"https://github.com/luizffgv/ekranoplan",image:"Ekranoplan.webp"},{name:"Figment",description:"Uma classe em C++ que permite controle preciso da vida útil de objetos de qualquer tipo. Semelhante a std::optional, mas não contém informações sobre o objeto contido.",tags:["Biblioteca","C++","C++17","C++20","Doxygen","GitHub Actions","GitHub"],license:"Unlicense",url:"https://figment.luizf.dev",repository:"https://github.com/luizffgv/Figment",image:"Figment.webp"},{name:"Glimmer",description:"Um simples framework modular para bots de Discord baseado em discord.js.",tags:["Framework","Discord App","GitHub","GitHub Actions","JavaScript","Node.js","TypeScript"],license:"MIT License",repository:"https://github.com/luizffgv/Glimmer"},{name:"Globe",description:"Um site com um globo giratório formado por pontos, te permitindo usar suas próprias imagens como texturas.",tags:["GitHub Actions","GitHub","HTML","JavaScript","Node.js","Sass","Site","Three.js","TypeScript","Webpack"],details:p`
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
    `,license:"MIT License",url:"https://globe.luizf.dev",repository:"https://github.com/luizffgv/globe",image:"Globe.webp"},{name:"Goo",description:"Elemento HTML configurável que fornece um fundo animado com efeito de gosma.",tags:["GitHub","HTML","JavaScript","Node.js"],license:"MIT License",repository:"https://github.com/luizffgv/goo-html",image:"Goo.webp"},{name:"HTilesML",description:"Jogo experimental utilizando elementos HTML e transformações CSS 3D.",details:p`
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
    `,tags:["GitHub","HTML","JavaScript","Site"],license:"MIT License",url:"https://htilesml.luizf.dev",repository:"https://github.com/luizffgv/htilesml",image:"HTilesML.webp"},{name:"Modern C Sorting Algorithms",description:"Coleção de algoritmos de ordenação genéricos utilizando o padrão C18 extensivamente, feita para facilitar meus trabalhos de C na faculdade.",details:p`
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
    `,tags:["Biblioteca","C","C18","GitHub"],license:"GNU General Public License v3.0",repository:"https://github.com/luizffgv/modern-c-sorting-algorithms",image:"Modern C Sorting Algorithms.webp"},{name:"Phasmoo",description:"Um website e PWA totalmente responsivo que filtra fantasmas para auxiliar no gameplay do jogo Phasmophobia.",tags:["GitHub","GitHub Actions","HTML","JavaScript","Next.js","Node.js","React","Site","Tailwind CSS"],license:"MIT License",url:"https://phasmoo.luizf.dev",repository:"https://github.com/luizffgv/phasmoo",image:"Phasmoo.webp"},{name:"Separador de sílabas",description:"Um site feito em Next.js que divide um texto em sílabas utilizando um algoritmo que criei.",tags:["GitHub","GitHub Actions","HTML","JavaScript","Next.js","Node.js","React","Site","TypeScript"],license:"MIT License",url:"https://silabas.luizf.dev/",repository:"https://github.com/luizffgv/silabas-website",image:"Silabas.webp"},{name:"Shader Site",description:"Um site que te ajuda a encontrar o shaderpack de Minecraft ideal para você.",tags:["GitHub","GitHub Actions","HTML","JavaScript","Lit","Node.js","Sass","Site","TypeScript","Webpack"],license:"MIT License",repository:"https://github.com/luizffgv/shader-site",url:"https://shadersite.luizf.dev",image:"Shader Site.webp"},{name:"Spirit Box",description:"Bot para Discord que gera um diário de anotações do jogo Phasmophobia, para auxiliar na identificação de fantasmas e no compartilhamento de pistas com sua equipe.",details:p`
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
    `,tags:["Discord App","GitHub","JavaScript","Node.js","TypeScript"],license:"MIT License",repository:"https://github.com/luizffgv/spirit-box",image:"Spirit Box.webp"},{name:"Swapem",description:"Ferramenta CLI e pacote NPM fornecendo uma stream transform que lê texto e substitui diretivas por valores vindos de um arquivo JSON.",tags:["Biblioteca","GitHub","GitHub Actions","JavaScript","Node.js","Pacote NPM","TypeScript"],license:"MIT License",url:"https://www.npmjs.com/package/swapem",repository:"https://github.com/luizffgv/swapem",image:"Swapem.webp"},{name:"TS Conversions",description:"Biblioteca e pacote NPM fornecendo utilitários para realizar conversões seguras ou inseguras e diminuir código boilerplate no TypeScript.",tags:["Biblioteca","GitHub Actions","GitHub","JavaScript","Node.js","Pacote NPM","TypeScript"],license:"MIT License",url:"https://www.npmjs.com/package/@luizffgv/ts-conversions",repository:"https://github.com/luizffgv/ts-conversions"},{name:"Viewport-Based Scaling",description:"Site que gera CSS para definir o valor de uma propriedade baseado na largura do viewport, realizando interpolação linear entre vários pares de pontos.",tags:["GitHub","GitHub Actions","HTML","JavaScript","Node.js","Site","TypeScript","Webpack"],license:"MIT License",url:"https://vbs.luizf.dev",repository:"https://github.com/luizffgv/viewport-based-rescaling",image:"VBS.gif"}];function h(){let{filter:e}=(0,a.useContext)(u),s=(0,a.useMemo)(()=>e(f),[e]);return(0,t.jsxs)("ul",{className:"flex flex-row flex-wrap justify-center gap-8",children:[(0,t.jsx)(i.AnimatePresence,{children:s.map(e=>(0,t.jsx)(o.motion.li,{className:"contents",layout:!0,children:(0,t.jsx)(d,{project:e})},e.name))}),0===s.length&&(0,t.jsx)("li",{className:"text-center text-xl",children:"Nenhum projeto se encaixa nos filtros."})]})}let g=(0,r.default)("chevron-down",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);var b=e.i(18566),v=e.i(7670);function x({value:e,checked:a,onChange:i}){return(0,t.jsxs)("label",{className:(0,v.default)("relative inline-block rounded-lg bg-primary/10 px-2 py-1 text-center text-base transition-all hover:brightness-110 has-[:checked]:bg-primary has-[:checked]:text-fg-on-primary dark:hover:bg-primary/10 dark:has-[:checked]:bg-primary",a&&"active"),children:[(0,t.jsx)("input",{className:"absolute inset-0 cursor-pointer appearance-none rounded-lg",type:"checkbox",value:e,checked:a,onChange:i||(()=>{})}),e]})}let S=new Set(["Bash","C++17","C++20","C18","Doxygen","GitHub","HTML","Livro","Markdown","mdBook","Organização"]),j=[...f.map(e=>e.tags).reduce((e,t)=>{for(let a of t)e.add(a);return e},new Set)].filter(e=>!S.has(e)).toSorted(),y=new Set(Object.values(m).flat()),w=new Set(j.filter(e=>!y.has(e)));function T(e,t){return new Set((e.tags??[]).filter(e=>t.has(e)))}function z(){let e=(0,b.useSearchParams)(),{setFilter:i}=(0,a.useContext)(u),[s,r]=(0,a.useState)({value:new Set(e.getAll("tags").filter(e=>j.includes(e)))}),[n,d]=(0,a.useState)(!0),p=(0,a.useMemo)(()=>[...Object.entries(m),["uncategorized",[...w]]],[]);(0,a.useEffect)(()=>{i(e=>{let t=e.toSorted((e,t)=>T(t,s.value).size-T(e,s.value).size);return s.value.size>0&&(t=t.filter(e=>T(e,s.value).size>0)),t})},[s,i]);let f=(0,a.useCallback)(e=>(0,t.jsx)("div",{className:"flex grow flex-col items-stretch",children:(0,t.jsx)(x,{value:e,checked:s.value.has(e)})},e),[s]),h=(0,a.useCallback)(e=>({category:"Categorias",language:"Linguagens",library:"Bibliotecas",uncategorized:"Sem categoria"})[e],[]),v=(0,a.useCallback)(()=>{d(e=>!e)},[]);return(0,t.jsx)("div",{className:"fixed bottom-4 left-1/2 -translate-x-1/2",children:(0,t.jsx)(c.default,{layout:!0,padding:n?void 0:0,children:(0,t.jsxs)("div",{className:"flex flex-col items-center gap-8",children:[n&&(0,t.jsx)(o.motion.fieldset,{className:"flex w-[80vw] flex-col gap-4 sm:w-auto",initial:{opacity:0},animate:{opacity:1},layout:!0,transition:{delay:.25},onChange:e=>{e.target instanceof HTMLInputElement?(window.scrollTo({top:0,behavior:"instant"}),e.target.checked?s.value.add(e.target.value):s.value.delete(e.target.value),r({value:s.value})):console.error("event.target is not an HTMLInputElement")},children:p.map(([e,a])=>(0,t.jsxs)("div",{className:"flex flex-col gap-1",children:[(0,t.jsx)("div",{className:"text-lg font-bold",children:h(e)}),(0,t.jsx)("div",{className:"flex flex-row flex-wrap gap-2",children:a.map(e=>f(e))},e)]},e))}),(0,t.jsx)(o.motion.div,{layout:!0,children:(0,t.jsxs)(l.default,{onClick:v,children:[(0,t.jsxs)(o.motion.span,{animate:{rotate:`${180*!n}deg`},layout:!0,children:[(0,t.jsx)(g,{})," "]}),n?(0,t.jsx)(t.Fragment,{children:"Ocultar filtros"}):(0,t.jsx)(t.Fragment,{children:"Expandir filtros"})]})})]})})})}function C(){let[e,i]=(0,a.useState)(()=>e=>e),o=(0,a.useCallback)(e=>{i(()=>e)},[]),s=(0,a.useRef)(null);return(0,a.useLayoutEffect)(()=>{null==s.current?console.error("projectsListRef.current is null"):new Animation(new KeyframeEffect(s.current,[{opacity:0},{}],{duration:500,easing:"ease"})).play()},[e]),(0,t.jsx)("div",{className:"pt-[10vh]",children:(0,t.jsxs)(u.Provider,{value:{filter:e,setFilter:o},children:[(0,t.jsx)("div",{className:"flex flex-col items-center gap-32",children:(0,t.jsx)("div",{ref:s,className:"w-full max-w-screen-2xl px-4 pb-[100vh]",children:(0,t.jsx)(h,{})})}),(0,t.jsx)(a.Suspense,{children:(0,t.jsx)(z,{})})]})})}e.s(["default",()=>C],79221)}]);