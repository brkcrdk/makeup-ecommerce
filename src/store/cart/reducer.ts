import { ADD_CART, UPDATE_CART, CartState, CartActions } from "./types";

const initialState: CartState = {
  cart: []
};

const cartReducer = (state = initialState, action: CartActions) => {
  switch (action.type) {
    case ADD_CART:
      if (state.cart.length >= 0) {
        const id = state.cart.map((item) => item.product.id);
        if (id.indexOf(action.payload.product.id) === -1) {
          return { ...state, cart: state.cart.concat(action.payload) };
        } else {
          const selected = id.indexOf(action.payload.product.id);
          const newCount = action.payload.count;
          const oldCount = state.cart[selected].count;
          state.cart.splice(selected, 1);
          const newObj = {
            product: action.payload.product,
            count: newCount + oldCount
          };
          return { ...state, cart: state.cart.concat(newObj) };

          //Update actions here:
          // if (newCount > oldCount) {
          //   state.cart.splice(selected, 1);
          //   const newObj = {
          //     product: action.payload.product,
          //     count: newCount + oldCount
          //   };
          //   return { ...state, cart: state.cart.concat(newObj) };
          // } else if (newCount < oldCount) {
          //   state.cart.splice(selected, 1);
          //   const newObj = {
          //     product: action.payload.product,
          //     count: newCount
          //   };
          //   return { ...state, cart: state.cart.concat(newObj) };
          // }
        }
      }
      return state;
    case UPDATE_CART:
      if (state.cart.length >= 0) {
        const id = state.cart.map((item) => item.product.id);
        if (id.indexOf(action.payload.product.id) === -1) {
          return state;
        } else {
          const selected = id.indexOf(action.payload.product.id);
          const count = state.cart[selected].count;
          state.cart.splice(selected, 1);
        }
      }
      return state;
    default:
      return state;
  }
};

export default cartReducer;
