var React = require('React');
var List = require('./List');
var DbList = require('./DbList');
var Content = React.createClass({
  getInitialState : function() {
      return({
        dbCities : [],
        rest : ["Bangalore","Chennai","Mumbai","Delhi","London"]
      });
    },

  componentDidMount :function() {
      var url = "/getall";
      console.log(url);
      $.ajax({
      url: url,
      dataType: 'json',
      cache: false,
      success: function(data) {
        var db = [];
        var rst = this.state.rest;
        for(var i=0;i<data.length;i++){
          var city = data[i];
          db.push(city.name);
          var inx = rst.indexOf(city.name);
          if(inx !== undefined){
            rst.splice(inx,1);
          }
        }
        this.setState({"dbCities":db});
        this.setState({"rest":rst});

      }.bind(this),
      error: function(xhr, status, err) {
        console.error(url, status, err.toString());
      }.bind(this)
    });
  },
  onRefresh : function (city) {
    console.log("hey");
    var url ="http://api.openweathermap.org/data/2.5/weather?q="+city+"&APPID=05ca973f81bfcd400cc54c6398461827";
    $.ajax({
    url: url,
    dataType: 'json',
    cache: false,
    success: function(data) {
      var db = this.state.rest;
      var rst = this.state.rest;
      db.push(data.name)
      rst.splice(rst.indexOf(data.name),1);
      $.post({url:"/add",
              data:data,
              success : function () {
                this.setState({"dbCities":db});
                this.setState({"rest":rst});
              }.bind(this)
            });


    }.bind(this),
    error: function(xhr, status, err) {
      console.error(url, status, err.toString());
    }.bind(this)
  });

  },
  render : function() {
    return(
    <div className = "container">
        <DbList cities = {this.state.dbCities}/>
        <List cities = {this.state.rest} refresh = {this.onRefresh}/>
    </div>
  );
  }
});

module.exports = Content;
