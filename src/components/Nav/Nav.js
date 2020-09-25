import React from "react";
import "./Nav.scss";
import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { FaShoppingCart } from "react-icons/fa";
import { toggleLogOut } from "../../redux/actions/loginActions";

function Nav() {
  const { isLoggedIn } = useSelector((state) => state.toggleLogInOut);
  const numberOfItems = useSelector((state) => state.cart.cart.length);
  const dispatch = useDispatch();
  return (
    <>
      <header className="Nav">
        <nav className="container__navlinks">
          <ul>
            <div>
              <li>
                <Link to="/">Info</Link>
              </li>
            </div>
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
                  <NavLink to="/user/:username/">My account</NavLink>
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
