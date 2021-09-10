import {CREATE_ORDER, CLEAR_ORDER } from "../types";

let initialState = {
    formData: {
        email: '',
        name: '',
        adress: ''
    },
}

export const orderReducer = (state = initialState, action) => {
        switch(action.type) {
            case CREATE_ORDER: 
                return { 
                    ...state, 
                    formData: action.payload 
                }  
            case CLEAR_ORDER:
                return { formData: {} }      
            default:
                return state;
        }
}