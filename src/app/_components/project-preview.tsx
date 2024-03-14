import { ProjectRaw } from "projects-list";
import styles from "./project-preview.module.scss";
import Link from "next/link";
import { useState } from "react";
import Modal from "./modal";
import Project from "./project";

export default function ProjectPreview({ project }: { project: ProjectRaw }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
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
            <a
              className={`${styles["button-view"]} button`}
              href={project.url}
              target="_blank"
            >
              <span className="material-symbols-outlined" aria-hidden="true">
                visibility
              </span>
              Visualizar
            </a>
          )}
          {project.repository == null ? (
            <></>
          ) : (
            <a
              className="button"
              href={project.repository}
              target="_blank"
              aria-label="Repositório"
            >
              <span className="material-symbols-outlined" aria-hidden="true">
                code
              </span>
              Repositório
            </a>
          )}
          {project.details == null ? (
            <></>
          ) : (
            <button
              type="button"
              className={styles["button-details"]}
              onClick={() => setExpanded(true)}
            >
              <span className="material-symbols-outlined" aria-hidden="true">
                add
              </span>
              Detalhes
            </button>
          )}
        </div>
      </div>
      {expanded ? (
        <Modal onDismiss={() => setExpanded(false)} noCard>
          <Project project={project}></Project>
        </Modal>
      ) : (
        <></>
      )}
    </>
  );
}
