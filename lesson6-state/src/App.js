import React, { Component } from 'react';
import './App.css';
// import Product from './components/Product'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      products: [
        {
          name: 'Iphone6',
          price: 150000,
          status: true
        },
        {
          name: 'Iphone7',
          price: 170000,
          status: true
        },
        {
          name: 'Iphone8',
          price: 180000,
          status: true
        }
      ],
      isActive: true,
    }
    this.onSetState = this.onSetState.bind(this);
  }
  onClick() {
    console.log('Đây là app component')
  }
  onClick2(text) {
    console.log(text)
  }

  onAddProduct = () => {
    console.log(this.refs.name.value)
  }

  onSetState(){
      this.setState({
        isActive: !this.state.isActive
      })
  }
  render() {
    let elements = this.state.products.map((item, index) => {
      let result = '';
      if (item.status) {
        result = <tr key={index}>
          <td>{index}</td>
          <td>{item.name}</td>
          <td>
            <span className="label label-success">{item.price}</span>
          </td>
        </tr>
      }

      return result
    })
    return (
      <div className="container">
        <div className="row">
          <div className="row">

            <table className="table table-bordered table-hover">
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Tên</th>
                  <th>Giá</th>
                </tr>
              </thead>
              <tbody>
                { elements }
              </tbody>
            </table>
            
    <button type="button" className="btn btn-warning" onClick={ this.onSetState }>Active : {this.state.isActive === true ? 'true' : 'false'}</button>
            
          </div>

        </div>

      </div>

    );
  }
}

export default App;
