# BeaconGrid WebHookAPI App
This application shows how to get started using the BeaconGrid WebHookAPI
and how to begin to receive webhook data from gridScan.


## How to setup a BeaconGrid Webhook

1- First step is to log into your account and open the GridScan page.
In this page user sees two different grids one for **GridScan WiFi Webhooks**
and the other for **GridScan Bluetooth Webhooks**

[![GridScan-webhooks-grids.png](https://s13.postimg.org/llvatoj3r/Grid_Scan_webhooks_grids.png)](https://postimg.org/image/ama3i2soj/)

2-Second step is to click on the add button of any of the grids above to define the webhook:

[![grid-scan-add-webhook-dialog.png](https://s3.postimg.org/7wanzslxv/grid_scan_add_webhook_dialog.png)](https://postimg.org/image/xf30ct5hr/)

As you see in the picture each Webhook has 4 different fields, three of which
are supposed to be filled in by user and the 4th field `validator` would be automatically genarated:

[![gridscan-add-webhook-filled.png](https://s15.postimg.org/5h5aut6ej/gridscan_add_webhook_filled.png)](https://postimg.org/image/5h5aut6ef/)

The `postUrl` in this form is a test API which you could find its source code in the `apis/aws-api-gateway` folder in this repository.

**Note:**  
The important here is before user could create a Webhook they should have an API URL considered as `postUrl`.
This API should support both `GET` and `POST`. The `GET` method would be called by BeaconGrid app to validate
the API URL and the `POST` method would be the actual method which BeaconGrid app uses to post the data to your API.