import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import formatCurrency from "../util";
import {fetchProducts} from "../actions/productActions";
import { useEffect } from 'react';

const Products = (props) => {

    console.log('props', props);
    const products = props.products;

    // const products = useSelector(state => state.products.products);
    // const dispatch = useDispatch();
    // useEffect(() => {
    //     dispatch(fetchProducts())
    // }, [dispatch]);

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
                                    <button onClick={() => this.props.addToCart(product)} className="btn-primary">Add to Cart</button>
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
