import React, {Component} from 'react';
import formatCurrency from '../util';

class Cart extends Component {

    calculateTotal = () => {
        return formatCurrency(this.props.cartProducts.reduce((accumulator,currentValue) => {
            return accumulator + (currentValue.price * currentValue.count)
        }, 0))
    }

    render() {
        return (
            <div>{
                    !this.props.cartProducts.length ? 
                    <h4 className="cart cart-header">You don't have anything in your basket</h4> : 
                    <h4 className="cart cart-header">You have {this.props.cartProducts.length} in your basket</h4>
                }
                <div className="cart">
                    <ul className="cart-items">
                        {this.props.cartProducts.map((item, index) => {
                            return <li className="cart-item" key={index}>
                                <div>
                                    <img className="mr-2" src={`../images/${item.image}`} alt={item.image}></img>
                                    <span>{item.title}</span>
                                </div>
                                <div className="d-flex justify-content-between align-items-center">
                                    {formatCurrency(item.price)} x {item.count} {" "}
                                    <button className="btn btn-danger" onClick={() => this.props.removeFromCart(item)}>Remove</button>
                                </div>
                            </li>
                        })}
                    </ul>
                </div>
                <div className="cart">
                    {this.props.cartProducts.length > 0 && 
                    <div className="total d-flex w-100 justify-content-between align-items-center">
                                <div>
                                    Total: <span>{this.calculateTotal()}</span>
                                </div>
                            
                            <button onClick={this.props.proceedToCheckout} className="btn btn-warning">Proceed</button>
                        </div>
                        }
                </div>
            </div>
        )
    }

}

export default Cart;