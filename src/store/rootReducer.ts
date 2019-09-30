import { combineReducers } from "redux";

import toggleReducer from "./searchInputToggle/reducer";
import nameReducer from "./payload/reducer";
import fetchProductReducer from "./fetchProducts/reducer";
const rootReducer = combineReducers({
  storeToggle: toggleReducer,
  storeName: nameReducer,
  storeProducts: fetchProductReducer
});

export default rootReducer;
