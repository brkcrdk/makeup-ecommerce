import { SEARCH_FILTER, FilterState, FilterActions } from "./types";

const initialState: FilterState = {
  filters: { price_greater_than: 0 }
};

const filterReducer = (state = initialState, action: FilterActions) => {
  switch (action.type) {
    case SEARCH_FILTER:
      return { ...state, filters: { ...state.filters, ...action.payload } };
    default:
      return state;
  }
};
export default filterReducer;
