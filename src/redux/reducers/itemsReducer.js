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

const fetchItemsReducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_ITEMS_REQUEST:
        console.log('state', state, "action", action)
      return {
        ...state,
        loading: true,
      };
    case FETCH_ITEMS_SUCCESS:
        console.log('state', state, "action", action)

      return {
        ...state,
        loading: false,
        items: action.payload,

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
