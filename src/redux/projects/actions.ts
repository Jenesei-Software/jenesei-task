import * as types from "./types";
import { Project, Task } from "./interfaces";

export const addProject = (project: Project) => ({
  type: types.ADD_PROJECT,
  payload: project,
});

export const addTask = (projectId: number, task: Task, parentTaskId?: number) => ({
  type: types.ADD_TASK,
  payload: { projectId, task, parentTaskId },
});

export const updateTask = (projectId: number, taskId: number, updatedFields: Partial<Task>) => ({
  type: types.UPDATE_TASK,
  payload: { projectId, taskId, updatedFields },
});