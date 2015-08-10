var React = require('react');
var BookmarkItem = require('../BookmarkItem/BookmarkItem');
var AddUrlButton = require('../AddUrlButton/AddUrlButton');

var Bookmark = React.createClass({

  render: function () {
    var bookmarkItem = [];
    for (var i = 0; i < 200; i++) {
      bookmarkItem.push(<BookmarkItem key={i}/>)
    }
    return (
      <div className="bookmarksbox">
        <div className="bookmarksbox-header"><AddUrlButton/></div>
        <ul className="bookmarksbox-body">{bookmarkItem}</ul>
      </div>
    )
  }
});

module.exports = Bookmark;