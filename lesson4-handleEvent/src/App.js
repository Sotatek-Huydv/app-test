import React, { Component } from 'react';
import './App.css';
import Product from './components/Product'

class App extends Component {
  onClick(){
    console.log('Đây là app component')
  }
  onClick2(text){
    console.log(text)
  }
  render(){
  var products = [
    {
      name: 'Iphone6',
      price: 150000,
      status: true
    },
    {
      name: 'Iphone7',
      price: 170000,
      status: false
    },
    {
      name: 'Iphone8',
      price: 180000,
      status: false
    }
  ]
  let elements = products.map((item, index)=> {
  let result = '';
  if(item.status){
    result = <Product key={index} price={item.price}>{item.name}</Product>
  }

  return result
  })
  return (
    <div className="container">
      <div className="row">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            {elements}
            {/* <Product />
            <Product />
            <Product />
            <Product /> */}
          </div>
          
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            
            <button type="button" className="btn btn-warning" onClick={this.onClick}>Click Me!</button>
            <button type="button" className="btn btn-warning" onClick={() => {this.onClick2('abc')}}>Click Me2!</button>
            
          </div>
          
        </div>
        
      </div>
      
    </div>
    
  );
}
}

export default App;
