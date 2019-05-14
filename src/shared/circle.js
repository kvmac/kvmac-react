import React from 'react';
import '../styles/circle.css';

export const Circle = ({ color, percent }) => {

    return (
        <div className="circle-container">
            <svg x="50" y="50" viewBox="-50 -50 100 100" className={`chart ${color}`}>
                <defs>
                    <filter id="glow" x="-120%" y="-120%" width="400%" height="400%">
                    <feOffset result="offOut" in="SourceGraphic" dx="0" dy="0"></feOffset>
                    <feGaussianBlur result="blurOut" in="offOut" stdDeviation="4"></feGaussianBlur>
                    <feBlend in="SourceGraphic" in2="blurOut" mode="overlay"></feBlend>
                    </filter>
                </defs>
                <path className="background-circle"
                    d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                <path className="circle"
                    filter="url(#glow)"
                    strokeDasharray={`${percent}, 100`}
                    d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                <text x="18" y="20.35" className="percentage">{percent}%</text>
            </svg>
        </div>
    );
}
