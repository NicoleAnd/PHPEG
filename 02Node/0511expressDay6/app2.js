var express = require("express");
var app = express();

// 将public文件夹静态化 自动拥有路由 public地址可省略 也连接了index.html
app.use("/public",express.static("public")); // 将public文件夹静态化 

app.get("/api",function(req,res){
	res.send("显示get");
});
app.post("/",function(req,res){
	res.send("显示post");
});

app.delete("/:id",function(req,res){
	console.log("你希望删除的id为"+req.params.id);
});

app.listen(5888);