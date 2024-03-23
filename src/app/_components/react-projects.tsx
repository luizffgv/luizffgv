import projects from "projects-list";
import ProjectPreview from "./project-preview";
import TitledSection from "./titled-section";

const FEATURED_PROJECTS = [
  "Phasmoo",
  "Separador de sílabas",
  "codinStruct Next",
] satisfies (typeof projects)[number]["name"][];

export default function ReactProjects() {
  return (
    <TitledSection
      level={2}
      title={
        <>
          Veja alguns de meus projetos com{" "}
          <strong className="text-primary">React</strong>
        </>
      }
    >
      <div className="flex flex-col gap-8">
        <ul className="flex flex-row flex-wrap items-stretch justify-center gap-16 px-8">
          {FEATURED_PROJECTS.map((name) => (
            <li
              key={name}
              className="appear flex max-w-sm flex-row items-stretch"
            >
              <ProjectPreview
                project={projects.find((p) => p.name === name)!}
              />
            </li>
          ))}
        </ul>
      </div>
    </TitledSection>
  );
}
