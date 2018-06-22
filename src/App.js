import React, { Component } from "react";
import { HashRouter as Router, Link } from "react-router-dom";
import { Provider } from "react-redux";
import axios from "axios";

import store from "./redux/store";
import Dashboard from "./components/Dashboard/Dashboard";
import Wizard from "./components/Wizard/Wizard";
import Header from "./components/Header/Header";
import House from "./components/House/House";

import routes from "./routes";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <header className="App-header">
              {/* <img src={logo} className="App-logo" alt="logo" /> */}
              <Header />
            </header>
            <div>
              <Dashboard />
              <Link style={{ color: "black" }} to="/houses/add">
                <button>Add New Property</button>
              </Link>
              {routes}
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
