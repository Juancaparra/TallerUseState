import React from 'react';

export const DarkLightMode = ({ isDarkMode, toggleMode }) => {
  return (
    <button onClick={toggleMode}>
      {isDarkMode ? 'Modo Light' : 'Modo Dark'}
    </button>
  );
};
