import { Project } from "@stores/projects/interfaces";

export const doesColumnExist = (
  projectNumber: string,
  columnName: string,
  oldColumnName: string | null,
  projects: Project[]
): boolean => {
  const project = projects.find((p) => p.projectNumber === projectNumber);
  if (!project) return false;

  if (oldColumnName && oldColumnName === columnName) return false; // Исключение, когда старое имя совпадает с новым

  return !!project.columns[columnName];
};
