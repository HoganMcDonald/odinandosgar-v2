import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { Media } from 'helpers';
import Home from 'app/home/Home';
import { updateDeviceType } from 'actions';
import 'scss/typography.scss';

class App extends Component {
  componentDidMount() {
    window.addEventListener('resize', () => {
      if (Media.isTablet(window)) {
        this.props.updateDeviceType('tablet');
      } else if (Media.isMobile(window)) {
        this.props.updateDeviceType('mobile');
      } else {
        this.props.updateDeviceType('desktop');
      }
    });
  }

  componentWillUnmount() {
    window.removeEventListener('resize');
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/shop" component={Home} />
          <Route path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  updateDeviceType: deviceType => {
    dispatch(updateDeviceType(deviceType));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  undefined,
  { pure: false }
)(App);
