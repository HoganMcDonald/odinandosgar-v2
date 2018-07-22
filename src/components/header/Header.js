import React, { Component } from 'react';
import { connect } from 'react-redux';

import { selectDeviceType } from 'selectors';
import Logo from 'svgs/Logo';
import LogoSquare from 'svgs/LogoSquare';
import './Header.scss';

class Header extends Component {
  constructor(props) {
    super(props);
  }

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
            <Logo className={`${className}__logo ${className}__logo--small`} />
          )}

          {/* navigation section */}
        </div>
      </header>
    );
  }
}

const mapStateToProps = state => ({
  deviceType: selectDeviceType(state)
});

export default connect(mapStateToProps)(Header);
