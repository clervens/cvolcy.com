import React, { Component } from 'react';
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// nodejs library that concatenates classes
import classNames from "classnames";

import Avatar from '@material-ui/core/Avatar';

import Header from "../../components/Header";
import HeaderLinks from "../../components/HeaderLinks";
import Parallax from "../../components/Parallax";
import GridContainer from "../../components/Grid/GridContainer";
import GridItem from "../../components/Grid/GridItem";
import Footer from "../../components/Footer";

import ProjectSection from "./Sections/ProjectsSection";

import landingPageStyle from "./styles";

class LandingPage extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
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
        <Parallax filter image="/images/filters/image1.jpg">
          <div className={classes.container}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <h1 className={classes.title}>Your Story Starts With Us.</h1>
                <h4>
                  Every landing page needs a small description after the big
                  bold title, that's why we added this text here. Add here all
                  the information that can make you or your product create the
                  first impression.
                </h4>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <ProjectSection />
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  getHeaderLinks() {
    return (
      <Avatar alt="Clervens Volcy" src="/images/logo-100.png" />
    );
  }
}

export default withStyles(landingPageStyle)(LandingPage);
