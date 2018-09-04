const dotenv = require('dotenv');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');

dotenv.config();

var app = express();

// MongoDB setup
mongoose.connect(process.env.MONGODB_URI);
mongoose.connection
 .on('error', (error) => { console.warn('Warning', error); });
mongoose.Promise = global.Promise;
require('./models/models.js');

// App Configuration
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(morgan('common'));
app.use(express.static(path.resolve(__dirname, 'static')));
app.set('view engine', 'pug');

app.get("/", (req, res, next) => {
  let Settings = mongoose.model("Settings");
  Settings.findOne().then((settings) => {
    res.redirect("/project/" + settings.homeRedirect);
  });
});

app.use("/project", require("./routers/projects"));
app.use("/books", require("./routers/books"));

app.use(function(req, res, next){
  res.status(404);

  // respond with html page
  if (req.accepts('html')) {
    res.render('404', { url: req.url });
    return;
  }

  // respond with json
  if (req.accepts('json')) {
    res.send({ error: 'Not found' });
    return;
  }

  // default to plain-text. send()
  res.type('txt').send('Not found');
});

app.listen(process.env.PORT || 4000, process.env.IP || "0.0.0.0", () => {
    console.log("Server listening at http://" + (process.env.IP || "0.0.0.0") + ":" + (process.env.PORT || 4000));
});
