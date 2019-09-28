import { CHANGE_NAME, NameState, NameActionTypes } from "./types";

const initialState: NameState = {
  name: "Burak"
};

const nameReducer = (state = initialState, action: NameActionTypes) => {
  switch (action.type) {
    case CHANGE_NAME:
      return { ...state, name: action.payload.name };
    default:
      return state;
  }
};

export default nameReducer;
