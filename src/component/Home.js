import React, { Component } from 'react';
import Item from "../component/item";
import axios from "axios";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      namePlant: '',
      data: []
    }
  }

  componentDidMount() {
    axios({
      method: 'post',
      url: 'http://localhost:4000/api/todos'
    })
      .then(res => {
        this.setState({ data: res.data })
      })
      .catch(err => console.log(err))
  }

  onChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    this.setState({
      [name]: value
    })
  }

  onSave = () => {
    axios({
      method: 'post',
      url: 'http://localhost:4000/api/createTodo',
      data: {
        title: this.state.namePlant
      }
    })
      .then(res => {
        this.setState({ data: res.data })
      })
    this.setState({
      namePlant: ''
    })
  }

  onDelete = (id) => {
    console.log('dang xoa' + id);
    let condition = confirm(`Bạn có chắc chắn xóa ?`); //eslint-disable-line
    if (condition) {
      alert('xoa thanh cong');

      axios({
        method: 'post',
        url: 'http://localhost:4000/api/deleteTodo',
        data: {
          id: parseInt(id)
        }
      })
        .then(res => {
          if (res.status === 200) {
            console.log(id);
            let { data } = this.state;
            data.splice(id, 1);
            this.setState({
              data: data
            })
          }
        })
    }
  }

  onClear = () => {
    axios({
      method: 'post',
      url: 'http://localhost:4000/api/clearCompleted'
    })
      .then(res => {
        this.setState({ data: res.data })
      })

  }

  render() {
    let { id, namePlant, data } = this.state;
    console.log(data);
    console.log(namePlant);
    return (
      <div className="page-content page-container" id="page-content">
        <div className="padding">
          <div className="row container d-flex justify-content-center">
            <div className="col-lg-12">
              <div className="card px-3">
                <div className="card-body">
                  <h4 className="card-title">Awesome Todo list</h4>
                  <div className="add-items d-flex">
                    <input type="text" name="namePlant" onChange={this.onChange} className="form-control todo-list-input" placeholder="What do you need to do today?" value={namePlant} required="required" />
                    <button onClick={this.onSave} type="submit" className="add btn btn-success font-weight-bold todo-list-add-btn">Add</button>
                    <button onClick={this.onClear} type="submit" className="add btn btn-danger font-weight-bold todo-list-add-btn">Clear</button></div>
                  <div className="list-wrapper">
                    <ul className="d-flex flex-column-reverse todo-list">
                      {
                        data.map((e, i) => {
                          return (
                            <Item key={i} id={e.id} completed={e.completed} title={e.title} onDelete={this.onDelete} />
                          )
                        })
                      }
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;