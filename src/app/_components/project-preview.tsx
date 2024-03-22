import { ProjectRaw } from "projects-list";
import Button from "./button";

export default function ProjectPreview({ project }: { project: ProjectRaw }) {
  return (
    <div
      className="flex max-w-prose flex-col items-center"
      role="group"
      aria-label={project.name}
    >
      {project.image != null ? (
        <div className="relative">
          <img
            src={`/project-images/${project.image}.webp`}
            className="h-16 rounded-lg blur-2xl"
            alt={`Imagem do projeto ${project.name}`}
          />
          <img
            src={`/project-images/${project.image}.webp`}
            className="absolute left-0 top-0 h-16 rounded-lg"
            alt={`Imagem do projeto ${project.name}`}
          />
        </div>
      ) : (
        <div className="h-16"></div>
      )}
      <div className="flex grow flex-col items-center justify-between gap-4 p-4">
        <div className="flex flex-col gap-2">
          <div className="text-center text-lg font-bold">{project.name}</div>
          <div>{project.description}</div>
        </div>
        <div className="flex flex-row flex-wrap items-stretch justify-center gap-4 *:grow">
          {project.url ? (
            <div>
              <Button href={project.url} target="_blank">
                <span
                  className="material-symbols-outlined"
                  aria-hidden
                  translate="no"
                >
                  visibility
                </span>
                Visitar
              </Button>
            </div>
          ) : (
            <></>
          )}
          {project.repository ? (
            <div>
              <Button href={project.repository} target="_blank">
                <span
                  className="material-symbols-outlined"
                  aria-hidden
                  translate="no"
                >
                  folder_data
                </span>
                Repositório
              </Button>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}
