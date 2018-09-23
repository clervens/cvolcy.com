const express = require('express'),
  http = require('http'),
  https = require('https'),
  url = require('url');

var router = express.Router();
router.get('/images', function (req, res) {
    const adapters = {
        'http:': http,
        'https:': https,
    }

    let image_url = url.parse(req.query.i);
    (adapters[image_url.protocol]).get(req.query.i, function(file) {
        if (file.headers['content-type'].includes('image')) {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            file.pipe(res);
        } else {
            res.status(415).send("The request entity has a media type which the server or resource does not support.");
        }
    });
});

router.get("/days2go", (req, res) => {
    res.render('misc/days2go');
});

module.exports = router;
