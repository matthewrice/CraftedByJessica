var React = require('react');


var Footer = React.createClass({
  render: function(){
    return (
      <div className="websiteFooter">

        <span className="phoneNumberFooter">
          <a href="tel:864-436-6130">(864) 436 - 6130</a>
        </span>

        <span className="emailFooter">
          <a href="mailto:craftedbyjessicaparker@gmail.com">craftedbyjessicaparker@gmail.com</a>
        </span>

        <span className="copyrightIcon">
          <i className="fa fa-copyright" aria-hidden="true"></i>
        </span>

        <span className="copyrightFooter">Crafted by Jessica , LLC</span>

      </div>
    );
  }
});

module.exports = Footer;
