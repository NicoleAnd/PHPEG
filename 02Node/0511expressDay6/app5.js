var express = require("express");
var app = express();

app.get("/",function(req,res){
	// res.json({
	// 	"a":10,
	// 	"b":20,
	// 	"c":["a","b","c",{"x":100}]
	// });
	
	// res.jsonp({
	// 	"a":10,
	// 	"b":20,
	// 	"c":["a","b","c",{"x":100}]
	// });

	//console.log(__dirname);
	//res.sendFile(__dirname+"/public/index.html");

	res.redirect("http://www.qq.com");
	
});



app.listen(5888);


// 
// /**/ typeof hehe === 'function' && hehe({"a":10,"b":20,"c":["a","b","c",{"x":100}]});
// jsonp 原理：服务器发送数据，通过函数调用传到客户端