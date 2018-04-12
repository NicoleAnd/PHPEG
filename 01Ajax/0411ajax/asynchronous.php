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

        //事件监听  A 秘书   B
        btn.onclick = function () {
            //发起ajax请求
            // 1 创建xhr对象
            var xhr = new XMLHttpRequest();

            // 2 指定接受回来的内容，怎么处理
            // onreadystatechange事件 在xhr对象就绪状态时候触发
            xhr.onreadystatechange = function () {
                // 关心状态为4的时候 4代表与服务器交互完成
                if(xhr.readyState == 4){
                    // 接收完文件要做的事情
                    console.log(xhr.responseText);
                }
            }

            // 3 创建一个请求
            // 第一个参数 请求类型get或post
            // 第二个参数 表示请求路径
            // 第三个参数 表示是否用异步机制
            // 同步
            //xhr.open("get","php/1.txt",true);
            // 异步
            xhr.open("get","php/1.txt",false);

            // 4 真正发送请求 null不发送数据
            xhr.send(null);

            // 写在后面的代码反而先输出
            console.log("嘿嘿");
            console.log("嘿嘿");
            console.log("嘿嘿");
        }
    </script>
</body>
</html>