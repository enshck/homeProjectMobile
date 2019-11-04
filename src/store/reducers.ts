import { combineReducers } from "redux";
import types from "./types";

const someReducers = (state = "", action: any) => {
  switch (action.type) {
    case types.SET_DATA: {
      return action.data;
    }
    default:
      return state;
  }
};

export const reducers = combineReducers({
  some: someReducers
});
