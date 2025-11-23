import { PencilIcon } from "lucide-react";
import { JSX } from "react";

import ColorCycler from "../color-cycler";
import GlowingText from "../glowing-text";
import Timeline from "../timeline";
import TitledSection from "../titled-section";

export default function Trajectory(): JSX.Element {
  return (
    <ColorCycler offset={270}>
      <TitledSection
        level={2}
        title={
          <>
            Minha <GlowingText>trajetória</GlowingText>
          </>
        }
      >
        <div className="max-w-[90vw]">
          <Timeline.Root>
            <Timeline.Entry
              auxiliaryText="Você decide"
              customDot={
                <div className="relative h-6 w-6">
                  <div className="absolute inset-0 rotate-45 border-4 border-primary" />
                  <div className="absolute inset-2 rotate-45 bg-primary" />
                </div>
              }
              subtitle={
                <>
                  <span className="text-gray-400 transition-colors dark:text-gray-800">
                    {"${"}
                  </span>
                  suaEquipe
                  <span className="text-gray-400 transition-colors dark:text-gray-800">
                    {"}"}
                  </span>
                </>
              }
              title={
                <>
                  <span className="text-gray-400 transition-colors dark:text-gray-800">
                    {"${"}
                  </span>
                  meuCargo
                  <span className="text-gray-400 transition-colors dark:text-gray-800">
                    {"}"}
                  </span>
                </>
              }
            ></Timeline.Entry>
            <Timeline.Entry
              auxiliaryText="Maio 2025"
              customDot={
                <div className="h-6 w-6 rotate-45 border-4 border-primary" />
              }
              subtitle="Zenvia"
              title="Desenvolvedor júnior"
            >
              <div className="text-primary">
                <PencilIcon
                  className="mr-2 inline h-4 w-4"
                  fill="currentColor"
                />{" "}
                <span className="font-bold">Escrevendo...</span>
              </div>
            </Timeline.Entry>
            <Timeline.Entry
              auxiliaryText="Maio 2024"
              customDot={
                <div className="h-6 w-6 rotate-45 rounded-md border-4 border-primary" />
              }
              subtitle="Zenvia"
              title="Assistente de desenvolvimento"
            >
              <p>
                Desenvolvi um pacote de componentes React ESM e CJS com Class
                Variance Authority, Jest e CSS Modules, seguindo um design
                system, com suporte a tree-shaking e declarações de tipos
              </p>
              <br />
              <p>
                Implementei internacionalização em uma aplicação de
                microfrontends
              </p>
              <br />
              <p>
                Realizei manutenção de aplicações web com ASP.NET, Next.js,
                single-spa e Vite
              </p>
            </Timeline.Entry>
            <Timeline.Entry
              auxiliaryText="2020"
              customDot={
                <div className="h-6 w-6 rotate-45 rounded-full border-4 border-primary" />
              }
              title="Meu primeiro Hello World"
            ></Timeline.Entry>
          </Timeline.Root>
        </div>
      </TitledSection>
    </ColorCycler>
  );
}
