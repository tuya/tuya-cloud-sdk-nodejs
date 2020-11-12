const ApiRequest =  require("../../common/api_request");
const ApiRequestBody =  require("../../common/api_request_body");
const HttpMethod = require("../../common/http_method");


/**
 * 同步用户请求类
 */
class SyncUserReq extends ApiRequestBody {

    constructor(schema, user) {
        super();
        this.schema = schema;
        this.user = user;
    }

    getRequestMethod() {
        return HttpMethod.POST;
    }

    getRequestUrl() {
        return `/v1.0/apps/${this.schema}/user`;
    }

    getRequestBody() {
        return JSON.stringify(this.user);
    }
}

/**
 * 获取用户列表请求类
 */
class GetUsersReq extends ApiRequest {

    constructor(schema, pageNo, pageSize) {
        super();
        this.schema = schema;
        this.pageNo = pageNo;
        this.pageSize = pageSize;
    }

    getRequestMethod() {
        return HttpMethod.GET;
    }

    getRequestUrl() {
        return `/v1.0/apps/${this.schema}/users?page_no=${this.pageNo}&page_size=${this.pageSize}`;
    }
}

/**
 * 获取用户信息
 */
class getUserInfoReq extends ApiRequest {

    constructor(uid) {
        super();
        this.uid = uid
    }

    getRequestMethod() {
        return HttpMethod.GET;
    }

    getRequestUrl() {
        return `/v1.0/users/${this.uid}/infos`;
    }
}


module.exports = {
    SyncUserReq: SyncUserReq,
    GetUsersReq: GetUsersReq,
    getUserInfoReq: getUserInfoReq
};