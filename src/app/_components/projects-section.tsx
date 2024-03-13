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
    () => (projects: ProjectRaw[]) => projects
  );

  const contextSetFilter = useCallback(
    (filter: ProjectFilterCallback) => setFilter(() => filter),
    []
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
      })
    ).play();
  }, [filter]);

  return (
    <section
      className="raiar flex-col gap-2x align-center"
      aria-labelledby="heading-projects"
    >
      <ProjectFilterContext.Provider
        value={{
          filter,
          setFilter: contextSetFilter,
        }}
      >
        <div
          id="projects-title-bar"
          className="raiar flex-row gap flex-wrap justify-content-center"
        >
          <h2 id="heading-projects">Meus projetos</h2>
          <Suspense>
            <ProjectFilterSelector></ProjectFilterSelector>
          </Suspense>
        </div>
        <div ref={projectsListRef}>
          <ProjectsList></ProjectsList>
        </div>
      </ProjectFilterContext.Provider>
    </section>
  );
}
