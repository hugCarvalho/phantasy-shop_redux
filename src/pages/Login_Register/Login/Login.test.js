import React from "react";
// import Cart from "./Cart";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import database, { initState } from "../../../redux/reducers/databaseReducer";
import "@testing-library/jest-dom/extend-expect";
import Login from "../Login/Login";

// function renderWithRedux(
//   component,
//   { initState, store = createStore(database, initState) } = {}
// ) {
//   return {
//     ...render(<Provider store={store}>{component}</Provider>),
//   };
// }

function renderWithProviders(ui, { reduxState } = {}) {
  const store = createStore(database, reduxState || initState);
  return render(<Provider store={store}>{ui}</Provider>);
}

test.skip("should render", () => {
  renderWithProviders(<Login />, {
    // reduxState: { cart: { cart: [] } },
    reduxState: { database: { userDatabase: [] } },
  });
  screen.getByText(/log in/i);
});
