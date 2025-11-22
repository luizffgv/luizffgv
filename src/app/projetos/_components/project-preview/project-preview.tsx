"use client";

import { motion } from "framer-motion";
import { CodeXmlIcon, EyeIcon } from "lucide-react";
import { JSX } from "react";

import { ProjectRaw } from "@projects/_projects";

import Button from "../../../_components/button";
import Card from "../../../_components/card";

export interface Props {
  project: ProjectRaw;
}

export default function ProjectPreview({ project }: Props): JSX.Element {
  return (
    <div className="group flex w-[400px] shrink items-stretch">
      <Card transition={{ duration: 0.1 }}>
        <div
          aria-label={project.name}
          className="flex flex-col gap-6"
          role="group"
        >
          {project.image == null ? (
            <motion.div className="aspect-[400/225] bg-primary/15" layout />
          ) : (
            <motion.div className="relative aspect-[400/225]" layout>
              <div className="absolute h-full w-full transition-transform group-hover:-translate-y-4">
                <img
                  className="absolute left-1/2 top-1/2 max-h-full max-w-full -translate-x-1/2 -translate-y-1/2 opacity-25 blur-xl transition-all group-hover:opacity-50 group-hover:blur-2xl"
                  src={`/project-images/${project.image}`}
                  alt={`Imagem do projeto ${project.name}`}
                  aria-hidden
                />
                <img
                  className="absolute left-1/2 top-1/2 max-h-full max-w-full -translate-x-1/2 -translate-y-1/2"
                  src={`/project-images/${project.image}`}
                  alt={`Imagem do projeto ${project.name}`}
                  aria-hidden
                />
              </div>
            </motion.div>
          )}
          <motion.div className="flex justify-between gap-4" layout>
            <div className="text-2xl font-bold">{project.name}</div>
            <div className="flex flex-row flex-wrap items-center justify-end gap-2">
              {project.url ? (
                <Button
                  aria-label="Visitar projeto"
                  href={project.url}
                  isIcon
                  target="_blank"
                >
                  {" "}
                  <EyeIcon />{" "}
                </Button>
              ) : null}
              {project.repository ? (
                <Button
                  aria-label="Visualizar código-fonte"
                  href={project.repository}
                  isIcon
                  target="_blank"
                >
                  <CodeXmlIcon />
                </Button>
              ) : null}
            </div>
          </motion.div>
          <motion.div layout>{project.description}</motion.div>
        </div>
      </Card>
    </div>
  );
}
