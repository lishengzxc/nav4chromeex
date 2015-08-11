require('./AddUrlBotton.css');

var React = require('react');
var AddUrlButton = React.createClass({

  render: function () {
    return (
      <button className="addurlbutton"><i className="fa fa-plus"></i></button>
    )
  }
});

module.exports = AddUrlButton;