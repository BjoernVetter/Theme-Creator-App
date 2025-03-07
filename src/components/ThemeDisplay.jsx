
import React from "react";
import { theme } from "../db";
import ColorCard from "./ColorCard"; // Importiere ColorCard

const ThemeDisplay = () => {
  return (
    <div>
      <h2>{theme.name}</h2>
      <div>
        {theme.colors.map((color) => (
          <ColorCard key={color.hex} hex={color.hex} role={color.role} />
        ))}
      </div>
    </div>
  );
};

export default ThemeDisplay;
