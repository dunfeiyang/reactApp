import React, { Component } from 'react';

class Item extends Component{
  constructor(props) {
    super(props)
    this.state= {}
  }
  render() {
    return (
      <div>{this.props.item}</div>
    )
  }
}

export default Item