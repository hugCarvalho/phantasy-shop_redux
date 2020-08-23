import { CALCULATE_TOTAL } from "../actions/calculationsActions";

const initState = {
  tax: 0.1,
  shipping: { normal: 6, express: 11, free: 0 },
  total: 0,
};

const calculationsReducer = (state = initState, action) => {
  switch (action.type) {
    case CALCULATE_TOTAL:
      const cart = action.payload.cart;
      // console.log(
      //   "STATE",
      //   state,
      //   "calculationsReducer -> action.payload.cart",
      //   action.payload
      // );

      const calculateTotal = () => {
        // console.log("cart", cart);
        return cart.reduce((sum, item) => {
          sum += item.amount * item.price;
          return sum;
        }, 0);
      };

      return {
        ...state,
        // ...cart,
        total: calculateTotal(),
      };
    default:
      return state;
  }
};

export default calculationsReducer;
