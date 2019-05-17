import React from 'react';
import '../styles/tooltip.css';

export const Tooltip = ({ message }) => {

    return (
        <div className="tooltip">
          <label className="message">{message}</label>
        </div>
    );
}
