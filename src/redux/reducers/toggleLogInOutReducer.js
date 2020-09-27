import { LOG_IN, LOG_OUT } from "../actions/loginActions";

const isLoggedInInit = {
  // isLoggedIn: true,
  isLoggedIn: false,
};

const toggleLogInOutReducer = (state = isLoggedInInit, action) => {
  switch (action.type) {
    case LOG_IN:
      return { ...state, isLoggedIn: true };
    case LOG_OUT:
      return { ...state, isLoggedIn: false };
    default:
      return state;
  }
};

export default toggleLogInOutReducer;
