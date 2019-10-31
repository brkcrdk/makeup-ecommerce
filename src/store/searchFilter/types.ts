export interface FilterState {
  filters: IFilter;
}

export interface IFilter {
  product_type?: string;
  product_category?: string;
  brand?: string;
  product_tags?: string[];
  price_greater_than?: 0;
  price_less_than?: 0;
  rating_greater_than?: 0;
  rating_less_than?: 0;
}

export const SEARCH_FILTER = "SEARCH_FILTER";
interface SearchFilter {
  type: typeof SEARCH_FILTER;
  payload: IFilter;
}
export type FilterActions = SearchFilter;
