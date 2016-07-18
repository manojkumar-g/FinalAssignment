var mongoose = require('mongoose');
var WeatherScheama = new mongoose.Schema({
  "coord":{"lon":String,"lat":String},
  "weather":[
    {
      "id":String,
      "main":String,
      "description":String,
      "icon":String
    }],
  "base":String,
  "main":{
    "temp":String,
    "pressure":String,
    "humidity":String,
    "temp_min":String,
    "temp_max":String,
    "sea_level":String,
    "grnd_level":String
    },
  "wind":{
    "speed":String,
    "deg":String
    },
  "clouds":{"all":String},
  "dt":String,
  "sys":{
    "message":String,
    "country":String,
    "sunrise":String,
    "sunset":String},
  "id":String,
  "name":String,
  "cod":String
});

var weathers = mongoose.model("wedfdfjhjkjhhjhjkjhs",WeatherScheama);
module.exports = weathers;
