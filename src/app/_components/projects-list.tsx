import { useContext, useMemo } from "react";
import { ProjectFilterContext } from "../_contexts/project-filters";
import projects from "projects-list";
import ProjectPreview from "./project-preview";
import Card from "./card";

export default function ProjectsList() {
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
