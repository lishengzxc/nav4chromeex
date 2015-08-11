require('./Bookmark.css');

var React = require('react');
var BookmarkItem = require('../BookmarkItem/BookmarkItem');

var Bookmark = React.createClass({
  getInitialState: function () {
    return {
      s: {
        height: '35px',
        borderBottom: '1px solid #ebebeb'
      }
    }
  },

  showAddUrlBox: function () {
    this.refs.addurlbox.getDOMNode().style.height = '35px';
    this.refs.addurlbox.getDOMNode().style.borderBottom = '1px solid #ebebeb';
  },

  hideAddUrlBox: function () {
    this.refs.addurlbox.getDOMNode().style.height = '0';
    this.refs.addurlbox.getDOMNode().style.borderBottom = 'none';
  },

  render: function () {
    var bookmarkList = this.props.bookmarkList;
    return (
      <div className="bookmarksbox">
        <div className="bookmarksbox-header">
          <button className="addurlbutton" onClick={this.showAddUrlBox}><i className="fa fa-plus"></i></button>
        </div>
        <div className="addurlbox" ref='addurlbox' style={this.state.s}>
          <input placeholder='name'/><input placeholder="url"/><button>确定</button><button onClick={this.hideAddUrlBox}>取消</button>
        </div>
        <ul className="bookmarksbox-body">
          { bookmarkList.map(function (result) {
            return <BookmarkItem key={result.name} url={result.url} name={result.name} />;
          }) }
        </ul>
      </div>
    )
  }
});

module.exports = Bookmark;