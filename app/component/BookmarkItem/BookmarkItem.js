require('./BookmarkItem.css');

var React = require('react');
var BookmarkItem = React.createClass({
  del: function () {
    //console.log(this.props.id);
    //this.props.onDelUrl(this.props.id);
    //console.log(this.props.onDelUrl);
    this.props.onDelUrl(this.props.id);
  },

  render: function () {
    return (
      <li className="bookmarksbox-body-item">
        <a href={this.props.url} target="_blank">
          <span>{this.props.name}</span>
        </a>
        <i className="fa fa-close del" onClick={this.del}></i>
      </li>
    )
  }
});

module.exports = BookmarkItem;