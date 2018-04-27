<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	<?php
		// 获取用户GET请求的数据
		$xuehao = $_GET["xuehao"];
		$name = $_GET["name"];
		$tel = $_GET["tel"];
		$qq = $_GET["qq"];

		// echo $xuehao.$name.$tel.$qq;
		// 创建一个连接
		$con = mysql_connect("localhost","root","root");
		// 选择一个数据库
		mysql_select_db("along",$con);
		// 设置字符集
		mysql_query("SET NAMES UTF8");
		// 执行SQL语句
		
		$result = mysql_query("INSERT INTO student(xuehao,name,tel,qq) VALUES ('{$xuehao}','{$name}','{$tel}','{$qq}') ");

		// 关闭数据库
		mysql_close();
	?>

</body>
</html>