require('./Toast.css');

var React = require('react');

var Toast = React.createClass({
  getInitialState: function () {
    return {
      visible: false
    }
  },

  showToast: function () {
    var toast = this.refs['toast'].getDOMNode();

    toast.classList.remove('hide');
    toast.classList.add('show');
    toast.classList.add('enter');

    setTimeout(() => toast.classList.remove('enter'), 200);
  },

  hideToast: function () {
    var toast = this.refs['toast'].getDOMNode();

    toast.classList.add('leave');
    setTimeout(() => {
      toast.classList.remove('show');
      toast.classList.remove('leave');
      toast.classList.add('hide');
    }, 200);
  },

  render: function () {
    return (
      <div ref="toast" className='toast hide'>
        <p>{this.props.toastContent}</p>
      </div>
    )
  }
});

module.exports = Toast;