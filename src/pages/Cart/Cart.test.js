import React from "react";
import Cart from "./Cart";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
// import store from "../../redux/store";
import { Provider } from "react-redux";
import { createStore } from "redux";
import itemCartReducer, { initState } from "../../redux/reducers/itemCartReducer";
import "@testing-library/jest-dom/extend-expect";

function renderWithProviders(ui, { reduxState } = {}) {
  const store = createStore(itemCartReducer, reduxState || initState);
  return render(<Provider store={store}>{ui}</Provider>);
}

describe("test TestedComponent components", () => {
  test("render inital state", () => {
    renderWithProviders(<Cart />, {
      reduxState: { cart: { cart: [] } },
    });
    const heading = screen.getByRole("heading", { name: /items in your cart/i });
    expect(heading).toHaveTextContent("Items in your cart: 0");
    // expect(heading.textContent).toBe("Items in your cart: 0");
    screen.getByText(/your cart is empty/i);
    screen.getByText(/items/i);
    screen.getByText("Items in your cart: 0");
  });
});
