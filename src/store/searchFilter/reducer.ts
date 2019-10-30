import {
  SEARCH_FILTER,
  FilterState,
  FilterActions,
  REMOVE_FILTER
} from "./types";

const initialState: FilterState = {
  filters: ["burak", "çardak", "murat", "aykut"]
};

const filterReducer = (state = initialState, action: FilterActions) => {
  switch (action.type) {
    case SEARCH_FILTER:
      return { ...state, filters: state.filters.concat(action.payload) };
    case REMOVE_FILTER:
      const itemIndex = state.filters.indexOf(action.payload.toString());
      if (itemIndex !== -1) {
        console.log(itemIndex);
        return {
          ...state,
          filters: state.filters.filter((item, index) => {
            return index !== itemIndex;
          })
        };
      } else {
        console.log("yok");
        return { ...state };
      }
    default:
      return state;
  }
};

export default filterReducer;
