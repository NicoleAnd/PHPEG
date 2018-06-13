var express = require("express");
var app = express();	// 函数调用创建一个app对象
/**
 	作业题
 	/					显示首页
	/qian/123			显示123
	/riqi/2010/10/2		2010 10 2
	/pinyin/文字			文字
 */
// /					显示首页
app.get('/',function(req,res){
	res.send('显示首页');
});

// /qian/123			显示123
app.get('/qian/:num',function(req,res){
	res.send("你希望转的钱是"+req.params.num);
});

// /riqi/2010/10/2		2010 10 2
app.get('/riqi/:year/:month/:day',function(req,res){
	res.send("先生，您想转换日期是："+
		req.params.year+"年"+
		req.params.month+"月"+
		req.params.day+"日"
		);
});

// /pinyin/文字			文字
app.get('/pinyin/:word',function(req,res){
	res.send("你希望转拼音的是"+req.params.word);
});





app.listen(5888);