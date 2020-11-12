const tuyacloud = require("../../../tuya_cloud_sdk_nodejs");

const Config = tuyacloud.common.Config;
const Region = tuyacloud.common.Region;
const CommonClient = tuyacloud.client.CommonClient;
const HttpMethod = tuyacloud.common.HttpMethod;


let accessId = "xxx";
let accessKey = "xxx";

// 1、初始化开发者信息
Config.init(accessId, accessKey, Region.URL_CN);


let callback = function(err, data) {
    if (err) {
        console.log(err);
        return;
    }

    console.log(data);
};


// 获取设备信息
let url = "/v1.0/devices/xxx";
CommonClient.sendRequest(url, HttpMethod.GET, {}, "", callback);

