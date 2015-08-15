require('./App.css');
var React = require('react');
var Searcher = require('../Searcher/Searcher');
var Bookmark = require('../Bookmark/Bookmark');
var Toast = require('../Toast/Toast');

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

  time: '',

  onDelUrl: function (id) {

    const _timeout = () => {
      clearTimeout(this.time);
      this.time = setTimeout(() => {
        this.refs.toast.hideToast()
      }, 2000);
    };

    var list = this.state.bookmarkList.filter((value) => value.key != id);
    var name = this.state.bookmarkList.filter((value) => value.key === id)[0].name;

    this.setState({
      bookmarkList: list
    });
    this.setState({
      content: name + ' 已被删除'
    });
    this.refs.toast.showToast();

    _timeout();

    return localStorage.setItem('bookmarkList', JSON.stringify(list));
  },





  render: function () {

    return (
      <div>
        <Searcher/>
        <Bookmark bookmarkList={this.state.bookmarkList} onAddUrl={this.onAddUrl} onDelUrl={this.onDelUrl}/>
        <img className="avatar" src="avatar.gif" alt="" onClick={this.scrollToTop}/>
        <Toast ref="toast" toastContent={this.state.content}/>
      </div>
    )
  }
});


module.exports = App;