import { useState } from "react";
import React from "react";
import ColorCard from "./ColorCard";
import "./ThemeList.css";
import "./Theme.css";

const Theme = ({ theme }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleDetails = () => {
    setIsExpanded(!isExpanded);
  };
  //   console.log(isExpanded);

  return (
    <div>
      {/* <h1 className="color-name">{theme.name}</h1> */}
      <button className="theme-toggle" onClick={toggleDetails}>
        {theme.name}
        <span>
          {isExpanded ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="m18 15-6-6-6 6" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          )}
        </span>
      </button>

      {!isExpanded && (
        <div className="color-preview-container">
          {theme.colors.map((color) => (
            <div
              key={color.value}
              className="color-box"
              style={{ backgroundColor: color.value }}
            />
          ))}
        </div>
      )}

      {isExpanded && (
        <div>
          {theme.colors.map((color) => (
            <ColorCard key={color.value} hex={color.value} role={color.role} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Theme;
