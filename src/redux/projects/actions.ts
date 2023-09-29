import * as types from "./types";
import { Project, Task } from "./interfaces";

export const addProject = (project: Project) => ({
  type: types.ADD_PROJECT,
  payload: project,
});

export const setProjects = (projects: Project[]) => ({
  type: types.SET_PROJECTS,
  payload: projects,
});

export const addTask = (
  projectNumber: string,
  task: Task,
  listName: keyof Project,
  parentTaskId?: string
) => ({
  type: types.ADD_TASK,
  payload: { projectNumber, task, listName, parentTaskId },
});

export const updateTask = (
  projectNumber: string,
  taskNumber: string,
  updatedFields: Partial<Task>,
  listName: keyof Project
) => ({
  type: types.UPDATE_TASK,
  payload: { projectNumber, taskNumber, updatedFields, listName },
});

export const deleteTask = (
  projectNumber: string,
  taskNumber: string,
  listName: keyof Project
) => ({
  type: types.DELETE_TASK,
  payload: { projectNumber, taskNumber, listName },
});
