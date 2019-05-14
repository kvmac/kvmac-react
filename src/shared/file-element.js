import React from 'react';

export const FileElement = ({ isActive, fill }) => {

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 24 24" fill={ isActive ? fill : "white" }>
      {!isActive ||
        <defs>
            <filter id="glow" x="-120%" y="-120%" width="400%" height="400%">
            <feOffset result="offOut" in="SourceGraphic" dx="0" dy="0"></feOffset>
            <feGaussianBlur result="blurOut" in="offOut" stdDeviation="4"></feGaussianBlur>
            <feBlend in="SourceGraphic" in2="blurOut" mode="overlay"></feBlend>
            </filter>
        </defs>
      }
      <g filter="url(#glow)" data-name="Layer 2">
        <g data-name="file-text">
          <rect width="24" height="24" opacity="0"></rect><path d="M15 16H9a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2z"></path>
          <path d="M9 14h3a1 1 0 0 0 0-2H9a1 1 0 0 0 0 2z"></path>
          <path d="M19.74 8.33l-5.44-6a1 1 0 0 0-.74-.33h-7A2.53 2.53 0 0 0 4 4.5v15A2.53 2.53 0 0 0 6.56 22h10.88A2.53 2.53 0 0 0 20 19.5V9a1 1 0 0 0-.26-.67zM14 5l2.74 3h-2a.79.79 0 0 1-.74-.85zm3.44 15H6.56a.53.53 0 0 1-.56-.5v-15a.53.53 0 0 1 .56-.5H12v3.15A2.79 2.79 0 0 0 14.71 10H18v9.5a.53.53 0 0 1-.56.5z"></path>
        </g>
      </g>
    </svg>
  );
}