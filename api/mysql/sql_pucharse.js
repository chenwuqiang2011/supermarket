//引入相应模块
var mysql = require("mysql");

//定义数据库
var sql = mysql.createConnection({
	host:"localhost",
	user:"root",
	password:"",
	database:"supermarket"
});

//连接数据库
sql.connect();

module.exports = {
	login:function(table,data,callback){
		console.log(6666);
		callback();
	},
	register:function(table,data,callback){}

}