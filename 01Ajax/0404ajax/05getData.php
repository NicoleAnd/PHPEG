<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	<?php
		//获取用户GET请求的数据
		$xuehao = $_GET["xuehao"];
		$name = $_GET["name"];
		$tel = $_GET["tel"];
		$qq = $_GET["qq"];

		//echo $xuehao.$name.$tel.$qq;
		//创建连接
		$con = mysql_connect("localhost","root","root");
		mysql_select_db("study01",$con);
		mysql_query("SET NAMES UTF8");
		$result = mysql_query("INSERT INTO student(xuehao,name,tel,qq) VALUES ('{$xuehao}','{$name}','{$tel}','{$qq}')");
		echo $result;
		if ($result == 1) {
			echo "数据插入成功";
		}else{
			echo "数据错误，请联系管理员";
		}
		mysql_close();
	?>
</body>
</html>