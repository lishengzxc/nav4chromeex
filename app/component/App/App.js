require('./App.css');
var React = require('react');
var Searcher = require('../Searcher/Searcher');
var Bookmark = require('../Bookmark/Bookmark');
var AddUrlBox = require('../AddUrlBox/AddUrlBox');
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
      addUrlBoxStyle: {
        display: 'none'
      }
    }
  },



  render: function () {

    return (
      <div>
        <Searcher/>
        <AddUrlBotton/>
        <Bookmark item={['Apple', 'Banana', 'Cranberry']}/>
        <img className="avatar" src="avatar.gif" alt="" onClick={this.scrollToTop}/>
        <AddUrlBox/>
      </div>
    )
  }
});


module.exports = App;