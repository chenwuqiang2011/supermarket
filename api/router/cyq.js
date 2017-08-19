var bodyParser = require('body-parser');

//新引入的模块；
var url =require("url");
var sql = require('../mysql/sql_cyq');
var urlencodedParser = bodyParser.urlencoded({ extended: true });

exports.register = function (app) {
	//分页获取商品api
	app.post('/getProduct',urlencodedParser,function(req,res) {
		sql.getProducts('products',req.body,function(data) {
			res.send(data);
		});
	});
	//获取供应商api
	app.post('/getSupplier',urlencodedParser,function(req,res) {
		sql.getSuppliers('supplier',req.body,function(data) {
			res.send(data);
		});
	});
	//搜索数据api
	app.post('/getSearchProducts',urlencodedParser,function(req,res) {
		sql.getSearchProducts('products',req.body.key,function(data) {
			res.send(data);
		});
	});
	//删除数据api
    app.post('/deleteProduct',urlencodedParser,function(req,res) {
    	sql.deleteProduct('products',req.body,function(data) {
    		res.send(data);
    	});
    });
    //新增商品api
    app.post('/addProduct',urlencodedParser,function(req,res) {
    	sql.addProduct('products',req.body,function(data) {
    		res.send(data);
    	});
    });
    //模糊搜索供应商api
    app.get('/SearchSuppliers',urlencodedParser,function(req,res) {
    	sql.SearchSuppliers('supplier',req.query,function(data) {
    		res.send(data);
    	});
    });
    //删除供应商api
    app.post('/deleteSupplier',urlencodedParser,function(req,res) {
    	sql.deleteSupplier('supplier',req.body,function(data) {
    		res.send(data);
    	});
    });
    //更新商品api
    app.post('/updateProduct',urlencodedParser,function(req,res) {
        sql.update('products',req.body,function(data) {
            res.send(data)
        })
    })
    //更新供应商api
    app.post('/updateSupplier',urlencodedParser,function(req,res) {
        sql.update('supplier',req.body,function(data) {
            res.send(data);
        });
    });
    //新增供应商api
    app.post('/addSupplier',urlencodedParser,function(req,res) {
        sql.add('supplier',req.body,function(data) {
            res.send(data)
        });
    });

}