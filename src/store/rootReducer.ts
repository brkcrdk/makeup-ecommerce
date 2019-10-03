import { combineReducers } from "redux";

import toggleReducer from "./searchInputToggle/reducer";
import fetchProductReducer from "./fetchProducts/reducer";
import sidebarToggleReducer from "./sidebarToggle/reducer";
const rootReducer = combineReducers({
  searchToggle: toggleReducer,
  storeProducts: fetchProductReducer,
  sidebarToggle: sidebarToggleReducer
});

export default rootReducer;
