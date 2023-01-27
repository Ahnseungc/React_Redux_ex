import { combineReducers } from "redux";
import addsubReducer from "./recucer/addsub";
import countingReducer from "./recucer/counting";

const rootReducer = combineReducers({
  value: addsubReducer,
  count: countingReducer,
});

export default rootReducer;
