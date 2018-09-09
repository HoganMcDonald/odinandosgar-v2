import React, { Component } from 'react';

import SearchBar from './searchBar/SearchBar';
import './SideBar.scss';

class SideBar extends Component {
  onChange = (value) => this.props.updateSearchTerms(value);

  render() {
    const {
      searchTerms
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
            <p className="category-filters__filter">Something</p>
            <p className="category-filters__filter">Something</p>
            <p className="category-filters__filter">Something</p>
          </nav>
        </div>
      </aside>
    );
  }
}

export default SideBar;
