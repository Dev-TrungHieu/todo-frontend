import React, { Component } from 'react';
import axios from "axios";

class Item extends Component {

  onDelete = (id) => {
    this.props.onDelete(id)
  }

  render() {
    return (
      <div>
        <li>
          <div className="form-check"> <label className="form-check-label"> <input className="checkbox" type="checkbox" />  {this.props.title}  <i className="input-helper" /></label> </div> <i id={this.props.id} onClick={() => { this.onDelete(this.props.id) }} className="remove mdi mdi-close-circle-outline" />
        </li>
      </div>
    );
  }
}

export default Item;