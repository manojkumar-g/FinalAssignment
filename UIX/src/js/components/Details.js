var React = require('React');
var Details = React.createClass({
  getInitialState : function() {
      return({
        temp :{}
      });
    },

  render : function() {
    return(
  <div>{this.props.params.city}</div>
  );
  }
});
module.exports = Details;
