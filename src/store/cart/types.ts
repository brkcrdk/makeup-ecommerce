export interface CartState {
  cart: {
    product: {};
    count: number;
  }[];
}

export const ADD_CART = "ADD_CART";
export const REMOVE_CART = "REMOVE_CART";

interface AddCart {
  type: typeof ADD_CART;
  payload: {};
}

interface RemoveCart {
  type: typeof REMOVE_CART;
  payload: {}[];
}

export type CartActions = AddCart | RemoveCart;
