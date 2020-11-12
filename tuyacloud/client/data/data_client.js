const RequestHandler = require("../../common/request_handler");
const Models = require("./models");

/**
 * 数据相关请求类
 */
class DataClient {

    /**
     * 获取数据总体概况
     */
    static getStatisticsDatasSurvey(productId, callback) {
        RequestHandler.sendRequestWithToken(new Models.GetStatisticsDatasSurveyReq(productId), callback)
    }

    /**
     * 统计App日注册用户数
     * @param schema
     * @param dateType
     * @param callback
     */
    static getUsersActiveDatas(schema, dateType, callback) {
        RequestHandler.sendRequestWithToken(new Models.GetUsersActiveDatasReq(schema, dateType), callback)
    }

    /**
     * 统计App日活跃用户数
     * @param schema
     * @param dateType
     * @param callback
     */
    static getUsersLiveDatas(schema, dateType, callback) {
        RequestHandler.sendRequestWithToken(new Models.GetUsersLiveDatasReq(schema, dateType), callback)
    }

    /**
     * 统计App日活跃用户数
     * @param schema
     * @param callback
     */
    static getDevicesSurveyReq(schema, callback) {
        RequestHandler.sendRequestWithToken(new Models.GetDevicesSurveyReq(schema), callback)
    }


    /**
     * 获取设备总体概况
     *
     * @param productId
     * @param callback
     */
    static getDatasSurvey(productId, callback) {
        RequestHandler.sendRequestWithToken(new Models.GetDatasSurveyReq(productId), callback)
    }

    /**
     * 获取活跃设备地区分布数据
     *
     * @param dataType
     * @param productId
     * @param type
     * @param limit
     */
    static getLocationsLiveDatas(dataType, productId, type, limit) {
        RequestHandler.sendRequestWithToken(new Models.GetLocationsLiveDatasReq(dataType, productId, type, limit), callback)
    }

    /**
     * 获取激活设备地区分布详情数据
     *
     * @param dataType
     * @param productId
     * @param type
     * @param limit
     */
    static getLocationsActiveDatas(dataType, productId, type, limit) {
        RequestHandler.sendRequestWithToken(new Models.GetLocationsActiveDatasReq(dataType, productId, type, limit), callback)
    }

    /**
     * 统计设备日活跃数
     *
     * @param dataType
     * @param productId
     */
    static getLiveDatas(dataType, productId) {
        RequestHandler.sendRequestWithToken(new Models.GetLiveDatasReq(dataType, productId), callback)
    }

    /**
     * 统计设备日激活数
     *
     * @param dataType
     * @param productId
     */
    static getActiveDatas(dataType, productId) {
        RequestHandler.sendRequestWithToken(new Models.GetActiveDatasReq(dataType, productId), callback)
    }


    /**
     * 统计设备日累计激活数据
     *
     * @param dataType
     * @param productId
     */
    static getAccumulateActiveDatas(dataType, productId) {
        RequestHandler.sendRequestWithToken(new Models.GetAccumulateActiveDatasReq(dataType, productId), callback)
    }

    /**
     * 获取设备活跃数据概况
     *
     * @param productId
     */
    static getLiveDatasSurvey(productId) {
        RequestHandler.sendRequestWithToken(new Models.GetLiveDatasSurveyReq(schema), callback)
    }

    /**
     * 获取设备激活数据概况
     *
     * @param productId
     */
    static getActiveDatasSurvey(productId) {
        RequestHandler.sendRequestWithToken(new Models.GetActiveDatasSurveyReq(productId), callback)
    }

    /**
     * 获取历史累计值
     *
     * @param deviceId
     * @param code
     */
    static getStatisticsTotalReq(deviceId, code) {
        RequestHandler.sendRequestWithToken(new Models.GetStatisticsTotalReq(deviceId, code), callback)
    }

    /**
     * 查询具体的设备当前可支持的统计类型
     *
     * @param deviceId
     * @param code
     * @constructor
     */
    static GetAllStatisticsTypeReq(deviceId, code) {
        RequestHandler.sendRequestWithToken(new Models.GetAllStatisticsTypeReq(deviceId, code), callback)
    }

    /**
     * 获取历史累计值
     *
     * @param deviceId
     * @param code
     * @param startMinute
     * @param endMinute
     */
    static getStatisticsByQuarterReq(deviceId, code, startMinute, endMinute) {
        RequestHandler.sendRequestWithToken(new Models.GetStatisticsByQuarterReq(deviceId, code, startMinute, endMinute), callback)
    }

}

module.exports = DataClient;