const RequestHandler = require("../../common/request_handler");
const Models = require("./models");


/**
 * 用户请求类
 */
class UserClient {

    /**
     * 同步用户
     *
     * @param schema
     * @param user
     * @param callback
     */
    static syncUser(schema, user, callback) {
        RequestHandler.sendRequestWithToken(new Models.SyncUserReq(schema, user), callback);
    }

    /**
     * 获取用户列表
     *
     * @param schema
     * @param pageNo
     * @param pageSize
     * @param callback
     */
    static getUsers(schema, pageNo, pageSize, callback) {
        RequestHandler.sendRequestWithToken(new Models.GetUsersReq(schema, pageNo, pageSize), callback);
    }

    static getUserInfo(uid, callback) {

    }
}

module.exports = UserClient;
