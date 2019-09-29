import axios from "axios";
import { Dispatch } from "react";
import {
  PRODUCTS_ERROR,
  PRODUCTS_SUCCESS,
  PRODUCTS_FETCH,
  ProductActionTypes
} from "./types";

// const productsFetch = () => {
//   return {
//     type: PRODUCTS_FETCH
//   };
// };

// const productsSuccess = (data: ProductsState) => {
//   return {
//     type: PRODUCTS_SUCCESS,
//     payload: data.products
//   };
// };
// const productsError = (error: ProductsState) => {
//   return {
//     type: PRODUCTS_ERROR,
//     error: error.error
//   };
// };

export function fetchProducts() {
  const apiUrl = `https://jsonplaceholder.typicode.com/users/`;
  const request = axios.get(apiUrl);

  return (dispatch: Dispatch<ProductActionTypes>) => {
    dispatch({
      type: PRODUCTS_FETCH
    });
    request
      .then(({ data }) => {
        dispatch({
          type: PRODUCTS_SUCCESS,
          payload: data
        });
      })
      .catch((error) => {
        dispatch({
          type: PRODUCTS_ERROR,
          error: error
        });
      });
  };
}
