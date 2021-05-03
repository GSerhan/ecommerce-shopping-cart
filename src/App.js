import React from "react";
import data from "./data.json";
import Products from "./components/Products.jsx"
import Filter from "./components/Filter";

class App extends React.Component {

    constructor() {
        super();
        this.state = {
            products: data.products,
            size:"",
            sort:"",
        };
    }

  render() {
      return (
          <div className="grid-container">
              <header className="d-flex align-items-center">
                  <a href="/">React Shopping Cart</a>
              </header>
              <main>
                  <div className="content d-flex">
                      <div className="main">
                          <Filter count={this.state.products.length} />
                          <Products
                              products={this.state.products}
                         />
                      </div>
                      <div className="sidebar">
                          Cart items
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

export default App;
