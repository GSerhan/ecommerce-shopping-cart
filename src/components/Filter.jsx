import React from 'react';
import { useDispatch } from 'react-redux';
import {filterProductsBySize, sortProductsByPrice} from "../actions/productActions";


const Filter = props => {

    const dispatch = useDispatch();
  
    return (
        <div className="filter d-flex justify-content-between p-3 pr-4">
            <div className="filter-result">Counts: {props.count} products</div>
            <div className="filter-sort">
                <label className="pr-2">Order</label>
                <select name="rate" onChange={(event) => dispatch(sortProductsByPrice(event, props.products))}>
                    <option value="">Latest</option>
                    <option value="lowest">Lowest</option>
                    <option value="highest">Highest</option>
                </select>
            </div>
            <div className="d-flex  filter-size">
                <label className="pr-2">Filter</label>
                <select name="size" onChange={(event) => dispatch(filterProductsBySize(event, props.allProducts))}>
                    {props.sizeOptions.map((option, index) => 
                        <option key={index} value={option}>{option}</option>
                    )}
                </select>
            </div>
        </div>
    )

} 

export default Filter;

   

