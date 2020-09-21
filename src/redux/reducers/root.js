import fetchItemsReducer from "./fetchItemsReducer";
import itemCartReducer from "./itemCartReducer";
import calculationsReducer from "./calculationsReducer";
import LoginRegisterReducer from "./LoginRegisterReducer";
import toggleLogInOutReducer from "./toggleLogInOutReducer";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  fetchItems: fetchItemsReducer,
  cart: itemCartReducer,
  calculate: calculationsReducer,
  userDatabase: LoginRegisterReducer,
  toggleLogInOut: toggleLogInOutReducer,
});

export default rootReducer;
