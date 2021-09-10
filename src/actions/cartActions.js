import { ADD_TO_CART, FETCH_CART_PRODUCTS, REMOVE_FROM_CART, CLEAR_CART } from "../types";

export const fetchCartProducts = () => {
    let cartProducts = JSON.parse(localStorage.getItem('cartProducts'));

    if(cartProducts === null) {
        cartProducts = []
    }

    return {
        type: FETCH_CART_PRODUCTS,
        payload: cartProducts
    }
}

export const addToCart = selectedProduct => {
    return function(dispatch, getState) {
        let myCartStore = [...getState().cartStore.cartProducts];

         // 1st solution
         let alreadyInCart = myCartStore.find(item => item._id === selectedProduct._id);

         if(typeof alreadyInCart === 'undefined') {
             selectedProduct.count = 1;
             myCartStore.push(selectedProduct);
         } else {
             selectedProduct.count++;
         }

        //2nd solution
        // let alreadyInCart = false;
        // myCartStore.forEach(item => {
        //     if(item._id === selectedProduct._id) {
        //         alreadyInCart = true;
        //         selectedProduct.count++
        //     }
        // })
        // if(!alreadyInCart) {
        //     selectedProduct.count = 1;
        //     myCartStore.push(selectedProduct);
        // }

        dispatch({
            type: ADD_TO_CART,
            payload: myCartStore
        })
        localStorage.setItem('cartProducts', JSON.stringify(myCartStore));
    }
}

export const removeFromCart = selectedProduct => (dispatch, getState) => {

    const cloneCartProducts = [...getState().cartStore.cartProducts];

    let findProduct = cloneCartProducts.find(item => item._id === selectedProduct._id);
    
    if(selectedProduct.count > 1) {
        selectedProduct.count--
    } else {
        cloneCartProducts.splice(cloneCartProducts.indexOf(findProduct), 1);
    }

    dispatch({
        type: REMOVE_FROM_CART,
        payload: cloneCartProducts
    })
    localStorage.setItem('cartProducts', JSON.stringify(cloneCartProducts));

}

export const clearCart = () => (dispatch) => {
    dispatch({
        type: CLEAR_CART,
        payload: []
    })
}