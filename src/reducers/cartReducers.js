import { ADD_TO_CART, FETCH_CART_PRODUCTS, REMOVE_FROM_CART } from "../types";

const initialState = {
    cartProducts: [],
    selectedProduct: {}
}

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CART_PRODUCTS:
            return {
                ...state,
                cartProducts: action.payload
            }
        case ADD_TO_CART:
            return {
                ...state,
                cartProducts: action.payload
            }
        case REMOVE_FROM_CART:
            return {
                ...state,
                cartProducts: action.payload
            }    
        default:
            return state
    }

}