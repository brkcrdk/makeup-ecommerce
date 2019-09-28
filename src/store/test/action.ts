import { TestState, TOGGLE_TEST } from "./types";

const toggleTest = (newTest: TestState) => {
  return {
    type: TOGGLE_TEST
  };
};
export default toggleTest;
