/**
 * 请求方法
 */
class HttpMethod {

    constructor(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }
}

HttpMethod.GET = new HttpMethod("GET");
HttpMethod.POST = new HttpMethod("POST");
HttpMethod.PUT = new HttpMethod("PUT");
HttpMethod.DELETE = new HttpMethod("DELETE");

Object.freeze(HttpMethod);

module.exports = HttpMethod;