<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <style type="text/css">
        table,tr,td {
            border: 1px solid #f40;
        }

        td {
            width: 120px;
            height: 20px;
        }

        .red {
            background-color: red;
        }
    </style>
</head>
<body>
<table>

        <?php for($a=0;$a<20;$a++){?>

        <tr <?php if($a%2==1){echo "class='red'";} ?> >
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>

        <?php }?>


        <!--<tr  class="red">
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>-->

</table>
</body>
</html>