export const VALIDATE_USER_DATA = "VALIDATE_USER_DATA";
export const PUSH_USER_DATA = "PUSH_USER_DATA";

export const validateUserData = () => {
  return {
    type: VALIDATE_USER_DATA,
  };
};

export const pushUserData = (userDataObj) => {
  return {
    type: PUSH_USER_DATA,
    payload: userDataObj,
  };
};
