(()=>{"use strict";(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,76043,e=>{let t=(0,e.i(75254).f)("code-xml",[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]]);e.s(["f",0,t],76043)},79221,e=>{var t=e.i(43476),a=e.i(932),i=e.i(71645),o=e.i(31178),r=e.i(47414),s=e.i(74008),n=e.i(21476),l=e.i(60140),c=e.i(72846),d=i,p=e.i(37806);function u(e,t){if("function"==typeof e)return e(t);null!=e&&(e.current=t)}let m=e=>{let{width:t,height:a}=e?.getBoundingClientRect()||{};return[t/e?.offsetWidth||1,a/e?.offsetHeight||1]},f=e=>{let{left:t,top:a}=e.getBoundingClientRect(),i=e;for(;i=i.parentElement||i.parentNode?.host;){let{scrollLeft:e,scrollTop:o}=i;if(e||o){let[r,s]=m(i);t+=e*r,a+=o*s}if("fixed"===getComputedStyle(i).position)break}let[o,r]=m(e.offsetParent);return[t/o,a/r]};class h extends d.Component{getSnapshotBeforeUpdate(e){let t=this.props.getElement();if((0,c.f)(t)&&e.isPresent&&!this.props.isPresent&&!1!==this.props.pop){let e=t.offsetParent,a=(0,c.f)(e)&&e.offsetWidth||0,i=(0,c.f)(e)&&e.offsetHeight||0,o=getComputedStyle(t),r=this.props.sizeRef.current;r.height=parseFloat(o.height),r.width=parseFloat(o.width),r.top=t.offsetTop,r.left=t.offsetLeft,r.right=a-r.width-r.left,r.bottom=i-r.height-r.top,r.direction=o.direction,r.point=f(t)}return null}componentDidUpdate(){}render(){return this.props.children}}function g({children:e,isPresent:a,anchorX:o,anchorY:r,root:s,pop:n,popNode:c}){let m=(0,d.useId)(),b=(0,d.useRef)(null),v=(0,d.useRef)({width:0,height:0,top:0,left:0,right:0,bottom:0,direction:"ltr"}),{nonce:x}=(0,d.useContext)(p.f),S=function(...e){return i.useCallback(function(...e){return t=>{let a=!1,i=e.map(e=>{let i=u(e,t);return a||"function"!=typeof i||(a=!0),i});if(a)return()=>{for(let t=0;t<i.length;t++){let a=i[t];"function"==typeof a?a():u(e[t],null)}}}}(...e),e)}(b,!1!==n?e.props?.ref??e?.ref:void 0),j=()=>b.current||c?.current?.current,y=e=>{let{width:t,height:a,top:i,left:s,right:n,bottom:l,direction:c}=v.current,d="rtl"===c,p="left"===o?d?`right:${n}`:`left:${s}`:d?`left:${s}`:`right:${n}`,u="bottom"===r?`bottom:${l}`:`top:${i}`;e?.insertRule(`[data-motion-pop-id="${m}"]{position:absolute!important;width:${t}px!important;height:${a}px!important;${p}px!important;${u}px!important}`)};return(0,d.useInsertionEffect)(()=>{let{width:e,height:t}=v.current,i=j();if(a||!1===n||!i||!e||!t)return;i.dataset.motionPopId=m;let o=i.ownerDocument,r=o.createElement("style");x&&(r.nonce=x);let c=s??o.head;c.appendChild(r),y(r.sheet);let d=0,p=0;return l.f.setup(()=>{let[e,t]=f(i);d=v.current.point[0]-e,p=v.current.point[1]-t}),l.f.read(()=>{let{sheet:e}=r;if(!e||!d&&!p)return;let t=v.current;t.left+=d,t.right-=d,t.top+=p,t.bottom-=p,e.deleteRule(0),y(e)}),()=>{i.removeAttribute("data-motion-pop-id"),c.contains(r)&&c.removeChild(r)}},[a]),(0,t.jsx)(h,{isPresent:a,getElement:j,sizeRef:v,pop:n,children:!1===n?e:d.cloneElement(e,{ref:S})})}let b=({children:e,initial:a,isPresent:o,onExitComplete:l,custom:c,presenceAffectsLayout:d,mode:p,anchorX:u,anchorY:m,root:f})=>{let h=(0,r.f)(v),b=(0,i.useId)(),x=(0,i.useRef)(),S=(0,i.useRef)(o),j=(0,i.useRef)(l);(0,s.f)(()=>{S.current=o,j.current=l});let y=!0,w=(0,i.useMemo)(()=>(y=!1,{id:b,initial:a,isPresent:o,custom:c,onExitComplete:e=>{for(let t of(h.set(e,!0),h.values()))if(!t)return;l&&l()},register:(e,t)=>(h.set(e,!1),t&&t.parent?.presenceContext?.id!==b&&(x.current=t),()=>{h.delete(e),S.current||h.size||j.current?.()})}),[o,h,l]);return d&&y&&(w={...w}),(0,i.useMemo)(()=>{h.forEach((e,t)=>h.set(t,!1))},[o]),i.useEffect(()=>{o||h.size||!l||l()},[o]),e=(0,t.jsx)(g,{pop:"popLayout"===p,isPresent:o,anchorX:u,anchorY:m,root:f,popNode:x,children:e}),(0,t.jsx)(n.f.Provider,{value:w,children:e})};function v(){return new Map}var x=e.i(64978);let S=e=>e.key||"";function j(e){let t=[];return i.Children.forEach(e,e=>{(0,i.isValidElement)(e)&&t.push(e)}),t}let y=({children:e,custom:a,initial:n=!0,onExitComplete:l,presenceAffectsLayout:c=!0,mode:d="sync",propagate:p=!1,anchorX:u="left",anchorY:m="top",root:f})=>{let[h,g]=(0,x.f)(p),v=(0,i.useMemo)(()=>j(e),[e]),y=p&&!h?[]:v.map(S),w=(0,i.useRef)(!0),z=(0,r.f)(()=>new Map),T=(0,i.useRef)(new Set),[N,C]=(0,i.useState)(v),[M,H]=(0,i.useState)(v);(0,s.f)(()=>{!p||h||M.length||g?.()},[h,p,M.length,g]);let k=(0,i.useRef)();(0,i.useEffect)(()=>()=>{let e=k.current;k.current=void 0,e?.()},[M]),(0,s.f)(()=>{w.current=!1;for(let e=0;e<M.length;e++){let t=S(M[e]);y.includes(t)?(z.delete(t),T.current.delete(t)):!0!==z.get(t)&&z.set(t,!1)}},[M,y.length,y.join("-")]);let L=[];if(v!==N){let e=[...v],t=0;for(let a of M){let i=y.indexOf(S(a));-1===i?(e.splice(t++,0,a),L.push(a)):t=i+L.length+1}return L.every(e=>z.get(S(e)))?e=v:"wait"===d&&(e=L),H(j(e)),C(v),null}let{forceRender:G}=(0,i.useContext)(o.f);return(0,t.jsx)(t.Fragment,{children:M.map(e=>{let i=S(e),o=(!p||!!h)&&(v===M||y.includes(i));return(0,t.jsx)(b,{isPresent:o,initial:(!w.current||!!n)&&void 0,custom:a,presenceAffectsLayout:c,mode:d,root:f,onExitComplete:o?void 0:()=>{if(T.current.has(i)||!z.has(i))return;T.current.add(i),z.set(i,!0);let e=!0;z.forEach(t=>{t||(e=!1)}),e&&(G?.(),C([]),p&&g?.(),k.current=l)},anchorX:u,anchorY:m,children:e},i)})})};var w=e.i(46932),z=e.i(76043),T=e.i(75254);let N=(0,T.f)("eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);var C=e.i(22831);e.i(48248);var M=e.i(98663);e.i(84603);var H=e.i(17263);function k(e){let i,o,r,s,n,l,c,d,p,u,m,f=(0,a.c)(33),{project:h}=e,{t:g}=(0,C.f)();if(f[0]!==h.name){let e;f[2]===Symbol.for("react.memo_cache_sentinel")?(e=/^-|-$/g,f[2]=e):e=f[2],i=h.name.toLowerCase().normalize("NFD").replaceAll(/[\u0300-\u036F]/g,"").replaceAll(/[^\da-z]+/g,"-").replaceAll(e,""),f[0]=h.name,f[1]=i}else i=f[1];let b=i;f[3]===Symbol.for("react.memo_cache_sentinel")?(o={duration:.1},f[3]=o):o=f[3];let v=h.name;f[4]!==h.image||f[5]!==h.name||f[6]!==g?(r=null==h.image?(0,t.jsx)(w.f.div,{className:"aspect-[400/225] bg-primary/15",layout:!0}):(0,t.jsx)(w.f.div,{className:"relative aspect-[400/225]",layout:!0,children:(0,t.jsxs)("div",{className:"absolute h-full w-full transition-transform group-hover:-translate-y-4",children:[(0,t.jsx)("img",{className:"absolute left-1/2 top-1/2 max-h-full max-w-full -translate-x-1/2 -translate-y-1/2 opacity-25 blur-xl transition-all group-hover:opacity-50 group-hover:blur-2xl",src:`/project-images/${h.image}`,alt:g("project.image",{name:h.name}),"aria-hidden":!0}),(0,t.jsx)("img",{className:"absolute left-1/2 top-1/2 max-h-full max-w-full -translate-x-1/2 -translate-y-1/2",src:`/project-images/${h.image}`,alt:g("project.image",{name:h.name}),"aria-hidden":!0})]})}),f[4]=h.image,f[5]=h.name,f[6]=g,f[7]=r):r=f[7],f[8]!==h.name?(s=(0,t.jsx)("div",{className:"text-2xl font-bold",children:h.name}),f[8]=h.name,f[9]=s):s=f[9],f[10]!==h.url||f[11]!==g?(n=h.url?(0,t.jsxs)(M.f,{"aria-label":g("project.visit"),href:h.url,isIcon:!0,target:"_blank",children:[" ",(0,t.jsx)(N,{})," "]}):null,f[10]=h.url,f[11]=g,f[12]=n):n=f[12],f[13]!==h.repository||f[14]!==g?(l=h.repository?(0,t.jsx)(M.f,{"aria-label":g("project.source-code"),href:h.repository,isIcon:!0,target:"_blank",children:(0,t.jsx)(z.f,{})}):null,f[13]=h.repository,f[14]=g,f[15]=l):l=f[15],f[16]!==n||f[17]!==l?(c=(0,t.jsxs)("div",{className:"flex flex-row flex-wrap items-center justify-end gap-2",children:[n,l]}),f[16]=n,f[17]=l,f[18]=c):c=f[18],f[19]!==s||f[20]!==c?(d=(0,t.jsxs)(w.f.div,{className:"flex justify-between gap-4",layout:!0,children:[s,c]}),f[19]=s,f[20]=c,f[21]=d):d=f[21];let x=`projects.${b}.description`;return f[22]!==h.description||f[23]!==g||f[24]!==x?(p=g(x,{defaultValue:h.description}),f[22]=h.description,f[23]=g,f[24]=x,f[25]=p):p=f[25],f[26]!==p?(u=(0,t.jsx)(w.f.div,{layout:!0,children:p}),f[26]=p,f[27]=u):u=f[27],f[28]!==h.name||f[29]!==u||f[30]!==r||f[31]!==d?(m=(0,t.jsx)("div",{className:"group flex w-[400px] shrink items-stretch",children:(0,t.jsx)(H.f,{transition:o,children:(0,t.jsxs)("div",{"aria-label":v,className:"flex flex-col gap-6",role:"group",children:[r,d,u]})})}),f[28]=h.name,f[29]=u,f[30]=r,f[31]=d,f[32]=m):m=f[32],m}let L=(0,i.createContext)({filter:e=>e,setFilter:()=>{}});function G(e,...t){let a=t.map(String);return a.push(""),e.map((e,t)=>e+a[t]).reduce((e,t)=>e+t)}let P={category:["Discord App","Biblioteca","Framework","Mod","Pacote NPM","Site"],language:["C","C++","JavaScript","Lua","Python","TypeScript"],library:["Express.js","React","Tailwind CSS","Three.js"]},B=[{name:"Swash",description:"Framework React para comunicação inter-componente via interações de arrastar e soltar. Modular, extensível e customizável.",tags:["Biblioteca","Framework","GitHub","GitHub Actions","HTML","JavaScript","Node.js","Pacote NPM","React","TypeScript"],image:"Swash.gif",license:"MIT License",repository:"https://github.com/luizffgv/swash",url:"https://swash.luizf.dev/"},{name:"Blink: Ultimate Teleportation",description:"Instalado por mais de 32 mil usuários diferentes, Blink é um mod feito em Lua para Teardown incluso no modpack oficial para Xbox e PlayStation.",details:G`
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
    `,tags:["GitHub","Lua","Mod","Python"],url:"https://steamcommunity.com/sharedfiles/filedetails/?id=2875792342",repository:"https://github.com/luizffgv/blink-mod-teardown",image:"Blink Ultimate Teleportation.webp"},{name:"codinStruct",description:"Uma organização feita como projeto de faculdade, visando ajudar estudantes a aprender C, JavaScript e Python.  Trabalhei principalmente na organização, no Sass e no conteúdo de C.",details:G`
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
    `,tags:["Bash","Docker","Express.js","GitHub","GitHub Actions","HTML","JavaScript","Markdown","mdBook","Node.js","Organização","Python","Sass","Site","TypeScript","Webpack"],url:"https://github.com/codinStruct",image:"codinStruct.webp"},{name:"codinStruct Next",description:"Front-end em Next.js feito para o codinStruct—projeto realizado na Rede de Ensino Doctum com o intuito de produzir conteúdos educacionais sobre programação.",tags:["GitHub","GitHub Actions","HTML","Next.js","Node.js","React","TypeScript"],url:"https://codinstruct.luizf.dev",repository:"https://github.com/luizffgv/codinStruct-next",image:"codinStruct.webp"},{name:"Ekranoplan",description:"Biblioteca JS/TS de uso geral com features simples e avançadas.",tags:["Biblioteca","GitHub","GitHub Actions","JavaScript","Node.js","Pacote NPM","TypeScript"],license:"MIT License",url:"https://ekranoplan.luizf.dev/",repository:"https://github.com/luizffgv/ekranoplan",image:"Ekranoplan.webp"},{name:"Figment",description:"Uma classe em C++ que permite controle preciso da vida útil de objetos de qualquer tipo. Semelhante a std::optional, mas não contém informações sobre o objeto contido.",tags:["Biblioteca","C++","C++17","C++20","Doxygen","GitHub Actions","GitHub"],license:"Unlicense",url:"https://figment.luizf.dev",repository:"https://github.com/luizffgv/Figment",image:"Figment.webp"},{name:"Glimmer",description:"Um simples framework modular para bots de Discord baseado em discord.js.",tags:["Framework","Discord App","GitHub","GitHub Actions","JavaScript","Node.js","TypeScript"],license:"MIT License",repository:"https://github.com/luizffgv/Glimmer"},{name:"Globe",description:"Um site com um globo giratório formado por pontos, te permitindo usar suas próprias imagens como texturas.",tags:["GitHub Actions","GitHub","HTML","JavaScript","Node.js","Sass","Site","Three.js","TypeScript","Webpack"],details:G`
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
    `,license:"MIT License",url:"https://globe.luizf.dev",repository:"https://github.com/luizffgv/globe",image:"Globe.webp"},{name:"Goo",description:"Elemento HTML configurável que fornece um fundo animado com efeito de gosma.",tags:["GitHub","HTML","JavaScript","Node.js"],license:"MIT License",repository:"https://github.com/luizffgv/goo-html",image:"Goo.webp"},{name:"HTilesML",description:"Jogo experimental utilizando elementos HTML e transformações CSS 3D.",details:G`
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
    `,tags:["GitHub","HTML","JavaScript","Site"],license:"MIT License",url:"https://htilesml.luizf.dev",repository:"https://github.com/luizffgv/htilesml",image:"HTilesML.webp"},{name:"Modern C Sorting Algorithms",description:"Coleção de algoritmos de ordenação genéricos utilizando o padrão C18 extensivamente, feita para facilitar meus trabalhos de C na faculdade.",details:G`
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
    `,tags:["Biblioteca","C","C18","GitHub"],license:"GNU General Public License v3.0",repository:"https://github.com/luizffgv/modern-c-sorting-algorithms",image:"Modern C Sorting Algorithms.webp"},{name:"Phasmoo",description:"Um website e PWA totalmente responsivo que filtra fantasmas para auxiliar no gameplay do jogo Phasmophobia.",tags:["GitHub","GitHub Actions","HTML","JavaScript","Next.js","Node.js","React","Site","Tailwind CSS"],license:"MIT License",url:"https://phasmoo.luizf.dev",repository:"https://github.com/luizffgv/phasmoo",image:"Phasmoo.webp"},{name:"Separador de sílabas",description:"Um site feito em Next.js que divide um texto em sílabas utilizando um algoritmo que criei.",tags:["GitHub","GitHub Actions","HTML","JavaScript","Next.js","Node.js","React","Site","TypeScript"],license:"MIT License",url:"https://silabas.luizf.dev/",repository:"https://github.com/luizffgv/silabas-website",image:"Silabas.webp"},{name:"Shader Site",description:"Um site que te ajuda a encontrar o shaderpack de Minecraft ideal para você.",tags:["GitHub","GitHub Actions","HTML","JavaScript","Lit","Node.js","Sass","Site","TypeScript","Webpack"],license:"MIT License",repository:"https://github.com/luizffgv/shader-site",url:"https://shadersite.luizf.dev",image:"Shader Site.webp"},{name:"Spirit Box",description:"Bot para Discord que gera um diário de anotações do jogo Phasmophobia, para auxiliar na identificação de fantasmas e no compartilhamento de pistas com sua equipe.",details:G`
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
    `,tags:["Discord App","GitHub","JavaScript","Node.js","TypeScript"],license:"MIT License",repository:"https://github.com/luizffgv/spirit-box",image:"Spirit Box.webp"},{name:"Swapem",description:"Ferramenta CLI e pacote NPM fornecendo uma stream transform que lê texto e substitui diretivas por valores vindos de um arquivo JSON.",tags:["Biblioteca","GitHub","GitHub Actions","JavaScript","Node.js","Pacote NPM","TypeScript"],license:"MIT License",url:"https://www.npmjs.com/package/swapem",repository:"https://github.com/luizffgv/swapem",image:"Swapem.webp"},{name:"TS Conversions",description:"Biblioteca e pacote NPM fornecendo utilitários para realizar conversões seguras ou inseguras e diminuir código boilerplate no TypeScript.",tags:["Biblioteca","GitHub Actions","GitHub","JavaScript","Node.js","Pacote NPM","TypeScript"],license:"MIT License",url:"https://www.npmjs.com/package/@luizffgv/ts-conversions",repository:"https://github.com/luizffgv/ts-conversions"},{name:"Viewport-Based Scaling",description:"Site que gera CSS para definir o valor de uma propriedade baseado na largura do viewport, realizando interpolação linear entre vários pares de pontos.",tags:["GitHub","GitHub Actions","HTML","JavaScript","Node.js","Site","TypeScript","Webpack"],license:"MIT License",url:"https://vbs.luizf.dev",repository:"https://github.com/luizffgv/viewport-based-rescaling",image:"VBS.gif"}];function A(){let e,o,r,s,n,l=(0,a.c)(11),{filter:c}=(0,i.useContext)(L);l[0]!==c?(e=c(B),l[0]=c,l[1]=e):e=l[1];let d=e;return l[2]!==d?(o=d.map(q),l[2]=d,l[3]=o):o=l[3],l[4]!==o?(r=(0,t.jsx)(y,{children:o}),l[4]=o,l[5]=r):r=l[5],l[6]!==d.length?(s=0===d.length&&(0,t.jsx)("li",{className:"text-center text-xl",children:"Nenhum projeto se encaixa nos filtros."}),l[6]=d.length,l[7]=s):s=l[7],l[8]!==r||l[9]!==s?(n=(0,t.jsxs)("ul",{className:"flex flex-row flex-wrap justify-center gap-8",children:[r,s]}),l[8]=r,l[9]=s,l[10]=n):n=l[10],n}function q(e){return(0,t.jsx)(w.f.li,{className:"flex",layout:!0,children:(0,t.jsx)(k,{project:e})},e.name)}var E=e.i(25913);let _=(0,T.f)("chevron-down",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);var I=e.i(18566);e.i(42147);var R=e.i(1121),D=e.i(7670);function J(e){let i,o,r,s=(0,a.c)(10),{value:n,label:l,checked:c,onChange:d}=e,p=c&&"active";s[0]!==p?(i=(0,D.U)("relative inline-block bg-primary/10 px-2 py-1 text-center text-base transition-all hover:brightness-110 has-[:checked]:bg-primary has-[:checked]:text-fg-on-primary dark:hover:bg-primary/10 dark:has-[:checked]:bg-primary",p),s[0]=p,s[1]=i):i=s[1];let u=d||U;s[2]!==c||s[3]!==u||s[4]!==n?(o=(0,t.jsx)("input",{className:"absolute inset-0 cursor-pointer appearance-none",type:"checkbox",value:n,checked:c,onChange:u}),s[2]=c,s[3]=u,s[4]=n,s[5]=o):o=s[5];let m=l??n;return s[6]!==i||s[7]!==o||s[8]!==m?(r=(0,t.jsxs)("label",{className:i,children:[o,m]}),s[6]=i,s[7]=o,s[8]=m,s[9]=r):r=s[9],r}function U(){}let $=(0,E.f)("flex flex-col items-center gap-8 overflow-hidden",{variants:{isExpanded:{true:"w-[calc(100vw-32px)] p-6 md:w-auto"}}}),F=new Set(["Bash","C++17","C++20","C18","Doxygen","GitHub","HTML","Livro","Markdown","mdBook","Organização"]),O=[...B.map(e=>e.tags).reduce((e,t)=>{for(let a of t)e.add(a);return e},new Set)].filter(e=>!F.has(e)).toSorted(),W=new Set(Object.values(P).flat()),V=new Set(O.filter(e=>!W.has(e)));function X(e,t){return new Set((e.tags??[]).filter(e=>t.has(e)))}function Y(){let e,o,r,s,n,l,c,d,p,u,m,f,h,g,b,v,x,S,j=(0,a.c)(39),{t:y}=(0,C.f)(),z=(0,I.useSearchParams)(),{setFilter:T}=(0,i.useContext)(L);j[0]!==z?(e=new Set(z.getAll("tags").filter(Q)),j[0]=z,j[1]=e):e=j[1],j[2]!==e?(o={value:e},j[2]=e,j[3]=o):o=j[3];let[N,k]=(0,i.useState)(o),[G,B]=(0,i.useState)(!0);j[4]===Symbol.for("react.memo_cache_sentinel")?(r=Object.entries(P),j[4]=r):r=j[4],j[5]===Symbol.for("react.memo_cache_sentinel")?(s=["uncategorized",[...V]],j[5]=s):s=j[5],j[6]===Symbol.for("react.memo_cache_sentinel")?(n=[...r,s],j[6]=n):n=j[6];let A=n;j[7]!==T||j[8]!==N?(l=()=>{T(e=>{let t=e.toSorted((e,t)=>X(t,N.value).size-X(e,N.value).size);return N.value.size>0&&(t=t.filter(e=>X(e,N.value).size>0)),t})},c=[N,T],j[7]=T,j[8]=N,j[9]=l,j[10]=c):(l=j[9],c=j[10]),(0,i.useEffect)(l,c),j[11]!==y||j[12]!==N?(d=e=>(0,t.jsx)("div",{className:"flex grow flex-col items-stretch",children:(0,t.jsx)(J,{value:e,label:y(`project-tags.${e}`,{defaultValue:e}),checked:N.value.has(e)})},e),j[11]=y,j[12]=N,j[13]=d):d=j[13];let q=d;j[14]!==y?(p=e=>({category:y("filters.categories"),language:y("filters.languages"),library:y("filters.libraries"),uncategorized:y("filters.uncategorized")})[e],j[14]=y,j[15]=p):p=j[15];let E=p;j[16]===Symbol.for("react.memo_cache_sentinel")?(u=()=>{B(K)},j[16]=u):u=j[16];let D=u;j[17]!==G?(m=$({isExpanded:G}),j[17]=G,j[18]=m):m=j[18],j[19]!==E||j[20]!==G||j[21]!==q||j[22]!==N?(f=G&&(0,t.jsx)("fieldset",{className:"contents",children:(0,t.jsx)(w.f.div,{className:"flex flex-col gap-4 overflow-y-auto",initial:{opacity:0},animate:{opacity:1},layout:!0,transition:{duration:.5,delay:.25},onChange:e=>{e.target instanceof HTMLInputElement?(window.scrollTo({top:0,behavior:"instant"}),e.target.checked?N.value.add(e.target.value):N.value.delete(e.target.value),k({value:N.value})):console.error("event.target is not an HTMLInputElement")},children:A.map((e,a)=>{let[i,o]=e;return(0,t.jsx)(R.f,{offset:90*a,children:(0,t.jsxs)("div",{className:"flex flex-col gap-1",children:[(0,t.jsx)("div",{className:"text-lg font-bold",children:E(i)}),(0,t.jsx)("div",{className:"flex flex-row flex-wrap gap-2",children:o.map(e=>q(e))},i)]})},i)})})}),j[19]=E,j[20]=G,j[21]=q,j[22]=N,j[23]=f):f=j[23];let U=`${180*!G}deg`;return j[24]!==U?(h={rotate:U},j[24]=U,j[25]=h):h=j[25],j[26]===Symbol.for("react.memo_cache_sentinel")?(g=(0,t.jsx)(_,{}),j[26]=g):g=j[26],j[27]!==h?(b=(0,t.jsxs)(w.f.span,{animate:h,layout:!0,children:[g," "]}),j[27]=h,j[28]=b):b=j[28],j[29]!==G||j[30]!==y?(v=G?y("filters.collapse"):y("filters.expand"),j[29]=G,j[30]=y,j[31]=v):v=j[31],j[32]!==b||j[33]!==v?(x=(0,t.jsx)(w.f.div,{layout:!0,children:(0,t.jsxs)(M.f,{onClick:D,children:[b,v]})}),j[32]=b,j[33]=v,j[34]=x):x=j[34],j[35]!==m||j[36]!==f||j[37]!==x?(S=(0,t.jsx)("div",{className:"fixed bottom-4 left-1/2 z-10 -translate-x-1/2",children:(0,t.jsx)(H.f,{className:"max-h-[calc(100svh-32px)] overflow-hidden",layout:!0,padding:0,children:(0,t.jsxs)("div",{className:m,children:[f,x]})})}),j[35]=m,j[36]=f,j[37]=x,j[38]=S):S=j[38],S}function K(e){return!e}function Q(e){return O.includes(e)}function Z(){return ee}function ee(e){return e}e.s(["default",0,function(){let e,o,r,s,n,l=(0,a.c)(7),[c,d]=(0,i.useState)(Z);l[0]===Symbol.for("react.memo_cache_sentinel")?(e=e=>{d(()=>e)},l[0]=e):e=l[0];let p=e;return l[1]!==c?(o={filter:c,setFilter:p},l[1]=c,l[2]=o):o=l[2],l[3]===Symbol.for("react.memo_cache_sentinel")?(r=(0,t.jsx)("div",{className:"flex flex-col items-center gap-32",children:(0,t.jsx)("div",{className:"w-full max-w-screen-2xl px-4 pb-[100vh]",children:(0,t.jsx)(A,{})})}),l[3]=r):r=l[3],l[4]===Symbol.for("react.memo_cache_sentinel")?(s=(0,t.jsx)(i.Suspense,{children:(0,t.jsx)(Y,{})}),l[4]=s):s=l[4],l[5]!==o?(n=(0,t.jsx)("div",{className:"pt-[10vh]",children:(0,t.jsxs)(L.Provider,{value:o,children:[r,s]})}),l[5]=o,l[6]=n):n=l[6],n}],79221)}])})();