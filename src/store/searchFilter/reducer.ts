import {
  SEARCH_FILTER,
  FilterState,
  FilterActions,
  REMOVE_FILTER
} from "./types";

const initialState: FilterState = {
  filters: []
};

const filterReducer = (state = initialState, action: FilterActions) => {
  switch (action.type) {
    case SEARCH_FILTER:
      return {
        ...state,
        filters: state.filters.concat(action.payload.toString())
      };
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
