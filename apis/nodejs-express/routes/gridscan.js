var express = require('express'),
  fs = require('fs'),
  path = require('path'),
  secrets = require('../secrets.json'),
  router = express.Router();

router.get('/', function (req, res) {
  res.json({
    token: secrets.validator
  });
});

router.post('/', function (req, res) {
  res.json({
    token: secrets.validator
  });
});

module.exports = router;
