require('./Searcher.css');

var React = require('react');

var Searcher = React.createClass({

  getInitialState: function () {
    return {
      action: 'http://www.baidu.com/s',
      name: 'wd'
    }
  },

  componentDidMount: function () {
    this.refs['searcherinput'].getDOMNode().focus();

    var searcher = this.refs.searcher.getDOMNode();


    document.addEventListener('scroll', function () {

      if (searcher.getBoundingClientRect().top < 0) {
        searcher.classList.add('searcher-fixed');
      }

      if (document.body.scrollTop < 25) {
        searcher.classList.remove('searcher-fixed');
      }


    });
  },

  changeSearchEngines: function (event) {
    if (event.target.id === 'google') {
      this.setState({
        action: 'https://www.google.com/search',
        name: 'q'
      });
    } else {
      this.setState({
        action: 'http://www.baidu.com/s',
        name: 'wd'
      });
    }
  },

  render: function () {
    return (
      <div className="nv-searcher" ref='searcher'>
        <form action={this.state.action} name="f">
          <input ref="searcherinput" type="text" className="nv-searcher-input" name={this.state.name} autoComplete="off" focus/><input type="submit" className="nv-searcher-submit" value="Search"/>
        </form>
        <div className="nv-searchengines">
          <input type="radio" id="baidu" name="searchengines" defaultChecked onClick={this.changeSearchEngines}/><label htmlFor="baidu">Baidu</label>
          <input type="radio" id="google" name="searchengines" onClick={this.changeSearchEngines}/><label htmlFor="google">Google</label>
        </div>
      </div>
    )
  }
});

module.exports = Searcher;