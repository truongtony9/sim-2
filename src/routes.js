import React from "react";
import { Switch, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Wizard from "./components/Wizard/Wizard";
import House from "./components/House/House";

export default (
  <Switch>
    <Route path="/houses/add" component={Wizard} />
  </Switch>
);
