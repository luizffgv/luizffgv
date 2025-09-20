import {
  BriefcaseBusinessIcon,
  CircleHelpIcon,
  HeartIcon,
  PencilIcon,
} from "lucide-react";

import LayeredText from "../layered-text";
import Sparkles from "../sparkles";
import Timeline from "../timeline";
import TitledSection from "../titled-section";

export default function Trajectory(): JSX.Element {
  return (
    <TitledSection
      level={2}
      title={
        <>
          Minha{" "}
          <LayeredText depth="32px" layers={8} perspective="800px">
            trajetória
          </LayeredText>
        </>
      }
    >
      <div className="max-w-[90vw]">
        <Timeline.Root>
          <Timeline.Entry
            auxiliaryText="Você decide"
            customDot={
              <CircleHelpIcon className="text-primary" strokeWidth={2.5} />
            }
            // eslint-disable-next-line no-template-curly-in-string
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
            // eslint-disable-next-line no-template-curly-in-string
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
              <BriefcaseBusinessIcon
                className="text-primary"
                fill="currentColor"
              />
            }
            subtitle="Zenvia"
            title="Desenvolvedor júnior"
          >
            <div className="text-primary">
              <PencilIcon className="mr-2 inline h-4 w-4" fill="currentColor" />{" "}
              <span className="font-bold">Escrevendo...</span>
            </div>
          </Timeline.Entry>
          <Timeline.Entry
            auxiliaryText="Maio 2024"
            customDot={
              <BriefcaseBusinessIcon
                className="text-primary"
                fill="currentColor"
              />
            }
            subtitle="Zenvia"
            title="Assistente de desenvolvimento"
          >
            <p>
              Desenvolvi um pacote de componentes React ESM e CJS com Class
              Variance Authority, Jest e CSS Modules, seguindo um design system,
              com suporte a tree-shaking e declarações de tipos
            </p>
            <br />
            <p>
              Implementei internacionalização em uma aplicação de microfrontends
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
              <HeartIcon className="text-primary" fill="currentColor" />
            }
            title={
              <Sparkles
                classForColor="text-primary dark:text-fg-on-primary"
                isInline
              >
                Meu primeiro Hello World
              </Sparkles>
            }
          ></Timeline.Entry>
        </Timeline.Root>
      </div>
    </TitledSection>
  );
}
