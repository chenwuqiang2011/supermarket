var bodyParser = require('body-parser');

//新引入的模块；
var url =require("url");
var urlencodedParser = bodyParser.urlencoded({ extended: true })
var sql = require('../mysql/sql_products');

exports.register = function (app){
	//用户登录
	app.post("/query",urlencodedParser, function(request,response){

		//请求数据库；
		sql.query("products", request.query, function(data){
			//返回数据到页面；
			response.send(data);
		})
	})
}