import { Task } from "../store/projects/interfaces";

export const countNestedTasks = (tasks: Task[]): number => {
  let count = tasks.length;

  for (let task of tasks) {
    if (task.tasks) {
      count += countNestedTasks(task.tasks);
    }
  }

  return count;
};
