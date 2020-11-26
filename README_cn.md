# 涂鸦云云对接API SDK Nodejs版本

[English](README.md) | [中文版](README_cn.md)

## 使用前需要做
1. 确认nodejs版本在7.10.1及以上

2. 在涂鸦云平台注册开发者账号，确定`AccessID、AccessKey、Endpoint`(调用地址)这些值

## 源码安装
1. 解压源码包到您项目合适的位置。
2. 代码中引用对应模块代码，可参考示例。

## Example

在你运行本sdk前，显式初始化一次开发者信息：
```
   Config.init(accessID, accessKey, Region.URL_CN);
```

以获取设备信息接口为例，直接调用device.GetDevice()即可:   
```nodejs
    
    let deviceId = 'xxxx';
    let callback = function(err, data) {
        if (err) {
            console.log(err);
            return;
        }
    
        console.log(data);
    };
    
    // 获取设备信息
    DeviceClient.getDevice(deviceId, callback);
    
```

## 目前支持的API

|  模块                   | 请求类 |
|  ----                     |  ----  |
| token相关 | TokenClient |
| 用户管理 | UserClient | 
| 设备管理 | DeviceClient |
| 设备控制 | DeviceControlClient |
| 设备群组 | DeviceGroupClient |
| 设备成员管理| DeviceMemberClient |
| 数据统计 | DataClient | 
| 家庭管理 | HomeClient | 
| 自动化 | AutomationClient | 
| 场景 | SceneClient | 
| 配网管理 | PairTokenClient | 
| 定时管理 | TimeClient | 
| 天气管理 | WeatherClient |

## 常见问题

### 关于refreshToken接口

注意： refreshToken接口会返回一个新的access_token，即使旧的token还未过期。

这个逻辑在GetToken方法中已经做了，用户一般不需要调用refresh接口。

### 每次调用api之前，是否需要获取token或者刷新token？

不需要，这层逻辑已经在api方法中实现了。token信息会缓存到内存中。

### 调用某个接口时，如果token已经过期，需要手动调用refresh-token接口？

不需要，在GetToken()方法实现中，会检查token是否过期。如果过期会去重新拉取。

### 如果你的token会在多个节点中去刷新，那么你需要自己实现common.TokenLocalManage interface
涂鸦的云token，只保证面向的用户级别刷新不会有问题，但是一个用户的token在多个节点并发刷新，就会导致一个节点是成功的，
其他都是失败；
因为 `获取token`接口会返回一个access_token、refresh_token，但是 `刷新token`接口 会把当前的refresh_token 刷掉，会产生一个新的，旧的失效；

### api方法的异常信息和error需要如何处理？

接口如果返回error，一般可以为url错误或者json解析出错，可联系涂鸦相关人员帮忙修改

如果error为空，但是response的success字段为false，开发者可以根据Msg字段的详细错误信息进行排查

### 获取设备列表接口，如果多个deviceID，需要怎么拼接？

多个deviceID，以英文逗号分割拼接

### 获取用户列表接口中，schema指的是什么？

创建APP-SDK后，详情页面的渠道标识符就是schema

### v1.0/devices/tokens/{{pair_token}}接口，pair_token是指什么？如何获取？

pair_token是指app下的某个用户的配网token，可以从v1.0/devices/token获取。

### 如果SDK中的API没有及时更新，如何自己实现一个API？

有三种方法：

一、自定义类实现
1. 如果请求不需要传递body参数，通过创建请求类继承com.tuya.api.common.ApiRequest, 并完善其中getRequestMethod和getRequestUrl两个方法即可，
如果接口需要传递body参数，应继承com.tuya.api.common.ApiRequestBody, 完善getRequestMethod、getRequestUrl和getRequestBody方法；

2. 通过client类暴露请求方法。

> 具体可以参考example.user/example.device目录下相关示例;

二、使用提供的通用接口
直接调用CommonClient, 传入相应的参数即可。

> 具体可以参考example.common目录下相关示例;

三、提个issue，我们会及时更新 ^_^


## 技术支持

你可以通过以下方式获得Tua开发者技术支持：

- 涂鸦帮助中心: [https://support.tuya.com/zh/help](https://support.tuya.com/zh/help)
- 涂鸦技术工单平台: [https://iot.tuya.com/council](https://iot.tuya.com/council)
