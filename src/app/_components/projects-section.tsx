"use client";

import {
  Suspense,
  useCallback,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import ProjectFilterSelector from "./project-filter-selector";
import {
  ProjectFilterCallback,
  ProjectFilterContext,
} from "../_contexts/project-filters";
import ProjectsList from "./projects-list";
import { ProjectRaw } from "projects-list";

export default function ProjectsSection() {
  const [filter, setFilter] = useState(
    () => (projects: ProjectRaw[]) => projects,
  );

  const contextSetFilter = useCallback(
    (filter: ProjectFilterCallback) => setFilter(() => filter),
    [],
  );

  const projectsListRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (projectsListRef == null) {
      console.error("projectsListRef is null");
      return;
    }

    new Animation(
      new KeyframeEffect(projectsListRef.current, [{ opacity: 0 }, {}], {
        duration: 500,
        easing: "ease",
      }),
    ).play();
  }, [filter]);

  return (
    <section
      className="flex flex-col items-center gap-8"
      aria-label="Meus projetos"
    >
      <h1 className="text-center text-2xl">Meus projetos</h1>
      <ProjectFilterContext.Provider
        value={{
          filter,
          setFilter: contextSetFilter,
        }}
      >
        <Suspense>
          <ProjectFilterSelector></ProjectFilterSelector>
        </Suspense>
        <div ref={projectsListRef} className="max-w-screen-2xl pb-[100vh]">
          <ProjectsList></ProjectsList>
        </div>
      </ProjectFilterContext.Provider>
    </section>
  );
}
