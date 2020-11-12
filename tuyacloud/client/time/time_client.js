const RequestHandler = require("../../common/request_handler");
const Models = require("./models");

/**
 * 定时相关请求类
 */
class TimeClient {

    /**
     * 设备添加定时任务
     *
     * @param deviceId
     * @param timeInfo
     * @param callback
     */
    static addDeviceTimer(deviceId, timeInfo, callback) {
        RequestHandler.sendRequestWithToken(new Models.AddDeviceTimerReq(deviceId, timeInfo), callback)
    }

    /**
     * 查询指定设备Id下已添加定时任务的详细信息列表
     *
     * @param deviceId
     * @param callback
     */
    static getDeviceTimers(deviceId, callback) {
        RequestHandler.sendRequestWithToken(new Models.GetDeviceTimersReq(deviceId), callback)
    }

    /**
     * 获取指定设备下某⼀个分类下⾯的定时任务信息
     *
     * @param deviceId
     * @param category
     * @param callback
     */
    static getDeviceTimerByCategory(deviceId, category, callback) {
        RequestHandler.sendRequestWithToken(new Models.GetDeviceTimerByCategoryReq(deviceId, category), callback)
    }

    /**
     * 设备添加定时任务
     *
     * @param deviceId
     * @param groupId
     * @param timeInfo
     * @param callback
     * @constructor
     */
    static UpdateDeviceTimer(deviceId, groupId, timeInfo, callback) {
        RequestHandler.sendRequestWithToken(new Models.UpdateDeviceTimerReq(deviceId, groupId, timeInfo), callback)
    }

    /**
     * 删除设备下的所有定时任务
     *
     * @param deviceId
     * @param callback
     * @constructor
     */
    static DeleteDeviceTimers(deviceId, callback) {
        RequestHandler.sendRequestWithToken(new Models.DeleteDeviceTimersReq(deviceId), callback)
    }

    /**
     * 删除某个分类的定时任务
     *
     * @param deviceId
     * @param category
     * @param callback
     */
    static deleteDeviceCategoryTimers(deviceId, category, callback) {
        RequestHandler.sendRequestWithToken(new Models.DeleteDeviceCategoryTimersReq(deviceId, category), callback)
    }

    /**
     * 删除某个分类下⾯面的某个定时组的定时任务
     *
     * @param deviceId
     * @param category
     * @param groupId
     * @param callback
     */
    static deleteDeviceCategoryTimer(deviceId, category, groupId, callback) {
        RequestHandler.sendRequestWithToken(new Models.DeleteDeviceCategoryTimerReq(deviceId, category, groupId), callback)
    }

    /**
     * 获取设备群组下的定时任务
     *
     * @param deviceGroupId
     * @param callback
     */
    static getDeviceGroupTimers(deviceGroupId, callback) {
        RequestHandler.sendRequestWithToken(new Models.GetDeviceGroupTimersReq(deviceGroupId), callback)
    }

    /**
     * 查询群组分类定时任务列表
     *
     * @param deviceGroupId
     * @param category
     * @param callback
     */
    static getDeviceGroupCategoryTimers(deviceGroupId, category, callback) {
        RequestHandler.sendRequestWithToken(new Models.GetDeviceGroupCategoryTimersReq(deviceGroupId, category), callback)
    }

    /**
     * 创建群组定时任务
     *
     * @param groupTimeInfo
     * @param callback
     */
    static addDeviceGroupTimer(groupTimeInfo, callback) {
        RequestHandler.sendRequestWithToken(new Models.AddDeviceGroupTimerReq(groupTimeInfo), callback)
    }

    /**
     * 更新群组定时任务
     *
     * @param deviceGroupId
     * @param groupId
     * @param groupTimeInfo
     * @param callback
     */
    static updateDeviceGroupTimer(deviceGroupId, groupId, groupTimeInfo, callback) {
        RequestHandler.sendRequestWithToken(new Models.UpdateDeviceGroupTimerReq(deviceGroupId, groupId, groupTimeInfo), callback)
    }

    /**
     * 更新群组分类定时任务
     *
     * @param deviceGroupId
     * @param category
     * @param groupId
     * @param value
     * @param callback
     */
    static updateDeviceGroupTimerStatus(deviceGroupId, category, groupId, value, callback) {
        RequestHandler.sendRequestWithToken(new Models.UpdateDeviceGroupTimerStatusReq(deviceGroupId, category, groupId, value), callback)
    }

    /**
     * 删除设备群组下的定时任务
     *
     * @param deviceGroupId
     * @param callback
     */
    static deleteDeviceGroupTimers(deviceGroupId, callback) {
        RequestHandler.sendRequestWithToken(new Models.DeleteDeviceGroupTimersReq(deviceGroupId), callback)
    }

    /**
     * 删除群组某个分类定时任务
     *
     * @param deviceGroupId
     * @param category
     * @param callback
     */
    static deleteDeviceGroupCategoryTimers(deviceGroupId, category, callback) {
        RequestHandler.sendRequestWithToken(new Models.DeleteDeviceGroupCategoryTimersReq(deviceGroupId, category), callback)
    }

    /**
     * 删除设备群组某个分类下的某个定时任务
     *
     * @param deviceGroupId
     * @param category
     * @param groupId
     * @param callback
     */
    static deleteDeviceGroupCategoryTimer(deviceGroupId, category, groupId, callback) {
        RequestHandler.sendRequestWithToken(new Models.DeleteDeviceGroupCategoryTimerReq(deviceGroupId, category, groupId), callback)
    }
}

module.exports = TimeClient;