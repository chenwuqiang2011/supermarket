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
		var username = data.name;
		var password = data.password;
		var access = data.access;
		var _user = JSON.parse(data._user);

		//查询条件；
		var condition = "select * from user where name = ? ";

		sql.query(condition,[username],function(err,results){
			if(!err){

				//查询结果；
				if(results.length > 0){
					console.log("length")
					if(callback && typeof callback == "function"){

						callback({statu:false,message:"用户已存在！",data:_user});
						sql.end();
					}
				}else{
					var  addSql = 'INSERT INTO user(id, name, password, access) VALUES(0,?,?,?)';
					sql.query(addSql,[username, password, access], function(err,results){
						

						if(callback && typeof callback == "function"){

							callback({statu:true,message:"用户名添加成功！",data:_user});
							sql.end();
						}
					})
				}
			}
		})
	},

	allUser: function(table,data,callback){
		//重新打开数据库；
		open();
console.log(1111111,data)
		//查询条件；var condition = "select * from user limit " + pageNo*qty + "," + qty;
		var condition = "select * from user";

		sql.query(condition, function(err,results){
			if(!err){

				//查询结果；
				if(results.length > 0){
					console.log("length")
					if(callback && typeof callback == "function"){

						callback({statu:true,message:"查询到所有用户！",data:results});
						sql.end();
					}
				}else{
					console.log("err");
					callback({statu:false,message:"用户不存在！",data:null});
					sql.end();
				}
			}
		})
	},

	deleteUser: function(table,data,callback){
		//重新打开数据库；
		open();

		//查询条件；
		var condition = "delete from user where id = ?";
		console.log("222,delete");

		sql.query(condition, [data.id], function(err,results){
			console.log(33,data.id,results)
			if(!err){

				//查询结果；
				if(results.affectedRows > 0){
					console.log("delete,length")
					if(callback && typeof callback == "function"){

						callback({statu:true,message:"用户删除成功！",data:results});
						sql.end();
					}
				}else{
					console.log("err");
					callback({statu:false,message:"用户删除不成功",data:null});
					sql.end();
				}
			}
		})
	},

	updateUser: function(table,data,callback){
		//重新打开数据库；
		open();
		var id = data.id;
		var username = data.name;
		var password = data.password;
		var access = data.access;
		var _user = JSON.parse(data._user);

		//查询条件；
		var userSql = 'UPDATE user SET name = ?,password = ?, access = ? WHERE Id = '+ id;
		var userParams = [username, password, access];
		

		sql.query(userSql, userParams, function(err,results){
			console.log(1111111,id, userParams,results)
			if(!err){

				//查询结果；
				if(results.affectedRows > 0){
					console.log("delete,length")
					if(callback && typeof callback == "function"){

						callback({statu:true,message:"用户更新成功！",data:_user});
						sql.end();
					}
				}else{
					console.log("err");
					callback({statu:false,message:"用户更新不成功",data:_user});
					sql.end();
				}
			}
		})
	}

}