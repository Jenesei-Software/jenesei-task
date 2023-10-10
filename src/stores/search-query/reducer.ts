import { SearchActionTypes, UPDATE_SEARCH_QUERY } from "./types";
import { SearchState } from "./interfaces";

const initialState: SearchState = {
  query: "",
  projectNumber: "",
};

const searchReducer = (
  state = initialState,
  action: SearchActionTypes
): SearchState => {
  switch (action.type) {
    case UPDATE_SEARCH_QUERY:
      return {
        ...state,
        query: action.payload.query,
        projectNumber: action.payload.projectNumber,
      };
    default:
      return state;
  }
};

export default searchReducer;
