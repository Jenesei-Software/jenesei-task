import * as types from "./types";
import { Project, Task, Comment } from "./interfaces";

interface ProjectsState {
  projects: Project[];
}

const initialState: ProjectsState = {
  projects: [],
};

function reorder<T>(list: T[], startIndex: number, endIndex: number): T[] {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
}

const addTaskToTaskList = (
  taskList: Task[] = [],
  ModalNewTask: Task,
  parentTaskId?: string,
  index?: number
): Task[] => {
  // If there is no parentTaskId and an index is specified, you can enable the feature for that position.
  if (!parentTaskId && index !== undefined) {
    return [
      ...taskList.slice(0, index),
      ModalNewTask,
      ...taskList.slice(index),
    ];
  }
  // If parentTaskId is missing and the index is not specified, then we add the task to the end of the list.
  if (!parentTaskId) {
    return [...taskList, ModalNewTask];
  }

  // If parentTaskId is given, then we look for a task with this identifier and add ModalNewTask as a subtask.
  return taskList.map((task) => {
    if (task.taskNumber === parentTaskId) {
      if (index !== undefined) {
        // If the index is given, insert the subtask at this position.
        return {
          ...task,
          task: [
            ...(task.task || []).slice(0, index),
            ModalNewTask,
            ...(task.task || []).slice(index),
          ],
        };
      } else {
        // If the index is not specified, add the subtask to the end of the list.
        return {
          ...task,
          task: [...(task.task || []), ModalNewTask],
        };
      }
    }
    if (task.task && task.task.length > 0) {
      return {
        ...task,
        task: addTaskToTaskList(task.task, ModalNewTask, parentTaskId, index),
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
        ...updatedFields,
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
  return project.columns[listName]?.list;
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

const addCommentToTask = (
  taskList: Task[],
  taskNumber: string,
  comment: Comment,
  parentCommentId?: string
): Task[] => {
  return taskList.map((task) => {
    if (task.taskNumber === taskNumber) {
      const addNestedComment = (
        comments: Comment[],
        comment: Comment,
        parentCommentId?: string
      ): Comment[] => {
        return comments.map((com) => {
          if (com.commentId === parentCommentId) {
            return {
              ...com,
              comments: [...(com.comments || []), comment],
            };
          }
          if (com.comments && com.comments.length > 0) {
            return {
              ...com,
              comments: addNestedComment(
                com.comments,
                comment,
                parentCommentId
              ),
            };
          }
          return com;
        });
      };

      return {
        ...task,
        comments: parentCommentId
          ? addNestedComment(task.comments || [], comment, parentCommentId)
          : [...(task.comments || []), comment],
      };
    }

    if (task.task && task.task.length > 0) {
      return {
        ...task,
        task: addCommentToTask(task.task, taskNumber, comment, parentCommentId),
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
    case types.UPDATE_PROJECTS: {
      return { ...state, projects: action.payload };
    }
    case types.UPDATE_PROJECT: {
      const updatedProject = action.payload;
      return {
        ...state,
        projects: state.projects.map((project) =>
          project.projectNumber === updatedProject.projectNumber
            ? updatedProject
            : project
        ),
      };
    }
    
    case types.ADD_TASK: {
      const { projectNumber, task, listName, parentTaskId, index } =
        action.payload;
      return {
        ...state,
        projects: state.projects.map((project) =>
          project.projectNumber === projectNumber
            ? {
                ...project,
                columns: {
                  ...project.columns,
                  [listName]: {
                    ...project.columns[listName],
                    list: addTaskToTaskList(
                      getTaskList(project, listName) || [],
                      task,
                      parentTaskId,
                      index
                    ),
                  },
                },
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
        projects: state.projects.map((project: Project) => {
          if (project.projectNumber !== projectNumber) return project;
          if (!project.columns[listName]) return project;
          const updatedTasks = updateTaskInList(
            project.columns[listName]?.list || [],
            taskNumber,
            updatedFields
          );

          return {
            ...project,
            columns: {
              ...project.columns,
              [listName]: {
                ...project.columns[listName],
                list: updatedTasks,
              },
            },
          };
        }),
      };
    }
    case types.DELETE_TASK: {
      const { projectNumber, taskNumber, listName } = action.payload;

      return {
        ...state,
        projects: state.projects.map((project: Project) => {
          if (project.projectNumber !== projectNumber) return project;

          const updatedTasks = deleteTaskInList(
            project.columns[listName]?.list || [],
            taskNumber
          );

          return {
            ...project,
            columns: {
              ...project.columns,
              [listName]: {
                ...project.columns[listName],
                list: updatedTasks,
              },
            },
          };
        }),
      };
    }
    case types.MOVE_TASK: {
      const {
        projectNumber,
        task,
        sourceList,
        destinationList,
        parentTaskId,
        index,
      } = action.payload;

      return {
        ...state,
        projects: state.projects.map((project: Project) => {
          if (project.projectNumber !== projectNumber) return project;

          const sourceTaskList = project.columns[sourceList]?.list || [];
          if (!task) return project;

          const updatedProject: Project = {
            ...project,
            columns: { ...project.columns },
          };

          if (sourceList === destinationList) {
            const withoutMovedTask = deleteTaskInList(
              sourceTaskList,
              task.taskNumber
            );
            const withMovedTask = addTaskToTaskList(
              withoutMovedTask,
              task,
              parentTaskId,
              index
            );
            updatedProject.columns[sourceList].list = withMovedTask;
          } else {
            const updatedSourceList = deleteTaskInList(
              sourceTaskList,
              task.taskNumber
            );
            const updatedDestinationList = addTaskToTaskList(
              project.columns[destinationList]?.list || [],
              task,
              parentTaskId,
              index
            );

            updatedProject.columns[sourceList].list = updatedSourceList;
            if (updatedProject.columns[destinationList]) {
              updatedProject.columns[destinationList].list =
                updatedDestinationList;
            } else {
              updatedProject.columns[destinationList] = {
                list: updatedDestinationList,
              };
            }
          }

          return updatedProject;
        }),
      };
    }

    case types.ADD_COMMENT: {
      const { projectNumber, taskNumber, listName, comment, parentCommentId } =
        action.payload;

      return {
        ...state,
        projects: state.projects.map((project: Project) => {
          if (project.projectNumber !== projectNumber) return project;

          const updatedTasks = addCommentToTask(
            project.columns[listName]?.list || [],
            taskNumber,
            comment,
            parentCommentId
          );

          return {
            ...project,
            columns: {
              ...project.columns,
              [listName]: {
                ...project.columns[listName],
                list: updatedTasks,
              },
            },
          };
        }),
      };
    }

    case types.ADD_COLUMNS: {
      const { projectNumber, columnName } = action.payload;

      return {
        ...state,
        projects: state.projects.map((project) =>
          project.projectNumber === projectNumber
            ? {
                ...project,
                columns: {
                  ...project.columns,
                  [columnName]: {
                    list: [],
                  },
                },
              }
            : project
        ),
      };
    }
    case types.DELETE_COLUMNS: {
      const { projectNumber, columnName } = action.payload;

      return {
        ...state,
        projects: state.projects.map((project) =>
          project.projectNumber === projectNumber
            ? {
                ...project,
                columns: Object.fromEntries(
                  Object.entries(project.columns).filter(
                    ([key]) => key !== columnName
                  )
                ),
              }
            : project
        ),
      };
    }
    case types.MOVE_COLUMNS: {
      const { projectNumber, indexStart, indexEnd } = action.payload;

      const projectIndex = state.projects.findIndex(
        (p) => p.projectNumber === projectNumber
      );

      if (projectIndex === -1) return state;

      const currentProject = state.projects[projectIndex];

      const reorderedColumnsEntries = reorder(
        Object.entries(currentProject.columns),
        indexStart,
        indexEnd
      );
      const reorderedColumns = Object.fromEntries(reorderedColumnsEntries);

      const updatedProject = {
        ...currentProject,
        columns: reorderedColumns,
      };

      const updatedProjects = [
        ...state.projects.slice(0, projectIndex),
        updatedProject,
        ...state.projects.slice(projectIndex + 1),
      ];

      return { ...state, projects: updatedProjects };
    }
    default:
      return state;
  }
};

export default projectsReducer;
