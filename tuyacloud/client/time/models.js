const ApiRequest = require("../../common/api_request");
const ApiRequestBody = require("../../common/api_request_body");
const HttpMethod = require("../../common/http_method");

/**
 * 设备添加定时任务
 */
class AddDeviceTimerReq extends ApiRequestBody {
    constructor(deviceId, timeInfo) {
        super();
        this.deviceId = deviceId;
        this.timeInfo = timeInfo;
    }

    getRequestBody() {
       return JSON.stringify(this.timeInfo);
    }

    getRequestMethod() {
        return HttpMethod.POST;
    }

    getRequestUrl() {
        return `/v1.0/devices/${this.deviceId}/timers`;
    }
}

/**
 * 查询指定设备Id下已添加定时任务的详细信息列表
 */
class GetDeviceTimersReq extends ApiRequest {
    constructor(deviceId) {
        super();
        this.deviceId = deviceId;
    }

    getRequestMethod() {
        return HttpMethod.GET;
    }

    getRequestUrl() {
        return `/v1.0/devices/${this.deviceId}/timers`;
    }
}


/**
 * 获取指定设备下某⼀个分类下⾯的定时任务信息
 */
class GetDeviceTimerByCategoryReq extends ApiRequest {
    constructor(deviceId, category) {
        super();
        this.deviceId = deviceId;
        this.category = category;
    }

    getRequestMethod() {
        return HttpMethod.GET;
    }

    getRequestUrl() {
        return `/v1.0/devices/${this.deviceId}/timers/categories/${this.category}`;
    }
}

/**
 * 设备添加定时任务
 */
class UpdateDeviceTimerReq extends ApiRequestBody {
    constructor(deviceId, groupId, timeInfo) {
        super();
        this.deviceId = deviceId;
        this.groupId = groupId;
        this.timeInfo = timeInfo;
    }

    getRequestBody() {
        return JSON.stringify(this.timeInfo);
    }

    getRequestMethod() {
        return HttpMethod.PUT;
    }

    getRequestUrl() {
        return `/v1.0/devices/${this.deviceId}/timers/groups/${this.groupId}`;
    }
}

/**
 * 删除设备下的所有定时任务
 */
class DeleteDeviceTimersReq extends ApiRequest {
    constructor(deviceId) {
        super();
        this.deviceId = deviceId;
    }

    getRequestMethod() {
        return HttpMethod.DELETE;
    }

    getRequestUrl() {
        return `/v1.0/devices/${this.deviceId}/timers`;
    }
}

/**
 * 删除某个分类的定时任务
 */
class DeleteDeviceCategoryTimersReq extends ApiRequest {
    constructor(deviceId, category) {
        super();
        this.deviceId = deviceId;
        this.category = category;
    }

    getRequestMethod() {
        return HttpMethod.DELETE;
    }

    getRequestUrl() {
        return `/v1.0/devices/${this.deviceId}/timers/categories/${this.category}`;
    }
}

/**
 * 删除某个分类下⾯面的某个定时组的定时任务
 */
class DeleteDeviceCategoryTimerReq extends ApiRequest {
    constructor(deviceId, category, groupId) {
        super();
        this.deviceId = deviceId;
        this.category = category;
        this.groupId = groupId;
    }

    getRequestMethod() {
        return HttpMethod.DELETE;
    }

    getRequestUrl() {
        return `/v1.0/devices/${this.deviceId}/timers/categories/${this.category}/groups/${this.groupId}}`;
    }
}

/**
 * 获取设备群组下的定时任务
 */
class GetDeviceGroupTimersReq extends ApiRequest {
    constructor(deviceGroupId) {
        super();
        this.deviceGroupId = deviceGroupId;
    }

    getRequestMethod() {
        return HttpMethod.GET
    }

    getRequestUrl() {
       return `/v1.0/device-groups/${this.deviceGroupId}/timers`;
    }
}

/**
 * 查询群组分类定时任务列表
 */
class GetDeviceGroupCategoryTimersReq extends ApiRequest {
    constructor(deviceGroupId, category) {
        super();
        this.deviceGroupId = deviceGroupId;
        this.category = category;
    }

    getRequestMethod() {
        return HttpMethod.GET
    }

    getRequestUrl() {
        return `/v1.0/device-groups/${this.deviceGroupId}/timers/categories/${this.category}`;
    }
}

/**
 * 创建群组定时任务
 */
class AddDeviceGroupTimerReq extends ApiRequestBody {
    constructor(groupTimeInfo) {
        super();
        this.groupTimeInfo = groupTimeInfo;
    }

    getRequestBody() {
        return JSON.stringify(this.groupTimeInfo);
    }

    getRequestMethod() {
        return HttpMethod.POST;
    }

    getRequestUrl() {
        return `/v1.0/device-groups/timers`;
    }
}

/**
 * 更新群组定时任务
 */
class UpdateDeviceGroupTimerReq extends ApiRequestBody {
    constructor(deviceGroupId, groupId, groupTimeInfo) {
        super();
        this.deviceGroupId = deviceGroupId;
        this.groupId = groupId;
        this.groupTimeInfo = groupTimeInfo;
    }

    getRequestBody() {
        return JSON.stringify(this.groupTimeInfo);
    }

    getRequestMethod() {
        return HttpMethod.POST;
    }

    getRequestUrl() {
        return `/v1.0/device-groups/${this.deviceGroupId}/timers/groups/${this.groupId}`;
    }
}

/**
 * 更新群组分类定时任务
 */
class UpdateDeviceGroupTimerStatusReq extends ApiRequestBody {
    constructor(deviceGroupId, category, groupId, value) {
        super();
        this.deviceGroupId = deviceGroupId;
        this.category = category;
        this.groupId = groupId;
        this.value = value;
    }

    getRequestBody() {
        return JSON.stringify(this.value);
    }

    getRequestMethod() {
        return HttpMethod.PUT;
    }

    getRequestUrl() {
        return `/v1.0/device-groups/${this.deviceGroupId}/timers/categories/${this.category}/groups/${this.groupId}/status`;
    }
}

/**
 * 删除设备群组下的定时任务
 */
class DeleteDeviceGroupTimersReq extends ApiRequest {
    constructor(deviceGroupId) {
        super();
        this.deviceGroupId = deviceGroupId;
    }

    getRequestMethod() {
        return HttpMethod.DELETE;
    }

    getRequestUrl() {
        return `/v1.0/device-groups/${this.deviceGroupId}/timers`;
    }
}


/**
 * 删除群组某个分类定时任务
 */
class DeleteDeviceGroupCategoryTimersReq extends ApiRequest {
    constructor(deviceGroupId, category) {
        super();
        this.deviceGroupId = deviceGroupId;
        this.category = category;
    }

    getRequestMethod() {
        return HttpMethod.DELETE;
    }

    getRequestUrl() {
        return `/v1.0/device-groups/${this.deviceGroupId}/timers/categories/${this.category}`;
    }
}

/**
 * 删除设备群组某个分类下的某个定时任务
 */
class DeleteDeviceGroupCategoryTimerReq extends ApiRequest {
    constructor(deviceGroupId, category, groupId) {
        super();
        this.deviceGroupId = deviceGroupId;
        this.category = category;
        this.groupId = groupId;
    }

    getRequestMethod() {
        return HttpMethod.DELETE;
    }

    getRequestUrl() {
        return `/v1.0/device-groups/${this.deviceGroupId}/timers/categories/${this.category}/groups/${this.groupId}`;
    }
}

module.exports = {
    AddDeviceTimerReq: AddDeviceTimerReq,
    GetDeviceTimersReq: GetDeviceTimersReq,
    GetDeviceTimerByCategoryReq: GetDeviceTimerByCategoryReq,
    UpdateDeviceTimerReq: UpdateDeviceTimerReq,
    DeleteDeviceTimersReq: DeleteDeviceTimersReq,
    DeleteDeviceCategoryTimersReq: DeleteDeviceCategoryTimersReq,
    DeleteDeviceCategoryTimerReq: DeleteDeviceCategoryTimerReq,
    GetDeviceGroupTimersReq: GetDeviceGroupTimersReq,
    GetDeviceGroupCategoryTimersReq: GetDeviceGroupCategoryTimersReq,
    AddDeviceGroupTimerReq: AddDeviceGroupTimerReq,
    UpdateDeviceGroupTimerReq: UpdateDeviceGroupTimerReq,
    UpdateDeviceGroupTimerStatusReq: UpdateDeviceGroupTimerStatusReq,
    DeleteDeviceGroupTimersReq: DeleteDeviceGroupTimersReq,
    DeleteDeviceGroupCategoryTimersReq: DeleteDeviceGroupCategoryTimersReq,
    DeleteDeviceGroupCategoryTimerReq: DeleteDeviceGroupCategoryTimerReq
};