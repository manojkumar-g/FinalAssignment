var weathers = require('../modals/wether.js');
var app = require('express')();
app.post("/add",function(req,res) {
    console.log(req.body);
    var weatherData = new weathers(req.body);
    weatherData.save(function (err,data) {
      if (err) {
        console.error(err);
        res.response(500).send("Error while saving");
      }
      res.send("success");
    });
});

app.get("/getall",function (req,res) {
      weathers.find({},function (err,data) {
        if (err) {
          console.error(err);
          res.response(500).send("Error while retreiveing all data");
        }
        else if(!data){
          res.json({"Error":"No records found"});
        }
        else{
          res.json(data);
        }
      });
    });
app.get("/getcity/:name",function (req,res) {
      weathers.find({name:req.params.name},function (err,data) {
        if (err) {
          console.error(err);
          res.response(500).json({"Error":" while retreiveing all data"});
        }
        else if(!data){
          res.json({"Error":"No records found"});
        }
        else{
          res.json(data);
        }
      });
    });
app.get("/getcityb",function (req,res) {
          weathers.find({name:"Bangalore"},function (err,data) {
            if (err) {
              console.error(err);
              res.response(500).json({"Error":" while retreiveing all data"});
            }
            else if(!data){
              res.json({"Error":"No records found"});
            }
            else{

              res.json({"data":data[0].main.temp});
            }
          });
        });



module.exports = app;
