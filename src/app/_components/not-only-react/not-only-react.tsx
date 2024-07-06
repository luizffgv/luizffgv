import GlowingText from "@components/glowing-text";
import ProjectPreview from "@components/project-preview";
import TitledSection from "@components/titled-section";
import projects from "projects-list";
import { throwIfNull } from "@luizffgv/ekranoplan/conversions";

const PROJECTS_WITHOUT_REACT = [
  "Goo",
  "Globe",
  "Viewport-Based Scaling",
  "HTilesML",
  "Shader Site",
] satisfies (typeof projects)[number]["name"][];

export default function NotOnlyReact(): JSX.Element {
  return (
    <>
      <TitledSection
        level={2}
        title="E o que eu faço sem React? As mesmas coisas."
      >
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
                <li key={name} className="flex max-w-sm flex-row items-stretch">
                  <ProjectPreview
                    project={throwIfNull(projects.find((p) => p.name === name))}
                  />
                </li>
              ))}
            </ul>
          </TitledSection>
        </div>
      </TitledSection>
    </>
  );
}
