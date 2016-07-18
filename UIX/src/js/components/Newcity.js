var React = require('react');
var Newcity = React.createClass({
  getInitialState : function() {
      return({
        temp :{}
      });
    },
  componentWillMount :function() {
    var city = this.props.city;
    var url="getcity/"+city;
    console.log(url);
    $.ajax({
    url: url,
    dataType: 'json',
    cache: false,
    success: function(data) {
      this.setState({"temp":data[0]});
    }.bind(this),
    error: function(xhr, status, err) {
      this.setState({"temp":{"Error":"sorry"}});
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
      this.setState({temp:data})
      $.post("/add",data);
    }.bind(this),
    error: function(xhr, status, err) {
      console.error(url, status, err.toString());
    }.bind(this)
  });

  },
  render:function() {
    var temp1 = this.state.temp;
    if(temp1!=undefined){
      var main1 = this.state.temp;
      console.log(temp1);
      console.log(main1);

      return(
      <div className = "row panel panel-default"style = {{marginTop:"20px"}} key = {this.props.city}>
      <div className = "col-sm-2">
        <h3>{temp1.name} </h3>
      </div>
      <div className = "col-sm-4">
          <p>Hi</p>
      </div>
      <div className = "col-sm-1">
      <button type="button" className="btn btn-warning btn-block">
        Refresh
      </button>
      </div>
      </div>
    );
    }
    else{
      return(
        <div className = "row panel panel-default"style = {{marginTop:"20px"}} key = {this.props.city}>
        <div className = "col-sm-2">
          <h3>{this.props.city}</h3>
        </div>
        <div className = "col-sm-4">
        </div>
        <div className = "col-sm-1">
        <button type="button" className="btn btn-warning btn-block" onClick = {(event) => {this.onRefresh(this.props.city);}}>
          Refresh
        </button>
        </div>
        </div>
      );
    }

  }

});
module.exports = Newcity;
