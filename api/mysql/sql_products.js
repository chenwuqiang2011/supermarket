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
	query:function(table,data,callback){
		//查询数据库
		sql.query("select * from products",function(err,results,fields){
			console.log(8888,results);
			callback(results)
		})
	}
}

