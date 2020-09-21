import {
  TOGGLE_LOG_IN_OUT,
  VALIDATE_USER_DATA,
  // PUSH_USER_DATA,
} from "../actions/LoginRegisterActions";

const initState = {
  userDatabase: [
    {
      userName: "test",
      firstName: "",
      lastName: "",
      password: "test21",
      email: "test@gmail.com",
      // emails: {
      //   inbox: [],
      //   new: [],
      //   draft: [],
      //   deleted: []
      // }
    },
    {
      userName: "Arggg",
      firstName: "",
      lastName: "",
      password: "arggg21",
      email: "arggg@gmail.com",
    },
  ],
};

const loginRegisterReducer = (state = initState, action) => {
  switch (action.type) {
    case VALIDATE_USER_DATA:
      return {
        ...state,
      };

    default:
      return state;
  }
};

export default loginRegisterReducer;
