import fetchItemsReducer from "./fetchItemsReducer";
import itemCartReducer from "./itemCartReducer";
import { combineReducers } from "redux";
import calculationsReducer from "./calculationsReducer";

const rootReducer = combineReducers({
  fetchItems: fetchItemsReducer,
  cart: itemCartReducer,
  calculate: calculationsReducer,
});

export default rootReducer;
