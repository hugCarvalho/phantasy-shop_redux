export const CALCULATE_TOTAL = "CALCULATE_TOTAL";

export const calculateTotal = (data) => {
  return {
    type: CALCULATE_TOTAL,
    payload: data,
  };
};
