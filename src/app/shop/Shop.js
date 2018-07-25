import React, { Component } from 'react';

import Header from 'components/header/Header.js';
import './Shop.scss';

class Shop extends Component {
  render() {
    return (
      <div className="page">
        <Header className="site-header" />
        <h1 className="shop-heading">Shop</h1>
        <div className="shop-container">
          <aside className="side-bar">
            <nav className="shop-filters">
              <h4>Categories</h4>
              <p>Something</p>
              <p>Something</p>
              <p>Something</p>
            </nav>
          </aside>
          <section className="product-grid" />
        </div>
      </div>
    );
  }
}

export default Shop;
