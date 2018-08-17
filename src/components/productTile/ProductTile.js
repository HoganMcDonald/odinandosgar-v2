import React, { Component } from 'react';
import _ from 'lodash';

import './ProductTile.scss';

class ProductTile extends Component {
  render() {
    const { product, lazy } = this.props;

    return (
      <article className="product-tile">
        {
          lazy && 
          <div className="product-tile__content">
            <div className="product-image product-image--lazy" />
            <div className="product-title product-title--lazy" />
            <div className="product-price product-price--lazy" />
          </div>
        }

        {
          !lazy &&
          <div className="product-tile__content">
            <img src={_.get(product.images, '[0].src')} alt={_.get(product.images, '[0].alt')} className="product-image" />
            <div className="product-title" />
            <div className="product-price" />
          </div>
        }
      </article>
    );
  }
}

export default ProductTile;
