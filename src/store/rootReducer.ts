import { combineReducers } from "redux";

import toggleReducer from "./test/reducer";
// import nameReducer from "./payload/reducer";
const rootReducer = combineReducers({
  toggle: toggleReducer,
  // name: nameReducer
});

export default rootReducer;
