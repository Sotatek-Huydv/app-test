import React, { Component } from 'react';

class Product extends Component {
    render() {
        return (
            <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
            <div class="thumbnail">
                <img alt="" />
                <div class="caption">
                    <h3>{ this.props.children }</h3>
                    <p>
                        { this.props.price }
                    </p>
                    <p>
                        <a class="btn btn-primary">Mua Ngay</a>
                    </p>
                </div>
            </div>
        </div>
        );
    }
}

export default Product;
