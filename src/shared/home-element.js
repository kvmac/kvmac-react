import React from 'react';

export const HomeElement = ({ isActive, fill }) => {
  return (
    <i>
    <svg xmlns="http://www.w3.org/2000/svg" className="eva eva-home-outline" height="18px" width="18px" x="0" y="0" viewBox="0 0 24 24" fill={ isActive ? fill : "white" }>
      {!isActive ||
        <defs>
            <filter id="glow" x="-120%" y="-120%" width="400%" height="400%">
            <feOffset result="offOut" in="SourceGraphic" dx="0" dy="0"></feOffset>
            <feGaussianBlur result="blurOut" in="offOut" stdDeviation="2"></feGaussianBlur>
            <feBlend in="SourceGraphic" in2="blurOut" mode="overlay"></feBlend>
            </filter>
        </defs>
      }
      <g filter="url(#glow)" data-name="Layer 2">
        <g data-name="home">
          <rect width="24" height="24" opacity="0"></rect>
          <path d="M20.42 10.18L12.71 2.3a1 1 0 0 0-1.42 0l-7.71 7.89A2 2 0 0 0 3 11.62V20a2 2 0 0 0 1.89 2h14.22A2 2 0 0 0 21 20v-8.38a2.07 2.07 0 0 0-.58-1.44zM10 20v-6h4v6zm9 0h-3v-7a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v7H5v-8.42l7-7.15 7 7.19z"></path>
        </g>
      </g>
    </svg>
    </i>
  );
};