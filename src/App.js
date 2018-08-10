import React, { Component } from 'react';

import Avatar from '@material-ui/core/Avatar';

import Header from "./components/Header";
import HeaderLinks from "./components/HeaderLinks";
import './App.css';

class App extends Component {
  render() {
    return (
      <Header
        color="transparent"
        brand="Clervens Volcy"
        rightLinks={<HeaderLinks />}
        leftLinks={this.getHeaderLinks()}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "primary"
        }} />
    );
  }

  getHeaderLinks() {
    return (
      <Avatar alt="Clervens Volcy" src="/images/logo-100.png" />
    );
  }
}

export default App;
