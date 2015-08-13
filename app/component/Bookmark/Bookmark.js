require('./Bookmark.css');

var React = require('react/addons');
var BookmarkItem = require('../BookmarkItem/BookmarkItem');

var Bookmark = React.createClass({
  mixins: [React.addons.LinkedStateMixin],
  getInitialState: function () {
    return {

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

  addUrl: function (event) {
    event.preventDefault();
    var newUrl = {
      name: this.state.name,
      url: this.state.url
    };

    this.props.onAddUrl(newUrl);
    this.hideAddUrlBox();
    this.state.name = '';
    this.state.url = ''
  },

  render: function () {
    var bookmarkList = this.props.bookmarkList;
    var that = this;
    return (
      <div className="bookmarksbox">
        <div className="bookmarksbox-header">
          <button className="addurlbutton" onClick={this.showAddUrlBox}><i className="fa fa-plus"></i></button>
        </div>
        <div className="addurlbox" ref='addurlbox' onSubmit={this.addUrl}>
          <form ref='addform'>
            <input type="text" placeholder='name' valueLink={this.linkState('name')}/>
            <input type="url" placeholder="url" valueLink={this.linkState('url')}/>
            <button type="submit"><i className="fa fa-check"></i></button>
            <button type="reset" onClick={this.hideAddUrlBox}><i className="fa fa-close"></i></button>
          </form>
        </div>
        <ul className="bookmarksbox-body">
          { bookmarkList.map(function (result) {
            return <BookmarkItem key={result.key} url={result.url} name={result.name} id={result.key} onDelUrl={that.props.onDelUrl}/>;
          }) }
        </ul>
      </div>
    )
  }
});

module.exports = Bookmark;