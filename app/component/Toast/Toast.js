require('./Toast.css');

var React = require('react');

var Toast = React.createClass({
  getInitialState: function () {
    return {
      visible: false
    }
  },

  showToast: function () {
    this.setState({
      visible: true
    });
  },

  hideToast: function () {
    this.setState({
      visible: false
    });
  },

  render: function () {
    return (
      <div className='toast' style={{
        'display': this.state.visible ? 'block' : 'none'
      }}>
        <p>{this.props.toastContent}</p>
      </div>
    )
  }
});

module.exports = Toast;