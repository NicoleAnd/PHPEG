<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>

	<?php
		$username = $_GET["username"];
		$password = $_GET["psw"];
		$qq = $_GET["qq"];
		echo $username.";".$password.";".$qq;
		
	?>
</body>
</html>