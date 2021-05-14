const initialState = 0;
const initialState1 = 5;

const changeTheNumber = (state = initialState, action) => {
  switch (action.type) {
    case "INCREAMENT":
      return state + action.payload;
    case "DECREAMENT":
      return state - 1;
    default:
      return state;
  }
};
const changeTheNumberMul = (state = initialState1, action) => {
  switch (action.type) {
    case "MULTIPLICATION":
      return state * action.payload;
    case "DIVIDATION":
      return state / action.payload;
    default:
      return state;
  }
};

export default changeTheNumber;
export { changeTheNumberMul };
