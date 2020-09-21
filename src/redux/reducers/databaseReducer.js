import {
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
      userName: "ab",
      firstName: "",
      lastName: "",
      password: "123",
      email: "aa@gmail.com",
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
