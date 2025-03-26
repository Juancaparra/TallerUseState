import React, { useState } from 'react';
import { DarkLightMode } from "../../Layout/DarkLightMode/DarkLightMode";
import { ButtonLikeDislike } from "../../Layout/ButtonLikeDislike/ButtonLikeDislike";
import { ColorGenerator } from "../../Layout/AbsolutColors/AbsolutColors";
import './Home.css';
import { SecondsCounter } from '../../Layout/SecondsCounter/SecondsCounter';

export const Home = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`StyleHome ${isDarkMode ? 'dark' : 'light'}`}>
      <h1>Bienvenido!!!!</h1>
      <DarkLightMode isDarkMode={isDarkMode} toggleMode={toggleMode} />
      <ButtonLikeDislike />
      <ColorGenerator />
      <SecondsCounter />
    </div>
  );
};