import { useContext, useMemo } from "react";
import { ProjectFilterContext } from "../_contexts/project-filters";
import projects from "projects-list";
import ProjectPreview from "./project-preview";

export default function ProjectsList() {
  const { filter } = useContext(ProjectFilterContext);
  const filteredProjects = useMemo(() => filter(projects), [filter]);

  return (
    <ul className="flex flex-row flex-wrap justify-center gap-8">
      {filteredProjects.map((project) => (
        <li
          key={project.name}
          className="appear flex min-w-fit grow basis-0 flex-row items-stretch justify-center rounded-3xl bg-bg-close p-4 shadow-sm dark:bg-bg-close-dark"
        >
          <ProjectPreview project={project}></ProjectPreview>
        </li>
      ))}
      {filteredProjects.length == 0 && (
        <li className="text-center text-xl">
          Nenhum projeto se encaixa nos filtros.
        </li>
      )}
    </ul>
  );
}
