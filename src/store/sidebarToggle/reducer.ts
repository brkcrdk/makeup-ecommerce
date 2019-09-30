import { TOGGLE_SIDEBAR, SidebarState, SidebarActions } from "./types";
const initialState: SidebarState = {
  toggle: false
};

const sidebarToggleReducer = (state = initialState, action: SidebarActions) => {
  switch (action.type) {
    case TOGGLE_SIDEBAR:
      return { ...state, toggle: !state.toggle };
    default:
      return state;
  }
};
export default sidebarToggleReducer;
