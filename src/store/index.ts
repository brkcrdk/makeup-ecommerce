import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./rootReducer";
import { create } from "istanbul-reports";

export type AppState = ReturnType<typeof rootReducer>;

export default function configureStore() {
  const middleWares = [thunkMiddleware];
  const middleWareEnhancer = applyMiddleware(...middleWares);

  const store = createStore(
    rootReducer,
    composeWithDevTools(middleWareEnhancer)
  );
  return store;
}
