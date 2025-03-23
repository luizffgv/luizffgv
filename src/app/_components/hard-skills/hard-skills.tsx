import { LayoutIcon } from "lucide-react";
import TitledSection from "../titled-section";
import Skill from "./components/skill/skill";
import GlowingText from "../glowing-text";

export default function HardSkills(): JSX.Element {
  return (
    <TitledSection
      level={2}
      title={
        <>
          Minhas <GlowingText>hard skills</GlowingText>
        </>
      }
    >
      <div className="flex flex-col gap-16">
        <Skill icon={<LayoutIcon />} title="TypeScript">
          <p>
            Tenho experiência com TypeScript nos âmbitos de{" "}
            <strong>segurança</strong> e <strong>ergonomia</strong>,
            implementando soluções que equilibram esses fatores para aumentar a
            agilidade e reduzir a incidência de bugs.
          </p>
          <p>
            Sou confortável com os conceitos de{" "}
            <strong>tipagem estrutural</strong>,{" "}
            <strong>teoria dos conjuntos</strong> em relação a tipos,{" "}
            <strong>covariância</strong> e <strong>contravariância</strong>,{" "}
            <strong>tipos genéricos</strong> e{" "}
            <strong>inferência de tipos</strong>.
          </p>
        </Skill>
        <Skill icon={<LayoutIcon />} title="React">
          <p>
            Eu sei como funciona a <strong>renderização</strong> e
            <strong>reconciliação</strong>, crio componentes reutilizáveis e
            eficientes, reduzindo a quantidade de renderizações necessárias.
          </p>
          <p>
            Tenho experiênca com várias bibliotecas React, como{" "}
            <strong>React Redux</strong>, <strong>Redux-Saga</strong>,{" "}
            <strong>TanStack Query</strong> e <strong>React Hook Form</strong>.
          </p>
        </Skill>
        <Skill icon={<LayoutIcon />} title="single-spa">
          <p>
            Tenho experiência com <strong>single-spa</strong> e criação de{" "}
            <strong>applications</strong> e <strong>parcels</strong>.
          </p>
        </Skill>
        <Skill icon={<LayoutIcon />} title="Publicação NPM">
          <p>
            Tenho experiência profissional com <strong>criação</strong>,
            <strong>publicação</strong> e <strong>manutenção</strong> de pacotes
            NPM, incluindo <strong>declarações de tipos</strong>,{" "}
            <strong>documentação JSDoc</strong>,{" "}
            <strong>automação de releases</strong> e suporte a{" "}
            <strong>tree-shaking</strong>.
          </p>
        </Skill>
        <Skill icon={<LayoutIcon />} title="Git">
          <p>
            Tenho experiência com Git, em <strong>minimizar diffs</strong> e
            <strong>reescrever histórico</strong>, trabalhando confortavelmente
            tanto em fluxos que priorizam <strong>rebases</strong>,{" "}
            <strong>merge commits</strong>, e/ou <strong>squashes</strong>.
          </p>
        </Skill>
      </div>
    </TitledSection>
  );
}
