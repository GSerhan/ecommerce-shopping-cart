import React, { Component } from 'react';

export default class Filter extends Component {

    render() {
        return (
            <div className="filter d-flex justify-content-between p-3 pr-4">
                <div className="filter-result">Counts: {this.props.count} products</div>
                <div className="filter-sort">
                    <label className="pr-2">Order</label>
                    <select name="rate" onChange={this.props.sortProducts}>
                        <option value="">Latest</option>
                        <option value="lowest">Lowest</option>
                        <option value="highest">Highest</option>
                    </select>
                </div>
                <div className="d-flex  filter-size">
                    <label className="pr-2">Filter</label>
                    <select name="size" onChange={this.props.filterProducts}>
                        {this.props.sizeOptions.map((option, index) => 
                            <option key={index} value={option}>{option}</option>
                        )}
                    </select>
                </div>
            </div>
        )
    }
}
