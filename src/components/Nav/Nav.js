import React from "react";
import "./Nav.scss";
import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import Pic from "../../img/logo_02.png";

import { toggleLogOut } from "../../redux/actions/loginActions";
import MyAccount from "./MyAccount/MyAccount";

//TODO: refactor
//TODO: make mobile menu

function Nav() {
  const { isLoggedIn } = useSelector((state) => state.toggleLogInOut);
  const numberOfItems = useSelector((state) => state.cart.cart.length);
  const dispatch = useDispatch();

  return (
    <>
      <header className="Nav">
        <nav className="container__navlinks">
          {/* <figure className="logo">
            <img src={Pic} alt="breaking bad logo"></img>
          </figure> */}
          <ul>
            <li>
              <NavLink exact to="/" className="desktop-only">
                Info
              </NavLink>
              <NavLink exact to="/">
                <i className="fas fa-info-circle"></i>{" "}
              </NavLink>
            </li>

            <li>
              <NavLink to="/items" className="desktop-only">
                Actors{" "}
              </NavLink>
              <NavLink to="/items">
                <i className="fas fa-film"></i>
              </NavLink>
            </li>

            <li>
              <li className="wrapper__cart-icon">
                <NavLink to="/cart" className="desktop-only">
                  Cart{" "}
                </NavLink>
                <NavLink to="/cart" className="cart">
                  <i className="fas fa-shopping-cart"></i>
                  <figcaption className="number-of-items">{numberOfItems}</figcaption>
                </NavLink>
              </li>
            </li>

            {isLoggedIn ? (
              <>
                <li>
                  <button className="btn__my-account">
                    <MyAccount />
                  </button>
                </li>
                <li onClick={() => dispatch(toggleLogOut())}>
                  <Link to="/">
                    <i class="fas fa-sign-out-alt" title="Sign out"></i>
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li className="login ">
                  <NavLink to="/login" className="desktop-only">
                    Login / Register
                  </NavLink>
                  <NavLink to="/login">
                    <i className="fas fa-user"></i>
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Nav;
