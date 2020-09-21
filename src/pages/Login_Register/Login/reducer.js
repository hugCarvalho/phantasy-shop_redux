export const inputIsWrongInit = {
  username: false,
  password: false,
  email: false,
};

const reducer = (state = inputIsWrongInit, action) => {
  switch (action.type) {
    case "username":
      return { ...state, username: action.value };
    case "password":
      return { ...state, password: action.value };
    case "email":
      return { ...state, email: action.value };
    default:
      throw new Error();
  }
};

export default reducer;
