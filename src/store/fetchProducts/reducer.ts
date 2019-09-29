import {
  PRODUCTS_ERROR,
  PRODUCTS_SUCCESS,
  PRODUCTS_FETCH,
  ProductActionTypes,
  ProductsState
} from "./types";

const initialState: ProductsState = {
  products: [],
  isLoading: false,
  error: null
};

const fetchProductReducer = (
  state = initialState,
  action: ProductActionTypes
) => {
  switch (action.type) {
    case PRODUCTS_FETCH:
      return { ...state, isLoading: true };
    case PRODUCTS_SUCCESS:
      return { ...state, isLoading: false, products: { ...action.payload } };
    case PRODUCTS_ERROR:
      return { ...state, isLoading: false, error: action.error };
    default:
      return state;
  }
};

export default fetchProductReducer;
