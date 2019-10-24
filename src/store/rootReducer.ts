import { combineReducers } from "redux";

import toggleReducer from "./searchInputToggle/reducer";
import sidebarToggleReducer from "./sidebarToggle/reducer";
//Fetch all products
import fetchProductsReducer from "./fetchProducts/reducer";
//Fetch specific product with parameters
import fetchProductReducer from "./fetchProduct/reducer";
const rootReducer = combineReducers({
  searchToggle: toggleReducer,
  storeProducts: fetchProductsReducer,
  sidebarToggle: sidebarToggleReducer
});

export default rootReducer;
