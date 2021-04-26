import React, {Component} from 'react';
import dress1 from '../images/dress1.jpeg'
import formatCurrency from "../util";

export default class Products extends Component {
    render() {

        return (
            <div>
                <div className="products d-flex flex-wrap">
                    {this.props.products.map(product =>
                        <div className="product" key={product._id}>
                            <div>
                                <a href={"#" + product._id}>
                                    <img src={dress1} alt={product.title}></img>
                                    <p>{product.title}</p>
                                </a>
                            </div>
                            <div className="product-price d-flex align-items-center justify-content-between">
                                <div>{formatCurrency(product.price)}</div>
                                <button className="btn-primary">Add to Cart</button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        )
    }
}
