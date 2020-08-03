import fetchItemsReducer from "./fetchItemsReducer";
import cartReducer from "./cartReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  fetchItems: fetchItemsReducer,
  cart: cartReducer,
});

export default rootReducer;
