var React = require('react');

var List = React.createClass({
  city : function (city,ref) {
    return(
      <div className = "row panel panel-default"style = {{marginTop:"20px"}} key = {city}>
      <div className = "col-sm-2">
        <h3>{city}</h3>
      </div>
      <div className = "col-sm-4">
      </div>
      <div className = "col-sm-1">
      <button type="button" className="btn btn-warning btn-block" onClick = {(event) => {ref(city);}}>
        Refresh
      </button>
      </div>
      </div>
    );
  },
  render:function() {
      return(
        <span>
        {this.props.cities.map(
          (city) =>{
            return this.city(city,this.props.refresh);
          }
        )}
        </span>

      );
    }
});
module.exports = List;
