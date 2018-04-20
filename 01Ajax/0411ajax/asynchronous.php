<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>

</head>
<body>

    <input type="button" id="btn" value="按我异步读取文件">
    <script type="text/javascript">
        //找到相关元素
        var btn = document.getElementById("btn");
        //事件监听
        btn.onclick = function(){

            var xhr = new XMLHttpRequest();

            xhr.onreadystatechange = function(){
                if (xhr.readyState == 4) {
                    console.log(xhr.responseText);
                }
            }
            // true异步 嘿嘿嘿嘿嘿嘿哈哈 false同步 哈哈嘿嘿...
            xhr.open("get","php/1.txt",true);
            // get => null
            xhr.send(null);

            // true 异步 写在后面的代码反而先输出
            // false 同步 写在前面的代码先输出
            console.log("嘿嘿");
            console.log("嘿嘿");
            console.log("嘿嘿");
        }
    </script>
</body>
</html>