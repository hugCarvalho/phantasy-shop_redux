import {
  // VALIDATE_USER_DATA,
  PUSH_USER_DATA,
} from "../actions/databaseActions";

const initState = {
  userDatabase: [
    {
      userName: "test",
      firstName: "",
      lastName: "",
      password: "test123",
      email: "test@gmail.com",
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

const databaseReducer = (state = initState, action) => {
  switch (action.type) {
    case PUSH_USER_DATA:
      console.log("databaseReducer payload:", action.payload);
      state.userDatabase.push(action.payload);
      return {
        ...state,
      };

    default:
      return state;
  }
};

export default databaseReducer;
