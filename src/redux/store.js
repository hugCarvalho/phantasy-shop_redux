import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
// import logger from "redux-logger"
import thunk from "redux-thunk";
// import {connect} from "react-redux"

import fetchReducer from "../redux/reducers/itemsReducer";

const middleware = [thunk];

const store = createStore(
  fetchReducer,
  composeWithDevTools(
    applyMiddleware(...middleware)
    // other store enhancers if any
  )
);

export default store;
