var express = require("express");
var app = express();

// app.get("/",function(req,res){
// 	res.send("显示首页");
// });

app.get("/2/4",function(req,res){
	res.send("<h1>老班的儿子也敢查</h1>");
});

app.get("/:banji/:xuehao",function(req,res){
	var bj = req.params.banji;
	var xh = req.params.xuehao;
	res.send(bj+"班"+xh+"号");
});



app.listen(5888);