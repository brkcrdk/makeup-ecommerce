//state type
export interface NameState {
  name: string;
}

//Action type
export const CHANGE_NAME = "CHANGE_NAME";

interface ChangeName {
  type: typeof CHANGE_NAME;
  payload: NameState;
}

export type NameActionTypes = ChangeName;
