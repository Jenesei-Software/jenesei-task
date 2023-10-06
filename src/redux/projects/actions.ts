import * as types from "./types";
import { Project, Task, Comment } from "./interfaces";

export const addProject = (project: Project) => ({
  type: types.ADD_PROJECT,
  payload: project,
});

export const updateProjects = (projects: Project[]) => ({
  type: types.UPDATE_PROJECTS,
  payload: projects,
});

export const addTask = (
  projectNumber: string,
  task: Task,
  listName: keyof Project,
  parentTaskId?: string,
  index?: number
) => ({
  type: types.ADD_TASK,
  payload: { projectNumber, task, listName, parentTaskId, index },
});

export const updateTask = (
  projectNumber: string,
  taskNumber: string,
  listName: keyof Project,
  updatedFields: Partial<Task>
) => ({
  type: types.UPDATE_TASK,
  payload: { projectNumber, taskNumber, listName, updatedFields },
});

export const deleteTask = (
  projectNumber: string,
  taskNumber: string,
  listName: keyof Project
) => ({
  type: types.DELETE_TASK,
  payload: { projectNumber, taskNumber, listName },
});

export const moveTask = (
  projectNumber: string,
  task: Task,
  sourceList: keyof Project,
  destinationList: keyof Project,
  parentTaskId?: string,
  index?: number
) => ({
  type: types.MOVE_TASK,
  payload: { projectNumber, task, sourceList, destinationList, parentTaskId, index },
});

interface AddCommentAction {
  type: typeof types.ADD_COMMENT;
  payload: {
    projectNumber: string;
    taskNumber: string;
    listName: string;
    comment: Comment;
    parentCommentId?: string;
  };
}

export const addComment = (
  projectNumber: string,
  taskNumber: string,
  listName:  keyof Project,
  comment: Comment,
  parentCommentId?: string
): AddCommentAction => ({
  type: types.ADD_COMMENT,
  payload: { projectNumber, taskNumber, listName, comment, parentCommentId },
});