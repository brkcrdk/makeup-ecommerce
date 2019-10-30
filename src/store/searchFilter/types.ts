export interface FilterState {
  filters: IFilter;
}
export interface IFilter {
  product_type: string;
  product_category: string;
  product_tags: string[];
  brand: string;
  price_greater_than: number;
  price_less_than: number;
  rating_grater_than: number;
  rating_less_than: number;
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
