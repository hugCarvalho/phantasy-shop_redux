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
};

const inputIsWrongInit = {
  username: false,
  password: false,
  email: false,
};

function Login() {
  // const [obj] = React.useState(initDatabase);
  const { register, handleSubmit, errors } = useForm();
  const [inputIsWrong, setInputIsWrong] = React.useState(inputIsWrongInit);
  const [forgotPassword, setForgotPassword] = React.useState(false);

  const onSubmit = (data) => {
    const checkIfUserNameExists = initDatabase.find(({ userName }) => {
      return userName.toLowerCase() === data.userName.toLowerCase();
    });
    if (!checkIfUserNameExists) return notifyUser("userDoesNotExist");
    //only runs if username exists. Performance gain.
    const checkIfPasswordIsCorrect = initDatabase.find(({ password }) => {
      return password === data.password ? notifyUser("loginSuccess") : null;
    });
    if (!checkIfPasswordIsCorrect) notifyUser("passwordIncorrect");

    console.log("DATA", data);
    // console.log(checkIfUserNameExists);
    // console.log(checkIfPasswordIsCorrect);
    // const res = validUser();
    // if (!validUser) setInputIsWrong(true);
    // else setInputIsWrong(false);
  };

  const submitSendPassword = (data) => {
    const { retrievePasswordEmail: email } = data;
    console.log("MEMEE", data);
    const emailExists = initDatabase.some((user) => {
      console.log(user, email);
      return user.email === email;
    });
    console.log(inputIsWrong.email.error);
    return emailExists
      ? console.log("ok")
      : setInputIsWrong({ ...inputIsWrong, email: true });
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
                <p>{inputIsWrong && "Incorrect user name"}</p>
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
              <p>{inputIsWrong && "Incorrect password"}</p>
              <p>{errors.userName && errors.userName.message}</p>
              <p>{errors.password && errors.password.message}</p>
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
