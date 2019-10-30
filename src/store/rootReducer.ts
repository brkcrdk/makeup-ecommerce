import { combineReducers } from "redux";

import toggleReducer from "./searchInputToggle/reducer";
import sidebarToggleReducer from "./sidebarToggle/reducer";
//Fetch all products
import fetchProductsReducer from "./fetchProducts/reducer";
//Fetch specific product with parameters
import fetchProductReducer from "./fetchProduct/reducer";
import filterReducer from "../store/searchFilter/reducer";
const rootReducer = combineReducers({
  searchToggle: toggleReducer,
  storeProducts: fetchProductsReducer,
  sidebarToggle: sidebarToggleReducer,
  storeProduct: fetchProductReducer,
  searchFilter: filterReducer
});

export default rootReducer;
