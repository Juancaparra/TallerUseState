import React, { useState } from 'react';
import './AbsolutColors.css';

const AbsolutColors = [
  "#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#FF00FF", "#00FFFF",
  "#000000", "#FFFFFF", "#808080", "#800000", "#808000", "#800080",
  "#008080", "#C0C0C0", "#FFA500", "#A52A2A"
];

export const ColorGenerator = () => {
  const [color, setColor] = useState('#FFFFFF');

  const generarColor = () => {
    const randomColor = AbsolutColors[Math.floor(Math.random() * AbsolutColors.length)];
    setColor(randomColor);
  };

  return (
    <div className="color-generator-container">
      <div className="color-circle" style={{ backgroundColor: color }}>
        <p style={{ color: color === '#000000' ? '#FFF' : '#000' }}>{color}</p>
      </div>
      <button className="color-generator-button" onClick={generarColor}>
        Generar Color
      </button>
    </div>
  );
};