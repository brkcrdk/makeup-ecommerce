import { SEARCH_FILTER, FilterState, FilterActions } from "./types";

const initialState: FilterState = {
  filters: {
    product_type: ""
  }
};

const filterReducer = (state = initialState, action: FilterActions) => {
  switch (action.type) {
    case SEARCH_FILTER:
      console.log(action.payload.product_type);
      return { ...state };
    default:
      return state;
  }
};
export default filterReducer;
