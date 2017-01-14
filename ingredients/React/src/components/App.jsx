import React, { Component } from 'react';
import ListInput from './ListInput.jsx';
import List from './List.jsx';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listItems: []
    }

    this.getListItems = this.getListItems.bind(this);
  }
  componentWillMount() {
    this.getListItems();
  }
  getListItems() {
    axios.get('/api/items')
      .then(function (response) {
        this.setState({
          listItems: response.data.results
        });
      }.bind(this))
      .catch(function (error) {
        console.log(error);
      });
  }
  render() {
    return (
      <div>
        <ListInput getListItems={this.getListItems}/>
        <List listItems={this.state.listItems}/>
      </div>
    );
  }
}

export default App;