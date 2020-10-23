import React, { Component } from 'react';

class Reset extends Component {
    onResetDefault = () =>{
        this.props.onResetDefault(true)
    }
    render() {
        return (
            <button type="button" class="btn btn-primary" onClick={ this.onResetDefault }>Reset</button>
        );
    }
}

export default Reset;