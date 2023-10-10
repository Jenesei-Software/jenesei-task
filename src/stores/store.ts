import {
  Middleware,
  applyMiddleware,
  combineReducers,
  createStore,
} from "redux";

import { Project, ProjectsState } from "./projects/interfaces";
import projectsReducer from "./projects/reducer";
import searchReducer from "./search-query/reducer";
import { SearchState } from "./search-query/interfaces";
import { deepSearchTasks } from "../functions/deep-search-tasks";

const localStorageName = "projects";

const searchFilterMiddleware: Middleware =
  ({ getState, dispatch }) =>
  (next) =>
  (action) => {
    const result = next(action);
    const state = getState() as RootState;

    if (action.type !== "UPDATE_SEARCH_PROJECTS") {
      const searchQuery = state.searchState.query.toLowerCase();
      const projectNumber = state.searchState.projectNumber;

      let updatedProjects: Project[] = [...state.projectsState.projects];

      if (searchQuery) {
        updatedProjects = updatedProjects.map((project) => {
          if (project.projectNumber !== projectNumber) {
            return project;
          }

          const filteredColumns = Object.entries(project.columns).reduce(
            (acc, [columnName, column]) => {
              const filteredTasks = deepSearchTasks(column.list, searchQuery);
              if (filteredTasks.length > 0) {
                acc[columnName] = { ...column, list: filteredTasks };
              }
              return acc;
            },
            {} as Project["columns"]
          );

          return { ...project, columns: filteredColumns };
        });
      }

      dispatch({
        type: "UPDATE_SEARCH_PROJECTS",
        payload: updatedProjects,
      });
    }

    return result;
  };

const localStorageMiddleware: Middleware =
  ({ getState }) =>
  (next) =>
  (action) => {
    const result = next(action);
    const state = getState() as RootState;
    localStorage.setItem(
      localStorageName,
      JSON.stringify(state.projectsState.projects)
    );

    return result;
  };

export interface RootState {
  projectsState: ProjectsState;
  searchState: SearchState;
}

const rootReducer = combineReducers({
  projectsState: projectsReducer,
  searchState: searchReducer,
});

const store = createStore(
  rootReducer,
  applyMiddleware(localStorageMiddleware, searchFilterMiddleware)
);

export { store, localStorageName };
