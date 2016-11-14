# BeaconGrid WebHookAPI App

## Overview
This project (and README) will show you how to get started using BeaconGrid's
Webhook API to receive data from GridScan.

First, we'll set up a Webhook Secret and a Webhook Validator using the
BeaconGrid dashboard interface. Then, we'll configure and start a demo listening
server (two demo implementations are provided in this project; we'll use
nodejs-express). Lastly, we'll verify that the listening server is working
correctly using the BeaconGrid dashboard interface and the server's console
output.

## How to setup a BeaconGrid Webhook
1. Log into your account and open the [GridScan page](https://dashboard.beacongrid.com/#/GridScans).
    Here, you'll see a table listing **GridScan Webhooks**. Note that this
    list includes both WiFi and BLE beacons.

    [![GridScan-webhooks-grids.png](https://s16.postimg.org/3k23p3h7l/Selection_001.png)](https://postimg.org/image/3k23p3h7l/)

2. Click on the add button in the table's header to add a new Webhook:
    [![grid-scan-add-webhook-dialog.png](https://s16.postimg.org/fzytiuajl/Selection_002.png)](https://postimg.org/image/fzytiuajl/)

    Each Webhook has 6 fields.

    [![gridscan-add-webhook-filled.png](https://s16.postimg.org/4eonb4p29/Selection_005.png)](https://postimg.org/image/4eonb4p29/)

    Fill in every field except for the Validator field, which will be generated
    for you. The `postUrl` in this form should be the address of the server you
    intend to run the listening server on with the suffix `/gridscan`. For
    instance, if your server is accessible as `https://orangecustard.net`, the
    `postUrl` should be `https://orangecustard.net/gridscan`.

4. Make a note of the Secret and Validator values - we'll need them in a minute.

5. Make sure that after adding the Webhook, the grid looks like this:

    [![gridscan-webhooks-grid-new-webhook.png](https://s3.postimg.org/c8fmm1tu7/Selection_004.png](https://postimg.org/image/c8fmm1tu7/)

    We're now going to run the demo listening server on the server we specified
    as the `postUrl` for our Webhook. We'll return to the BeaconGrid dashboard
    interface afterwards.

## Running the demo listening server
The listening server provided with this project requires modern versions of
node and npm. This has been tested with node @ v7.0.0 and npm @ v3.10.8. After
downloading node and npm (usually bundled), navigate to
`.../webhook-api-app/apis/nodejs-express`.

1. Install all the project dependencies with `npm install`.
2. Edit `secrets.json` to contain the secret and validator fields from the
BeaconGrid dashboard.
2. Start the listening server with `PORT=8080 npm start`. Server requests will
be printed to console, but not logged. Note that you can change the port you
listen on by changing the environment variable `PORT`.
3. Navigate to `http://localhost` (or `http://postUrl`) and verify that you see the
BeaconGrid Webhook API front-page.

## Verifying the listening server
1. Return to the BeaconGrid dashboard's
[GridScan page](https://dashboard.beacongrid.com/#/webhooks).
2. Find the Webhook you created earlier in the table, and click the Validate
button on the far right of the Webhook's row. You may need to scroll the table
right to see the Validate button.
3. Make sure that the table refreshes, and that the Webhook you created earlier now
reads "Validated" where the Validate button used to be.

    [![gridscan-webhooks-grid-validated-webhook.png](https://s16.postimg.org/7mt4o6bc1/Selection_006.png)](https://postimg.org/image/7mt4o6bc1/)

4. All's working! Check the console output of your listening server - you should
have data coming in.

## Extending & customizing the listening server
You can extend the nodejs-express demo listening server, or implement your own
in whatever language or framework you prefer; the listening server can be any
API that supports both a `GET` and `POST`. The `GET` method would be called by
the BeaconGrid app to validate the API URL and the `POST` method would be the
actual method which the BeaconGrid app uses to post the data to your API.

To see the routing implementation in the demo listening server: [apis/nodejs-express/routes/gridscan.js](https://github.com/BeaconGrid/webhook-api-app/blob/master/apis/nodejs-express/routes/gridscan.js).

## Example data POSTed to the listening server
```json
headers: {
  "Content-Type": "application/json",
  "X-BeaconGrid-Device-MAC": "{thingName}",
  "X-BeaconGrid-Topic": "{topic}",
  "X-BeaconGrid-Signature": "{signature}"
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
```
