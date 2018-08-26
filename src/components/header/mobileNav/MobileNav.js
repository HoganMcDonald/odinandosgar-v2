import React, { Component } from 'react';
import classNames from 'classnames';
// import { NavLink, withRouter } from 'react-router-dom';

import delayUnmounting from 'hocs/delayUnmounting/delayUnmounting';
import './MobileNav.scss';

class MobileNav extends Component {
  className = this.props.className || 'mobile-nav';

  componentDidMount() {
    // this.nav.classList.add(`${this.className}--open`);
  }

  render() {

    return (
      <div 
        className={classNames(this.className, {[`${this.className}--open`]: this.props.isMounted})} 
        ref={ref => this.nav = ref}>

      </div>
    );
  }
}

export default delayUnmounting(MobileNav);