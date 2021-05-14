export const incNumber = (num) => {
  return {
    type: "INCREAMENT",
    payload: num,
  };
};

export const decNumber = () => {
  return {
    type: "DECREAMENT",
  };
};
export const mulNumber = (num) => {
  return {
    type: "MULTIPLICATION",
    payload: num,
  };
};

export const divNumber = (num) => {
  return {
    type: "DIVIDATION",
    payload: num,
  };
};
