// 利用nodejs内置的http模块创建服务器
// 得到http模块
var http = require("http");
// 创建服务器 用createServer()
// 回调函数中req代表请求，res代表响应
var server = http.createServer(function(req,res){
	// 输出内容 计算过程在服务器上
	// end(不能是数字)
	// end只能出现一次
	// res.end("sdfsf");
	// write能多次出现 结束要有end
	res.write("aaaa");
	res.write("bbbb");
	res.write("cccc");
	// res.end("我有一部iPhone"+(3+4)+"手机");
	res.end("<h1>Nodejs 我来啦</h1>");
});

// 监听端口
server.listen(4000);


// node fuxi_node.js  http://127.0.0.1:4000/