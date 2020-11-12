const TuyaCloudSDKException = require("../exception/tuya_cloud_sdk_exception");
const ApiRequestBody = require("./api_request_body");
const ApiRequest = require("./api_request");
const HttpConnection = require("./http_connection");
const ErrorCode = require("./error_code");
const TokenCache = require("./token_cache");
const Sign = require("./sign");
const HttpMethod = require("./http_method");

const retry = require('async-await-retry');


/**
 * 请求处理类
 */
class RequestHandler {

    /**
     * 执行请求, 不携带token
     *
     * @param request
     * @param callback
     * @returns {Promise<*|*>}
     */
    static async sendRequest(request, callback) {
        return this.execute(request, false, callback);
    }

    /**
     * 执行请求, 需携带token
     *
     * @param request
     * @param callback
     * @returns {Promise<*>}
     */
    static async sendRequestWithToken(request, callback) {
        return await retry(async () => {
            return new Promise(async (resolve, reject) => {
                await this.execute(request, true, async function (err, data) {
                    if (err) {
                        if (err.code == 1100) {
                            global.accessToken = undefined;
                            reject(err);
                        }
                        callback(err, null);
                        return;
                    }

                    callback(null, data);
                    resolve('OK');
                });
            })
        });
    }

    /**
     * 执行请求
     *
     * @param request
     * @param withToken
     * @param callback
     */
    static async execute(request, withToken, callback) {
        // 验证开发者信息
        if (global.accessId == undefined || global.accessKey == undefined) {
            return await callback(new TuyaCloudSDKException("100000", "未初始化开发者信息！"), null);
        }

        // 验证请求参数
        let method, url;
        if (request instanceof ApiRequest) {
            method = request.getRequestMethod();
            if (!(method instanceof HttpMethod)) {
                return await callback(new TuyaCloudSDKException("100000", "Method only support GET, POST, PUT, DELETE"), null);
            }
            method = method.getName();
            url = request.getRequestUrl();
        }

        if (method == undefined || url == undefined) {
            return await callback(new TuyaCloudSDKException("100000", "请求参数错误，请核对"));
        }

        let req = {
            method: method,
            host: global.endpoint,
            path: url
        };

        // body param
        if (request instanceof ApiRequestBody) {
            req.form = JSON.parse(request.getRequestBody());
        }

        // headers
        await this.getHeader(withToken, {}).then(data => {
            req.headers = JSON.parse(data);
        });

        if (method === HttpMethod.POST.getName()) {
            req.headers['Content-Type'] = 'application/json';
        }

        return new Promise((resolve, reject) => {
            HttpConnection.doRequest(req, async(error, data) => {
                if (error) {
                    const tcError = new TuyaCloudSDKException(error.message);
                    await callback(tcError, null);
                } else {
                    data = JSON.parse(data);
                    if (!data.success) {
                        const tcError = new TuyaCloudSDKException(data.code, ErrorCode.getError(data.code));
                        await callback(tcError, null);
                    } else {
                        await callback(null, data);
                        resolve(data);
                    }
                }
            }, {timeout: 30000});
        });
    }

    /**
     * 获取header
     *
     * @param withToken 是否携带token
     * @param opt 自定义header
     * @returns {{t: *, sign_method: *, sign: *, client_id: *}}
     */
     static async getHeader(withToken, opt) {
        let headers = {
            client_id: global.accessId,
            t: new Date().getTime(),
            sign_method: "HMAC-SHA256",
        };

        if (withToken) {
            headers.access_token = await TokenCache.getToken();
            headers.sign = this.calcSign(global.accessId, global.accessKey, headers.t, headers.access_token, true);
        } else {
            headers.sign = this.calcSign(global.accessId, global.accessKey, headers.t, null, false);
        }

        Object.assign(headers, opt);
        return new Promise((resolve, reject) => {
            resolve(JSON.stringify(headers));
        });
    }

    /**
     * 计算sign
     *
     * @param accessId
     * @param secret
     * @param t
     * @param accessToken
     * @param withToken
     * @returns {string}
     */
    static calcSign(accessId, secret, t, accessToken, withToken) {
        let message = accessId + t;
        if (withToken) {
            message = accessId + accessToken + t;
        }

        return Sign.encrytSHA256(message, secret);
    }

}

module.exports = RequestHandler;