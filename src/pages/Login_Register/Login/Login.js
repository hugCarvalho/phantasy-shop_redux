import React from "react";
import "./Login.scss";
import "../../Login_Register/Login_Register_shared.scss";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const initDatabase = [
  {
    userName: "ab",
    firstName: "",
    lastName: "",
    password: "123",
    email: "",
  },
  {
    userName: "cd",
    firstName: "",
    lastName: "",
    password: "345",
    email: "",
  },
];

const notifyUser = (type) => {
  if (type === "userDoesNotExist")
    toast.error("Username not found!", {
      position: toast.POSITION.TOP_CENTER,
      autoclose: 2000,
    });
  if (type === "passwordIncorrect")
    toast.error("password doesn't exist!", {
      position: toast.POSITION.TOP_CENTER,
      autoclose: 2000,
    });
  if (type === "loginSuccess")
    toast.success("Login successful!", {
      position: toast.POSITION.TOP_CENTER,
      autoclose: 2000,
    });
};

function Login() {
  // const [obj] = React.useState(initDatabase);
  const [inputIsWrong] = React.useState(false);
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log("DATA", data);

    const checkIfUserNameExists = initDatabase.find(({ userName }) => {
      return userName.toLowerCase() === data.userName.toLowerCase();
    });
    if (!checkIfUserNameExists) return notifyUser("userDoesNotExist");
    const checkIfPasswordIsCorrect = initDatabase.find(({ password }) => {
      console.log(password);
      return password === data.password ? notifyUser("loginSuccess") : null;
    });
    if (!checkIfPasswordIsCorrect) notifyUser("passwordIncorrect");
    console.log(checkIfUserNameExists);
    console.log(checkIfPasswordIsCorrect);
    // const validUser = userData.find((item) => {
    //   console.log(item.password, data.password);
    //   return (
    //     item.userName.toLowerCase() === data.userName.toLowerCase() &&
    //     item.password === data.password
    //   );
    // });
    // const res = validUser();
    // if (!validUser) setInputIsWrong(true);
    // else setInputIsWrong(false);
  };

  // const checkForExistingEmail = (email) => {
  //   if (email === "email in database") console.log("email sent");
  //   else console.log("this email doesn't exist in our database");
  // };

  return (
    <>
      <div className="container__form">
        <div className="wrapper__form">
          <h2>Log in</h2>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="userName">
              <br />
              <label htmlFor="user-name">User name*</label>
              <input
                type="text"
                name="userName"
                id="user-name"
                placeholder="User name"
                // required
                ref={register(handleSubmit)}
              />
            </div>
            <br />
            <div className="password">
              <label htmlFor="password2">Password*</label>
              <input
                type="password"
                name="password"
                id="password2"
                placeholder="password"
                // required
                ref={register({
                  // required: true,
                })}
              />
            </div>
            <div className="display-errorMsg">
              <p>{inputIsWrong && "Incorrect user name or password"}</p>
              {/* <p>{errors.userName && errors.userName.message}</p>
            <p>{errors.password && errors.password.message}</p> */}
            </div>
            <button type="submit">Submit</button>
            <br />
            <div>
              <div className="forgot-password">
                {/* TODO: don't forget to change this for using FN */}
                {/* <button onClick={() => setInputIsWrong(true)}>
                  forgot password?
                </button> */}
              </div>
            </div>
            {inputIsWrong && (
              <div className="wrapper__retrieve-password">
                <input
                  type="text"
                  name="retrieve-password"
                  id="retrieve-password"
                  placeholder="your email..."
                />
                <button className="btn-send" type="submit">
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
