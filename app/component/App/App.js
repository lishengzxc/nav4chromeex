require('./App.css');
var React = require('react');
var Searcher = require('../Searcher/Searcher');
var Bookmark = require('../Bookmark/Bookmark');
var AddUrlButton = require('../AddUrlButton/AddUrlButton');

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
  render: function () {
    return (
      <div>
        <header className="nv-header"><AddUrlButton/></header>
        <Searcher/>
        <Bookmark/>
        <img className="avatar" src="avatar.gif" alt="" onClick={this.scrollToTop}/>
      </div>
    )
  }
});

module.exports = App;