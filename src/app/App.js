import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { Media } from 'helpers';
import Home from 'app/home/Home';
import { updateDeviceType, updateHeaderIsLarge } from 'actions';
import { selectHeaderIsLarge } from 'selectors';
import 'scss/typography.scss';

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
        // ternerys prevent state from beign updated unecessarily
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
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
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
