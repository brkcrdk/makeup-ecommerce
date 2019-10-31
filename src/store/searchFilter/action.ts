import { SEARCH_FILTER, FilterActions } from "./types";

export const searchFilter = (filter: {}) => {
  return {
    type: SEARCH_FILTER,
    payload: filter
  };
};
