
const ApiRequest = require("../../common/api_request");
const HttpMethod = require("../../common/http_method");

/**
 * 获取token请求类
 */
class GetTokenReq extends ApiRequest {

    constructor() {
        super();
    }

    getRequestMethod() {
        return HttpMethod.GET;
    }

    getRequestUrl() {
        return "/v1.0/token?grant_type=1";
    }

}


/**
 * 刷新token请求类
 */
class RefreshToken extends ApiRequest {

    constructor() {
        super();
    }

    getRequestMethod() {
        return HttpMethod.GET;
    }

    getRequestUrl() {
        return "/v1.0/token/" + global.refreshToken;
    }
}

module.exports = {
    GetTokenReq: GetTokenReq,
    RefreshToken: RefreshToken
};