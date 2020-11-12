const ApiRequest = require("../../common/api_request");
const ApiRequestBody = require("../../common/api_request_body");
const HttpMethod = require("../../common/http_method");

/**
 * 给某个家庭下添加自动化
 */
class AddAutomationReq extends ApiRequestBody {
    constructor(homeId, automationInfo) {
        super();
        this.homeId = homeId;
        this.automationInfo = automationInfo;
    }


    getRequestMethod() {
        return HttpMethod.POST;
    }

    getRequestUrl() {
        return `/v1.0/homes/${this.homeId}/automations`;
    }

    getRequestBody() {
        return JSON.stringify(this.automationInfo);
    }
}

/**
 * 给某个家庭下修改自动化
 */
class UpdateAutomationReq extends ApiRequestBody {
    constructor(homeId, automationId, automationInfo) {
        super();
        this.homeId = homeId;
        this.automationId = automationId;
        this.automationInfo = automationInfo;
    }


    getRequestMethod() {
        return HttpMethod.PUT;
    }

    getRequestUrl() {
        return `/v1.0/homes/${this.homeId}/automations/${this.automationId}`;
    }

    getRequestBody() {
        return JSON.stringify(this.automationInfo);
    }
}

/**
 * 删除自动化
 */
class DeleteAutomationReq extends ApiRequest {
    constructor(homeId, automationId) {
        super();
        this.homeId = homeId;
        this.automationId = automationId;
    }

    getRequestMethod() {
        return HttpMethod.DELETE;
    }

    getRequestUrl() {
        return `/v1.0/homes/${this.homeId}/automations/${this.automationId}`;
    }
}

/**
 * 触发外部条件自动化
 */
class TriggerAutomationReq extends ApiRequestBody {
    constructor(homeId, automationId, conditions) {
        super();
        this.homeId = homeId;
        this.automationId = automationId;
        this.conditions = conditions;
    }

    getRequestBody() {
        return JSON.stringify(this.conditions);
    }

    getRequestMethod() {
        return HttpMethod.POST;
    }

    getRequestUrl() {
        return `/v1.0/homes/${this.homeId}/automations/${this.automationId}/conditions/trigger`;
    }
}

/**
 * 获取家庭下的自动化列表
 */
class GetHomeAutomationsReq extends ApiRequest {
    constructor(homeId) {
        super();
        this.homeId  = homeId;
    }


    getRequestMethod() {
        return HttpMethod.GET
    }

    getRequestUrl() {
        return `/v1.0/homes/${this.homeId}/automations`;
    }
}

/**
 * 获取家庭下的某个自动化
 */
class GetAutomationInfoReq extends ApiRequest {
    constructor(homeId, automationId) {
        super();
        this.homeId  = homeId;
        this.automationId = automationId;
    }


    getRequestMethod() {
        return HttpMethod.GET
    }

    getRequestUrl() {
        return `/v1.0/homes/${this.homeId}/automations/${this.automationId}`;
    }
}


/**
 * 查询家庭下支持自动化的设备列表
 */
class GetSupportedAutomationDevicesReq extends ApiRequest {
    constructor(homeId, type) {
        super();
        this.homeId = homeId;
        this.type = type;
    }

    getRequestMethod() {
        return HttpMethod.GET;
    }

    getRequestUrl() {
        return `/v1.0/homes/${this.homeId}/automation/devices?type=${this.type}`;
    }
}

/**
 * 查询自动化支持的天气条件
 */
class GetWeatherConditionsReq extends ApiRequest {
    constructor() {
        super();
    }

    getRequestMethod() {
       return HttpMethod.GET;
    }

    getRequestUrl() {
        return `v1.0/homes/automation/weather/conditions`;
    }
}


/**
 * 根据家庭id获取联动条件或执行动作的标准功能点
 */
class GetHomeEnableLinkageCodesReq extends ApiRequest {
    constructor(homeId) {
        super();
        this.homeId = homeId;
    }

    getRequestMethod() {
        return HttpMethod.GET;
    }

    getRequestUrl() {
        return `/v1.0/homes/${this.homeId}/enable-linkage/codes`;
    }
}

/**
 * 根据设备id获取联动条件或执行动作的标准功能点
 */
class GetDeviceEnableLinkageCodesReq extends ApiRequest {
    constructor(deviceId) {
        super();
        this.deviceId = deviceId;
    }

    getRequestMethod() {
        return HttpMethod.GET;
    }

    getRequestUrl() {
        return `/v1.0/devices/${this.deviceId}/enable-linkage/codes`;
    }
}


/**
 * 启用自动化
 */
class EnableAutomationReq extends ApiRequest {
    constructor(homeId, automationId) {
        super();
        this.homeId = homeId;
        this.automationId = automationId;
    }

    getRequestMethod() {
        return HttpMethod.PUT;
    }

    getRequestUrl() {
        return `/v1.0/homes/${this.homeId}/automations/${this.automationId}/actions/enable`;
    }
}


/**
 * 停用自动化
 */
class DisableAutomationReq extends ApiRequest {
    constructor(homeId, automationId) {
        super();
        this.homeId = homeId;
        this.automationId = automationId;
    }

    getRequestMethod() {
        return HttpMethod.PUT;
    }

    getRequestUrl() {
        return `/v1.0/homes/${this.homeId}/automations/${this.automationId}/actions/disable`;
    }
}


module.exports =  {
    AddAutomationReq: AddAutomationReq,
    UpdateAutomationReq: UpdateAutomationReq,
    DeleteAutomationReq: DeleteAutomationReq,
    TriggerAutomationReq: TriggerAutomationReq,
    GetHomeAutomationsReq: GetHomeAutomationsReq,
    GetAutomationInfoReq: GetAutomationInfoReq,
    GetSupportedAutomationDevicesReq: GetSupportedAutomationDevicesReq,
    GetHomeEnableLinkageCodesReq: GetHomeEnableLinkageCodesReq,
    GetDeviceEnableLinkageCodesReq: GetDeviceEnableLinkageCodesReq,
    GetDeviceEnableLinkageCodesReq: GetDeviceEnableLinkageCodesReq,
    EnableAutomationReq: EnableAutomationReq,
    DisableAutomationReq: DisableAutomationReq,
    GetWeatherConditionsReq: GetWeatherConditionsReq
}