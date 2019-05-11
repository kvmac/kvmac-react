import React from 'react';

export const PulseElement = ({ fill }) => {

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 24 24" class="eva eva-activity-outline eva-animation eva-icon-hover-undefined" fill={fill || "white"}>
      {!fill ||
        <defs>
            <filter id="glow" x="-120%" y="-120%" width="400%" height="400%">
            <feOffset result="offOut" in="SourceGraphic" dx="0" dy="0"></feOffset>
            <feGaussianBlur result="blurOut" in="offOut" stdDeviation="4"></feGaussianBlur>
            <feBlend in="SourceGraphic" in2="blurOut" mode="overlay"></feBlend>
            </filter>
        </defs>
      }
      <g filter="url(#glow)" data-name="Layer 2">
        <g data-name="activity">
          <rect width="24" height="24" transform="rotate(90 12 12)" opacity="0"></rect>
          <path d="M14.33 20h-.21a2 2 0 0 1-1.76-1.58L9.68 6l-2.76 6.4A1 1 0 0 1 6 13H3a1 1 0 0 1 0-2h2.34l2.51-5.79a2 2 0 0 1 3.79.38L14.32 18l2.76-6.38A1 1 0 0 1 18 11h3a1 1 0 0 1 0 2h-2.34l-2.51 5.79A2 2 0 0 1 14.33 20z"></path>
        </g>
      </g>
    </svg>
  );
}