import React, { Component, Fragment } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { library } from '@fortawesome/fontawesome-svg-core';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faEllipsisV,
  faShoppingCart
} from '@fortawesome/free-solid-svg-icons';

import { Media } from 'helpers';
import Home from 'app/home/Home';
import Shop from 'app/shop/Shop';
import Header from 'components/header/Header.js';
import Footer from 'components/footer/Footer.js';
import { updateDeviceType, updateHeaderIsLarge } from 'actions/ui';
import { selectHeaderIsLarge } from 'selectors';
import { footerRows } from 'data';
import 'scss/typography.scss';

library.add(faEllipsisV);
library.add(faShoppingCart);

class App extends Component {
  calculateDeviceType() {
    if (Media.isTablet(window)) {
      this.props.updateDeviceType('tablet');
    } else if (Media.isMobile(window)) {
      this.props.updateDeviceType('mobile');
    } else {
      this.props.updateDeviceType('desktop');
    }
  }

  componentDidMount() {
    this.calculateDeviceType();

    window.addEventListener('resize', () => {
      this.calculateDeviceType();
    });

    window.addEventListener('scroll', e => {
      // if window is scrolled 10% down
      if (document.scrollingElement.scrollTop > window.innerHeight / 10) {
        // prevent state from beign updated unecessarily
        return this.props.headerIsLarge
          ? this.props.updateHeaderIsLarge(false)
          : null;
      } else {
        return this.props.headerIsLarge
          ? null
          : this.props.updateHeaderIsLarge(true);
      }
    });
  }

  componentWillUnmount() {
    window.removeEventListener('resize');
    window.removeEventListener('scroll');
  }

  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <Header className="site-header" />
          <Switch>
            <Route path="/shop/:collection" component={Shop} />
            <Route path="/shop" component={Shop} />
            <Route path="/" component={Home} />
          </Switch>
          <Footer className="site-footer" footerRows={footerRows} />
        </Fragment>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => ({
  headerIsLarge: selectHeaderIsLarge(state)
});

const mapDispatchToProps = dispatch => ({
  updateDeviceType: deviceType => {
    dispatch(updateDeviceType(deviceType));
  },
  updateHeaderIsLarge: headerIsLarge => {
    dispatch(updateHeaderIsLarge(headerIsLarge));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  undefined,
  { pure: false }
)(App);
