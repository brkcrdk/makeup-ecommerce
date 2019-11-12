import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./rootReducer";

export type AppState = ReturnType<typeof rootReducer>;

export default function configureStore() {
  const customMiddleware = (store: any) => (next: any) => (action: any) => {
    const cart = store.getState().cartStore.cart;
    const ids = cart.map((item: any) => item.product.id);

    if (action.type === "ADD_CART") {
      const item = JSON.stringify(action.payload);
      if (`cart-${action.payload.product.id}` in localStorage) {
        const selected = ids.indexOf(action.payload.product.id);
        const oldCount = cart[selected].count;
        const newItem = JSON.stringify({
          product: action.payload.product,
          count: oldCount + action.payload.count
        });
        localStorage.setItem(`cart-${action.payload.product.id}`, newItem);
      } else {
        localStorage.setItem(`cart-${action.payload.product.id}`, item);
      }
    } else if (action.type === "UPDATE_CART") {
      if (`cart-${action.payload.product.id}` in localStorage) {
        const selected = ids.indexOf(action.payload.product.id);
        const oldCount = cart[selected].count;
        const update = action.payload.update;
        if (update === "increment") {
          const newItem = JSON.stringify({
            product: action.payload.product,
            count: oldCount + 1
          });
          localStorage.setItem(`cart-${action.payload.product.id}`, newItem);
        } else if (update === "decrement") {
          const newItem = JSON.stringify({
            product: action.payload.product,
            count: oldCount - 1
          });
          localStorage.setItem(`cart-${action.payload.product.id}`, newItem);
        }
      }
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
