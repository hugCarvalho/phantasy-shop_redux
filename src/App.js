import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";

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
