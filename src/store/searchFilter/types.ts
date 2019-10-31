export interface FilterState {
  filters: IFilter;
}

export interface IFilter {
  product_type?: string;
  product_category?: string;
  brand?: string;
  product_tags?: string[];
  price_greater_than?: number;
  price_less_than?: number;
  rating_greater_than?: number;
  rating_less_than?: number;
}

export const SEARCH_FILTER = "SEARCH_FILTER";
interface SearchFilter {
  type: typeof SEARCH_FILTER;
  payload: IFilter;
}
export type FilterActions = SearchFilter;
