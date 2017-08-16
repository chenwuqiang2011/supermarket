//引入相应模块
var mysql = require("mysql");

//定义数据库
var conn = mysql.createConnection({
	host:"localhost",
	user:"root",
	password:"",
	database:"supermarket"
});

//连接数据库
conn.connect();

module.exports = {

	//商品分页加载；
	getProducts:function(table,data,callback){
		var obj = {page:1,qty:20};
		var targetObj = {};
		Object.assign(targetObj,obj,data)
		var page = targetObj.page - 1;
        var qty = Number(targetObj.qty);
        var sql = 'select * from products limit '+page*qty+','+qty;
        //select * from products limit (pageNode-1)*qty,qty
        conn.query(sql,function(err,res){
        	callback(res);

        })
	},

	//获取全部供应商数据
	getSuppliers:function(table,data,callback){
		var sql = 'select * from supplier';
		conn.query(sql,function(err,res){
			callback(res);
		})
	},

	//模糊查询商品名
	getSearchProducts:function(table,data,callback){
		console.log(data)
		var sql = "select * from products where goodsName like  '%" + data + "%' or barCode like '%" + data + "%' ";
		conn.query(sql,function(err,res){
			callback(res)
		})
	},

	//删除商品
	deleteProduct:function(table,data,callback){
		var sql = 'delete from products where goodsId ='+data;
		conn.query(sql,function(err,res){
			callback(res)
		})
	}


	
}

