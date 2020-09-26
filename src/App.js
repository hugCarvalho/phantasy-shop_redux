import React from "react";
import "./App.scss";
import Nav from "./components/Nav/Nav";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
//Pages
import Home from "./pages/Home/Home";
import ItemsList from "./pages/ItemsList/ItemsList";
import Cart from "./pages/Cart/Cart";
import Login from "./pages/Login_Register/Login/Login";
import Register from "./pages/Login_Register/Register/Register";
import NotFound from "./pages/NotFound/NotFound";
import { Switch, Route } from "react-router-dom";
//toast
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MyAccount from "./components/Nav/MyAccount/MyAccount";

toast.configure();

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Nav />
          <MyAccount />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/items" component={ItemsList} />
            <Route path="/cart" component={Cart} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/" component={NotFound} />
          </Switch>
        </div>{" "}
      </Router>
    </Provider>
  );
}

export default App;
