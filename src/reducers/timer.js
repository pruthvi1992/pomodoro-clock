import sessionLengthReducer from "./sessionLength";

const timerReducer = (state = false, action) => {
  switch (action.type) {
    case "PLAYTOGGLE":
      return !state;
    case "RESET":
      return "reset";
    default:
      return state;
  }
};

export default timerReducer;
