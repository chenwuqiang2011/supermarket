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
		var total = 0;
		var _condition = "select * from products";
		conn.query(_condition, function(err,res){
			total = res.length;
		});

		var obj = {page:1,qty:20};
		var targetObj = {};
		Object.assign(targetObj,obj,data)
		var page = targetObj.page - 1;
        var qty = Number(targetObj.qty);
        var sql = 'select * from products limit '+page*qty+','+qty;
        //select * from products limit (pageNode-1)*qty,qty
        conn.query(sql,function(err,res){
        	callback({status:true,message:'获取成功',data:res,total:total});

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
		/*var sql = "select * from products where goodsName like  '%" + data + "%' or barCode like '%" + data + "%' ";*/
		var sql = "SELECT a.*, b.supplierName FROM products a INNER JOIN supplier b on a.supplierId = b.supplierId WHERE CONCAT(goodsName, barCode, classify, b.supplierName) LIKE  '%"+data+"%' ";
		conn.query(sql,function(err,res){
			callback(res)
		})
	},

	//模糊查询供应商
	getSearchSuppliers:function(table,data,callback){
		var sql = "select * from supplier where concat(supplierId,supplierName) like '%" + data + "%' ";
		conn.query(sql,function(err,res){
			if(!err){
				callback({status:true,message:'查询成功',data:res})
			}else{
				console.log(err)
				callback({status:false,message:'查询失败',data:null})
			}
		})
	},

	//删除商品
	deleteProduct:function(table,data,callback){
		//所有数据数量
		var total = 0;
		var _condition = "select * from products";
		conn.query(_condition, function(err,res){
			total = res.length;
		});

		var obj = {page:1,qty:20};
		var targetObj = {};

		Object.assign(targetObj,obj,data)
		var page = Number(targetObj.page - 1);
        var qty = Number(targetObj.qty);
        console.log('data',data)
        console.log('obj',targetObj)
        var sql1 = 'delete from products where goodsId = ? ';
        var sqlparam = [data.id];
        var sql2 = 'select * from products limit '+page*qty+','+qty;
        //select * from products limit (pageNode-1)*qty,qty
        

		conn.query(sql1,sqlparam,function(err,res){
			if(!err){
				conn.query(sql2,function(err,res){
        			callback({status:true,message:'删除成功',data:res,total:total});
        		})
			}else{
				console.log(err)
				
			}
			
		})
	},

	//增加商品
	addProduct:function(table,data,callback){
		var sql = 'INSERT INTO products(goodsId,barCode,classify,goodsName,purchasingCost,salePrice,specification,unit,supplierId)VALUES(0,?,?,?,?,?,?,?,?)';

		var sqlparam = [
		data.barCode,
		data.classify,
		data.goodsName,
		data.purchasingCost,
		data.salePrice,
		data.specification,
		data.unit,
		data.supplierId,
		];
		console.log(sqlparam)
		conn.query(sql,sqlparam,function(err,res){
			if(!err){
				callback({status:true,message:'添加成功',date:res})
			}else{
				console.log(err)
				callback({status:false,message:'添加失败',date:null})
			}
       		 
       		       
		})
	}

	
}

