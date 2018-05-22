<?php 
    // mysql实现
    // 得到表单的标题和内容部分
    $biaoti = $_POST["biaoti"];
    $content = $_POST["content"];

    // 连接数据库
    $con = mysql_connect("localhost","root","root");

    // 选择数据库
    mysql_select_db("alongxinwen",$con);

    // 中文
    mysql_query("SET NAMES UTF8");

    // 插入数据库
    $sql = "INSERT INTO xinwen(biaoti,neirong) VALUES('${biaoti}','${content}')";

    //执行sql语句
    $res = mysql_query($sql);
    
 ?>

 <!DOCTYPE html>
 <html lang="en">
 <head>
    <meta charset="UTF-8">
    <title>Document</title>
 </head>
 <body>
    <h1>提交成功</h1>
 </body>
 </html>