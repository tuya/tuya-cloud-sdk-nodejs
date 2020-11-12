const RequestHandler = require("../../common/request_handler");
const Models = require("./models");

class HomeClient {

    /**
     * 添加家庭
     *
     * @param homeInfo
     * @param callback
     */
    static createHome(homeInfo, callback){
        RequestHandler.sendRequestWithToken(new Models.CreateHomeReq(homeInfo), callback)
    }

    /**
     * 更新家庭
     *
     * @param homeId
     * @param homeInfo
     * @param callback
     */
    static updateHome(homeId, homeInfo, callback){
        RequestHandler.sendRequestWithToken(new Models.UpdateHomeReq(homeId, homeInfo), callback)
    }

    /**
     * 删除家庭
     *
     * @param homeId
     * @param callback
     */
    static deleteHomeById(homeId, callback){
        RequestHandler.sendRequestWithToken(new Models.DeleteHomeReq(homeId), callback)
    }

    /**
     * 获取家庭信息
     *
     * @param homeId
     * @param callback
     * @constructor
     */
    static getHomeInfoById(homeId, callback) {
        RequestHandler.sendRequestWithToken(new Models.GetHomeInfoReq(homeId), callback)
    }

    /**
     * 获取家庭设备信息
     *
     * @param homeId
     * @param callback
     */
    static getHomeDeviceList(homeId, callback) {
        RequestHandler.sendRequestWithToken(new Models.GetHomeDeviceInfoReq(homeId), callback)
    }

    /**
     * 添加房间
     *
     * @param homeId
     * @param callback
     */
    static createRoom(homeId, callback) {
        RequestHandler.sendRequestWithToken(new Models.CreateRoomReq(homeId), callback)
    }

    /**
     * 更新房间
     *
     * @param homeId
     * @param roomId
     * @param roomInfo
     * @param callback
     */
    static updateRoomReq(homeId, roomId, roomInfo, callback) {
        RequestHandler.sendRequestWithToken(new Models.UpdateRoomReq(homeId, roomId, roomInfo), callback)
    }

    /**
     * 删除房间
     *
     * @param homeId
     * @param roomId
     * @param callback
     */
    static deleteRoomById(homeId, roomId, callback) {
        RequestHandler.sendRequestWithToken(new Models.DeleteRoomReq(homeId, roomId), callback)
    }

    /**
     * 获取家庭下房间列表信息
     *
     * @param homeId
     * @param callback
     */
    static getHomeRoomsById(homeId, callback) {
        RequestHandler.sendRequestWithToken(new Models.GetHomeRoomsReq(homeId), callback)
    }

    /**
     * 添加家庭成员
     *
     * @param homeId
     * @param memberInfo
     * @param callback
     */
    static addHomeMember(homeId, memberInfo, callback) {
        RequestHandler.sendRequestWithToken(new Models.AddHomeMemberReq(homeId, memberInfo), callback)
    }

    /**
     * 设置成员权限
     *
     * @param homeId
     * @param uid
     * @param auth
     * @param callback
     */
    static setMemberAuth(homeId, uid, auth, callback) {
        RequestHandler.sendRequestWithToken(new Models.SetMemberAuthReq(homeId, uid, auth), callback)
    }

    /**
     * 获取家庭成员
     *
     * @param homeId
     * @constructor
     */
    static getHomeMembers(homeId, callback) {
        RequestHandler.sendRequestWithToken(new Models.GetHomeMembersReq(homeId), callback)
    }

    /**
     * 获取家庭成员所有家庭
     *
     * @param uid
     * @param callback
     */
    static getUserHomes(uid, callback) {
        RequestHandler.sendRequestWithToken(new Models.GetUserHomesReq(uid), callback)
    }

    /**
     * 获取房间设备
     * @param homeId
     * @param roomId
     * @param callback
     */
    static getRoomDevices(homeId, roomId, callback) {
        RequestHandler.sendRequestWithToken(new Models.GetRoomDevicesReq(homeId, roomId), callback)
    }

    /**
     * 添加房间设备
     *
     * @param homeId
     * @param roomId
     * @param deviceIds
     * @param callback
     */
    static addRoomDevicesReq(homeId, roomId, deviceIds, callback) {
        RequestHandler.sendRequestWithToken(new Models.AddRoomDevicesReq(homeId, roomId, deviceIds), callback)
    }

    /**
     * 更新房间设备
     *
     * @param homeId
     * @param roomId
     * @param deviceIds
     * @param callback
     */
    static updateRoomDevicesReq(homeId, roomId, deviceIds, callback) {
        RequestHandler.sendRequestWithToken(new Models.UpdateRoomDevicesReq(deviceId, userId), callback)
    }

    /**
     * 删除房间设备
     *
     * @param homeId
     * @param roomId
     * @param deviceIds
     * @param callback
     */
    static deleteRoomDevicesReq(homeId, roomId, deviceIds, callback) {
        RequestHandler.sendRequestWithToken(new Models.DeleteRoomDevicesReq(homeId, roomId, deviceIds), callback)
    }
}

module.exports = HomeClient;