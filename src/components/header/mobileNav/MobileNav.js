import React, { Component } from 'react';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

import delayUnmounting from 'hocs/delayUnmounting/delayUnmounting';
import './MobileNav.scss';

class MobileNav extends Component {
  className = this.props.className || 'mobile-nav';
  state = {
    isOpen: false
  }

  componentDidMount() {
    // delays setting open class until 1ms after mounting so long as isMounted is true
    setTimeout(
      () => {
        this.setState({
          isOpen: true
        });
      },
      1
    );
  }

  render() {
    return (
      <div 
        className={classNames(this.className, {
          [`${this.className}--open`]: this.props.isMounted && this.state.isOpen
        })} 
        ref={ref => this.nav = ref}>
        <div className={`${this.className}__nav-items`}>
          <NavLink
            to="/shop"
            className={`${this.className}__nav-item`}
            activeClassName={`${this.className}__nav-item--active`}
          >
            <h2>Shop</h2>
          </NavLink>
          <NavLink
            to="/about"
            className={`${this.className}__nav-item`}
            activeClassName={`${this.className}__nav-item--active`}
          >
            <h2>About</h2>
          </NavLink>
          <NavLink
            to="/Calendar"
            className={`${this.className}__nav-item`}
            activeClassName={`${this.className}__nav-item--active`}
          >
            <h2>Calendar</h2>
          </NavLink>
        </div>
      </div>
    );
  }
}

export default delayUnmounting(MobileNav);