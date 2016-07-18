var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var jwt = require('jsonwebtoken');
var app = express();
var path = require('path');
var config=require('./config/config.json');
var routing = require('./api/routing');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/",routing);
app.use('/', express.static(path.join(__dirname, '../UIX/dist/')));

mongoose.connect(config.DbUrl);
var db = mongoose.connection;
db.on('error', console.error.bind(console,'Connection error ...!!!!!'));
db.once('open',function(){
  console.log("Connected to MongoDB successfull");
});

var port = config.port;

app.listen(port, function(){
  console.log("Server started at port :"+port);
});
