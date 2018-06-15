var express = require("express");
var app = express();
var url = require("url");

var formidable = require("formidable");
var util = require("util");

// 把public文件夹静态化出来  好处是自动拥有路由
app.use(express.static("public")); //拦截后面

// 后台处理get请求
app.get("/api",function(req,res){
	// console.log(req.url);
	// console.log(url.parse(req.url,true).query);
	var query = url.parse(req.url,true).query;
	console.log("The server receives the data submitted by the client:",query);
});

// 后台处理post请求
app.post("/api",function(req,res){
	// 返回一个对象
	var form = new formidable.IncomingForm();
	// 表单域:数据域  文件域
	form.parse(req,function(err,fields,files){
		console.log(fields);
		res.json({"result":1});
	});
});


// 后台处理delete请求 
app.delete("/api",function(req,res){
	var form = new formidable.IncomingForm();
	form.parse(req,function(err,fields,files){
		console.log(fields);
		res.json({"result":1});
	});
});

app.listen(5888);






