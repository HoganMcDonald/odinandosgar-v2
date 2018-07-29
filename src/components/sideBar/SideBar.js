import React, { Component } from 'react';

import './SideBar.scss';

class SideBar extends Component {
  render() {
    return (
      <aside className="side-bar">
        <nav className="category-filters">
          <h4 className="category-filters__title">Categories</h4>
          <p className="category-filters__filter">Something</p>
          <p className="category-filters__filter">Something</p>
          <p className="category-filters__filter">Something</p>
        </nav>
      </aside>
    );
  }
}

export default SideBar;
