import { useContext, useMemo } from "react";
import { ProjectFilterContext } from "../_contexts/project-filters";
import projects from "projects-list";
import ProjectPreview from "./project-preview";
import styles from "./projects-list.module.scss";

export default function ProjectsList() {
  const { filter } = useContext(ProjectFilterContext);
  const filteredProjects = useMemo(() => filter(projects), [filter]);

  return (
    <ul
      className={`${styles.list} no-list-style raiar flex-row flex-wrap gap-2x justify-content-center`}
    >
      {filteredProjects.map((project) => (
        <li key={project.name} className="display-contents">
          <ProjectPreview project={project}></ProjectPreview>
        </li>
      ))}
    </ul>
  );
}
