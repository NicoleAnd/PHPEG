<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	<?php
		$timu1 = $_GET['timu1'];
		$timu2 = $_GET['timu2'];
		$timu3 = $_GET['timu3'];
		echo $timu1.$timu2.$timu3;

		$con = mysql_connect("localhost","root","root");
		mysql_select_db("study02",$con);
		mysql_query("SET NAMES UTF8");
		$result = mysql_query("INSERT INTO xuexizhuangtai(timu1,timu2,timu3) VALUES ('{$timu1}','{$timu2}','{$timu3}')");
		if ($result == 1) {
			echo "数据插入成功";
		}else{
			echo "数据插入失败，请联系管理员";
		}
		mysql_close();
	?>
</body>
</html>