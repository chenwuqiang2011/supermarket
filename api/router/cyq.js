var bodyParser = require('body-parser');

//新引入的模块；
var url =require("url");
var urlencodedParser = bodyParser.urlencoded({ extended: true })
var sql = require('../mysql/sql_cyq');

exports.register = function (app){
	//分页获取商品
	app.post('/getProduct',urlencodedParser,function(req,res){
     console.log(req.body)
		sql.getProducts('products',req.body,function(data){
			res.send(data);
		})
	})
	//获取供应商
	app.post('/getSupplier',urlencodedParser,function(req,res){
		sql.getSuppliers('supplier',req.body,function(data){
			res.send(data);
		})
	});
	//搜索数据
	app.post('/getSearchProducts',urlencodedParser,function(req,res){
		sql.getSearchProducts('products',req.body.key,function(data){
			res.send(data);
		})
	});
	//删除数据
    app.post('/deleteProduct',urlencodedParser,function(req,res){
    	sql.deleteProduct('products',req.body,function(data){
    		res.send(data)
    	})
    })
    //新增
    app.post('/addProduct',urlencodedParser,function(req,res){
    	sql.addProduct('products',req.body,function(data){
    		res.send(data)
    	})
    })
    //搜索供应商
    app.get('/SearchSuppliers',urlencodedParser,function(req,res){
    	sql.SearchSuppliers('supplier',req.query,function(data){
    		res.send(data)
    	})
    })
}