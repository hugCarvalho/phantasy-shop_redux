import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
// import logger from "redux-logger"
import thunk from "redux-thunk";
// import {connect} from "react-redux"

import root from "./reducers/root";

const middleware = [thunk];

const store = createStore(
  root,
  composeWithDevTools(
    applyMiddleware(...middleware)
    // other store enhancers if any
  )
);

export default store;
