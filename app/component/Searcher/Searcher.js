require('./Searcher.css');

var React = require('react');

var Searcher = React.createClass({
  componentDidMount: function () {
    var searcher = this.refs.searcher.getDOMNode();


    document.addEventListener('scroll', function () {

      if (searcher.getBoundingClientRect().top < 0) {
        searcher.classList.add('searcher-fixed');
      }

      if (document.body.scrollTop < 36) {
        searcher.classList.remove('searcher-fixed');
      }


    });
  },
  render: function () {
    return (
      <div className="nv-searcher" ref='searcher'>
        <form action="http://www.baidu.com/s" name="f">
          <input type="text" className="nv-searcher-input" name="wd" id="kw" maxlength="100" autocomplete="off"/><input type="submit" className="nv-searcher-submit" value="Search" id="su"/>
        </form>
      </div>
    )
  }
});

module.exports = Searcher;