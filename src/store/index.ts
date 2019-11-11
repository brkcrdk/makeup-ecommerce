import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./rootReducer";

export type AppState = ReturnType<typeof rootReducer>;

export default function configureStore() {
  // const customMiddleware = (store: {}) => (next: any) => (action: any) => {
  //   if (action.type === "ADD_CART") {
  //     const item = JSON.stringify(action.payload)
  //     localStorage.setItem("cart",[]);
  //   } else if (action.type === "UPDATE_CART") {
  //     localStorage.setItem("cart", JSON.stringify(action.payload));
  //   } else if (action.type === "REMOVE_CART") {
  //     localStorage.removeItem("cart");
  //   }
  //   return next(action);
  // };
  const middleWare = [thunkMiddleware];
  const middleWareEnhancer = applyMiddleware(...middleWare);

  const store = createStore(
    rootReducer,
    composeWithDevTools(middleWareEnhancer)
  );
  return store;
}
