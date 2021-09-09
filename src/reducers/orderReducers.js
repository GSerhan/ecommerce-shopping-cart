import { UPDATE_CHECKOUT_DATA, CREATE_ORDER, CLEAR_ORDER } from "../types";

let initialState = {
    formData: {
        email: '',
        name: '',
        adress: ''
    },
    order: null
}

export const orderReducer = (state = initialState, action) => {
        switch(action.type) {
            case UPDATE_CHECKOUT_DATA:
                return {
                    ...state,
                    formData: action.payload
                }
            case CREATE_ORDER: 
                return { order: action.payload }  
            case CLEAR_ORDER:
                return { order: null }      
            default:
                return state;
        }
}