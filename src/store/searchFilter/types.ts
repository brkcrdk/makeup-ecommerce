export interface FilterState {
  filters: string[];
}

export const SEARCH_FILTER = "SEARCH_FILTEER";

interface SeachFilter {
  type: typeof SEARCH_FILTER;
  payload: string[];
}

export type FilterActions = SeachFilter;
