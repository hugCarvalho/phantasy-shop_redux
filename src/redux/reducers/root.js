import fetchItemsReducer from "./fetchItemsReducer";
import itemCartReducer from "./itemCartReducer";
import calculationsReducer from "./calculationsReducer";
import databaseReducer from "./databaseReducer";
import toggleLogInOutReducer from "./toggleLogInOutReducer";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  fetchItems: fetchItemsReducer,
  cart: itemCartReducer,
  calculate: calculationsReducer,
  database: databaseReducer,
  toggleLogInOut: toggleLogInOutReducer,
});

export default rootReducer;
