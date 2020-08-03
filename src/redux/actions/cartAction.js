export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const ADD_TO_CART = "ADD_TO_CART";
export const POPULATE_DATABASE = "POPULATE_DATABASE";

//action
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
