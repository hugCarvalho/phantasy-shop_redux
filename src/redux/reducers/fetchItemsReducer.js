import {
  FETCH_ITEMS_REQUEST,
  FETCH_ITEMS_SUCCESS,
  FETCH_ITEMS_FAILURE,
} from "../actions/asyncAction";

const initState = {
  loading: false,
  items: [],
  error: "",
};

const makeRandomNum = (name) => {
  return name === "stock"
    ? (Math.random() * 10).toFixed()
    : Math.round(Math.random() * 400);
};

const setPrice = (id) => {
  if (id === 1) return 10000;
  else if (id > 1 && id < 4) return 5000;
  else if (id > 4 && id < 9) return 1200;
  else if (id > 9 && id < 20) return 800;
  else return makeRandomNum();
};

const fetchItemsReducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_ITEMS_REQUEST:
      // console.log("state", state, "action", action);
      return {
        ...state,
        loading: true,
      };
    case FETCH_ITEMS_SUCCESS:
      const addNecessaryObjEntries = () => {
        const data = action.payload;
        return data.map((item) => {
          item.price = setPrice(item.char_id);
          item.amount = 0;
          item.inCart = false;
          item.stock = makeRandomNum("stock");
          return item;
        });
      };

      const finalData = addNecessaryObjEntries();
      return {
        ...state,
        loading: false,
        items: finalData,
      };
    default:
      return state;
    case FETCH_ITEMS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
  }
};

export default fetchItemsReducer;
