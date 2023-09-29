import * as types from "./types";
import { Project, Task } from "./interfaces";

interface ProjectsState {
  projects: Project[];
}

const initialState: ProjectsState = {
  projects: [],
};

const addTaskToTaskList = (
  taskList: Task[] = [],
  newTask: Task,
  parentTaskId?: number
): Task[] => {
  if (!parentTaskId) return [...taskList, newTask];

  return taskList.map((task) => {
    if (task.taskNumber === parentTaskId) {
      return { ...task, task: [...(task.task || []), newTask] };
    }
    if (task.task && task.task.length > 0) {
      return {
        ...task,
        task: addTaskToTaskList(task.task, newTask, parentTaskId),
      };
    }
    return task;
  });
};

const updateTaskInList = (
  taskList: Task[],
  taskId: number,
  updatedFields: Partial<Task>
): Task[] => {
  return taskList.map((task) => {
    if (task.taskNumber === taskId) {
      return { ...task, ...updatedFields };
    }
    if (task.task && task.task.length > 0) {
      return {
        ...task,
        task: updateTaskInList(task.task, taskId, updatedFields),
      };
    }
    return task;
  });
};

const projectsReducer = (state = initialState, action: any): ProjectsState => {
  switch (action.type) {
    case types.ADD_PROJECT: {
      return { ...state, projects: [...state.projects, action.payload] };
    }
    case types.ADD_TASK: {
      const { projectId, task, parentTaskId } = action.payload;
      return {
        ...state,
        projects: state.projects.map((project) =>
          project.projectNumber === projectId
            ? {
                ...project,
                queue: addTaskToTaskList(project.queue, task, parentTaskId),
              }
            : project
        ),
      };
    }
    case types.UPDATE_TASK: {
      const { projectId, taskId, updatedFields } = action.payload;
      return {
        ...state,
        projects: state.projects.map((project) => {
          if (project.projectNumber === projectId) {
            return {
              ...project,
              queue: updateTaskInList(
                project.queue || [],
                taskId,
                updatedFields
              ),
            };
          }
          return project;
        }),
      };
    }
    default:
      return state;
  }
};

export default projectsReducer;
