import {
  REMOVE_FROM_CART,
  ADD_TO_CART,
  POPULATE_DATABASE,
  INCREMENT,
  DECREMENT,
} from "../actions/itemCartAction";

const initState = {
  items: [],
  cart: [],
  amount: 0,
  total: 0,
};

//Just for control to prevent mutating state
Object.freeze(initState.items);
Object.freeze(initState.cart);
Object.freeze(initState.cart[0]);
Object.freeze(initState);

//Fn
const calcItemTotal = (amount, price) => amount * price;

//Reducer
const itemCartReducer = (state = initState, action) => {
  const filterInCartAndComputeItemTotal = () => {
    // console.log("FILTER IN CART");
    let res = state.items.filter((item) => {
      if (item.inCart) {
        item.total = calcItemTotal(item.amount, item.price); //necessary for subtotal when item is added to the cart;
      }
      return item.inCart;
    });
    return res;
  };

  const toggleItemsInCart = () => {
    return state.items.map((item) => {
      const { id, type } = action.payload;
      if (item.char_id === id && type === "add") {
        item.inCart = true;
        item.amount = 1;
      }
      if (item.char_id === id && type === "remove") item.inCart = false;
      return item;
    });
  };

  switch (action.type) {
    case DECREMENT:
      const updateAmount = (amount) => amount - 1;

      const decrement = () => {
        return state.cart.map((item) => {
          // console.log("action.payload", action.payload, item.char_id);
          if (item.char_id === action.payload) {
            if (item.amount === 1) return item;
            return {
              ...item,
              amount: updateAmount(item.amount),
              total: calcItemTotal(updateAmount(item.amount), item.price),
            };
          }
          return item;
        });
      };
      return {
        ...state,
        cart: decrement(),
      };

    case INCREMENT:
      const increment = () => {
        return state.cart.map((item) => {
          const { id, amount, stock } = action.payload;
          console.log("action.payload", action.payload);
          if (item.char_id === id && amount < stock) {
            return {
              ...item,
              amount: item.amount + 1,
              total: calcItemTotal(item.amount + 1, item.price),
            };
          }
          return item;
        });
      };
      return {
        ...state,
        cart: increment(),
      };

    case REMOVE_FROM_CART:
      return {
        ...state,
        items: toggleItemsInCart(),
        cart: filterInCartAndComputeItemTotal(),
      };

    case ADD_TO_CART:
      return {
        ...state,
        items: toggleItemsInCart(),
        cart: filterInCartAndComputeItemTotal(), //items: arr,
      };

    case POPULATE_DATABASE:
      const copyOfArray = [...action.payload];
      // console.log("POP", action.payload);
      return {
        ...state,
        items: copyOfArray,
      };
    default:
      return state;
  }
};

export default itemCartReducer;
