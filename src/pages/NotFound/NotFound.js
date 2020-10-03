import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.scss";

//TODO: improve

function NotFound() {
  return (
    <div className="NotFound">
      <h1>PAGE NOT FOUND!</h1>
      <br></br>
      <h2>
        Use the menu to navigate back to the website or
        <Link to="/">
          {" "}
          <u>click here</u>
        </Link>
      </h2>
    </div>
  );
}

export default NotFound;
