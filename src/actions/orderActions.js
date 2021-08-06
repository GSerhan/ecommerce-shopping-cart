import { UPDATE_CHECKOUT_DATA } from "../types";

export const updateCheckoutData = (data) => {
    return {
        type: UPDATE_CHECKOUT_DATA,
        payload: data.formData
    }
}