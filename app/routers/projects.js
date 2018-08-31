const express = require('express'),
  mongoose = require('mongoose');

require('../models/models');

var router = express.Router();

router.get("/:project", (req, res) => {
  let Projects = mongoose.model("Projects");
  Projects.findOne({ id: req.params.project }).then((project) => {
    res.send(project);
  });
});

module.exports = router;
