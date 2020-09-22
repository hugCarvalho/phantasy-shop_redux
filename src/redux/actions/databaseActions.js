export const VALIDATE_USER_DATA = "VALIDATE_USER_DATA";
export const PUSH_USER_DATA = "PUSH_USER_DATA";
export const TOGGLE_LOG_IN_OUT = "TOGGLE_LOG_IN_OUT";

// export const validateUserData = () => {
//   return {
//     type: VALIDATE_USER_DATA,
//   };
// };

export const pushUserData = (userName, password, email, name = "", lastName = "") => {
  return {
    type: PUSH_USER_DATA,
    payload: {
      firstName: name,
      lastName: lastName,
      userName: userName,
      password: password,
      email: email,
    },
  };
};
