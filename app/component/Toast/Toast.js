require('./Toast.css');

var React = require('react');

var Toast = React.createClass({
  getInitialState: function () {
    return {
      visible: false
    }
  },

  showToast: function () {
    this.refs['toast'].getDOMNode().style.display = 'block';
    this.refs['toast'].getDOMNode().classList.add('active');
  },

  hideToast: function () {
    this.refs['toast'].getDOMNode().classList.remove('active');
    setTimeout(() => this.refs['toast'].getDOMNode().style.display = 'none', 100);
  },

  render: function () {
    return (
      <div ref="toast" className='toast'>
        <p>{this.props.toastContent}</p>
      </div>
    )
  }
});

module.exports = Toast;