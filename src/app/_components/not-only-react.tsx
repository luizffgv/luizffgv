import Button from "./button";
import { EyeIcon } from "lucide-react";
import GlowingText from "./glowing-text";
import ProjectPreview from "./project-preview";
import TitledSection from "./titled-section";
import Tools from "./tools";
import projects from "projects-list";
import { throwIfNull } from "@luizffgv/ekranoplan/conversions";

const PROJECTS_WITHOUT_REACT = [
  "Goo",
  "Globe",
  "Viewport-Based Scaling",
  "HTilesML",
  "Shader Site",
] satisfies (typeof projects)[number]["name"][];

export default function NotOnlyReact() {
  return (
    <>
      <TitledSection level={2} title="Mas eu não sei apenas React">
        <div className="flex flex-col items-center gap-32">
          <TitledSection
            level={3}
            title={
              <>
                Veja projetos meus <GlowingText>sem</GlowingText> React
              </>
            }
          >
            <ul className="flex flex-row flex-wrap items-stretch justify-center gap-16 px-8">
              {PROJECTS_WITHOUT_REACT.map((name) => (
                <li key={name}>
                  <ProjectPreview
                    project={throwIfNull(projects.find((p) => p.name === name))}
                  />
                </li>
              ))}
            </ul>
          </TitledSection>
          <div className="flex flex-col items-center gap-16">
            <TitledSection
              level={3}
              title={
                <span>
                  E tenho conhecimento nestes{" "}
                  <GlowingText>frameworks</GlowingText>,
                </span>
              }
            >
              <Tools kind="framework"></Tools>
            </TitledSection>
            <TitledSection
              level={3}
              title={
                <span>
                  nestas <GlowingText>linguagens</GlowingText>,
                </span>
              }
            >
              <Tools kind="language"></Tools>
            </TitledSection>
            <TitledSection
              level={3}
              title={
                <span>
                  e nestas <GlowingText>ferramentas</GlowingText>.
                </span>
              }
            >
              <Tools kind="tool"></Tools>
            </TitledSection>
            <Button href="/projetos">
              <EyeIcon />
              Veja meus outros projetos
            </Button>
          </div>
        </div>
      </TitledSection>
    </>
  );
}
