import React from "react";
//translations
import { translate } from 'react-i18next';
import i18next from '../../../config/i18n';
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import GridContainer from "../../../components/Grid/GridContainer";
import GridItem from "../../../components/Grid/GridItem";
// API
import APIConfig from "../../../config/api";

import sectionStyles from "./styles";

class ProductSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      locale: i18next.language.substr(0, 2)
    }
  }
  
  componentDidMount() {
    fetch(`${APIConfig.baseUrl}books/reading-list`)
      .then(res => res.json())
      .then((result) => {
        this.setState({
          books: result.map((x) => { return {_id: x._id, ...x[this.state.locale] }; })
        });
      });
  }

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
            <ul className={classes.bookList}>
            {this.state.books.map(book => {
              return <li className={classes.bookListItem} key={book._id}>{book.title}</li>
            })}
            </ul>
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