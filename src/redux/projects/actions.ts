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
  listName: string,
  parentTaskId?: string,
  index?: number
) => ({
  type: types.ADD_TASK,
  payload: { projectNumber, task, listName, parentTaskId, index },
});

export const updateTask = (
  projectNumber: string,
  taskNumber: string,
  listName: string,
  updatedFields: Partial<Task>
) => ({
  type: types.UPDATE_TASK,
  payload: { projectNumber, taskNumber, listName, updatedFields },
});

export const deleteTask = (
  projectNumber: string,
  taskNumber: string,
  listName: string
) => ({
  type: types.DELETE_TASK,
  payload: { projectNumber, taskNumber, listName },
});

export const moveTask = (
  projectNumber: string,
  task: Task,
  sourceList: string,
  destinationList: string,
  parentTaskId?: string,
  index?: number
) => ({
  type: types.MOVE_TASK,
  payload: {
    projectNumber,
    task,
    sourceList,
    destinationList,
    parentTaskId,
    index,
  },
});

export const moveColumns = (
  projectNumber: string,
  indexStart: number,
  indexEnd: number
) => ({
  type: types.MOVE_COLUMNS,
  payload: {
    projectNumber,
    indexStart,
    indexEnd,
  },
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
  listName: string,
  comment: Comment,
  parentCommentId?: string
): AddCommentAction => ({
  type: types.ADD_COMMENT,
  payload: { projectNumber, taskNumber, listName, comment, parentCommentId },
});

export const addColumn = (projectNumber: string, columnName: string) => ({
  type: types.ADD_COLUMNS,
  payload: { projectNumber, columnName },
});

export const deleteColumn = (projectNumber: string, columnName: string) => ({
  type: types.DELETE_COLUMNS,
  payload: { projectNumber, columnName },
});
