import { combineReducers } from "redux";

import toggleReducer from "./test/reducer";
import nameReducer from "./payload/reducer";
import fetchProductReducer from "./fetchProducts/reducer";
const rootReducer = combineReducers({
  toggle: toggleReducer,
  userName: nameReducer,
  products: fetchProductReducer
});

export default rootReducer;
