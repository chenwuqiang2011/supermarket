//引入相应模块
var mysql = require("mysql");

//定义数据库
var sql;
function open(){

	sql = mysql.createConnection({
		host:"localhost",
		user:"root",
		password:"",
		database:"supermarket"
	});
	//连接数据库
	sql.connect();
}


module.exports = {
	login:function(table,data,callback){
		//重新打开数据库；
		open();

		//用户名和密码
		var username = data.username;
		var password = data.password;

		//查询条件；
		var condition = "select * from user where name = ? and password = ?";

		sql.query(condition,[username,password],function(err,results){
			if(!err){

				//查询结果；
				if(results.length > 0){
					console.log("length")
					if(callback && typeof callback == "function"){

						callback({statu:true,message:"登录成功！",data:results});
						sql.end();
					}
				}else{
					if(callback && typeof callback == "function"){

						callback({statu:false,message:"用户名或者密码错误！",data:null});
						sql.end();
					}
				}
			}
		});

	},
	addUser: function(table,data,callback){
		//重新打开数据库；
		open();

		//用户名;
		var username = data.data;console.log(username)

		//查询条件；
		var condition = "select * from user where name = ? ";

		sql.query(condition,[username],function(err,results){
			console.log(results);
			callback(results)
		})
	}

}