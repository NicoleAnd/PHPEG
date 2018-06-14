var express = require("express");
var app = express();
var url = require("url");

// 把public文件夹静态化出来  好处是自动拥有路由
app.use(express.static("public")); //拦截后面

app.get("/api",function(req,res){
	// console.log(req.url);
	// console.log(url.parse(req.url,true).query);
	var query = url.parse(req.url,true).query;
	console.log("The server receives the data submitted by the client:",query);
});





app.listen(5888);
