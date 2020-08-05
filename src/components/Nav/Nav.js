import React from "react";
import Home from "../../pages/Home/Home";
import ItemsList from "../../pages/ItemsList/ItemsList";
import Cart from "../../pages/Cart/Cart";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";
import NotFound from "../../pages/NotFound/NotFound";
import { Link, Switch, Route } from "react-router-dom";
import { useSelector } from "react-redux";

function Nav() {
  const numberOfItems = useSelector((state) => state.cart.cart.length);

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
          <Link to="/cart">Cart {numberOfItems}</Link>
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
