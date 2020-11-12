const ApiRequest = require("../../common/api_request");
const ApiRequestBody = require("../../common/api_request_body");
const HttpMethod = require("../../common/http_method");

/**
 * 根据category获取function列表请求类
 */
class GetDeviceFunctionByCategoryReq extends ApiRequest {

    constructor(category) {
        super();
        this.category = category;
    }

    getRequestUrl() {
        return `/v1.0/functions/${this.category}`;
    }


    getRequestMethod() {
        return HttpMethod.GET;
    }

}

/**
 * 获取设备功能点的信息请求类
 */
class GetDeviceStatusReq extends ApiRequest {

    constructor(deviceId) {
        super();
        this.deviceId = deviceId
    }

    getRequestUrl() {
        return `/v1.0/devices/${this.deviceId}/status`;
    }


    getRequestMethod() {
        return HttpMethod.GET;
    }

}

/**
 * 批量获取设备状态请求类
 */
class GetDeviceListReq extends ApiRequest {

    constructor(deviceId) {
        super();
        this.deviceId = deviceId
    }

    getRequestUrl() {
        return `/v1.0/devices/status?device_ids=${this.deviceId}`;
    }

    getRequestMethod() {
        return HttpMethod.GET;
    }

}

/**
 * 设备指令下发请求类
 */
class PostDeviceCommandReq extends ApiRequestBody {

    constructor(deviceId) {
        super();
        this.deviceId = deviceId
    }

    getRequestUrl() {
        return `/v1.0/devices/${this.deviceId}/commands`;
    }

    getRequestMethod() {
        return HttpMethod.POST;
    }

}

/**
 * 获取设备指令集
 */
class GetDeviceFunctionsReq extends ApiRequest{
    constructor(deviceId){
        super();
        this.deviceId = deviceId
    }


    getRequestMethod() {
        return HttpMethod.GET;
    }

    getRequestUrl() {
        return `/v1.0/devices/${this.deviceId}/functions`;
    }
}

/**
 * 获取设备规格属性
 */
class GetDeviceSpecificationsReq extends ApiRequest{
    constructor(deviceId){
        super();
        this.deviceId = deviceId
    }

    getRequestMethod() {
        return HttpMethod.GET;
    }

    getRequestUrl() {
        return `/v1.0/devices/${this.deviceId}/specifications`;
    }
}

module.exports = {
    GetDeviceFunctionByCategoryReq: GetDeviceFunctionByCategoryReq,
    GetDeviceStatusReq: GetDeviceStatusReq,
    GetDeviceListReq: GetDeviceListReq,
    PostDeviceCommandReq: PostDeviceCommandReq,
    GetDeviceFunctionsReq: GetDeviceFunctionsReq,
    GetDeviceSpecificationsReq: GetDeviceSpecificationsReq
};