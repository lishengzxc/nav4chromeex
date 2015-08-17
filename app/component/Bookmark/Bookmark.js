require('./Bookmark.css');

var React = require('react/addons');
var BookmarkItem = require('../BookmarkItem/BookmarkItem');
var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

var Bookmark = React.createClass({
  mixins: [React.addons.LinkedStateMixin],
  getInitialState: function () {
    return {
      addUrlBoxDisplay: false
    }
  },

  toggleAddUrlBox: function () {
    if (!this.state.addUrlBoxDisplay) this.refs['name'].getDOMNode().focus();
    this.setState({
      addUrlBoxDisplay: !this.state.addUrlBoxDisplay
    })
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

    var classSet = React.addons.classSet;
    var addUrlBoxClasses = classSet({
      'addurlbox': true,
      'hide': !this.state.addUrlBoxDisplay,
      'show': this.state.addUrlBoxDisplay
    });

    return (
      <div className="bookmarksbox">
        <div className="bookmarksbox-header">
          <button className="addurlbutton" onClick={this.toggleAddUrlBox}>
            <i className="fa fa-plus"></i>
          </button>
        </div>
        <div className={addUrlBoxClasses} ref='addurlbox' onSubmit={this.addUrl}>
          <form ref='addform'>
            <input type="text" ref="name" placeholder='NAME' valueLink={this.linkState('name')} required/>
            <input type="url" placeholder="URL" valueLink={this.linkState('url')} required/>
            <button type="submit">
              <i className="fa fa-check"></i>
            </button>
            <button type="reset" onClick={this.hideAddUrlBox}>
              <i className="fa fa-close"></i>
            </button>
          </form>
        </div>
        <ul className="bookmarksbox-body">
          <ReactCSSTransitionGroup transitionName="item-animation">
          { bookmarkList.map(function (result) {
            return <BookmarkItem key={result.key} url={result.url} name={result.name} id={result.key} onDelUrl={that.props.onDelUrl}/>;
          }) }
          </ReactCSSTransitionGroup>
        </ul>
      </div>
    )
  }
});

module.exports = Bookmark;