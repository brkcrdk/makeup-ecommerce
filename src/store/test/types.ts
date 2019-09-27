//state type
export interface TestState {
  isTrue: boolean;
}

//Action type
export const TOGGLE_TEST = "TOGGLE_TEST";

//
interface ToggleTest {
  type: typeof TOGGLE_TEST;
}

export type TestActionType = ToggleTest;
