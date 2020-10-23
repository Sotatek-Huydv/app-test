import React, { Component } from 'react';

class ColorPicker extends Component {
    constructor(props){
        super(props);
        this.state = {
            colors :  ['red', 'green', 'blue', '#ccc']
        }
    }
    showColor(color){
        return {
            backgroundColor: color
        }
    }

    setActiveColor(color){
        this.props.onRecevieColor(color)
    }
    render() {
        let elmColor = this.state.colors.map((item, index) => {
            return <span 
            key={index} 
            style= {this.showColor(item)}
            class= { this.props.color === item ? 'active' : ''}
            onClick= { () => this.setActiveColor(item)}></span>
        })
        return (

            <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">

                <div class="panel panel-primary">
                    <div class="panel-heading">
                        <h3 class="panel-title">Color picker</h3>
                    </div>
                    <div class="panel-body">
                        {elmColor}
                        <hr />
                    </div>
                </div>

            </div>

        );
    }
}

export default ColorPicker;