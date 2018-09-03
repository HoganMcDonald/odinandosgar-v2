import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ClampLines from 'react-clamp-lines';
import _ from 'lodash';

import { getFirstAvailableVariant, formatMoney } from 'helpers';
import './ProductTile.scss';

class ProductTile extends Component {
  render() {
    const { product, lazy } = this.props;
    const firstVariant = getFirstAvailableVariant(product.variants);

    return (
      <Link to='/shop'>
        <article className="product-tile">
          {
            lazy && 
            <div className="product-tile__content">
              <div className="product-image product-image--lazy" />
              <div className="product-title product-title--lazy h4" />
              <div className="product-price product-price--lazy h4" />
            </div>
          }

          {
            !lazy &&
            <div className="product-tile__content">
              <img src={_.get(product.images, '[0].src')} alt={_.get(product.images, '[0].alt')} className="product-image" />
              <div className="product-title" >
                <h4>
                  <ClampLines 
                    text={product.title}
                    lines='2'
                    ellipsis='...'
                    moreText={null} />
                </h4>
              </div>
              <div className="product-price" >
                <h4>{formatMoney(firstVariant.price)}</h4>
              </div>
            </div>
          }
        </article>
      </Link>
    );
  }
}

export default ProductTile;
