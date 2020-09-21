import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./Login.scss";
import "../../Login_Register/Login_Register_shared.scss";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { toggleLogIn } from "../../../redux/actions/loginActions";
import { Redirect, Route } from "react-router-dom";

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
  console.log(toast.options);
  if (type === "4demoPurposes")
    toast.warning(
      "Maybe you need to register first. For demo purposes, you can login using `ab` as username and `123` as password ",
      {
        // position: toast.POSITION.TOP_CENTER,
        autoclose: 4000,
      }
    );
  // if (type === "passwordIncorrect")
  //   toast.error("password incorrect!", {
  //     position: toast.POSITION.TOP_CENTER,
  //     autoclose: 2000,
  //   });
  if (type === "loginSuccess")
    toast.success("Login successful! Rest of login logic will be added soon", {
      position: toast.POSITION.TOP_LEFT,
      autoclose: 6000,
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
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const [logIn, setLogIn] = React.useState(false); //to be removed
  // const [obj] = React.useState(initDatabase);
  const { register, handleSubmit, errors } = useForm();
  const [inputIsWrong, setInputIsWrong] = React.useReducer(reducer, inputIsWrongInit);
  // const [inputIsWrong, dispatch] = React.useReducer(reducer(inputIsWrongInit));
  const dispatch = useDispatch();
  const [forgotPassword, setForgotPassword] = React.useState(false);

  //SUBMIT
  const onSubmit = (data) => {
    const usernameExists = initDatabase.some(({ userName }) => {
      return userName.toLowerCase() === data.userName.toLowerCase();
    });
    if (usernameExists) {
      setInputIsWrong({ type: "username", value: false });
    } else {
      notifyUser("4demoPurposes");
      return setInputIsWrong({ type: "username", value: true });
    }

    //only runs if username exists. Better performant solution.
    const isPasswordCorrect = initDatabase.some(({ password }) => {
      return password === data.password;
    });
    if (isPasswordCorrect) {
      setInputIsWrong({ type: "password", value: false });
      notifyUser("loginSuccess");
      setLogIn(true);
      return dispatch(toggleLogIn());
    } else {
      notifyUser("4demoPurposes");

      return setInputIsWrong({ type: "password", value: true });
    }
  };

  const submitSendPassword = (data) => {
    const { retrievePasswordEmail: email } = data;
    const emailExists = initDatabase.some((user) => {
      return user.email === email;
    });
    if (emailExists) {
      notifyUser("emailSent");
      return setInputIsWrong({ type: "email", value: false });
    } else {
      return setInputIsWrong({ type: "email", value: true });
    }
  };

  return (
    <>
      <div className="container__form">
        <div className="wrapper__form">
          <h2>Log in</h2>
          {/* FORM */}
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* USERNAME */}
            <div className="userName">
              <label htmlFor="user-name">Username*</label>
              <input
                required
                type="text"
                name="userName"
                id="user-name"
                placeholder="Username"
                ref={register(handleSubmit)}
              />
              <div className="display-errorMsg">
                <p>{inputIsWrong.username && "Incorrect username"}</p>
              </div>
            </div>

            {/* PASSWORD */}
            <div className="password">
              <label htmlFor="password2">Password*</label>
              <input
                required
                type="password"
                name="password"
                id="password2"
                placeholder="password"
                ref={register}
              />
            </div>

            {/* SUBMIT BUTTON */}
            <div className="display-errorMsg">
              <p>{inputIsWrong.password && "Incorrect password"}</p>
            </div>
            <button type="submit">Submit</button>

            {/* FORGOT PASSWORD TEXT */}
            <div>
              <div className="forgot-password">
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
          </form>

          {/* FORGOT PASSWORD FORM */}
          <form onSubmit={handleSubmit(submitSendPassword)}>
            {forgotPassword && (
              <div className="wrapper__retrieve-password">
                <label htmlFor="retrieve-password-email">Email*</label>

                <input
                  type="email"
                  name="retrievePasswordEmail"
                  id="retrieve-password-email"
                  placeholder="email to retrieve password"
                  ref={register}
                />
                <div className="display-errorMsg">
                  <p>{inputIsWrong.email && "Incorrect email"}</p>
                </div>
                <button className="btn-send" type="submit">
                  Send
                </button>
              </div>
            )}
          </form>
        </div>
      </div>
      <Route>{logIn && <Redirect push to="/items" />}</Route>
    </>
  );
}

export default Login;
