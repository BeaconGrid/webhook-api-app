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

3- After adding the Webhook the grid would look like this:

[![gridscan-webhooks-grid-new-webhook.png](https://s22.postimg.org/mpdrgc9zl/gridscan_webhooks_grid_new_webhook.png)](https://postimg.org/image/5ouv7nwy5/)

By clicking on `show` link you would see the secret and by clicking on `VALIDATE` button you could validate you Webhooks.

4- In order to validate your Webhook as mentioned above user should first create an API which its `GET` method returns a response which contains the **validator** which has been generated by the BeaconGrid app. You could see the return value of the the sample API which we have created:

[![gridscan-sample-api-get.png](https://s9.postimg.org/m8yzj81cv/gridscan_sample_api_get.png)](https://postimg.org/image/o0rye4kpn/)

as you see in the picture the `GET` response of the `postUrl` contains the `validator` which means our Webhook is ready to be validated.

5- User can add more than one Webhook without validating them but after validating the Webhook the grid would look like this:

[![gridscan-webhooks-after-validation.png](https://s17.postimg.org/bw8k9ejen/gridscan_webhooks_after_validation.png)](https://postimg.org/image/jc7tv773v/)

