import React, { Component } from 'react';

class SizeSetting extends Component {
    onChangeValue(value){
        this.props.onChangeSize(value)
    }
    render() {
        return (

            <div class="panel panel-primary">
                <div class="panel-heading">
                    <h3 class="panel-title">Size: {this.props.fontSize}px</h3>
                </div>
                <div class="panel-body">
                    <button type="button" class="btn btn-success" onClick={() => this.onChangeValue(2)}>Tăng</button>
                    <button type="button" class="btn btn-success" onClick={() => this.onChangeValue(-2)}>Giảm</button >
                </div>
            </div>

        );
    }
}

export default SizeSetting;