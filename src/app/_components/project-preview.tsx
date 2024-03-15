import { ProjectRaw } from "projects-list";
import styles from "./project-preview.module.scss";
import Link from "next/link";
import Project from "./project";
import Button from "./button";
import ViewButton from "./buttons/view-button";

export default function ProjectPreview({ project }: { project: ProjectRaw }) {
  return (
    <div
      className={`${styles.project} raiar-card raiar align-items-center flex-col gap justify-content-between`}
      role="group"
      aria-label={project.name}
    >
      <div
        className={`${styles["title-container"]} raiar flex-row gap flex-wrap align-items-center justify-content-center`}
        style={{ minHeight: "48px" }}
      >
        {project.image == null ? (
          <></>
        ) : (
          <img
            className={styles.image}
            src={`/project-images/${project.image}.webp`}
            alt={project.name}
          ></img>
        )}
        <div className="raiar flex-row gap flex-wrap align-items-baseline">
          <h3>
            {project.name} {project.wip ? "(em progresso)" : ""}
          </h3>
          <small className={styles.license}>{project.license}</small>
        </div>
      </div>
      <p>{project.description}</p>
      <div className="raiar flex-row gap flex-wrap justify-content-center">
        {project.url == null ? (
          <></>
        ) : (
          <ViewButton href={project.url} target="_blank">
            Visualizar
          </ViewButton>
        )}
        {project.repository == null ? (
          <></>
        ) : (
          <Button
            href={project.repository}
            target="_blank"
            aria-label="Repositório"
          >
            <span className="material-symbols-outlined" aria-hidden="true">
              code
            </span>
            Repositório
          </Button>
        )}
        {project.details == null ? (
          <></>
        ) : (
          <Button
            className={styles["button-details"]}
            modalContent={<Project project={project}></Project>}
            noCard
          >
            <span className="material-symbols-outlined" aria-hidden="true">
              add
            </span>
            Detalhes
          </Button>
        )}
      </div>
    </div>
  );
}
