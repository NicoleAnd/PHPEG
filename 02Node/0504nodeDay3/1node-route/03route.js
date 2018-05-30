var http = require("http");
var fs = require("fs");
var server = http.createServer(function(req,res){
	// 请求地址不同，内容相同，加入判断
	// 请求地址

	// HTML页面添加路由
	console.log(req.url);
	if (req.url == "/mingxing.html") {
		fs.readFile("./public/mingxing.html",function(err,data){
			res.end(data);
		});

	// 路径 添加路由，可以没有xidada文件夹
	}else if(req.url == "/xidada") {
		fs.readFile("./public/mingxing.html",function(err,data){
			res.end(data);
		});
	}else if(req.url == "/laobaixing.html"){
		fs.readFile("./public/laobaixing.html",function(err,data){
			res.end(data);
		});
	}else if(req.url == "/leifeng"){
		fs.readFile("./public/laobaixing.html",function(err,data){
			res.end(data);
		});

	// CSS 添加路由
	}else if(req.url == "/mingxing.css"){
		fs.readFile("./public/mingxing.css",function(err,data){
			res.end(data);
		});
	// img 添加路由
	}else if(req.url == "/img/2.jpg"){
		fs.readFile("./public/img/2.jpg",function(err,data){
			res.end(data);
		});
	}else{
		res.end("对不起，没有该页面");
	}
		
});

server.listen(4000);