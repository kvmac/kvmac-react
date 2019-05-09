import React from 'react';
import '../styles/divider.css';

export const Divider = ({ color }) => {

    return (
        <div className="divider">
            <svg x="50" y="50" viewBox="-50 -50 100 100" className={`chart ${color}`}>
                <defs>
                    <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                    <feOffset result="offOut" in="SourceGraphic" dx="0" dy="0"></feOffset>
                    <feGaussianBlur result="blurOut" in="offOut" stdDeviation="4"></feGaussianBlur>
                    <feBlend in="SourceGraphic" in2="blurOut" mode="overlay"></feBlend>
                    </filter>
                </defs>
                <line x1="10" y1="10" x2="100" y2="10" stroke-width="2" />
            </svg>
        </div>
    );
}
