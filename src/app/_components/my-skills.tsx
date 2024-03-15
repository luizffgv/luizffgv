import Link from "next/link";
import ViewButton from "./buttons/view-button";

export default function MySkills() {
  return (
    <section className="raiar-card raiar flex-col gap">
      <h2>Minhas competências técnicas</h2>
      <div>
        <details open>
          <summary>Linguagens</summary>
          <ul className="no-list-style raiar flex-row gap flex-wrap">
            <ViewButton
              modalContent={
                <p>
                  Eu domino JavaScript, incluindo promises, execução assíncrona,
                  <i>symbols</i>, documentação e segurança de tipos com JSDoc, e
                  certas APIs do navegador como a Web Animations API.
                </p>
              }
            >
              JavaScript
            </ViewButton>
            <ViewButton
              modalContent={
                <div className="raiar flex-col gap">
                  <p>
                    Eu domino TypeScript e consigo adicionar segurança de tipos
                    a qualquer programa definindo tipos complexos incluindo
                    várias uniões e interseções de tipos e outras manipulações.
                  </p>
                  <p>
                    Alguns desses tipos podem soar complexos demais às vezes (
                    <a href="https://github.com/colinhacks/zod" target="_blank">
                      olhe as definições de tipos do Zod!
                    </a>
                    ), mas eu garanto que serão bem documentados e fornecerão
                    segurança e agilidade ne desenvolvimento.
                  </p>
                </div>
              }
            >
              TypeScript
            </ViewButton>
            <ViewButton
              modalContent={
                <p>
                  Eu sou familiar com conceitos como <i>SFINAE</i>, <i>RAII</i>,{" "}
                  <i>templates</i>, <i>constraints</i> e <i>concepts</i>, e
                  quase tudo que vem do C.
                </p>
              }
            >
              C++20
            </ViewButton>
            <ViewButton
              modalContent={
                <div className="raiar flex-col gap">
                  <p>
                    Eu comecei a programar na faculdade com o livro C
                    Programming: A Modern Approach. Assim eu aprendi toda a base
                    do C.
                  </p>
                  <p>
                    Conheço features dos padrões C99 ao C11, como{" "}
                    <i>flexible array members</i> e a palavra-chave{" "}
                    <code>_Generic</code>.
                  </p>
                  <p>
                    Veja minhas soluções para os exercícios livro C Programming:
                    A Modern Approach.
                  </p>
                  <div className="raiar flex-row justify-content-center">
                    <ViewButton
                      href="https://github.com/luizffgv/cpama-ii"
                      target="_blank"
                    >
                      Soluções
                    </ViewButton>
                  </div>
                </div>
              }
            >
              C11
            </ViewButton>
          </ul>
        </details>
        <details open>
          <summary>Bibliotecas</summary>
          <ul className="no-list-style raiar flex-row gap flex-wrap">
            <ViewButton
              modalContent={
                <div className="raiar flex-col gap">
                  <p>Minha experiência em React se dá pelo Next.js.</p>
                  <p>
                    Sei lidar com estados, <i>context</i>, e tenho entendimento
                    total de <i>hooks</i> como <code>useMemo</code>,{" "}
                    <code>useCallback</code>, <code>useEffect</code> e{" "}
                    <code>useLayoutEffect</code>.
                  </p>
                  <p>
                    Tenho mais familiaridade estilizando componentes com módulos
                    CSS e módulos Sass.
                  </p>
                </div>
              }
            >
              React
            </ViewButton>
          </ul>
        </details>
        <details open>
          <summary>Frameworks</summary>
          <ul className="no-list-style raiar flex-row gap flex-wrap">
            <ViewButton
              modalContent={
                <div className="raiar flex-col gap">
                  <p>Esse site é feito com Next.js.</p>
                  <p>
                    Tenho boa experiência com Next.js para <i>static exports</i>
                    , e sou familiar aos conceitos de <i>parallel routes</i> e{" "}
                    <i>intercepting routes</i> (é assim que se simula a forma
                    que o Instagram faz links abrirem como modais!).
                  </p>
                </div>
              }
            >
              Next.js
            </ViewButton>
          </ul>
        </details>
        <details open>
          <summary>Ferramentas</summary>
          <ul className="no-list-style raiar flex-row gap flex-wrap">
            <ViewButton
              modalContent={
                <div className="raiar flex-col gap">
                  <p>
                    Basta ver meus repositórios para perceber que adoro usar
                    GitHub e suas features como GitHub Actions.
                  </p>
                  <p>
                    No projeto{" "}
                    <Link href="projetos/codinStruct">codinStruct</Link> eu
                    criei uma organização no GitHub e com meu grupo utilizamos
                    GitHub Actions e o GitHub flow, com code reviews e
                    submódulos Git.
                  </p>
                </div>
              }
            >
              GitHub
            </ViewButton>
            <ViewButton
              modalContent={
                <div className="raiar flex-col gap">
                  <p>
                    Eu fiz um template para todos os meus sites com Webpack,
                    integrando Sass, TypeScript e Handlebars de forma eficiente.
                  </p>
                  <p>Veja meu template para websites com Webpack.</p>
                  <div className="raiar flex-row justify-content-center">
                    <ViewButton
                      href="https://github.com/luizffgv/website-template"
                      target="_blank"
                    >
                      Meu template
                    </ViewButton>
                  </div>
                </div>
              }
            >
              Webpack
            </ViewButton>
          </ul>
        </details>
      </div>
    </section>
  );
}
