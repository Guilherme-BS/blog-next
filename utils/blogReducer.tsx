import { Action, State } from "../types/types";

export const initialState: State = { namePost: "", newsPost: "", imageUrl: "" };

export default function blogReducer(state: State, action: Action) {
  const { type, key, playload } = action;

  switch (type) {
    case "input_text":
      if (key)
        return {
          ...state,
          [key]: playload,
        };
    case "reset":
      return initialState;
    default:
      return state;
  }
}
