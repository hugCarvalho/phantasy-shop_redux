import React from "react";
import Cart from "./Cart";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
// import store from "../../redux/store";
import { Provider } from "react-redux";
import { createStore } from "redux";
import itemCartReducer, { initState } from "../../redux/reducers/itemCartReducer";
import "@testing-library/jest-dom/extend-expect";

// function renderWithRedux(
//   component,
//   { initState, store = createStore(itemCartReducer, initState) } = {}
// ) {
//   return {
//     ...render(<Provider store={store}>{component}</Provider>),
//   };
// }

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
    // test("header not logged in", () => {
    // const { getByText } = renderWithProviders(<Header />, {
    //   store: { user: null }
    // });
    // getByText("login");
    // getByText("register");
    // });
  });
});
//   test("number of items should be updated if not empty", () => {
//     const { getByText } = renderWithProviders(<Cart />, {
//       redux: { cart: { cart: [2] } },
//     });
//     screen.getByRole("heading", { name: /items in your cart: 1/i });
//   });
// });

// test("header logged in", () => {
//   const { getByText } = renderWithProviders(<Header />, {
//     reduxState: {
//       user: {
//         name: "bob"
//       }
//     }
//   });

//   getByText("bob");
// });

// test("should render initial render correctly  ", () => {
// const heading = screen.getByRole("heading", { name: /items in your cart/i });
// const message = screen.getByRole("heading", { name: /your cart is empty/i });
// console.log(heading);
// console.log(message);
// expect(heading).toHaveTextContent("Items in your cart: 0");
// expect(message).toHaveTextContent('Your cart is empty! Why don"t you add some actors?');
// userEvent.click(increment)
// expect(message).toHaveTextContent('Current count: 1')
// userEvent.click(decrement)
// expect(message).toHaveTextContent('Current count: 0')
// });
