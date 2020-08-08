import React from "react";
import "./App.scss";
import Nav from "./components/Nav/Nav";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Nav />
        </div>{" "}
      </Router>
    </Provider>
  );
}

export default App;
