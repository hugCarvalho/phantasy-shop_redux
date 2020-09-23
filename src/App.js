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
import { createBrowserHistory } from "history";
import ReactGA from "react-ga";

toast.configure();
// const history = createBrowserHistory();

// const trackingId = "UA-178829660-1"; // Replace with your Google Analytics tracking ID

// // Initialize google analytics page view tracking
// ReactGA.initialize(trackingId);

// console.log(history);
// history.listen((location) => {
//   // ReactGA.set({
//   //   // any data that is relevant to the user session
//   //   // that you would like to track with google analytics
//   // });
//   ReactGA.set({ page: location.pathname }); // Update the user's current page
//   ReactGA.pageview(location.pathname); // Record a pageview for the given page
// });

function App() {
  // React.useEffect(() => {
  //   ReactGA.pageview("/");
  //   // ReactGA.initialize(trackingId);
  // }, []);
  return (
    <Provider store={store}>
      <Router history={history}>
        <div className="App">
          <Nav />
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
