import React, { useEffect } from "react";
import "./Register.scss";
import { Redirect, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { pushUserData } from "../../../redux/actions/databaseActions";

// TODO: replace <br>s with css code
// TODO: move newsletter to new component

//Toast- will be removed once project is completed
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
    return toast.success(
      "Account created! Please login. This msg exists for demo purposes only ",
      {
        position: toast.POSITION.TOP_CENTER,
        autoclose: 3000,
      }
    );
  }

  if (type === "onload") {
    return toast.info(
      "Demo purposes: if you complete the register form, you will be able to login with that data. Use fake data",
      {
        position: toast.POSITION.BOTTOM_CENTER,
        autoClose: false,
      }
    );
  }
};
//END of Toast

function Register() {
  const dispatch = useDispatch();
  const userDatabase = useSelector((state) => state.database.userDatabase);
  //Local state
  const [isRegistered, setIsRegistered] = React.useState(false);
  const [emailDotWarning, setEmailDotWarning] = React.useState(false);
  //FORM
  const { register, handleSubmit, watch, errors } = useForm({
    mode: "onChange",
  }); //onChange | onSubmit | onBlur | all
  const newsletter = watch("newsletter"); //listens to changes on the input name field "newsletter"

  //remove once project done
  useEffect(() => {
    notifyUser("onload");
  }, []);

  useEffect(() => {
    // console.log(newsletter);
  }, [userDatabase, newsletter]);

  const onSubmit = (data) => {
    //TODO: break verification into own functions
    const { userName, password, email, firstName, lastName } = data;
    const checkIfUserExists = userDatabase.filter((item) => {
      return item.userName === userName;
    });

    if (checkIfUserExists.length !== 0) {
      //Performance gain - aborts before running the next search if match is found
      return notifyUser("userName");
    }

    const checkEmailHasDot = (() => {
      const firstSlice = data.email.slice(data.email.indexOf("@"));
      const dotIndex = firstSlice.indexOf(".");
      const secondSlice = firstSlice.slice(dotIndex + 1);

      if (dotIndex === -1) return false; //no "."
      //prettier-ignore
      if (secondSlice.length < 2) return false; //less than 2 letters after "."
      else return true;
    })();

    if (checkEmailHasDot) setEmailDotWarning(false);
    if (!checkEmailHasDot) return setEmailDotWarning(true);

    const checkIfEmailExists = userDatabase.filter((item) => item.email === email);

    if (checkIfEmailExists.length !== 0) return notifyUser("email");

    dispatch(pushUserData(userName, password, email));
    notifyUser("success");

    //document.querySelector("form").reset();
    return setIsRegistered(true);
  };

  return (
    <div className="Register">
      <div className="wrapper__all">
        <h2>Register</h2>
        {/* FIRST NAME */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="firstName">
            <label htmlFor="first-name">First Name</label>
            <input
              type="text"
              name="firstName"
              id="first-name"
              placeholder="First Name..."
              ref={register}
            />
          </div>

          {/* LAST NAME */}
          <div className="lastName">
            <label htmlFor="last-name">Last name</label>
            <input
              type="text"
              name="lastName"
              id="last-name"
              placeholder="Last Name..."
              ref={register}
            />
          </div>

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
            <div className="display-errorMsg">
              <p>{emailDotWarning && "email format not accepted"}</p>
            </div>
          </div>

          {/* USERNAME */}
          <div className="userName">
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

          {/* PASSWORD */}
          <div className="password">
            <label htmlFor="password">Password*</label>
            <input
              required
              type="password"
              name="password"
              id="password"
              placeholder="password"
              ref={register({
                required: false,
                minLength: {
                  value: 7,
                  message: "must be at least 7 characters long",
                },
              })}
            />
          </div>

          {/* INFO */}
          <div className="required-fields-text">
            <small style={{ color: "red" }}>
              {errors.password && errors.password.message}
            </small>
            <p>* required fields</p>
          </div>

          {/* NEWSLETTER */}
          <div className="newsletter ">
            <label htmlFor="newsletter" id="label-newsletter">
              Receive newsletter
            </label>
            <input type="checkbox" name="newsletter" id="newsletter" ref={register} />

            <div
              className={`choices ${newsletter ? "show-visibility" : "hide-visibility"}`}
            >
              <label htmlFor="choices"></label>
              <select name="choices" ref={register}>
                <option value="all">all</option>
                <option value="games">actors</option>
                <option value="movies">movies</option>
                <option value="books">books</option>
              </select>
            </div>
          </div>

          {/*SUBMIT BTN */}
          <button type="submit">Submit</button>
        </form>
      </div>
      <Route>{isRegistered && <Redirect push to="/login" />}</Route>
    </div>
  );
}

export default Register;
