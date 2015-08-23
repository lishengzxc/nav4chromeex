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
        <div className="tool-contain">
          <div className="avatar"><img src="http://tp4.sinaimg.cn/2427441943/180/40065130095/1"/></div>
        </div>
        <div className="tool-bar">
          <div className="fa fa-bars" onClick={this.toolToggle}></div>
        </div>
      </div>
    )
  }
});

module.exports = Tool;