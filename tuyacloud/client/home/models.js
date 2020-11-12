const ApiRequest = require("../../common/api_request");
const ApiRequestBody = require("../../common/api_request_body");
const HttpMethod = require("../../common/http_method");

/**
 * 添加家庭
 */
class CreateHomeReq extends ApiRequestBody {
    constructor(homeInfo){
        super();
        this.homeInfo = homeInfo;
    }


    getRequestMethod() {
        return HttpMethod.POST;
    }

    getRequestUrl() {
        return `/v1.0/home/create-home`
    }

    getRequestBody() {
        return JSON.stringify(this);
    }
}

/**
 * 更新家庭
 */
class UpdateHomeReq extends ApiRequestBody {
    constructor(homeId, homeInfo){
        super();
        this.homeId = homeId;
        this.homeInfo = homeInfo;
    }


    getRequestMethod() {
        return HttpMethod.PUT;
    }

    getRequestUrl() {
        return `/v1.0/homes/${this.homeId}`
    }

    getRequestBody() {
        return JSON.stringify(this.homeInfo);
    }
}

/**
 * 删除家庭
 */
class DeleteHomeReq extends ApiRequest {
    constructor(homeId){
        super();
        this.homeId = homeId;
    }


    getRequestMethod() {
        return HttpMethod.DELETE;
    }

    getRequestUrl() {
        return `/v1.0/homes/${this.homeId}`
    }
}

/**
 * 获取家庭信息
 */
class GetHomeInfoReq extends ApiRequest {
    constructor(homeId) {
        super();
        this.homeId = homeId;
    }

     getRequestMethod() {
         return HttpMethod.GET;
     }

     getRequestUrl() {
         return `/v1.0/homes/${this.homeId}`;
     }
}

/**
 * 获取家庭设备信息
 */
class GetHomeDeviceInfoReq extends ApiRequest {
    constructor(homeId) {
        super();
        this.homeId = homeId;
    }

    getRequestMethod() {
        return HttpMethod.GET;
    }

    getRequestUrl() {
        return `/v1.0/homes/${this.homeId}/devices`;
    }
}

/**
 * 添加房间
 */
class CreateRoomReq extends ApiRequestBody {
    constructor(homeId, roomInfo) {
        super();
        this.homeId = homeId;
        this.roomInfo = roomInfo;
    }

    getRequestBody() {
        return JSON.stringify(this.roomInfo);
    }

    getRequestMethod() {
        return HttpMethod.POST
    }

    getRequestUrl() {
        return `/v1.0/homes/${this.homeId}/room`;
    }
}

/**
 * 更新房间
 */
class UpdateRoomReq extends ApiRequestBody {
    constructor(homeId, roomId, roomInfo) {
        super();
        this.homeId = homeId;
        this.roomId = roomId;
        this.roomInfo = roomInfo;
    }

    getRequestBody() {
        return JSON.stringify(this.roomInfo);
    }

    getRequestMethod() {
        return HttpMethod.PUT;
    }

    getRequestUrl() {
        return `/v1.0/homes/${this.homeId}/rooms/${this.roomId}`;
    }
}


/**
 * 删除房间
 */
class DeleteRoomReq extends ApiRequest {
    constructor(homeId, roomId) {
        super();
        this.homeId = homeId;
        this.roomId = roomId;
    }

    getRequestMethod() {
        return HttpMethod.DELETE;
    }

    getRequestUrl() {
        return `/v1.0/homes/${this.homeId}/rooms/${this.roomId}`;
    }
}


/**
 * 获取家庭下房间信息
 */
class GetHomeRoomsReq extends ApiRequest {
    constructor(homeId) {
        super();
        this.homeId = homeId;
    }

    getRequestMethod() {
        return HttpMethod.GET;
    }

    getRequestUrl() {
        return `/v1.0/homes/${this.homeId}/rooms`;
    }
}



/**
 * 添加家庭成员
 */
class AddHomeMemberReq extends ApiRequestBody {
    constructor(homeId, memberInfo) {
        super();
        this.homeId = homeId;
        this.memberInfo = memberInfo;
    }

    getRequestBody() {
        return JSON.stringify(this.memberInfo);
    }

    getRequestMethod() {
        return HttpMethod.POST
    }

    getRequestUrl() {
        return `/v1.0/homes/${this.homeId}/members`;
    }
}

/**
 * 设置成员权限
 */
class SetMemberAuthReq extends ApiRequestBody {
    constructor(homeId, uid, auth) {
        super();
        this.homeId = homeId;
        this.uid = uid;
        this.auth = auth;
    }

    getRequestBody() {
        return JSON.stringify(this.auth);
    }

    getRequestMethod() {
        return HttpMethod.PUT;
    }

    getRequestUrl() {
        return `/v1.0/homes/${this.homeId}/members/${this.uid}`;
    }
}


/**
 * 获取家庭成员
 */
class GetHomeMembersReq extends ApiRequest {
    constructor(homeId) {
        super();
        this.homeId = homeId;
    }

    getRequestMethod() {
        return HttpMethod.GET;
    }

    getRequestUrl() {
        return `/v1.0/homes/${this.homeId}/members`;
    }
}


/**
 * 获取家庭成员所有家庭
 */
class GetUserHomesReq extends ApiRequest {
    constructor(uid) {
        super();
        this.uid = uid;
    }

    getRequestMethod() {
        return HttpMethod.GET;
    }

    getRequestUrl() {
        return `/v1.0/users/${this.uid}/homes`;
    }
}

/**
 * 获取房间设备
 */
class GetRoomDevicesReq extends ApiRequest {
    constructor(homeId, roomId) {
        super();
        this.homeId = homeId;
        this.roomId = roomId;
    }

    getRequestMethod() {
        return HttpMethod.GET;
    }

    getRequestUrl() {
        return `/v1.0/homes/${this.homeId}/rooms/${this.roomId}/devices`;
    }
}

/**
 * 添加房间设备
 */
class AddRoomDevicesReq extends ApiRequestBody {
    constructor(homeId, roomId, deviceIds) {
       super();
       this.homeId = homeId;
       this.roomId = roomId;
       this.deviceIds = deviceIds;
    }


    getRequestBody() {
       return JSON.stringify(this.deviceIds);
    }

    getRequestMethod() {
        return HttpMethod.POST;
    }

    getRequestUrl() {
        return `/v1.0/homes/${this.homeId}/rooms/${this.roomId}/devices`
    }
}

/**
 * 更新房间设备
 */
class UpdateRoomDevicesReq extends ApiRequestBody {
    constructor(homeId, roomId, deviceIds) {
        super();
        this.homeId = homeId;
        this.roomId = roomId;
        this.deviceIds = deviceIds;
    }


    getRequestBody() {
        return JSON.stringify(this.deviceIds);
    }

    getRequestMethod() {
        return HttpMethod.PUT;
    }

    getRequestUrl() {
        return `/v1.0/homes/${this.homeId}/rooms/${this.roomId}/devices`
    }
}

/**
 * 删除房间设备
 */
class DeleteRoomDevicesReq extends ApiRequestBody {
    constructor(homeId, roomId, deviceIds) {
        super();
        this.homeId = homeId;
        this.roomId = roomId;
        this.deviceIds = deviceIds;
    }


    getRequestBody() {
        return JSON.stringify(this.deviceIds);
    }

    getRequestMethod() {
        return HttpMethod.DELETE;
    }

    getRequestUrl() {
        return `/v1.0/homes/${this.homeId}/rooms/${this.roomId}/devices`
    }
}

module.exports = {
    GetHomeDeviceInfoReq: GetHomeDeviceInfoReq,
    GetHomeInfoReq: GetHomeInfoReq,
    DeleteHomeReq: DeleteHomeReq,
    UpdateHomeReq: UpdateHomeReq,
    CreateHomeReq: CreateHomeReq,
    CreateRoomReq: CreateRoomReq,
    UpdateRoomReq: UpdateRoomReq,
    DeleteRoomReq: DeleteRoomReq,
    GetHomeRoomsReq: GetHomeRoomsReq,
    AddHomeMemberReq: AddHomeMemberReq,
    SetMemberAuthReq: SetMemberAuthReq,
    GetHomeMembersReq: GetHomeMembersReq,
    GetUserHomesReq: GetUserHomesReq,
    GetRoomDevicesReq: GetRoomDevicesReq,
    AddRoomDevicesReq: AddRoomDevicesReq,
    UpdateRoomDevicesReq: UpdateRoomDevicesReq,
    DeleteRoomDevicesReq: DeleteRoomDevicesReq
};

