import React, { Component } from 'react';
import { Router, Route, Switch } from "react-router";
import { createBrowserHistory } from "history";

import LandingPage from "./views/LandingPage";

import './App.css';

class App extends Component {
  render() {
    let hist = createBrowserHistory();
    return (
      <Router history={hist}>
        <Switch>
          {/* {indexRoutes.map((prop, key) => {
            return <Route path={prop.path} key={key} component={prop.component} />;
          })} */}
          <Route path="/" key={0} component={LandingPage} />
        </Switch>
      </Router>
    );
  }
}

export default App;
