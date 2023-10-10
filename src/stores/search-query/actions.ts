import { UPDATE_SEARCH_QUERY } from './types';

export const updateSearchQuery = (query: string, projectNumber: string) => ({
    type: UPDATE_SEARCH_QUERY,
    payload: {
        query,
        projectNumber
    },
});