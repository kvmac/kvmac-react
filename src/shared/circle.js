import React from 'react';
import '../style/circle.css';

export class Circle extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { color, percent } = { ...this.props };

        return (
            <div className="circle-container">
                <svg viewBox="-5 -5 50 50" preserveAspectRatio="none" className={`chart ${color}`}>
                    <defs>
                        <filter id="cardGlow" primitiveUnits="userSpaceOnUse">
                            <feGaussianBlur stdDeviation="1" in="SourceGraphic"/>
                            <feColorMatrix type="matrix" values="0 0 0 0 .12 
                                                                0 0 0 0 .23 
                                                                0 0 0 0 .75 
                                                                0 0 0 1 0"/>
                        <feComposite operator="over" in="SourceGraphic"/>
                        </filter>     
                    </defs>
                    <path className="background-circle"
                        d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                        x="50%" y="50%"
                        />
                    <path className="circle"
                        filter="url(#cardGlow)"
                        stroke-dasharray={`${percent}, 100`}
                        d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                        x="50%" y="50%"
                        />
                    <text x="18" y="20.35" className="percentage">{percent}%</text>
                </svg>
            </div>
        );
    }
}
