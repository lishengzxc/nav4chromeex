var React = require('react');
var BookmarkItem = require('../BookmarkItem/BookmarkItem');

var Bookmark = React.createClass({

  render: function () {
    var bookmarkList = this.props.bookmarkList;
    return (
      <div className="bookmarksbox">
        <div className="bookmarksbox-header"></div>
        <ul className="bookmarksbox-body">
          { bookmarkList.map(function (result) {
            return <BookmarkItem url={result.url} name={result.name} />;
          }) }
        </ul>
      </div>
    )
  }
});

module.exports = Bookmark;