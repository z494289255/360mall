<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017/6/12 0012
 * Time: 上午 11:28
 */

header('Content-Type:text/json;charset=utf-8');

$goodsArr = file_get_contents('../json/goods.json');

echo $goodsArr;