import React from "react";
import "./ColorCard.css";

const ColorCard = ({ hex, role }) => {
  return (
    <div className="color-card">
      <div className="color-info">
        <p className="color-role">{role}</p>
        <p className="color-hex">{hex}</p>
      </div>
      <div className="color-preview" style={{ backgroundColor: hex }}></div>
    </div>
  );
};

export default ColorCard;
