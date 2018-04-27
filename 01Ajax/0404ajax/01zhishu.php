<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>


    <?php
        //2-100所有质数
        for($i=2;$i<=100;$i++){
            $count = 0; //记录每个数的约数个数
            for($j=1;$j<=$i;$j++){
                if ($i%$j==0){
                    $count++;
                }
            }
            if ($count == 2){
                echo $i;
                echo "<br/>";
            }
        }

    ?>
</body>
</html>