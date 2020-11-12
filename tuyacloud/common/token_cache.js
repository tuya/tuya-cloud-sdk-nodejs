const TokenClient = require("../client/token/token_client");


/**
 * token cache
 */
class TokenCache {

    /**
     * 获取token
     *
     * @returns {*}
     */
    static async getToken() {
        if (global.accessToken == undefined) {
            // 未命中缓存，获取token
            await TokenClient.getToken();
        } else {
            try {
                if (global.expireTime != undefined && global.expireTime > (new Date().getTime()/1000 + 30)) {
                    return global.accessToken;
                }

                // 刷新token
                await TokenClient.refreshToken();
            } catch (e) {
                // 刷新失败，重新获取
                await TokenClient.getToken();
            }
        }

        return global.accessToken;
    }

    /**
     * 设置token缓存
     *
     * @param tokenResponse
     */
    static setToken(tokenResponse) {
        if (tokenResponse != null) {
            let response = JSON.parse(JSON.stringify(tokenResponse.result));
            global.accessToken = response.access_token;
            global.refreshToken = response.refresh_token;
            global.expireTime = new Date().getTime()/1000 + response.expire_time;
        }
    }
}

module.exports = TokenCache;