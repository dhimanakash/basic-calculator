import changeTheNumber, { changeTheNumberMul } from "./upDown";

import { combineReducers } from "redux";

const rootReducers = combineReducers({
  changeTheNumber,
  changeTheNumberMul,
});

export default rootReducers;
