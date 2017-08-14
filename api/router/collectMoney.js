var bodyParser = require('body-parser');

//新引入的模块；
var url =require("url");
var urlencodedParser = bodyParser.urlencoded({ extended: true })
var sql = require('../mysql/sql_user');

exports.register = function (app){
	//用户登录
	app.post("/collectMoney", function(request,response){
		
		//请求数据库；
		sql.login("money", request.body, function(data){
			//返回数据到页面；
			response.send({response:"666",body:"888"});
		})
	})
}