import React from "react";
import { themes } from "../db";
import ColorCard from "./ColorCard";
import "./ThemeDisplay.css";

const ThemeDisplay = () => {
  const theme = themes[0];
  return (
    <div className="theme-display">
      <h2 className="theme-name">{theme.name}</h2>
      <div className="theme-card-container">
        {theme.colors.map((color) => (
          <ColorCard
            key={color.hex}
            hex={color.hex}
            role={color.role}
            name={color.name}
          />
        ))}
      </div>
    </div>
  );
};

export default ThemeDisplay;
