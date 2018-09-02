import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getProducts } from 'actions/products';
import { selectProducts } from 'selectors';
import ProductTile from 'components/productTile/ProductTile';
import { getFirstAvailableVariant } from 'helpers';
import './ProductGrid.scss';

let lazyProducts = [];
for (let index = 0; index < 18; index++) {
  lazyProducts.push({ index });
}

class ProductGrid extends Component {
  state = {
    products: this.props.products.length > 0 ? this.props.products : lazyProducts
  };

  componentDidMount() {
    if (this.props.getProducts && this.props.products.length === 0) {
      this.props.getProducts();
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.products.length === 0 && this.props.products.length > 0) {
      this.setState({
        products: this.props.products
      });
    }
  }

  render() {
    return (
      <section className="product-grid">
        {this.state.products.map((product, i) => (
          !product.id
          ? <ProductTile
              key={i}
              index={i}
              lazy={true}
              product={product} />
          : getFirstAvailableVariant(product.variants) &&
            <ProductTile
              key={i}
              index={i}
              lazy={false}
              product={product} />
        ))}
      </section>
    );
  }
}

const mapStateToProps = state => ({
  products: selectProducts(state)
});

const mapDispatchToProps = dispatch => ({
  getProducts: () => {
    dispatch(getProducts());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductGrid);
