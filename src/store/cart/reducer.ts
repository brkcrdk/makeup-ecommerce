import { ADD_CART, CartState, CartActions } from "./types";

const initialState: CartState = {
  cart: [{ product: {}, count: 0 }]
};

const cartReducer = (state = initialState, action: CartActions) => {
  switch (action.type) {
    case ADD_CART:
      console.log(action.payload);
      return { ...state, product: action.payload.cart };
    default:
      return state;
  }
};

export default cartReducer;
