import { Task } from "../store/projects/interfaces";

export const findTaskRecursively = (
  tasks: Task[],
  taskId: string
): Task | null => {
  for (const task of tasks) {
    if (task.taskNumber === taskId) {
      return task;
    }

    if (task.task && task.task.length) {
      const found = findTaskRecursively(task.task, taskId);
      if (found) {
        return found;
      }
    }
  }
  return null;
};
