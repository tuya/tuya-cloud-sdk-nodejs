# Tuya Cloud API SDK for  Nodejs

[English](README.md) | [中文版](README_cn.md)

## Introduction

Tuya Cloud API SDK for Nodejs

## Preparation
- Make sure that the Nodejs version is 7.10.1 and above.

- Register a developer account on the Tuya Cloud platform and determine the values of `AccessID, AccessKey, Endpoint` (calling address)

## Source installation
1. Unzip the source code package to a suitable location for your project.
2. You can refer to the example and quote the corresponding module code in the code.

## Example

Before you run the SDK, explicitly initialize the developer information:
```
   Config.init(accessID, accessKey, Region.URL_CN);
```

Take the device information interface as an example, directly call device.GetDevice():  
```nodejs
    
    let deviceId = 'xxxx';
    let callback = function(err, data) {
        if (err) {
            console.log(err);
            return;
        }
    
        console.log(data);
    };
    
    // Get device information
    DeviceClient.getDevice(deviceId, callback);
    
```

## Currently supported API

| Module | Request Class |
| ---- | ---- |
| Token related | TokenClient |
| User management | UserClient |
| Device management | DeviceClient |
| Device control | DeviceControlClient |
| Device group | DeviceGroupClient |
| Device member management | DeviceMemberClient |
| Statistics | DataClient |
| Family management | HomeClient |
| Automation | AutomationClient |
| Scene | SceneClient |
| Distribution network management | PairTokenClient |
| Timing management | TimeClient |
| Weather management | WeatherClient |



## FAQ

### About refreshToken interface

> **Note**: The refreshToken interface will return a new access_token, even if the old token has not expired.

This logic is already done in the `GetToken` method, and users generally do not need to call the refresh interface.

### Do I need to get the token or refresh the token before calling the API?

No, this layer of logic has been implemented in the  API method. The token information will be cached in memory.

### When calling an interface, if the token has expired, do I need to manually call the refresh-token interface?

No, in the `GetToken()` method implementation, it will check whether the token has expired. If it expires, it will be pulled again.

### If your token will be refreshed in multiple nodes, then you need to implement common.TokenLocalManage interface yourself
The Tuya’s cloud token only guarantees that there will be no problems in refreshing the targeted user level, but the concurrent refresh of a user’s token on multiple nodes will cause only one node to be successful and others to be failed.
Because the `get token` interface will return access_token and refresh_token, but the `refresh token` interface will erase the current refresh_token, and a new one will be invalidated.

### How to deal with the exception information and error of the API method?

If the interface returns an error, it can generally be a url error or a json parsing error, you can contact Tuya related staff to help modify.

If the error is empty, but the `success` field of `response` is false, the developer can check according to the detailed error information in the `Msg` field.

### In the interface for getting device list, if there are multiple deviceIDs, how to splice it?

Multiple deviceIDs, separated by English commas

### In the interface for obtaining user list, what does schema refer to?

After creating the APP-SDK, the channel identifier of the detail page is the schema.

### what does pair_token mean in `v1.0/devices/tokens/{{pair_token}}` interface? How to get it?

Pair_token refers to the network token of a user under the app, which can be obtained from v1.0/devices/token.

### If the API in the SDK is not updated in time, how to implement an API?

There are three methods:

- Custom class implementation
    1. If the request does not need to pass the body parameter, create a request class to inherit com.tuya.api.common.ApiRequest, and improve the two methods of getRequestMethod and getRequestUrl.
    If the interface needs to pass body parameters, it should inherit com.tuya.api.common.ApiRequestBody, and improve the getRequestMethod, getRequestUrl and getRequestBody methods;

    2. Expose the request method through the client class.

    > For details, please refer to the relevant examples in the example.user/example.device directory.

- Use the provided general interface
    Call CommonClient directly and pass in the corresponding parameters.

    > For details, please refer to the relevant examples in the example.common directory.

- Please submit an issue, and we will update it in time ^_^
## Support

You can get support from Tuya with the following methods:

- Tuya Smart Help Center: [https://support.tuya.com/en/help](https://support.tuya.com/en/help)
- Technical Support Council: [https://iot.tuya.com/council](https://iot.tuya.com/council)

