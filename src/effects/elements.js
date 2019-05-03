import React, { useEffect } from 'react';
import { logo, cross, square, hollowSquare, hollowCircle, triangle, zigzag } from '../svg';


export function Elements({ canvas }) {
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');

    var width = canvas.width = window.innerWidth;
    var height = canvas.height = window.innerHeight;

    // Variables
    var color = '#CCCCCC';
    var maxElements = 50;
    var rads = [0.25, 0.5, 0.75, 1, 1.25, 2];
    const shapes = [cross, triangle, square, hollowCircle, zigzag, hollowSquare];

    const createSvg = (shape) => {
        let img = new Image();
        img.src = shape;
        ctx.drawImage(img, 0, 0);
    }

    for(let i = 0; i < 50; i++) {

    }

    const loopElements = () => {
        
    };
}