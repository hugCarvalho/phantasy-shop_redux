import React from "react";
import Home from "../pages/Home";
import ItemsList from "../pages/ItemsList/ItemsList";
import Cart from "../pages/Cart";
import Login from "../pages/Login";
import Register from "../pages/Register";
import NotFound from "../pages/NotFound";
import { Link, Switch, Route } from "react-router-dom";

function Nav() {
  return (
    <header>
      <ul>
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/items">Items List</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>

        <li>
          <Link to="/register">Register</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/items" component={ItemsList} />
        <Route path="/cart" component={Cart} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/" component={NotFound} />
      </Switch>
    </header>
  );
}

export default Nav;
