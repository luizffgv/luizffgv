"use client";

import {
  JSX,
  Suspense,
  useCallback,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

import ProjectsList from "@/app/projetos/_components/projects-list";
import {
  ProjectFilterCallback,
  ProjectFilterContext,
} from "@/app/projetos/_contexts/project-filters";

import { ProjectRaw } from "@projects/_projects";

import ProjectFilterSelector from "./components/project-filter-selector";

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
    <div className="pt-[10vh]">
      <ProjectFilterContext.Provider
        value={{
          filter,
          setFilter: contextSetFilter,
        }}
      >
        <div className="flex flex-col items-center gap-32">
          <div
            ref={projectsListRef}
            className="w-full max-w-screen-2xl px-4 pb-[100vh]"
          >
            <ProjectsList />
          </div>
        </div>
        <Suspense>
          <ProjectFilterSelector />
        </Suspense>
      </ProjectFilterContext.Provider>
    </div>
  );
}
