import { combineReducers } from "redux";

import toggleReducer from "./searchInputToggle/reducer";
import nameReducer from "./payload/reducer";
import fetchProductReducer from "./fetchProducts/reducer";
import sidebarToggleReducer from "./sidebarToggle/reducer";
const rootReducer = combineReducers({
  storeToggle: toggleReducer,
  storeName: nameReducer,
  storeProducts: fetchProductReducer,
  storeSidebarToggle: sidebarToggleReducer
});

export default rootReducer;
