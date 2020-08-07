import React from "react";
import Home from "../../pages/Home/Home";
import ItemsList from "../../pages/ItemsList/ItemsList";
import Cart from "../../pages/Cart/Cart";
import Login from "../../pages/Login_Register/Login/Login";
import Register from "../../pages/Login_Register/Register/Register";
import NotFound from "../../pages/NotFound/NotFound";
import { Link, Switch, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Nav.scss";

function Nav() {
  const numberOfItems = useSelector((state) => state.cart.cart.length);

  return (
    <>
      <header className="Nav">
        <nav className="container__navlinks">
          <ul>
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/items">Items List</Link>
            </li>
            <li>
              <Link to="/cart">Cart {numberOfItems}</Link>
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
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/items" component={ItemsList} />
        <Route path="/cart" component={Cart} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/" component={NotFound} />
      </Switch>
    </>
  );
}

export default Nav;
