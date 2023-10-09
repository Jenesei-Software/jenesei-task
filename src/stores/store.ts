import { Middleware, applyMiddleware, combineReducers, createStore } from "redux";

import { ProjectsState } from "./projects/interfaces";
import projectsReducer from "./projects/reducer";

const localStorageName = "projects"

const localStorageMiddleware: Middleware = ({ getState }) => next => action => {
  const result = next(action);
  const state = getState() as RootState;
  localStorage.setItem(localStorageName, JSON.stringify(state.projectsState.projects));

  return result;
};

export interface RootState {
  projectsState: ProjectsState;
}

const rootReducer = combineReducers({
  projectsState: projectsReducer,
});

const store = createStore(
  rootReducer,
  applyMiddleware(localStorageMiddleware) // Подключение middleware
);

export { store, localStorageName };
