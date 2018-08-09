import React, { Component } from 'react';

import Header from 'components/header/Header';
import SideBar from 'components/sideBar/SideBar';
import ProductGrid from 'components/productGrid/ProductGrid';
import './Shop.scss';

class Shop extends Component {
  render() {
    return (
      <div className="page">
        <Header className="site-header" />
        <h1 className="shop-heading">Shop</h1>
        <div className="shop-container">
          <SideBar />
          <ProductGrid />
        </div>
      </div>
    );
  }
}

export default Shop;
