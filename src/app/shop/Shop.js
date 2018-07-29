import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from 'components/header/Header';
import SideBar from 'components/sideBar/SideBar';
import ProductGrid from 'components/productGrid/ProductGrid';
import { getProducts } from 'actions/products';
import { selectProducts } from 'selectors';
import './Shop.scss';

class Shop extends Component {
  componentDidMount() {
    if (this.props.getProducts && this.props.products.length === 0) {
      this.props.getProducts();
    }
  }

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
)(Shop);
