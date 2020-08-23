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

describe("fetch items reducer", () => {
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

  test("should handle FETCH_ITEMS_FAILURE", () => {
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

  test("FETCH_ITEMS_SUCCESS", () => {
    const res = fetchReducer(state, {
      type: FETCH_ITEMS_SUCCESS,
      payload: [{}],
    });
    expect(res.items.length).toBeGreaterThan(0);
  });
});
