const RequestHandler = require("../../common/request_handler");
const Models = require("./models");

/**
 * 配网相关请求类
 */
class pairTokenClient {
    /**
     * 生成设备配网token请求类
     *
     * @param req
     * @param callback
     */
    static createDeviceParingToken(req, callback) {
        RequestHandler.sendRequestWithToken(new Models.PostDeviceParingTokenReq(req), callback)
    }

    /**
     * 获取配网token下所有设备列表
     *
     * @param token
     * @param callback
     */
    static getDevicesByToken(token, callback) {
        sRequestHandler.sendRequestWithToken(new Models.GetDevicesByTokenReq(token), callback)
    }

    /**
     * 开放网关允许子设备入网
     *
     * @param deviceId
     * @param duration
     * @param callback
     */
    static enabledSubDiscovery(deviceId, duration, callback) {
        RequestHandler.sendRequestWithToken(new Models.EnabledSubDiscoveryReq(deviceId, duration), callback)
    }

    /**
     * 获取入网子设备列表
     *
     * @param deviceId
     * @param discoveryTime
     * @param callback
     */
    static getParingDevices(deviceId, discoveryTime, callback) {
        RequestHandler.sendRequestWithToken(new Models.GetParingDevicesReq(deviceId, discoveryTime), callback)
    }

    /**
     *
     * @param deviceId
     * @param callback
     */
    static getGatewaySubDevices(deviceId, callback) {
        RequestHandler.sendRequestWithToken(new Models.GetGatewaySubDevicesReq(deviceId), callback)
    }
}

module.exports = pairTokenClient;