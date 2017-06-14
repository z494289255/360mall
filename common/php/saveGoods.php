<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017/6/12 0012
 * Time: 上午 10:02
 */

header('Content-type:text/json;charset=utf-8');

$goods = $_GET['obj'];


if(!file_exists('../json/goods.json')){
    //第一次保存
    //创建一个新数组
    $goodsArr = array();
}else{
    //从文件中读取数组内容
    $goodsArr =  json_decode( file_get_contents('../json/goods.json') );
}



array_push($goodsArr,$goods);


if(file_put_contents('../json/goods.json', json_encode($goodsArr))){

    echo json_encode(array('content'=>'保存成功'));
}else{
    echo json_encode(array('content'=>'数据保存失败'));
}