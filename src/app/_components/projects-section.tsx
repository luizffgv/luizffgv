"use client";

import {
  ProjectFilterCallback,
  ProjectFilterContext,
} from "../_contexts/project-filters";
import {
  Suspense,
  useCallback,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import ProjectFilterSelector from "./project-filter-selector";
import { ProjectRaw } from "projects-list";
import ProjectsList from "./projects-list";
import TitledSection from "./titled-section";

export default function ProjectsSection(): JSX.Element {
  const [filter, setFilter] = useState(
    () => (projects: ProjectRaw[]) => projects,
  );

  const contextSetFilter = useCallback((filter: ProjectFilterCallback) => {
    setFilter(() => filter);
  }, []);

  const projectsListRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (projectsListRef.current == null) {
      console.error("projectsListRef.current is null");
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
    <TitledSection level={1} title={<>Meus projetos</>}>
      <ProjectFilterContext.Provider
        value={{
          filter,
          setFilter: contextSetFilter,
        }}
      >
        <div className="flex flex-col items-center gap-8">
          <Suspense>
            <ProjectFilterSelector></ProjectFilterSelector>
          </Suspense>
          <div ref={projectsListRef} className="max-w-screen-2xl pb-[100vh]">
            <ProjectsList></ProjectsList>
          </div>
        </div>
      </ProjectFilterContext.Provider>
    </TitledSection>
  );
}
