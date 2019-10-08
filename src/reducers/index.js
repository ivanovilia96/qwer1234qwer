import { combineReducers } from "redux";
import { allReducer } from "./page";

export const rootReducer = combineReducers({
  page: allReducer
});
