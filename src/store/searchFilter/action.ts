import { SEARCH_FILTER, REMOVE_FILTER } from "./types";

export const searchFilter = (filters: string[]) => {
  return {
    type: SEARCH_FILTER,
    payload: filters
  };
};

export const removeFilter = (filters: string[]) => {
  return {
    type: REMOVE_FILTER,
    payload: filters
  };
};
