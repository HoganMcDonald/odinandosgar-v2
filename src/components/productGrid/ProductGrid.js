import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getProducts } from 'actions/products';
import { selectProducts } from 'selectors';
import './ProductGrid.scss';

class ProductGrid extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lazyProducts: new Array(18)
    };
  }

  componentDidMount() {
    if (this.props.getProducts && this.props.products.length === 0) {
      this.props.getProducts();
    }
  }
  render() {
    return (
      <section className="product-grid">
        {this.props.products &&
          this.state.lazyProducts.map((lazyProduct, i) => (
            <article key={i} className="product-tile--lazy" />
          ))}
        {this.props.products.map((product, i) => (
          <article key={i} className="product-tile" />
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
