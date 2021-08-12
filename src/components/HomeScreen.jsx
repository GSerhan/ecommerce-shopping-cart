import React from "react";
import Products from "./Products.jsx"
import Filter from "./Filter";
import Cart from "./Cart";
import CheckoutForm from "./CheckoutForm";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import {fetchProducts} from "../actions/productActions";
import { Modal, Button } from "react-bootstrap";
import formatCurrency from '../util';


const HomeScreen = () => {

    const [showCheckoutForm, setCheckoutForm] = useState(false);
    const [showOrder, setOrder] = useState(false);

    const products = useSelector(state => state.productsStore.filteredProducts);
    const productsAll = useSelector(state => state.productsStore.products);
    const size = useSelector(state => state.selectedSize);
    const sort = useSelector(state => state.selectedSort);
    const sizeOptions = useSelector(state => state.productsStore.sizeOptions);
    const cartProducts = useSelector(state => state.cartStore.cartProducts);
    const formData = useSelector(state => state.orderStore.formData);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts())
    }, [dispatch]);

    const calculateTotal = () => {
        return formatCurrency(cartProducts.reduce((accumulator,currentValue) => {
            return accumulator + (currentValue.price * currentValue.count)
        }, 0))
    }
    const showCheckoutFormMethod = () => {
        setCheckoutForm(true);
    }
    const showOrderMethod = () => {
        setOrder(true);
    }
    const closeModal = () => {
        setOrder(false);
    }

    return (
        <div className="grid-container">
            <header className="d-flex align-items-center">
                <a href="/">React Shopping Cart</a>
            </header>
            <main>
                <div className="content d-flex">
                    <Modal show={showOrder} onHide={closeModal}>
                        <Modal.Header closeButton>
                            <Modal.Title>Order details</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <p><strong>Email:</strong> {formData.email}</p>
                            <p><strong>Name:</strong> {formData.name}</p>
                            <p><strong>Adress:</strong> {formData.adress}</p>
                            <h4>Products:</h4>
                            <ul>
                                {cartProducts.map((item, index) => 
                                <li key={index}>
                                    {item.count} x <span>{item.title}</span>
                                </li>
                            )}
                            </ul>
                            <p><strong>Total:</strong>{calculateTotal()}</p>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button onClick={closeModal}>Close</Button>
                        </Modal.Footer>
                    </Modal>
                    <div className="col-8 main">
                        <Filter 
                            count={products.length}
                            allProducts={productsAll}
                            products={products}
                            size={size}
                            sort={sort}
                            sizeOptions={sizeOptions}
                        />
                        <Products
                            products={products}
                            cartProducts={cartProducts}
                        />
                    </div>
                    <div className="col-4 sidebar">
                        <Cart
                            showCheckoutFormMethod={showCheckoutFormMethod}
                            sendTotalToParent={calculateTotal} 
                            cartProducts={cartProducts}
                        />
                        {showCheckoutForm && cartProducts.length &&
                        <CheckoutForm 
                            showOrderMethod={showOrderMethod}
                        />}
                    </div>
                </div>
            </main>
            <footer className="position-fixed w-100 d-flex justify-content-center align-items-center">
                All right is reserved.
            </footer>
        </div>
    );

}

export default HomeScreen;
