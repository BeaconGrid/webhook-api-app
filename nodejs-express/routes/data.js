var express = require('express'),
  fs = require('fs'),
  path = require('path'),
  secrets = require('../secrets.json'),
  router = express.Router(),
  shared = require('../shared-data');

router.get('/', function (req, res) {
  res.json(shared.sensorData);
});


module.exports = router;
