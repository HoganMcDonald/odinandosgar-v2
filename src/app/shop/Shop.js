import React, { Component } from 'react';

import SideBar from 'components/sideBar/SideBar';
import ProductGrid from 'components/productGrid/ProductGrid';
import './Shop.scss';

class Shop extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.match.params.collection !== prevProps.match.params.collection)
      window.scroll({
        top: 0, 
        left: 0, 
        behavior: 'smooth' 
      });
  }

  render() {
    const {
      match
    } = this.props;

    return (
      <div className="page">
        {
          match.params.collection &&
          <h1 className="shop-heading">{match.params.collection}</h1>
        }
        <div className="shop-container">
          <SideBar />
          <ProductGrid />
        </div>
      </div>
    );
  }
}

export default Shop;
