'use strict';
var
  // AWS = require('aws-sdk'),
  ApiBuilder = require('claudia-api-builder'),
  // crypto = require('crypto'),
  secrets = require('./secrets.json'),
  api = new ApiBuilder();

module.exports = api;

api.corsHeaders('Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Api-Version');

api.get('/gridscan', getGridScan, {error: 500});
api.post('/gridscan', postGridScan, {error: 500});

function getGridScan() {
  console.log('GridScan >> GET >> test API : ', secrets);
  return Promise.resolve({
    token: secrets.validator
  });
}

function postGridScan(req) {
  console.log('GridScan >> POST >> test API : ', secrets);
  console.log('Recieved data: ', JSON.stringify(req.body));

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
  return Promise.resolve({
    token: secrets.validator
  });
}