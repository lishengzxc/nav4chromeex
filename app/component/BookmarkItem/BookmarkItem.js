require('./BookmarkItem.css');

var React = require('react');
var BookmarkItem = React.createClass({
  render: function () {
    return (
      <li className="bookmarksbox-body-item">
        <a href={this.props.url} target="_blank">
          <span>{this.props.name}</span>
        </a>
      </li>
    )
  }
});

module.exports = BookmarkItem;