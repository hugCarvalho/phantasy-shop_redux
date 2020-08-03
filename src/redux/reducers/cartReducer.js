import {
  REMOVE_FROM_CART,
  ADD_TO_CART,
  POPULATE_DATABASE,
  INCREMENT,
  DECREMENT,
} from "../actions/cartAction";

const initState = {
  items: [],
  cart: [],
  amount: 0,
  total: 0,
};
Object.freeze(initState.items[0]);
Object.freeze(initState.cart);
Object.freeze(initState.cart[0]);
Object.freeze(initState);

const cartReducer = (state = initState, action) => {
  const filterInCart = () => {
    console.log("FILTER IN CART");
    return state.items.filter((item) => item.inCart);
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
      const decrement = () => {
        return state.cart.map((item) => {
          console.log("action.payload", action.payload, item.char_id);
          if (item.char_id === action.payload) {
            if (item.amount === 1) return item;
            return { ...item, amount: item.amount - 1 };
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
          console.log("action.payload", action.payload, item.char_id);
          if (item.char_id === action.payload) {
            return { ...item, amount: item.amount + 1 };
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
        cart: filterInCart(),
      };

    case ADD_TO_CART:
      return {
        ...state,
        items: toggleItemsInCart(),
        cart: filterInCart(), //items: arr,
      };

    case POPULATE_DATABASE:
      const copyOfArray = [...action.payload];
      console.log("POP", action.payload);
      return {
        ...state,
        items: copyOfArray,
      };
    default:
      return state;
  }
};

export default cartReducer;
