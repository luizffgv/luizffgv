"use client";

import { EyeIcon, FolderGit2Icon } from "lucide-react";
import Button from "@components/button";
import Card from "../card";
import LazyImage from "@components/lazy-image";
import { ProjectRaw } from "projects-list";
import { motion } from "framer-motion";
import stringHash from "string-hash";
import { useMemo } from "react";
import { useResizeObserver } from "@mantine/hooks";

export interface Props {
  project: ProjectRaw;
}

export default function ProjectPreview({ project }: Props): JSX.Element {
  const [container, { width }] = useResizeObserver<HTMLDivElement>();

  const rotation = useMemo(
    () =>
      ((stringHash(project.name) % 5) - 2.5) /
      ((width > 0 ? width : 400) / 400),
    [project.name, width],
  );

  return (
    <motion.div
      className="*:h-full"
      ref={container}
      initial={{
        rotate: -rotation,
      }}
      whileInView={{
        rotate: rotation,
      }}
    >
      <Card
        footer={
          <div className="flex w-full flex-row flex-wrap gap-4 *:grow">
            {project.url ? (
              <Button href={project.url} target="_blank">
                <EyeIcon />
                Visitar
              </Button>
            ) : (
              <></>
            )}
            {project.repository ? (
              <Button href={project.repository} target="_blank">
                <FolderGit2Icon />
                Repositório
              </Button>
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
            <div className="h-16 w-16 rounded-md bg-primary/15"></div>
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
              <div className="text-center text-lg font-bold">
                {project.name}
              </div>
              <div>{project.description}</div>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
