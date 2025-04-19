/* eslint-disable sonarjs/no-duplicate-string */
import { html } from "./tags";

/** Project tag. */
export type Tag =
  | "Bash"
  | "Biblioteca"
  | "C"
  | "C++"
  | "C++17"
  | "C++20"
  | "C18"
  | "Discord App"
  | "Docker"
  | "Doxygen"
  | "Express.js"
  | "Framework"
  | "GitHub"
  | "GitHub Actions"
  | "HTML"
  | "JavaScript"
  | "Lit"
  | "Livro"
  | "Lua"
  | "Markdown"
  | "mdBook"
  | "Mod"
  | "Next.js"
  | "Node.js"
  | "Organização"
  | "Pacote NPM"
  | "Python"
  | "React"
  | "Sass"
  | "Site"
  | "Tailwind CSS"
  | "Three.js"
  | "TypeScript"
  | "Webpack";

/** Project license. */
export type License =
  | "MIT License"
  | "Unlicense"
  | "CC BY-SA 4.0"
  | "GNU General Public License v3.0";

/** Raw project. */
export type ProjectRaw = {
  name: string;
  description: string;
  details?: string;
  tags?: Tag[];
  license?: License;
  url?: string;
  repository?: string;
  wip?: boolean;
  image?: string;
};

const projects = [
  {
    name: "Swash",
    description:
      "Framework React para comunicação inter-componente via interações de arrastar e soltar. Modular, extensível e customizável.",
    tags: [
      "Biblioteca",
      "Framework",
      "GitHub",
      "GitHub Actions",
      "HTML",
      "JavaScript",
      "Node.js",
      "Pacote NPM",
      "React",
      "TypeScript",
    ],
    image: "Swash.gif",
    license: "MIT License",
    repository: "https://github.com/luizffgv/swash",
    url: "https://swash.luizf.dev/",
  },
  {
    name: "Blink: Ultimate Teleportation",
    description:
      "Instalado por mais de 32 mil usuários diferentes, Blink é um mod feito em Lua para o jogo Teardown.",
    details: html`
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
    `,
    tags: ["GitHub", "Lua", "Mod", "Python"],
    url: "https://steamcommunity.com/sharedfiles/filedetails/?id=2875792342",
    repository: "https://github.com/luizffgv/blink-mod-teardown",
    image: "Blink Ultimate Teleportation.webp",
  },
  {
    name: "codinStruct",
    description:
      "Uma organização feita como projeto de faculdade, visando ajudar estudantes a aprender C, JavaScript e Python.  Trabalhei principalmente na organização, no Sass e no conteúdo de C.",
    details: html`
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
    `,
    tags: [
      "Bash",
      "Docker",
      "Express.js",
      "GitHub",
      "GitHub Actions",
      "HTML",
      "JavaScript",
      "Markdown",
      "mdBook",
      "Node.js",
      "Organização",
      "Python",
      "Sass",
      "Site",
      "TypeScript",
      "Webpack",
    ],
    url: "https://github.com/codinStruct",
    image: "codinStruct.webp",
  },
  {
    name: "codinStruct Next",
    description:
      "Front-end em Next.js feito para o codinStruct—projeto realizado na Rede de Ensino Doctum com o intuito de produzir conteúdos educacionais sobre programação.",
    tags: [
      "GitHub",
      "GitHub Actions",
      "HTML",
      "Next.js",
      "Node.js",
      "React",
      "TypeScript",
    ],
    url: "https://codinstruct.luizf.dev",
    repository: "https://github.com/luizffgv/codinStruct-next",
    image: "codinStruct.webp",
  },
  {
    name: "Ekranoplan",
    description:
      "Biblioteca JS/TS de uso geral com features simples e avançadas.",
    tags: [
      "Biblioteca",
      "GitHub",
      "GitHub Actions",
      "JavaScript",
      "Node.js",
      "Pacote NPM",
      "TypeScript",
    ],
    license: "MIT License",
    url: "https://ekranoplan.luizf.dev/",
    repository: "https://github.com/luizffgv/ekranoplan",
    image: "Ekranoplan.webp",
  },
  {
    name: "Figment",
    description:
      "Uma classe em C++ que permite controle preciso da vida útil de objetos de qualquer tipo. Semelhante a std::optional, mas não contém informações sobre o objeto contido.",
    tags: [
      "Biblioteca",
      "C++",
      "C++17",
      "C++20",
      "Doxygen",
      "GitHub Actions",
      "GitHub",
    ],
    license: "Unlicense",
    url: "https://figment.luizf.dev",
    repository: "https://github.com/luizffgv/Figment",
  },
  {
    name: "Glimmer",
    description:
      "Um simples framework modular para bots de Discord baseado em discord.js.",
    tags: [
      "Framework",
      "Discord App",
      "GitHub",
      "GitHub Actions",
      "JavaScript",
      "Node.js",
      "TypeScript",
    ],
    license: "MIT License",
    repository: "https://github.com/luizffgv/Glimmer",
  },
  {
    name: "Globe",
    description:
      "Um site com um globo giratório formado por pontos, te permitindo usar suas próprias imagens como texturas.",
    tags: [
      "GitHub Actions",
      "GitHub",
      "HTML",
      "JavaScript",
      "Node.js",
      "Sass",
      "Site",
      "Three.js",
      "TypeScript",
      "Webpack",
    ],
    details: html`
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
    `,
    license: "MIT License",
    url: "https://globe.luizf.dev",
    repository: "https://github.com/luizffgv/globe",
    image: "Globe.webp",
  },
  {
    name: "Goo",
    description:
      "Elemento HTML configurável que fornece um fundo animado com efeito de gosma.",
    tags: ["GitHub", "HTML", "JavaScript", "Node.js"],
    license: "MIT License",
    repository: "https://github.com/luizffgv/goo-html",
    image: "Goo.webp",
  },
  {
    name: "HTilesML",
    description:
      "Jogo experimental utilizando elementos HTML e transformações CSS 3D.",
    details: html`
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
    `,
    tags: ["GitHub", "HTML", "JavaScript", "Site"],
    license: "MIT License",
    url: "https://htilesml.luizf.dev",
    repository: "https://github.com/luizffgv/htilesml",
  },
  {
    name: "Modern C Sorting Algorithms",
    description:
      "Coleção de algoritmos de ordenação genéricos utilizando o padrão C18 extensivamente, feita para facilitar meus trabalhos de C na faculdade.",
    details: html`
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
    `,
    tags: ["Biblioteca", "C", "C18", "GitHub"],
    license: "GNU General Public License v3.0",
    repository: "https://github.com/luizffgv/modern-c-sorting-algorithms",
  },
  {
    name: "Phasmoo",
    description:
      "Um website e PWA totalmente responsivo que filtra fantasmas para auxiliar no gameplay do jogo Phasmophobia.",
    tags: [
      "GitHub",
      "GitHub Actions",
      "HTML",
      "JavaScript",
      "Next.js",
      "Node.js",
      "React",
      "Site",
      "Tailwind CSS",
    ],
    license: "MIT License",
    url: "https://phasmoo.luizf.dev",
    repository: "https://github.com/luizffgv/phasmoo",
    image: "Phasmoo.webp",
  },
  {
    name: "Separador de sílabas",
    description:
      "Um site feito em Next.js que divide um texto em sílabas utilizando um algoritmo que criei.",
    tags: [
      "GitHub",
      "GitHub Actions",
      "HTML",
      "JavaScript",
      "Next.js",
      "Node.js",
      "React",
      "Site",
      "TypeScript",
    ],
    license: "MIT License",
    url: "https://silabas.luizf.dev/",
    repository: "https://github.com/luizffgv/silabas-website",
    image: "Silabas.webp",
  },
  {
    name: "Shader Site",
    description:
      "Um site que te ajuda a encontrar o shaderpack de Minecraft ideal para você.",
    tags: [
      "GitHub",
      "GitHub Actions",
      "HTML",
      "JavaScript",
      "Lit",
      "Node.js",
      "Sass",
      "Site",
      "TypeScript",
      "Webpack",
    ],
    license: "MIT License",
    repository: "https://github.com/luizffgv/shader-site",
    url: "https://shadersite.luizf.dev",
    image: "Shader Site.webp",
  },
  {
    name: "Spirit Box",
    description:
      "Bot para Discord que gera um diário de anotações do jogo Phasmophobia, para auxiliar na identificação de fantasmas e no compartilhamento de pistas com sua equipe.",
    details: html`
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
    `,
    tags: ["Discord App", "GitHub", "JavaScript", "Node.js", "TypeScript"],
    license: "MIT License",
    repository: "https://github.com/luizffgv/spirit-box",
    image: "Spirit Box.webp",
  },
  {
    name: "Swapem",
    description:
      "Ferramenta CLI e pacote NPM fornecendo uma stream transform que lê texto e substitui diretivas por valores vindos de um arquivo JSON.",
    tags: [
      "Biblioteca",
      "GitHub",
      "GitHub Actions",
      "JavaScript",
      "Node.js",
      "Pacote NPM",
      "TypeScript",
    ],
    license: "MIT License",
    url: "https://www.npmjs.com/package/swapem",
    repository: "https://github.com/luizffgv/swapem",
  },
  {
    name: "TS Conversions",
    description:
      "Biblioteca e pacote NPM fornecendo utilitários para realizar conversões seguras ou inseguras e diminuir código boilerplate no TypeScript.",
    tags: [
      "Biblioteca",
      "GitHub Actions",
      "GitHub",
      "JavaScript",
      "Node.js",
      "Pacote NPM",
      "TypeScript",
    ],
    license: "MIT License",
    url: "https://www.npmjs.com/package/@luizffgv/ts-conversions",
    repository: "https://github.com/luizffgv/ts-conversions",
  },
  {
    name: "Viewport-Based Scaling",
    description:
      "Site que gera CSS para definir o valor de uma propriedade baseado na largura do viewport, realizando interpolação linear entre vários pares de pontos.",
    tags: [
      "GitHub",
      "GitHub Actions",
      "HTML",
      "JavaScript",
      "Node.js",
      "Site",
      "TypeScript",
      "Webpack",
    ],
    license: "MIT License",
    url: "https://vbs.luizf.dev",
    repository: "https://github.com/luizffgv/viewport-based-rescaling",
  },
] as const satisfies ProjectRaw[];

export default projects;
