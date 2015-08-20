require('./App.css');
var React = require('react');
var Searcher = require('../Searcher/Searcher');
var Bookmark = require('../Bookmark/Bookmark');
var Toast = require('../Toast/Toast');
var Tool = require('../Tool/Tool');

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
    document.body.addEventListener('keypress', (event) => {
      //event.preventDefault();
      if (event.shiftKey && event.which == 78) {
        this.refs['bookmark'].toggleAddUrlBox();
        event.preventDefault();
      }
    });
  },



  getInitialState: function () {

    var list = JSON.parse(localStorage.getItem('bookmarkList') ? localStorage.getItem('bookmarkList') : '[]');
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
      bookmarkList: list,
      content: newUrl.name + ' is added'
    });
    this.refs['toast'].showToast();
    this._timeout();

    return localStorage.setItem('bookmarkList', JSON.stringify(list));
  },


  time: '',
  _timeout: function () {
    clearTimeout(this.time);
    this.time = setTimeout(() => {
      this.refs['toast'].hideToast();
    }, 2000);
  },

  onDelUrl: function (id) {
    var list = this.state.bookmarkList.filter((value) => value.key != id);
    var name = this.state.bookmarkList.filter((value) => value.key === id)[0].name;

    this.setState({
      bookmarkList: list,
      content: name + ' is deleted'
    });

    this.refs['toast'].showToast();
    this._timeout();

    return localStorage.setItem('bookmarkList', JSON.stringify(list));
  },

  render: function () {

    return (
      <div>
        <Tool/>
        <Searcher/>
        <Bookmark ref="bookmark" bookmarkList={this.state.bookmarkList} onAddUrl={this.onAddUrl} onDelUrl={this.onDelUrl}/>
        <img className="avatar" src="avatar.gif" alt="" onClick={this.scrollToTop}/>
        <p className="notice">Press <code>Shift</code> + <code>N</code> to Open the AddBox.</p>
        <Toast ref="toast" toastContent={this.state.content}/>
      </div>
    )
  }
});


module.exports = App;