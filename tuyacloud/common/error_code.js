const map = new Map([
    [500, "system error,please contact the admin"],

    //-------1000-1999为系统层面异常-------//
    [1000, "data not exist"],
    [1001, "secret invalid"],
    [1002, "access_token is null"],
    [1003, "grant type invalid"],
    [1004, "sign invalid"],
    [1005, "clientId invalid"],
    [1006, "not support content type"],
    [1007, "not support key"],
    [1008, "invalid access"],
    [1010, "token is expired"],
    [1010, "token invalid"],
    [1012, "token status is invalid"],
    [1013, "request time is invalid"],
    [1100, "param is empty"],
    [1101, "params range invalid"],
    [1102, "param is null"],
    [1103, "commands issue error"],
    [1104, "type is incorrect"],
    [1105, "missing the header"],
    [1106, "permission deny"],
    [1107, "code invalid"],
    [1108, "uri path invalid"],
    [1109, "param is illegal, please check it"],
    [1110, "concurrent request over limit"],


    // 2001-2200为业务异常
    [2001, "device is offline"],
    [2002, "this user dosen`t have any devices"],
    [2003, "function not support"],
    [2004, "not support the lock type"],
    [2005, "product not exist"],
    [2006, "user not exist"],
    [2007, "device token expired"],
    [2008, "command or value not support"],
    [2009, "not support this device"],
    [2010, "device not exist"],
    [2012, "application not support"],
    [2013, "add timer failed"],
    [2014, "this device dosen`t have any timers"],
    [2015, "this category is not supported"],
    [2016, "remote control is removed or does not exist"],
    [2017, "schema does not exist"],
    [2018, "data decrypt failed"],
    [2019, "time over two hours"],
    [2020, "Only third-party clouds are supported"],
    [2021, "Illegal email"],
    [2022, "Illegal phone"],
    [2023, "user exist"],
    [2024, "device file path is not standardized"],
    [2025, "device and file path mismatch"],
    [2026,"ip failed to get"],
    [2027,"size too large"],


    // 2201-2300 为定时异常
    [2201, "time overlap"],
    [2202, "date format error"],
    [2203, "A maximum of 15 timer tasks can be added "],
    [2204, "A maximum of 30 timer tasks can be added "],
    [2205, "Overlaps with timer task, please select again "],
    [2206, "not support timer type"],
    [2207, "not support timer type"],
    [2208, "timer delete error"],
    [2209, "The scheduled task has expired "],
    [2210, ""],
    [2211, "the device group is not exit"],
    [2212, "the device group no device was selected"],


    // 2301-2400门锁异常
    [2301, "the password is not confirm"],
    [2302, "password encryption error"],
    [2303, "The number of passwords has reached the limit！"],
    [2304, "password has expired!"],
    [2305, "The number of created passwords has reached the limit！ "],
    [2306, "Illegal operation！"],
    [2307, "The maximum number of available 99！"],
    [2308, "The maximum number of password operations"],
    [2309, "Mobile phone number does not conform to the rules"],
    [2310, "zigbee lock password not found"],
    [2311, "there are too many passwords in setting, please wait for gateway processing!"],
    [2312, "Door lock equipment is not online!"],
    [2313, "Initializing information, please be patient. If you haven't succeeded for a long time, please redistribute your network. "],
    [2314, "password exception"],
    [2315, "no effective password"],
    [2316, "password name can not repeat!"],
    [2317, "Gateway's other sub device is updating, please try later!"],
    [2318, "the effective time or invalid time is less than the current time"],
    [2319,"not sufficient SMS balance, please contact the manufacturer to recharge, cancel the phone number, you can create it! "],
    [2320,"The SMS balance of the manufacturer is insufficient. There is no SMS notification for this operation! "],
    [2321, "wifi lock password not found"],
    [2322, "wifi lock password can not be repeated"],
    [2323,"door lock password record does not exist"],
    [2324,"door lock password status does not allow operation"],

    // 2401-2500 为登录页异常
    [2401, "username or password wrong"],
    [2402, "country code invalid"],
    [2403, "country code not support this area"],
    [2405, "ticket invalid"],
    [2406, "skill id invalid"],
    [2407, "no trace verification failed"],
    [2408, "google token invalid"],
    [2409, "google token timeout or duplicate"],
    [2410, "region not support"],
    [2411, "need secondary validation"],
    [2412, "verification code error"],
    [2413, "excessive text messaging"],
    [2414, "verification code is already in use"],
    [2415, "verification code has expired"],
    [2416, "verification code does not exist"],
    [2417, "SMS is sent too fast, try again in one minute"],
    [2421, "failed to send sms"],
    [2418, "only support pre-issue and online"],
    [2419,"only support mobile phone number and email to send authentication code"],
    [2420, "verification codes that do not support this approach"],

    // 2501-2600 为全屋场景异常
    [2501, "home not exist"],
    [2502, "room not exist"],
    [2503, "scene not exist"],
    [2504, "user in different country"],
    [2505, "user relation is error"],
    [2506, "the member is not register"],
    [2507, "the member is in family"],
    [2508, "the member must is admin in family"],
    [2509, "the member is not exist"],
    [2510, "the member name is exist"],
    [2511, "the real devices are not match the scene template"],
    [2512, "action is empty"],
    [2513, "scene and home do not match"],
    [2514, "scene and device are not related"]
]);

/**
 * 涂鸦错误码
 */
class ErrorCode {

    static getError(code) {
        return map.get(code);
    }
}

module.exports = ErrorCode;