import React from 'react';

export default class Filter extends React.Component {

    constructor() {
        super();
        this.state = {
            filter: '',
            order: ''
        };
        this.handleChangeOrder = this.handleChangeOrder.bind(this);
        this.handleChangeFilter = this.handleChangeFilter.bind(this)
    }

    handleChangeOrder(event) {
        this.setState({order: event.target.value});
    };
    handleChangeFilter(event) {
        this.setState({filter: event.target.value});
    };

    render() {
        return (
            <div className="filter d-flex justify-content-between p-3 pr-4">
                <div className="filter-result">Counts: {this.props.count} products</div>
                <div className="filter-sort">
                    <label className="pr-2">Order</label>
                    <select name="rate" value={this.state.order} onChange={this.handleChangeOrder}>
                        <option value="">Latest</option>
                        <option value="lowest">Lowest</option>
                        <option value="highest">Highest</option>
                    </select>
                </div>
                <div className="filter-size">
                    <label className="pr-2">Filter</label>
                    <select name="size" value={this.state.filter} onChange={this.handleChangeFilter}>
                        <option value="">ALL</option>
                        <option value="XS">XS</option>
                        <option value="S">S</option>
                        <option value="M">M</option>
                        <option value="L">L</option>
                        <option value="XL">XL</option>
                    </select>
                </div>
            </div>
        )
    }
}
