import React, { Component, PureComponent } from 'react';
import { NavLink } from 'react-router-dom'
import _ from 'lodash';

import SearchBar from './searchBar/SearchBar';
import { collections } from 'data';
import './SideBar.scss';

class ColorOptions extends PureComponent {
  getColorsAvailable = (products) => {
    return new Set(_.reduce(products, (acc, product) => {
      const color = _.find(product.options, {name: 'Color'});
      if (!_.isEmpty(color)) {
        const colors = new _.map(color.values, (colorObj) => colorObj.value);
        return [...acc, ...colors]
      }
      return acc;
    }, []));
  }

  render() {
    const {
      products
    } = this.props;

    return (
      <div className='color-options'>
      </div>
    );
  }
}

class SideBar extends Component {
  onChange = (value) => this.props.updateSearchTerms(value);

  render() {
    const {
      searchTerms,
      products
    } = this.props;

    return (
      <aside className="side-bar">
        <div className="filter-container">
          <SearchBar
            name="search"
            value={searchTerms}
            onChange={this.onChange} />
          <nav className="category-filters">
            <h4 className="category-filters__title">Categories</h4>
            {
              _.map(collections, (collection, i) => (
                <p key={i} className="category-filters__filter">
                  <NavLink to={collection.href}>{collection.text}</NavLink>
                </p>
              ))
            }
          </nav>
          <nav className="color-filters">
            <h4 className="color-filters__title">Colors</h4>
            <ColorOptions products={products} />
          </nav>
        </div>
      </aside>
    );
  }
}

export default SideBar;
