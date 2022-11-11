import { atom } from "jotai";

const INITIAL_STATE = {
  city: undefined,
  dates: [],
  options: {
    adult: undefined,
    child: undefined,
    room: undefined,
  },
};

export const searchReducer = (state, action) => {
  switch (action.type) {
    case "NEW_SEARCH":
      return action.payload;
    case "RESET_SEARCH":
      return INITIAL_STATE;
    default:
      return state;
  }
};

export const searchAtom = atom({ ...INITIAL_STATE });
