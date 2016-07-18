var React = require('React');
var NewList = require('./NewList');
var NewContent = React.createClass({
  getInitialState : function() {
      return({
        cities : ["Bangalore","Chennai","Mumbai","Delhi","London"]
      });
    },
  render : function() {
    return(
    <div className = "container">
        <NewList cities = {this.state.cities}/>
    </div>
  );
  }
});
module.exports = NewContent;
