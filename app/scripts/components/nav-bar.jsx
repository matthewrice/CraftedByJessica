var React = require('react');

var NavBar = React.createClass({
  render: function(){
    return (
      <div className="navBarComponent">
        <div className="companyName col-md-12">Crafted by Jessica</div>
        <ul className="navBarList col-xs-2">
          <li className="navBarListName">
            <a className="navBarListLink" href="#homepage">Home</a>
          </li>
          <li className="navBarListName">
            <a className="navBarListLink" href="#pieces">Pieces</a>
          </li>
          <li className="navBarListName">
            <a className="navBarListLink" href="#places">Places</a>
          </li>
          <li className="navBarListName">
            <a className="navBarListLink" href="#parties">Parties</a>
          </li>
          <li className="navBarListName">
            <a className="navBarListLink" href="#about">About</a>
          </li>
        </ul>
      </div>
    );
  }
});

module.exports = NavBar;
