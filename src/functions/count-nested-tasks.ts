import { Task } from "../store/projects/interfaces";

export const countNestedTasks = (tasks: Task[]): number => {
  let count = tasks.length;

  for (let task of tasks) {
    if (task.task) {
      count += countNestedTasks(task.task);
    }
  }

  return count;
};
