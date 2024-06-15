import { EyeIcon, FolderGit2Icon } from "lucide-react";
import Button from "@components/button";
import Card from "../card";
import { Props as CardProps } from "../card/card";
import LazyImage from "@components/lazy-image";
import { ProjectRaw } from "projects-list";

export interface Props {
  project: ProjectRaw;
  level?: CardProps["level"];
}

export default function ProjectPreview({ project, level }: Props): JSX.Element {
  return (
    <Card
      level={level}
      footer={
        <div className="flex flex-row flex-wrap items-stretch justify-center gap-4">
          {project.url ? (
            <div>
              <Button href={project.url} target="_blank">
                <EyeIcon />
                Visitar
              </Button>
            </div>
          ) : (
            <></>
          )}
          {project.repository ? (
            <div>
              <Button href={project.repository} target="_blank">
                <FolderGit2Icon />
                Repositório
              </Button>
            </div>
          ) : (
            <></>
          )}
        </div>
      }
    >
      <div
        className="flex max-w-prose flex-col items-center gap-4"
        role="group"
        aria-label={project.name}
      >
        {project.image == null ? (
          <div className="h-16"></div>
        ) : (
          <div className="relative">
            <div className="h-16 w-16 overflow-hidden rounded-lg blur-2xl">
              <LazyImage
                src={`/project-images/${project.image}.webp`}
                alt={`Imagem do projeto ${project.name}`}
                aria-hidden
              />
            </div>
            <div className="absolute left-0 top-0 h-16 w-16 overflow-hidden rounded-lg">
              <LazyImage
                src={`/project-images/${project.image}.webp`}
                alt={`Imagem do projeto ${project.name}`}
              />
            </div>
          </div>
        )}
        <div className="flex grow flex-col items-center">
          <div className="flex flex-col gap-2">
            <div className="text-center text-lg font-bold">{project.name}</div>
            <div>{project.description}</div>
          </div>
        </div>
      </div>
    </Card>
  );
}
