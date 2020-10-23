import React, { Component } from 'react';
import './App.css';
import Product from './components/Product'

class App extends Component {
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
    result = <Product price={item.price}>{item.name}</Product>
  }

  return result
  })
  return (
    <div class="container">
      <div class="row">
        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            {elements}
            {/* <Product />
            <Product />
            <Product />
            <Product /> */}
          </div>
          
        </div>
        
      </div>
      
    </div>
    
  );
}
}

export default App;
