const ApiRequest = require("../../common/api_request");
const ApiRequestBody = require("../../common/api_request_body");
const HttpMethod = require("../../common/http_method");

/**
 * 获取家庭下的场景
 */
class GetHomeScenesReq extends ApiRequest {
    constructor(homeId) {
        super();
        this.homeId  = homeId;
    }


    getRequestMethod() {
        return HttpMethod.GET
    }

    getRequestUrl() {
        return `/v1.0/homes/${this.homeId}/scenes`;
    }
}

/**
 * 查询默认场景图⽚列表
 */
class GetScenePictruesReq extends ApiRequest {
    constructor() {
        super();
    }


    getRequestMethod() {
        return HttpMethod.GET
    }

    getRequestUrl() {
        return `/v1.0/scenes/default-pictures`;
    }
}

/**
 * 查询家庭下支持场景的设备列表
 */
class GetSupportedSceneDevicesReq extends ApiRequest {
    constructor(homeId) {
        super();
        this.homeId = homeId;
    }

    getRequestMethod() {
       return HttpMethod.GET;
    }

    getRequestUrl() {
        return `/v1.0/homes/${this.homeId}/scene/devices`;
    }
}


/**
 * 给某个家庭下添加场景
 */
class AddSceneReq extends ApiRequestBody {
    constructor(homeId, sceneInfo) {
        super();
        this.homeId = homeId;
        this.sceneInfo = sceneInfo;
    }


    getRequestMethod() {
        return HttpMethod.POST;
    }

    getRequestUrl() {
        return `/v1.0/homes/${this.homeId}/scenes`;
    }

    getRequestBody() {
       return JSON.stringify(this.sceneInfo);
    }
}

/**
 * 给某个家庭下修改场景
 */
class UpdateSceneReq extends ApiRequestBody {
    constructor(homeId, sceneId, sceneInfo) {
        super();
        this.homeId = homeId;
        this.sceneId = sceneId;
        this.sceneInfo = sceneInfo;
    }


    getRequestMethod() {
        return HttpMethod.PUT;
    }

    getRequestUrl() {
        return `/v1.0/homes/${this.homeId}/scenes/${this.sceneId}`;
    }

    getRequestBody() {
        return JSON.stringify(this.sceneInfo);
    }
}

/**
 * 删除场景
 */
class DeleteSceneReq extends ApiRequest {
    constructor(homeId, sceneId) {
        super();
        this.homeId = homeId;
        this.sceneId = sceneId;
    }

    getRequestMethod() {
        return HttpMethod.DELETE;
    }

    getRequestUrl() {
        return `/v1.0/homes/${this.homeId}/scenes/${this.sceneId}`;
    }
}

/**
 * 触发场景
 */
class TriggerSceneReq extends ApiRequest {
    constructor(homeId, sceneId) {
        super();
        this.homeId = homeId;
        this.sceneId = sceneId;
    }

    getRequestMethod() {
        return HttpMethod.POST;
    }

    getRequestUrl() {
        return `/v1.0/homes/${this.homeId}/scenes/${this.sceneId}/trigger`;
    }
}

/**
 * 场景绑定
 */
class DeviceBindSceneReq extends ApiRequestBody {
    constructor(deviceId, sceneId, codeValue) {
        super();
        this.deviceId = deviceId;
        this.sceneId = sceneId;
        this.codeValue = codeValue;
    }


    getRequestBody() {
        return JSON.stringify(this.codeValue);
    }

    getRequestMethod() {
        return HttpMethod.POST;
    }

    getRequestUrl() {
        return `/v1.0/devices/${this.deviceId}/scenes/${this.sceneId}`
    }
}

/**
 * 场景解绑
 */
class DeviceUnbindSceneReq extends ApiRequestBody {
    constructor(deviceId, sceneId, code) {
        super();
        this.deviceId = deviceId;
        this.sceneId = sceneId;
        this.code = code;
    }

    getRequestBody() {
        return JSON.stringify(this.code);
    }

    getRequestMethod() {
        return HttpMethod.POST;
    }

    getRequestUrl() {
        return `/v1.0/devices/${this.deviceId}/scenes/${this.sceneId}`
    }
}

/**
 * 查询设备已绑定的场景列表
 */
class GetDevicesScenesReq extends ApiRequest {
    constructor(deviceId) {
        super();
        this.deviceId = deviceId;
    }

    getRequestMethod() {
        return HttpMethod.GET;
    }

    getRequestUrl() {
        return `/v1.0/devices/${this.deviceId}/scenes`;
    }
}

module.exports =  {
    GetHomeScenesReq: GetHomeScenesReq,
    GetScenePictruesReq: GetScenePictruesReq,
    GetSupportedSceneDevicesReq: GetSupportedSceneDevicesReq,
    AddSceneReq: AddSceneReq,
    UpdateSceneReq: UpdateSceneReq,
    DeleteSceneReq: DeleteSceneReq,
    TriggerSceneReq: TriggerSceneReq,
    DeviceBindSceneReq: DeviceBindSceneReq,
    DeviceUnbindSceneReq: DeviceUnbindSceneReq,
    GetDevicesScenesReq: GetDevicesScenesReq
}