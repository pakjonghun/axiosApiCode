import React from "react";
import Header from "./Header";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Detail from "../rouotes/detail";
import Home from "../rouotes/Home";
import Tv from "../rouotes/Tv";

export default () => (
  <Router>
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/detail" component={Detail} />
      <Route path="/detail/:id" component={Detail} />
      <Route path="/tv" component={Tv} />
      <Redirect from="*" to="/" />
    </Switch>
  </Router>
);
