export const LOG_IN = "LOG_IN";
export const LOG_OUT = "LOG_OUT";

export const toggleLogIn = () => {
  return {
    type: LOG_IN,
  };
};
export const toggleLogOut = () => {
  return {
    type: LOG_OUT,
  };
};
