var bodyParser = require('body-parser');

//新引入的模块；
var url =require("url");
var urlencodedParser = bodyParser.urlencoded({ extended: true })
var sql = require('../mysql/sql_user');

exports.register = function (app){
	//用户登录
	app.post("/login",urlencodedParser, function(request,response){

		//请求数据库；
		sql.login("user", request.body, function(data){
			//返回数据到页面；
			response.send(data);
		})
	});
	app.post("/addUser",urlencodedParser, function(request,response){
console.log(2222,request.body)
		//请求数据库；
		sql.addUser("user", request.body, function(data){
			//返回数据到页面；
			response.send(data);
		})
	})
}