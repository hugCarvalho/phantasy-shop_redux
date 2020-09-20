import React, { useEffect } from "react";
import "./Login.scss";
import "../../Login_Register/Login_Register_shared.scss";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

//To delete
const initDatabase = [
  {
    userName: "ab",
    firstName: "",
    lastName: "",
    password: "123",
    email: "test@gmail.com",
  },
  {
    userName: "cd",
    firstName: "",
    lastName: "",
    password: "345",
    email: "t2@gmail.com",
  },
];

const notifyUser = (type) => {
  if (type === "userDoesNotExist")
    toast.error("Username not found!", {
      position: toast.POSITION.TOP_CENTER,
      autoclose: 2000,
    });
  if (type === "passwordIncorrect")
    toast.error("password incorrect!", {
      position: toast.POSITION.TOP_CENTER,
      autoclose: 2000,
    });
  if (type === "loginSuccess")
    toast.success("Login successful!", {
      position: toast.POSITION.TOP_CENTER,
      autoclose: 2000,
    });
  if (type === "emailSent")
    toast.info("Email has been sent!... but not really... ", {
      position: toast.POSITION.TOP_CENTER,
      autoclose: 2000,
    });
};

const inputIsWrongInit = {
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

function Login() {
  // const [obj] = React.useState(initDatabase);
  const { register, handleSubmit, errors } = useForm();
  const [inputIsWrong, dispatch] = React.useReducer(reducer, inputIsWrongInit);
  // const [inputIsWrong, dispatch] = React.useReducer(reducer(inputIsWrongInit));

  const [forgotPassword, setForgotPassword] = React.useState(false);

  //SUBMIT
  const onSubmit = (data) => {
    const usernameExists = initDatabase.some(({ userName }) => {
      return userName.toLowerCase() === data.userName.toLowerCase();
    });
    if (usernameExists) {
      dispatch({ type: "username", value: false });
    } else {
      return dispatch({ type: "username", value: true });
    }

    //only runs if username exists. Better performant solution.
    const isPasswordCorrect = initDatabase.some(({ password }) => {
      return password === data.password;
    });
    if (isPasswordCorrect) {
      dispatch({ type: "password", value: false });
      return notifyUser("loginSuccess");
    } else {
      return dispatch({ type: "password", value: true });
    }
  };

  const submitSendPassword = (data) => {
    const { retrievePasswordEmail: email } = data;
    const emailExists = initDatabase.some((user) => {
      return user.email === email;
    });
    if (emailExists) {
      console.log("ok");
      notifyUser("emailSent");
      return dispatch({ type: "email", value: false });
    } else {
      return dispatch({ type: "email", value: true });
    }
  };

  useEffect(() => {
    console.log(forgotPassword);
  }, [forgotPassword]);
  console.log(inputIsWrong);
  return (
    <>
      <div className="container__form">
        <div className="wrapper__form">
          <h2>Log in</h2>
          {/* FORM */}
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* USERNAME */}
            <div className="userName">
              <br />
              <label htmlFor="user-name">Username*</label>
              <input
                // required
                type="text"
                name="userName"
                id="user-name"
                placeholder="Username"
                ref={register(handleSubmit)}
              />
              <div className="display-errorMsg">
                <p>{inputIsWrong.username && "Incorrect username"}</p>
                {/* <p>{errors.userName && errors.userName.message}</p> */}
                <p>{errors.password && errors.password.message}</p>
              </div>
            </div>
            <br />

            {/* PASSWORD */}
            <div className="password">
              <label htmlFor="password2">Password*</label>
              <input
                // required
                type="password"
                name="password"
                id="password2"
                placeholder="password"
                ref={register({
                  // required: true,
                })}
              />
            </div>

            {/* SUBMIT BUTTON */}
            <div className="display-errorMsg">
              <p>{inputIsWrong.password && "Incorrect password"}</p>
            </div>
            <button type="submit">Submit</button>
            <br />

            {/* FORGOT PASSWORD BUTTON */}
            <div>
              <div className="forgot-password">
                {/* TODO: don't forget to change this for using FN */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    setForgotPassword(true);
                  }}>
                  forgot password?
                </button>
              </div>
            </div>

            {/* FORGOT PASSWORD FORM */}
          </form>
          <form onSubmit={handleSubmit(submitSendPassword)}>
            {forgotPassword && (
              <div className="wrapper__retrieve-password">
                <label htmlFor="retrieve-password-email">Email*</label>

                <input
                  // type="email"
                  name="retrievePasswordEmail"
                  id="retrieve-password-email"
                  placeholder="email to retrieve password"
                  ref={register}
                />
                <p>{inputIsWrong.email && "Incorrect email!"}</p>
                <button
                  className="btn-send"
                  type="submit"
                  // onClick={(e, data) => {
                  //   console.log("DATA2", data);
                  //   console.log(e.target.textContent);
                  //   initDatabase.find((user) => {
                  //     return user.email === "";
                  //   });
                  // }}
                >
                  Send
                </button>
              </div>
            )}
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
