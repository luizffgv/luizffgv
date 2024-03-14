import { ProjectRaw } from "projects-list";
import styles from "./project.module.scss";

interface Props {
  /** Project to show. */
  project: ProjectRaw;
}

export default function Project({ project }: Props) {
  return (
    <div className="raiar-card width-fit">
      {project.image == null ? (
        <></>
      ) : (
        <div className="raiar flex-row justify-content-center">
          <img
            className={styles.image}
            src={`/project-images/${project.image}.webp`}
            alt={project.name}
          ></img>
        </div>
      )}
      <div className={styles.content}>
        <h1>{project.name}</h1>
        <p>{project.description}</p>
        {project.details == null ? (
          <></>
        ) : (
          <>
            <h2>Detalhes</h2>
            <div dangerouslySetInnerHTML={{ __html: project.details }}></div>
          </>
        )}
      </div>
    </div>
  );
}
