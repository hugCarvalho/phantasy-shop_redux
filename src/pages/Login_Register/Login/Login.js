import React from "react";
// import "./Login.scss";
// import "../../Login_Register/Login_Register_shared.scss";
import { useForm } from "react-hook-form";
const initDatabase = [
  {
    userName: "pepito",
    firstName: "",
    lastName: "",
    password: "123a",
    email: "",
  },
  {
    userName: "Arggg",
    firstName: "",
    lastName: "",
    password: "",
    email: "",
  },
];

function Login() {
  const [obj] = React.useState(initDatabase);
  const [inputIsWrong, setInputIsWrong] = React.useState(false);
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    console.log("DATA", data);
    const userData = Object.values(obj);
    const validUser = userData.find((item) => {
      console.log(item.password, data.password);
      return (
        item.userName.toLowerCase() === data.userName.toLowerCase() &&
        item.password === data.password
      );
    });
    // const res = validUser();
    if (!validUser) setInputIsWrong(true);
    else setInputIsWrong(false);
  };
  return (
    <div>
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
                required
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
                //required
                ref={register({
                  // required: true,
                  // minLength: {
                  //   value: 7,
                  //   message: "must be at least 7 characters long",
                  // },
                })}
              />
            </div>
            <button>Submit</button>
            <br />
            <p>{inputIsWrong && "Incorrect user or password."}</p>
            <p>{errors.userName && errors.userName.message}</p>
            <p>{errors.password && errors.password.message}</p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;