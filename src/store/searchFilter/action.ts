import { SEARCH_FILTER } from "./types";

export const searchFilter = (filters: string[]) => {
  return {
    type: SEARCH_FILTER,
    payload: filters
  };
};
