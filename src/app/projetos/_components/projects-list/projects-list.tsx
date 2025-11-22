import { AnimatePresence, motion } from "framer-motion";
import { JSX, useContext, useMemo } from "react";

import ProjectPreview from "@/app/projetos/_components/project-preview";
import { ProjectFilterContext } from "@/app/projetos/_contexts/project-filters";

import projects from "@projects/_projects";

export default function ProjectsList(): JSX.Element {
  const { filter } = useContext(ProjectFilterContext);
  const filteredProjects = useMemo(() => filter(projects), [filter]);

  return (
    <ul className="flex flex-row flex-wrap justify-center gap-8">
      <AnimatePresence>
        {filteredProjects.map((project) => (
          <motion.li className="flex" key={project.name} layout>
            <ProjectPreview project={project}></ProjectPreview>
          </motion.li>
        ))}
      </AnimatePresence>
      {filteredProjects.length === 0 && (
        <li className="text-center text-xl">
          Nenhum projeto se encaixa nos filtros.
        </li>
      )}
    </ul>
  );
}
