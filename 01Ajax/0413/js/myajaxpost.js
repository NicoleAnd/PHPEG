(function() {
	var myajax = window.myajax = {};  
	// 作者，版本等信息    
	myajax.author = "阿龙";
	myajax.version = "1.0.0";
    
	myajax.post = function(URL,queryJSON,callback) {
	 // 1 创建对象
		var xhr;
		if(window.XMLHttpRequest) {
			xhr = new XMLHttpRequest();
		} else {
			xhr = new ActiveXObject("Microsoft.XMLHTTP");
		} 
		// 2 
		xhr.onreadystatechange = function() {
			 if(xhr.readyState == 4) {
	         if(xhr.status>=200&&xhr.status<300 || xhr.status == 304) {
	         	   callback(null,xhr.responseText);
	         } else {
	         	   callback(new Error("没有找到请求的文件"),undefined);
	         }

			 }
			 
	} 

	//  把用户传的json格式转成k=v&k=v...
	var querystring = myajax.queryjson2quertstring(queryJSON);
		//  配置请求信息
		xhr.open("post",URL,true);
		// 设置
		xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		// 发送
		xhr.send(querystring);
	};     	

	// 内部函数 把json转成查询字符串
	// 输入的json格式 
	// 返回的是k=v&k=v
	myajax.queryjson2quertstring = function(json) {
	    //{"name":"along","age":18}
	    var arr = [];
	    for(var k in json) {
	    	arr.push((k+"="+encodeURIComponent(json[k])));
	    }
	    return arr.join("&");
	};	  	
	
})()