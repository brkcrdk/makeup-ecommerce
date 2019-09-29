export interface ProductsState {
  products: IProducts[];
  isLoading: boolean;
  error: null;
}
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

export const PRODUCTS_FETCH = "PRODUCTS_FETCH";
export const PRODUCTS_SUCCESS = "PRODUCTS_SUCCESS";
export const PRODUCTS_ERROR = "PRODUCTS_ERROR";

interface ProductsFetch {
  type: typeof PRODUCTS_FETCH;
}

interface ProductsSuccess {
  type: typeof PRODUCTS_SUCCESS;
  payload: IProducts[];
}
interface ProductsError {
  type: typeof PRODUCTS_ERROR;
  error: null;
}

export type ProductActionTypes =
  | ProductsFetch
  | ProductsSuccess
  | ProductsError;
