var express = require('express');
var mainctrl = require("./controllers/mainctrl.js");


var app = express();
app.use(express.static('www'));
//开启静态资源路由
app.set("view engine" , "ejs");
//路由
app.get('/', mainctrl.indexData);
app.get('/infobox',mainctrl.infobox)

var server = app.listen(3000, function () {
  console.log("hello");
});

