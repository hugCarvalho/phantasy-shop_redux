import React, { useState, useEffect } from "react";
import "./Register.scss";
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

function Register() {
  const { register, handleSubmit, watch, errors } = useForm({ mode: "onBlur" }); //onChange | onSubmit | all
  const newsletter = watch("newsletter"); //will listen to changes on the input name field "newsletter"
  const [userDatabase, setUserDatabase] = useState(initDatabase);

  // console.log(useForm());

  const onSubmit = (data) => {
    const copy = [...userDatabase];
    console.log("data :>> ", data);
    // console.log(useForm().control.mode);

    //validate userName - make fn
    const checkUsername = copy.filter((item) => {
      return item.userName.toLowerCase() === data.userName.toLowerCase();
    });
    if (checkUsername) {
      console.log("RETURNED, USER ALREADY EXISTS");
      //return;
    }

    copy.push({
      userName: data.userName,
      firstName: data.firstName,
      lastName: data.lastName,
      password: data.password,
      email: data.email,
    });
    setUserDatabase(copy);
  };

  useEffect(() => {
    //console.log("userDatabase :>> ", userDatabase);
    //console.log("watch", watch());
    // console.log(newsletter);
  }, [userDatabase, newsletter]);
  return (
    <>
      <div className="Register">
        <div className="wrapper__form">
          <h2>Register</h2>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="fullName">
              <label htmlFor="first-name">First Name</label>
              <input
                type="text"
                name="firstName"
                id="first-name"
                placeholder="First Name..."
                ref={register(handleSubmit)}
              />
            </div>
            <br />
            <div className="fullName">
              <label htmlFor="last-name">Last name</label>
              <input
                type="text"
                name="lastName"
                id="last-name"
                placeholder="Last Name..."
                ref={register(handleSubmit)}
              />
            </div>
            <br />
            <div className="email">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="your@email.com"
                ref={register(handleSubmit)}
              />
            </div>
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
              <label htmlFor="password">Password*</label>
              <input
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
              <small>{errors.password && errors.password.message}</small>
            </div>

            {/* Extended */}
            <div className="extended">
              <label htmlFor="newsletter" id="label-newsletter">
                Receive newsletter
              </label>
              <input
                type="checkbox"
                name="newsletter"
                id="newsletter"
                ref={register}
              />
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

            <button>Submit</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Register;
