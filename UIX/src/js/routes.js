var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var IndexRoute = Router.IndexRoute;

var Content = require("./components/NewContent");
var Details = require("./components/Details");
var Master = require('./pages/Master/Master');

module.exports = (
  <Route>
  <Route handler={Master}>
      <DefaultRoute handler={Content} name="HomePage">
      </DefaultRoute>
      <Route path = "/details/:city" handler = {Details}/>
  </Route>

  </Route>
);
