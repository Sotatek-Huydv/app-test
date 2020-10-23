import React, { Component } from 'react';
import './App.css';
import Reset from './components/Reset'
import ColorPicker from './components/ColorPicker'
import Result from './components/Result'
import SizeSetting from './components/SizeSetting'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      color: 'red',
      fontSize: 12
    }
    this.onSetColor = this.onSetColor.bind(this)
    this.changeSize = this.changeSize.bind(this)
  }
  onSetColor(params){
    console.log(params)
    this.setState({
      color: params
    })
  }
  changeSize(value){
    // console.log(value)
    if(this.state.fontSize + value >= 8 && this.state.fontSize + value < 36){
      this.setState({
        fontSize: this.state.fontSize + value
      })
    }
  }
  resetDefault = (value) => {
    if(value == true){
      this.setState({
        color: 'red',
        fontSize: 12
      })
    }
  }
  render() {
    return (
      
      <div class="container mt-50">
        
        <div class="row">
          <ColorPicker color={this.state.color} onRecevieColor={ this.onSetColor }/>
          
          <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <SizeSetting fontSize= { this.state.fontSize } onChangeSize= { this.changeSize }/>
            <Reset onResetDefault= { this.resetDefault }/>
          </div>
          <Result color= {this.state.color} fontSize= {this.state.fontSize}/>
        </div>
        
      </div>
      
    );
  }
}

export default App;
