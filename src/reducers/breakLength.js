const breakLengthReducer = (state = 5, action) => {
  switch (action.type) {
    case "INCREMENTBL":
      return state + 1;
      break;
    case "DECREMENTBL":
      return state - 1;
      break;
    case "RESETBL":
      return (state = 5);
      break;
    default:
      return state;
  }
};

export default breakLengthReducer;
