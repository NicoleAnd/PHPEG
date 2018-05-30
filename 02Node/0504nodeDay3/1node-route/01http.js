// 利用nodejs内置的http模块创建服务器
// 得到http模块
var http = require("http");

// 创建服务器 用createServer()
// 回调函数中req代表请求，res代表响应
var server = http.createServer(function(req,res){
	res.end("OK");
});

// 监听端口
server.listen(4000);

// node 01.js  http://127.0.0.1:4000/