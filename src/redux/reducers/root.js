import fetchItemsReducer from "./fetchItemsReducer";
import cartReducer from "./cartReducer";
import { combineReducers } from "redux";
import calculationsReducer from "./calculationsReducer";

const rootReducer = combineReducers({
  fetchItems: fetchItemsReducer,
  cart: cartReducer,
  calculate: calculationsReducer,
});

export default rootReducer;
