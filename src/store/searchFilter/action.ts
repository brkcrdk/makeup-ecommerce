import { SEARCH_FILTER, REMOVE_FILTER, IFilter } from "./types";

export const searchFilter = (filters: {}) => {
  return {
    type: SEARCH_FILTER,
    payload: filters
  };
};

export const removeFilter = (filters: {}) => {
  return {
    type: REMOVE_FILTER,
    payload: filters
  };
};
