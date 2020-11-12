const TuyaCloudSDKException = require("../exception/tuya_cloud_sdk_exception");
const ApiRequest = require("./api_request");

/**
 * 请求body抽象类
 */
class ApiRequestBody extends ApiRequest{
    constructor() {
        super();
    }

    getRequestBody() {
        throw new TuyaCloudSDKException('please overwrite getRequestBody method');
    }
}

module.exports = ApiRequestBody;