<?php
	// mysqli 实现
    // 得到表单的标题和内容部分
	$biaoti = $_POST["biaoti"];
	$content = $_POST["content"];

    // 数据库 localhost,用户名,密码,数据库
    $con=mysqli_connect("localhost","root","root","alongxinwen");
    if (mysqli_connect_errno($con)) {
        echo "连接 MySQL 失败: ".mysqli_connect_error();
    }

    // 修改数据库连接字符集为 utf8
    mysqli_set_charset($con,"utf8");

    // 执行插入
    $res = mysqli_query($con,"INSERT INTO xinwen (biaoti,neirong) VALUES ('${biaoti}','${content}')");
    if ($res != false) {
        echo "插入成功";
    } else {
        echo "插入失败";
    }

    mysqli_close($con);
?>