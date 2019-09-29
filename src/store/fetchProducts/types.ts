//Define main store here
export interface ProductsState {
  products: IProducts[];
  isLoading: boolean;
  error: null;
}
//Define api call structure here
export interface IProducts {
  id: Number;
  name: String;
  username: String;
  email: String;
  address: {
    street: String;
    suite: String;
    city: String;
    zipcode: String;
    geo: {
      lat: String;
      lng: String;
    };
  };
  phone: String;
  website: String;
}
//Define types that will be using in actions and reducers!
export const PRODUCTS_FETCH = "PRODUCTS_FETCH";
export const PRODUCTS_SUCCESS = "PRODUCTS_SUCCESS";
export const PRODUCTS_ERROR = "PRODUCTS_ERROR";

//Define action types here:
//If fetching isLoading: true
interface ProductsFetch {
  type: typeof PRODUCTS_FETCH;
}
//If success isLoading: false, payload: IProducts which defined before
interface ProductsSuccess {
  type: typeof PRODUCTS_SUCCESS;
  //IMPORTANT: payload and Reducer initialState type MUST be the same
  payload: IProducts[];
}
//If error isLoading:false, error: action.error
interface ProductsError {
  type: typeof PRODUCTS_ERROR;
  error: null;
}
//Exporting the action types
export type ProductActionTypes =
  | ProductsFetch
  | ProductsSuccess
  | ProductsError;
