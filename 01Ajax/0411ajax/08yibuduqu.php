<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	<h1 id="content">显示内容</h1>
	<input type="button" id="btn" name="btn" value="按我异步读取文件">

	<script type="text/javascript">
		// 找到相关元素
		var content = document.getElementById("content");
		var btn = document.getElementById("btn");

		// 事件监听
		btn.onclick = function(){
			// 发起ajax请求
			// 1 创建xhr对象
			var xhr = new XMLHttpRequest();

			// 2 指定接收回来的内容，怎么处理
			// onreadystatechange事件 在xhr对象就绪状态时候
			xhr.onreadystatechange = function(){
				// 关心状态为4的时候 4代表与服务器交互完成
				if (xhr.readyState == 4) {
					// 接收完文件要做的事情
					content.innerHTML = xhr.responseText;
				}
			}

			// 3 创建一个请求 第一个请求类型 get或post 
			// 				 第二个参数 表示请求路径
			// 				 第三个参数 表示是否用异步机制
			xhr.open("get","php/1.txt",true);

			// 4 真正的发送请求
			xhr.send(null);
		}
	</script>
</body>
</html>