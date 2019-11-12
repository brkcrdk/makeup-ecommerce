import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./rootReducer";

export type AppState = ReturnType<typeof rootReducer>;

export default function configureStore() {
  const customMiddleware = (store: any) => (next: any) => (action: any) => {
    if (action.type === "ADD_CART") {
      const cart = store.getState().cartStore.cart;
      console.log(cart);
      const item = JSON.stringify(action.payload);
      if (localStorage.hasOwnPropery(`cart-${action.payload.product.id}`)) {
        localStorage.setItem(`cart-${action.payload.product.id}`, item);
      } else {
        console.log("already exist");
      }
      // localStorage.setItem(`cart-${action.payload.product.id}`, item);
    } else if (action.type === "UPDATE_CART") {
      // localStorage.setItem("cart", JSON.stringify(action.payload));
    } else if (action.type === "REMOVE_CART") {
      // localStorage.removeItem("cart");
    }
    return next(action);
  };
  const middleWare = [thunkMiddleware, customMiddleware];
  const middleWareEnhancer = applyMiddleware(...middleWare);

  const store = createStore(
    rootReducer,
    composeWithDevTools(middleWareEnhancer)
  );
  return store;
}
