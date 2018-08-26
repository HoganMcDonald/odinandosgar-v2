import React, { Component } from 'react';
import classNames from 'classnames';
// import { NavLink, withRouter } from 'react-router-dom';

import delayUnmounting from 'hocs/delayUnmounting/delayUnmounting';
import './MobileNav.scss';

class MobileNav extends Component {
  className = this.props.className || 'mobile-nav';
  state = {
    isOpen: false
  }

  componentDidMount() {
    // delays setting open class until 1ms after mounting so long as isMounted is true
    setTimeout(
      () => {
        this.setState({
          isOpen: true
        });
      },
      1
    );
  }

  render() {

    return (
      <div 
        className={classNames(this.className, {
          [`${this.className}--open`]: this.props.isMounted && this.state.isOpen
        })} 
        ref={ref => this.nav = ref}>

      </div>
    );
  }
}

export default delayUnmounting(MobileNav);