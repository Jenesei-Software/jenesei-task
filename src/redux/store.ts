import { combineReducers, createStore } from "redux";
import { ProjectsState } from "./projects/interfaces";
import projectsReducer from "./projects/reducer";

export interface RootState {
  projectsState: ProjectsState;
}

const rootReducer = combineReducers({
  projectsState: projectsReducer,
});

const store = createStore(rootReducer);

export { store };
