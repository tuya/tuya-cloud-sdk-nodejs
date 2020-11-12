const RequestHandler = require("../../common/request_handler");
const Models = require("./models");


/**
 * 自动化请求类
 */
class AutomationClient {

    /**
     * 添加自动化
     *
     * @param homeId
     * @param automationInfo
     * @constructor
     */
    static addAutomation(homeId, automationInfo) {
        RequestHandler.sendRequestWithToken(new Models.AddAutomationReq(homeId, automationInfo));
    }


    /**
     * 更新自动化
     *
     * @param homeId
     * @param automationId
     * @param automationInfo
     * @param callback
     * @constructor
     */
    static updateAutomation(homeId, automationId, automationInfo, callback) {
        RequestHandler.sendRequestWithToken(new Models.UpdateAutomationReq(homeId, automationId, automationInfo), callback);
    }

    /**
     * 删除自动化
     *
     * @param homeId
     * @param automationId
     * @param callback
     * @constructor
     */
    static deleteAutomationById(homeId, automationId, callback) {
        RequestHandler.sendRequestWithToken(new Models.DeleteAutomationReq(homeId, automationId), callback);
    }

    /**
     * 触发外部自动化
     *
     * @param homeId
     * @param automationId
     * @param conditions
     * @param callback
     */
    static triggerAutomationReq(homeId, automationId, conditions, callback) {
        RequestHandler.sendRequestWithToken(new Models.TriggerAutomationReq(homeId, automationId, conditions), callback);
    }

    /**
     * 获取家庭下的自动化列表
     * @param homeId
     * @param callback
     */
    static getHomeAutomationList (homeId, callback) {
        RequestHandler.sendRequestWithToken(new Models.GetHomeEnableLinkageCodesReq(homeId), callback);
    }


    /**
     * 获取家庭下的某个自动化
     * @param homeId
     * @param automationId
     * @param callback
     */
    static getAutomationInfoById(homeId, automationId, callback) {
        RequestHandler.sendRequestWithToken(new Models.GetAutomationInfoReq(homeId, automationId), callback)
    }


    /**
     * 查询家庭下支持自动化的设备列表
     *
     * @param homeId
     * @param type
     * @param callback
     */
    static getSupportedAutomationDeviceList(homeId, type, callback) {
        RequestHandler.sendRequestWithToken(new Models.GetSupportedAutomationDevicesReq(homeId, type), callback)
    }

    /**
     * 查询自动化支持的天气条件
     */
    static getWeatherConditions(callback) {
        RequestHandler.sendRequestWithToken(new Models.GetWeatherConditionsReq(), callback)
    }


    /**
     * 根据家庭id获取联动条件或执行动作的标准功能点
     *
     * @param homeId
     * @param callback
     */
    static getHomeEnableLinkageCodes(homeId, callback) {
        RequestHandler.sendRequestWithToken(new Models.GetHomeEnableLinkageCodesReq(homeId), callback)
    }

    /**
     * 根据设备id获取联动条件或执行动作的标准功能点
     */
    static getDeviceEnableLinkageCodes(deviceId, callback) {
        RequestHandler.sendRequestWithToken(new Models.GetDeviceEnableLinkageCodesReq(deviceId), callback)
    }

    /**
     * 启用自动化
     *
     * @param homeId
     * @param automationId
     * @param callback
     */
    static enableAutomation(homeId, automationId, callback) {
        RequestHandler.sendRequestWithToken(new Models.EnableAutomationReq(homeId, automationId), callback)
    }

    /**
     * 停用自动化
     *
     * @param homeId
     * @param automationId
     * @param callback
     */
    static disableAutomation(homeId, automationId, callback) {
        RequestHandler.sendRequestWithToken(new Models.DisableAutomationReq(homeId, automationId), callback)
    }
}

module.exports = AutomationClient;