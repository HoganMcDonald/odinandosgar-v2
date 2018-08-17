import React, { Component } from 'react';

import SideBar from 'components/sideBar/SideBar';
import ProductGrid from 'components/productGrid/ProductGrid';
import './Shop.scss';

class Shop extends Component {
  render() {
    return (
      <div className="page">
        <h1 className="shop-heading">shop</h1>
        <div className="shop-container">
          <SideBar />
          <ProductGrid />
        </div>
      </div>
    );
  }
}

export default Shop;
