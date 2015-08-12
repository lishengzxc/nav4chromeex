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
    return {
      bookmarkList: JSON.parse(localStorage.getItem('bookmarkList'))
    }
  },

  onAddUrl: function (newUrl) {
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