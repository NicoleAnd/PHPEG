<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>数据库读取php</title>
</head>
<body>
	<?php
		// 连接数据库
		$con = mysql_connect("localhost","root","root");

		// 选择连接的数据库
		mysql_select_db("study01",$con);

		// 更改数据操作的字符集
		mysql_query("SET NAMES UTF-8");

		// 	执行SQL语句 把检索的结果用$result保存
		$result = mysql_query("SELECT * FROM student");

		//  echo $result;
		//  循环读取数据
		while ($row = mysql_fetch_array($result)) {
			 // echo print_r($row);
			 echo $row['xuehao'];
			 echo $row['name'];
			 echo $row['tel'];
			 echo $row['qq'];
			 echo "<br />";
		}

		// 关闭数据库
		mysql_close($con);

	?>
</body>
</html>