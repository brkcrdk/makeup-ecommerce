import axios from "axios";
import { Dispatch } from "react";

import {
  PRODUCT_ERROR,
  PRODUCT_FETCH,
  PRODUCT_SUCCESS,
  ProductActionTypes
} from "./types";

export function fetchProduct() {
  const apiUrl = `http://makeup-api.herokuapp.com/api/v1/products.json`;
  const request = axios.get(apiUrl);

  return (dispatch: Dispatch<ProductActionTypes>) => {
    dispatch({
      type: PRODUCT_FETCH
    });
    request
      .then(({ data }) => {
        dispatch({
          type: PRODUCT_SUCCESS,
          payload: data
        });
      })
      .catch((error) => {
        dispatch({
          type: PRODUCT_ERROR,
          error: error
        });
      });
  };
}
