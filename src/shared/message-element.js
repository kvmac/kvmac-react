import React from 'react';

export const MessageElement = ({ fill }) => {

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 24 24" class="eva eva-message-square-outline eva-animation eva-icon-hover-undefined" fill={fill}>
      <defs>
          <filter id="glow" x="-120%" y="-120%" width="400%" height="400%">
          <feOffset result="offOut" in="SourceGraphic" dx="0" dy="0"></feOffset>
          <feGaussianBlur result="blurOut" in="offOut" stdDeviation="4"></feGaussianBlur>
          <feBlend in="SourceGraphic" in2="blurOut" mode="overlay"></feBlend>
          </filter>
      </defs>
      <g filter="url(#glow)" data-name="Layer 2">
        <g data-name="message-square">
          <rect width="24" height="24" opacity="0"></rect>
          <circle cx="12" cy="11" r="1"></circle>
          <circle cx="16" cy="11" r="1"></circle>
          <circle cx="8" cy="11" r="1"></circle>
          <path d="M19 3H5a3 3 0 0 0-3 3v15a1 1 0 0 0 .51.87A1 1 0 0 0 3 22a1 1 0 0 0 .51-.14L8 19.14a1 1 0 0 1 .55-.14H19a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zm1 13a1 1 0 0 1-1 1H8.55a3 3 0 0 0-1.55.43l-3 1.8V6a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1z"></path>
        </g>
      </g>
    </svg>
  );
}