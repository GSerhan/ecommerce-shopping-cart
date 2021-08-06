import React from 'react';
import formatCurrency from "../util";
import {addToCart} from "../actions/cartActions";
import { useDispatch } from 'react-redux';


const Products = props => {

    const products = props.products;
    const dispatch = useDispatch() 

        return (
            <div>
                <div>
                    {!products ? <div>Loading...</div> : 
                    <div className="products d-flex flex-wrap">
                        {products.map(product =>
                            <div className="product" key={product._id}>
                                <div>
                                    <a href={"#" + product._id}>
                                        <img src={`../images/${product.image}`} alt={product.title}></img>
                                        <p>{product.title}</p>
                                    </a>
                                </div>
                                <div className="product-price d-flex align-items-center justify-content-between">
                                    <div>{formatCurrency(product.price)}</div>
                                    <button onClick={() => dispatch(addToCart(product))} className="btn-primary">Add to Cart</button>
                                </div>
                            </div>
                        )}
                    </div>
                    }
                    
                </div>
            </div>
        )
    
}

export default Products;
