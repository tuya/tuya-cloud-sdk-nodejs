const TuyaCloudSDKException = require("../exception/tuya_cloud_sdk_exception");

/**
 * 请求抽象类
 */
class ApiRequest {

    constructor() {

    }

    getRequestMethod() {
        throw new TuyaCloudSDKException("", 'please overwrite getRequestMethod method');
    }

    getRequestUrl() {
        throw new TuyaCloudSDKException("", 'please overwrite getRequestUrl method');
    }
}

module.exports = ApiRequest;