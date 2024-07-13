import {
  DrillIcon,
  FolderGit2,
  HeartIcon,
  NewspaperIcon,
  PlaneTakeoffIcon,
} from "lucide-react";
import Button from "../button";
import GlowingText from "../glowing-text";
import TitledSection from "../titled-section";
import ToolDetails from "../tool-details";

export default function ToolsSection(): JSX.Element {
  return (
    <TitledSection
      level={2}
      title={
        <>
          <DrillIcon className="inline" /> Meu arsenal principal
        </>
      }
    >
      <div className="flex flex-wrap justify-center gap-8 *:max-w-sm">
        <ToolDetails
          name="Node.js"
          icon={
            <img
              src="https://cdn.simpleicons.org/nodedotjs"
              alt="Logotipo Node.js"
            />
          }
          childTools={[
            {
              name: "Jest",
              icon: (
                <img
                  src="https://cdn.simpleicons.org/jest"
                  alt="Logotipo Jest"
                />
              ),
            },
            {
              name: "ESLint",
              icon: (
                <img
                  src="https://cdn.simpleicons.org/eslint"
                  alt="Logotipo ESLint"
                />
              ),
            },
          ]}
        >
          <p>Eu trabalho com Node. É meu ecossistema favorito.</p>
          <p>Já publiquei vários pacotes no NPM e eu adoro isso.</p>
          <p>
            Ah, eu{" "}
            <GlowingText>
              <HeartIcon
                aria-label="adoro"
                className="inline text-primary"
                fill="currentColor"
              ></HeartIcon>
            </GlowingText>{" "}
            documentar com JSDoc e resolver problemas do ESLint.
          </p>
        </ToolDetails>
        <ToolDetails
          name="TypeScript"
          icon={
            <img
              src="https://cdn.simpleicons.org/typescript"
              alt="Logotipo TypeScript"
            />
          }
          footer={
            <div className="flex justify-center">
              <Button href="https://ekranoplan.luizf.dev" target="_blank">
                <PlaneTakeoffIcon /> Ekranoplan
              </Button>
            </div>
          }
          childTools={[
            {
              name: "Zod",
              icon: (
                <img src="https://cdn.simpleicons.org/zod" alt="Logotipo Zod" />
              ),
            },
          ]}
        >
          <p>
            Quando eu digo TypeScript, não digo JavaScript com tipos salpicados
            pra lá e pra cá. Eu realmente busco conhecer a fundo o sistema de
            tipos do TypeScript e produzir código type-safe <strong>e</strong>{" "}
            ergonômico.{" "}
          </p>
          <p>
            Ekranoplan é um pacote NPM meu que modela comportamentos complexos
            com tipos.
          </p>
        </ToolDetails>
        <ToolDetails
          name="React"
          icon={
            <img src="https://cdn.simpleicons.org/react" alt="Logotipo React" />
          }
          childTools={[
            {
              name: "React Query",
              icon: (
                <img
                  src="https://cdn.simpleicons.org/reactquery"
                  alt="Logotipo React Query"
                />
              ),
            },
            {
              name: "React Hook Form",
              icon: (
                <img
                  src="https://cdn.simpleicons.org/reacthookform"
                  alt="Logotipo React Hook Form"
                />
              ),
            },
            {
              name: "Redux-Saga",
              icon: (
                <img
                  src="https://cdn.simpleicons.org/reduxsaga"
                  alt="Logotipo Redux-Saga"
                />
              ),
            },
            {
              name: "Framer Motion",
              icon: (
                <img
                  src="https://cdn.simpleicons.org/framer"
                  alt="Logotipo Framer"
                />
              ),
            },
          ]}
        >
          <p>
            Suspense? Sim. Hooks? Sim. Modo concorrente do React 18? Também.
            Ansioso pelo React 19? Mais ainda.
          </p>
          <p>
            Como alguém que usou HTML e JS puros por um bom tempo, React é
            apaixonante. Entre tantas outras possibilidades que explorei, como
            C, C++, Lua, Python, Java e Rust, React com TypeScript foram o
            estopim que fez front-end me conquistar por completo.
          </p>
        </ToolDetails>
        <ToolDetails
          name="CSS"
          icon={
            <img src="https://cdn.simpleicons.org/css3" alt="Logotipo CSS" />
          }
          footer={
            <div className="flex justify-center">
              <Button
                href="https://www.linkedin.com/pulse/o-seletor-css-vs-sass-luiz-fernando-frade-guerra-valle-noutf/"
                target="_blank"
              >
                <NewspaperIcon /> Ver post
              </Button>
            </div>
          }
          childTools={[
            {
              name: "Tailwind CSS",
              icon: (
                <img
                  src="https://cdn.simpleicons.org/tailwindcss"
                  alt="Logotipo Tailwind CSS"
                />
              ),
            },
            {
              name: "Styled Components",
              icon: (
                <img
                  src="https://cdn.simpleicons.org/styledcomponents"
                  alt="Logotipo Styled Components"
                />
              ),
            },
          ]}
        >
          <p>
            Curto CSS, CSS-in-JS, Tailwind CSS, Class Variance Authority, CSS
            modules e Sass. Sou confortável com transformações 3D e sei utilizar
            features experimentais como scroll-driven animations.
          </p>
          <p>
            Quer aprender algo que eu aposto que não sabe? Veja meu post abaixo.
          </p>
        </ToolDetails>
        <ToolDetails
          name="Git"
          icon={
            <img src="https://cdn.simpleicons.org/git" alt="Logotipo Git" />
          }
          footer={
            <div className="flex justify-center">
              <Button href="https://github.com/luizffgv" target="_blank">
                <FolderGit2 /> Meu GitHub
              </Button>
            </div>
          }
        >
          <p>
            Eu tenho 59 repositórios públicos no GitHub. Eu tento sempre separar
            alterações em vários commits.
          </p>
          <p>
            “Eu nem sei o que é git flog, e já tenho que aprender git reflog?”
          </p>
        </ToolDetails>
      </div>
    </TitledSection>
  );
}
