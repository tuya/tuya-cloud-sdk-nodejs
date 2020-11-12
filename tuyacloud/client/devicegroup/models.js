const ApiRequest = require("../../common/api_request");
const ApiRequestBody = require("../../common/api_request_body");
const HttpMethod = require("../../common/http_method");

/**
 * 查询设备群组列表
 */
class GetDeviceGroupsReq extends ApiRequest {
    constructor(uid, pid, ownerId){
        super();
        this.uid = uid;
        this.pid = pid;
        this.ownerId = ownerId;
    }


    getRequestMethod() {
        return HttpMethod.GET
    }

    getRequestUrl() {
        return `/v1.0/device-groups/?uid=${this.uid}&pid=${this.pid}&owner_id=${this.ownerId}`
    }
}

/**
 * 查询群组详情
 */
class GetDeviceGroupReq extends ApiRequest {
    constructor(groupId){
        super();
        this.groupId = groupId
    }

    getRequestMethod() {
        return HttpMethod.GET
    }

    getRequestUrl() {
        return `/v1.0/device-groups/${this.groupId}`
    }
}

/**
 * 查询群组列表
 */
class GetUserDeviceGroupsReq extends ApiRequest {
    constructor(uid, type){
        super();
        this.uid = uid;
        this.type = type
    }


    getRequestMethod() {
        return HttpMethod.GET
    }

    getRequestUrl() {
        return `/v1.0/users/${this.uid}/device-groups?type=${this.type}`
    }
}

/**
 * 创建群组列表
 */
class CreateDeviceGroupReq extends ApiRequestBody {
    constructor(uid, name, pid, ownerId, deviceList){
        super();
        this.uid = uid;
        this.name = name;
        this.pid = pid;
        this.ownerId = ownerId;
        this.deviceList = deviceList;
    }


    getRequestMethod() {
        return HttpMethod.POST;
    }

    getRequestUrl() {
        return `/v1.0/device-groups`;
    }


    getRequestBody() {
        return JSON.stringify(this);
    }
}

/**
 * 更新群组列表
 */
class UpdateDeviceGroupReq extends ApiRequestBody {
    constructor(groupId, name, deviceList){
        super();
        this.groupId = groupId;
        this.name = name;
        this.deviceList = deviceList;
    }


    getRequestMethod() {
        return HttpMethod.PUT;
    }

    getRequestUrl() {
        return `/v1.0/device-groups/${this.groupId}`;
    }


    getRequestBody() {
        return JSON.stringify(this);
    }
}

/**
 * 删除群组列表
 */
class DeleteDeviceGroupReq extends ApiRequest {
    constructor(groupId){
        super();
        this.groupId = groupId;
    }


    getRequestMethod() {
        return HttpMethod.DELETE;
    }

    getRequestUrl() {
        return `/v1.0/device-groups/${this.groupId}`;
    }
}


/**
 * 给设备群组下发指令
 */
class IssueDeviceGroupsReq extends ApiRequestBody {
    constructor(deviceGroupId, functions){
        super();
        this.deviceGroupId = deviceGroupId;
        this.functions = functions
    }


    getRequestMethod() {
        super.getRequestMethod();
    }

    getRequestUrl() {
       return `/v1.0/device-groups/${this.deviceGroupId}/issued`
    }

    getRequestBody() {
        return JSON.stringify(this.functions);
    }
}

module.exports = {
    GetDeviceGroupsReq: GetDeviceGroupsReq,
    GetDeviceGroupReq: GetDeviceGroupReq,
    GetUserDeviceGroupsReq: GetUserDeviceGroupsReq,
    CreateDeviceGroupReq: CreateDeviceGroupReq,
    UpdateDeviceGroupReq: UpdateDeviceGroupReq,
    DeleteDeviceGroupReq: DeleteDeviceGroupReq,
    IssueDeviceGroupsReq: IssueDeviceGroupsReq
};