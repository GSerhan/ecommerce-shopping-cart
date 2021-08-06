import { UPDATE_CHECKOUT_DATA } from "../types";

let initialState = {
    formData: {
        email: '',
        name: '',
        adress: ''
    }
}

export const orderReducer = (state = initialState, action) => {
        switch(action.type) {
            case UPDATE_CHECKOUT_DATA:
                return {
                    ...state,
                    formData: action.payload
                }
            default:
                return state;
        }
}