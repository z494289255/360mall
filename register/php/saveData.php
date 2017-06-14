<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017/6/9 0009
 * Time: 下午 7:19
 */
header('Content-type:text/json;charset=utf-8');

$username = $_GET['username'];
$password = $_GET['password'];

//第一次保存数据的时候，应该先判断这个文件是否存在
//file_exists判断文件是否存在，存在就返回true
if(!file_exists('../json/person.json')){
    //第一次保存
    //创建一个新数组
    $personArr = array();
}else{
    //从文件中读取数组内容
    $personArr =  json_decode( file_get_contents('../json/person.json') );
}
class Person{
    public $username;
    public $password;
}

$person = new  Person();
$person->username = $username;
$person->password = $password;



$exist = false;
//判断数组中是否能存在用户名
foreach($personArr as $item){
    if($item->username == $username){
        $exist = true;
        //程序到此结束
        die( json_encode(array('content'=>'用户名存在')) );

    }
}

//说明不存在
if($exist == false){
    //加入到数组
    array_push($personArr,$person);
}

//保存到本地
if(file_put_contents('../json/person.json', json_encode($personArr))){

    echo json_encode(array('content'=>'注册成功'));
}else{
    echo json_encode(array('content'=>'数据保存失败'));
}