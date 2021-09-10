import {CREATE_ORDER, CLEAR_ORDER } from "../types";


export const createOrder = order => dispatch => {
    fetch("/api/orders", { 
        method: "POST",
        headers: { 
            "Content-Type": "application/json",
        },
        body: JSON.stringify(order),
    }).then(response => 
            response.json()
    ).then(data => {
        if(!data.message) { 
            dispatch({
                type: CREATE_ORDER, 
                payload: data
            })
            localStorage.clear('cartProducts');
        } else { 
            alert(data.message);
        }
        
    })
}

export const clearOrder = () => dispatch => { 
    dispatch({
        type: CLEAR_ORDER
    })
}