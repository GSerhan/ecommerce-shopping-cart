import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import { cartReducer } from "./reducers/cartReducers";
import {productsReducer} from "./reducers/productReducers";
import {orderReducer} from "./reducers/orderReducers";


const initialState = {};
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(combineReducers({
    productsStore: productsReducer,
    cartStore: cartReducer,
    orderStore: orderReducer
}),
    initialState,
    composeEnhancer(applyMiddleware(thunk))
);

export default store;