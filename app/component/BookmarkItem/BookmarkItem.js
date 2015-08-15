require('./BookmarkItem.css');

var React = require('react');
var Confirm = require('../Confirm/Confirm');

var BookmarkItem = React.createClass({
  del: function () {
    this.props.onDelUrl(this.props.id);
  },



  render: function () {
    return (
      <li className="bookmarksbox-body-item">
        <a href={this.props.url} target="_blank">
          <span>{this.props.name}</span>
        </a>
        <i className="fa fa-close del" onClick={this.del}></i>
        <Confirm/>
      </li>
    )
  }
});


module.exports = BookmarkItem;