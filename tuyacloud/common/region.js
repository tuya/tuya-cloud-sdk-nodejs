/**
 * 涂鸦服务
 */
class Region {

    constructor(url) {
        this.url = url;
    }

    getUrl() {
        return this.url;
    }
}

/**
 * 中国区 - CHINA
 */
Region.URL_CN = new Region("openapi.tuyacn.com");

/**
 * 美洲区 - USA
 */
Region.URL_US = new Region("openapi.tuyaus.com");

/**
 * 欧洲区 - EUROPE
 */
Region.URL_EU = new Region("openapi.tuyaeu.com");

/**
 * 印度区 - INDIA
 */
Region.URL_IN = new Region("openapi.tuyain.com");


Object.freeze(Region);

module.exports = Region;