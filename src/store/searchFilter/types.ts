export interface FilterState {
  filters: string[];
}

export const SEARCH_FILTER = "SEARCH_FILTEER";
export const REMOVE_FILTER = "REMOVE_FILTER";

interface SeachFilter {
  type: typeof SEARCH_FILTER;
  payload: string[];
}
interface RemoveFilter {
  type: typeof REMOVE_FILTER;
  payload: string[];
}
export type FilterActions = SeachFilter | RemoveFilter;
