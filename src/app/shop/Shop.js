import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import queryString from 'query-string';

import SideBar from 'components/sideBar/SideBar';
import ProductGrid from 'components/productGrid/ProductGrid';
import { getIdFromCollectionHandle } from 'helpers';
import { selectSearchTerms, selectProducts, selectColors } from 'selectors';
import { updateSearchTerms } from 'actions/search';
import { addColor, removeColor } from 'actions/color';
import './Shop.scss';

class Shop extends Component {
  setUrl = (searchTerm) => {
    const search = queryString.stringify({search: searchTerm});
    this.props.history.replace({ search });
  }

  getUrl = () => {
    this.props.updateSearchTerms(_.defaultTo(_.get(queryString.parse(this.props.history.location.search), 'search'), ''));
  }

  componentDidMount() {
    this.getUrl();
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.collection !== prevProps.match.params.collection ||
      this.props.searchTerms !== prevProps.searchTerms)
      window.scroll({
        top: 0, 
        left: 0, 
        behavior: 'smooth' 
      });

    if (this.props.searchTerms !== prevProps.searchTerms) {
      this.setUrl(this.props.searchTerms);
    }
  }

  render() {
    const {
      match,
      searchTerms,
      updateSearchTerms,
      products,
      colors,
      addColor,
      removeColor
    } = this.props;

    return (
      <div className="page">
        {
          match.params.collection &&
          <h1 className="shop-heading">{_.replace(match.params.collection, /-/g, ' ')}</h1>
        }
        <div className="shop-container">
          <SideBar
            searchTerms={searchTerms}
            updateSearchTerms={updateSearchTerms}
            products={products}
            colors={colors}
            addColor={addColor}
            removeColor={removeColor} />
          <ProductGrid 
            collection={getIdFromCollectionHandle(match.params.collection)}
            searchTerms={searchTerms}
            colors={colors} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  searchTerms: selectSearchTerms(state),
  products: selectProducts(state),
  colors: selectColors(state)
});

const mapDispatchToProps = dispatch => ({
  updateSearchTerms: searchTerms => {
    dispatch(updateSearchTerms(searchTerms));
  },
  addColor: color => {
    dispatch(addColor(color))
  },
  removeColor: color => {
    dispatch(removeColor(color))
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Shop);;
