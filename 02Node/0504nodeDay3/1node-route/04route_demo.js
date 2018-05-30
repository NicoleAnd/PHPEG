// 模拟知乎 路由设计
var http = require("http");

var server = http.createServer(function(req,res){
	res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});  
	// 得到用户的URL
	var url = req.url;
	// 120.0.0.1:4000/user/along/asks
	// 120.0.0.1:4000/user/xiaoqiang/posts
	
	// 正则
	var arr = url.match(/\/user\/(.+)\/(.+)$/);
	if(!arr){
		res.end("<h1>对不起，没有该网址</h1>");
		return;
	}

	// 模拟数据
	var users = {
		"along":"阿龙",
		"xiaoqiang":"王小强",
		"luhan":"鹿晗",
		"wangjunkai":"王俊凯"
	};
	var list = {
		"asks":"提问",
		"posts":"文章",
		"pins":"想法",
		"activities":"活动"
	}
	res.end("<p>欢迎查看"+users[arr[1]]+"的"+list[arr[2]]+"</p>");

});

server.listen(4000);