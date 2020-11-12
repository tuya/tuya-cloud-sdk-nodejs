const RequestHandler = require("../../common/request_handler");
const Models = require("./models");


/**
 * 设备群组请求类
 */
class DeviceGroupClient {

    /**
     * 查询设备群组列表
     *
     * @param uid
     * @param pid
     * @param ownerId
     * @param callback
     */
    static getDeviceGroups(uid, pid, ownerId, callback){
        RequestHandler.sendRequestWithToken(new Models.GetDeviceGroupsReq(uid, pid, ownerId), callback)
    }

    /**
     * 查询群组详情
     *
     * @param groupId
     * @param callback
     */
    static getDeviceGroupById(groupId, callback){
        RequestHandler.sendRequestWithToken(new Models.GetDeviceGroupReq(groupId), callback)
    }

    /**
     * 查询群组列表
     *
     * @param uid
     * @param type
     * @param callback
     */
    static getUserDeviceGroupsReq(uid, type, callback){
        RequestHandler.sendRequestWithToken(new Models.GetUserDeviceGroupsReq(uid, type), callback)
    }

    /**
     * 创建群组列表
     *
     * @param uid
     * @param name
     * @param pid
     * @param ownerId
     * @param deviceList
     * @param callback
     */
    static createDeviceGroup(uid, name, pid, ownerId, deviceList, callback){
        RequestHandler.sendRequestWithToken(new Models.CreateDeviceGroupReq(uid, name, pid, ownerId, deviceList), callback)
    }

    /**
     * 更新群组列表
     *
     * @param groupId
     * @param name
     * @param deviceList
     */
    static updateDeviceGroupReq(groupId, name, deviceList, callback){
        RequestHandler.sendRequestWithToken(new Models.UpdateDeviceGroupReq(groupId, name, deviceList), callback)
    }

    /**
     * 删除群组列表
     *
     * @param groupId
     */
    static deleteDeviceGroupById(groupId, callback){
        RequestHandler.sendRequestWithToken(new Models.DeleteDeviceGroupReq(groupId), callback)
    }

    /**
     * 给设备群组下发指令
     *
     * @param deviceGroupId
     * @param functions
     * @param callback
     */
    static issueCommand2DeviceGroups(deviceGroupId, functions, callback){
        RequestHandler.sendRequestWithToken(new Models.IssueDeviceGroupsReq(deviceGroupId, functions), callback)
    }
}

module.exports = DeviceGroupClient;