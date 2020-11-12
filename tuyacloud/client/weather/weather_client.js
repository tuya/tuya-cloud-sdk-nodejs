const RequestHandler = require("../../common/request_handler");
const Models = require("./models");

/**
 * 天气请求类
 */
class WeatherClient {

    /**
     * 获取城市列表
     *
     * @param countryCode
     * @param callback
     */
    static getCities(countryCode, callback) {
        RequestHandler.sendRequestWithToken(new Models.GetCitiesReq(countryCode), callback)
    }

    /**
     *  根据经纬度查询城市列表
     *
     * @param lon
     * @param lat
     * @param callback
     */
    static getCityListByLatAndLon(lon, lat, callback){
        RequestHandler.sendRequestWithToken(new Models.GetCityListByLatAndLonReq(lon, lat), callback)
    }

    /**
     * 获取城市天气预报信息
     *
     * @param cityId
     * @param callback
     */
    static getCityWeatherForecast(cityId, callback){
        RequestHandler.sendRequestWithToken(new Models.GetCityWeatherForecastReq(cityId), callback)
    }

    /**
     * 获取城市信息
     *
     * @param ip
     * @param callback
     */
    static getCityWeatherForecastByIp(ip, callback){
        RequestHandler.sendRequestWithToken(new Models.GetCityWeatherForecastByIpReq(ip), callback)
    }

    /**
     * 获取城市天气信息
     *
     * @param lon
     * @param lat
     * @param callback
     */
    static getCityWeatherByLonAndLat(lon, lat, callback){
        RequestHandler.sendRequestWithToken(new Models.GetCityWeatherByLonAndLatReq(lon, lat), callback)
    }

    /**
     * 获取城市信息
     * @param cityId
     * @param callback
     */
    static getCityInfo(cityId, callback){
        RequestHandler.sendRequestWithToken(new Models.GetCityInfoReq(cityId), callback)
    }
}

module.exports = WeatherClient;