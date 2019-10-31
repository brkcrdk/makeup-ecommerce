import { SEARCH_FILTER, FilterState, FilterActions } from "./types";

const initialState: FilterState = {
  filters: {}
};

const filterReducer = (state = initialState, action: FilterActions) => {
  switch (action.type) {
    default:
      return state;
  }
};
export default filterReducer;
