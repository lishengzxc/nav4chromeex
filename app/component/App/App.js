require('./App.css');
var React = require('react');
var Searcher = require('../Searcher/Searcher');
var Bookmark = require('../Bookmark/Bookmark');

var App = React.createClass({

  scrollToTop: function () {
    var app = document.body;
    var toTop = function () {
      if (app.scrollTop - 20 <= 0) {
        app.scrollTop = 0;
      } else {
        app.scrollTop -= 20;
        requestAnimationFrame(toTop);
      }
    };
    requestAnimationFrame(toTop);
  },

  componentDidMount: function () {

  },

  getInitialState: function () {
    // TODO: 删除的BUG待修复
    var list = JSON.parse(localStorage.getItem('bookmarkList') ? localStorage.getItem('bookmarkList') : '[{"name":"Github","url":"https://github.com"}]');
    list.forEach(function (value, index) {
      value.key = index;
    });
    return {
      bookmarkList: list
    }
  },

  onAddUrl: function (newUrl) {
    newUrl.key = this.state.bookmarkList.length;
    var list = this.state.bookmarkList.concat(newUrl);
    this.setState({
      bookmarkList: list
    });
    localStorage.setItem('bookmarkList', JSON.stringify(list));
  },

  onDelUrl: function (id) {
    var that = this;
    this.state.bookmarkList.forEach(function (value, index, array) {
      if (id === value.key) {
        array.splice(index, 1)
      }
      that.setState({
        bookmarkList: array
      });
      return localStorage.setItem('bookmarkList', JSON.stringify(array));
    });
  },

  render: function () {

    return (
      <div>
        <Searcher/>
        <Bookmark bookmarkList={this.state.bookmarkList} onAddUrl={this.onAddUrl} onDelUrl={this.onDelUrl}/>
        <img className="avatar" src="avatar.gif" alt="" onClick={this.scrollToTop}/>
      </div>
    )
  }
});


module.exports = App;