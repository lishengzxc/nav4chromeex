require('./Tool.css');

var React = require('react');

var Tool = React.createClass({
  getInitialState: () => {
    return {
      toolDisplay: false
    };
  },

  toolToggle: function () {
    this.setState({
      toolDisplay: !this.state.toolDisplay
    });
  },

  render: function () {
    var classSet = React.addons.classSet;
    var toolState = classSet({
      'tool': true,
      'open': this.state.toolDisplay,
      'close': !this.state.toolDisplay
    });

    return (
      <div className={toolState}>
        <div className="tool-contain"></div>
        <div className="tool-bar">
          <div className="fa fa-bars" onClick={this.toolToggle}></div>
        </div>
      </div>
    )
  }
});

module.exports = Tool;