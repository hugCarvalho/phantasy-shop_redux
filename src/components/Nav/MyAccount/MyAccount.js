import React from "react";

function MyAccount() {
  return (
    <nav className="MyAccount">
      <div className="drop-btn">
        Drop down <span className="fas fa-caret-down"></span>
      </div>
      <div className="tooltip"></div>
      <div className="wrapper">
        <ul className="menu-bar">
          <li>
            <a href="#">
              <div className="icon">
                <span className="fas fa-home"></span>
              </div>
              Home
            </a>
          </li>
          <li className="setting-item">
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
        <ul className="setting-drop">
          <li className="arrow back-setting-btn">
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
