import breakLengthReducer from "./breakLength";
import sessionLengthReducer from "./sessionLength";
import timerReducer from "./timer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  breakLength: breakLengthReducer,
  sessionLength: sessionLengthReducer,
  timer: timerReducer,
});

export default allReducers;
