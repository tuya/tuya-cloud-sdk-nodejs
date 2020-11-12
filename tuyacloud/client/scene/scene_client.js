const RequestHandler = require("../../common/request_handler");
const Models = require("./models");

/**
 * 场景请求类
 */
class SceneClient {

    /**
     * 获取家庭下的场景
     *
     * @param homeId
     * @param callback
     */
    static getHomeScenes(homeId, callback) {
        RequestHandler.sendRequestWithToken(new Models.GetHomeScenesReq(homeId), callback)
    }

    /**
     * 查询默认场景图⽚列表
     */
    static getScenePictrues() {
        RequestHandler.sendRequestWithToken(new Models.GetScenePictruesReq(), callback)
    }

    /**
     * 查询家庭下支持场景的设备列表
     *
     * @param homeId
     * @param callback
     */
    static getSupportedSceneDevices(homeId, callback) {
        RequestHandler.sendRequestWithToken(new Models.GetSupportedSceneDevicesReq(homeId), callback)
    }

    /**
     * 给某个家庭下添加场景
     *
     * @param homeId
     * @param sceneInfo
     * @param callback
     * @constructor
     */
    static AddSceneReq(homeId, sceneInfo, callback) {
        RequestHandler.sendRequestWithToken(new Models.AddSceneReq(homeId, sceneInfo), callback)
    }

    /**
     * 给某个家庭下修改场景
     *
     * @param homeId
     * @param sceneId
     * @param sceneInfo
     * @param callback
     * @constructor
     */
    static updateScene(homeId, sceneId, sceneInfo, callback) {
        RequestHandler.sendRequestWithToken(new Models.UpdateSceneReq(homeId, sceneId, sceneInfo), callback)
    }

    /**
     * 删除场景
     *
     * @param homeId
     * @param sceneId
     * @param callback
     */
    static deleteScene(homeId, sceneId, callback) {
        RequestHandler.sendRequestWithToken(new Models.DeleteSceneReq(homeId, sceneId), callback)
    }

    /**
     * 触发场景
     *
     * @param homeId
     * @param sceneId
     * @param callback
     */
    static triggerScene(homeId, sceneId, callback) {
        RequestHandler.sendRequestWithToken(new Models.TriggerSceneReq(homeId, sceneId), callback)
    }

    /**
     * 场景绑定
     *
     * @param deviceId
     * @param sceneId
     * @param codeValue
     * @param callback
     */
    static deviceBindScene(deviceId, sceneId, codeValue, callback) {
        RequestHandler.sendRequestWithToken(new Models.DeviceBindSceneReq(deviceId, sceneId, codeValue), callback)
    }

    /**
     * 场景解绑
     *
     * @param deviceId
     * @param sceneId
     * @param code
     * @param callback
     */
    static deviceUnbindScene(deviceId, sceneId, code, callback) {
        RequestHandler.sendRequestWithToken(new Models.DeviceUnbindSceneReq(deviceId, sceneId, code), callback)
    }

    /**
     * 查询设备已绑定的场景列表
     *
     * @param deviceId
     * @param callback
     */
    static getDevicesScenes(deviceId, callback) {
        RequestHandler.sendRequestWithToken(new Models.GetDevicesScenesReq(deviceId), callback)
    }

}

module.exports = SceneClient;