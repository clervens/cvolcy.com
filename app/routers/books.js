const express = require('express'),
  mongoose = require('mongoose');

require('../models/models');

var router = express.Router();

router.get("/reading-list", async (req, res) => {
    let limit = req.params.limit || 5;
    let Books = mongoose.model("Books");
    let readingList = await Books.find()
        .sort({sort: 1})
        .limit(limit);

    res.json(readingList);
});

module.exports = router;
