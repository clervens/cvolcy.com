import React from "react";
//translations
import { translate } from 'react-i18next';
import i18next from '../../../config/i18n';
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import GridContainer from "../../../components/Grid/GridContainer";
import GridItem from "../../../components/Grid/GridItem";
import CircularProgress from '@material-ui/core/CircularProgress';
// API
import APIConfig from "../../../config/api";

import sectionStyles from "./styles";

class ProductSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      videoOfTheDay: null,
      locale: i18next.language.substr(0, 2)
    }
  }
  
  componentDidMount() {
    const locale = this.state.locale;
    fetch(APIConfig.get('books/reading-list'))
      .then(res => res.json())
      .then((result) => {
        this.setState({
          books: result.map((x) => { return {_id: x._id, ...x[locale] }; })
        });
      });

    let videoURL = APIConfig.get('videos/day'),
      videoParams = {lang: this.state.locale};
    Object.keys(videoParams)
      .forEach(key => videoURL.searchParams.append(key, videoParams[key]));
    fetch(videoURL)
      .then(res => res.json())
      .then(result => Promise.resolve(result.randomVideoOfTheDay))
      .then(result => {
        console.log(result);
        this.setState({
          videoOfTheDay: result
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
            { this.state.books.length > 0 ? (
              this.state.books.map(book => {
                return <li className={classes.bookListItem} key={book._id}>{book.title}</li>
              })
            ) : (
              <CircularProgress />
            )}
            </ul>
          </GridItem>
          <GridItem xs={12} sm={12} md={4} className={classes.description}>
            <h2 className={classes.title}>{t("Video of the day")}</h2>
            {this.state.videoOfTheDay != null ? (
              <iframe
                title={t("Video of the day")}
                className={classes.videoIframe}
                src={this.state.videoOfTheDay.url}
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen>
              </iframe>
              ) : (
                <CircularProgress />
              )
            }
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

export default translate("LandingPage")(withStyles(sectionStyles)(ProductSection));