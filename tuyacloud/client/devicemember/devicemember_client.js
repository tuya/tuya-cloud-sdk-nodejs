const RequestHandler = require("../../common/request_handler");
const Models = require("./models");

class DeviceMemberClient {

    /**
     * 新增设备用户
     */
    static addDeviceUser(deviceId, userInfo, callback) {
        RequestHandler.sendRequestWithToken(new Models.AddDeviceUserReq(deviceId, userInfo), callback)
    }

    /**
     * 修改设备用户
     *
     * @param deviceId
     * @param userId
     * @param userInfo
     */
    static updateDeviceUser(deviceId, userId, userInfo, callback) {
        RequestHandler.sendRequestWithToken(new Models.UpdateDeviceUserReq(deviceId, userId, userInfo), callback)
    }

    /**
     * 删除设备用户
     *
     * @param deviceId
     * @param userId
     * @param callback
     */
    static deleteDeviceUser(deviceId, userId, callback) {
        RequestHandler.sendRequestWithToken(new Models.DeleteDeviceUserReq(deviceId, userId), callback)
    }

    /**
     * 获取设备用户
     *
     * @param deviceId
     * @param userId
     * @param callback
     */
    static getDeviceUser(deviceId, userId, callback) {
        RequestHandler.sendRequestWithToken(new Models.GetDeviceUserReq(deviceId), callback)
    }

    /**
     * 获取设备下所有用户
     *
     * @param deviceId
     * @param callback
     */
    static getDeviceUserList(deviceId, callback) {
        RequestHandler.sendRequestWithToken(new Models.GetDeviceUsersReq(deviceId), callback)
    }
}


module.exports = DeviceMemberClient;