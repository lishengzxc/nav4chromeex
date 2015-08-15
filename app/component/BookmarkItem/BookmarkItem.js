require('./BookmarkItem.css');

var React = require('react');

var BookmarkItem = React.createClass({

  getInitialState: () => ({
    visible: false
  }),

  del: function () {
    this.props.onDelUrl(this.props.id);
  },

  showConfirm: function () {
    this.setState({
      visible: true
    });
  },

  hideConfirm: function () {
    this.setState({
      visible: false
    });
  },

  render: function () {
    return (
      <li className="bookmarksbox-body-item">
        <a href={this.props.url} target="_blank">
          <span>{this.props.name}</span>
        </a>
        <i className="fa fa-close del" onClick={this.showConfirm}></i>
        <div className="confirm" style={{
          'display': this.state.visible ? 'flex' : 'none'
        }}>
          <span>Delete it？</span>
          <button className="ok" onClick={this.del}><i className="fa fa-check"></i></button>
          <button className="cancel" onClick={this.hideConfirm}><i className="fa fa-close"></i></button>
        </div>
      </li>
    )
  }
});


module.exports = BookmarkItem;