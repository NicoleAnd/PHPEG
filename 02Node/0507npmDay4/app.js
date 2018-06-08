// // 引用nzh模块
// // var Nzh = require("nzh");
// // 引用nzh模块，直接使用简体中文
// var nzhcn = require("nzh/cn");
// var http = require("http");

// var server = http.createServer(function(req,res){
// 	// 获取网址中http://127.0.0.1:4000/2345  的2345
// 	// console.log(req.url);
// 	var arr = req.url.match(/\/(.+)$/);
// 	var numstr = arr[1];
// 	var result = nzhcn.toMoney(numstr);
// 	res.end(result);
// });
// server.listen(4000);


// // 引用solarlunar模块
// var solarLunar = require("solarlunar");
// var http = require("http");

// var server = http.createServer(function(req,res){
// 	// 阴阳历转换
// 	var obj = solarLunar.solar2lunar(1999, 12, 12);
// 	res.end(obj.gzYear+"年、"+obj.gzMonth+"月、"+obj.gzDay+"日");
// });
// server.listen(4000);

// 引用node-xlsx
var xlsx = require("node-xlsx");
var fs = require("fs");

var data = [["姓名","QQ","专业"],["李莫愁","123456","唱歌"],["武松","8888888","武术"],["隔壁老王","12366666","管理学"]];
// Returns a buffer 二进制文件流
var buffer = xlsx.build([{name: "学生信息", data: data}]); 
// fs.writeFile("./学生信息.xlsx",buffer);
fs.writeFile('./学生信息.xlsx', buffer, function (err) {
   if (err) throw err;
   console.log('Saved successfully'); //文件被保存
});

