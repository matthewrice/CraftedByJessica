var React = require('react');
var NavBar = require('./nav-bar.jsx');


var HomePage = React.createClass({
  render: function(){
    return (
      <div>
        <NavBar />
        <div className="col-xs-10">
          <div className="logoContainer col-md-12">
            <img className="logo" src="./images/logo.png" />
          </div>
          <div className="homePageMainImage col-md-12"></div>
        </div>
      </div>
    );
  }
});

module.exports = HomePage;
