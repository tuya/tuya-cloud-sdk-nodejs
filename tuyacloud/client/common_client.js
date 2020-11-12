const retry = require('async-await-retry');

const HttpMethod = require("../common/http_method");
const HttpConnection = require("../common/http_connection");
const RequestHandler = require("../common/request_handler");
const ErrorCode = require("../common/error_code");
const TuyaCloudSDKException = require("../exception/tuya_cloud_sdk_exception");

/**
 * 通用客户端类
 */
class CommonClient {

    /**
     *
     * @param url
     * @param method
     * @param header
     * @param body
     * @param callback
     */
    static async sendRequest(url, method, header, body, callback) {
        return await retry(async () => {
            return new Promise(async (resolve, reject) => {
                await execute(url, method, header, body, async function (err, data) {
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
}

async function execute(url, method, header, body, callback) {
    // 验证开发者信息
    if (global.accessId == undefined || global.accessKey == undefined) {
        return await callback(new TuyaCloudSDKException("100000", "未初始化开发者信息！"), null);
    }

    if (method == undefined || url == undefined) {
        return await callback(new TuyaCloudSDKException("100000", "请求参数错误，请核对"));
    }

    if (!(method instanceof HttpMethod)) {
        return await callback(new TuyaCloudSDKException("100000", "Method only support GET, POST, PUT, DELETE"), null);
    }

    let req = {
        method: method.getName(),
        host: global.endpoint,
        path: url
    };

    // body param
    if (body != undefined && body != "") {
        req.form = JSON.parse(body);
    }

    // headers
    await RequestHandler.getHeader(true, header).then(data => {
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

module.exports = CommonClient;

