var React = require('react');

var Dbweth = React.createClass({
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
      console.error(url, status, err.toString());
    }.bind(this)
    });
  },

  render : function () {
    var data =this.state.temp;
    console.log(data);
    return(
    <div className = "row panel panel-default"style = {{marginTop:"20px"}} key = {this.props.city}>
    <div className = "col-sm-2">
      <h3>{data.name} </h3>
    </div>
    <div className = "col-sm-4">
        <p>{data.id}</p>
    </div>
    <div className = "col-sm-1">
    <button type="button" className="btn btn-warning btn-block">
      Refresh
    </button>
    </div>
    </div>
  );
}

});
module.exports = Dbweth;
