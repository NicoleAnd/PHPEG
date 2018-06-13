var express = require("express");
var app = express();

var count= 0; //计数器

app.get("/chaxun/*",function(req,res,next){
	count++;// 拦截
	next();// 放行
});
app.get("/chaxun/xuesheng/:banji/:xuehao",function(req,res){
	var bj = req.params.banji;
	var xh = req.params.xuehao;
	res.send(bj+"班级"+xh+"学号"+"共查询了"+count+"次");
});

app.get("/chaxun/jiaoshi/:gonghao",function(req,res){
	var gh = req.params.gonghao;
	res.send("工号为"+gh+"共查询了"+count+"次");
});

app.listen(5888);