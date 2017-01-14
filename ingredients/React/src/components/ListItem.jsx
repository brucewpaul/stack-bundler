import React, { Component } from 'react';

class ListItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <li>
        <h3>{this.props.content.title}</h3>
        <p>{this.props.content.text}</p>
      </li>
    );
  }
}

export default ListItem;