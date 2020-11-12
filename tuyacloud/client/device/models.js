const ApiRequest = require("../../common/api_request");
const ApiRequestBody = require("../../common/api_request_body");
const HttpMethod = require("../../common/http_method");

/**
 * 获取设备信息请求类
 */
class GetDeviceReq extends ApiRequest {
    constructor(deviceId) {
        super();
        this.deviceId = deviceId
    }

    getRequestUrl() {
        return `/v1.0/devices/${this.deviceId}`;
    }


    getRequestMethod() {
        return HttpMethod.GET;
    }
}

/**
 * 获取设备列表
 */
class GetDevicesReq extends ApiRequest {
    constructor(schema, productId, deviceIds, pageNo, pageSize) {
        super();
        this.schema = schema;
        this.productId = productId;
        this.deviceIds = deviceIds;
        this.pageNo = pageNo;
        this.pageSize = pageSize;
    }

    getRequestMethod() {
        return HttpMethod.GET;
    }

    getRequestUrl() {
        return `/v1.0/devices?schema=${this.schema}&product_id=${this.productId}&device_ids=${this.deviceIds}&page_no=${this.pageNo}&page_size=${this.pageSize}`;
    }
}

/**
 * 获取用户下设备列表
 */
class GetUserDevicesReq extends ApiRequest {
    constructor(uid) {
        super();
        this.uid = uid
    }


    getRequestMethod() {
        return HttpMethod.GET;
    }


    getRequestUrl() {
        return `/v1.0/users/${this.uid}/devices`;
    }
}

/**
 * 获取设备支持的function列表请求类
 */
class GetDeviceFunctionsReq extends ApiRequest {

    constructor(deviceId) {
        super();
        this.deviceId = deviceId
    }

    getRequestUrl() {
        return `/v1.0/devices/${this.deviceId}/functions`;
    }


    getRequestMethod() {
        return HttpMethod.GET;
    }

}

/**
 * 移除设备请求类
 */
class DeleteDeviceReq extends ApiRequest {

    constructor(deviceId) {
        super();
        this.deviceId = deviceId;
    }

    getRequestUrl() {
        return `/v1.0/devices/${this.deviceId}`;
    }


    getRequestMethod() {
        return HttpMethod.DELETE;
    }

}

/**
 * 修改功能点名称
 */
class UpdateDeviceFunctionCodeReq extends ApiRequestBody {
    constructor(deviceId, functionCode, name) {
        super();
        this.deviceId = deviceId;
        this.functionCode = functionCode;
        this.name = name
    }


    getRequestBody() {
        return JSON.stringify(this.name)
    }

    getRequestMethod() {
        return HttpMethod.PUT;
    }

    getRequestUrl() {
        return `/v1.0/devices/${this.deviceId}/functions/${this.functionCode}`
    }
}

/**
 * 获取设备日志
 */
class GetDeviceLogsReq extends ApiRequest {
    constructor(deviceId, codes, type, startRowKey, lastRowKey, lastEventTime, size, startTime, endTime, queryType){
        super();
        this.deviceId = deviceId;
        this.codes = codes;
        this.type = type;
        this.startRowKey = startRowKey;
        this.lastRowKey = lastRowKey;
        this.lastEventTime = lastEventTime;
        this.size = size;
        this.startTime = startTime;
        this.endTime = endTime;
        this.queryType = queryType;
    }


    getRequestMethod() {
        return HttpMethod.GET;
    }

    getRequestUrl() {
        return `/v1.0/devices/${this.deviceId}/logs?type=${this.type}&startTime=${this.startTime}&endTime=${this.endTime}
        &codes=${this.codes}&startRowKey=${this.startRowKey}&lastRowKey=${this.lastRowKey}&lastEventTime=${this.lastEventTime}
        &size=${this.size}&queryType=${this.queryType}`
    }
}

/**
 * 恢复设备出厂设置
 */
class ResetFactoryReq extends ApiRequest {
    constructor(deviceId) {
        super();
        this.deviceId = deviceId;
    }


    getRequestMethod() {
        return HttpMethod.PUT;
    }

    getRequestUrl() {
        return `/v1.0/devices/${this.deviceId}/reset-factory`
    }
}

/**
 * 移除设备
 */
class RemoveDeviceReq extends ApiRequest {
    constructor(deviceId) {
        super();
        this.deviceId = deviceId;
    }


    getRequestMethod() {
        return HttpMethod.DELETE;
    }

    getRequestUrl() {
        return `/v1.0/devices/${this.deviceId}`
    }
}

/**
 * 查询网关下的设备列表
 */
class GetSubDevicesListReq extends ApiRequest {
    constructor(deviceId) {
        super();
        this.deviceId = deviceId;
    }


    getRequestMethod() {
        return HttpMethod.GET;
    }

    getRequestUrl() {
        return `/v1.0/devices/${this.deviceId}/sub-devices`
    }
}

/**
 * 查询网关下的设备列表
 */
class GetDevicesFactoryInfoReq extends ApiRequest {
    constructor(deviceIds) {
        super();
        this.deviceIds = deviceIds;
    }

    getRequestMethod() {
        return HttpMethod.GET;
    }

    getRequestUrl() {
        return `/v1.0/devices/factory-infos?device_ids=${this.deviceIds}`
    }
}

/**
 * 修改设备名称
 */
class UpdateDeviceNameReq extends ApiRequest {
    constructor(deviceId) {
        super();
        this.deviceId = deviceId
    }


    getRequestMethod() {
        return HttpMethod.PUT;
    }

    getRequestUrl() {
        return `/v1.0/devices/${this.deviceId}`
    }
}

/**
 * 修改设备多路名称
 */
class UpdateDeviceMultipleNameReq extends ApiRequestBody {
    constructor(deviceId, identifier, name) {
        super();
        this.deviceId = deviceId;
        this.identifier = identifier;
        this.name = name;
    }


    getRequestBody() {
        return JSON.stringify(this);
    }

    getRequestMethod() {
        return HttpMethod.PUT;
    }

    getRequestUrl() {
        return `/v1.0/devices/${this.deviceId}/multiple-name`
    }
}

/**
 * 获取设备多路名称
 */
class getDeviceMultipleNameReq extends ApiRequest {
    constructor(deviceId) {
        super();
        this.deviceId = deviceId
    }


    getRequestMethod() {
        return HttpMethod.PUT;
    }

    getRequestUrl() {
        return `/v1.0/devices/${this.deviceId}/multiple-names`
    }
}

module.exports = {
    GetDeviceReq: GetDeviceReq,
    GetDeviceFunctionsReq: GetDeviceFunctionsReq,
    DeleteDeviceReq: DeleteDeviceReq,
    GetUserDevicesReq: GetUserDevicesReq,
    GetDevicesReq: GetDevicesReq,
    UpdateDeviceFunctionCodeReq: UpdateDeviceFunctionCodeReq,
    GetDeviceLogsReq: GetDeviceLogsReq,
    ResetFactoryReq: ResetFactoryReq,
    RemoveDeviceReq: RemoveDeviceReq,
    GetSubDevicesListReq: GetSubDevicesListReq,
    GetDevicesFactoryInfoReq: GetDevicesFactoryInfoReq,
    UpdateDeviceNameReq: UpdateDeviceNameReq,
    UpdateDeviceMultipleNameReq: UpdateDeviceMultipleNameReq,
    getDeviceMultipleNameReq: getDeviceMultipleNameReq
};