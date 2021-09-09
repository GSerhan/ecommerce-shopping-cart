import { UPDATE_CHECKOUT_DATA, CREATE_ORDER, CLEAR_CART, CLEAR_ORDER } from "../types";

export const updateCheckoutData = (data) => {
    return {
        type: UPDATE_CHECKOUT_DATA,
        payload: data.formData
    }
}

export const createOrder = order => dispatch => { 
    fetch("/api/orders", { 
        method: "POST",
        headers: { 
            "Content-Type": "application/json",
        },
        body: JSON.stringify(order),
    }).then(response => response.json()
    ).then(data => { 
        dispatch({
            type: CREATE_ORDER, 
            payload: data
        })
        localStorage.clear('cartProducts');
        dispatch({
            type: CLEAR_CART
        })
    })
}

export const clearOrder = () => dispatch => { 
    dispatch({
        type: CLEAR_ORDER
    })
}