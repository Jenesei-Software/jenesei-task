import * as types from "./types";
import { Project, Task } from "./interfaces";
import moment from "moment";

interface ProjectsState {
  projects: Project[];
}

const initialState: ProjectsState = {
  projects: [],
};

const addTaskToTaskList = (
  taskList: Task[] = [],
  ModalNewTask: Task,
  parentTaskId?: string
): Task[] => {
  if (!parentTaskId) return [...taskList, ModalNewTask];

  return taskList.map((task) => {
    if (task.taskNumber === parentTaskId) {
      return {
        ...task,
        task: [...(task.task || []), ModalNewTask],
      };
    }
    if (task.task && task.task.length > 0) {
      return {
        ...task,
        task: addTaskToTaskList(task.task, ModalNewTask, parentTaskId),
      };
    }
    return task;
  });
};

const updateTaskInList = (
  taskList: Task[],
  taskNumber: string,
  updatedFields: Partial<Task>
): Task[] => {
  return taskList.map((task) => {
    if (task.taskNumber === taskNumber) {
      return {
        ...task,
        ...updatedFields
      };
    }
    if (task.task && task.task.length > 0) {
      return {
        ...task,
        task: updateTaskInList(task.task, taskNumber, updatedFields),
      };
    }
    return task;
  });
};

const getTaskList = (
  project: Project,
  listName: string
): Task[] | undefined => {
  if (
    listName === "queue" ||
    listName === "development" ||
    listName === "done"
  ) {
    return project[listName];
  }
  return undefined;
};

const deleteTaskInList = (taskList: Task[], taskNumber: string): Task[] => {
  return taskList.reduce((acc: Task[], task: Task) => {
    if (task.taskNumber === taskNumber) return acc;

    if (task.task && task.task.length > 0) {
      return [
        ...acc,
        { ...task, task: deleteTaskInList(task.task, taskNumber) },
      ];
    }

    return [...acc, task];
  }, []);
};
const projectsReducer = (state = initialState, action: any): ProjectsState => {
  switch (action.type) {
    case types.ADD_PROJECT: {
      return { ...state, projects: [...state.projects, action.payload] };
    }
    case types.SET_PROJECTS: {
      return { ...state, projects: action.payload };
    }
    case types.ADD_TASK: {
      const { projectNumber, task, listName, parentTaskId } = action.payload;
      return {
        ...state,
        projects: state.projects.map((project) =>
          project.projectNumber === projectNumber
            ? {
                ...project,
                [listName]: addTaskToTaskList(
                  getTaskList(project, listName) || [],
                  task,
                  parentTaskId
                ),
              }
            : project
        ),
      };
    }
    case types.UPDATE_TASK: {
      const { projectNumber, taskNumber, updatedFields, listName } =
        action.payload;
      return {
        ...state,
        projects: state.projects.map((project) => {
          if (project.projectNumber === projectNumber) {
            return {
              ...project,
              [listName]: updateTaskInList(
                getTaskList(project, listName) || [],
                taskNumber,
                updatedFields
              ),
            };
          }
          return project;
        }),
      };
    }
    case types.DELETE_TASK: {
      const { projectNumber, taskNumber, listName } = action.payload;
      return {
        ...state,
        projects: state.projects.map((project) =>
          project.projectNumber === projectNumber
            ? {
                ...project,
                [listName]: deleteTaskInList(
                  getTaskList(project, listName) || [],
                  taskNumber
                ),
              }
            : project
        ),
      };
    }
    default:
      return state;
  }
};

export default projectsReducer;
