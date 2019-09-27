import { TOGGLE_TEST, TestState, TestActionType } from "./types";

const initialState: TestState = {
  isTrue: false
};

const toggleReducer = (state = initialState, action: TestActionType) => {
  switch (action.type) {
    case TOGGLE_TEST:
      return { ...state, isTrue: !state.isTrue };
    default:
      return state;
  }
};

export default toggleReducer;
