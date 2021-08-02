import React from "react";
import data from "../data.json";
import Products from "./ProductsClassComponent"
import Filter from "./FilterClassComponent";
import Cart from "./CartClassComponent";
import CheckoutForm from "./CheckoutFormClassComponent";

class HomeScreen extends React.Component {

    constructor() {
        super();
        this.state = {
            products: data.products,
            cartProducts: [],
            size:"",
            sort:"",
            sizeOptions: [],
            showCheckoutForm: false,
            formData: {
                    email: "",
                    name: "",
                    adress: ""
                }
            }
    }

    extractSizeOption() {
        const arrayWithOptions = [];
        let finallArray = [];
        this.state.products.forEach(element => element.availableSizes.forEach(size => arrayWithOptions.push(size.toUpperCase())));
        finallArray = [...new Set(arrayWithOptions)]
        finallArray.push('ALL');
        this.setState({size: finallArray.sort()[0], sizeOptions: finallArray.sort()});
    }


    handleFilterProducts = (event) => {
        let size = event.target.value;
        let newProducts = [];
        if(size === 'ALL') {
            newProducts = data.products;
        } else {
            newProducts = data.products.filter(product => product.availableSizes.indexOf(event.target.value) >= 0);
        }
        this.setState({
            size, 
            products: newProducts
        });
    }

    handleSortProducts = (event) => {
        let sort = event.target.value;
        let sortedProducts = data.products.sort((a, b) => {
            if(sort === 'lowest') {
                return parseInt(a.price) - parseInt(b.price);
            } else if(sort === 'highest') {
                return parseInt(b.price) - parseInt(a.price);
            } else {
                if(a._id.toUpperCase() > b._id.toUpperCase()) {
                    return 1
                } else if (a._id.toUpperCase() < b._id.toUpperCase()) {
                    return -1
                } else {
                    return 0
                }
            }
        })
        this.setState({
            sort,
            products: sortedProducts
        })
    }

    handleAddToCart = (selectedProduct) => {
        const cartProductsLocal = [...this.state.cartProducts];
        let alreadyInCart = false;
        cartProductsLocal.forEach(item => {
            if(item._id === selectedProduct._id) {
                item.count++;
                alreadyInCart = true;
            } 
        })
        if(!alreadyInCart) {
            cartProductsLocal.push({...selectedProduct, count: 1});
        }
        this.setState({cartProducts: cartProductsLocal})
        localStorage.setItem('cartProducts', JSON.stringify(cartProductsLocal));
    }

    handleRemoveFromCart = (selectedProduct) => {

        const duplicateCartProducts = [...this.state.cartProducts];

        const selectedProductObject = this.state.cartProducts.find(item => item._id === selectedProduct._id);

        if(selectedProductObject.count > 1) {
            selectedProductObject.count = selectedProductObject.count - 1;
        } else {
            duplicateCartProducts.splice(duplicateCartProducts.indexOf(selectedProductObject), 1);
        }

        this.setState({cartProducts: duplicateCartProducts})
        localStorage.setItem('cartProducts', JSON.stringify(duplicateCartProducts));

    }

    handleCheckout = () => {
        this.setState({showCheckoutForm: true});
    }

    handleChangeForm = (event) => {
        this.setState(prevState =>({
            formData: {
                ...prevState.formData,
                [event.target.name]: event.target.value
            }
        }))
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
    }
    
    componentDidMount() {
        this.extractSizeOption();
        if(localStorage.getItem('cartProducts')) {
            this.setState({cartProducts: JSON.parse(localStorage.getItem('cartProducts'))})
        } else {
            this.setState({cartProducts: []})
        }
    }

  render() {
      return (
            <div className="grid-container">
              <header className="d-flex align-items-center">
                  <a href="/">React Shopping Cart</a>
              </header>
              <main>
                  <div className="content d-flex">
                      <div className="col-8 main">
                          <Filter 
                          count={this.state.products.length}
                          size={this.state.size}
                          sort={this.state.sort}
                          sizeOptions={this.state.sizeOptions}
                          filterProducts={this.handleFilterProducts}
                          sortProducts={this.handleSortProducts} />
                          <Products
                              products={this.state.products}
                              addToCart={this.handleAddToCart}
                         />
                      </div>
                      <div className="col-4 sidebar">
                          <Cart 
                            cartProducts={this.state.cartProducts}
                            removeFromCart={this.handleRemoveFromCart}
                            proceedToCheckout={this.handleCheckout}
                          />
                          {this.state.showCheckoutForm && this.state.cartProducts.length > 0 && 
                          <CheckoutForm 
                            formData={this.state.formData}
                            submitData={this.handleFormSubmit}
                            formChange={this.handleChangeForm}
                          />}
                      </div>
                  </div>
              </main>
              <footer className="position-fixed w-100 d-flex justify-content-center align-items-center">
                  All right is reserved.
              </footer>
          </div>
      );
  }

}

export default HomeScreen;
