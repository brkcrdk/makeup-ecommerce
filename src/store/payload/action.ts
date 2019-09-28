import { NameState, CHANGE_NAME } from "./types";

const changeNameAction = (name: NameState) => {
  return {
    type: CHANGE_NAME,
    payload: name
  };
};
export default changeNameAction;
