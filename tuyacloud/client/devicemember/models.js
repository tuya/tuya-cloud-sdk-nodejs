const ApiRequest = require("../../common/api_request");
const ApiRequestBody = require("../../common/api_request_body");
const HttpMethod = require("../../common/http_method");

/**
 * 新增设备用户
 */
class AddDeviceUserReq extends ApiRequestBody {

    constructor(deviceId, userInfo) {
        super();
        this.deviceId = deviceId;
        this.userInfo = userInfo;
    }

    getRequestBody() {
       return JSON.stringify(this.userInfo);
    }

    getRequestMethod() {
        return HttpMethod.POST
    }

    getRequestUrl() {
        return `/v1.0/devices/${this.deviceId}/user`;
    }
}

/**
 * 修改设备用户
 */
class UpdateDeviceUserReq extends ApiRequestBody {
    constructor(deviceId, userId, userInfo) {
        super();
        this.deviceId = deviceId;
        this.userId = userId;
        this.userInfo = userInfo;
    }

    getRequestBody() {
        return JSON.stringify(this.userInfo);
    }

    getRequestMethod() {
        return HttpMethod.PUT
    }

    getRequestUrl() {
        return `/v1.0/devices/${this.deviceId}/users/${this.userId}`;
    }
}


/**
 * 删除设备用户
 */
class DeleteDeviceUserReq extends ApiRequest {

    constructor(deviceId, userId) {
        super();
        this.deviceId = deviceId;
        this.userId = userId;
    }

    getRequestMethod() {
        return HttpMethod.DELETE
    }

    getRequestUrl() {
        return `/v1.0/devices/${this.deviceId}/users/${this.userId}`;
    }
}


/**
 * 获取设备用户
 */
class GetDeviceUserReq extends ApiRequest {

    constructor(deviceId, userId) {
        super();
        this.deviceId = deviceId;
        this.userId = userId;
    }

    getRequestMethod() {
        return HttpMethod.GET
    }

    getRequestUrl() {
        return `/v1.0/devices/${this.deviceId}/users/${this.userId}`;
    }
}

/**
 * 获取设备下所有用户
 */
class GetDeviceUsersReq extends ApiRequest {

    constructor(deviceId) {
        super();
        this.deviceId = deviceId;
    }

    getRequestMethod() {
        return HttpMethod.GET
    }

    getRequestUrl() {
        return `/v1.0/devices/${this.deviceId}/users`;
    }
}

module.exports = {
    AddDeviceUserReq: AddDeviceUserReq,
    UpdateDeviceUserReq: UpdateDeviceUserReq,
    DeleteDeviceUserReq: DeleteDeviceUserReq,
    GetDeviceUserReq: GetDeviceUserReq,
    GetDeviceUsersReq: GetDeviceUsersReq,
};