import React, { Component } from 'react';

class Product extends Component {
    // constructor(props){
    //     super(props);
    //     console.log(props)
    //     this.onAddToCart = this.onAddToCart.bind(this);
    // }
    // onAddToCart(){
    //     alert(this.props.children);
    //     // console.log(text)
    // }
    onAddToCart2 = () =>{
        alert(this.props.children)
    }
    render() {
        return (
            <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
            <div className="thumbnail">
                <img alt="" />
                <div className="caption">
                    <h3>{ this.props.children }</h3>
                    <p>
                        { this.props.price }
                    </p>
                    <p>
                        <a className="btn btn-primary" onClick={ this.onAddToCart }>Mua Ngay</a>
                        <a className="btn btn-primary" onClick={ this.onAddToCart2 }>Mua Ngay</a>
                    </p>
                </div>
            </div>
        </div>
        );
    }
}

export default Product;
