import { ADD_CART, CartState, CartActions } from "./types";

const initialState: CartState = {
  cart: [
    { product: { type: "x" }, count: 22 },
    { product: { type: "x" }, count: 22 }
  ]
};

const cartReducer = (state = initialState, action: CartActions) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default cartReducer;
