const https = require('https');
const HttpMethod = require("./http_method");

/**
 * https连接请求
 */
class HttpConnection {

    /**
     *
     * @param req
     * @param callback
     * @param opt
     */
    static doRequest(req, callback, opt={}) {
        Object.assign(req, opt);
        console.log(JSON.stringify(req))
        let resp = https.request(req, function(res){
            res.on('data', function(data){
                callback(null, data);
            });
        }).on('error', function(err){
            callback(err, null);
        });

        if (req.method === HttpMethod.POST.getName() || req.method === HttpMethod.PUT.getName()) {
            resp.write(JSON.stringify(req.form));
        }

        resp.end();
    }
}
module.exports = HttpConnection;

