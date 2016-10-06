var $ = require('jquery');
var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');

var HomePage = require('./components/home-page.jsx');
var Pieces = require('./components/pieces.jsx');
var Parties = require('./components/parties.jsx');
var Places = require('./components/places.jsx');
var About = require('./components/about.jsx');

var Router = Backbone.Router.extend({
  routes: {
    '': 'homePage',
    'homepage': 'homePage',
    'pieces': 'pieces',
    'parties': 'parties',
    'places': 'places',
    'about': 'about'
  },
  homePage: function(){
    var self = this;
    ReactDOM.render(
      React.createElement(HomePage, {router:self}),
      document.getElementById('app')
    );
  },
  pieces: function(){
    var self = this;
    ReactDOM.render(
      React.createElement(Pieces, {router:self}),
      document.getElementById('app')
    );
  },
  parties: function(){
    var self = this;
    ReactDOM.render(
      React.createElement(Parties, {router:self}),
      document.getElementById('app')
    );
  },
  places: function(){
    var self = this;
    ReactDOM.render(
      React.createElement(Places, {router:self}),
      document.getElementById('app')
    );
  },
  about: function(){
    var self = this;
    ReactDOM.render(
      React.createElement(About, {router:self}),
      document.getElementById('app')
    );
  }
});


var router = new Router();
module.exports = router;
