require('./App.css');
var React = require('react');
var Searcher = require('../Searcher/Searcher');
var Bookmark = require('../Bookmark/Bookmark');

var App = React.createClass({
  scrollToTop: function (event) {
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
        <header className="nv-header"><p></p></header>
        <Searcher/>
        <Bookmark/>
        <img className="avatar" src="avatar.gif" alt="" onClick={this.scrollToTop}/>
      </div>
    )
  }
});

module.exports = App;