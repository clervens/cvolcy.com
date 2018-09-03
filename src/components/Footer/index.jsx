import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
//translations
import { translate, Trans } from 'react-i18next';
import { List, ListItem, withStyles } from "@material-ui/core";

// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";

import footerStyle from "./styles";

function Footer({ ...props }) {
  const { classes, whiteFont, t } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <a
                href="#"
                className={classes.block}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("About me")}
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href="#"
                className={classes.block}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("Blog")}
              </a>
            </ListItem>
          </List>
        </div>
        <div className={classes.right}>
          &copy; {1900 + new Date().getYear()}, &nbsp;
          <Trans i18nKey="made with">
          made with <Favorite className={classes.icon} /> by 
          <a
            href="#"
            className={aClasses}
            target="_blank"
            rel="noopener noreferrer"
          >Clervens Volcy</a> for a better web.
          </Trans>
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
  whiteFont: PropTypes.bool
};

export default translate("common")(withStyles(footerStyle)(Footer));