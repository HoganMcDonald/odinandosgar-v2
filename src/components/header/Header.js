import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink, Link, withRouter } from 'react-router-dom';

import { selectDeviceType } from 'selectors';
import Logo from 'svgs/Logo';
import LogoSquare from 'svgs/LogoSquare';
import './Header.scss';

class Header extends Component {
  render() {
    const className = 'site-header';

    return (
      <header className={className}>
        <div className={`${className}__container`}>
          {/* logo section */}
          {(this.props.deviceType === 'tablet' ||
            this.props.deviceType === 'mobile') && (
            <LogoSquare
              className={`${className}__logo ${className}__logo--large`}
            />
          )}
          {this.props.deviceType === 'desktop' && (
            <Link to="/" className={`${className}__logo-link`}>
              <Logo
                className={`${className}__logo ${className}__logo--small`}
              />
            </Link>
          )}

          {/* navigation section */}
          <span className={`${className}__nav-items`}>
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
          </span>
        </div>
      </header>
    );
  }
}

const mapStateToProps = state => ({
  deviceType: selectDeviceType(state)
});

export default withRouter(connect(mapStateToProps)(Header));
