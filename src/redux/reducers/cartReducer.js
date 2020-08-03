import {
  ADD_TO_CART,
  POPULATE_DATABASE,
  REMOVE_FROM_CART,
} from "../actions/cartAction";

const initState = {
  products: [],
  cart: [],
  amount: 0,
  total: 0,
};

Object.freeze(initState);

const cartReducer = (state = initState, action) => {
  const filterInCart = () => {
    console.log("FILTER IN CART");
    return state.products.filter((item) => item.inCart);
  };
  // console.log("cartReducer -> state", state);
  switch (action.type) {
    case REMOVE_FROM_CART:
      console.log("READ cartReducer -> REMOVEACTION", action);

      const res2 = state.products.map((item) => {
        console.log("id >>", action.payload, item.char_id);
        if (item.char_id === action.payload) {
          console.log("FOUND");
          item.inCart = false;
        }
        // console.log("PRODUCTS RESULT");
        return item;
      });
      console.log("RES2", res2);
      // const filter2 = res2.filter((item, id) => {
      //   if (item.char_id === action.payload.id) {
      //     console.log("FILTER YES!!!");
      //     return item;
      //   }

      // });
      return {
        ...state,
        products: res2,
        cart: filterInCart(), //products: arr,
      };

    case ADD_TO_CART:
      // const arr = [...action.payload.array];
      console.log("initState", initState);
      console.log("action", action);
      const res = state.products.map((item, id) => {
        if (item.char_id === action.payload) {
          item.inCart = true;
        }
        return item;
      });

      const filter = res.filter((item) => {
        return item.char_id === action.payload;
      });
      console.log("FILTER RESULT", filter);
      return {
        ...state,
        products: res,
        // cart: [...state.cart, filter], //products: arr,
        cart: filterInCart(), //products: arr,
      };

    case POPULATE_DATABASE:
      const copyArray = [...action.payload];
      console.log("POP", action.payload);
      return {
        ...state,
        products: copyArray,
      };
    default:
      return state;
  }
};

export default cartReducer;
