const crypto = require('crypto');

/**
 * sign工具类
 */
class SignUtil {

    /**
     * HmacSHA256加密
     * 
     * @param message
     * @param secret
     * @returns {string}
     */
    static encrytSHA256(message, secret){

        // 创建一个hmac对象
        const hmac = crypto.createHmac('sha256', secret);

        // 往hmac对象中添加摘要内容
        const up = hmac.update(message);

        // 使用 digest 方法输出摘要内容
        const result = up.digest('hex').toUpperCase();

        return result;
    }
}

module.exports = SignUtil;