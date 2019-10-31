import {
  SEARCH_FILTER,
  PRODUCT_TAGS,
  REMOVE_TAGS,
  FilterState,
  FilterActions
} from "./types";

const initialState: FilterState = {
  filters: { price_greater_than: 0 },
  product_tags: []
};

const filterReducer = (state = initialState, action: FilterActions) => {
  switch (action.type) {
    case SEARCH_FILTER:
      return { ...state, filters: { ...state.filters, ...action.payload } };
    case PRODUCT_TAGS:
      if (state.product_tags.indexOf(action.payload.toString()) === -1) {
        return {
          ...state,
          product_tags: state.product_tags.concat(action.payload)
        };
      } else {
        return state;
      }
    case REMOVE_TAGS:
      console.log(action.payload);
      return state;
    default:
      return state;
  }
};
export default filterReducer;
