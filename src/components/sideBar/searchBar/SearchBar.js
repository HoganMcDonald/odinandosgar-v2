import React, { Component } from 'react';
import classNames from 'classnames';
import _ from 'lodash';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './SearchBar.scss';

class SearchBar extends Component {
  state = {
    focus: false
  }

  render() {
    const {
      value,
      onChange
    } = this.props;

    const style = {
      left: _.isEmpty(value) && !this.state.focus ? '0' : 'calc(100% - 20px)'
    }

    return (
      <div className={classNames('search-bar', 'h4', {'search-bar--focus': this.state.focus})}>
        <FontAwesomeIcon 
          className={classNames('search-bar__icon', 'h4', {'search-bar__icon--focus': this.state.focus})} 
          icon="search"
          style={style} />
        <input
          type="text"
          className="search-bar__input"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => this.setState({focus: true})}
          onBlur={() => this.setState({focus: false})} />
      </div>
    );
  }
}

export default SearchBar;