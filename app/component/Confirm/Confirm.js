// 专属BookmarkItem
require('./Confirm.css');
var React = require('react');

var Confirm = React.createClass({
  render: function () {
    return (
      <div className="confirm">
        <span>Delete it？</span>
        <button className=""><i className="fa fa-check"></i></button>
        <button><i className="fa fa-close"></i></button>
      </div>
    );
  }
});

module.exports = Confirm;