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

//TODO: put calcs in dif file & import them
//Randomizes num of days available and price for actor whose ID is greater than 20
const makeRandomNum = (name) => {
  return name === "stock"
    ? +(Math.random() * 10).toFixed()
    : +Math.round(Math.random() * 400);
};

//Sets prices based on item id
const setPrice = (id) => {
  if (id === 1) return 10000;
  else if (id > 1 && id <= 3) return 5000;
  else if (id > 3 && id <= 9) return 1200;
  else if (id > 9 && id <= 20) return 800;
  else return makeRandomNum();
};

///////////////

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
          item.inCart = false;
          item.price = setPrice(item.char_id);
          item.amount = 0;
          item.total = 0;
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

    case FETCH_ITEMS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default fetchItemsReducer;
