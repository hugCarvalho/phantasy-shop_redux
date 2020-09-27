import React, { useEffect, useState, useReducer } from "react";
import "./MyAccount.scss";

export const initState = {
  isSubMenuSettingsOpen: false,
  isSubMenuHelpOpen: false,
};

export const myAccountMenusReducer = (state, action) => {
  switch (action.type) {
    case "settings_open":
      return {
        ...state,
        isSubMenuHelpOpen: false,
        isSubMenuSettingsOpen: true,
      };
    case "settings_close":
      return {
        ...state,
        isSubMenuHelpOpen: false,
        isSubMenuSettingsOpen: false,
      };
    case "help_open":
      return {
        ...state,
        isSubMenuHelpOpen: true,
        isSubMenuSettingsOpen: false,
      };
    case "help_close":
      return {
        ...state,
        isSubMenuHelpOpen: false,
        isSubMenuSettingsOpen: false,
      };
    default:
      return state;
  }
};
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
  const [{ isSubMenuHelpOpen, isSubMenuSettingsOpen }, setSubmenuOpen] = useReducer(
    myAccountMenusReducer,
    initState
  );
  // useEffect(() => {
  //   console.log("isMenuOpen", isSubMenuOpen);
  // }, [isSubMenuOpen]);

  useEffect(() => {
    console.log("1", isSubMenuSettingsOpen, "2", isSubMenuHelpOpen);
  }, [isSubMenuHelpOpen, isSubMenuSettingsOpen]);

  return (
    <nav className="MyAccount">
      <div className="drop-btn" onClick={() => setIsMenuOpen((state) => !state)}>
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
        {/* GOES RIGHT */}
        <ul
          className="menu-bar"
          style={
            isMenuOpen && !isSubMenuSettingsOpen && !isSubMenuHelpOpen
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
            onClick={() => setSubmenuOpen({ type: "settings_open" })}
          >
            <a href="#">
              <div className="icon">
                <span className="fas fa-cog"></span>
              </div>
              Settings <i className="fas fa-angle-right"></i>
            </a>
          </li>
          {/* SUBMENU 2 */}
          <li className="help-item" onClick={() => setSubmenuOpen({ type: "help_open" })}>
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
          style={isSubMenuSettingsOpen ? styleShow : styleHide}
        >
          <li
            className="arrow back-setting-btn"
            onClick={() => setSubmenuOpen({ type: "settings_close" })}
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
        <ul className="help-drop" style={isSubMenuHelpOpen ? styleShow : styleHide}>
          <li
            className="arrow back-help-btn"
            onClick={() => setSubmenuOpen({ type: "help_close" })}
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
