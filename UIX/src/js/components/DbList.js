var React = require('react');
var Dbweth = require('./Dbweth');

var DbList = React.createClass({
  render:function() {
      return(
        <span>
        {this.props.cities.map(
          function (city) {
            return (<Dbweth city = {city}/>);
          }
        )}
        </span>
      );
    }
});

module.exports = DbList;
