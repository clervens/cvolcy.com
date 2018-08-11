/*eslint-disable*/
import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";
import LinkedInIcon from 'mdi-material-ui/Linkedin'
import IconButton from '@material-ui/core/IconButton';

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";

// core components
// import CustomDropdown from "components/CustomDropdown/CustomDropdown.jsx";
// import Button from "components/CustomButtons/Button.jsx";

import headerLinksStyle from "./styles.jsx";

function HeaderLinks({ ...props }) {
  const { classes } = props;
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="linkedin-tooltip"
          title="Add me on LinkedIn"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <IconButton
            href={"https://www.linkedin.com/in/clervens-volcy-5522a670"}
            target="_blank"
            color="inherit"
          >
            <LinkedInIcon />
          </IconButton>
        </Tooltip>
      </ListItem>
    </List>
  );
}

export default withStyles(headerLinksStyle)(HeaderLinks);