import { Task } from "../stores/projects/interfaces";

export const findTaskRecursively = (
  tasks: Task[],
  taskId: string
): Task | null => {
  for (const task of tasks) {
    if (task.taskNumber === taskId) {
      return task;
    }

    if (task.tasks && task.tasks.length) {
      const found = findTaskRecursively(task.tasks, taskId);
      if (found) {
        return found;
      }
    }
  }
  return null;
};
