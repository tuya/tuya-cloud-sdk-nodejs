const RequestHandler = require("../../common/request_handler");
const Models = require("./models");


/**
 * 设备操作客户端类
 */
class DeviceClient {


    /**
     * 获取设备信息
     *
     * @param deviceId
     * @param callback
     */
    static getDevice(deviceId, callback) {
        RequestHandler.sendRequestWithToken(new Models.GetDeviceReq(deviceId), callback);
    }

    /**
     * 获取设备支持的function列表
     *
     * @param deviceId
     * @param callback
     */
    static getDeviceFunctions(deviceId, callback) {
        RequestHandler.sendRequestWithToken(new Models.GetDeviceFunctionsReq(deviceId), callback);
    }

    /**
     * 根据category获取function列表
     *
     * @param category
     * @param callback
     */
    static getDeviceFunctionByCategory(category, callback) {
        RequestHandler.sendRequestWithToken(new Models.GetDeviceFunctionByCategoryReq(category), callback);
    }

    /**
     * 获取设备功能点的信息
     *
     * @param deviceId
     * @param callback
     */
    static getDeviceStatus(deviceId, callback) {
        RequestHandler.sendRequestWithToken(new Models.GetDeviceStatusReq(deviceId), callback);
    }


    /**
     * 批量获取设备状态
     *
     * @param deviceId
     * @param callback
     */
    static getDeviceList(deviceId, callback) {
        RequestHandler.sendRequestWithToken(new Models.GetDeviceListReq(deviceId), callback);
    }

    /**
     * 设备指令下发
     *
     * @param req
     * @param callback
     */
    static postDeviceCommand(req, callback) {
        RequestHandler.sendRequestWithToken(req, callback);
    }

    /**
     * 移除设备
     *
     * @param deviceId
     * @param callback
     */
    static deleteDevice(deviceId, callback) {
        RequestHandler.sendRequestWithToken(new Models.DeleteDeviceReq(deviceId), callback);
    }

    /**
     * 根据用户id获取设备列表
     *
     * @param uid
     * @param callback
     */
    static getDeviceListByUid(uid, callback) {
        RequestHandler.sendRequestWithToken(new Models.GetDeviceListByUidReq(uid), callback);
    }

    /**
     * 生成设备配网token
     *
     * @param req
     * @param callback
     */
    static generateDeviceToken(req, callback) {
        RequestHandler.sendRequestWithToken(req, callback);
    }

    /**
     * 获取配网token下所有设备列表
     *
     * @param token 云端返回的设备配网token
     * @param callback
     */
    static getDevicesByToken(token, callback) {
        RequestHandler.sendRequestWithToken(new Models.GetDevicesByTokenReq(token), callback);
    }
}

module.exports = DeviceClient;