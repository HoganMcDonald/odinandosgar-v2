import React, { Component } from 'react';
import { connect } from 'react-redux';

import { bem, Media } from 'helpers';
import { selectWindowWidth } from 'selectors';
import Logo from 'svgs/Logo';
import LogoSquare from 'svgs/LogoSquare';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tabletDown: Media.isTabletDown(window)
    };
  }

  componentDidMount() {
    window.addEventListener('resize', () =>
      this.setState({
        tabletDown: Media.isTabletDown(window)
      })
    );
  }

  componentWillUnmount() {
    window.removeEventListener('resize');
  }

  render() {
    const { className } = this.props;

    const isTablet = Media.isTabletDown(window);

    return (
      <header className={bem.stringify({ block: className })}>
        {isTablet && (
          <LogoSquare
            className={bem.stringify({
              block: className,
              elem: 'logo',
              mod: 'large'
            })}
          />
        )}
        {!isTablet && (
          <Logo
            className={bem.stringify({
              block: className,
              elem: 'logo',
              mod: 'large'
            })}
          />
        )}
      </header>
    );
  }
}

const mapStateToProps = state => ({
  windowWidth: selectWindowWidth(state)
});

export default connect(mapStateToProps)(Header);
