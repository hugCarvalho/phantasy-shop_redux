import React from "react";
import "./Nav.scss";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

import { FaShoppingCart } from "react-icons/fa";

function Nav() {
  const { isLoggedIn } = useSelector((state) => state.toggleLogInOut);
  const numberOfItems = useSelector((state) => state.cart.cart.length);

  return (
    <>
      <header className="Nav">
        <nav className="container__navlinks">
          <ul>
            <li>
              <Link to="/">Info</Link>
            </li>
            <li>
              <NavLink to="/items">Items List</NavLink>
            </li>
            <li>
              <figure className="wrapper__cart-icon">
                <NavLink to="/cart">
                  <FaShoppingCart size="30" />
                  <figcaption
                    className="num-items-cart"
                    style={numberOfItems >= 10 ? { left: "13px" } : { left: "15px" }}>
                    {numberOfItems}
                  </figcaption>
                </NavLink>
              </figure>
            </li>
            {isLoggedIn ? (
              <>
                <li>
                  <NavLink to="/user/:username/">username</NavLink>
                </li>
                <li>
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
