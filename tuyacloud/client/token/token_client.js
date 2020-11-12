const Models = require("./models");
const retry = require('async-await-retry');

/**
 * token客户端类
 */
class TokenClient {

    /**
     * 获取token
     */
    static async getToken() {
        return await getTokenWithRetry();
    }

    /**
     * 刷新token
     */
    static async refreshToken() {
        await refreshTokenWithRetry();
    }
}

async function getTokenWithRetry() {
    return await retry(async () => {
        return new Promise(async (resolve, reject) => {
            await RequestHandler.sendRequest(new Models.GetTokenReq(),function (err, data) {
                 if (err) {
                     reject(err);
                 }

                 TokenCache.setToken(data);
                 resolve('OK');
             });
        })
    });
}

async function refreshTokenWithRetry() {
    await retry(async () => {
        return new Promise(async (resolve, reject) => {
            await RequestHandler.sendRequest(new Models.RefreshToken(), function (err, data) {
                if (err) {
                    reject(err);
                }

                TokenCache.setToken(data);
                resolve('OK');
            });
        })
    });
}

module.exports = TokenClient;

const RequestHandler = require("../../common/request_handler");
const TokenCache = require("../../common/token_cache");

