# BeaconGrid WebHook App

## Overview
This project (and README) will show you how to get started using BeaconGrid's
Webhooks to receive data from GridScan.

Unlike other location platforms, there's _no coding or editing of code files_
whatsoever, to retrieve real-time data. Just interacting with a free 
AWS account and our Dashboard. That's it.

## Setup in an AWS Environment

1. We will be using AWS (Amazon Web Services) to setup a simple free-tier server environment
to test this example application. If you do not already have an AWS account, it is free to
sign up at [AWS Signup](https://aws.amazon.com/).<br/>

2. Once you have completed the creation of your AWS account, you'll be taken to their console.
Click on the 'Services' button in the top-left corner of the screen to display the list
of AWS products then click on 'Elastic Beanstalk' in the 'Compute' section.<br/>
![step2.png](https://s3.amazonaws.com/beacongrid-hosted-media/step2.PNG)<br/>

3. Once on the Elastic Beanstalk landing page, click the 'Create New Application' in the top right
of the screen.<br/>
![step3.png](https://s3.amazonaws.com/beacongrid-hosted-media/step3.PNG)<br/>
![step3-2.png](https://s3.amazonaws.com/beacongrid-hosted-media/step3-2.PNG)<br/>

4. Enter your Application Name and a Description into the provided textboxes, then click the
'Create' button in the bottom-right of the popup.<br/>
![step4.png](https://s3.amazonaws.com/beacongrid-hosted-media/step4.PNG)<br/>

5. You will then be taken to your new application's dashboard. Click the 'Create One Now' link
on the page to setup an environment to run the application in.<br/>
![step5.png](https://s3.amazonaws.com/beacongrid-hosted-media/step5.PNG)<br/>

6. Select the 'Web Server Environment' option, then click the 'Select' button in the bottom-right
of the popup.<br/>
![step6.png](https://s3.amazonaws.com/beacongrid-hosted-media/step6.PNG)<br/>

7. Several Options will then be displayed. For the 'Platform' option, select 'Node.js' as the 
platform. For the 'Application code' option, select 'Upload your code'.<br/>
![step7.png](https://s3.amazonaws.com/beacongrid-hosted-media/step7.PNG)<br/>

8. Click the 'Upload' button in the 'Application code' option section.<br/>
![step8.png](https://s3.amazonaws.com/beacongrid-hosted-media/step8.PNG)<br/>

9. In the 'Source code origin' section select 'Local file', then click 'Browse' and locate
the 'nodejs-express.zip' file within your cloned copy of this repository and select it.<br/>
![step9.png](https://s3.amazonaws.com/beacongrid-hosted-media/step9.PNG)<br/>

10. Click the 'Upload' button in the bottom-right of the screen.

11. Click the 'Create Environment' button in the bottom-right of the screen. You should see a screen
like the following:<br/>
![step11.png](https://s3.amazonaws.com/beacongrid-hosted-media/step11.PNG)<br/>

Wait a few minutes while the EC2 instance launches. Since you have not setup the command to run 
the example application, you will see that the 'Health' of the application is degraded. <br/>

![step11-2.png](https://s3.amazonaws.com/beacongrid-hosted-media/step11-2.PNG)<br/>

12. To setup the command to start the application, click the 'Configuration' link on the left 
side of the screen.<br/>
![step12.png](https://s3.amazonaws.com/beacongrid-hosted-media/step12.PNG)<br/>

13. Click the Gear icon in the 'Software Configuration' section.<br/>
![step13.png](https://s3.amazonaws.com/beacongrid-hosted-media/step13.PNG)<br/>

14. In the 'Node command' textbox, enter ```npm start```<br/>
![step14.png](https://s3.amazonaws.com/beacongrid-hosted-media/step14.PNG)<br/>

15. Scroll down and click the 'Apply' button in the bottom-right of the screen. The application will
begin updating it's configuration and restart itself. Assuming all went well, your screen should
look similar to this:<br/>
![step15.png](https://s3.amazonaws.com/beacongrid-hosted-media/step15.PNG)<br/>

16. To test that the application is running, click the URL listed here:<br/>
![step16.png](https://s3.amazonaws.com/beacongrid-hosted-media/step16.PNG)<br/>

If your application successfully started, you should see a new tab open with this:<br/>
![step16-2.png](https://s3.amazonaws.com/beacongrid-hosted-media/step16-2.PNG)<br/>

17. Make a note of this URL, as we will be using it when we setup the webhook.

## How to setup a BeaconGrid Webhook
1. Log into your account and open the [GridScan page](https://dashboard.beacongrid.com/#/webhooks).
    Here, you'll see a table listing **GridScan Webhooks**.<br/>
    
2. Click on the add button in the table's header to add a new Webhook:<br/>
![step2p2.png](https://s3.amazonaws.com/beacongrid-hosted-media/step2p2.PNG)<br/>
    
3. Enter a name for your webhook, select 'Bluetooth' from the 'Type' drop down list,
enter the URL noted earlier (should be in the format ```http://(URL From AWS)/gridscan``` So in the case of
the earlier example we would use ```http://Sample-env.d8ks3pb6xd.us-east-2.elasticbeanstalk.com/gridscan```),
select the sensor you would like to use to get scan data from,
and enter ```Example-Secret``` into the 'Secret' textbox.<br/>
![step3p2.png](https://s3.amazonaws.com/beacongrid-hosted-media/step3p2.PNG)<br/>

4. Click the save button to create your new webhook.<br/>
![step4p2.png](https://s3.amazonaws.com/beacongrid-hosted-media/step4p2.PNG)<br/>

5. On the row of your new webhook, click the 'Validate' button in the rightmost column.
If your setup is correct, the records will reload and confirm that your webhook is valid.
Once a webhook is validated, BeaconGrid will start sending realtime data to that URL
when data is reported from the sensor you have selected for this webhook. Ensure that
the sensor you selected is optimized for scanning and has Bluetooth Scan turned on.

## Verifying the AWS listening server is receiving data
1. Go back to your AWS account Elastic Beanstalk dashboard and go into your example
application. Click on the 'Logs' section from the left side navigation.<br/>
![step1p3.png](https://s3.amazonaws.com/beacongrid-hosted-media/step1p3.PNG)<br/>

2. Click the 'Request Logs' button, then click the 'Last 100 Lines' button. After a short
delay you should see a log file displayed. Click the 'Download' button on the line of the
log fie you requested.<br/>
![step2p3.png](https://s3.amazonaws.com/beacongrid-hosted-media/step2p3.PNG)<br/>

If your log file looks like the above screenshot, then your example application is successfully
receiving data from BeaconGrid. If you are not seeing data posted but were able to visit the URL
provided by AWS, check to make sure your sensor is both powered on and scanning for Bluetooth
devices.

## Extending & customizing the listening server
You can extend the nodejs-express demo listening server, or implement your own
in whatever language or framework you prefer; the listening server can be any
API that supports both a `GET` and `POST`. The `GET` method would be called by
BeaconGrid to validate the API URL as well as the validator on the webhook
and the `POST` method will be used by BeaconGrid to post the data to your API.d

## Updating the example application in AWS
1. If you would like to continue working in your AWS environment, to upload new versions of
the example application after you're done adding code, go to your application's dasboard. 
Additionally, zip up your code into one single .zip file in preparation to uploading it.<br/>
![step1p4.png](https://s3.amazonaws.com/beacongrid-hosted-media/step1p4.PNG)<br/>

2. Click the 'Upload and Deploy' button to display a popup. <br/>
![step2p4.png](https://s3.amazonaws.com/beacongrid-hosted-media/step2p4.PNG)<br/>

3. Click the 'Browse' button to navigate to your zipped up code and select it. Then 
enter the version label into the 'Version label' textbox.<br/>
![step3p4.png](https://s3.amazonaws.com/beacongrid-hosted-media/step3p4.PNG)<br/>

4. Click the 'Deploy' button to complete the process of updating your application's 
source code

## Example data POSTed to the listening server
The following is an example of data that will come from BeaconGrid. This information
is always sent in JSON format and can be deserialized as such in any programming language.
For Javascript, the function to turn the JSON string in the body of the posted
request into a useable object is: 
```JavaScript
  var gridScanObj = JSON.parse(req.body);
```

Most platforms come with a preexisting method to handle parsing JSON and JSON 
is a very human-readable format which is why we have chosen to use JSON when sending 
out data scanned from BeaconGrid sensors.

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
