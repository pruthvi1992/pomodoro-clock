const sessionLengthReducer = (state = 25, action) => {
  switch (action.type) {
    case "INCREMENTSL":
      return state + 1;
      break;
    case "DECREMENTSL":
      return state - 1;
      break;
    case "RESETSL":
      return (state = 25);
      break;
    default:
      return state;
  }
};

export default sessionLengthReducer;
