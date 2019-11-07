import { ADD_CART, CartState } from "./types";

export const addCart = (cart: {}) => {
  return {
    type: ADD_CART,
    payload: cart
  };
};
