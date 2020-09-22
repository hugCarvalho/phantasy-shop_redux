import React, { useEffect } from "react";
import "../../Login_Register/Login_Register_shared.scss";
import { Redirect, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { pushUserData } from "../../../redux/actions/databaseActions";

//Toast
const notifyUser = (type) => {
  if (type === "userName") {
    return toast.error("User already exists, please choose another name", {
      position: toast.POSITION.TOP_CENTER,
      autoclose: 3000,
    });
  }
  if (type === "email") {
    return toast.error("Email already exists, log in or choose another email", {
      position: toast.POSITION.TOP_CENTER,
      autoclose: 3000,
    });
  }
  if (type === "success") {
    return toast.success("Account created! Please login", {
      position: toast.POSITION.TOP_CENTER,
      autoclose: 1000,
    });
  }
};

function Register() {
  const dispatch = useDispatch();
  const userDatabase = useSelector((state) => state.database.userDatabase);
  const [isRegistered, setIsRegistered] = React.useState(false);
  //FORM
  const { register, handleSubmit, watch, errors } = useForm({
    mode: "onChange",
  }); //onChange | onSubmit | onBlur | all
  const newsletter = watch("newsletter"); //listens to changes on the input name field "newsletter"

  // console.log(userDatabase);
  const onSubmit = (data) => {
    const { userName, password, email, firstName, lastName } = data;
    const checkIfUserExists = userDatabase.filter((item) => {
      return item.userName === userName;
    });
    //aborts before running the next search if match is found - improves performance
    if (checkIfUserExists.length !== 0) {
      return notifyUser("userName");
    }

    const checkIfEmailExists = userDatabase.filter((item) => item.email === email);
    if (checkIfEmailExists.length !== 0) {
      return notifyUser("email");
    }
    dispatch(pushUserData(userName, password, email));

    notifyUser("success");

    //document.querySelector("form").reset();
    return setIsRegistered(true);
  };

  useEffect(() => {
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
            {/* TODO: replace <br>s with css code */}
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
                // required
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
            <button type="submit">Submit</button>
          </form>
        </div>
        <Route>{isRegistered && <Redirect push to="/login" />}</Route>
      </div>
    </>
  );
}

export default Register;
