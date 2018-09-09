import React, { PureComponent } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class NavItems extends PureComponent {
  render() {
    const {className, isMobile} = this.props;

    return (
      <div className={`${className}__nav-items`}>
        {
          isMobile &&
          <NavLink
            to="/cart"
            className={`${className}__nav-item`}
            activeClassName={`${className}__nav-item--active`}
          >
            <FontAwesomeIcon className='h3' icon="shopping-cart" />
          </NavLink>
        }

        <NavLink
          to="/shop"
          className={`${className}__nav-item`}
          activeClassName={`${className}__nav-item--active`}
        >
          <h3>Shop</h3>
        </NavLink>
        <NavLink
          to="/about"
          className={`${className}__nav-item`}
          activeClassName={`${className}__nav-item--active`}
        >
          <h3>About</h3>
        </NavLink>
        <NavLink
          to="/Calendar"
          className={`${className}__nav-item`}
          activeClassName={`${className}__nav-item--active`}
        >
          <h3>Calendar</h3>
        </NavLink>
        
        {
          !isMobile &&
          <NavLink
            to="/cart"
            className={`${className}__nav-item`}
            activeClassName={`${className}__nav-item--active`}
          >
            <FontAwesomeIcon className='h3' icon="shopping-cart" />
          </NavLink>
        }
      </div>
    );
  }
}

export default withRouter(NavItems);