import { FETCH_PRODUCTS, FILTER_PRODUCTS_BY_SIZE, EXTRACT_SIZE_OPTIONS, ORDER_PRODUCTS_BY_PRICE} from "../types";

export const fetchProducts = () => {
    return async function(dispatch) {
        let productsLocal = [];
        let apiResponse= {};
        const arrayWithOptions = [];
        let finallArray = [];

        await fetch("/api/products").then(response => {
            apiResponse = response;
        })

        await apiResponse.json().then(response => {
            productsLocal = response.products;
        })

        // for available size options
        productsLocal.forEach(element => element.availableSizes.forEach(size => arrayWithOptions.push(size.toUpperCase())));
        finallArray = [...new Set(arrayWithOptions)]
        finallArray.push('ALL');

        dispatch({
            type: FETCH_PRODUCTS,
            payload: productsLocal
        })

        dispatch({
            type: EXTRACT_SIZE_OPTIONS,
            payload: finallArray.sort()
        })

        // const dispatchFunction = new Promise((resolve, reject) => {
        //     fetch("/api/products").then(response => {
        //          resolve(response);
        // })
        //     
        // })
    
        // dispatchFunction.then(response => {
        //     response.json().then(data => {
        //         dispatch({
        //             type: FETCH_PRODUCTS,
        //             payload: data.products
        //         })
        //     })
        // })
    }
}

// export const fetchProducts = () => async (dispatch) => {
        // const res = await fetch("/api/products");
        // const data = await res.json();
        // dispatch({
        //     type: FETCH_PRODUCTS,
        //     payload: data.products
        // })
        // const arrayWithOptions = [];
        // let finallArray = [];
        // data.products.forEach(element => element.availableSizes.forEach(size => arrayWithOptions.push(size.toUpperCase())));
        // finallArray = [...new Set(arrayWithOptions)]
        // finallArray.push('ALL');
        // dispatch({
        //     type: EXTRACT_SIZE_OPTIONS,
        //     payload: finallArray.sort()
        // })

// }

export const filterProductsBySize = (event, products) => {
        let objectToSend = {
            size: '',
            products: []
        }
        objectToSend.size = event.target.value;
        if(objectToSend.size === 'ALL') {
            objectToSend.products = products;
        } else {
            objectToSend.products = products.filter(product => product.availableSizes.indexOf(objectToSend.size) >= 0);
        }
        return {
            type: FILTER_PRODUCTS_BY_SIZE,
            payload: objectToSend
        }
}

export const sortProductsByPrice = (event, products) => {
        let cloneArray = [...products];
        function mySort(sortBy, array) {
             array.sort((a, b) => {
                 if(sortBy === 'lowest') {
                     return a.price - b.price
                 } else if(sortBy === 'highest') {
                     return b.price - a.price
                 } else {
                     return 0
                 }
             })
        }
        mySort(event.target.value, cloneArray);
        return {
            type: ORDER_PRODUCTS_BY_PRICE,
            payload: {
                selectedOption: event.target.value,
                products: cloneArray
            }
        }
}
