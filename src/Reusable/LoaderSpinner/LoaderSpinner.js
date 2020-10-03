import React from "react";
// import "./LoaderSpinner.scss";
import { ClockLoader } from "react-spinners";

function LoaderSpinner() {
  return (
    <div className="LoaderSpinner">
      <ClockLoader size={150} color="#fff" />
    </div>
  );
}

export default LoaderSpinner;
