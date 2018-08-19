import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import _ from 'lodash';

import LogoSquare from 'svgs/LogoSquare';
import './Footer.scss';

class Footer extends Component {
  render() {
    const {
      className,
      footerRows
    } = this.props;

    const styles = {
      gridTemplateColumns: `repeat(${_.size(footerRows)}, 1fr)`
    }

    return (
      <footer className={className}>
        <section style={styles} className={`${className}__links`}>
          {
            _.map(footerRows, (row, key) => (
              <ul key={key} className="link-list">
                <h4 className="link-list__title">{_.startCase(_.toLower(key))}</h4>
                {
                  _.map(row, (link, i) => (
                    <li key={i} className="link-list__link"><Link to={link.href}>{link.text}</Link></li>
                  ))
                }
              </ul>))
          }
        </section>
        <section className={`${className}__logo`}>
          <LogoSquare />
        </section>
        <section className={`${className}__copyright`}>
          <p>
            &copy; Bookish endeavors, llc. 2018 <br/>
            All images and content may not be <br/>
            used without permission.
          </p>
        </section>
      </footer>
    );
  }
}

export default Footer;