var express = require("express");
var app = express();
var url = require("url");	//req.url

var formidable = require("formidable");
var util = require("util");


// 把public文件夹静态化出来  好处是自动拥有路由
app.use(express.static("public")); //拦截后面

app.get("/api",function(req,res){
	console.log(req.url);
	console.log(url.parse(req.url));//parse转换
	console.log(url.parse(req.url,true));//parse转换
	var query = url.parse(req.url,true).query;
	console.log("服务器收到了客户端提交来的数据",query);
});

// 后台处理post请求
app.post('/api',function(req,res){
	// 收集表单 对象
	var form = new formidable.IncomingForm();
	// 请求信息转换一下   错误 数据域 文件域
	form.parse(req,function(err,fields,files){
		console.log(fields);
		res.json({"result":1});
	});
});

// 识别delete请求
app.delete("/api",function(req,res){
	// 收集表单 对象
	var form = new formidable.IncomingForm();
	// 请求信息转换一下   错误 数据域 文件域
	form.parse(req,function(err,fields,files){
		console.log(fields);
		res.json({"result":1});
	});
});

app.listen(5888);