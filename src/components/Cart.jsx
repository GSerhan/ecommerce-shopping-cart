import React from 'react';
import formatCurrency from '../util';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchCartProducts, removeFromCart } from '../actions/cartActions';

const Cart = props => {


    const cartProducts = useSelector(state => state.cartStore.cartProducts);
    const dispatch = useDispatch();


    const remove = item => {
        dispatch(removeFromCart(item));
    }
    
    useEffect(() => {
        dispatch(fetchCartProducts())
    }, [dispatch])
    
    return (
        <div>{!cartProducts.length ? 
                <h4 className="cart cart-header">You don't have anything in your basket</h4> : 
                <h4 className="cart cart-header">You have {cartProducts.length} in your basket</h4>
            }
            <div className="cart">
                <ul className="cart-items">
                    {cartProducts.map((item, index) => {
                        return <li className="cart-item" key={index}>
                            <div>
                                <img className="mr-2" src={`../images/${item.image}`} alt={item.image}></img>
                                <span>{item.title}</span>
                            </div>
                            <div className="d-flex justify-content-between align-items-center">
                                {formatCurrency(item.price)} x {item.count} {" "}
                                <button onClick={() => remove(item)} className="btn btn-danger">Remove</button>
                            </div>
                        </li>
                    })}
                </ul>
            </div>
            <div className="cart">
                {cartProducts.length > 0 && 
                <div className="total d-flex w-100 justify-content-between align-items-center">
                            <div>
                                Total: <span>{props.sendTotalToParent()}</span>
                            </div>
                        
                        <button className="btn btn-warning" onClick={props.showCheckoutFormMethod}>Proceed</button>
                    </div>
                    }
            </div>
        </div>
    )
}

export default Cart;