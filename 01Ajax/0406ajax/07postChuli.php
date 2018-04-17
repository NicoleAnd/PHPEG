<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	<?php
		$name = $_POST["name"];
		$tel = $_POST["tel"];
		$qq = $_POST["qq"];

		echo $name.$tel.$qq;
	?>
</body>
</html>