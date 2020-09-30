import React, { useEffect } from "react";
import "./Login.scss";
import { Redirect, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
//actions
import { toggleLogIn } from "../../../redux/actions/loginActions";
import loginReducer, { inputIsWrongInit } from "./reducer.js";

//TODO: refactor
//TODO: automatic focus forgot-password-input-text on "forgot password" click

//Toast: delete after project is done
const notifyUser = (type) => {
  console.log(toast.options);
  if (type === "4demoPurposes")
    toast.warning(
      "Maybe you need to register first. For demo purposes, you can login using `ab` as username and `123` as password ",
      {
        // position: toast.POSITION.TOP_CENTER,
        autoClose: 4000,
      }
    );
  if (type === "loginSuccess")
    toast.success(
      "Login successful! Please note this is an ongoing project, some functionalities are still being implemented",
      {
        position: toast.POSITION.TOP_LEFT,
        autoClose: 6000,
      }
    );
  if (type === "emailSent")
    toast.info("Email has been sent!... but not really... ", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 2000,
    });

  if (type === "onload") {
    toast.info(
      "For demo purposes msg: you can login by either completing the register form or by using `ab` as username and `123` as password",
      {
        position: toast.POSITION.BOTTOM_CENTER,
        autoClose: false,
      }
    );
  }
};

function Login() {
  // const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const userDatabase = useSelector((state) => state.database.userDatabase);
  const dispatch = useDispatch();
  //Local state
  const [logIn, setLogIn] = React.useState(false);
  const [forgotPassword, setForgotPassword] = React.useState(false);
  const [inputIsWrong, setInputIsWrong] = React.useReducer(
    loginReducer,
    inputIsWrongInit
  );
  //Form
  const { register, handleSubmit } = useForm();

  useEffect(() => {
    notifyUser("onload");
  }, []);

  //SUBMIT TODO: break into smaller functions
  const onSubmit = (data) => {
    const usernameExists = userDatabase.some(({ userName }) => {
      return userName.toLowerCase() === data.userName.toLowerCase();
    });

    if (usernameExists) {
      setInputIsWrong({ type: "username", value: false });
    } else {
      notifyUser("4demoPurposes");
      return setInputIsWrong({ type: "username", value: true });
    }

    //only runs if username exists. More performant solution.
    const isPasswordCorrect = userDatabase.some(({ password }) => {
      return password === data.password;
    });

    if (isPasswordCorrect) {
      setInputIsWrong({ type: "password", value: false });
      setLogIn(true);
      notifyUser("loginSuccess");
      return dispatch(toggleLogIn());
    } else {
      notifyUser("4demoPurposes");
      return setInputIsWrong({ type: "password", value: true });
    }
  };

  //On Submit email
  const submitSendPassword = (data) => {
    const { retrievePasswordEmail: email } = data;
    const emailExists = userDatabase.some((user) => {
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
    <div className="Login">
      <div className="wrapper__all">
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
                }}
              >
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

      {/* To be changed or removed */}
      <Route>{logIn && <Redirect push to="/items" />}</Route>
    </div>
  );
}

export default Login;
