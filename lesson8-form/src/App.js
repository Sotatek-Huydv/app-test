import React, { Component } from 'react';
import './App.css'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      userName: ''
    }
    this.onHandleChange = this.onHandleChange.bind(this)
    this.onHandleSubmit = this.onHandleSubmit.bind(this)
  }

  onHandleChange(event){
    this.setState({
      userName: event.target.value
    })
  }
  onHandleSubmit(event){
    event.preventDefault();
    console.log(this.state)
  }
  render() {
    return (
      
      <div class="container">
        
        <div class="row">
          
          <div class="col-xs-8 col-sm-8 col-md-8 col-lg-8">
            
            <div class="panel panel-primary">
                <div class="panel-heading">
                  <h3 class="panel-title">Form</h3>
                </div>
                <div class="panel-body">
                  <form onSubmit={ this.onHandleSubmit }>
                    <div class="form-group">
                      <label for="">Username: </label>
                      <input 
                      type="text" 
                      class="form-control" 
                      name="txtName"
                      onChange= { this.onHandleChange }
                      />
                    </div>
                    <button type="submit" class="btn btn-primary">Lưu lại</button>
                    <button type="reset" class="btn btn-default">Xóa trắng</button>
                    
                  </form>
                  
                </div>
            </div>
            
          </div>
          
        </div>
        
      </div>
      
    );
  }
}

export default App;