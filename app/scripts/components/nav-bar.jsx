var React = require('react');

var NavBar = React.createClass({
  render: function(){
    return (
      <div className="navBarComponent">
        <div className="companyName col-md-6">Crafted by Jessica</div>
        <div className="col-xs-6">
          <a className="socialIconPhone" href="tel:864-436-6130">
            <i className="fa fa-mobile" aria-hidden="true"></i>
          </a>
          <a className="socialIconEnvelope" href="mailto:craftedbyjessicaparker@gmail.com">
            <i className="fa fa-envelope" aria-hidden="true"></i>
          </a>
          <a className="socialIconLinkedIn" href="#" target="_blank">
            <i className="fa fa-linkedin" aria-hidden="true"></i>
          </a>
          <a className="socialIconInstagram" href="#" target="_blank">
            <i className="fa fa-instagram" aria-hidden="true"></i>
          </a>
          <a className="socialIconPinterest" href="#" target="_blank">
            <i className="fa fa-pinterest-p" aria-hidden="true"></i>
          </a>
          <a className="socialIconTwitter" href="#" target="_blank">
            <i className="fa fa-twitter" aria-hidden="true"></i>
          </a>
          <a className="socialIconFacebook" href="https://www.facebook.com/Craftedbyjessica" target="_blank">
            <i className="fa fa-facebook" aria-hidden="true"></i>
          </a>
        </div>
        <div className="companyTagLine col-md-12">Crafting unique environments for memorable moments</div>
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
