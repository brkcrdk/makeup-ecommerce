import { combineReducers } from "redux";

import toggleReducer from "./test/reducer";

const rootReducer = combineReducers({
  toggle: toggleReducer
});
export default rootReducer;
