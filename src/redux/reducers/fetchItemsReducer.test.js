import {
  FETCH_ITEMS_REQUEST,
  FETCH_ITEMS_SUCCESS,
  FETCH_ITEMS_FAILURE,
} from "../actions/asyncAction";
import fetchReducer from "./fetchItemsReducer";

const state = {
  loading: false,
  items: [],
  error: "",
};

describe("fetchItemReducer", () => {
  test("should return the initial state", () => {
    expect(fetchReducer(undefined, {})).toEqual(state);
  });

  test("should handle FETCH_ITEMS_REQUEST", () => {
    expect(
      fetchReducer(state, {
        type: FETCH_ITEMS_REQUEST,
      })
    ).toEqual({
      ...state,
      loading: true,
    });
  });

  describe("FETCH_ITEMS_SUCCESS tests", () => {
    test("returns the data", () => {
      const res = fetchReducer(state, {
        type: FETCH_ITEMS_SUCCESS,
        payload: [{}],
      });
      // console.log(res);

      expect(res.items.length).toBeGreaterThan(0);
    });

    test("adds the additional properties to the original data", () => {
      const res = fetchReducer(state, {
        type: FETCH_ITEMS_SUCCESS,
        payload: [{}],
      });
      expect(res.items[0]).not.toHaveProperty("stocks");
      expect(res.items[0]).toHaveProperty("stock");
      expect(res.items[0]).toHaveProperty("inCart");
      expect(res.items[0]).toHaveProperty("price");
      expect(res.items[0]).toHaveProperty("amount");
      expect(res.items[0]).toHaveProperty("total");
    });
  });

  test("handles FETCH_ITEMS_FAILURE", () => {
    expect(
      fetchReducer(state, {
        type: FETCH_ITEMS_FAILURE,
        payload: "Error!",
      })
    ).toEqual({
      ...state,
      loading: false,
      error: "Error!",
    });
    expect();
  });
});
