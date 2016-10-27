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
  /*
  * The structure of the data posted to this API would be:
  *
  headers: {
    'Content-Type': 'application/json',
    'X-BeaconGrid-Device-MAC': message.webhook.thingName,
    'X-BeaconGrid-Topic': message.webhook.topic,
    'X-BeaconGrid-Signature': signature
  },
  body: [
    {
      "timeDetected": "2016-09-12T16:35:34.042032Z",
      "nearbyBlemac": "63:08:56:1C:CC:BD",
      "blePrivate": "1",
      "rssi": -53
    },
    {
      "timeDetected": "2016-09-12T16:35:34.042032Z",
      "nearbyBlemac": "C0:97:27:0D:42:E9",
      "blePrivate": "0",
      "bleUUID": "Brcst:1BFF75004204018060C097270D42E9C297270D42E801000000000000",
      "rssi": -82
    },
    {
      "timeDetected": "2016-09-12T16:35:34.042032Z",
      "nearbyBlemac": "00:1E:C0:21:E7:F5",
      "blePrivate": "0",
      "bleUUID": "Brcst:0201040303AAFE1716AAFE10F50262677269642E696F2F4335767275533865",
      "rssi": -53
    },
    {
      "timeDetected": "2016-09-12T16:35:34.042032Z",
      "nearbyBlemac": "04:4B:ED:A4:EF:CC",
      "blePrivate": "0",
      "rssi": -49
    },
    {
      "timeDetected": "2016-09-12T16:35:34.042032Z",
      "nearbyBlemac": "D0:03:4B:3E:9F:B4",
      "blePrivate": "0",
      "rssi": -83
    }
  ]
  * */
  console.log('-----GRIDSCAN-POSTED-MESSAGE----');
  console.log(req.body);
  console.log('---------------------------------');
  res.json({
    token: secrets.validator
  });
});

module.exports = router;
