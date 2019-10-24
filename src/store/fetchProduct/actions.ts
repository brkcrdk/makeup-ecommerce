import axios from "axios";
import { Dispatch } from "react";

import {
  PRODUCT_ERROR,
  PRODUCT_FETCH,
  PRODUCT_SUCCESS,
  ProductActionTypes
} from "./types";

export function fetchProduct(...params: string[]) {
  const firstParam = params
    .filter((v, i) => {
      return i === 0;
    })
    .map((v, i) => v);
  const rest = params
    .filter((v, i) => {
      return i > 0;
    })
    .map((v, i) => `&${v}`);
  const restParam = "";
  const apiUrl = `http://makeup-api.herokuapp.com/api/v1/products.json?${firstParam}${restParam.concat(
    ...rest
  )}`;
  console.log(apiUrl);
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
