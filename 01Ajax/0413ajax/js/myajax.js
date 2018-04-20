(function(){
	var myajax = {};
	// 作者、版本等信息
	myajax.author = "阿龙老师";
	myajax.version = "1.0.0";

	// 这个对象有个get属性 是函数
	myajax.get = function(URL,queryJSON){
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
					callback(null,xhr.responseText);
				}else{
					callback(new Error("没有找到请求的文件"),undefined)l
				}
			}
		}
	}
})()