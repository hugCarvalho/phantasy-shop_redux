import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import "../../Login_Register/Login_Register_shared.scss";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const database = [
  {
    userName: "ai",
    password: "",
    email: "aa@gmail.com",
  },
  {
    userName: "qw",
    password: "",
    email: "bb@gmail.com",
  },
];

//Toast
const notifyUser = (type) => {
  if (type === "userName") {
    return toast.error("User already exists, please choose another name", {
      position: toast.POSITION.TOP_CENTER,
      autoclose: 3000,
    });
  }
};

function Register() {
  // const dispatch = useDispatch();
  const userDatabase = useSelector((state) => state.userDatabase);
  //UseForm
  const { register, handleSubmit, watch, errors } = useForm({
    mode: "onChange",
  }); //onChange | onSubmit | onBlur | all
  const newsletter = watch("newsletter"); //listens to changes on the input name field "newsletter"

  // console.log(useForm());
  // console.log("userDatabase", userDatabase);

  const onSubmit = (data) => {
    const { userName, password, email } = data;

    const checkIfUserExists = database.filter((item) => {
      console.log("MEEEEE");
      return item.userName === userName;
    });
    //aborts before running the next search if match is found - improves performance
    if (checkIfUserExists.length !== 0) {
      return notifyUser("userName");
    }

    const checkIfEmailExists = database.filter((item) => item.email === email);
    if (checkIfEmailExists.length !== 0) {
      console.log("Email already exists, please choose another email");
      return;
    }

    database.push({
      firstName: "",
      lastName: "",
      userName: userName,
      password: password,
      email: email,
    });

    console.log(database);
    console.log("data", data);
    return document.querySelector("form").reset();
  };

  // const verifyUserInput = (userDatabase, userInput) => {
  //   // console.log(useForm().control.mode);
  //   console.log("copy", userDatabase);
  // };

  useEffect(() => {
    //console.log("userDatabase :>> ", userDatabase);
    //console.log("watch", watch());
    // console.log(newsletter);
  }, [userDatabase, newsletter]);
  return (
    <>
      <div className="container__form">
        <div className="wrapper__form">
          <h2>Register</h2>
          {/* FIRST NAME */}
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="fullName">
              <label htmlFor="first-name">First Name</label>
              <input
                type="text"
                name="firstName"
                id="first-name"
                placeholder="First Name..."
                ref={register}
              />
            </div>
            <br />
            {/* LAST NAME */}
            <div className="fullName">
              <label htmlFor="last-name">Last name</label>
              <input
                type="text"
                name="lastName"
                id="last-name"
                placeholder="Last Name..."
                ref={register}
              />
            </div>
            <br />
            {/* EMAIL */}
            <div className="email">
              <label htmlFor="email">Email*</label>
              <input
                required
                type="email"
                name="email"
                id="email"
                placeholder="your@email.com"
                ref={register}
              />
            </div>
            {/* USERNAME */}
            <div className="userName">
              <br />
              <label htmlFor="user-name">User name*</label>
              <input
                required
                type="text"
                name="userName"
                id="user-name"
                placeholder="User name"
                ref={register}
              />
            </div>
            <br />
            {/* PASSWORD */}
            <div className="password">
              <label htmlFor="password">Password*</label>
              <input
                required
                type="password"
                name="password"
                id="password"
                placeholder="password"
                //required
                ref={register({
                  required: true,
                  minLength: {
                    value: 7,
                    message: "must be at least 7 characters long",
                  },
                })}
              />
            </div>

            <div className="info">
              <small style={{ color: "red" }}>
                {errors.password && errors.password.message}
              </small>
              <p>* required fields</p>
            </div>

            {/* Extended NEWSLETTER */}
            <div className="extended">
              <br></br>
              <label htmlFor="newsletter" id="label-newsletter">
                Receive newsletter
              </label>
              <input type="checkbox" name="newsletter" id="newsletter" ref={register} />
            </div>
            <br />

            <br />
            {newsletter && (
              <div className="choices">
                <label htmlFor="choices"></label>
                <select name="choices" ref={register}>
                  <option value="all">all</option>
                  <option value="games">actors</option>
                  <option value="movies">movies</option>
                  <option value="books">books</option>
                </select>
              </div>
            )}
            {/* //ONCLICK */}
            <button onClick={null}>Submit</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Register;
