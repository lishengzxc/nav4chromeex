require('./Bookmark.css');

var React = require('react/addons');
var BookmarkItem = require('../BookmarkItem/BookmarkItem');

var Bookmark = React.createClass({
  mixins: [React.addons.LinkedStateMixin],
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

  addUrl: function () {
    var newUrl = {
      name: this.state.name,
      url: this.state.url
    };

    this.props.onAddUrl(newUrl);
    this.state.name = '';
    this.state.url = ''
  },

  render: function () {
    var bookmarkList = this.props.bookmarkList;
    return (
      <div className="bookmarksbox">
        <div className="bookmarksbox-header">
          <button className="addurlbutton" onClick={this.showAddUrlBox}><i className="fa fa-plus"></i></button>
        </div>
        <div className="addurlbox" ref='addurlbox' style={this.state.s}>
          <form ref='addform'>
            <input placeholder='name' valueLink={this.linkState('name')}/>
            <input placeholder="url" valueLink={this.linkState('url')}/>
          </form>
          <button onClick={this.addUrl}>确定</button>
          <button onClick={this.hideAddUrlBox}>取消</button>
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