(function(){
	var myajax = window.myajax = {};
	// 作者、版本等信息
	myajax.author = "阿龙老师";
	myajax.version = "1.0.0";

	// 这个对象有个get属性 是函数 {"name":"along","age":18}
	/**
     *  get方法
     *  URL：请求的URL
     *  queryJSON：json格式数据
     *  callback：请求成功后的回调
     */
	myajax.get = function(URL,queryJSON,callback){
		// 1 创建对象
		var xhr;
		if (window.XMLHttpRequest) {
			xhr = new XMLHttpRequest();
		}else{
			xhr = new ActionXObject("Microsoft.XMLHTTP");
		}

		// 2 绑定事件
		xhr.onreadystatechange = function(){
			if (xhr.readyState == 4) {
				if (xhr.status>=200&&xhr.status<300||xhr.status==304) {
					// 没错返回null
					callback(null,xhr.responseText);
				}else{
					callback(new Error("没有找到请求的文件"),undefined);
				}
			}
		}
	
		// 拼接字符串
		// 把用户传的json格式转成k=v&k=v...
		var querystring = myajax.queryjson2quertstring(queryJSON);
		// 配置请求信息
		xhr.open("get",URL+"?"+querystring,true);
		xhr.send(null);
	};

		// 内部函数 把json转成查询字符串
		// 输入的json格式
		// 返回的是k=v&k=v
		myajax.queryjson2quertstring = function(json){
			// {"name":"along","age":"18"}
			// 结果数组
			var arr = [];
			for(var k in json){
				arr.push((k+"="+encodeURIComponent(json[k])));
			}
			return arr.join("&");
		};
	
})()