import { Task } from "../stores/projects/interfaces";

export const deepSearchTasks = (tasks: Task[], query: string): Task[] => {
  return tasks.reduce((acc, task) => {
    let matchedChildTasks: Task[] = [];

    if (task.tasks && task.tasks.length > 0) {
      matchedChildTasks = deepSearchTasks(task.tasks, query);
    }

    if (
      task.taskNumber.toLowerCase().includes(query) ||
      task.heading.toLowerCase().includes(query) ||
      matchedChildTasks.length > 0
    ) {
      acc.push({
        ...task,
        tasks: matchedChildTasks.length > 0 ? matchedChildTasks : undefined,
      });
    }

    return acc;
  }, [] as Task[]);
};
