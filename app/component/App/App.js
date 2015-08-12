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
    //var i = 0;
    //var data = {
    //  name: Math.random(),
    //  url: Math.random()
    //};
    //var list = [];
    //for (var j = 0; j < 200; j++) {
    //  data.key = j;
    //  list.push(JSON.parse(JSON.stringify(data)));
    //}
    //console.log(list);
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

  render: function () {

    return (
      <div>
        <Searcher/>
        <Bookmark bookmarkList={this.state.bookmarkList} onAddUrl={this.onAddUrl}/>
        <img className="avatar" src="avatar.gif" alt="" onClick={this.scrollToTop}/>
      </div>
    )
  }
});


module.exports = App;