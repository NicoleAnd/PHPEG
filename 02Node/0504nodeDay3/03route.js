var http = require("http");
var fs = require("fs");
var server = http.createServer(function(req,res){
	// 请求地址不同，内容相同，加入判断
	// 请求地址
	console.log(req.url);
	if (req.url == "/mingxing.html") {
		fs.readFile("./public/mingxing.html",function(err,data){
			res.end(data);
		});
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
	}else{
		res.end("对不起，没有该页面");
	}
		
});

server.listen(4000);