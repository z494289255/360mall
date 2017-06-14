<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017/6/9 0009
 * Time: 下午 7:19
 */

header('Content-Type:text/json;charset=utf-8');

$personArr = file_get_contents('../json/person.json');

echo $personArr;