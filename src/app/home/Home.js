import React, { Component } from 'react';

import Header from 'components/header/Header.js';

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <Header className="site-header" />
      </div>
    );
  }
}
