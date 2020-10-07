import React, { useEffect, useState, useReducer } from "react";
import { pruneNonErrors } from "react-hooks-useform/dist/validate/pruneNonErrors";
import "./MyAccount.scss";
import myAccountSubmenuReducer, { myAccountSubmenuInitState } from "./reducer";

//TODO: refactor
//TODO: replace <a> with either button or Link
//TODO: smooth transition from menus
//TODO: menus active onHOVER or onCLICK?
//TODO: set message "this is as far as the rabbit hole goes. For now..."

const styleShow = {
  display: "block",
  marginLeft: "0",
  border: "none",
  transform: "translate(0%, 0%)",
};
const styleHide = {
  display: "none",
  marginLeft: "-280px",
  border: "none",
  transform: "translate(-50%, -50%)",
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
      <button className="dropdown-btn " onClick={() => setIsMenuOpen((state) => !state)}>
        <span className="mobile-hide">My Account </span>
        {!isMenuOpen ? <i class="fa fa-folder-open"></i> : <i class="fa fa-folder"></i>}
      </button>
      <div
        className="tooltip"
        style={isMenuOpen ? { display: "block" } : { display: "none" }}
      ></div>

      {/* DROPDOWN MENU */}
      <div
        className="wrapper"
        style={
          isMenuOpen
            ? { display: "flex", border: "none", outline: "none" }
            : { display: "none" }
        }
        onMouseLeave={() => setIsMenuOpen(false)}
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
                <span className="fas fa-envelope"></span>
              </div>
              Inbox
            </a>
          </li>

          {/**SUBMENU1 Settings */}
          <li className="settings" onClick={() => setSubmenu({ type: "settings_open" })}>
            <a href="#">
              <div className="icon">
                <span className="fas fa-cog"></span>
              </div>
              Settings <i className="fas fa-angle-right"></i>
            </a>
          </li>

          {/* SUBMENU 2 Help & Support */}
          <li className="help-support" onClick={() => setSubmenu({ type: "help_open" })}>
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
          <li>
            <a href="#">
              <div class="icon">
                <span class="fas fa-globe-asia"></span>
              </div>
              Languages{" "}
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
