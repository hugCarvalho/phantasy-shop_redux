import { CALCULATE_TOTAL, calculateTotal } from "./calculationsActions";

describe("calculationsActions", () => {
  const number = 2;
  const expectedAction = {
    type: CALCULATE_TOTAL,
    payload: number,
  };
  //console.log("calcTotal", calculateTotal);
  test("creates an action to calculate the total of your cart", () => {
    expect(calculateTotal(2)).toEqual(expectedAction);
  });
});
