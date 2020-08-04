//Action types
export const CALCULATE_ITEM_TOTAL = "CALCULATE_ITEM_TOTAL";
export const DECREMENT = "DECREMENT";
export const INCREMENT = "INCREMENT";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const ADD_TO_CART = "ADD_TO_CART";
export const POPULATE_DATABASE = "POPULATE_DATABASE";

//Action creators
export const calculateItemTotal = (amount, price) => {
  return {
    type: CALCULATE_ITEM_TOTAL,
    payload: {
      amount,
      price,
    },
  };
};

export const decrement = (id) => {
  return {
    type: DECREMENT,
    payload: id,
  };
};

export const increment = (id) => {
  return {
    type: INCREMENT,
    payload: id,
  };
};

export const removeFromCart = (id) => {
  return {
    type: REMOVE_FROM_CART,
    payload: {
      id: id,
      type: "remove",
    },
  };
};

export const addToCart = (id) => {
  return {
    type: ADD_TO_CART,
    payload: {
      id,
      type: "add",
    },
  };
};

export const populateDatabase = (data) => {
  return {
    type: POPULATE_DATABASE,
    payload: data,
  };
};
