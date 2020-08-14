import React from "react";
import "./Nav.scss";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { FaShoppingCart } from "react-icons/fa";

function Nav() {
  const numberOfItems = useSelector((state) => state.cart.cart.length);

  return (
    <>
      <header className="Nav">
        <nav className="container__navlinks">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/items">Items List</Link>
            </li>
            <li>
              <div className="wrapper__cart-icon">
                <Link to="/cart">
                  <FaShoppingCart size="30" />
                  <span
                    className="num-items-cart"
                    style={
                      numberOfItems >= 10 ? { left: "13px" } : { left: "15px" }
                    }>
                    {numberOfItems}
                  </span>
                </Link>
              </div>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>

            <li>
              <Link to="/register">Register</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Nav;
