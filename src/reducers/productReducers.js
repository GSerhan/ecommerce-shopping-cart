import { FETCH_PRODUCTS, EXTRACT_SIZE_OPTIONS, FILTER_PRODUCTS_BY_SIZE, ORDER_PRODUCTS_BY_PRICE } from "../types";

const initialState = {
    products: [],
    filteredProducts: [],
    sizeOptions: [],
    selectedSize: '',
    selectedSort: '',
}

export const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PRODUCTS:
            return {
                ...state,
               products: action.payload,
               filteredProducts: action.payload
            };
        case EXTRACT_SIZE_OPTIONS:
            return {
                ...state,
                sizeOptions: action.payload,
            }
        case FILTER_PRODUCTS_BY_SIZE:
            return {
                ...state,
                selectedSize: action.payload.size,
                filteredProducts: action.payload.products,
              }

        case ORDER_PRODUCTS_BY_PRICE:
            return {
                ...state,
                selectedSort: action.payload.selectedOption,
                filteredProducts: action.payload.products,
            }      
        default:
            return state;
    }
}