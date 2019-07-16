import React from 'react';

export const EmailElement = ({ isActive, fill }) => {

  return (
    <i>
      <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" x="-5" viewBox="0 0 24 24"  fill={ isActive ? fill : "white"}>\
        {!isActive ||
          <defs>
              <filter id="glow" x="-120%" y="-120%" width="400%" height="400%">
              <feOffset result="offOut" in="SourceGraphic" dx="0" dy="0"></feOffset>
              <feGaussianBlur result="blurOut" in="offOut" stdDeviation="4"></feGaussianBlur>
              <feBlend in="SourceGraphic" in2="blurOut" mode="overlay"></feBlend>
              </filter>
          </defs>
        }

        <g data-name="Layer 2">
          <g filter="url(#glow)" data-name="email">
            <rect width="24" height="24" opacity="0"></rect>
            <path d="M19 4H5a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm-.67 2L12 10.75 5.67 6zM19 18H5a1 1 0 0 1-1-1V7.25l7.4 5.55a1 1 0 0 0 .6.2 1 1 0 0 0 .6-.2L20 7.25V17a1 1 0 0 1-1 1z"></path>
          </g>
        </g>
      </svg>
    </i>
  );
}
