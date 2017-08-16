var path = require("path");

var products = require("./products.js");

var user = require("./user.js");

var cyq = require('./cyq.js');

exports.register = function(express){
	//把express通过调用函专传递过来；
	var app = express();

	//跨域；
    app.all('*', function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
        res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
        if(req.method=="OPTIONS") {
            res.send(200);/*让options请求快速返回*/
        } else{
            next();
        }
    });

    app.use(express.static(path.join(path.resolve(__dirname,"../../"), '/')));
    
    app.get('/', function(request, response){
        response.send('Home Page');
    }); 

    //把app传递到用户产品js 页面；前提先引入页面模块；
    products.register(app);
    user.register(app);
    cyq.register(app);
   console.log(888)

    console.log(999)
    return app

}