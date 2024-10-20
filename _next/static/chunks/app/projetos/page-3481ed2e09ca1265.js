(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[725],{5963:function(e,t,r){Promise.resolve().then(r.bind(r,1221))},4935:function(e,t,r){"use strict";r.d(t,{Z:function(){return a}});/**
 * @license lucide-react v0.365.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let a=(0,r(843).Z)("FolderGit2",[["path",{d:"M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v5",key:"1w6njk"}],["circle",{cx:"13",cy:"12",r:"2",key:"1j92g6"}],["path",{d:"M18 19c-2.8 0-5-2.2-5-5v8",key:"pkpw2h"}],["circle",{cx:"20",cy:"19",r:"2",key:"1obnsp"}]])},7907:function(e,t,r){"use strict";var a=r(5313);r.o(a,"usePathname")&&r.d(t,{usePathname:function(){return a.usePathname}}),r.o(a,"useSearchParams")&&r.d(t,{useSearchParams:function(){return a.useSearchParams}})},5475:function(e){"use strict";e.exports=function(e){for(var t=5381,r=e.length;r;)t=33*t^e.charCodeAt(--r);return t>>>0}},2086:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return f}});var a=r(7437),i=r(2265),o=r(8792),s=r(4464),n=r(5889),l=r(2235),c=r(3975),d=r.n(c);function u(e){let{children:t,onDismiss:r}=e,o=(0,i.useRef)(null);return(0,i.useEffect)(()=>{if(null==o.current){console.error("dialogRef.current is null.");return}o.current.showModal()},[]),(0,a.jsxs)("dialog",{ref:o,className:"".concat(d()["modal-container"]," fixed flex h-[100dvh] max-h-none w-[100dvw] max-w-none flex-col items-center gap-4 bg-transparent p-4 text-inherit [justify-content:safe_center]"),onClose:()=>null==r?void 0:r(),children:[r?(0,a.jsx)("div",{className:d().dismiss,children:(0,a.jsx)(s.Z,{variant:"danger",onClick:r,"aria-label":"Fechar modal",children:(0,a.jsx)(l.Z,{})})}):(0,a.jsx)(a.Fragment,{}),(0,a.jsx)("div",{className:d().modal,children:(0,a.jsx)(n.Z,{children:t})})]})}let m=(0,r(5640).j)("flex flex-row items-center gap-2 rounded-md px-4 py-2 font-bold justify-center transition-all hover:brightness-110 hover:[text-shadow:_0_0_15px_currentcolor] rounded-tr-none rounded-bl-none",{variants:{variant:{primary:"text-fg-on-primary bg-primary dark:text-primary dark:bg-primary/5 backdrop-blur-md dark:hover:bg-primary/10 dark:hover:border-primary/50",danger:"text-fg-on-primary bg-danger"}}});function p(e){let[t,r]=(0,i.useState)(!1);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("button",{className:e.className,onClick:()=>{r(!0)},"aria-label":e["aria-label"],children:e.children}),t?(0,a.jsx)(u,{onDismiss:()=>{r(!1)},children:e.modalContent}):(0,a.jsx)(a.Fragment,{})]})}function f(e){let{variant:t="primary",...r}=e,i=m({variant:t});return(0,a.jsx)(a.Fragment,{children:"onClick"in r?(0,a.jsx)("button",{...r,type:"button",className:i}):"href"in r?(0,a.jsx)(o.default,{...r,className:i}):(0,a.jsx)(p,{...r,className:i})})}},4464:function(e,t,r){"use strict";r.d(t,{Z:function(){return a.default}});var a=r(2086)},5889:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var a=r(7437),i=r(1968);function o(e){let{children:t,footer:r}=e;return(0,a.jsx)(i.E.div,{initial:{scale:.75},whileInView:{scale:1},className:"rounded-lg rounded-br-none rounded-tl-none border-2 border-primary/15 bg-bg-closer shadow-sm transition-colors dark:border-transparent dark:bg-bg-closer-dark",children:(0,a.jsxs)("div",{className:"flex h-full w-full flex-col justify-between rounded-lg p-4",children:[(0,a.jsx)("div",{className:"flex justify-center",children:t}),r&&(0,a.jsx)("div",{className:"mt-4 flex justify-center",children:r})]})})}},3640:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return f}});var a=r(7437);/**
 * @license lucide-react v0.365.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let i=(0,r(843).Z)("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);var o=r(4935),s=r(4464),n=r(5889),l=r(2265);function c(e){let{src:t,alt:r}=e,[i,o]=(0,l.useState)(!1),s=(0,l.useRef)(null),n=(0,l.useRef)(null);return(0,l.useEffect)(()=>{n.current=new Image,n.current.addEventListener("load",()=>{o(!0)})},[]),(0,l.useEffect)(()=>{if(o(!1),"IntersectionObserver"in window){let e=new IntersectionObserver((e,r)=>{if(e[0].isIntersecting){if(null==n.current){console.error("image.current is null");return}n.current.src=t,r.disconnect()}});return null==s.current?console.error("ref.current is null"):e.observe(s.current),()=>{e.disconnect()}}if(null==n.current){console.error("image.current is null");return}n.current.src=t},[t]),(0,a.jsxs)("div",{className:"relative h-full w-full",ref:s,children:[(0,a.jsx)("div",{className:"absolute inset-0 flex items-center justify-center rounded-3xl bg-bg-close has-[~_img]:hidden dark:bg-bg-close-dark",children:(0,a.jsx)("svg",{viewBox:"0 0 1 1",xmlns:"http://www.w3.org/2000/svg",className:"h-8 w-8 animate-spin stroke-primary",children:(0,a.jsx)("circle",{cx:"0.5",cy:"0.5",fill:"none",r:"0.25",strokeWidth:"0.1",strokeDasharray:"1",strokeLinecap:"round"})})}),i?(0,a.jsx)("img",{src:t,alt:r,className:"h-full w-full"}):(0,a.jsx)(a.Fragment,{})]})}var d=r(1968),u=r(5475),m=r.n(u),p=r(6322);function f(e){let{project:t}=e,[r,{width:u}]=(0,p.y)(),f=(0,l.useMemo)(()=>(m()(t.name)%5-2.5)/((u>0?u:400)/400),[t.name,u]);return(0,a.jsx)(d.E.div,{className:"*:h-full",ref:r,initial:{rotate:-f},whileInView:{rotate:f},children:(0,a.jsx)(n.Z,{footer:(0,a.jsxs)("div",{className:"flex w-full flex-row flex-wrap gap-4 *:grow",children:[t.url?(0,a.jsxs)(s.Z,{href:t.url,target:"_blank",children:[(0,a.jsx)(i,{}),"Visitar"]}):(0,a.jsx)(a.Fragment,{}),t.repository?(0,a.jsxs)(s.Z,{href:t.repository,target:"_blank",children:[(0,a.jsx)(o.Z,{}),"Reposit\xf3rio"]}):(0,a.jsx)(a.Fragment,{})]}),children:(0,a.jsxs)("div",{className:"flex max-w-prose flex-col items-center gap-4",role:"group","aria-label":t.name,children:[null==t.image?(0,a.jsx)("div",{className:"h-16 w-16 rounded-md bg-primary/15"}):(0,a.jsxs)("div",{className:"relative",children:[(0,a.jsx)("div",{className:"h-16 w-16 overflow-hidden rounded-lg blur-2xl",children:(0,a.jsx)(c,{src:"/project-images/".concat(t.image,".webp"),alt:"Imagem do projeto ".concat(t.name),"aria-hidden":!0})}),(0,a.jsx)("div",{className:"absolute left-0 top-0 h-16 w-16 overflow-hidden rounded-lg",children:(0,a.jsx)(c,{src:"/project-images/".concat(t.image,".webp"),alt:"Imagem do projeto ".concat(t.name)})})]}),(0,a.jsx)("div",{className:"flex grow flex-col items-center",children:(0,a.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,a.jsx)("div",{className:"text-center text-lg font-bold",children:t.name}),(0,a.jsx)("div",{children:t.description})]})})]})})})}},1221:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return E}});var a=r(7437),i=r(2265);let o=(0,i.createContext)({filter:e=>e,setFilter:()=>{}});function s(e,...t){let r=t.map(String);return r.push(""),e.map((e,t)=>e+r[t]).reduce((e,t)=>e+t)}let n=[{name:"Blink: Ultimate Teleportation",description:"Instalado por mais de 32 mil usu\xe1rios diferentes, Blink \xe9 um mod feito em Lua para o jogo Teardown.",details:s`
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
    `,tags:["Discord App","GitHub","JavaScript","Node.js","TypeScript"],license:"MIT License",repository:"https://github.com/luizffgv/spirit-box",image:"Spirit Box"},{name:"Swapem",description:"Ferramenta CLI e pacote NPM fornecendo uma stream transform que l\xea texto e substitui diretivas por valores vindos de um arquivo JSON.",tags:["Biblioteca","GitHub","GitHub Actions","JavaScript","Node.js","Pacote NPM","TypeScript"],license:"MIT License",url:"https://www.npmjs.com/package/swapem",repository:"https://github.com/luizffgv/swapem"},{name:"TS Conversions",description:"Biblioteca e pacote NPM fornecendo utilit\xe1rios para realizar convers\xf5es seguras ou inseguras e diminuir c\xf3digo boilerplate no TypeScript.",tags:["Biblioteca","GitHub Actions","GitHub","JavaScript","Node.js","Pacote NPM","TypeScript"],license:"MIT License",url:"https://www.npmjs.com/package/@luizffgv/ts-conversions",repository:"https://github.com/luizffgv/ts-conversions"},{name:"Viewport-Based Scaling",description:"Site que gera CSS para definir o valor de uma propriedade baseado na largura do viewport, realizando interpola\xe7\xe3o linear entre v\xe1rios pares de pontos.",tags:["GitHub","GitHub Actions","HTML","JavaScript","Node.js","Site","TypeScript","Webpack"],license:"MIT License",url:"https://vbs.luizf.dev",repository:"https://github.com/luizffgv/viewport-based-rescaling"}];var l=r(5889);function c(e){let{value:t,checked:r,onChange:i}=e;return(0,a.jsxs)("label",{className:"relative inline-block rounded-lg rounded-br-none rounded-tl-none border border-fg/5 bg-bg-close px-4 py-2 text-center font-bold shadow-sm transition-all hover:brightness-110 has-[:checked]:border-transparent has-[:checked]:bg-primary has-[:checked]:text-fg-on-primary has-[:checked]:shadow-[0_0_50px_theme(colors.primary_/_25%)] has-[:checked]:[text-shadow:_0_0_15px_currentcolor] dark:border-fg-dark/10 dark:bg-bg-close-dark dark:has-[:checked]:bg-primary",children:[(0,a.jsx)("input",{className:"absolute inset-0 cursor-pointer appearance-none rounded-lg",type:"checkbox",value:t,checked:r,onChange:i||(()=>{})}),t]})}function d(e){let{value:t,checked:r,name:i,children:o,onChange:s}=e;return(0,a.jsxs)("label",{className:"relative inline-block rounded-3xl border border-fg/5 bg-bg-close px-4 py-2 text-center font-bold shadow-sm transition-all has-[:checked]:border-transparent has-[:checked]:bg-primary has-[:checked]:text-fg-on-primary has-[:checked]:shadow-[0_0_50px_theme(colors.primary_/_25%)] has-[:checked]:[text-shadow:_0_0_15px_currentcolor] has-[:not(:checked)]:hover:brightness-110 dark:border-fg-dark/10 dark:bg-bg-close-dark dark:has-[:checked]:bg-primary",children:[(0,a.jsx)("input",{className:"absolute inset-0 cursor-pointer appearance-none rounded-3xl checked:cursor-default",type:"radio",name:i,value:t,checked:r,onChange:s||(()=>{})}),o]})}var u=r(5083),m=r(7907);let p=new Set(["Bash","C++17","C++20","C18","Doxygen","GitHub","HTML","Livro","Markdown","mdBook","Organiza\xe7\xe3o"]),f=[...n.map(e=>e.tags).reduce((e,t)=>{for(let r of t)e.add(r);return e},new Set)].filter(e=>!p.has(e)).sort();function h(e,t){var r;return new Set((null!==(r=e.tags)&&void 0!==r?r:[]).filter(e=>t.has(e)))}function g(){let e=(0,m.useSearchParams)(),{setFilter:t}=(0,i.useContext)(o),[r,s]=(0,i.useState)("best-match"),[n,p]=(0,i.useState)({value:new Set});return(0,i.useLayoutEffect)(()=>{p({value:new Set(e.getAll("tags").filter(e=>f.includes(e)))})},[e]),(0,i.useEffect)(()=>{t(e=>{let t=[...e].sort((e,t)=>h(t,n.value).size-h(e,n.value).size);return n.value.size>0&&(t=t.filter(e=>h(e,n.value).size>0)),"every"===r&&(t=t.filter(e=>{for(let r of n.value){var t;if(!(null===(t=e.tags)||void 0===t?void 0:t.includes(r)))return!1}return!0})),t})},[r,n,t]),(0,a.jsx)(u.Z,{level:2,title:"Filtros",children:(0,a.jsxs)("div",{className:"flex flex-row flex-wrap items-stretch justify-center gap-4",children:[(0,a.jsx)(l.Z,{children:(0,a.jsxs)("fieldset",{className:"flex max-h-[50vh] max-w-4xl flex-row flex-wrap gap-1 overflow-y-auto",onChange:e=>{if(!(e.target instanceof HTMLInputElement)){console.error("event.target is not an HTMLInputElement");return}e.target.checked?n.value.add(e.target.value):n.value.delete(e.target.value),p({value:n.value})},children:[(0,a.jsx)("legend",{className:"float-left mb-3 w-full text-center",children:"Selecione tags"}),f.map(e=>(0,a.jsx)("div",{className:"flex grow flex-col items-stretch",children:(0,a.jsx)(c,{value:e,checked:n.value.has(e)})},e))]})}),(0,a.jsx)(l.Z,{children:(0,a.jsxs)("fieldset",{className:"flex flex-col items-stretch gap-4",onChange:e=>{if(!(e.target instanceof HTMLInputElement)){console.error("event.target is not an HTMLInputElement");return}s(e.target.value)},children:[(0,a.jsx)("legend",{className:"float-left w-full text-center",children:"L\xf3gica de filtragem"}),(0,a.jsx)(d,{name:"project-filter-mode",value:"best-match",checked:"best-match"===r,children:"Melhor correspond\xeancia"}),(0,a.jsx)(d,{name:"project-filter-mode",value:"every",checked:"every"===r,children:"Possui todas categorias selecionadas"})]})})]})})}var b=r(5526);function v(){let e=(0,i.useRef)(!1);return(0,b.L)(()=>(e.current=!0,()=>{e.current=!1}),[]),e}var x=r(4205),j=r(4561),S=r(2435),w=r(3449);class y extends i.Component{getSnapshotBeforeUpdate(e){let t=this.props.childRef.current;if(t&&e.isPresent&&!this.props.isPresent){let e=this.props.sizeRef.current;e.height=t.offsetHeight||0,e.width=t.offsetWidth||0,e.top=t.offsetTop,e.left=t.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function k({children:e,isPresent:t}){let r=(0,i.useId)(),o=(0,i.useRef)(null),s=(0,i.useRef)({width:0,height:0,top:0,left:0}),{nonce:n}=(0,i.useContext)(w._);return(0,i.useInsertionEffect)(()=>{let{width:e,height:a,top:i,left:l}=s.current;if(t||!o.current||!e||!a)return;o.current.dataset.motionPopId=r;let c=document.createElement("style");return n&&(c.nonce=n),document.head.appendChild(c),c.sheet&&c.sheet.insertRule(`
          [data-motion-pop-id="${r}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${a}px !important;
            top: ${i}px !important;
            left: ${l}px !important;
          }
        `),()=>{document.head.removeChild(c)}},[t]),(0,a.jsx)(y,{isPresent:t,childRef:o,sizeRef:s,children:i.cloneElement(e,{ref:o})})}let z=({children:e,initial:t,isPresent:r,onExitComplete:o,custom:s,presenceAffectsLayout:n,mode:l})=>{let c=(0,S.h)(N),d=(0,i.useId)(),u=(0,i.useMemo)(()=>({id:d,initial:t,isPresent:r,custom:s,onExitComplete:e=>{for(let t of(c.set(e,!0),c.values()))if(!t)return;o&&o()},register:e=>(c.set(e,!1),()=>c.delete(e))}),n?[Math.random()]:[r]);return(0,i.useMemo)(()=>{c.forEach((e,t)=>c.set(t,!1))},[r]),i.useEffect(()=>{r||c.size||!o||o()},[r]),"popLayout"===l&&(e=(0,a.jsx)(k,{isPresent:r,children:e})),(0,a.jsx)(j.O.Provider,{value:u,children:e})};function N(){return new Map}var C=r(3856),M=r(9908);let T=e=>e.key||"",L=({children:e,custom:t,initial:r=!0,onExitComplete:o,exitBeforeEnter:s,presenceAffectsLayout:n=!0,mode:l="sync"})=>{var c;(0,M.k)(!s,"Replace exitBeforeEnter with mode='wait'");let d=(0,i.useContext)(C.p).forceRender||function(){let e=v(),[t,r]=(0,i.useState)(0),a=(0,i.useCallback)(()=>{e.current&&r(t+1)},[t]);return[(0,i.useCallback)(()=>x.Wi.postRender(a),[a]),t]}()[0],u=v(),m=function(e){let t=[];return i.Children.forEach(e,e=>{(0,i.isValidElement)(e)&&t.push(e)}),t}(e),p=m,f=(0,i.useRef)(new Map).current,h=(0,i.useRef)(p),g=(0,i.useRef)(new Map).current,j=(0,i.useRef)(!0);if((0,b.L)(()=>{j.current=!1,function(e,t){e.forEach(e=>{let r=T(e);t.set(r,e)})}(m,g),h.current=p}),c=()=>{j.current=!0,g.clear(),f.clear()},(0,i.useEffect)(()=>()=>c(),[]),j.current)return(0,a.jsx)(a.Fragment,{children:p.map(e=>(0,a.jsx)(z,{isPresent:!0,initial:!!r&&void 0,presenceAffectsLayout:n,mode:l,children:e},T(e)))});p=[...p];let S=h.current.map(T),w=m.map(T),y=S.length;for(let e=0;e<y;e++){let t=S[e];-1!==w.indexOf(t)||f.has(t)||f.set(t,void 0)}return"wait"===l&&f.size&&(p=[]),f.forEach((e,r)=>{if(-1!==w.indexOf(r))return;let i=g.get(r);if(!i)return;let s=S.indexOf(r),c=e;c||(c=(0,a.jsx)(z,{isPresent:!1,onExitComplete:()=>{f.delete(r);let e=Array.from(g.keys()).filter(e=>!w.includes(e));if(e.forEach(e=>g.delete(e)),h.current=m.filter(t=>{let a=T(t);return a===r||e.includes(a)}),!f.size){if(!1===u.current)return;d(),o&&o()}},custom:t,presenceAffectsLayout:n,mode:l,children:i},T(i)),f.set(r,c)),p.splice(s,0,c)}),p=p.map(e=>{let t=e.key;return f.has(t)?e:(0,a.jsx)(z,{isPresent:!0,presenceAffectsLayout:n,mode:l,children:e},T(e))}),(0,a.jsx)(a.Fragment,{children:f.size?p:p.map(e=>(0,i.cloneElement)(e))})};var H=r(1968),G=r(3640);function _(){let{filter:e}=(0,i.useContext)(o),t=(0,i.useMemo)(()=>e(n),[e]);return(0,a.jsxs)("ul",{className:"flex flex-row flex-wrap justify-center gap-8",children:[(0,a.jsx)(L,{children:t.map(e=>(0,a.jsx)(H.E.li,{className:"min-w-fit grow basis-0 *:h-full",layout:!0,children:(0,a.jsx)(G.default,{project:e})},e.name))}),0===t.length&&(0,a.jsx)("li",{className:"text-center text-xl",children:"Nenhum projeto se encaixa nos filtros."})]})}function E(){let[e,t]=(0,i.useState)(()=>e=>e),r=(0,i.useCallback)(e=>{t(()=>e)},[]),s=(0,i.useRef)(null);return(0,i.useLayoutEffect)(()=>{if(null==s.current){console.error("projectsListRef.current is null");return}new Animation(new KeyframeEffect(s.current,[{opacity:0},{}],{duration:500,easing:"ease"})).play()},[e]),(0,a.jsx)(u.Z,{level:1,title:(0,a.jsx)(a.Fragment,{children:"Meus projetos"}),children:(0,a.jsx)(o.Provider,{value:{filter:e,setFilter:r},children:(0,a.jsxs)("div",{className:"flex flex-col items-center gap-8",children:[(0,a.jsx)(i.Suspense,{children:(0,a.jsx)(g,{})}),(0,a.jsx)("div",{ref:s,className:"max-w-screen-2xl pb-[100vh]",children:(0,a.jsx)(_,{})})]})})})}},5083:function(e,t,r){"use strict";r.d(t,{Z:function(){return a.Z}});var a=r(8584)},8584:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var a=r(7437);function i(e){let{level:t,children:r}=e;return 1===t?(0,a.jsx)("h1",{className:"mb-8 text-center text-3xl font-bold",children:r}):2===t?(0,a.jsx)("h2",{className:"mb-6 text-center text-2xl font-bold",children:r}):3===t?(0,a.jsx)("h3",{className:"mb-4 text-center text-xl",children:r}):4===t?(0,a.jsx)("h4",{className:"mb-2 text-center text-lg",children:r}):5===t?(0,a.jsx)("h5",{className:"mb-2 text-center text-lg",children:r}):(0,a.jsx)("h6",{className:"mb-2 text-center text-lg",children:r})}function o(e){let{title:t,children:r,level:o}=e;return(0,a.jsxs)("section",{children:[(0,a.jsx)(i,{level:o,children:t}),r]})}},3975:function(e){e.exports={"modal-container":"modal_modal-container__i_YSx",dismiss:"modal_dismiss__Pn0UK",modal:"modal_modal__L3VW0"}},6322:function(e,t,r){"use strict";r.d(t,{y:function(){return o}});var a=r(2265);let i={x:0,y:0,width:0,height:0,top:0,left:0,bottom:0,right:0};function o(e){let t=(0,a.useRef)(0),r=(0,a.useRef)(null),[o,s]=(0,a.useState)(i),n=(0,a.useMemo)(()=>"undefined"!=typeof window?new ResizeObserver(e=>{let a=e[0];a&&(cancelAnimationFrame(t.current),t.current=requestAnimationFrame(()=>{r.current&&s(a.contentRect)}))}):null,[]);return(0,a.useEffect)(()=>(r.current&&(null==n||n.observe(r.current,e)),()=>{null==n||n.disconnect(),t.current&&cancelAnimationFrame(t.current)}),[r.current]),[r,o]}}},function(e){e.O(0,[113,971,69,744],function(){return e(e.s=5963)}),_N_E=e.O()}]);