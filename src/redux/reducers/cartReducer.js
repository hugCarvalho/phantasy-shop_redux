import {
  REMOVE_FROM_CART,
  ADD_TO_CART,
  POPULATE_DATABASE,
} from "../actions/cartAction";

const initState = {
  items: [],
  cart: [],
  amount: 0,
  total: 0,
};

Object.freeze(initState);

const cartReducer = (state = initState, action) => {
  const filterInCart = () => {
    console.log("FILTER IN CART");
    return state.items.filter((item) => item.inCart);
  };

  const toggleItemsInCart = () => {
    return state.items.map((item) => {
      const { id, type } = action.payload;
      if (item.char_id === id && type === "add") item.inCart = true;
      if (item.char_id === id && type === "remove") item.inCart = false;
      return item;
    });
  };

  switch (action.type) {
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
