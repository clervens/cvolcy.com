import React, { Component } from 'react';
import { Router, Route, Switch } from "react-router";
import { createBrowserHistory } from "history";

import LandingPage from "./views/LandingPage";
import ProjectsPage from "./views/ProjectsPage";

//translations
import { translate } from 'react-i18next';

import './App.css';

class App extends Component {
  componentDidMount() {
    document.title = "Clervens Volcy";
  }

  render() {
    let hist = createBrowserHistory();
    return (
      <Router history={hist}>
        <Switch>
          {/* {indexRoutes.map((prop, key) => {
            return <Route path={prop.path} key={key} component={prop.component} />;
          })} */}
          <Route path="/projects/:project?" key={0} component={ProjectsPage} />
          <Route path="/" key={1} component={LandingPage} />
        </Switch>
      </Router>
    );
  }
}

export default translate("common")(App);
