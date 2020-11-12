const ApiRequest = require("../../common/api_request");
const HttpMethod = require("../../common/http_method");

/**
 * 获取数据总体概况
 */
class GetStatisticsDatasSurveyReq extends ApiRequest {
    constructor(productId) {
        super();
        this.productId = productId
    }

    getRequestMethod() {
        return HttpMethod.GET;
    }

    getRequestUrl() {
       return `/v1.0/statistics-datas-survey?product_id=${this.productId}`
    }
}

/**
 * 统计App日注册用户数
 */
class GetUsersActiveDatasReq extends ApiRequest {
    constructor(schema, dateType) {
        super();
        this.schema = schema;
        this.dateType = dateType;
    }

    getRequestMethod() {
        return HttpMethod.GET;
    }

    getRequestUrl() {
        return `/v1.0/apps/${this.schema}/users-active-datas?date_type=${this.dateType}`
    }
}

/**
 * 统计App日活跃用户数
 */
class GetUsersLiveDatasReq extends ApiRequest {
    constructor(schema, dateType) {
        super();
        this.schema = schema;
        this.dateType = dateType;
    }

    getRequestMethod() {
        return HttpMethod.GET;
    }

    getRequestUrl() {
        return `/v1.0/apps/${this.schema}/users-live-datas?date_type=${this.dateType}`
    }
}

/**
 * 统计App日活跃用户数
 */
class GetDevicesSurveyReq extends ApiRequest {
    constructor(schema) {
        super();
        this.schema = schema;
    }

    getRequestMethod() {
        return HttpMethod.GET;
    }

    getRequestUrl() {
        return `/v1.0/apps/${this.schema}/devices-survey`
    }
}

/**
 * 获取设备总体概况
 */
class GetDatasSurveyReq extends ApiRequest {
    constructor(productId) {
        super();
        this.productId = productId;
    }

    getRequestMethod() {
        return HttpMethod.GET;
    }

    getRequestUrl() {
        return `/v1.0/devices/datas-survey?product_id=${this.productId}`
    }
}

/**
 * 获取活跃设备地区分布数据
 */
class GetLocationsLiveDatasReq extends ApiRequest {
    constructor(dataType, productId, type, limit) {
        super();
        this.dataType = dataType;
        this.productId = productId;
        this.type = type;
        this.limit = limit;
    }

    getRequestMethod() {
        return HttpMethod.GET;
    }

    getRequestUrl() {
        return `/v1.0/devices/locations-live-datas?date_type=${this.dataType}&productId=${this.productId}&type=${this.type}&limit=${this.limit}`
    }
}

/**
 * 获取激活设备地区分布详情数据
 */
class GetLocationsActiveDatasReq extends ApiRequest {
    constructor(dataType, productId, type, limit) {
        super();
        this.dataType = dataType;
        this.productId = productId;
        this.type = type;
        this.limit = limit;
    }

    getRequestMethod() {
        return HttpMethod.GET;
    }

    getRequestUrl() {
        return `/v1.0/devices/locations-active-datas?date_type=${this.dataType}&productId=${this.productId}&type=${this.type}&limit=${this.limit}`
    }
}

/**
 * 统计设备日活跃数
 */
class GetLiveDatasReq extends ApiRequest {
    constructor(dataType, productId) {
        super();
        this.dataType = dataType;
        this.productId = productId;
    }

    getRequestMethod() {
        return HttpMethod.GET;
    }

    getRequestUrl() {
        return `/v1.0/devices/live-datas?date_type=${this.dataType}&productId=${this.productId}`
    }
}

/**
 * 统计设备日激活数
 */
class GetActiveDatasReq extends ApiRequest {
    constructor(dataType, productId) {
        super();
        this.dataType = dataType;
        this.productId = productId;
    }

    getRequestMethod() {
        return HttpMethod.GET;
    }

    getRequestUrl() {
        return `/v1.0/devices/active-datas?date_type=${this.dataType}&productId=${this.productId}`
    }
}

/**
 * 统计设备日累计激活数据
 */
class GetAccumulateActiveDatasReq extends ApiRequest {
    constructor(dataType, productId) {
        super();
        this.dataType = dataType;
        this.productId = productId;
    }

    getRequestMethod() {
        return HttpMethod.GET;
    }

    getRequestUrl() {
        return `/v1.0/devices/accumulate-active-datas?date_type=${this.dataType}&productId=${this.productId}`
    }
}

/**
 * 获取设备活跃数据概况
 */
class GetLiveDatasSurveyReq extends ApiRequest {
    constructor(productId) {
        super();
        this.productId = productId;
    }

    getRequestMethod() {
        return HttpMethod.GET;
    }

    getRequestUrl() {
        return `/v1.0/devices/live-datas-survey?product_id=${this.productId}`
    }
}

/**
 * 获取设备激活数据概况
 */
class GetActiveDatasSurveyReq extends ApiRequest {
    constructor(productId) {
        super();
        this.productId = productId;
    }

    getRequestMethod() {
        return HttpMethod.GET;
    }

    getRequestUrl() {
        return `/v1.0/devices/active-datas-survey?product_id=${this.productId}`
    }
}

/**
 * 获取历史累计值
 */
class GetStatisticsTotalReq extends ApiRequest {
    constructor(deviceId, code) {
        super();
        this.deviceId = deviceId;
        this.code = code;
    }

    getRequestMethod() {
        return HttpMethod.GET;
    }

    getRequestUrl() {
        return `/v1.0/devices/${this.deviceId}/statistics/total?code=${this.code}`
    }
}

/**
 * 查询具体的设备当前可支持的统计类型
 */
class GetAllStatisticsTypeReq extends ApiRequest {
    constructor(deviceId, code) {
        super();
        this.deviceId = deviceId;
        this.code = code;
    }

    getRequestMethod() {
        return HttpMethod.GET;
    }

    getRequestUrl() {
        return `/v1.0/devices/${this.deviceId}/all-statistic-type?code=${this.code}`
    }
}

/**
 * 获取历史累计值
 */
class GetStatisticsByQuarterReq extends ApiRequest {
    constructor(deviceId, code, startMinute, endMinute) {
        super();
        this.deviceId = deviceId;
        this.code = code;
        this.startMinute = startMinute;
        this.endMinute = endMinute;
    }

    getRequestMethod() {
        return HttpMethod.GET;
    }

    getRequestUrl() {
        return `/v1.0/devices/${this.deviceId}/statistics/quarters?code=${this.code}&start_minute=${this.startMinute}&end_minute=${this.endMinute}`
    }
}

module.exports = {
    GetStatisticsDatasSurveyReq: GetStatisticsDatasSurveyReq,
    GetUsersActiveDatasReq: GetUsersActiveDatasReq,
    GetUsersLiveDatasReq: GetUsersLiveDatasReq,
    GetDevicesSurveyReq: GetDevicesSurveyReq,
    GetDatasSurveyReq: GetDatasSurveyReq,
    GetLocationsLiveDatasReq: GetLocationsLiveDatasReq,
    GetLocationsActiveDatasReq: GetLocationsActiveDatasReq,
    GetLiveDatasReq: GetLiveDatasReq,
    GetActiveDatasReq: GetActiveDatasReq,
    GetAccumulateActiveDatasReq: GetAccumulateActiveDatasReq,
    GetLiveDatasSurveyReq: GetLiveDatasSurveyReq,
    GetActiveDatasSurveyReq: GetActiveDatasSurveyReq,
    GetStatisticsTotalReq: GetStatisticsTotalReq,
    GetAllStatisticsTypeReq: GetAllStatisticsTypeReq,
    GetStatisticsByQuarterReq: GetStatisticsByQuarterReq
}