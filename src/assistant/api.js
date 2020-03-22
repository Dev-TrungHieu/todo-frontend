import React, { Component } from 'react';
import axios from "axios";

class Api extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    axios({
      method: 'post',
      url: 'http://localhost:4000/api/todos',
      data: {
        completed: false
      }
    })
      .then(res => this.setState({ data: res.data }))
      .catch(err => console.log(err))
  }

  render() {
    var product = this.state.data;
    console.log(product);

    return (
      <div>

      </div>
    );
  }
}

export default Api;