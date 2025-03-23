import { PencilIcon } from "lucide-react";
import Timeline from "../timeline";
import TitledSection from "../titled-section";
import GlowingText from "../glowing-text";

export default function Trajectory(): JSX.Element {
  return (
    <TitledSection
      level={2}
      title={
        <>
          Minha <GlowingText>trajetória</GlowingText>
        </>
      }
    >
      <div className="max-w-[90vw] overflow-x-auto">
        <Timeline.Root>
          <Timeline.Entry
            auxiliaryText="Você decide"
            // eslint-disable-next-line no-template-curly-in-string
            subtitle="${meuCargo}"
            // eslint-disable-next-line no-template-curly-in-string
            title="${suaEquipe}"
          ></Timeline.Entry>
          <Timeline.Entry
            auxiliaryText="Março 2025"
            subtitle="Zenvia"
            title="Desenvolvedor júnior"
          >
            <PencilIcon className="mr-2 inline h-4 w-4" />
            Ainda escrevendo essa história
          </Timeline.Entry>
          <Timeline.Entry
            auxiliaryText="Maio 2024"
            subtitle="Zenvia"
            title="Assistente de desenvolvimento"
          >
            <p>
              Desenvolvi vários microfrontends single-spa utilizando React,
              TypeScript, Styled Components, React Query e outras bibliotecas
            </p>
            <br />
            <p>
              Realizei manutenção de aplicações Next.js, Vite, single-spa e
              NestJS
            </p>
            <br />
            <p>
              Fui o maior contribuidor de uma biblioteca UI type-safe e Realizei
              manutenção de aplicações Next.js, Vite, single-spa e NestJS
              tree-shakable, baseada em um design system, com
              class-variance-authority e styled-components
            </p>
            <br />
            <p>
              Fiz a implementação de i18n em uma aplicação de microfrontends
              single-spa Auxiliei o time a resolver diversos bugs de back-end,
              tendo um olhar inquisitivo para entender como tudo funciona
            </p>
          </Timeline.Entry>
          <Timeline.Entry
            auxiliaryText="2020"
            title="Meu primeiro Hello World"
          ></Timeline.Entry>
        </Timeline.Root>
      </div>
    </TitledSection>
  );
}
