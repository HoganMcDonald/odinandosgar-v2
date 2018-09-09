import React, { Component } from 'react';
import { connect } from 'react-redux';
import Fuse from 'fuse.js';
import _ from 'lodash';

import { getProducts } from 'actions/products';
import { selectProducts, selectSearchTerms } from 'selectors';
import ProductTile from 'components/productTile/ProductTile';
import { getFirstAvailableVariant } from 'helpers';
import './ProductGrid.scss';

let lazyProducts = [];
for (let index = 0; index < 18; index++) {
  lazyProducts.push({ index });
}

const fuseOptions = {
  shouldSort: true,
  includeScore: true,
  threshold: 0.6,
  location: 0,
  distance: 100,
  maxPatternLength: 20,
  minMatchCharLength: 3,
  keys: [
    'description',
    'productType',
    'tags.value',
    'title'
  ]
};

class ProductGrid extends Component {
  state = {
    products: new Fuse(this.props.products.length > 0 ? this.props.products : lazyProducts, fuseOptions),
    collection: undefined
  };

  componentDidMount() {
    this.props.getProducts(this.props.collection);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.products !== this.props.products) {
      this.setState({
        products: new Fuse(this.props.products, fuseOptions)
      });
    }
    if (this.props.collection !== prevProps.collection) {
      this.props.getProducts(this.props.collection);
      this.setState({
        products: new Fuse(lazyProducts, fuseOptions)
      });
    }
  }

  render() {
    const filterdProducts = _.isEmpty(this.props.searchTerms)
      ? this.state.products.list
      : this.state.products.search(this.props.searchTerms).map(product => product.item)

    return (
      <section className="product-grid">
        {filterdProducts
          .map((product, i) => (
            !product.id
            ? <ProductTile
                key={i}
                index={i}
                lazy={true}
                product={product} />
            : getFirstAvailableVariant(product.variants) && 
              product.images.length > 0 &&
              <ProductTile
                key={i}
                index={i}
                lazy={false}
                product={product} />
          ))
        }
      </section>
    );
  }
}

const mapStateToProps = state => ({
  products: selectProducts(state),
  searchTerms: selectSearchTerms(state)
});

const mapDispatchToProps = dispatch => ({
  getProducts: (collection) => {
    dispatch(getProducts(collection));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductGrid);
