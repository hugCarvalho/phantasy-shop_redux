import calcRed from "./calculationsReducer";
import { CALCULATE_TOTAL } from "../actions/calculationsActions";

describe("calculate total reducer", () => {
  const state = {
    tax: 0.1,
    shipping: { normal: 6, express: 11, free: 0 },
    total: 0,
  };
  test("it returns the initial state", () => {
    expect(calcRed(undefined, {})).toEqual(state);
  });
  test("should calculate CALCULATE_TOTAL correctly", () => {
    const cart = { cart: [{ amount: 2, price: 2000 }] };
    expect(
      calcRed(state, {
        type: CALCULATE_TOTAL,
        payload: cart,
      })
    ).toEqual({
      ...state,
      total: 4000,
    });
  });
});
