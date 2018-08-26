import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink, Link, withRouter } from 'react-router-dom';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { selectDeviceType, selectHeaderIsLarge } from 'selectors';
import Logo from 'svgs/Logo';
import LogoSquare from 'svgs/LogoSquare';
import MobileNav from './mobileNav/MobileNav';
import './Header.scss';

class Header extends Component {
  state = {
    navOpen: false
  }
  
  toggleNav = () => {
    this.setState({navOpen: !this.state.navOpen});
  }
        
  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname)
      this.setState({navOpen: false});
  }

  render() {
    const className = 'site-header';

    const isMobile =
      this.props.deviceType === 'tablet' || this.props.deviceType === 'mobile';

    const style = {
      // height: this.props.headerIsLarge && !isMobile ? '180px' : '108px'
      height: isMobile 
        ? '80px' 
        : (this.props.headerIsLarge 
          ? '180px'
          : '108px')
    };

    return (
      <header
        className={classNames(className, {
          [`${className}--large`]: this.props.headerIsLarge || isMobile,
          [`${className}--mobile`]: isMobile
        })}
        style={style}
      >
        <div className={`${className}__container`}>
          {/* logo section */}
          <Link
            to="/"
            className={classNames(`${className}__logo-link`, {
              [`${className}__logo-link--open`]:
                this.props.headerIsLarge || !isMobile
            })}
          >
            {!isMobile && (
              <Logo
                className={`${className}__logo ${className}__logo--large`}
              />
            )}
            {isMobile &&(
              <LogoSquare
                className={`${className}__logo ${className}__logo--small`}
              />
            )}
          </Link>
          {isMobile && (
            <span 
              className={classNames('mobile-nav__icon', {'mobile-nav__icon--open': this.state.navOpen})} 
              onClick={() => this.setState({navOpen: !this.state.navOpen})}>
              <FontAwesomeIcon icon="ellipsis-v" />
            </span>
          )}

          {/* navigation section */}
          {!isMobile && (
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
          )}
          <MobileNav delayTime={250} isMounted={isMobile && this.state.navOpen} />
        </div>
      </header>
    );
  }
}

const mapStateToProps = state => ({
  deviceType: selectDeviceType(state),
  headerIsLarge: selectHeaderIsLarge(state)
});

export default withRouter(connect(mapStateToProps)(Header));
