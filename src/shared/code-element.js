import React from 'react';

export const CodeElement = ({ isActive, fill }) => {

  return (
    <i>
      <svg xmlns="http://www.w3.org/2000/svg" className="eva eva-code-outline" width="18px" height="18px" x="-5" y="0" viewBox="0 0 24 24" fill={ isActive ? fill : "white" }>
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
          <g data-name="code">
            <rect width="24" height="24" transform="rotate(90 12 12)" opacity="0"></rect>
            <path d="M8.64 5.23a1 1 0 0 0-1.41.13l-5 6a1 1 0 0 0 0 1.27l4.83 6a1 1 0 0 0 .78.37 1 1 0 0 0 .78-1.63L4.29 12l4.48-5.36a1 1 0 0 0-.13-1.41z"></path><path d="M21.78 11.37l-4.78-6a1 1 0 0 0-1.41-.15 1 1 0 0 0-.15 1.41L19.71 12l-4.48 5.37a1 1 0 0 0 .13 1.41A1 1 0 0 0 16 19a1 1 0 0 0 .77-.36l5-6a1 1 0 0 0 .01-1.27z"></path>
          </g>
        </g>
      </svg>
    </i>
  );
}