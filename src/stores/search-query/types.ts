export const UPDATE_SEARCH_QUERY = 'UPDATE_SEARCH_QUERY';

interface UpdateSearchQueryAction {
    type: typeof UPDATE_SEARCH_QUERY;
    payload: {
        query: string;
        projectNumber: string;
    };
}

export type SearchActionTypes = UpdateSearchQueryAction;
