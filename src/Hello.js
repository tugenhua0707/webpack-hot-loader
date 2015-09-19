"use strict"
var React = require('react');
class Hello extends React.Component {
  render() {
    return (
      <h1>Hello2 {this.props.name}!</h1>
    );
  }
};
module.exports = Hello;