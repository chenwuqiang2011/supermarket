var bodyParser = require('body-parser');

//新引入的模块；
var url =require("url");
var urlencodedParser = bodyParser.urlencoded({ extended: true })
var sql = require('../mysql/sql_collectMoney');

exports.register = function (app){
	//用户登录
	app.post("/collectMoney", urlencodedParser,function(request,response){
		/*console.log(request);*/
		//请求数据库；
		sql.collect("money", request.body, function(data){
			//返回数据到页面；
			response.send(data);
		})
	})
}