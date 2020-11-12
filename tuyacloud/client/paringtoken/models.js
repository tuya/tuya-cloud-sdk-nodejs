const ApiRequest = require("../../common/api_request");
const ApiRequestBody = require("../../common/api_request_body");
const HttpMethod = require("../../common/http_method");

/**
 * 生成设备配网token请求类
 */
class PostDeviceParingTokenReq extends ApiRequestBody {

    constructor(req) {
        super();
        this.req = req;
    }

    getRequestUrl() {
        return `/v1.0/device/paring/token`;
    }

    getRequestMethod() {
        return HttpMethod.POST;
    }

    getRequestBody() {
        return JSON.stringify(this.req);
    }

}

/**
 * 获取配网token下所有设备列表
 */
class GetDevicesByTokenReq extends ApiRequest {
    constructor(token) {
        super();
        this.token = token;
    }

    getRequestUrl() {
        return `/v1.0/device/paring/tokens/${this.token}`;
    }


    getRequestMethod() {
        return HttpMethod.GET;
    }

}

/**
 * 开放网关允许子设备入网
 */
class EnabledSubDiscoveryReq extends ApiRequest {
    constructor(deviceId, duration) {
        super();
        this.deviceId = deviceId;
        this.duration = duration;
    }


    getRequestMethod() {
       return HttpMethod.PUT;
    }

    getRequestUrl() {
        return `/v1.0/devices/${this.deviceId}/enabled-sub-discovery?duration=${this.duration}`;
    }
}

/**
 * 获取入网子设备列表
 */
class GetParingDevicesReq extends ApiRequest {
    constructor(deviceId, discoveryTime) {
        super();
        this.deviceId = deviceId;
        this.discoveryTime = discoveryTime;
    }


    getRequestMethod() {
        return HttpMethod.GET;
    }

    getRequestUrl() {
        return `/v1.0/devices/${this.deviceId}/list-sub?discovery_time=${this.discoveryTime}`;
    }
}


/**
 * 获取网关下的子设备列表
 */
class GetGatewaySubDevicesReq extends ApiRequest {
    constructor(deviceId) {
        super();
        this.deviceId = deviceId;
    }


    getRequestMethod() {
        return HttpMethod.PUT
    }

    getRequestUrl() {
        return `/v1.0/devices/${this.deviceId}/sub-devices`;
    }
}


module.exports = {
    PostDeviceParingTokenReq: PostDeviceParingTokenReq,
    GetDevicesByTokenReq: GetDevicesByTokenReq,
    EnabledSubDiscoveryReq: EnabledSubDiscoveryReq,
    GetParingDevicesReq:GetParingDevicesReq,
    GetGatewaySubDevicesReq: GetGatewaySubDevicesReq
};