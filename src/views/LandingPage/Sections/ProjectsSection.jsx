import React from "react";
//translations
import { translate } from 'react-i18next';
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import GridContainer from "../../../components/Grid/GridContainer";
import GridItem from "../../../components/Grid/GridItem";

import sectionStyles from "./styles";

class ProductSection extends React.Component {
  render() {
    const { classes, t } = this.props;
    return (
      <div className={classes.section}>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4} className={classes.description}>
            <h2 className={classes.title}>{t("What’s new?")}</h2>
            ...
          </GridItem>
          <GridItem xs={12} sm={12} md={4} className={classes.description}>
            <h2 className={classes.title}>{t("Reading lists")}</h2>
            ...
          </GridItem>
          <GridItem xs={12} sm={12} md={4} className={classes.description}>
            <h2 className={classes.title}>{t("Video of the day")}</h2>
            <iframe 
              className={classes.videoIframe}
              src="https://www.youtube.com/embed/Fa4cRMaTDUI"
              frameborder="0"
              allow="autoplay; encrypted-media"
              allowfullscreen>
            </iframe>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

export default translate("LandingPage")(withStyles(sectionStyles)(ProductSection));