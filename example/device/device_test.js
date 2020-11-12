const tuyacloud = require("../../../tuya_cloud_sdk_nodejs");

const Config = tuyacloud.common.Config;
const Region = tuyacloud.common.Region;
const DeviceClient = tuyacloud.client.device.DeviceClient;
const Models = tuyacloud.client.device.Models;


let accessId = "xxx";
let accessKey = "xxx";

// 1、初始化开发者信息
Config.init(accessId, accessKey, Region.URL_CN);


let deviceId = 'xxx';

let callback = function(err, data) {
    if (err) {
        console.log(err);
        return;
    }

    console.log(data);
};

// 获取设备信息
DeviceClient.getDevice(deviceId, callback);

// // 获取设备支持的function列表
// DeviceClient.getDeviceFunctions(deviceId, callback);
//
//
// // 根据category获取function列表
// let category = 'fz';
// DeviceClient.getDeviceFunctionByCategory(category, callback);
//
// // 获取设备功能点的信息
// DeviceClient.getDeviceStatus(deviceId, callback);
//
// // 批量获取设备状态
// DeviceClient.getDeviceList(deviceId, callback);
//
// // 设备指令下发
// let postDeviceCommandReq = new Models.PostDeviceCommandReq(deviceId);
// DeviceClient.postDeviceCommand(postDeviceCommandReq, callback);
//
// // 移除设备
// DeviceClient.deleteDevice(deviceId, callback);
//
//
// let uid = 'ay1573709405907Z2jLA';
//
// // 根据用户id获取设备列表
// DeviceClient.getDeviceListByUid(uid, callback);
//
// // 生成设备配网token
// let generateDeviceTokenReq = new Models.PostDeviceTokenReq(uid, 'Asia/Shanghai', 30.123, 147.892, 'en');
// DeviceClient.generateDeviceToken(generateDeviceTokenReq, callback);
//
// // 获取配网token下所有设备列表
// let token = ''
// DeviceClient.getDevicesByToken(token, callback);