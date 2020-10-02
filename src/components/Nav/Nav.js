import React from "react";
import "./Nav.scss";
import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import Pic from "../../img/logo_02.png";

import { FaShoppingCart } from "react-icons/fa";
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
              <NavLink exact to="/">
                Info
              </NavLink>
            </li>

            <li>
              <NavLink to="/items">
                <span>Actors</span>
              </NavLink>
            </li>

            <li>
              <figure className="wrapper__cart-icon">
                <NavLink to="/cart">
                  <FaShoppingCart size="30" />
                  <figcaption
                    className="items-amount"
                    style={numberOfItems >= 10 ? { left: "20px" } : { left: "23px" }}
                  >
                    {numberOfItems}
                  </figcaption>
                </NavLink>
              </figure>
            </li>

            {isLoggedIn ? (
              <>
                <li>
                  <button className="btn__my-account">
                    <MyAccount />
                  </button>
                </li>
                <li onClick={() => dispatch(toggleLogOut())}>
                  <Link to="/">log out</Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink to="/login">Login</NavLink>
                </li>
                <li>
                  <NavLink to="/register">Register</NavLink>
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
