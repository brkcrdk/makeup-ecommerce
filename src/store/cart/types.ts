import { IProduct } from "../fetchProduct/types";

export interface CartState {
  cart: {
    product: IProduct;
    count: number;
  }[];
}

export const ADD_CART = "ADD_CART";
export const REMOVE_CART = "REMOVE_CART";

interface AddCart {
  type: typeof ADD_CART;
  payload: { product: IProduct; count: number };
}

interface RemoveCart {
  type: typeof REMOVE_CART;
  payload: {}[];
}

export type CartActions = AddCart | RemoveCart;
