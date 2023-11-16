import { Project } from "@stores/projects/interfaces";

export const getTotalTasks = (project: Project): number => {
  return Object.values(project.columns || {}).reduce(
    (acc, tasks) => acc + (tasks.list && tasks.list.length),
    0
  );
};
