import { combineReducers } from "redux";

import toggleReducer from "./test/reducer";
import nameReducer from "./payload/reducer";
const rootReducer = combineReducers({
  toggle: toggleReducer,
  userName: nameReducer
});

export default rootReducer;
