"use client";

import { ProjectRaw } from "projects-list";
import { motion } from "framer-motion";
import Button from "../button";
import { ExternalLinkIcon } from "lucide-react";

export interface Props {
  project: ProjectRaw;
}

export default function ProjectPreview({ project }: Props): JSX.Element {
  return (
    <motion.div
      aria-label={project.name}
      className="flex w-[400px] flex-col gap-4"
      role="group"
    >
      {project.image == null ? (
        <div className="aspect-[400/225] rounded-2xl"></div>
      ) : (
        <div className="relative aspect-[400/225]  rounded-2xl">
          <img
            className="absolute left-1/2 top-1/2 max-h-full max-w-full -translate-x-1/2 -translate-y-1/2 blur-2xl"
            src={`/project-images/${project.image}.webp`}
            alt={`Imagem do projeto ${project.name}`}
            aria-hidden
          />
          <img
            className="absolute left-1/2 top-1/2 max-h-full max-w-full -translate-x-1/2 -translate-y-1/2"
            src={`/project-images/${project.image}.webp`}
            alt={`Imagem do projeto ${project.name}`}
            aria-hidden
          />
        </div>
      )}
      <div className="flex justify-between">
        <div className="text-2xl font-bold">{project.name}</div>
        <div>
          {project.repository ? (
            <Button href={project.repository} isIcon>
              <ExternalLinkIcon />
            </Button>
          ) : null}
        </div>
      </div>
      <div>{project.description}</div>
    </motion.div>
  );
}
