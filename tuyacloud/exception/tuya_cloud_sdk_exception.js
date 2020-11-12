/**
 * 涂鸦异常类
 */
class TuyaCloudSDKException extends Error {

    constructor(code, error) {
        super(error);
        this.code = code;
    }

    getErrorCode() {
        return this.code;
    }

    getMessage() {
        return this.message;
    }

    toString() {
        return "[TuyaCloudSDKException] " + "code: " + this.getErrorCode() + " message: " + this.getMessage();
    }

    toLocaleString() {
        return "[TuyaCloudSDKException] " + "code: " + this.getErrorCode() + " message: " + this.getMessage();
    }
}

module.exports = TuyaCloudSDKException;
