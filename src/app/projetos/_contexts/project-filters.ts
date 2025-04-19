import { createContext } from "react";

import { ProjectRaw } from "@projects/_projects";

export type ProjectFilterCallback = (projects: ProjectRaw[]) => ProjectRaw[];

export interface ProjectFilterContextType {
  /**
   * Function to filter projects, returns only the projects that should be
   * shown.
   */
  filter: ProjectFilterCallback;
  /** Sets {@link filter} at the provider. */
  setFilter(this: void, filter: ProjectFilterCallback): void;
}

export const ProjectFilterContext = createContext<ProjectFilterContextType>({
  filter: (projects) => projects,
  setFilter: () => {},
});
