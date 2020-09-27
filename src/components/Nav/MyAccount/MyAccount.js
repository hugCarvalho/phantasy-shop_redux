import React, { useEffect, useState } from "react";
import "./MyAccount.scss";

function MyAccount() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  useEffect(() => {
    console.log("isMenuOpen", isSubMenuOpen);
  }, [isSubMenuOpen]);

  const styleShow = {
    display: "block",
    marginLeft: "0",
    transform: "translate(0%, 0%)",
  };
  const styleHide = {
    // display: "none",
    marginLeft: "-440px",
    transform: "translate(-50%, -50%)",
  };

  return (
    <nav className="MyAccount">
      <div className="drop-btn" onClick={() => setIsMenuOpen((state) => !state)}>
        My Account <i class="fas fa-angle-down"></i>
      </div>
      <div
        className="tooltip"
        style={isMenuOpen ? { display: "block" } : { display: "none" }}
      ></div>

      {/* DROPDOWN MENU */}
      <div
        className="wrapper"
        style={isMenuOpen ? { display: "flex" } : { display: "none" }}
      >
        {/* GOES RIGHT */}
        <ul
          className="menu-bar"
          style={isMenuOpen && !isSubMenuOpen ? styleShow : styleHide}
        >
          <li>
            <a href="#">
              <div className="icon">
                <span className="fas fa-home"></span>
              </div>
              Home
            </a>
          </li>
          <li
            className="setting-item"
            onClick={() => setIsSubMenuOpen((state) => !state)}
          >
            <a href="#">
              <div className="icon">
                <span className="fas fa-cog"></span>
              </div>
              Settings <i className="fas fa-angle-right"></i>
            </a>
          </li>
          <li className="help-item">
            <a href="#">
              <div className="icon">
                <span className="fas fa-question-circle"></span>
              </div>
              Help & support <i className="fas fa-angle-right"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <div className="icon">
                <span className="fas fa-user"></span>
              </div>
              About us
            </a>
          </li>
          <li>
            <a href="#">
              <div className="icon">
                <span className="fas fa-comment-alt"></span>
              </div>
              Feedback
            </a>
          </li>
        </ul>
        {/* <!-- Settings Menu-items --> */}
        {/* GOES LEFT */}
        <ul className="setting-drop" style={isSubMenuOpen ? styleShow : styleHide}>
          <li
            className="arrow back-setting-btn"
            onClick={() => setIsSubMenuOpen(false)}

            // onClick={() => setIsSubMenuOpen(false)}
          >
            <span className="fas fa-arrow-left"></span>Settings
          </li>
          <li>
            <a href="#">
              <div className="icon">
                <span className="fas fa-user"></span>
              </div>
              Personal info
            </a>
          </li>
          <li>
            <a href="#">
              <div className="icon">
                <span className="fas fa-lock"></span>
              </div>
              Password
            </a>
          </li>
          <li>
            <a href="#">
              <div className="icon">
                <span className="fas fa-address-book"></span>
              </div>
              Activity log
            </a>
          </li>
        </ul>
        {/* <!-- Help & support Menu-items --> */}
        <ul className="help-drop">
          <li className="arrow back-help-btn">
            <span className="fas fa-arrow-left"></span>Help & support
          </li>

          <li>
            <a href="#">
              <div className="icon">
                <span className="fas fa-envelope"></span>
              </div>
              Inbox
            </a>
          </li>
          <li>
            <a href="#">
              <div className="icon">
                <span className="fas fa-comment-alt"></span>
              </div>
              Send feedback
            </a>
          </li>
          <li>
            <a href="#">
              <div className="icon">
                <span className="fas fa-exclamation-circle"></span>
              </div>
              Report problem
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default MyAccount;
