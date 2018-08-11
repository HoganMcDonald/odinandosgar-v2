import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getProducts } from 'actions/products';
import { selectProducts } from 'selectors';
import ProductTile from 'components/productTile/ProductTile';
import './ProductGrid.scss';

let lazyProducts = [];
for (let index = 0; index <= 18; index++) {
  lazyProducts.push({ index });
}

console.log(lazyProducts);

class ProductGrid extends Component {
  state = {
    products: lazyProducts
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
    console.log(this.state.products);
    return (
      <section className="product-grid">
        {this.state.products.map((product, i) => (
          <ProductTile
            key={i}
            index={i}
            lazy={!product.id || false}
            product={product}
          />
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
