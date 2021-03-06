import React, { useState, useReducer } from "react";
import { Link } from "react-router-dom";
import "./MyAccount.scss";
import myAccountSubmenuReducer, { myAccountSubmenuInitState } from "./reducer";

//TODO: refactor
//TODO: replace <a> with either button or Link
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

  // useEffect(() => {
  //   console.log("1", isSubmenuSettingsOpen, "2", isSubmenuHelpOpen);
  // }, [isSubmenuHelpOpen, isSubmenuSettingsOpen]);

  return (
    <nav className="MyAccount">
      <button className="dropdown-btn " onClick={() => setIsMenuOpen((state) => !state)}>
        <span className="mobile-hide">My Account </span>
        {!isMenuOpen ? (
          <i className="fa fa-folder-open"></i>
        ) : (
          <i className="fa fa-folder"></i>
        )}
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
            <Link to="#">
              <div className="icon">
                <span className="fas fa-envelope"></span>
              </div>
              Inbox
            </Link>
          </li>

          {/**SUBMENU1 Settings */}
          <li className="settings" onClick={() => setSubmenu({ type: "settings_open" })}>
            <Link to="#">
              <div className="icon">
                <span className="fas fa-cog"></span>
              </div>
              Settings <i className="fas fa-angle-right"></i>
            </Link>
          </li>

          {/* SUBMENU 2 Help & Support */}
          <li className="help-support" onClick={() => setSubmenu({ type: "help_open" })}>
            <Link to="#">
              <div className="icon">
                <span className="fas fa-question-circle"></span>
              </div>
              Help & support <i className="fas fa-angle-right"></i>
            </Link>
          </li>
          <li>
            <Link to="#">
              <div className="icon">
                <span className="fas fa-user"></span>
              </div>
              About us
            </Link>
          </li>
          <li>
            <Link to="#">
              <div className="icon">
                <span className="fas fa-comment-alt"></span>
              </div>
              Feedback
            </Link>
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
            <Link to="#">
              <div className="icon">
                <span className="fas fa-user"></span>
              </div>
              Personal info
            </Link>
          </li>
          <li>
            <Link to="#">
              <div className="icon">
                <span className="fas fa-lock"></span>
              </div>
              Password
            </Link>
          </li>
          <li>
            <Link to="#">
              <div className="icon">
                <span className="fas fa-address-book"></span>
              </div>
              Activity log
            </Link>
          </li>
          <li>
            <Link to="#">
              <div className="icon">
                <span className="fas fa-globe-asia"></span>
              </div>
              Languages{" "}
            </Link>
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
            <Link to="#">
              <div className="icon">
                <span className="fas fa-envelope"></span>
              </div>
              Inbox
            </Link>
          </li>
          <li>
            <Link to="#">
              <div className="icon">
                <span className="fas fa-comment-alt"></span>
              </div>
              Send feedback
            </Link>
          </li>
          <li>
            <Link to="#">
              <div className="icon">
                <span className="fas fa-exclamation-circle"></span>
              </div>
              Report problem
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default MyAccount;
