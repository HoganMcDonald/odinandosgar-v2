import React, { Component } from 'react';

export default class LogoSquare extends Component {
  render() {
    const { className, fill } = this.props;

    const style = {
      fill: fill && /^#([0-9a-f]{6}|[0-9a-f]{3})$/.test(fill) ? fill : '#f9f9f9'
    };

    return (
      <svg
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="653 979 60 60"
      >
        <g id="Group_13" transform="translate(27 76)">
          <g id="Group_12" transform="translate(634.333 908.333)">
            <g id="Group_11" transform="translate(1.595)">
              <path
                id="Path_14"
                style={style}
                d="M50.1,39.21a8.4,8.4,0,1,0-8.4-8.4A8.434,8.434,0,0,0,50.1,39.21Zm0-13.071A4.667,4.667,0,1,1,45.438,30.8,4.644,4.644,0,0,1,50.1,26.138Z"
                transform="translate(-41.7 -22.4)"
              />
              <path
                id="Path_20"
                style={style}
                d="M0,0H14.952V3.762H0Z"
                transform="translate(0.833 19.19)"
              />
              <path
                id="Path_15"
                style={style}
                d="M142.588,42.981a8.009,8.009,0,0,0,12.357.238l2.69,2.69,2.69-2.69-3.452-3.429a4.871,4.871,0,0,0,.286-1.6V36.243h2.857V32.862h-6.024v4.357l-3.429-3.548a5.665,5.665,0,1,0-6.524-.571A7.307,7.307,0,0,0,142.588,42.981Zm5.119-16.31a2.083,2.083,0,0,1,0,4.167,2.083,2.083,0,0,1,0-4.167Zm-.69,8.762,5.238,5.071a4.122,4.122,0,0,1-6.476.1C144.4,38.767,145.255,36.648,147.017,35.433Z"
                transform="translate(-117.564 -22.933)"
              />
              <path
                id="Path_19"
                style={style}
                d="M0,0H14.952V3.762H0Z"
                transform="translate(23.452 45.714)"
              />
              <path
                id="Path_16"
                style={style}
                d="M145.1,150.51a8.4,8.4,0,1,0-8.4-8.4A8.434,8.434,0,0,0,145.1,150.51Zm0-13.048a4.667,4.667,0,1,1-4.667,4.667A4.644,4.644,0,0,1,145.1,137.462Z"
                transform="translate(-114.081 -107.2)"
              />
            </g>
            <path
              id="Path_17"
              style={style}
              d="M47.238,136.324h1.31V131.3L41,131.371l-.048,4.952h1.619c.024,8.31-1.619,10.6-7.571,10.214l.429,5.524c4.619.357,7.024,1.714,8.167,2.857l2.714-.024a14.165,14.165,0,0,1,7.857-3.024l.524-5.738C48.762,146.871,47.333,145.157,47.238,136.324Z"
              transform="translate(-35 -105.371)"
            />
          </g>
          <path
            id="Path_18"
            style={style}
            d="M0,0V60H60V0ZM56.119,56.119H3.881V3.881H56.143V56.119Z"
            transform="translate(626 903)"
          />
        </g>
      </svg>
    );
  }
}
