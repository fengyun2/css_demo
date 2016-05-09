/*
* @Author: fengyun2
* @Date:   2016-05-09 21:18:43
* @Last Modified by:   fengyun2
* @Last Modified time: 2016-05-09 21:36:25
*/

'use strict';

var express = require('express');

var app = express();

//设置跨域访问
app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By",' 3.2.1')
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});

app.get('/user/1', function(req, res) {
  var json = '[{"age" : 24, "sex" : "boy", "name" : "huangxueming"},{"age" : 26, "sex" : "boy", "name" : "huangxueming2"}]';
  res.send(json);
});

app.get('/user/2', function(req, res) {
  var json = '[{"age" : 65, "sex" : "boy2", "name" : "huangxueming2"},{"age" : 26, "sex" : "boy", "name" : "huangxueming2"}]';
  res.send(json);
});

app.get('/user/3', function(req, res) {
  var json = '[{"age" : 244, "sex" : "boy4", "name" : "huangxueming4"},{"age" : 264, "sex" : "boy4", "name" : "huangxueming4"}]';
  res.send(json);
});

app.listen(3000, function (e) {
  console.log('listening at port 3000');
});

