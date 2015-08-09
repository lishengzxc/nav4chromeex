require('./App.css');
var React = require('react');
var Searcher = require('../Searcher/Searcher');
var Bookmark = require('../Bookmark/Bookmark');

var App = React.createClass({
  render: function () {
    return (
      <div>
        <header className="nv-header"><p></p></header>
        <Searcher/>
        <Bookmark/>
        <Bookmark/>
        <img className="avatar" src="avatar.gif" alt=""/>
      </div>
    )
  }
});

module.exports = App;