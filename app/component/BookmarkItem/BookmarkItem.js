require('./BookmarkItem.css');

var React = require('react');
var BookmarkItem = React.createClass({
  render: function () {
    return (
      <li className="bookmarksbox-body-item"><a href="https://www.google.com/" target="_blank"><span>Google</span></a></li>
    )
  }
});

module.exports = BookmarkItem;