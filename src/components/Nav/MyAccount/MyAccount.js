import React, { useEffect, useState, useReducer } from "react";
import "./MyAccount.scss";
import myAccountSubmenuReducer, { myAccountSubmenuInitState } from "./reducer";

const styleShow = {
  display: "block",
  marginLeft: "0",
  //transform: "translate(0%, 0%)",
};
const styleHide = {
  display: "none",
  marginLeft: "-280px",
  //transform: "translate(-50%, -50%)",
};

function MyAccount() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [{ isSubmenuHelpOpen, isSubmenuSettingsOpen }, setSubmenu] = useReducer(
    myAccountSubmenuReducer,
    myAccountSubmenuInitState
  );

  useEffect(() => {
    console.log("1", isSubmenuSettingsOpen, "2", isSubmenuHelpOpen);
  }, [isSubmenuHelpOpen, isSubmenuSettingsOpen]);

  return (
    <nav className="MyAccount">
      <div className="dropdown-btn " onClick={() => setIsMenuOpen((state) => !state)}>
        My Account <i className="fas fa-angle-down"></i>
      </div>
      <div
        className="tooltip"
        style={isMenuOpen ? { display: "block" } : { display: "none" }}
      ></div>

      {/*********************** * DROPDOWN MENU */}
      <div
        className="wrapper"
        style={isMenuOpen ? { display: "flex" } : { display: "none" }}
      >
        {/* DRPDOWN CONTENT */}
        <ul
          className="menu-bar"
          style={
            isMenuOpen && !isSubmenuSettingsOpen && !isSubmenuHelpOpen
              ? styleShow
              : styleHide
          }
        >
          <li>
            <a href="#">
              <div className="icon">
                <span className="fas fa-home"></span>
              </div>
              Home
            </a>
          </li>

          {/******************* SUBMENU1 *********************/}
          <li
            className="setting-item"
            onClick={() => setSubmenu({ type: "settings_open" })}
          >
            <a href="#">
              <div className="icon">
                <span className="fas fa-cog"></span>
              </div>
              Settings <i className="fas fa-angle-right"></i>
            </a>
          </li>

          {/* SUBMENU 2 */}
          <li className="help-item" onClick={() => setSubmenu({ type: "help_open" })}>
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
        <ul
          className="setting-drop"
          style={isSubmenuSettingsOpen ? styleShow : styleHide}
        >
          <li
            className="arrow back-setting-btn"
            onClick={() => setSubmenu({ type: "settings_close" })}
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
        <ul className="help-drop" style={isSubmenuHelpOpen ? styleShow : styleHide}>
          <li
            className="arrow back-help-btn"
            onClick={() => setSubmenu({ type: "help_close" })}
          >
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
