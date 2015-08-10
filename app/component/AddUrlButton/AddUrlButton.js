require('./AddUrlBotton.css');

var React = require('react');
var AddUrlButton = React.createClass({
  showAddUrlBox: function () {

  },
  render: function () {
    return (
      <button className="addurlbutton" onClick={this.showAddUrlBox}><i className="fa fa-plus"></i></button>
    )
  }
});

module.exports = AddUrlButton;