import { themes } from "../db";
import React from "react";
import ColorCard from "./ColorCard";

console.log(themes);

const theme = themes[2];

const ThemeList = () => {
  return (
    <div>
      <p>{theme.name}</p>
      {theme.colors.map((theme) => (
        // <p key={theme.name}>{theme.name}</p>
        <ColorCard key={theme.name} hex={theme.value} role={theme.role} />
      ))}
    </div>
  );
};

export default ThemeList;
