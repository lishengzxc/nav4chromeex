require('./Searcher.css');

var React = require('react');

var Searcher = React.createClass({
  render: function () {
    return (
      <div className="nv-searcher">
        <form action="http://www.baidu.com/s" name="f">
          <input type="text" className="nv-searcher-input" name="wd" id="kw" maxlength="100" autocomplete="off"/><input type="submit" className="nv-searcher-submit" value="Search" id="su"/>
        </form>
      </div>
    )
  }
});

module.exports = Searcher;