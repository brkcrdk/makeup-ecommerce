import { SEARCH_FILTER, IFilter } from "./types";

export const searchFilter = (filter: IFilter) => {
  return {
    type: SEARCH_FILTER,
    payload: filter
  };
};
