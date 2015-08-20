require('./Tool.css');

var React = require('react');

var Tool = React.createClass({
  render: () => (
    <div className="tool">
      <div className="fa fa-bars"></div>
    </div>
  )
});

module.exports = Tool;