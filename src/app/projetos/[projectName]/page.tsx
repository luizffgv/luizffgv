import { Metadata } from "next";
import projects, { ProjectRaw } from "projects-list";
import styles from "./page.module.scss";
import "./page.global.scss";

export function generateStaticParams() {
  return projects.map((project) => ({
    projectName:
      process.env.NODE_ENV == "production"
        ? project.name
        : encodeURIComponent(project.name),
  }));
}

export function generateMetadata({
  params: { projectName },
}: {
  params: { projectName: string };
}): Metadata {
  projectName = decodeURIComponent(projectName);

  const project = projects.find(({ name }) => name == projectName);
  if (project == null)
    throw new TypeError("Couldn't find project with the given name.");

  return {
    title: project.name,
    description: project.description,
  };
}

export default function Page({
  params: { projectName },
}: {
  params: { projectName: string };
}) {
  projectName = decodeURIComponent(projectName);

  const project = projects.find(
    ({ name }) => name == projectName
  ) as ProjectRaw | null;
  if (project == null)
    throw new TypeError("Couldn't find project with the given name.");

  return (
    <main className="raiar flex-col align-items-center">
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
        <div className="content">
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
    </main>
  );
}
