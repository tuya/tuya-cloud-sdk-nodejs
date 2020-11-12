const Region = require("./region");
const TuyaCloudSDKException = require("../exception/tuya_cloud_sdk_exception");


/**
 * 配置类
 */
class Config {

    /**
     * 设置开发者信息
     *
     * @param accessId
     * @param accessKey
     * @param endpoint
     */
    static init(accessId, accessKey, endpoint) {
        if (accessId === "" || accessKey === "" || !(endpoint instanceof Region)) {
            throw new TuyaCloudSDKException("开发者信息有误！");
        }

        global.accessId = accessId;
        global.accessKey = accessKey;
        global.endpoint = endpoint.getUrl();
    }
}

module.exports = Config;


