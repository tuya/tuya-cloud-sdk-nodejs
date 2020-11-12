const ApiRequest = require("../../common/api_request");
const HttpMethod = require("../../common/http_method");

/**
 * 获取城市列表
 */
class GetCitiesReq extends ApiRequest {
    constructor(countryCode) {
        super();
        this.countryCode = countryCode;
    }

    getRequestMethod() {
        return HttpMethod.GET;
    }

    getRequestUrl() {
        return `/v1.0/countries/${this.countryCode}/cities`
    }
}

/**
 * 根据经纬度查询城市列表
 */
class GetCityListByLatAndLonReq extends ApiRequest{
    constructor(lon, lat){
        super();
        this.lon = lon;
        this.lat = lat;
    }

    getRequestMethod() {
        super.getRequestMethod();
    }

    getRequestUrl() {
        return `/v1.0/position/city?lon=${this.lon}&lat=${this.lat}`
    }
}


/**
 * 获取城市天气预报信息
 */
class GetCityWeatherForecastReq extends ApiRequest {
    constructor(cityId){
        super();
        this.cityId = cityId;
    }


    getRequestMethod() {
        return HttpMethod.GET;
    }

    getRequestUrl() {
        return `/v1.0/cities/${this.cityId}/weather-forecast`
    }
}



/**
 * 获取城市信息
 */
class GetCityWeatherForecastByIpReq extends ApiRequest {
    constructor(ip){
        super();
        this.ip = ip;
    }


    getRequestMethod() {
        return HttpMethod.GET;
    }

    getRequestUrl() {
        return `/v1.0/ip/weather-forecast?ip=${this.ip}`
    }
}


/**
 * 获取城市天气信息
 */
class GetCityWeatherByLonAndLatReq extends ApiRequest {
    constructor(lon, lat){
        super();
        this.lon = lon;
        this.lat = lat;
    }


    getRequestMethod() {
        return HttpMethod.GET;
    }

    getRequestUrl() {
        return `/v1.0/position/weather?lon=${this.lon}&lat=${this.lat}`
    }
}

/**
 * 获取城市信息
 */
class GetCityInfoReq extends ApiRequest {
    constructor(cityId){
        super();
        this.cityId = cityId;
    }


    getRequestMethod() {
        return HttpMethod.GET;
    }

    getRequestUrl() {
        return `/v1.0/cities/${this.cityId}`
    }
}

module.exports = {
    GetCitiesReq: GetCitiesReq,
    GetCityInfoReq: GetCityInfoReq,
    GetCityListByLatAndLonReq: GetCityListByLatAndLonReq,
    GetCityWeatherForecastReq: GetCityWeatherForecastReq,
    GetCityWeatherForecastByIpReq: GetCityWeatherForecastByIpReq,
    GetCityWeatherByLonAndLatReq: GetCityWeatherByLonAndLatReq,
}