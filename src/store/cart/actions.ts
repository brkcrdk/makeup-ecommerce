import { ADD_CART } from "./types";

export const addCart = (cart: {}) => {
  return {
    type: ADD_CART,
    payload: cart
  };
};
