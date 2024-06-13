import { useContext, useMemo } from "react";
import Card from "@components/card";
import { ProjectFilterContext } from "@/app/_contexts/project-filters";
import ProjectPreview from "@components/project-preview";
import projects from "projects-list";

export default function ProjectsList(): JSX.Element {
  const { filter } = useContext(ProjectFilterContext);
  const filteredProjects = useMemo(() => filter(projects), [filter]);

  return (
    <ul className="flex flex-row flex-wrap justify-center gap-8">
      {filteredProjects.map((project) => (
        <li
          key={project.name}
          className="appear min-w-fit grow basis-0 *:h-full"
        >
          <Card>
            <div className="flex h-full flex-row items-stretch justify-center">
              <ProjectPreview project={project}></ProjectPreview>
            </div>
          </Card>
        </li>
      ))}
      {filteredProjects.length === 0 && (
        <li className="text-center text-xl">
          Nenhum projeto se encaixa nos filtros.
        </li>
      )}
    </ul>
  );
}
