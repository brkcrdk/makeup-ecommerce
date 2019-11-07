import { ADD_CART, CartState, CartActions } from "./types";

const initialState: CartState = {
  cart: []
};

const cartReducer = (state = initialState, action: CartActions) => {
  switch (action.type) {
    case ADD_CART:
      const payload = action.payload.cart;
      console.log(payload);
      return { ...state };
    default:
      return state;
  }
};

export default cartReducer;
