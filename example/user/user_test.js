const tuyacloud = require("../../../tuya_cloud_sdk_nodejs");

const Config = tuyacloud.common.Config;
const UserClient = tuyacloud.client.user.UserClient;
const Region = tuyacloud.common.Region;


let accessId = "xxx";
let accessKey = "xxx";
let schema = "xxx";


// 1、初始化开发者信息
Config.init(accessId, accessKey, Region.URL_CN);


// 同步用户
let user = {
    "country_code":"86",
    "username":"mm20200106@163.com",
    "password":"12312",
    "nick_name":"mm20200106@163.com",
    "username_type": 2
};

UserClient.syncUser(schema, user, function (err, data) {
    if (err) {
        console.log(err);
        return;
    }

    console.log("同步用户回调: " + JSON.stringify(data));
});


// 获取用户列表
UserClient.getUsers(schema,  1, 10,function (err, data) {
    if (err) {
        console.log(err);
        return;
    }

    console.log("获取用户列表回调: " + JSON.stringify(data));
});


