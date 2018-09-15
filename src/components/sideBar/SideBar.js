import React, { Component, PureComponent } from 'react';
import { NavLink } from 'react-router-dom'
import _ from 'lodash';
import classNames from 'classnames';

import SearchBar from './searchBar/SearchBar';
import { collections } from 'data';
import './SideBar.scss';

class ColorOptions extends PureComponent {
  colorsAvailable = (products) => {
    return Array.from(new Set(_.reduce(products, (acc, product) => {
      const color = _.find(product.options, {name: 'Color'});
      if (!_.isEmpty(color)) {
        const colors = new _.map(color.values, (colorObj) => colorObj.value);
        return [...acc, ...colors]
      }
      return acc;
    }, [])));
  }

  toggleColor(color) {
    const {
      colors,
      addColor,
      removeColor
    } = this.props;

    if (colors.includes(color)) {
      removeColor(color);
    } else {
      addColor(color);
    }
  }

  render() {
    const {
      products,
      colors
    } = this.props;

    return (
      <div className='color-options'>
        {
          _.map(this.colorsAvailable(products), (color, i) => 
            <div 
              key={i} 
              className={classNames('color-option', `color-option--${color.toLowerCase()}`, {'color-option--active': colors.includes(color)})}
              onClick={() => this.toggleColor(color)} />
          )
        }
      </div>
    );
  }
}

class SideBar extends Component {
  onChange = (value) => this.props.updateSearchTerms(value);

  render() {
    const {
      searchTerms,
      products,
      colors,
      addColor,
      removeColor
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
                  <NavLink to={collection.href} exact>{collection.text}</NavLink>
                </p>
              ))
            }
          </nav>
          <nav className="color-filters">
            <h4 className="color-filters__title">Colors</h4>
            <ColorOptions 
              products={products}
              colors={colors}
              addColor={addColor}
              removeColor={removeColor} />
          </nav>
        </div>
      </aside>
    );
  }
}

export default SideBar;
