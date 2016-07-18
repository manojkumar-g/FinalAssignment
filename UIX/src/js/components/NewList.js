var React = require('react');
var Newcity = require('./Newcity');

var NewList = React.createClass({
  render:function() {
      return(
        <span>
        {this.props.cities.map(
          function (city) {
            return (<Newcity city = {city}/>);
          }
        )}
        </span>
      );
    }
});

module.exports = NewList;
