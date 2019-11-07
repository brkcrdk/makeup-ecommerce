import { ADD_CART, CartState, CartActions } from "./types";

const initialState: CartState = {
  cart: []
};

const cartReducer = (state = initialState, action: CartActions) => {
  switch (action.type) {
    case ADD_CART:
      return { ...state, cart: state.cart.concat(action.payload) };
    default:
      return state;
  }
};

export default cartReducer;
