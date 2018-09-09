import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';

import SideBar from 'components/sideBar/SideBar';
import ProductGrid from 'components/productGrid/ProductGrid';
import { getIdFromCollectionHandle } from 'helpers';
import { selectSearchTerms } from 'selectors';
import { updateSearchTerms } from 'actions/search';
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
      match,
      searchTerms,
      updateSearchTerms
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
             />
          <ProductGrid 
            collection={getIdFromCollectionHandle(match.params.collection)}
            searchTerms={searchTerms} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  searchTerms: selectSearchTerms(state)
});

const mapDispatchToProps = dispatch => ({
  updateSearchTerms: searchTerms => {
    dispatch(updateSearchTerms(searchTerms));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Shop);;
