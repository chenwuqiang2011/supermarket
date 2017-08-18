//引入相应模块
var mysql = require("mysql");

//定义数据库
var conn = mysql.createConnection({
	host	:"localhost",
	user	:"root",
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
		Object.assign(targetObj,obj,data);
		var page = targetObj.page - 1;
        var qty  = Number(targetObj.qty);
        var sql  = 'select * from products limit '+page*qty+','+qty;
        //select * from products limit (pageNode-1)*qty,qty
        conn.query(sql,function(err,res){
        	if(!err){
        		callback({status:true,message:'获取成功',data:res,total:total});
        	}else{
        		callback({status:false,message:'获取失败',data:null,total:null});
        	}
        	

        })
	},

	//获取全部供应商数据
	getSuppliers:function(table,data,callback){
		var total = 0;
		var _condition = "select * from supplier";
		conn.query(_condition, function(err,res){
			total = res.length;
		});
		var obj = {page:1,qty:10};
		var targetObj = {};
		Object.assign(targetObj,obj,data);
		var page = targetObj.page - 1;
        var qty  = Number(targetObj.qty);
        var sql  = 'select * from supplier limit '+page*qty+','+qty;

		conn.query(sql,function(err,res){
			if(!err){
				callback({status:true,message:'查询成功',data:res,total:total,page:1});
			}else{
				console.log(err)
				callback({status:false,message:'查询失败',data:null,total:null});
			}
			
		})
	},

	//模糊查询商品名
	getSearchProducts:function(table,data,callback){
		/*var sql = "select * from products where goodsName like  '%" + data + "%' or barCode like '%" + data + "%' ";*/
		var sql = "SELECT a.*, b.supplierName FROM products a INNER JOIN supplier b on a.supplierId = b.supplierId WHERE CONCAT(goodsName, barCode, classify, b.supplierName) LIKE  '%"+data+"%' ";
		conn.query(sql,function(err,res){
			if(!err){
				callback({status:true,message:'查询成功',data:res})
			}else{
				callback({status:false,message:'查询失败',data:null})
				console.log(err)
			}
			
		})
	},

	//模糊查询供应商
	SearchSuppliers:function(table,data,callback){
		console.log(data.key)
		var sql = "select * from supplier where concat(supplierId,supplierName) like '%" + data.key + "%' ";
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
        var qty  = Number(targetObj.qty);
        console.log('data',data)
        console.log('obj',targetObj)
        var sql1 = 'delete from products where goodsId = ? ';
        var sql2 = 'select * from products limit '+page*qty+','+qty;
         var sqlparam = [data.id];
        //select * from products limit (pageNode-1)*qty,qty
        

		conn.query(sql1,sqlparam,function(err,res){
			if(!err){
				conn.query(sql2,function(err,res){
        			callback({status:true,message:'删除成功',data:res,total:total});
        		})
			}else{
				console.log(err)
				callback({status:false,message:'删除失败',data:null,total:null});
			}
			
		})
	},

	//删除供应商
	deleteSupplier:function(table,data,callback) {
		//所有数据数量
		var total = 0;
		var _condition = "select * from supplier";
		conn.query(_condition, function(err,res){
			total = res.length;
		});

		var obj = {page:1,qty:10};
		var targetObj = {};

		Object.assign(targetObj,obj,data)
		var page = Number(targetObj.page - 1);
        var qty  = Number(targetObj.qty);
        console.log('data',data)
        console.log('obj',targetObj)
        var sql1 = 'delete from supplier where supplierId = ? ';
        var sql2 = 'select * from supplier limit '+page*qty+','+qty;
         var sqlparam = [data.id];
        //select * from products limit (pageNode-1)*qty,qty
        

		conn.query(sql1,sqlparam,function(err,res){
			if(!err){
				conn.query(sql2,function(err,res){
        			callback({status:true,message:'删除成功',data:res,total:total});
        		})
			}else{
				console.log(err)
				callback({status:false,message:'删除失败',data:null,total:null});
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
	},

	//更新供应商、商品
	update:function(table,data,callback) {
		console.log(data)
		var editData = data.editData
		//所有数据数量
		var total = 0;
		var _condition = `select * from ${data.table}`;
		conn.query(_condition, function(err,res){
			total = res.length;
		});

		var obj = {page:1,qty:10};
		var targetObj = {};

		Object.assign(targetObj,obj,data)
		var page = Number(targetObj.page - 1);
        var qty  = Number(targetObj.qty);

		if(data.table == 'supplier'){
			var sql = `
			UPDATE supplier SET
				supplierName = '${editData.supplierName}',
				phone 		 = '${editData.phone}',
				linkman 	 = '${editData.linkman}',
				address 	 = '${editData.address}'
			WHERE supplierId = ${Number(editData.supplierId)}`;
		}
		
		if(data.table == 'products'){
			var sql = `
				UPDATE products SET
					barCode 	   = '${editData.barCode}',
					goodsName 	   = '${editData.goodsName}',
					specification  = '${editData.specification}',
					unit 		   = '${editData.unit}',
					purchasingCost = '${editData.purchasingCost}',
					salePrice 	   = '${editData.salePrice}',
					classify 	   = '${editData.classify}',
					supplierId     = '${editData.supplierId}'
				WHERE goodsId      = ${Number(editData.goodsId)}`;
		}
		/*var sql2 = 'select * from supplier limit '+page*qty+','+qty;*/
		/*var sql2 = `select * from ${data.table} limit ${page} * ${qty},${qty}` 错误*/
		var sql2 = `select * from ${data.table} limit ${page * qty},${qty}`
		conn.query(sql,function(err,res) {
			console.log("1",res)
			if(!err){
				conn.query(sql2,function(err,res) {
			console.log("2",res)

					if(!err){
						callback({status:true,message:'更新成功',data:res,total:total})
					}else{
						callback({status:false,message:'更新失败',data:null,total:null})
					}
					
				})
			}else{
				console.log(err)
			}
		});
	},
}

