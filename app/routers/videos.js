const express = require('express'),
  mongoose = require('mongoose');

require('../models/models');

var router = express.Router();

router.get("/day", async (req, res) => {
    const params = {...req.body, ...req.query};
    const locale = params.lang;

    const Videos = mongoose.model("Videos");
    const count = await Videos.count();
    const random = Math.abs(Math.round(Math.sin((new Date()).getDate()) * count));

    let randomVideoOfTheDay = await Videos.findOne().skip(random);
    if (typeof locale !== 'undefined') {
      randomVideoOfTheDay = randomVideoOfTheDay.localize(locale);
    }
    res.json({randomVideoOfTheDay: randomVideoOfTheDay, count});
});

module.exports = router;
