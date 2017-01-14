import React, { Component } from 'react';
import axios from 'axios';

class ListInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      text: ''
    }

    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleTitleChange(event) {
    this.setState({title: event.target.value});
  }

  handleTextChange(event) {
    this.setState({text: event.target.value});
  }

  handleSubmit(event) {
    axios.post('/api/items', {
        title: this.state.title,
        text: this.state.text
      })
      .then(function (response) {
        console.log(response);
        this.props.getListItems();
      }.bind(this))
      .catch(function (error) {
        console.log(error);
      });
    event.preventDefault();
  }

  render() {
    return (
    <form onSubmit={this.handleSubmit}>
      <label>
        <span>Title: </span>
        <input value={this.state.title} onChange={this.handleTitleChange} type="text" name="title" />
      </label>
      <label>
        <span>Text: </span>
        <input value={this.state.text} onChange={this.handleTextChange} type="text" name="text" />
      </label>
      <input type="submit" value="Submit" />
    </form>
    );
  }
}

export default ListInput;