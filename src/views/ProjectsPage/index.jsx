import React, { Component } from 'react';
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// nodejs library that concatenates classes
import classNames from "classnames";
import Markdown from "react-remarkable";

import Avatar from '@material-ui/core/Avatar';

import Header from "../../components/Header";
import HeaderLinks from "../../components/HeaderLinks";
import Parallax from "../../components/Parallax";
import GridContainer from "../../components/Grid/GridContainer";
import GridItem from "../../components/Grid/GridItem";
import Footer from "../../components/Footer";

import Projects, { getProject } from "../../projects";

import landingPageStyle from "./styles";

class ProjectsPage extends Component {

  constructor(props) {
    super(props);
    this.state = { project: null };
  }

  async componentWillMount() {
    const { project } = this.props.match.params;

    let data = !!project ? getProject(project) : Projects[0];
    if (!!data) {
      data = Projects[0];
    }

    let textStream = await fetch(data.file);
    let text = await textStream.text();

    this.setState({ project: text, title: project.charAt(0).toUpperCase() + project.slice(1) });
  }

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
                <h1 className={classes.title}>{this.state.title}</h1>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.markdown}>
            <Markdown source={this.state.project} options={{html: true}} />
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

export default withStyles(landingPageStyle)(ProjectsPage);