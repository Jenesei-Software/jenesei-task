import { Project } from "../store/projects/interfaces";

export const findProjectIndexByNumber = (
    projects: Project[],
    projectNumber: string
  ): number => {
    return projects.findIndex(
      (project: Project) => project.projectNumber === projectNumber
    );
  }