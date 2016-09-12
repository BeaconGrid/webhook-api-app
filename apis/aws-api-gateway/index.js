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
  return Promise.resolve({
    token: secrets.validator
  });
}

function postGridScan(req) {
  console.log('Recieved data: ', JSON.stringify(req.body));

  /*
  * The structure of the data posted to this API would be:
  * headers: {
     'Content-Type': 'application/json',
     'X-BeaconGrid-Device-MAC': message.webhook.thingName,
     'X-BeaconGrid-Topic': message.webhook.topic,
     'X-BeaconGrid-Signature': signature
   },
   body: {
     'thingName': 'C47F510151B4',
     'timeStamp': '2016-08-16T19:19:53.058640Z',
     'bleNumBroadcasts': 26707,
     'wifiMacAddress': 'C47F510151B4',
     'wifiUptime': 22212760,
     'wifiRSSI': -55,
     'wifiSSID': '13814IOT',
     'wifiChannel': 1,
     'wifiSecurityType': 'WPA2_AES_PSK',
     'privateIP': '192.168.1.11',
     'wifiFirmwareVer': '3.0.1',
     'bleMacAddress': '00:1E:C0:21:E7:F5',
     'bleFirmwareVer': 'MCHP BTLE v1.33.4 SDS 11/6/2015'
   }
  * */
  return Promise.resolve({
    token: secrets.validator
  });
}