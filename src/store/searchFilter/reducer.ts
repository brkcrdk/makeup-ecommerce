import {
  SEARCH_FILTER,
  FilterState,
  FilterActions,
  REMOVE_FILTER
} from "./types";

const initialState: FilterState = {
  filters: {
    product_type: "",
    product_category: "",
    product_tags: [],
    brand: "",
    price_greater_than: 0,
    price_less_than: 0,
    rating_grater_than: 0,
    rating_less_than: 0
  }
};

const filterReducer = (state = initialState, action: FilterActions) => {
  switch (action.type) {
    case SEARCH_FILTER:
      console.log(state.filters.product_tags);
      return { ...state, filters: { ...state.filters, ...action.payload } };
    // if (state.filters.indexOf(action.payload.toString()) === -1) {
    //   return { ...state, filters: state.filters.concat(action.payload) };
    // } else {
    //   return { ...state };
    // }
    // case REMOVE_FILTER:
    // const itemIndex = state.filters.indexOf(action.payload.toString());
    // if (itemIndex !== -1) {
    //   return {
    //     ...state,
    //     filters: state.filters.filter((item, index) => {
    //       return index !== itemIndex;
    //     })
    //   };
    // } else {
    //   return { ...state };
    // }
    default:
      return state;
  }
};

export default filterReducer;
