import React, { Component } from 'react';
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// nodejs library that concatenates classes
import classNames from "classnames";
//translations
import { translate } from 'react-i18next';

import Navigation from '../Shared/Navigation';
import Parallax from "../../components/Parallax";
import GridContainer from "../../components/Grid/GridContainer";
import GridItem from "../../components/Grid/GridItem";
import Footer from "../../components/Footer";

import ProjectSection from "./Sections/ProjectsSection";

import landingPageStyle from "./styles";

class LandingPage extends Component {
  render() {
    const { classes, t } = this.props;
    return (
      <div>
        <Navigation />     
        <Parallax filter image="/images/filters/image1.jpg">
          <div className={classes.container}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <h1 className={classes.title}>{t('title')}</h1>
                <h4>{t('subtitle')}</h4>
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
}

export default translate("LandingPage")(withStyles(landingPageStyle)(LandingPage));
