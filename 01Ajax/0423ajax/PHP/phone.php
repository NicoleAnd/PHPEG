<?php
    header("Content-Type:text/json;charset=gbk");
    $tel = $_GET["tel"];
    $res = file_get_contents("http://chongzhi.jd.com/json/order/search_searchPhone.action?mobile=".$tel."&_=1524490569765");
    //print_r($res);
    echo $res;

?>


