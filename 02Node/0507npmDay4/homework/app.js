var http = require("http");
var url = require("url");
// 读取文件
var fs = require("fs");

// 获取控制器文件三个 钱 日期 拼音
var showqian = require("./controllers/showqian.js");
var showriqi = require("./controllers/showriqi.js");
var showpinyin = require("./controllers/showpinyin.js");

var server = http.createServer(function(req,res){
	// 127.0.0.1:4000/  =>显示对老师说的话
	// 127.0.0.1：4000/qian/123?name=123 大写
	// 
	// 拿到用户访问地址的主干部分 url.parse()
	var pathname = url.parse(req.url,true).pathname;
	//console.log(url.parse(req.url,true,));
	// Url {
	// search: '?name=123',
	// query: { name: '123' }, ***
	// pathname: '/qian/123',  ***
	// path: '/qian/123?name=123',
	// href: '/qian/123?name=123' }
	// 
	// 127.0.0.1：4000/qian/123
	// pathname: '/qian/123',
	// path: '/qian/123',
	// href: '/qian/123' }
	if (pathname == "/") {
		res.setHeader("Content-Type","text/html;charset=UTF8");
		fs.readFile("./public/index.html",function(err,data){
			res.end(data);
		});
	}else if(/\/qian\/.+$/.test(pathname)){
		showqian(res,pathname);
	}else if(/\/riqi\/.+$/.test(pathname)){
		showriqi(res,pathname);
	}else if(/\/pinyin\/.+$/.test(pathname)){
		showpinyin(res,pathname);
	}else{
		res.statusCode = 404;
		res.setHeader("Content-Type","text/html;charset=UTF8");
		res.end("<h1>对不起没有这个页面</h1>")
	}
});

server.listen(4000);