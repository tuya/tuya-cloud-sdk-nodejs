const RequestHandler = require("../../common/request_handler");
const Models = require("./models");

/**
 * 设备控制请求类
 */
class DeviceControlClient {

    /**
     * 根据category获取function列表请求类
     *
     * @param category
     */
    static getDeviceFunctionByCategory(category, callback) {
        RequestHandler.sendRequestWithToken(new Models.GetDeviceFunctionByCategoryReq(category), callback)
    }

    /**
     * 获取设备功能点的信息请求类
     *
     * @param deviceId
     * @constructor
     */
    static getDeviceStatus(deviceId, callback) {
        RequestHandler.sendRequestWithToken(new Models.GetDeviceStatusReq(deviceId), callback)
    }

    /**
     * 批量获取设备状态请求类
     *
     * @param deviceId
     */
    static getDeviceList(deviceId, callback) {
        RequestHandler.sendRequestWithToken(new Models.GetDeviceListReq(deviceId), callback)
    }

    /**
     * 设备指令下发请求类
     *
     * @param deviceId
     * @param callback
     */
    static issueDeviceCommand(deviceId, callback) {
        RequestHandler.sendRequestWithToken(new Models.PostDeviceCommandReq(deviceId), callback)
    }


    /**
     * 获取设备指令集
     *
     * @param deviceId
     */
    static getDeviceFunctions(deviceId, callback){
        RequestHandler.sendRequestWithToken(new Models.GetDeviceFunctionsReq(deviceId), callback)
    }

    /**
     * 获取设备规格属性
     *
     * @param deviceId
     */
    static getDeviceSpecificationsReq(deviceId, callback){
        RequestHandler.sendRequestWithToken(new Models.GetDeviceSpecificationsReq(deviceId), callback)
    }
}

module.exports = DeviceControlClient;