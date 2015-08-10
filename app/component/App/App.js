require('./App.css');
var React = require('react');
var Searcher = require('../Searcher/Searcher');
var Bookmark = require('../Bookmark/Bookmark');
var AddUrlBox = require('../AddUrlBox/AddUrlBox');

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
    document.body.addEventListener('scroll', function () {
      console.log(11);
    });
  },
  render: function () {
    return (
      <div>
        <Searcher/>
        <Bookmark/>
        <img className="avatar" src="avatar.gif" alt="" onClick={this.scrollToTop}/>
        <AddUrlBox/>
      </div>
    )
  }
});


module.exports = App;