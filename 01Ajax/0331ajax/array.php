<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>

    <?php
        $a = array("东","西","南","北");

        //输出数组第一个值
        echo $a[0];
        echo "<br>";

        //输出打印数组的全貌
        print_r($a);
        echo "<br>";

        //获取数组的长度
        echo count($a);
        echo "<br>";

        //循环遍历数组的值 变量加$i $a[$i]
        for($i=0;$i<count($a);$i++){
            echo $a[$i];
        }


    ?>
    <!--  ul li 遍历输出数组  -->
    <ul>
        <?php
        for($i=0;$i<count($a);$i++){
            echo "<li>".$a[$i]."</li>";
        }
        ?>
    </ul>

    <!--  或者  -->
    <ul>
        <?php for($i=0;$i<count($a);$i++) {?>
            <li><?php echo $a[$i]; ?></li>
        <?php } ?>
    </ul>

</body>
</html>