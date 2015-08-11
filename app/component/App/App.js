require('./App.css');
var React = require('react');
var Searcher = require('../Searcher/Searcher');
var Bookmark = require('../Bookmark/Bookmark');
var AddUrlBotton = require('../AddUrlButton/AddUrlButton');

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
    return {
      bookmarkList: [{
        name: 'Google',
        url: 'http://www.google.com'
      }, {
        name: 'Baidu',
        url: 'http://www.baidu.com'
      }, {
        name: '李胜的脚步',
        url: 'http://www.lishengcn.cn'
      }]
    }
  },

  render: function () {

    return (
      <div>
        <Searcher/>
        <AddUrlBotton/>
        <Bookmark bookmarkList={this.state.bookmarkList}/>
        <img className="avatar" src="avatar.gif" alt="" onClick={this.scrollToTop}/>
      </div>
    )
  }
});


module.exports = App;