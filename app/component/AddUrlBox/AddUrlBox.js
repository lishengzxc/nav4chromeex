require('./AddUrlBox.css');

var React = require('react');

var AddUrlBox = React.createClass({
  render: function () {
    var s = {
      display: 'none'
    };

    return (
      <div className="addurlbox" style={s}>
      </div>
    )
  }
});

module.exports = AddUrlBox;
