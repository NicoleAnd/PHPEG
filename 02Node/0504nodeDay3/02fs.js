// 利用nodejs内置的http模块创建服务器
// 得到http模块
var http = require("http");

// 使用fs模块（文件系统模块）
var fs = require("fs");

// 创建服务器 用createServer()
// 回调函数中req代表请求，res代表响应
var server = http.createServer(function(req,res){
	// res.end("OK");
	
	// 需要读取的文件 第一个参数表示URL 必须以./开头 表示从当前js文件出发寻找html文件
	fs.readFile("./public/mingxing.html",function(err,data){
		res.end(data);
	});
});

// 监听端口
server.listen(4000);

// node 01.js  http://127.0.0.1:4000/