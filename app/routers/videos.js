const express = require('express'),
  mongoose = require('mongoose');

require('../models/models');

var router = express.Router();

router.get("/day", async (req, res) => {
    const limit = req.params.limit || 5;
    const Videos = mongoose.model("Videos");
    const count = await Videos.count();
    const random = Math.floor(Math.random() * count)

    let randomVideoOfTheDay = await Videos.findOne().skip(random);
    
    res.json({randomVideoOfTheDay, count});
});

module.exports = router;
